Ext.define('ext5.view.chapter7.BigDataGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chapter7-bigdatagrid',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.data.proxy.JsonP'
    ],


    width: 700,
    height: 280,

    columnLines: true,

    initComponent: function () {
        var me = this;
        var store = Ext.create('Ext.data.Store', {  // #1
            fields: [
                {
                    name: 'title'
                },
                {
                    name: 'forumtitle'
                },
                {
                    name: 'forumid',
                    type: 'int'
                },
                {
                    name: 'username'
                },
                {
                    name: 'replycount',
                    type: 'int'
                },
                {
                    name: 'lastpost',
                    type: 'date',
                    dateFormat: 'timestamp'
                },
                'lastposter'
            ],
            pageSize: 100,
            buffered: true,
            proxy: {
                type: 'jsonp',
                url: 'http://www.sencha.com/forum/remote_topics/index.php',
                reader: {
                    rootProperty: 'topics',
                    totalProperty: 'totalCount'
                }
            },
            autoLoad: true
        });
        Ext.apply(this, {
            plugins: [
                {
                    ptype: 'bufferedrenderer',
                    leadingBufferZone: 100,
                    trailingBufferZone: 100
                }
            ],
            dockedItems: [
                {
                    dock: 'bottom',
                    xtype: 'pagingtoolbar',     // #2
                    store: store
                },
                {
                    dock: 'top',
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'component',     // #3
                            itemId: 'status',
                            tpl: '전체 게시물 : {count}',
                            style: 'margin-left:15px'
                        }
                    ]
                }
            ],
            store: store,
            columns: this.getColumnConfig()
        });
        me.callParent(arguments);
        me.store.on('datachanged', me.onStoreSizeChange, me);  // #4
    },

    onStoreSizeChange: function () {    // #5
        this.down('#status').update({count: this.store.getTotalCount()});
    },

    getColumnConfig: function () {
        var me = this;
        return   [
            {
                xtype: 'rownumberer',
                width: 50,
                sortable: false,
                renderer: function (value, meta, record, row, col, store) {
                    // #6
                    return store.getTotalCount() - row - ((store.currentPage - 1) * store.pageSize);
                }
            },
            {
                text: "Topic",
                dataIndex: 'title',
                flex: 1,
                sortable: false
            },
            {
                text: "Author",
                dataIndex: 'username',
                width: 100,
                hidden: true,
                sortable: false
            },
            {
                text: "Replies",
                dataIndex: 'replycount',
                align: 'center',
                width: 70,
                sortable: false
            },
            {
                id: 'last',
                text: "Last Post",
                dataIndex: 'lastpost',
                width: 130,
                renderer: Ext.util.Format.dateRenderer('n/j/Y g:i A'),
                sortable: false
            }
        ];
    }
});


//Ext.define('ext5.view.chapter7.BigDataGrid', {
//	extend : 'Ext.grid.Panel',
//	alias : 'widget.chapter7-bigdatagrid',
//	requires : [ 'Ext.data.proxy.JsonP' ],
//	width : 700,
//	height : 285,
//
//	columnLines : true,
//
//	initComponent : function() {
//		var me = this;
//		var store = Ext.create('Ext.data.Store', { // #1
//			fields : [ {
//				name : 'title'
//			}, {
//				name : 'forumtitle'
//			}, {
//				name : 'forumid',
//				type : 'int'
//			}, {
//				name : 'username'
//			}, {
//				name : 'replycount',
//				type : 'int'
//			}, {
//				name : 'lastpost',
//				type : 'date',
//				dateFormat : 'timestamp'
//			}, 'lastposter' ],
//			pageSize : 100,
//			buffered : true,
//			proxy : {
//				type : 'jsonp',
//				url : 'http://www.sencha.com/forum/remote_topics/index.php',
//				reader : {
//					rootProperty : 'topics',
//					totalProperty : 'totalCount'
//				}
//			},
//			autoLoad : true
//		});
//		Ext.apply(this, {
//			plugins : [ {
//				ptype : 'bufferedrenderer',
//				leadingBufferZone : 100,
//				trailingBufferZone : 100
//			} ],
//			dockedItems : [ {
//				dock : 'bottom',
//				xtype : 'pagingtoolbar', // #2
//				store : store
//			}, {
//				dock : 'top',
//				xtype : 'toolbar',
//				items : [ {
//					xtype : 'component', // #3
//					itemId : 'status',
//					tpl : '전체 게시물 : {count}',
//					style : 'margin-left:15px'
//				} ]
//			} ],
//			store : store,
//			columns : this.getColumnConfig()
//		});
//		me.callParent(arguments);
//		me.store.on('datachanged', me.onStoreSizeChange, me); // #4
//	},
//
//	onStoreSizeChange : function() { // #5
//		this.down('#status').update({
//			count : this.store.getTotalCount()
//		});
//	},
//
//	getColumnConfig : function() {
//		var me = this;
//		return [
//            {
//                xtype : 'rownumberer',
//                width : 50,
//                sortable : false,
//                renderer : function(value, meta, record, row, col, store) {
//                    // #6
//                    return store.getTotalCount() - row
//                            - ((store.currentPage - 1) * store.pageSize);
//                }
//            }, {
//                text : "Topic",
//                dataIndex : 'title',
//                flex : 1,
//                sortable : false
//            }, {
//                text : "Author",
//                dataIndex : 'username',
//                width : 100,
//                hidden : true,
//                sortable : false
//            }, {
//                text : "Replies",
//                dataIndex : 'replycount',
//                align : 'center',
//                width : 70,
//                sortable : false
//            }, {
//                id : 'last',
//                text : "Last Post",
//                dataIndex : 'lastpost',
//                width : 130,
//                renderer : Ext.util.Format.dateRenderer('n/j/Y g:i A'),
//                sortable : false
//            }
//        ];
//	}
//});
