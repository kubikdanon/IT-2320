var Home = {};

// I wanted to write a function that will unselect every cell, but it just does not allow me to unselect ANYTHING. 
// If it is possible, provide me a feedback on how to realize this function.

/*Home.UnSelect = function ()
{
    var cells = $(".cell");
    for (var i = 0; i < cells.length; i++)
        if (cells[i].hasClass("selected"))
            cells[i].removeClass("selected"); 
}*/

Home.IfSelected = function ()
{
    $(".cell").click(function () {
        if ($(".selected").length && $(".selected").hasClass("red"))
        {
            $(this).removeClass("black");
            $(this).addClass("piece red");
            // Home.UnSelect();
        }
        if ($(".selected").length && $(".selected").hasClass("black"))
        {
            $(this).removeClass("red")
            $(this).addClass("piece black");
            // Home.UnSelect();
        }
    });
}

Home.IfOccupied = function () {
    $(".piece").click(function () {
        if ($(this).hasClass("selected"))
            $(this).removeClass("selected");
        else
            $(this).addClass("selected").siblings().removeClass("selected");
    });
}

$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");   
    }

    Home.IfSelected();
    Home.IfOccupied();
});