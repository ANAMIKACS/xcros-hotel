const fs = require('fs');
const path = 'D:/xcross_admin/src/app/hotel/hotel-categories/hotel-categories.component.html';
let html = fs.readFileSync(path, 'utf8');

html = html.replace('<button type="submit" class="btn btn-primary">Save Category</button>', '<button type="submit" class="btn btn-primary" [disabled]="addForm.invalid">Save Category</button>');
html = html.replace('<button type="submit" class="btn btn-primary">Update Category</button>', '<button type="submit" class="btn btn-primary" [disabled]="editForm.invalid">Update Category</button>');

fs.writeFileSync(path, html);
console.log('Fixed disabled state successfully');
