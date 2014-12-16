Ext.define('ext5.view.chapter7.SortGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chapter7-sortgrid',        // #1
    requires: ['ext5.model.smpl.Order'],
    width: 700,
    height: 400,

    columnLines: true,

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            tbar: [
                {
                    xtype: 'button',
                    itemId: 'amountBtn',
                    text: '주문액정렬[DESC]',
                    scope: me,
                    handler: this.changeSort
                }
            ],
            multiColumnSort: true,
            store: {// #2
                model: 'ext5.model.smpl.Order',
                autoLoad: true,
                remoteSort:true,
                sorters: [ // #1
                    'customName',  // #2
                    { property: 'orderAmount', direction: 'DESC'} // #3
                ]
            },
            columns: this.getColumnConfig()            // #3
        });
        me.callParent(arguments);
    },
    changeSort: function () {
        var me = this;
        me.getStore().getSorters().each(function (sort) {  // #1
            sort = sort.config;
            if (sort.property == 'orderAmount') {  // #2
                var direction = (sort.direction == 'ASC') ? 'DESC' : 'ASC'; // #3
                me.down('button[itemId=amountBtn]').setText('주문액정렬[' + direction + ']'); // #4
                me.getStore().sort([ // #5
                    { property: 'orderAmount', direction: direction } // #5
                ]);
            }
        })
    },

    getColumnConfig: function () {
        var me = this;
        return   [
            {
                xtype: 'rownumberer'
            },
            {
                text: '주문지역',
                align: 'center',
                width: 100,
                dataIndex: 'areaNm'
            },
            {
                text: '주문자',
                align: 'center',
                width: 70,
                dataIndex: 'customName',
                renderer: function (value) {
                    return value + '님';     // #1
                }
            },
            {
                text: '주문일자',
                align: 'center',
                //                xtype: 'datecolumn',   // #2
                //                format: 'Y.m.d',       // #3
                width: 100,
                dataIndex: 'orderDate',
                renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
//                    console.log()
                    if ((rowIndex % 2) == 0) {  // #4
                        metaData.align = 'left';    // #5
                        metaData.style = 'color:red';  // #6
                    } else {
                        metaData.align = 'right';
                        metaData.style = 'color:blue';
                    }
                    return Ext.util.Format.date(value, 'Y-m-d');    // #7
                }
            },
            {
                text: '주문금액',
                //                xtype: 'numbercolumn',  // #8
                //                format: '0,000',        // #9
                style: 'text-align:center',
                align: 'right',
                width: 100,
                dataIndex: 'orderAmount',
                renderer: function (value) {
                    return this.setMoney(value, 'Korea');   // #10
                }
            },
            {
                text: '주문수량',
                style: 'text-align:center',
                align: 'right',
                width: 60,
                dataIndex: 'orderCnt'
            },
            {
                text: '주문내역',
                style: 'text-align:center',
                width: 200,
                flex: 1,
                dataIndex: 'orderDesc',
                xtype: 'templatecolumn',
                tpl: ['{orderDesc} >><br><tpl for="orderDetail">',
                    '상품번호: {detailNo}  상품명:{detailDesc}<br>',
                    '</tpl>']
            },
            {
                text: '고객평가',
                align: 'center',
                width: 70,
                dataIndex: 'estimate',
                renderer: function (value, metaData) {
                    metaData.tdCls = 'thumb-' + value;    // #11
                    return '';
                }
            },
            {
                text: '누적금액',
                style: 'text-align:center',
                align: 'right',
                flex: 1,
                name: 'accrueAmount',
                dataIndex: 'accrueAmount',
                renderer: function (value) {
                    return this.setMoney(value, 'Korea');   // #12
                }
            },
            {
                text: '회원여부',
                align: 'center',
                width: 100,
                dataIndex: 'isMember',
                xtype: 'booleancolumn',
                trueText: '회원구매',
                falseText: '비회원구매'
            },
            {
                xtype: 'actioncolumn',      // #13
                text: '주문변경',
                align: 'center',
                width: 100,
                tdCls: 'my-action-col-cell',  // #14
                items: [                   // #15
                    {
                        icon: '/resources/images/Save.png',
                        handler: function () {
                            alert('update')
                        }
                    },
                    {
                        icon: '/resources/images/Schedule.png',
                        handler: function () {
                            alert('delete')
                        }
                    }
                ]
            }
        ];
    },
    /**
     * 국가 코드에 맞는 통화형식을 설정한다.
     * @param value
     * @param nation
     */
    setMoney: function (value, nation) {    // #13
        if (nation == 'Korea')
            nation = '￦';
        else if (nation == 'US')
            nation = '$';
        else if (nation == 'EU')
            nation = '€';
        else if (nation == 'UK')
            nation = '￡';
        else if (nation == 'JP')
            nation = '￥';
        return Ext.util.Format.currency(value, nation, 0); // #14
    }
});
