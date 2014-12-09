Ext.define('ext5.view.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',
    requires: ['ext5.view.frame.AboutWindow'],

    listen: {	// #1
        controller: {	// #2
            'main': {	// #3
                togglescreen: 'toggleScreen'	// #4
            }
        }
    },


    goDashboard : function(){
        this.redirectTo('frame-dashboard');
    },

    showAbout: function () {
        Ext.widget('aboutwindow').show();
    },
    onFullScreen: function () {
        var docElm = document.documentElement;

        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
        this.toggleScreen(true);    // #1

    },
    onOriginScreen: function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        this.toggleScreen(false);

    },
    onExit: function (button) {
    },

    toggleScreen: function (fullscreen) {
        Ext.each(Ext.ComponentQuery.query('[itemId=fullscreen]'), function (item) {
            item.setDisabled(fullscreen ? true : false);
        });
        Ext.each(Ext.ComponentQuery.query('[itemId=originscreen]'), function (item) {
            item.setDisabled(fullscreen ? false : true);
        });
    }
});
