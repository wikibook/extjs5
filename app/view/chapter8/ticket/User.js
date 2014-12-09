Ext.define('ext5.view.chapter8.ticket.User', {
    extend: 'Ext.panel.Panel',
    xtype : 'chapter8-ticketuser',
    margin : '5 0 5 5',
    title: 'User Info',
    width: 150,
    defaults: {
        labelWidth: 80
    },

    items: [
        {
            xtype: 'displayfield',
            fieldLabel : 'Orgname',
            bind: '{currentOrg.name}'   // #1
        },
        {
            xtype: 'displayfield',
            fieldLabel : 'Username',
            bind: '{currentUser.name}', // #2
            margin: '0 10 0 0'
        },
        {
            xtype: 'displayfield',
            fieldLabel : 'Project',
            bind: '{theProject.name}'   // #3
        }
    ]
})
