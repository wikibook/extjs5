Ext.define('ext5.view.chapter7.SelectionModelGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chapter7-selectionmodelgrid',        // #1
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Template',
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Action',
        'ext5.model.smpl.Order',
        'Ext.util.TaskManager'
    ],
    height: 200,
    columnLines: true,
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            selType: 'cellmodel',
            tbar: [
                {
                    xtype: 'button',
                    text: '선택된 로우 정보',
                    scope: me,
                    handler: this.selectRowInfo
                },
                '-',
                {
                    xtype: 'button',
                    text: 'Cell탐색',
                    scope: me,
                    handler: this.selectCellTour
                }
            ],
            store: {// #2
                model : 'ext5.model.smpl.Order',
                autoLoad: true
            },
            columns: this.getColumnConfig()            // #3
        });
        me.callParent(arguments);
        me.on('select', function (grid, record, index) {
            console.log('selected grid Data : ', index, record.data)
        });
        me.on('itemclick', function (grid, record, item, index) {
            console.log('itemclick grid Data : ', index, record.data)
        });
        me.on('itemdblclick', function (grid, record, item, index) {
            console.log('itemdblclick grid Data : ', index, record.data)
        });
        me.on('cellclick', function (grid, td, cellIndex, record, tr, rowIndex) {
            console.log('cellclicked grid Data : ', cellIndex, record.data)
        });
        me.on('celldblclick', function (grid, td, cellIndex, record, tr, rowIndex) {
            console.log('celldblclicked grid Data : ', cellIndex, record.data)
        });
    },

    selectCellTour: function () {
        var me = this,      // #1
            selectionModel = me.getSelectionModel(),    // #2
            columnCount = me.columns.length,            // #3
            rowCount = me.getStore().getCount(),        // #4
            colinfo = [], i;                             // #5

        for (var i = 0; i < rowCount; i++) {                 // #6
            for (var z = 0; z < columnCount; z++) {          // #7
                colinfo.push({                          // #8
                    row: i,
                    col: z
                });
            }
        }
        var i = 0;
        var task = {    // #9
            run: function () {       // #10
                if (colinfo.length <= (i + 1)) {    // #11
                    Ext.TaskManager.stop(task); // #12
                }
                selectionModel.setCurrentPosition({ // #13
                    row: colinfo[i].row,           // #14
                    column: colinfo[i].col         // #15
                });
                i++;
            },
            interval: 200    // #16
        }
        Ext.TaskManager.start(task);        // #17
    },

    selectRowInfo: function () {
        var selectionModel = this.getSelectionModel(),  // #1
            record;
        if (selectionModel.getSelection().length == 0) {  // #2
            selectionModel.select(0);                   // #3
        }
        record = selectionModel.getSelection()[0];      // #4

        console.log(record.data)
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
