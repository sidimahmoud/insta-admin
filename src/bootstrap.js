window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Use lodash
window._ = require('lodash');
//sweetalert2
window.Swal = require('sweetalert2');