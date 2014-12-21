Ext.define('AM.view.AppMain', {
    extend: 'Ext.container.Container',
    alias: 'widget.appmain',
    requires: ['AM.view.department.List',
               'AM.view.user.List'],
    layout: 'border',
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    region: 'west',
                    width: 200,
                    html: '왼쪽',
                    split: true,
                    collapsible: true,
                    xtype: 'departmentlist'
                },
                {
                    region: 'center',
                    html: '오른쪽',
                    xtype: 'userlist'
                }
            ]
        });
        this.callParent(arguments);
    },
    showDepartmentUser: function (grid, model, itemEl, idx, e, eOpts) {
        var app = this.application;

        console.log(this.getController('AM.controller.Users'))
        app.fireEvent('departmentselected', app, model);
    }
});