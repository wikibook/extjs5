Ext.define('ext5.view.chapter8.ticket.login.LoginModel', {
    extend: 'Ext.app.ViewModel',    // #1
    alias: 'viewmodel.chapter8-ticketlogin',
    requires : [
        'ext5.model.ticket.Organization'
    ],
    data: { // #2
        defaultOrg: 1,  // #3
        username: 'Don' // #4
    },
    stores: {   // #5
        organizations: {    // #6
            model: 'Organization',  // #7
            autoLoad: true, // #8
            isolated: false
        }
    }
});
