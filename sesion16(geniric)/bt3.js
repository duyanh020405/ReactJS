"use strict";
var Weekend;
(function (Weekend) {
    Weekend["monday"] = "Monday";
    Weekend["tuesday"] = "Tuesday";
    Weekend["Wednesday"] = "Wednesday";
    Weekend["Thursday"] = "Thursday";
    Weekend["Friday"] = "Friday";
    Weekend["Saturday"] = "Saturday";
    Weekend["Sunday"] = "Sunday";
})(Weekend || (Weekend = {}));
function inRa(item) {
    for (const values in item) {
        console.log(item[values]);
    }
}
inRa(Weekend);
