Ext.define('AM.view.department.List',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.departmentlist',
	
	title : 'Departments',
	store : 'Departments',
	columns : [{
		header : 'Name',
		dataIndex : 'name',
		flex : 1
	},
	{
		header : 'Location',
		dataIndex : 'location',
		flex : 1
	}]
});