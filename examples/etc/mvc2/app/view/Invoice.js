Ext.define("AM.view.Invoice", {
	extend : 'Ext.container.Container',
	alias : 'widget.Invoice',
//	config : {
//		client : "",
//		tax : 0.083,
//		subtotal : 0,
//		total : 0
//	},
	layout : 'border',
	config : {
		items : [{
			region : 'west',
			width : 200,
			xtype : 'departmentlist'
		},
		{
			region : 'center',
			xtype : 'userlist'
		}]
	},
	constructor : function(config) {
		console.log('생성자에서 전달받은놈들', arguments)
		var me = this;

		me.initConfig(config);
	}
//
//	applySubtotal : function(value) {
//		var me = this;
//		me.setTotal(value + value * me.getTax());
//		return value;
//	}
});