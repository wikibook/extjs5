Ext.define('ext5.view.chapter3.FlexConfig', {
    alias: 'widget.chapter3-flexconfig',
    extend: 'Ext.container.Container',
    width: 400,     // #1
    layout : {
        type : 'hbox',  // #2
        align : 'stretchmax'    // #3
    },
    items : [ {
        xtype : 'panel',
        title : 'Panel One',
        flex : 0.5      // #4
    }, {
        xtype : 'panel',
        title : 'Panel Two',
        height : 100,   // #5
        flex : 1        // #6
    }, {
        xtype : 'panel',
        title : 'Panel Three',
        flex : 0.7  // #7
    } ]
});