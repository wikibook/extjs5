Ext.define('AM.store.Departments',{
	extend : 'Ext.data.Store',
	model : 'AM.model.Department',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		api : {
			read : 'data/departments.json'
		},
		reader : {
			type : 'json',
			rootProperty : 'departments',
			successProperty : 'success'
		}
	}

});