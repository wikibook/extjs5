Ext.define('ext5.view.chapter7.ColumnsGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chapter7-columnsgrid',
    requires: [
        'ext5.model.smpl.Order',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.column.Template',
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Action'
    ],
    height: 200,
    columnLines: true,
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            store: {
                model : 'ext5.model.smpl.Order',
                autoLoad: true
            },
            columns: this.getColumnConfig()
        });
        me.callParent(arguments);
    },

    getColumnConfig: function () {
        var me = this;
        return   [
            {
                xtype: 'rownumberer'    // #1
            },
            {
                text: '주문자',
                align: 'center',
                width: 70,
                dataIndex: 'customName'
            },
            {
                text: '주문일자',
                align: 'center',
                xtype: 'datecolumn',   // #2
                format: 'Y.m.d',       // #3
                width: 80,
                dataIndex: 'orderDate'
            },
            {
                text: '주문금액',
                xtype: 'numbercolumn',  // #4
                format: '0,000',        // #5
                style: 'text-align:center',
                align: 'right',
                width: 100,
                dataIndex: 'orderAmount'
            },
            {
                text: '주문내역',
                style: 'text-align:center',
                width: 200,
                flex: 1,
//                dataIndex: 'orderDesc', // #6
                xtype: 'templatecolumn',    // #7
                tpl: ['{orderDesc} >><br><tpl for="orderDetail">',
                    '상품번호: {detailNo}  상품명:{detailDesc}<br>', // #8
                    '</tpl>']
            },
            {
                text: '누적금액',
                style: 'text-align:center',
                align: 'right',
                width: 100,
                dataIndex: 'accrueAmount'
            },
            {
                text: '회원여부',
                align: 'center',
                width: 70,
                dataIndex: 'isMember',
                xtype: 'booleancolumn',     // #9
//                xtype: 'checkcolumn',     // #10
                trueText: '회원구매',           // #11
                falseText: '비회원구매'          // #12
            },
            {
                xtype: 'actioncolumn',      // #13
                text: '주문변경',
                align:'center',
                width: 100,
                tdCls : 'my-action-col-cell',  // #14
                items: [                   // #15
                    {
                        icon: '/resources/images/Save.png',
                        handler: function () {
                            alert('update')
                        }
                    },
                    {
                        icon : '/resources/images/Schedule.png',
                        handler: function(){
                            alert('delete')
                        }
                    }
                ]
            }
        ];
    }

});
