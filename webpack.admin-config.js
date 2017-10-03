const path = require('path');

module.exports =  {
    entry: {
        vendor: path.resolve(__dirname, 'src/app/admin/admin.module')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'admin')
    }
};