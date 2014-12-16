Ext.define('ext5.view.chapter3.BorderLayout', {
    alias: 'widget.chapter3-borderlayout',
    extend: 'Ext.container.Container',
    width: 400,
    height: 400,
    layout : 'border',          // #1
    items : [ {
        region : 'north',       // #2
        title : 'north',
        margins : 5,
        height : 100,           // #3
        xtype : 'panel'
    }, {
        title : 'West',
        region : 'west',        // #4
        margins : '0 5 0 5',
        width : 100,
        collapsible : true,     // #5
        split : true,           // #6
        titleCollapse : true    // #7
    }, {
        title : 'Center',
        region : 'center'       // #8
    }, {
        title : 'East',
        region : 'east',        // #9
        margins : '0 5 0 5',
        flex :.5,               // #10
        collapsible : true,
        collapsed : false       // #11
    }, {
        title : 'South',
        region : 'south',       // #12
        margins : '0 5 5 5',
        flex : .3,              // #13
        split : true
    } ]
});
