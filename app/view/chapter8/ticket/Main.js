Ext.define('ext5.view.chapter8.ticket.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.chapter8-ticketmain',
    width: 500,
    requires: [
        'ext5.view.chapter8.ticket.login.Login',
        'ext5.view.chapter8.ticket.Body',
        'ext5.model.ticket.Project'
    ],
    otherContent: [
        {    // #1
            type: 'Login',
            path: 'app/view/chapter8/ticket/login/Login.js'
        },
        {
            type: 'LoginController',
            path: 'app/view/chapter8/ticket/login/LoginController.js'
        },
        {
            type: 'LoginModel',
            path: 'app/view/chapter8/ticket/login/LoginModel.js'
        }
    ],
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    padding: '5 5 5 5',
                    xtype: 'component',
                    id: 'databinding'   // #2
                }
            ]
        });
        this.callParent(arguments);

        var fp = Ext.create('ext5.view.chapter8.ticket.login.Login', {     // #3
            autoShow: true, // #4
            listeners: {
                scope: this,
                login: function (loginController, user, organization) {   // #5
                    console.log('로그인 성공 : ', user, organization);	 // #6
                    Ext.create('ext5.view.chapter8.ticket.Body', {   // #1
                        renderTo : 'databinding',       // #2
                        viewModel: {    // #3
                            data: {
                                currentOrg: organization,   // #4
                                currentUser: user           // #5
                            }
                        }
                    });

                    fp.close();	// #7
                }
            }
        });
    }
});
