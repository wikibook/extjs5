Ext.define('AM.controller.Departments',{
	extend : 'Ext.app.Controller',
	stores : ['Departments'],
	views : ['department.List'],


	init : function(){
		this.control({
			'departmentlist' : {
				itemclick : this.showDepartmentUser
			}
		});
	},





	showDepartmentUser : function(grid, model, itemEl, idx, e, eOpts){
		var app = this.application;
		app.fireEvent('departmentselected', grid, app, model);
	}



});