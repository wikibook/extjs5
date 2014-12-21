Ext.define('dog.Application', {
    name : 'dog',
    extend : 'Ext.app.Application',
    views : ['DogGrid', 'DogView'],
    controllers : ['Dog']
});