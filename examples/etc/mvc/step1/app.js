/***
 * 변수형태와 define형태가 혼재됨.
 * 이를 one class, one file로 수정해야함.
 */
Ext.onReady(function(){
	Ext.define('Dog',{
		extend : 'Ext.data.Model',
		fields:['name','type','age','imgUrl']
	});
	
	var vp = new Ext.Viewport({
		layout:{
			type : 'hbox',
			align:'stretch'
		},
		items:[{
			xtype : 'gridpanel',
			title : 'Lots of Dogs',
			flex: 1,
			store : {
				model : 'Dog',
				autoLoad: true,
				proxy:{
					type:'ajax',
					url:'data/dogs.js',
					reader:{
						type : 'json',
						rootProperty: 'entitys'
					}
				}
			},
			columns: [{
				header : 'Name',
				dataIndex:'name',
				flex:1
			},
			{
				header:'Bread',
				dataIndex:'type',
				width:150
			}],
			listeners: {
				select: function(grid, record){
					Ext.getCmp('details')
                        .update(record.data);
				}
			}
		},
		{
			xtype : 'panel',
			flex: 1,
			title:'Selected Dog',
			id:'details',
			bodyPadding: 10,
			tpl : 	'<div>Name : {name}</div>' +
					'<div>Age : {age}</div>' +
					'<div><img src="{imgUrl}" /></div>'
		}]
	});
});