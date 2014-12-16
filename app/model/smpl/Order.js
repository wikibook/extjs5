/***
 * step 1 Basic Grid
 * step 2 renderer
 */
Ext.define('ext5.model.smpl.Order', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.validator.Inclusion'],
    fields: [
        'customName',   // 주문자 명
        'orderDate',    // 주문일자
        'orderDesc',    // 주문내역
        {name: 'orderCnt'},     // 주문 수량
        {name: 'orderAmount', type: 'float'},  // 주문금액
        {name: 'accrueAmount', type: 'float'},  // 누적 주문액
        {name: 'isMember'},    // 회원주문여부,
        'orderDetail',  // 주문 상세
        'estimate',      //고객평가
        'areaNm',        // 주문 지역
        'id','name','lastname'
    ],
    proxy : {
        type : 'ajax',
        url : '/resources/data/Order.json',
        reader : {             // #11
            type : 'json',
            rootProperty : 'entitys',
            totalProperty : 'totalCount'
        }
    },
    validators: {
        customName: 'presence',
        isMember : {
            type: 'inclusion',  list: [true, false]
        },
        orderCnt : {
            type: 'bound', max: 100
        }
    }
});

//Ext.define('App.fields.Gender', {
//    extend: 'Ext.data.field.String', // inherit converters
//
//    alias: 'data.field.gender',  // now usable as a Field type
//
//    validators: {
//        type: 'inclusion',
//        list: [ true, false ]
//    }
//});