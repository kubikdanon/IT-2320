function displayCar(car)
{
	if (car.name == "Mercedes-Benz")
	{
		$(".mercedes").append($("<div></div>").text(car.name).addClass("name"));
        $(".mercedes").append($("<div></div>").text(car.country).addClass("country"));

        for (var i = 0; i < car.list.length; i++)
        {
            var auto = car.list[i];
            $(".mercedes").append($("<div></div>").text(auto.modelName).addClass("text"));
            $(".mercedes").append($("<div></div>").text(auto.basePrice).addClass("text"));
			$(".mercedes").append($("<div></div>").text(auto.rating).addClass("text"));
        }
	}
	if (car.name == "Audi")
	{
		$(".audi").append($("<div></div>").text(car.name).addClass("name"));
        $(".audi").append($("<div></div>").text(car.country).addClass("country"));

        for (var i = 0; i < car.list.length; i++)
        {
            var auto = car.list[i];
            $(".audi").append($("<div></div>").text(auto.modelName).addClass("text"));
            $(".audi").append($("<div></div>").text(auto.basePrice).addClass("text"));
			$(".audi").append($("<div></div>").text(auto.rating).addClass("text"));
        }
	}
}

function createCarAsMercedes()
{
	return {

		"name" : "Mercedes-Benz",
		"country" : "Germany",
		"list" : [

			{
				"modelName" : "Model: C-Class",
				"basePrice" : "Price: $38400",
				"rating" : "Rating: 8.9"
			},

			{
				"modelName" : "Model: E-Class",
				"basePrice" : "Price: $52650",
				"rating" : "Rating: 8.9"
			},

			{
				"modelName" : "Model: S-Class",
				"basePrice" : "Price: $94400",
				"rating" : "Rating: 9.2"
			}

		]

	};
}

function createCarAsAudi()
{
	return {

		"name" : "Audi",
		"country" : "Germany",
		"list" : [

			{
				"modelName" : "Model: A4",
				"basePrice" : "Price: $35900",
				"rating" : "Rating: 8.7"
			},

			{
				"modelName" : "Model: A6",
				"basePrice" : "Price: $46200",
				"rating" : "Rating: 8.7"
			},

			{
				"modelName" : "Model: A8",
				"basePrice" : "Price: $77400",
				"rating" : "Rating: 8.6"
			}

		]

	};
}
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function()
{
	var car1 = createCarAsMercedes();
	var car2 = createCarAsAudi();
	displayCar(car1);
	displayCar(car2);
});