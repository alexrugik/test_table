const path = require('path');

module.exports = {
    entry: {
        vendor: path.resolve(__dirname, 'src/app/vendor/vendor.module')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'vendor'),
    }
};