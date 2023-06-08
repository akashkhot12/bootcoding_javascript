var observing = /** @class */ (function () {
    function observing() {
    }
    observing.prototype.getFirstName = function () {
        console.log("my first name is " + this.firstName);
    };
    observing.prototype.getSecondNameAge = function () {
        console.log("my second name is " + this.secondName);
    };
    return observing;
}());
var obj = new observing();
obj.firstName = "akash khot";
obj.getFirstName();
