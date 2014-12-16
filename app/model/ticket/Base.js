Ext.define('ext5.model.ticket.Base', {
    extend: 'Ext.data.Model',  // #1
    requires: ['Ext.data.proxy.JsonP'],
    fields: [
        {
            name: 'id',
            type: 'int'
        }
    ],

    schema: {   // #2
        namespace: 'ext5.model.ticket'     // #3
        //proxy: {
        //     type: 'jsonp',      // #4
        //     actionMethods: {
        //         read: 'GET'
        //     },
        //     api: {
        //         read: 'http://extuxgroup.com/ticket-{entityName:uncapitalize}.do?read'   // #5
        //     },
        //     reader: {            // #6
        //         type: 'json',
        //         rootProperty: 'entitys'
        //     }
        //}
    }
});
