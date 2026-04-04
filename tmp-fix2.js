const fs = require('fs');
const path = 'D:/xcross_admin/src/app/hotel/hotel-categories/hotel-categories.component.ts';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(
    'const path = event.base_path || event.path || \'\';',
    'const item = Array.isArray(event) ? event[0] : event;\n    const path = item?.base_path || item?.path || \'\';'
);

fs.writeFileSync(path, code);
console.log('Fixed array issue');
