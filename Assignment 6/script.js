var Main = {};

Main.SoccerClub = function(name, country, manager, coach)
{
	this.Name = name;
	this.Country = country;
	this.Manager = manager;
	this.Coach = coach;
}

Main.SoccerClub.prototype.SetManager = function (manager)
{
	this.Manager = manager;
}

Main.SoccerClub.prototype.SetCoach = function (coach)
{
	this.Coach = coach;
}
	
Main.SoccerClub.prototype.GetInfo = function()
{
	return "Name of the Soccer Club: " + this.Name + ", Country: " + this.Country + ". Team's manager is " + 
		this.Manager + ", and coach name is " + this.Coach + ".";
}

Main.ManUtd = new Main.SoccerClub ("Manchester United", "England", "Louis van Gaal", "Ryan Giggs");
Main.RMadrid = new Main.SoccerClub ("Real Madrid", "Spain", "Rafael Benitez", "Rafael Benitez");

document.body.innerHTML = Main.ManUtd.GetInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.RMadrid.GetInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += "Now we want to change manager's name of Man United to our own name, and coach's name of Real Madrid to my friend's name <br />";
Main.ManUtd.SetManager("Daniel");
Main.RMadrid.SetCoach("Anthony");
document.body.innerHTML += "See what happended now: <br />";
document.body.innerHTML += Main.ManUtd.GetInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.RMadrid.GetInfo();
