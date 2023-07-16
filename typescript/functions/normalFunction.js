// function calling(a:number,b?:number):number{
//     return b?a*b:a
// }
// console.log(calling(30,40))
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
console.log(a1.getName());
