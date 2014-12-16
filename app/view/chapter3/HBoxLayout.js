Ext.define('ext5.view.chapter3.HBoxLayout', {
    alias: 'widget.chapter3-hboxlayout',
    extend: 'Ext.panel.Panel',
    title : 'Hbox Layout',
    height: 300,
    layout : {
        type : 'hbox',
        padding : 10
    },
    items : [ {
        xtype : 'panel',
        title : '첫번째 패널',
        html : '가로 100px <br>세로 200px',
        height : 200,
        width : 100
    }, {
        xtype : 'panel',
        title : '두번째 패널',
        html : '너비는 가변적이다. <br>높이 100px',
        height: 100,
        flex : 1
    }, {
        xtype : 'panel',
        title : '세번째 패널',
        html : '너비 100px <br>높이 150px',
        height: 150,
        width : 100
    } ]
});
