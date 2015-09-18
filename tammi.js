$(document).ready(function myFunction(){

function inherit(proto) {
  function F() {}
  F.prototype = proto
  return new F
}

function randomVehicle(createElement){
	$('#elementId').append("<span id=[i]>");
	var i = Math.floor(Math.random() * 4) + 1 
}

$(document).keyup(function(event){
       if (event.which === 16){
       $('randomVehicle').makeDiv();
};

function Vehicle(){
	this.damageTolerance = 0;
	this.damageInflicted = 1;
	this.rate = 4;
	this.rateModifier = 1;
	this.heading = "horizontal";
};
	Vehicle.prototype.move = function() {
		$(".vehicle").animate({left : "50 px",})     
    };
	
	Vehicle.prototype.totaled = function() {0 , 1}
	Vehicle.prototype.damageTolerance = function() {i}
	var i = [];

},
function prototypeCar() {
	}
	Car.prototype = inherit(Vehicle.prototype);
	Car.prototype.damageTolerance = 2;
	var car = new Car();
	car.move();
	

	function Copcar() {
	}
	
	Copcar.prototype = inherit(Vehicle.prototype);
	Copcar.prototype.damageTolerance = 3;
	var copcar = new Copcar;
	var randomleft = Math.floor(Math.random() * 450 - 150);
	copcar.move();
	$(this).css({"margin-left": randomleft});	

	function Tank() {
	}
	Tank.prototype = inherit(Vehicle.prototype);
	Tank.prototype.damageTolerance = 10;
	var tank = new Tank;
	tank.move();

	function Motorcycle() { 
	}
	Motorcycle.prototype = inherit(Vehicle.prototype);

	this.Motorcycle(Vehicle){
		this.damageTolerance = 1;
		this.speed = 1000
		this.Vehicle = ".4";
		this.move = function(){
			this.moveRight();
		}
	}

});