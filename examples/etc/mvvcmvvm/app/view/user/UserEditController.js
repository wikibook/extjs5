Ext.define('AM.view.user.UserEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.useredit',

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

});