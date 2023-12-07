var carVariable = function()
{
    var seats = 5;
    var doors = 4;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}

var truckVariable = function()
{
    var towPackage = true;
    var doors = 2;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}

var monsterTruckVariable = function()
{
    var looksLikeADragon = true;
    var doors = 1.5;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}