Ext.define('ext5.view.main.Main', {
    extend: 'Ext.container.Viewport',	// #1
    requires: [
        'ext5.view.*'
    ],
    stateful: true,		// #1
    stateId: 'main-viewport',	// #2

    controller: 'main',	// #2
    viewModel: {
        type: 'main'	// #3
    },
    layout: 'border',	// #4
    items: [
        {
            region: 'north',	// #5
            xtype: 'frameheader'
        },
        {
            region: 'center',	// #6
            xtype: 'contentPanel',
            reference: 'contentPanel',  // #3
            dockedItems: [
                {
                    xtype: 'navigation-breadcrumb', // #4
                    reference: 'breadcrumb>'    // #5
                }
            ]

        },
        {
            xtype: 'codePreview',
            region: 'east',
            id: 'east-region',
            itemId: 'codePreview',
            stateful: true,
            stateId: 'mainnav.east',
            split: true,
            collapsible: true,
            collapsed: true,
            width: 350,
            minWidth: 100
        }
    ],
    config: {
        control: {
            '#': {								// #1
                resize: function (view, width, height, oldWidth, oldHeight) {	// #2
                    if (oldWidth > width) {					// #3
                        this.fireEvent('togglescreen', false);			// 4
                    }
                }
            }
        }
    },
    applyState: function(state) {	// #1
        this.getController().applyState(state);	// #2
    },

    getState: function() {	// #3
        return this.getController().getState();	// #4
    }

});