jQuery(document).ready(function() {
    //var json = '{"user_info":[{"title":"Roxas","documents":"a super handsome boy","uid": 1},{"title":"SkyRoxas","documents":"a super handsome boy","uid": 2}]}';
    //var obj = JSON.parse(data);



    //keys length
    // for (var i = 0; i < Object.keys(obj.user_info).length; i++) {
    //     //console.log(Object.keys(obj.user_info[i]).length);
    //     for (var k = 0; k < Object.keys(obj.user_info[i]).length; k++) {
    //         console.log(Object.keys(obj.user_info[i])[k]);
    //     }
    // }
    $.getJSON("js/data.json", function(json) {
        //console.log("JSON Data: " + json);
        $.each(json, function($key, $val) {
          for (var i = 0; i < $val.length; i++) {
            if ($key == "user_info") {
              //console.log($val.length);
                $.each($val[i], function($key, $val) {
                    console.log("key:" + $key + " , value:" + $val)
                    $('#content').append('<div class ="field field-item'+i+'+"><div class="field-title">'+$key+':</div><div class ="field-content">'+$val+'</div>')
                });
            }
          }

        });
    });


    //$('#content').html(obj[0].title);

})
