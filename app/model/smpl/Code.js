Ext.define('ext5.model.smpl.Code', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'cd_code',
            type: 'string'
        },
        {
            name: 'cd_desc',
            type: 'string'
        }
    ],
    proxy : {
        type : 'ajax',
        url : '/resources/data/code.json',
        reader : {             // #11
            type : 'json',
            rootProperty : 'entitys',
            totalProperty : 'totalCount'
        }
    }
});
