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
        console.log(JSON.stringify(obj));

        $.each(obj, function($key, $val) {
            if ($key == "perfile") {
                $.each($val[$val.length - 1], function($key, $val) {
                    $('#content .JsonOutput >.field-wrapper')
                        .append(
                            '<div class ="field field_' + outputObj.pid + " " + $key + '">' +
                            '<div class="field-label field-item">' + $key + '</div>' +
                            '<div class ="field-content field-item">' + $val + '</div>' +
                            '</div>'
                        );
                });

            }

        });
        $('.field_' + outputObj.pid).wrapAll('<div class ="field-item field-item'+outputObj.pid+'"></div>');
        $('.inputData').val(null);
    }


    $('button.submit').click(function() {
        btnClick();
    })
    $('button.reset').click(function() {
        reset();
    })

})
