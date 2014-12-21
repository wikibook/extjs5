Ext.define('dog.view.DogGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.doggrid',
    cls : 'dogs-doggrid',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            title: 'Lots of Dogs',
            store: Ext.create('dog.store.Dogs'),
            columns: this.getColumnConfig()
        });
        me.callParent(arguments);

        me.on('render', function(){
            me.store.load();
        });
        me.on('itemclick', this.dogSelectedHandler, this);


    },

    dogSelectedHandler : function(grid, record) {
        this.fireEvent('dogselected', this, record);
    },

    getColumnConfig: function () {
        return [
            {
                header: 'Name',
                dataIndex: 'name',
                flex: 1
            },
            {
                header: 'Bread',
                dataIndex: 'type',
                width: 150
            }
        ];
    }
})