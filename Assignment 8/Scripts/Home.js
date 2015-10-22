ButtonClick = function ()
{    
    $.ajax
    ({
        url:
            "Home/GetPlayerInformation",
        data:
            {
                PlayerNumber: $("input").val()
            },
        success:
            function (result)
            {
                var deserializedData = JSON.parse(result);
                $(".output").empty();
                $(".output").append(deserializedData.PlayerName);
            }
    });
}
$(document).ready(function () {
    $("#b").click(ButtonClick);
});