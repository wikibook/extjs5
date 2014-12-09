Ext.define('ext5.view.chapter8.ticket.Project', {
    extend: 'Ext.panel.Panel',
    xtype : 'chapter8-ticketproject',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'grid',
            margin : '5 5 5 5',
            flex: 1,
            title: 'Projects',
            reference: 'projects',  			// #1
            selModel: {
                listeners: {
                    selectionchange: 'onProjectSelect'	// #2
                }
            },
            bind: {					// #3
                store: '{currentOrg.projects}',		// #4
                selection: {				// #5
                    bindTo: '{currentUser.project}',       	// #6
                    single: true
                }
            },
            columns: [
                {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1
                }
            ]
        },
        {
            xtype: 'form',
            title: '프로젝트 정보',
            margin : '5 5 5 5',
            reference :'form',			// #7
            buttons: [{
                text: 'Save',
                handler: 'projectSave'		// #8
            }],
            defaults: {
                width: 200,
                labelWidth: 50
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Id',
                    bind: '{theProject.id}'		// #1
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    bind: '{theProject.name}'		// #2
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Leader',
                    bind: '{theProject.lead.name}'	// #3
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Org',
                    bind: '{theProject.organization.name}'	// #4
                }
            ]
        }
    ]
});