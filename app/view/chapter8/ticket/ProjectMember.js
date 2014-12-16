Ext.define('ext5.view.chapter8.ticket.ProjectMember', {
    extend: 'Ext.grid.Panel',
    xtype: 'chapter8-ticketpjmember',
    margin: '5 5 5 5',
    title: 'Project Members',
    bind: {
        store: '{sortedUsers}',     // #1
        title: 'Project Members - Lead: ' // #2
    },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }
    ]
});
