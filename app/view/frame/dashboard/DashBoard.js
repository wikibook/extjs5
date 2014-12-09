Ext.define('ext5.view.frame.dashboard.DashBoard', {
    extend: 'Ext.container.Container',
    xtype: 'frame-dashboard',
    requires: [
        'ext5.view.frame.dashboard.RightBody',
        'ext5.view.frame.dashboard.TargetReport',
        'ext5.view.frame.dashboard.DashBoardModel',
        'ext5.view.frame.dashboard.DashBoardController'
    ],
    controller: 'dashboard',
    viewModel: {
        type : 'dashboard'
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',     				// #1
                    margin: '15 0 15 15',
                    width: 550,     					// #2
                    layout: {
                        type: 'vbox',   					// #3
                        align: 'stretch'    				// #4
                    },
                    items: [
                        {
                            xtype: 'component', 				// #5
                            height: 27,
                            cls: 'custom-container-header', 		// #6
                            html: '<ul><li class="current"><a href="#">대상</a></li></ul>' 		// #7
                        },
                        {
                            xtype: 'container', 				// #8
                            flex: 1,    					// #9
                            cls: 'custom-container-body',   		// #10
                            itemId: 'db-left',  				// #11
                            autoScroll: true,    				// #12
                            items: [
                                {
                                    xtype: 'targetreport'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'dashboard-rightbody',   			// #13
                    height: 100,
                    flex: 1 						// #14
                }
            ]
        });
        me.callParent(arguments);
    },

    onRender: function (component) {
        this.callParent(arguments);
        component.el.setStyle({     					// #16
            'background-color': 'white'
        });
    }
});
