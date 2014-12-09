Ext.define('ext5.model.ticket.Project', {
    extend: 'ext5.model.ticket.Base',
    fields: [
        {
            name: 'organizationId', reference: 'Organization'
        },
        {
            // 리더 아이디는 유저 정보를 참조해야한다.
            name: 'leadId',
            unique: true,       // 결과는 한건이여야 한다.
            reference: 'User'
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
            read: 'http://extuxgroup.com/ticket-project.do?read',
            create: '/resources/data/jsonp_success.json?create',
            update: 'http://extuxgroup.com/ticket-project.do?update',
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
