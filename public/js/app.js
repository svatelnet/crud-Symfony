$(document).ready(function () {
    $('#creat_us').submit(function (e) {
        var getUrl = $(e.currentTarget).data("url");
        e.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: getUrl,
            data: $(this).serialize(),
            success: function (response) {
                $(".info").text("Успешно!");
                //console.log("Succes!");
                //$('#table-output').load(document.URL +  ' #table-output');
            },
            error: function (response) {
                console.log("Error: " + response);
            }
        });
    });
});