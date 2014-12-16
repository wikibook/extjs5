Ext.define('ext5.view.chapter6.WindowPicker', {
    extend: 'Ext.window.Window',
    xtype: 'chapter6-windowpicker',
    requires: ['ext5.view.chapter6.GridPicker'],
    closeAction: 'hide',
    height: 200,
    width: 400,
    layout: 'fit',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            items: {
                xtype: 'chapter6-gridpicker',
                floating: false,   // #1
                border: false,
                listeners: {
                    select: function (grid, record) {    // #2
                        me.fireEvent('select', grid, record)    // #3
                    }
                }
            }
        });
        me.callParent(arguments);
    }
});
