Ext.define('ext5.view.chapter1.HelloWorld', {   // #1
    extend: 'Ext.panel.Panel',  // #2
    alias: 'widget.chapter1-helloworld',    // #3
    /*otherContent: [   // #4
         {
            type: 'Login',
            path: 'app/view/dataview/MultiSortButton.js'
         },
         {
            type: 'Data',
            path: 'resources/data/sencha-touch-examples.json'
         }
     ],*/
    title: 'Hello World',   // #5
    html: '안녕하세요 ExtJS5를 같이 배워요!!'  // #6
});
