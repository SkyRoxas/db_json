jQuery(document).ready(function() {
    var json = '{"user_info":[{"title":"Roxas","documents":"a super handsome boy","uid": 1},{"title":"SkyRoxas","documents":"a super handsome boy","uid": 2}]}';
    var obj = JSON.parse(json);



    //keys length
    // for (var i = 0; i < Object.keys(obj.user_info).length; i++) {
    //     //console.log(Object.keys(obj.user_info[i]).length);
    //     for (var k = 0; k < Object.keys(obj.user_info[i]).length; k++) {
    //         console.log(Object.keys(obj.user_info[i])[k]);
    //     }
    // }

    $.each(obj, function(i, val){
        if (i=="user_info"){
            $.each(val[0] , function(applier, a_val){
                alert("key:"+applier+" , value:"+a_val)
            });
        }
    });
    //$('#content').html(obj[0].title);

})
