var dynamicObject = {};
dynamicObject.ThankYouText = "Thank You!";

window.onload = function Load()
{
    var image = document.getElementsByClassName("image")[0];
	image.addEventListener("click", ToggleImageHighlight);
	var li = document.getElementsByTagName("li");
	for (var i = 0;i < li.length; i++)
	{
		li[i].addEventListener("mouseover", MouseOverItem);
		li[i].addEventListener("mouseout", MouseOutItem);
	}
	var name = document.getElementsByTagName("input")[0];
	name.addEventListener("change", TextInputChanged);
}

function ToggleImageHighlight(element)
{
	var toggleStatus;
	var ClickIt = document.getElementsByClassName("clickit")[0];

	if (element.target.className == "image")
	{
		toggleStatus = "ON";
		element.target.className = "image-highlight";
	}
	else 
	{
		toggleStatus = "OFF";
		element.target.className = "image";
	}

	ClickIt.innerHTML = "I just toggled the Image Higlight to: " + toggleStatus;
}
	
function MouseOverItem(element)
{
	element.target.className = "li-highlight";
}

function MouseOutItem(element)
{
	element.target.className = "";
}

function TextInputChanged(element)
{
	var page = document.getElementsByClassName("about-me")[0];
	var message = document.getElementsByClassName("footer")[0];
	alertUpdateDataFunction(page, element, message);
}

var alertUpdateDataFunction = function(page, element, message)
{
	message.innerHTML = dynamicObject.ThankYouText;
	page.removeChild(element.target);
};
