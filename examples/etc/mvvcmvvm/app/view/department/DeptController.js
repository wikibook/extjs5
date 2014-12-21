Ext.define('AM.view.department.DeptController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dept',

    showDepartmentUser : function(grid, model, itemEl, idx, e, eOpts){
        this.fireEvent('departmentselected', grid, model);
    }
});