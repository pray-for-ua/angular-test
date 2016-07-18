let itemsService = function itemsServiceFn ($http) {
  var service = {
        query: function() {
            return $http.get('/items');
            
        },
        get: function(id) {
            return $http.get('/items/' + id);
        },
        // making save dual-function like default ngResource behavior (no separate update w/PUT)
        save: function(data) {
            if(angular.isDefined(data.id)) {
                return $http.post('/items/' + data.id, data);
            } else {
                return $http.post('/items', data);
            }
        },
        delete: function(id) {
            return $http.delete('/items/' + id);
        }
    };
    
    return service; 
};

itemsService.$inject = ['$http']

export default itemsService;
