Ext.define('ext5.view.chapter8.ticket.login.Login', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'ext5.view.chapter8.ticket.login.LoginModel',
        'ext5.view.chapter8.ticket.login.LoginController'
    ],
    viewModel: {
        type: 'chapter8-ticketlogin'      // #1
    },
    controller: 'chapter8-ticketlogin',   // #2
    bodyPadding: 10,
    title: 'Login - Ticket App',
    closable: false,

    cls: 'login',

    items: {
        xtype: 'form',
        reference: 'form',              // #3
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                bind: '{username}',     // #4
                fieldLabel: 'Username',
                allowBlank: false,
                enableKeyEvents: true
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false,
                enableKeyEvents: true
            },
            {
                xtype: 'combobox',
                name: 'organization',
                fieldLabel: 'Organization',
                reference: 'organization',      // #5
                queryMode: 'local',
                editable: false,
                forceSelection: true,
                displayField: 'name',
                valueField: 'id',
                bind: {
                    store: '{organizations}',   // #6
                    value: {			        // #7
                        twoWay: false,      	// #8
                        bindTo: '{defaultOrg}'   // #9
                    }
                }
            }

        ]
    },

    buttons: [
        {
            text: 'Login',
            listeners: {
                click: 'onLoginClick'   // #10
            }
        }
    ]
});
