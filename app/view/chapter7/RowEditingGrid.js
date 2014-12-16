Ext.define('ext5.view.chapter7.RowEditingGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chapter7-roweditinggrid',        // #1
    requires: [
        'ext5.model.smpl.Order',
        'ext5.view.chapter7.CodeComboBox',
        'Ext.grid.plugin.RowEditing'
    ],
    width: 700,
    height: 400,

    columnLines: true,

    initComponent: function () {
        var me = this;
        var store = Ext.create('Ext.data.Store',{
            model: 'ext5.model.smpl.Order',
            pageSize:10,
            autoLoad: true
        });
        Ext.apply(this, {
            plugins: [
                {
                    ptype: 'rowediting',  // #1
                    clicksToEdit: 1  // #2
                }
            ],
            dockedItems:[{
                xtype: 'pagingtoolbar', // #1
                dock: 'bottom',         // #2
                store : store,     // #3
                displayInfo : true      // #4
            }],
            multiColumnSort: true,
            store: store,
//            store: {// #2
//                model: 'ext5.model.Order',
//                autoLoad: true
//            },
            columns: this.getColumnConfig()            // #3
        });
        me.callParent(arguments);
        me.on('beforeedit', function(editor, context){
            me.infoEdit('beforeedit', editor, context)
        });
        me.on('canceledit', function(editor, context){
            me.infoEdit('canceledit', editor, context)
        });
        me.on('edit', function(editor, context){
            me.infoEdit('edit', editor, context)
        });
        me.on('validateedit', function(editor, context){
            var newModel = context.record.copy();       // #1
            console.log('validateedit...',context.newValues, context.field, context.value)

            if(editor.ptype == 'rowediting'){   // #2
                newModel.set(context.newValues);    // #3
            }else{          // #4
                newModel.set(context.field, context.value); // #5
            }
            var errors = newModel.getValidation();   // #6
           if(!newModel.isValid()){  // #7
               console.log('검증 필드  :', context.field);
               console.log('검증 메시지  :',errors.get(context.field));
               return false;   // #8
            }
            return true;    // #9
        });
    },

    infoEdit : function(event, editor, context, e){
        var grid = context.grid,
            record = context.record,
            field = context.field,
            value = context.value,
            row = context.row,
            column = context.column,
            rowIdx = context.rowIdx,
            colIdx = context.colIdx;
        console.log(event , ':', record, field, value, rowIdx, colIdx);
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
                hidden: true,
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
                },
                editor: {
                    xtype: 'datefield', // #1
                    format: 'Y-m-d',  // #2
                    allowBlank: false
                }

            },
            {
                text: '주문금액',
                summaryType : 'sum',    //
                style: 'text-align:center',
                align: 'right',
                width: 100,
                dataIndex: 'orderAmount',
                renderer: function (value) {
                    return me.setMoney(value, 'Korea');   // #10
                },
                editor: {
                    xtype: 'numberfield',    // #3
                    step: 1000    // #4
                }

            },

            {
                text: '회원여부',
                align: 'center',
                width: 100,
                dataIndex: 'isMember',
                xtype: 'booleancolumn',
                trueText: '회원구매',
                falseText: '비회원구매',
                editor: {
                    xtype: 'chapter7-codecombo',    // #1
                    preload: true,          // #2
                    filterCd: 'G001',        // #3
                    allowBlank: false
                }
            },
            {
                text: '고객평가',
                align: 'center',
                width: 70,
                dataIndex: 'estimate',
                renderer: function (value, metaData) {
                    metaData.tdCls = 'thumb-' + value;    // #11
                    return '';
                },
                summaryType : 'count',  // #5
                summaryRenderer : function(value){
                    return '총 '+value+'건';
                },
                editor: {
                    xtype: 'chapter7-codecombo',    // #1
                    preload: true,          // #2
                    filterCd: 'G002',        // #3
                    allowBlank: false
                }
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
    },
    getDockItems: function () {
        console.log(this.store)
        return [
            {
                xtype: 'pagingtoolbar', // #1
                dock: 'bottom',         // #2
                store : this.store,     // #3
                displayInfo : true      // #4
            }
        ]
    }
});
