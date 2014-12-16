Ext.define('ext5.view.chapter8.ticket.login.LoginController', {
    extend: 'Ext.app.ViewController',   // #1
    alias: 'controller.chapter8-ticketlogin',
    requires: ['ext5.model.ticket.User'],

    onLoginClick: function() {
        var form = this.lookupReference('form');    // #1
        if (form.isValid()) {                       // #2
            Ext.getBody().mask(this.loginText);     // #3
            this.login({                            // #4
                data: form.getValues(),             // #5
                scope: this,
                success: 'onLoginSuccess',          // #6
                failure: 'onLoginFailure'           // #7
            });
        }
    },
    onLoginFailure: function() {
        // mask를 제거한다.
        Ext.getBody().unmask();
    },
    onLoginSuccess: function(user) {
        Ext.getBody().unmask();     // #1

        var org = this.lookupReference('organization').getSelectedRecord(); // #2
        this.fireViewEvent('login', this.getView(), user, org);     // #3
    },

    login: function(options) {
        Ext.Ajax.request({
            url : 'resources/data/authenticate.json',     // #1
            method: 'GET',
            params: options.data,      // #2
            scope: this,
            failure : this.onLoginFailure,  // #3
            callback: this.onLoginReturn,   // #4
            original: options
        });
    },
    onLoginReturn: function(options, success, response) {
        options = options.original;
        var resultSet;
        var user = Ext.create('ext5.model.ticket.User');

        if (success) {
            resultSet = user.getProxy().getReader().read(response);
            if (resultSet.getSuccess()) {
                Ext.callback(options.success, options.scope, [resultSet.getRecords()[0]]);
                return;
            }
        }

        Ext.callback(options.failure, options.scope, [response, resultSet]);
    }

});
