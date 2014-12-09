Ext.define('ext5.view.chapter7.GroupChangeCombo', {
    extend: 'Ext.form.field.ComboBox',  // #1
    fieldLabel: '그룹변경',
    displayField: 'grpNm',
    valueField: 'grpCd',
    emptyText : '그룹핑 변경',
    editable: false,
    xtype: 'chapter7-grpchgcbx',         // #2
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.on('render', me.setStore, me);   // #3
    },

    setStore: function () {     // #4
        var me = this,
            columns = Ext.Array.clone(me.up('grid').columns),    // #5
            store = Ext.create('Ext.data.Store', {  // #6
                fields: ['grpNm', 'grpCd'],         // #7
                data: function () {                 // #8
                    Ext.Array.erase(columns, 0, 1); // #9
                    Ext.Array.erase(columns, columns.length - 1, 1);    // #10
                    var data = [];  // #11
                    Ext.each(columns, function (column, idx) {  // #12
                        data.push(  // #13
                            {
                                grpNm: column.text, // #14
                                grpCd: column.dataIndex // #15
                            }
                        );
                    });
                    return data;    // #16
                }()
            });
            this.bindStore(store);
    }
});
