Ext.define('ext5.model.ticket.Group', {
    extend: 'ext5.model.ticket.Base',
    fields: [
        // 1 vs 다 의 관계 설정 (Organization < Group)
        {name: 'organizationId', reference: 'Organization'},

        {name: 'userId', reference: 'User'}
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
            read: 'http://extuxgroup.com/ticket-group.do?read',
            create: '/resources/data/jsonp_success.json?create',
            update: 'http://extuxgroup.com/ticket-group.do?update',
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