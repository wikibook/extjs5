Ext.define('ext5.view.chapter7.CodeComboBox', {
    extend: 'Ext.form.field.ComboBox',  // #1
    xtype: 'chapter7-codecombo',                 // #2
    displayField: 'codeNm',
    valueField: 'codeCd',
    config: {               // #3
        filterFld : 'grpCd', // #4
        filterCd: 'G000',   // #5
        preload : false     // #6
    },
    initComponent: function () {
        var me = this;
        //me.initConfig();    // #7
        this.store = Ext.create('Ext.data.Store', { // #8
            autoLoad : me.preload,  // #9
            fields: ['codeNm', 'codeCd', 'grpCd', 'grpNm'],
            proxy: {
                url: '/resources/data/memberCode.json',
                type: 'ajax',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            filters: [
                {
                    property: me.getFilterFld(), // #10
                    value: me.getFilterCd() // #11
                }
            ]
        });

        me.callParent(arguments);
    }
});
