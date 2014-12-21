Ext.define('AM.view.user.List',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',

    requires: [
        'AM.view.user.UserListController',
        'AM.view.user.UserListModel'
    ],

    viewModel: {
        type: 'userlist'
    },
    controller: 'userlist',

    bind: {
        store: '{Users}',
        title : '{title}'
    },
    listeners: {
        itemdblclick: 'editUser'
    },
    initComponent: function() {
		var me = this;
		Ext.apply(this, {

            columns : [{
				header : 'Name',
				dataIndex : 'name',
				flex : 1
			},
			{
				header : 'Email',
				dataIndex : 'email',
				flex : 1
			}],
			tools : [{
				type : 'refresh',
				tooltip : 'Refresh',
				handler : function(){
					var pnl = this.up('userlist');
					pnl.getStore().refresh();
					pnl.setTitle('All Users');
				}
			}]
		});
		me.callParent(arguments);
			
	}
});