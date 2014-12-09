/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ext5.Application', {
    extend: 'Ext.app.Application',

    name: 'ext5',
    requires : [
        'Ext.state.CookieProvider',
        'ext5.store.Navigation'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Root'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],
    init: function () {
        var me = this;

       Ext.create('ext5.store.Navigation', {
           storeId: 'navigation'
       });
//
        me.setDefaultToken('frame-dashboard');
//
//        Ext.setGlyphFontFamily('Pictos');
//        Ext.tip.QuickTipManager.init();
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
    }
});
