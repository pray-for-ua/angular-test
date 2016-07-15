
export default app => {
    app.run(['$httpBackend','itemsService', runFn]);

    function runFn($httpBackend, itemsService) {
        $httpBackend.whenGET('/items').respond(function(method, url, data) {
            let items = itemsService.findAll();
            return [200, items, {}];
        });

        $httpBackend.whenGET(/\/items\/\d+/).respond(function(method, url, data) {
            // parse the matching URL to pull out the id (/items/:id)
            let itemid = url.split('/')[2];
            
            let item = itemsService.findOne(itemid);

            return [200, item, {}];
        });

        // this is the creation of a new resource
        $httpBackend.whenPOST('/items').respond(function(method, url, data) {
            let params = angular.fromJson(data);
            console.log('method = POST, params = \n' + JSON.stringify(params));
            let item = itemsService.addOne(params);
            
            // get the id of the new resource to populate the Location field
            let itemid = item.itemid;

            let myReturn = [201, JSON.stringify(item), { Location: '/items/' + itemid }];
            console.log('return = ' + JSON.stringify(myReturn));
            
            return [201, item, { Location: '/items/' + itemid }];
        });

        // this is the update of an existing resource (ngResource does not send PUT for update)
        $httpBackend.whenPOST(/\/items\/\d+/).respond(function(method, url, data) {
            let params = angular.fromJson(data);

            console.log('method = POST, params = \n' +  JSON.stringify(params));

            // parse the matching URL to pull out the id (/items/:id)
            let itemid = url.split('/')[2];
            
            let item = itemsService.updateOne(itemid, params);

            let myReturn = [201, JSON.stringify(item), { Location: '/items/' + itemid }];
            console.log('return = ' + JSON.stringify(myReturn));
            
            return [201, item, { Location: '/items/' + itemid }];
        });

        // this is the update of an existing resource (ngResource does not send PUT for update)
        $httpBackend.whenDELETE(/\/items\/\d+/).respond(function(method, url, data) {
            // parse the matching URL to pull out the id (/items/:id)
            let itemid = url.split('/')[2];
            
            itemsService.deleteOne(itemid);
            
            return [204, {}, {}];
        });    

        $httpBackend.whenGET(/templates\//).passThrough();
    }
};