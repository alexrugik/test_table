const path = require('path');

module.exports =  {
    entry: {
        vendor: path.resolve(__dirname, 'src/app/buyer/buyer.module')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'buyer'),
    }
};