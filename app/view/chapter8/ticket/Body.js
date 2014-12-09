Ext.define('ext5.view.chapter8.ticket.Body', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chapter8-ticketbody',
    width: 500,
    height: 300,

    requires: [
        'ext5.model.ticket.User',
        'ext5.model.ticket.Project',
        'ext5.view.chapter8.ticket.BodyModel',
        'ext5.view.chapter8.ticket.BodyController',
        'ext5.view.chapter8.ticket.User',
        'ext5.view.chapter8.ticket.Project',
        'ext5.view.chapter8.ticket.ProjectMember'
    ],
    viewModel: {
        type: 'chapter8-ticketbody'	    // #1
    },
    controller: 'chapter8-ticketbody',	// #2
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'chapter8-ticketuser'		// #3
        },
        {
            xtype: 'chapter8-ticketproject',
            width: 220
        },
        {
            xtype: 'chapter8-ticketpjmember',
            flex: 1
        }
    ]
});