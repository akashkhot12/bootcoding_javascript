var child = /** @class */ (function () {
    function child() {
        this.name = "akash khot";
    }
    child.prototype.getvalue = function () {
        return this.name;
    };
    return child;
}());
var a1 = new child();
a1.getvalue();
