//TODO this is a very redundent way to do this.

var _internal = {
    baseUrls: {
        app: 'http://localhost:8000'
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