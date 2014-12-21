Ext.define('AM.view.user.UserListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userlist',

    listen: {	// #1
        controller: {	// #2
            'dept': {	// #3
                departmentselected: 'deptSelected'	// #4
            }
        }
    },

    deptSelected : function(grid, model){
        this.getStore('Users').filterUsersByDepartment(model.get('code'));
    },

    editUser: function (grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();
        edit.down('form').loadRecord(record);
    }
});