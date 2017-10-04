const path = require('path');

module.exports =  {
    entry: {
        app: path.resolve(__dirname, 'src/app/buyer/buyer.module')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'buyer'),
    }
};