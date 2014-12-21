Ext.define('AM.view.user.Edit',{
	extend : 'Ext.window.Window',
	alias : 'widget.useredit',
	requires : ['Ext.form.Panel',
        'AM.view.user.UserEditController',
        'AM.view.user.UserEditModel'
    ],

    viewModel: {
        type: 'useredit'
    },
    controller: 'useredit',


    title : 'Edit User',
	layout : 'fit',
	autoShow : true,
	height : 200,
	width : 280,
	
	initComponent : function(){
		this.items = [{
			xtype : 'form',
			padding : '5 5 0 5',
			border : false,
			style : 'background-color: #fff;',
			items : [{
				xtype : 'textfield',
				name : 'name',
				fieldLabel : 'Name'
			},
			{
				xtype : 'textfield',
				name : 'email',
				fieldLabel : 'Email'
			}]
		}];
		this.buttons = [{
			text : 'Save',
			action : 'save',
            handler: 'updateUser'
		},
		{
			text : 'Cancel',
			action : 'cancel',
            handler: 'cancelEditUser'
		}];
		this.callParent(arguments);
	}
});