Ext.define('ext5.view.chapter3.FitLayout', {
    alias: 'widget.chapter3-fitlayout',
    extend: 'Ext.panel.Panel',
    height: 300,
    width: 300,
    padding: '5 5 5 5',
    layout: 'fit',
    items: {
        xtype: 'button',
        text: '버튼은 크기를 갖지만 부모의 레이아웃이 Fit이면 부모크기를 모두 사용합니다.'
    }
});

