const path = require('path');

module.exports.vendorConfig = {
    entry: {
        app: path.resolve(__dirname, 'src/app/vendor/vendor.module')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'vendor')
    }
};

module.exports.buyerConfig = {
    entry: {
        app: path.resolve(__dirname, 'src/app/buyer/buyer.module')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'buyer')
    }
};

module.exports.adminConfig = {
    entry: {
        app: path.resolve(__dirname, 'src/app/admin/admin.module')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'admin')
    }
};