Ext.define('ext5.view.chapter4.MyCustomTabPanelStep1', {
    extend: 'Ext.Component',
    cls : 'custom-tab',
    xtype: 'chapter4-customstep1',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            html: this.setTabTpl()  // #1
        });
        me.callParent(arguments);
    },
    setTabTpl: function () {
        return new Ext.XTemplate(   // #2
            '<div class="main_dashboard">',
            '<div class="tab_bg">',
            '<ul class="dashboard_tab_menu">',
            '<li><a href="#" class="on">탭1번</a></li>',
            '<li><a href="#" class="">탭2번</a></li>',
            '<li><a href="#" class="">탭3번</a></li>',
            '<li><a href="#" class="">탭4번</a></li>',
            '</div>',
            '</div>'
        );
    }

});