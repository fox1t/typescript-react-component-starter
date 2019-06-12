'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ms = _interopDefault(require('ms'));

function getNextLunchtime(hours, minutes) {
    var lunchtime = new Date();
    lunchtime.setHours(hours);
    lunchtime.setMinutes(minutes);
    lunchtime.setSeconds(0);
    lunchtime.setMilliseconds(0);
    if (lunchtime.getTime() < Date.now()) {
        lunchtime.setDate(lunchtime.getDate() + 1);
    }
    return lunchtime;
}
//# sourceMappingURL=lunchtime.js.map

function millisecondsUntil(date) {
    return date.getTime() - Date.now();
}
//# sourceMappingURL=millisecondsUntil.js.map

function howLongUntilLunch(hours, minutes) {
    if (hours === void 0) { hours = 12; }
    if (minutes === void 0) { minutes = 30; }
    var millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));
    return ms(millisecondsUntilLunchTime, { long: true });
}

module.exports = howLongUntilLunch;
//# sourceMappingURL=main.js.map
