Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users'],
    views: ['user.Edit', 'user.List'],
    models: ['User'],
    refs: [
        {
            ref: 'usersList',
            selector: 'userlist'
        }
    ],

    getUserModel: function () {
        return this.getModel("User");
    },

    init: function (app) {
        this.control({
            'userlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'useredit button[action=cancel]': {
                click: this.cancelEditUser
            }
        });

        app.on('departmentselected', function (grid, app, model) {
            this.getStore('Users').filterUsersByDepartment(model.get('code'));
        }, this);

    },

    editUser: function (grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();
        edit.down('form').loadRecord(record);
    },

    updateUser: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
    },

    cancelEditUser: function (button) {
        var win = button.up('window');
        win.close();
    }

})