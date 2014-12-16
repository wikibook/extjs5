Ext.define('ext5.view.frame.dashboard.GoogleMap', {
    extend: 'Ext.Component',
    alias: 'widget.googlemap',

    initComponent: function () {
        this.callParent(arguments);
        this.on('afterrender', this.onMapSetting, this);	// #1
    },

    onMapSetting: function (component) {
        var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(36.5,127.5)	// #2
        };
        var map = new google.maps.Map(component.el.dom,	// #3
            mapOptions);
        var weatherLayer = new google.maps.weather.WeatherLayer(); // #4
        weatherLayer.setMap(map);	// #5
        var cloudLayer = new google.maps.weather.CloudLayer();
        cloudLayer.setMap(map);

    }
});