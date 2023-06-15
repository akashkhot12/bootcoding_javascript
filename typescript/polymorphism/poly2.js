var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(area) {
        this.area = area;
    }
    Animal.prototype.walk = function () {
        console.log(this.area + " this name of animal found is america");
    };
    return Animal;
}());
var eating = /** @class */ (function (_super) {
    __extends(eating, _super);
    function eating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    eating.prototype.walk = function () {
        _super.prototype.walk.call(this);
        console.log(this.area + " this is danger");
    };
    return eating;
}(Animal));
var feature = /** @class */ (function (_super) {
    __extends(feature, _super);
    function feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    feature.prototype.walk = function () {
        _super.prototype.walk.call(this);
        console.log(this.area + " it has been fastest animal in Jungle");
    };
    return feature;
}(eating));
var h1 = new feature("leopard");
h1.walk();
