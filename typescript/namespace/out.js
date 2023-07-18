var print;
(function (print) {
    var lable = /** @class */ (function () {
        function lable() {
        }
        lable.prototype.lableprint = function () {
            return " print the label ..!";
        };
        return lable;
    }());
    print.lable = lable;
})(print || (print = {}));
var l1 = new print.lable();
console.log(l1.lableprint());
