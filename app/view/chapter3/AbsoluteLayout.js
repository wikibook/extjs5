Ext.define('ext5.view.chapter3.AbsoluteLayout', {
    alias: 'widget.chapter3-absolutelayout',
    extend: 'Ext.panel.Panel',
    height: 300,
    width: 300,
    padding : '5 5 5 5',
    layout: 'absolute',             // #1
    autoScroll: true,
    border: true,
    items: [
        {
            title: '패널1',
            x: 20,                  // #2
            y: 30,                  // #3
            height: 150,            // #4
            width: 150,             // #5
            html: 'x: 20, y: 30',
            frame: true
        },
        {
            title: '패널2',
            x: 100,
            y: 100,
            anchor: '80% 80%',      // #6
            html: 'x: 100, y: 100',
            frame: true
        }

    ]
});
