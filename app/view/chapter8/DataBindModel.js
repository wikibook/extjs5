Ext.define('ext5.view.chapter8.DataBindModel', {
    extend: 'Ext.app.ViewModel', // #1
    alias: 'viewmodel.chapter8-databind', // #2
    data: {	// #3
        title: 'Hello World',
        html: 'The html content',
        buttonText: 'A button'
    }
});
