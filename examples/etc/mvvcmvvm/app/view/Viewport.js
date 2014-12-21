Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires : ['AM.view.AppMain'],
    layout: 'fit',
    items: [
        {
            xtype: 'appmain'
        }
    ]
});