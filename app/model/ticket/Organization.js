Ext.define('ext5.model.ticket.Organization', {
    extend: 'ext5.model.ticket.Base',
    proxy: {
        type: 'jsonp',
        actionMethods: {       // #1
            read: 'GET',       // #2
            create: 'POST',    // #3
            update: 'POST',     // #4
            destroy: 'POST'  // #5
        },
        api: {                 // #6
            read: 'http://extuxgroup.com/ticket-organization.do?read',
            create: '/resources/data/jsonp_success.json?create',
            update: 'http://extuxgroup.com/ticket-organization.do?update',
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
