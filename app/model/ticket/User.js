Ext.define('ext5.model.ticket.User', {
    extend: 'ext5.model.ticket.Base',
    fields: [
        {
            name: 'organizationId', reference: 'Organization'
        },
        {
            name: 'projectId', reference: 'Project'
        }
    ],
    proxy: {
        type: 'jsonp',
        actionMethods: {       // #1
            read: 'GET',       // #2
            create: 'POST',    // #3
            update: 'POST',     // #4
            destroy: 'POST'  // #5
        },
        api: {                 // #6
            read: 'http://extuxgroup.com/ticket-user.do?read',
            create: '/resources/data/jsonp_success.json?create',
            update: 'http://extuxgroup.com/ticket-user.do?update',
            destroy: '/resources/data/jsonp_success.json?destroy'
        },
        writer: {
            type: 'json',
            allowSingle: false  // 배열 하나로 전달.
        },
        reader: {             // #11
            type: 'json',
            rootProperty: 'entitys'
        }
    }
});