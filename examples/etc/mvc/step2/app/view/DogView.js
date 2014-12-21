Ext.define('dog.view.DogView',{
    extend : 'Ext.panel.Panel',
    alias : 'widget.dogview',
    cls : 'dogs-dogview',
    title: 'Selected Dog',
    bodyPadding: 10,
    tpl: '<div>Name : {name}</div>' +
        '<div>Age : {age}</div>' +
        '<div><img src="{imgUrl}" /></div>'
})