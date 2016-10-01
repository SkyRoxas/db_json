jQuery(document).ready(function() {
    var json = '{"user_info":[{"title":"Roxas","documents":"a super handsome boy","uid": 1},{"title":"SkyRoxas","documents":"a super handsome boy","uid": 2}]}';
    var obj = JSON.parse(json);
    console.log(obj.user_info[1].title);
    //$('#content').html(obj[0].title);

})
