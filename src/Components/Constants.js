//TODO this is a very redundent way to do this.

const baseUrl = 'https://donation-navigator-backend.herokuapp.com';
// const baseUrl = 'http://localhost:8000';

var _internal = {
    baseUrls: {
        app: baseUrl
    }
}
var constants = {
    api: {
        campaign: {
            index: function() {return `${_internal.baseUrls.app}/campaigns` },
            get: function(id) {return `${_internal.baseUrls.app}/campaigns/${id}` },
            put: function(id) {return `${_internal.baseUrls.app}/campaigns/${id}` }
        }
    }
}

export default constants