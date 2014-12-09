Ext.define('ext5.view.chapter2.DynamicPanel', {
    extend: 'Ext.panel.Panel',
    requires: ['ext5.view.chapter2.RequireClass'],  // #1
    xtype : 'chapter2-dynamicloading',
    title: 'DynamicPanel',

    otherContent: [{    // #2
        type: '동적로딩 클래스',
        path: 'app/view/chapter2/RequireClass.js'
    }],

    items: [{
        xtype: 'chapter2-requireclass'  // #3
    }]
});
