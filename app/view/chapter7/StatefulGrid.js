Ext.define('ext5.view.chapter7.StatefulGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid',
    title : '그리드 패널',
    collapsible: true,  // #1
    height: 200,
    padding : '5 5 5 5',
    columnLines: true,
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            store: Ext.create('Ext.data.Store', {
                fields: ['name', 'id'],
                data: [
                    {
                        name: '홍길동',
                        id: 'hong'
                    },
                    {
                        name: '이순신',
                        id: 'lee'
                    }
                ]
            }),
            columns: this.getColumnConfig()
        });
        me.callParent(arguments);
    },

    getColumnConfig: function () {
        var me = this;
        return   [
            {
                text: 'ID',
                align: 'center',
                width: 70,
                dataIndex: 'name'
            },
            {
                text: 'NAME',
                align: 'center',
                width: 80,
                dataIndex: 'id'
            }
        ];
    }
});
