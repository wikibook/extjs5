Ext.define('ext5.view.CodePreview', {
    extend: 'Ext.tab.Panel',
    requires: [
        'ext5.view.CodeContent'
    ],

    xtype: 'codePreview',

    bodyPadding: 5,
    bodyStyle: 'direction: ltr;',

    tools: [{
        type: 'maximize',
        tooltip: 'Maximize example code content'
    }],
    showTitle: true,

    initComponent: function() {
        if (this.showTitle) {
            this.title = 'Details';
        }
        this.callParent(arguments);
    }
});
