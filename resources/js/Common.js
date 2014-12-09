window.generateData = function(n, floor){
    var data = [],
        p = (Math.random() *  11) + 1,
        i;

    floor = (!floor && floor !== 0)? 20 : floor;

    for (i = 0; i < (n || 12); i++) {
        data.push({
            name: (i+1)+'월', //Ext.Date.monthNames[i % 12],
            gubun: (i==0?'CPU':"Memory"),
            data1: Math.floor(Math.max((Math.random() * 100), floor)),
            data2: Math.floor(Math.max((Math.random() * 100), floor)),
            data3: Math.floor(Math.max((Math.random() * 100), floor)),
            data4: Math.floor(Math.max((Math.random() * 100), floor)),
            data5: Math.floor(Math.max((Math.random() * 100), floor)),
            data6: Math.floor(Math.max((Math.random() * 100), floor)),
            data7: Math.floor(Math.max((Math.random() * 100), floor)),
            data8: Math.floor(Math.max((Math.random() * 100), floor)),
            data9: Math.floor(Math.max((Math.random() * 100), floor))

        });
    }
    return data;
};

function initialize() {
}
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=weather&' +
        'callback=initialize';
    document.body.appendChild(script);
}
loadScript();