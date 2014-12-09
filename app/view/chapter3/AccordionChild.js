Ext.define('ext5.view.chapter3.AccordionChild', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter3-accordionchild',
    initComponent: function () {
        this.callParent(arguments);
        this.on('expand', function (expandPanel) {        	// #1
            console.log('열린 패널은 :', this.title);		// #2
        })
    }
});