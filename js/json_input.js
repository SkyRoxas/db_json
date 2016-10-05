jQuery(document).ready(function($) {
    var obj = new Object;
    var perfileArray = [];
    var $pid = 0;
    obj.perfile = perfileArray;


    function btnClick() {
        var outputObj = new Object;

        $('.inputData').each(function() {
            var $name = $(this).attr('name');
            var $value = $(this).val();
            outputObj[$name] = $value;
        })

        outputObj.pid = $pid += 1;
        console.log(outputObj);

        perfileArray.push(outputObj);
        console.log(perfileArray);
        console.log(JSON.stringify(obj));

        $.each(obj, function($key, $val) {
            //$('#content .JsonOutput').append('<div class ="file item_"></div>');
            if ($key == "perfile") {
                $.each($val[$val.length -1], function($key, $val) {
                    $('#content .JsonOutput')
                        .append(
                            '<div class ="field field_' + $key + '">' +
                            '<div class="field-label field-item">' + $key + '</div>' +
                            '<div class ="field-content field-item">' + $val + '</div>' +
                            '</div>'
                        )
                });

            }

        });
    }

    $('button').click(function() {
        btnClick();
    })

})
