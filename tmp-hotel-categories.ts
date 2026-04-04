import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hotel-categories',
  templateUrl: './hotel-categories.component.html',
  styleUrls: ['./hotel-categories.component.scss']
})
export class HotelCategoriesComponent implements OnInit {
  baseurl = environment.baseurl + '/hotel/categories';
  img_uploaded_url: string = environment?.aws_url;
  img_uploaded_url_ext: string = environment?.aws_url_ext;

  @ViewChild('addModal', { static: true }) addModal: TemplateRef<any>;
  @ViewChild('editModal', { static: true }) editModal: TemplateRef<any>;
  @ViewChild('media', { static: true }) media: TemplateRef<any>;
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: any = { pagingType: 'full_numbers', pageLength: 10, order: [], destroy: true };

  datalist: any[] = [];
  addForm: FormGroup;
  editForm: FormGroup;
  editingId: string;
  selectedImageControl: string = '';
  activeModal: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.fetchData();
  }

  initForms() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      icon: [''],
    });
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      icon: [''],
    });
  }

  fetchData() {
    this.http.get(this.baseurl).subscribe({
      next: (res: any) => {
        this.datalist = res.data || res;
        if (this.dtElement?.dtInstance) {
          this.dtElement.dtInstance.then((dt: any) => { dt.destroy(); this.dtTrigger.next(null); });
        } else {
          this.dtTrigger.next(null);
        }
      },
      error: () => this.toastr.error('Failed to load categories')
    });
  }

  getImageUrl(path: string): string {
    if (!path) return 'images/starter.png';
    if (path.startsWith('http')) return path;
    return this.img_uploaded_url + path + this.img_uploaded_url_ext;
  }

  // ─── ADD ─────────────────────────────────────
  openAdd() {
    this.addForm.reset({ name: '', image: '', icon: '' });
    this.activeModal = this.modalService.open(this.addModal, { size: 'lg' });
  }

  submitAdd() {
    if (this.addForm.invalid) { this.addForm.markAllAsTouched(); return; }
    this.http.post(this.baseurl, this.addForm.value).subscribe({
      next: () => {
        this.toastr.success('Category added');
        this.activeModal.close();
        this.fetchData();
      },
      error: (e) => this.toastr.error(e?.error?.message || 'Failed to add')
    });
  }

  // ─── EDIT ────────────────────────────────────
  openEdit(item: any) {
    this.editingId = item._id;
    this.editForm.patchValue({ name: item.name, image: item.image, icon: item.icon });
    this.activeModal = this.modalService.open(this.editModal, { size: 'lg' });
  }

  submitEdit() {
    if (this.editForm.invalid) { this.editForm.markAllAsTouched(); return; }
    this.http.put(`${this.baseurl}/${this.editingId}`, this.editForm.value).subscribe({
      next: () => {
        this.toastr.success('Category updated');
        this.activeModal.close();
        this.fetchData();
      },
      error: (e) => this.toastr.error(e?.error?.message || 'Failed to update')
    });
  }

  // ─── DELETE ──────────────────────────────────
  delete(id: string) {
    Swal.fire({ title: 'Delete?', text: 'This cannot be undone.', icon: 'warning',
      showCancelButton: true, confirmButtonText: 'Delete', confirmButtonColor: '#d33' })
      .then(r => {
        if (r.isConfirmed) {
          this.http.delete(`${this.baseurl}/${id}`).subscribe({
            next: () => { Swal.fire('Deleted', '', 'success'); this.fetchData(); },
            error: () => this.toastr.error('Failed to delete')
          });
        }
      });
  }

  // ─── MEDIA ──────────────────────────────────
  openMedia(target: 'add' | 'edit') {
    this.selectedImageControl = target;
    this.modalService.open(this.media, { size: 'xl' });
  }

  getSelectedImgs(event: any) {
    const path = event.base_path || event.path || '';
    if (this.selectedImageControl === 'add') this.addForm.patchValue({ image: path });
    else this.editForm.patchValue({ image: path });
    this.modalService.dismissAll();
  }
}
