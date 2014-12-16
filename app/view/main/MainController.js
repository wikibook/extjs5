Ext.define('ext5.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    config: {
        control: {
            /***
             * *는 모든 컴포넌트
             * #은 자기 뷰.
             */
            '#': {
                resize: function (view, width, height, oldWidth, oldHeight) {
                    if (oldWidth > width) {
                        this.fireEvent('togglescreen', false);
                    }
                }
            }
        }
    },

    showBreadcrumbNav: function () {
        var refs = this.getReferences(),
            breadcrumbNav = refs.breadcrumb,
            treeNav = refs.tree,
            selection = treeNav.getSelectionModel().getSelection()[0];  // #1

        if (breadcrumbNav) {    // #2
            breadcrumbNav.show();   // #3
        } else {
            refs.contentPanel.addDocked({   // #4
                xtype: 'navigation-breadcrumb',
                selection: selection    // #5
            });
        }

        refs['breadcrumb.toolbar'].setSelection(selection); // #6

        treeNav.hide(); // #7
        refs.contentPanel.getHeader().hide();   // #8

        this._hasTreeNav = false;   // #1
        this.getView().saveState();  // #2
    },

    showTreeNav: function () {
        var refs = this.getReferences(),    // #1
            treeNav = refs.tree,    // #2
            breadcrumbNav = refs.breadcrumb;    // #3

        if (treeNav) {    // #4
            treeNav.show(); // #5
        } else { // #6
            treeNav = this.getView().add({  // #7
                region: 'west', // #8
                reference: 'tree',  // #9
                xtype: 'navigation-tree'    // #10
            });
        }
        treeNav.getSelectionModel().select([    // #11
            refs['breadcrumb.toolbar'].getSelection()   // #12
        ]);

        breadcrumbNav.hide();   // #13
        refs.contentPanel.getHeader().show();  // #14
        this._hasTreeNav = true;    // #3
        this.getView().saveState();  // #4
    },

    applyState: function(state) {   			// #1
        if (state.hasTreeNav) {     			// #2
            this.getView().add({    			// #3
                region: 'west',     			// #4
                reference: 'tree',  			// #5
                xtype: 'navigation-tree'    		// #6
            });
            var refs = this.getReferences();    		// #7
            refs.breadcrumb.hide(); 			// #8
            refs.contentPanel.header.hidden = false;    // #9
            this._hasTreeNav = true;    		// #10
        } else {
            this._hasTreeNav = false;   		// #11
        }
    },

    getState: function() {
        return {    					// #12
            hasTreeNav: this._hasTreeNav    		// #13
        };
    }

});
