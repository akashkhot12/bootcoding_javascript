var system;

(function (system) {
    var computerCycle = /** @class */ (function () {
        function computerCycle() {
        }
        computerCycle.prototype.computerParts = function () {
            var arr;
            arr = [1, "printer", true];
            return arr;
        };
        return computerCycle;
    }());
    system.computerCycle = computerCycle;
})(system || (system = {}));
var s1 = new system.computerCycle();

console.log(s1.computerParts());
