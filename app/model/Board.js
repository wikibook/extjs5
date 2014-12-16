Ext.define('ext5.model.Board', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.*'
    ],
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'userName',
            type: 'string'
        },
        {
            name: 'role',
            type: 'string'
        },
        {
            name: 'content',
            type: 'string'
        },
        {
            name: 'createDate',
            type: 'date',
            dateFormat: 'Y.m.d'
        },
        {
            name: 'updateDate',
            type: 'date',
            dateFormat: 'Y.m.d'
        },
        {
            name: 'readCnt',
            type: 'int'
        },
        {
            name: 'deleteYn',
            type: 'boolean',
            defaultValue: false
        }
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {       // #1
            read: 'GET',       // #2
            create: 'POST',    // #3
            update: 'POST',   // #4
            destroy: 'POST'   // #5
        },
        api: {                 // #6
            read: '/resources/data/boards.json?read',      // #7
            create: '/resources/data/boards.json?create',    // #8
            update: '/resources/data/boards.json?update',    // #9
            destroy: '/resources/data/boards.json?destroy'    // #10
        },
        reader: {             // #11
            type: 'json',
            rootProperty: 'entitys'
        }
    },

    validators: {
        title: 'presence',        // #1
        content: {
            type: 'length', min: 2, max: 10 //#2
        },
        deleteYn: {
            type: 'inclusion', list: [true, false]  // #3
        },
        role: [
            {   type: 'exclusion', list: ['Admin', 'Manager']} // #4
        ],
        userName: {
            type: 'format', matcher: /^[ㄱ-힣"'\\{\\}\s]+$/   // #5
        }
    }
});