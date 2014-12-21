Ext.define('dog.store.Dogs', {
    extend : 'Ext.data.Store',
    model : 'dog.model.Dog',
    autoLoad : false,
    proxy :  {
        type :'ajax',
        url : 'data/dogs.js',
        reader : {
            type : 'json',
            rootProperty : 'entitys'
        }
    }
})