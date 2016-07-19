import _ from 'lodash';

let ServerDataModelService = function ServerDataModelServiceFn () {
  this.data = [
        {
            id: 1,
            name: "Tech",
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
            email: 'ddd@ddd'
        },
        {
            id: 2,
            name: "State",
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
            email: 'fff@fff'
        },
        {
            id: 3,
            name: "College",
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
            email: 'ddd@ggg'
        }        
    ];
    
    this.getData = function() {
        return this.data;
    };
    
    this.setData = function(data) {
        this.data = data;
    };
   
    this.findOne = function(id) {
        // find the item that matches that id
        var list = _.find(this.getData(), function(element, index) {
            return (element.id == id);
        });
        if(!list) {
            return {};
        }
        // even if list contains multiple items, just return first one
        return list;
    };
   
    this.findAll = function() {
        return this.getData();
    };

    this.searchItems = function(searchParams) {
        console.log(searchParams);
        let list = _.map(this.getData(), (obj) => {
            return _.mapKeys(obj, (value) => {
                if (_.isString(value) && value.search(`/${this.keywords}/i`) !== -1) {
                    console.log(this.keywords)
                    return obj;
                }
            });
        });
    };
    
    // options parameter is an object with key value pairs
    // in this simple implementation, value is limited to a single value (no arrays)
    this.findMany = function(options) {
        // find items that match all of the options
        var list = $.grep(this.getData(), function(element, index) {
            var matchAll = true;
            $.each(options, function(optionKey, optionValue) {
                if(element[optionKey] != optionValue) {
                    matchAll = false;
                    return false;
                }
            });
            return matchAll;
        });        
    };
    
    // add a new data item that does not exist already
    // must compute a new unique id and backfill in
    this.addOne = function(dataItem) {
        // must calculate a unique ID to add the new data
        var newId = this.newId();
        dataItem.id = newId;
        this.data.push(dataItem);
        return dataItem;
    };
    
    // return an id to insert a new data item at
    this.newId = function() {
        // since id is numeric, and we will treat like an autoincrement field, find max
        var maxIdObj = _.maxBy(this.getData(), 'id');
        return maxIdObj.id + 1;
    };
    
    this.updateOne = function(id, dataItem) {
        // find the item that matches that id
        var items = this.getData();
        var match = null;
        for (var i=0; i < items.length; i++) {
            if(items[i].id == id) {
                match = items[i];
                break;
            }
        }
        if(!angular.isObject(match)) {
            return {};
        }
        angular.extend(match, dataItem);
        return match;
    };
    
    this.deleteOne = function(id) {
        // find the item that matches that id
        var items = this.getData();
        var match = false;
        for (var i=0; i < items.length; i++) {
            if(items[i].id == id) {
                match = true;
                items.splice(i, 1);
                break;
            }
        }
        return match;
    };
    return this;
};

export default ServerDataModelService;
