Ext.define('ext5.view.chapter4.CustomTab', {
    extend: 'Ext.Component',
    alias: 'widget.chapter4-customtab',

    onRender: function () {
        this.callParent(arguments);
        Ext.core.DomHelper.append(this.getEl(),
            '<div class="main_dashboard">' +
                '<div class="tab_bg">' +
                '<ul class="dashboard_tab_menu" id="ulroot">' +
                '</ul>' +
                '</div>' +
                '</div>'
        );
        this.setTabMenu();
    },

    setTabMenu: function () {
        var root = this.el.select('.dashboard_tab_menu').first();			// #1
        var html = '<li><a href="#" tabidx="{tabIdx}" class="{tabCls}">{tabName}</a></li>'; // #2
        var tpl = Ext.DomHelper.createTemplate(html);				// #3

        Ext.Ajax.request({							// #4
            url: "../../resources/data/tablist.json",							// #5
            method: "GET",
            success: function (result, request) {
                var obj = Ext.JSON.decode(result.responseText);			// #6
                Ext.each(obj.entitys, function (tabData) {			// #7
                    tpl.append(root, tabData);					// #8
                })
            },
            failure: function (result, request) {
                Ext.Msg.alert("Failed", result.responseText);
            }
        });
    },

    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        this.on('afterrender', function () {
            this.el.on("click", function (eventObject, htmlElement) {
                eventObject.preventDefault();  // or eventObject.stopEvent();
                Ext.select('.dashboard_tab_menu li a').removeCls('on');
                Ext.get(htmlElement).addCls("on");

                var idx = Ext.get(htmlElement).getAttribute('tabidx');
                me.fireEvent('tabselect', idx);
            }, this, {
                delegate: "a"
            });

            this.el.on("contextmenu", function (eventObject, htmlElement) {		// #1
                var menu = Ext.create('Ext.menu.Menu', {				// #2
                    items: [
                        {
                            xtype: 'menuitem',					// #3
                            text: '삭제',
                            scope: me,
                            handler: function () {					// #4
                                this.destroyTabMenu(htmlElement)			// #5
                            }
                        },
                        {
                            xtype: 'menuitem',
                            text: '이전에 추가',
                            scope: me,
                            handler: function () {
                                this.insertBeforeTabMenu(htmlElement)
                            }
                        },
                        {
                            xtype: 'menuitem',
                            text: '이후에 추가',
                            scope: me,
                            handler: function () {
                                this.insertAfterTabMenu(htmlElement)
                            }
                        }
                    ]
                });
                eventObject.stopEvent();						// #6
                menu.showBy(htmlElement);					// #7
            }, this, {
                delegate: "a",
                preventDefault: true
            });
        });
    },

    insertBeforeTabMenu: function (htmlElement) {
        var root = this.el.select('.dashboard_tab_menu').first();		// #1
        var insertBefore = Ext.get(htmlElement).up('li');			// #2

        root.createChild('<li><a href="#" tabIdx="0" class="">이전 추가.</a></li>', insertBefore, true);						// #3
        //Ext.DomHelper.insertBefore(insertBefore, '<li><a href="#" tabIdx="0" class="">이전 추가.</a></li>');							// #4
    },

    insertAfterTabMenu: function (htmlElement) {
        var insertAfter = Ext.get(htmlElement).up('li');		// #1
        Ext.DomHelper.insertAfter(insertAfter, '<li><a href="#" tabIdx="0" class="">이후에 추가.</a></li>');					// #2
    },

    destroyTabMenu: function (htmlElement) {
        Ext.get(htmlElement).destroy();				// #1
    }
});