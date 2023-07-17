var media;
(function (media) {
    media[media["Newspaper"] = 0] = "Newspaper";
    media[media["Newsletter"] = 1] = "Newsletter";
    media[media["Magazine"] = 2] = "Magazine";
    media[media["Book"] = 3] = "Book";
})(media || (media = {}));
console.log(media);
var printer;
(function (printer) {
    printer[printer["Newspaper"] = 1] = "Newspaper";
    printer[printer["Newsletter"] = 2] = "Newsletter";
    printer[printer["Magazine"] = 3] = "Magazine";
    printer[printer["Book"] = 4] = "Book";
})(printer || (printer = {}));
console.log(printer);
