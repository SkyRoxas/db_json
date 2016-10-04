jQuery(document).ready(function($) {
    var obj = new Object;

    console.log(obj);
    //console.log($('textarea').attr('name'));

    function btnClick() {
        var outputObj = new Object;
        $('.inputData').each(function() {
            var $name = $(this).attr('name');
            var $value = $(this).val();
            outputObj[$name] = $value;
            console.log(outputObj);
        })
    }

    $('button').click(function() {
        btnClick();
    })
})
