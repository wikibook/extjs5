Ext.define('AM.store.Users',{
	extend : 'Ext.data.Store',
	model : 'AM.model.User',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		api : {
			read : 'data/users.json'
		},
		reader : {
			type : 'json',
            rootProperty : 'users',
			successProperty : 'success'
		}
	},
	
	filterUsersByDepartment : function(deptCode){
		this.clearFilter();
		this.filter([{
			property : 'department',
			value : deptCode
		}]);
	},
	
	refresh : function(){
		this.clearFilter();
	}

});