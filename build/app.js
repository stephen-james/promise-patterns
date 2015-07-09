(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _ = require('underscore');
var promisePatterns = require('./promisePatterns');

var items = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Ã…land Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'AndorrA', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antarctica', code: 'AQ'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'Argentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Aruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'Austria', code: 'AT'},
    {name: 'Azerbaijan', code: 'AZ'},
    {name: 'Bahamas', code: 'BS'},
    {name: 'Bahrain', code: 'BH'},
    {name: 'Bangladesh', code: 'BD'},
    {name: 'Barbados', code: 'BB'},
    {name: 'Belarus', code: 'BY'},
    {name: 'Belgium', code: 'BE'},
    {name: 'Belize', code: 'BZ'},
    {name: 'Benin', code: 'BJ'},
    {name: 'Bermuda', code: 'BM'},
    {name: 'Bhutan', code: 'BT'},
    {name: 'Bolivia', code: 'BO'},
    {name: 'Bosnia and Herzegovina', code: 'BA'},
    {name: 'Botswana', code: 'BW'},
    {name: 'Bouvet Island', code: 'BV'},
    {name: 'Brazil', code: 'BR'},
    {name: 'British Indian Ocean Territory', code: 'IO'},
    {name: 'Brunei Darussalam', code: 'BN'},
    {name: 'Bulgaria', code: 'BG'},
    {name: 'Burkina Faso', code: 'BF'},
    {name: 'Burundi', code: 'BI'},
    {name: 'Cambodia', code: 'KH'},
    {name: 'Cameroon', code: 'CM'},
    {name: 'Canada', code: 'CA'},
    {name: 'Cape Verde', code: 'CV'},
    {name: 'Cayman Islands', code: 'KY'},
    {name: 'Central African Republic', code: 'CF'},
    {name: 'Chad', code: 'TD'},
    {name: 'Chile', code: 'CL'},
    {name: 'China', code: 'CN'},
    {name: 'Christmas Island', code: 'CX'},
    {name: 'Cocos (Keeling) Islands', code: 'CC'},
    {name: 'Colombia', code: 'CO'},
    {name: 'Comoros', code: 'KM'},
    {name: 'Congo', code: 'CG'},
    {name: 'Congo, The Democratic Republic of the', code: 'CD'},
    {name: 'Cook Islands', code: 'CK'},
    {name: 'Costa Rica', code: 'CR'},
    {name: 'Cote D\'Ivoire', code: 'CI'},
    {name: 'Croatia', code: 'HR'},
    {name: 'Cuba', code: 'CU'},
    {name: 'Cyprus', code: 'CY'},
    {name: 'Czech Republic', code: 'CZ'},
    {name: 'Denmark', code: 'DK'},
    {name: 'Djibouti', code: 'DJ'},
    {name: 'Dominica', code: 'DM'},
    {name: 'Dominican Republic', code: 'DO'},
    {name: 'Ecuador', code: 'EC'},
    {name: 'Egypt', code: 'EG'},
    {name: 'El Salvador', code: 'SV'},
    {name: 'Equatorial Guinea', code: 'GQ'},
    {name: 'Eritrea', code: 'ER'},
    {name: 'Estonia', code: 'EE'},
    {name: 'Ethiopia', code: 'ET'},
    {name: 'Falkland Islands (Malvinas)', code: 'FK'},
    {name: 'Faroe Islands', code: 'FO'},
    {name: 'Fiji', code: 'FJ'},
    {name: 'Finland', code: 'FI'},
    {name: 'France', code: 'FR'},
    {name: 'French Guiana', code: 'GF'},
    {name: 'French Polynesia', code: 'PF'},
    {name: 'French Southern Territories', code: 'TF'},
    {name: 'Gabon', code: 'GA'},
    {name: 'Gambia', code: 'GM'},
    {name: 'Georgia', code: 'GE'},
    {name: 'Germany', code: 'DE'},
    {name: 'Ghana', code: 'GH'},
    {name: 'Gibraltar', code: 'GI'},
    {name: 'Greece', code: 'GR'},
    {name: 'Greenland', code: 'GL'},
    {name: 'Grenada', code: 'GD'},
    {name: 'Guadeloupe', code: 'GP'},
    {name: 'Guam', code: 'GU'},
    {name: 'Guatemala', code: 'GT'},
    {name: 'Guernsey', code: 'GG'},
    {name: 'Guinea', code: 'GN'},
    {name: 'Guinea-Bissau', code: 'GW'},
    {name: 'Guyana', code: 'GY'},
    {name: 'Haiti', code: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
    {name: 'Holy See (Vatican City State)', code: 'VA'},
    {name: 'Honduras', code: 'HN'},
    {name: 'Hong Kong', code: 'HK'},
    {name: 'Hungary', code: 'HU'},
    {name: 'Iceland', code: 'IS'},
    {name: 'India', code: 'IN'},
    {name: 'Indonesia', code: 'ID'},
    {name: 'Iran, Islamic Republic Of', code: 'IR'},
    {name: 'Iraq', code: 'IQ'},
    {name: 'Ireland', code: 'IE'},
    {name: 'Isle of Man', code: 'IM'},
    {name: 'Israel', code: 'IL'},
    {name: 'Italy', code: 'IT'},
    {name: 'Jamaica', code: 'JM'},
    {name: 'Japan', code: 'JP'},
    {name: 'Jersey', code: 'JE'},
    {name: 'Jordan', code: 'JO'},
    {name: 'Kazakhstan', code: 'KZ'},
    {name: 'Kenya', code: 'KE'},
    {name: 'Kiribati', code: 'KI'},
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
    {name: 'Korea, Republic of', code: 'KR'},
    {name: 'Kuwait', code: 'KW'},
    {name: 'Kyrgyzstan', code: 'KG'},
    {name: 'Lao People\'S Democratic Republic', code: 'LA'},
    {name: 'Latvia', code: 'LV'},
    {name: 'Lebanon', code: 'LB'},
    {name: 'Lesotho', code: 'LS'},
    {name: 'Liberia', code: 'LR'},
    {name: 'Libyan Arab Jamahiriya', code: 'LY'},
    {name: 'Liechtenstein', code: 'LI'},
    {name: 'Lithuania', code: 'LT'},
    {name: 'Luxembourg', code: 'LU'},
    {name: 'Macao', code: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
    {name: 'Madagascar', code: 'MG'},
    {name: 'Malawi', code: 'MW'},
    {name: 'Malaysia', code: 'MY'},
    {name: 'Maldives', code: 'MV'},
    {name: 'Mali', code: 'ML'},
    {name: 'Malta', code: 'MT'},
    {name: 'Marshall Islands', code: 'MH'},
    {name: 'Martinique', code: 'MQ'},
    {name: 'Mauritania', code: 'MR'},
    {name: 'Mauritius', code: 'MU'},
    {name: 'Mayotte', code: 'YT'},
    {name: 'Mexico', code: 'MX'},
    {name: 'Micronesia, Federated States of', code: 'FM'},
    {name: 'Moldova, Republic of', code: 'MD'},
    {name: 'Monaco', code: 'MC'},
    {name: 'Mongolia', code: 'MN'},
    {name: 'Montserrat', code: 'MS'},
    {name: 'Morocco', code: 'MA'},
    {name: 'Mozambique', code: 'MZ'},
    {name: 'Myanmar', code: 'MM'},
    {name: 'Namibia', code: 'NA'},
    {name: 'Nauru', code: 'NR'},
    {name: 'Nepal', code: 'NP'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Netherlands Antilles', code: 'AN'},
    {name: 'New Caledonia', code: 'NC'},
    {name: 'New Zealand', code: 'NZ'},
    {name: 'Nicaragua', code: 'NI'},
    {name: 'Niger', code: 'NE'},
    {name: 'Nigeria', code: 'NG'},
    {name: 'Niue', code: 'NU'},
    {name: 'Norfolk Island', code: 'NF'},
    {name: 'Northern Mariana Islands', code: 'MP'},
    {name: 'Norway', code: 'NO'},
    {name: 'Oman', code: 'OM'},
    {name: 'Pakistan', code: 'PK'},
    {name: 'Palau', code: 'PW'},
    {name: 'Palestinian Territory, Occupied', code: 'PS'},
    {name: 'Panama', code: 'PA'},
    {name: 'Papua New Guinea', code: 'PG'},
    {name: 'Paraguay', code: 'PY'},
    {name: 'Peru', code: 'PE'},
    {name: 'Philippines', code: 'PH'},
    {name: 'Pitcairn', code: 'PN'},
    {name: 'Poland', code: 'PL'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Puerto Rico', code: 'PR'},
    {name: 'Qatar', code: 'QA'},
    {name: 'Reunion', code: 'RE'},
    {name: 'Romania', code: 'RO'},
    {name: 'Russian Federation', code: 'RU'},
    {name: 'RWANDA', code: 'RW'},
    {name: 'Saint Helena', code: 'SH'},
    {name: 'Saint Kitts and Nevis', code: 'KN'},
    {name: 'Saint Lucia', code: 'LC'},
    {name: 'Saint Pierre and Miquelon', code: 'PM'},
    {name: 'Saint Vincent and the Grenadines', code: 'VC'},
    {name: 'Samoa', code: 'WS'},
    {name: 'San Marino', code: 'SM'},
    {name: 'Sao Tome and Principe', code: 'ST'},
    {name: 'Saudi Arabia', code: 'SA'},
    {name: 'Senegal', code: 'SN'},
    {name: 'Serbia and Montenegro', code: 'CS'},
    {name: 'Seychelles', code: 'SC'},
    {name: 'Sierra Leone', code: 'SL'},
    {name: 'Singapore', code: 'SG'},
    {name: 'Slovakia', code: 'SK'},
    {name: 'Slovenia', code: 'SI'},
    {name: 'Solomon Islands', code: 'SB'},
    {name: 'Somalia', code: 'SO'},
    {name: 'South Africa', code: 'ZA'},
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
    {name: 'Spain', code: 'ES'},
    {name: 'Sri Lanka', code: 'LK'},
    {name: 'Sudan', code: 'SD'},
    {name: 'Suriname', code: 'SR'},
    {name: 'Svalbard and Jan Mayen', code: 'SJ'},
    {name: 'Swaziland', code: 'SZ'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Switzerland', code: 'CH'},
    {name: 'Syrian Arab Republic', code: 'SY'},
    {name: 'Taiwan, Province of China', code: 'TW'},
    {name: 'Tajikistan', code: 'TJ'},
    {name: 'Tanzania, United Republic of', code: 'TZ'},
    {name: 'Thailand', code: 'TH'},
    {name: 'Timor-Leste', code: 'TL'},
    {name: 'Togo', code: 'TG'},
    {name: 'Tokelau', code: 'TK'},
    {name: 'Tonga', code: 'TO'},
    {name: 'Trinidad and Tobago', code: 'TT'},
    {name: 'Tunisia', code: 'TN'},
    {name: 'Turkey', code: 'TR'},
    {name: 'Turkmenistan', code: 'TM'},
    {name: 'Turks and Caicos Islands', code: 'TC'},
    {name: 'Tuvalu', code: 'TV'},
    {name: 'Uganda', code: 'UG'},
    {name: 'Ukraine', code: 'UA'},
    {name: 'United Arab Emirates', code: 'AE'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'United States', code: 'US'},
    {name: 'United States Minor Outlying Islands', code: 'UM'},
    {name: 'Uruguay', code: 'UY'},
    {name: 'Uzbekistan', code: 'UZ'},
    {name: 'Vanuatu', code: 'VU'},
    {name: 'Venezuela', code: 'VE'},
    {name: 'Viet Nam', code: 'VN'},
    {name: 'Virgin Islands, British', code: 'VG'},
    {name: 'Virgin Islands, U.S.', code: 'VI'},
    {name: 'Wallis and Futuna', code: 'WF'},
    {name: 'Western Sahara', code: 'EH'},
    {name: 'Yemen', code: 'YE'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'}
];

var showCountries = promisePatterns.chunk(items,
    function(countries) {
        _.each(countries, function(country) {
            console.log(country.name);
        })
    }, null, {
        interval : 1000
    });

var sayHello = promisePatterns.loop(
    {
        x:0
    },
    function guard() {
        return this.x < 10;
    },
    function op() {
        console.log('hello ' + this.x);
    },
    function increment() {
        this.x = this.x + 1;
    }
);

showCountries.then(sayHello);


module.exports = {};

},{"./promisePatterns":6,"underscore":"underscore"}],2:[function(require,module,exports){
(function (process,global){
/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 2.9.33
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, cancel, using, filter, any, each, timers
*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule.js");
var Queue = _dereq_("./queue.js");
var util = _dereq_("./util.js");

function Async() {
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule =
        schedule.isStatic ? schedule(this.drainQueues) : schedule;
}

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.enableTrampoline = function() {
    if (!this._trampolineEnabled) {
        this._trampolineEnabled = true;
        this._schedule = function(fn) {
            setTimeout(fn, 0);
        };
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._normalQueue.length() > 0;
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    if (schedule.isStatic) {
        schedule = function(fn) { setTimeout(fn, 0); };
    }
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype.invokeFirst = function (fn, receiver, arg) {
    this._normalQueue.unshift(fn, receiver, arg);
    this._queueTick();
};

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = new Async();
module.exports.firstLineError = firstLineError;

},{"./queue.js":28,"./schedule.js":31,"./util.js":38}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise) {
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    this._setBoundTo(thisArg);
    if (this._isPending()) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, ret._progress, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, ret._progress, ret, context);
    } else {
        ret._setBoundTo(thisArg);
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 131072;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~131072);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 131072) === 131072;
};

Promise.bind = function (thisArg, value) {
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);

    if (maybePromise instanceof Promise) {
        maybePromise._then(function(thisArg) {
            ret._setBoundTo(thisArg);
            ret._resolveCallback(value);
        }, ret._reject, ret._progress, ret, null);
    } else {
        ret._setBoundTo(thisArg);
        ret._resolveCallback(value);
    }
    return ret;
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise.js")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise.js":23}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util.js");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (!true) {
var makeMethodCaller = function (methodName) {
    return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
};

var makeGetter = function (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
};

var getCompiled = function(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
};

getMethodCaller = function(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
};

getGetter = function(name) {
    return getCompiled(name, makeGetter, getterCache);
};
}

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
    if (!true) {
        if (canEvaluate) {
            var maybeCaller = getMethodCaller(methodName);
            if (maybeCaller !== null) {
                return this._then(
                    maybeCaller, undefined, undefined, args, undefined);
            }
        }
    }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util.js":38}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var errors = _dereq_("./errors.js");
var async = _dereq_("./async.js");
var CancellationError = errors.CancellationError;

Promise.prototype._cancel = function (reason) {
    if (!this.isCancellable()) return this;
    var parent;
    var promiseToReject = this;
    while ((parent = promiseToReject._cancellationParent) !== undefined &&
        parent.isCancellable()) {
        promiseToReject = parent;
    }
    this._unsetCancellable();
    promiseToReject._target()._rejectCallback(reason, false, true);
};

Promise.prototype.cancel = function (reason) {
    if (!this.isCancellable()) return this;
    if (reason === undefined) reason = new CancellationError();
    async.invokeLater(this._cancel, this, reason);
    return this;
};

Promise.prototype.cancellable = function () {
    if (this._cancellable()) return this;
    async.enableTrampoline();
    this._setCancellable();
    this._cancellationParent = undefined;
    return this;
};

Promise.prototype.uncancellable = function () {
    var ret = this.then();
    ret._unsetCancellable();
    return ret;
};

Promise.prototype.fork = function (didFulfill, didReject, didProgress) {
    var ret = this._then(didFulfill, didReject, didProgress,
                         undefined, undefined);

    ret._setCancellable();
    ret._cancellationParent = undefined;
    return ret;
};
};

},{"./async.js":2,"./errors.js":13}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var async = _dereq_("./async.js");
var util = _dereq_("./util.js");
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var warn;

function CapturedTrace(parent) {
    this._parent = parent;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.parent = function() {
    return this._parent;
};

CapturedTrace.prototype.hasParent = function() {
    return this._parent !== undefined;
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = CapturedTrace.parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = stackFramePattern.test(line) ||
            "    (No stack trace)" === line;
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0) {
        stack = stack.slice(i);
    }
    return stack;
}

CapturedTrace.parseStackAndMessage = function(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: cleanStack(stack)
    };
};

CapturedTrace.formatAndLogError = function(error, title) {
    if (typeof console !== "undefined") {
        var message;
        if (typeof error === "object" || typeof error === "function") {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof warn === "function") {
            warn(message);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
};

CapturedTrace.unhandledRejection = function (reason) {
    CapturedTrace.formatAndLogError(reason, "^--- With additional stack trace: ");
};

CapturedTrace.isSupported = function () {
    return typeof captureStackTrace === "function";
};

CapturedTrace.fireRejectionEvent =
function(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent(name, reason, promise);
    } catch (e) {
        globalEventFired = true;
        async.throwLater(e);
    }

    var domEventFired = false;
    if (fireDomEvent) {
        try {
            domEventFired = fireDomEvent(name.toLowerCase(), {
                reason: reason,
                promise: promise
            });
        } catch (e) {
            domEventFired = true;
            async.throwLater(e);
        }
    }

    if (!globalEventFired && !localEventFired && !domEventFired &&
        name === "unhandledRejection") {
        CapturedTrace.formatAndLogError(reason, "Unhandled rejection ");
    }
};

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj.toString();
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}
CapturedTrace.setBounds = function(firstLineError, lastLineError) {
    if (!CapturedTrace.isSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit = Error.stackTraceLimit + 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit = Error.stackTraceLimit + 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit = Error.stackTraceLimit - 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit = Error.stackTraceLimit + 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit = Error.stackTraceLimit - 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

var fireDomEvent;
var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function(name, reason, promise) {
            if (name === "rejectionHandled") {
                return process.emit(name, promise);
            } else {
                return process.emit(name, reason, promise);
            }
        };
    } else {
        var customEventWorks = false;
        var anyEventWorks = true;
        try {
            var ev = new self.CustomEvent("test");
            customEventWorks = ev instanceof CustomEvent;
        } catch (e) {}
        if (!customEventWorks) {
            try {
                var event = document.createEvent("CustomEvent");
                event.initCustomEvent("testingtheevent", false, true, {});
                self.dispatchEvent(event);
            } catch (e) {
                anyEventWorks = false;
            }
        }
        if (anyEventWorks) {
            fireDomEvent = function(type, detail) {
                var event;
                if (customEventWorks) {
                    event = new self.CustomEvent(type, {
                        detail: detail,
                        bubbles: false,
                        cancelable: true
                    });
                } else if (self.dispatchEvent) {
                    event = document.createEvent("CustomEvent");
                    event.initCustomEvent(type, false, true, detail);
                }

                return event ? !self.dispatchEvent(event) : false;
            };
        }

        var toWindowMethodNameMap = {};
        toWindowMethodNameMap["unhandledRejection"] = ("on" +
            "unhandledRejection").toLowerCase();
        toWindowMethodNameMap["rejectionHandled"] = ("on" +
            "rejectionHandled").toLowerCase();

        return function(name, reason, promise) {
            var methodName = toWindowMethodNameMap[name];
            var method = self[methodName];
            if (!method) return false;
            if (name === "rejectionHandled") {
                method.call(self, promise);
            } else {
                method.call(self, reason, promise);
            }
            return true;
        };
    }
})();

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    warn = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        warn = function(message) {
            process.stderr.write("\u001b[31m" + message + "\u001b[39m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        warn = function(message) {
            console.warn("%c" + message, "color: red");
        };
    }
}

return CapturedTrace;
};

},{"./async.js":2,"./util.js":38}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util.js");
var errors = _dereq_("./errors.js");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var keys = _dereq_("./es5.js").keys;
var TypeError = errors.TypeError;

function CatchFilter(instances, callback, promise) {
    this._instances = instances;
    this._callback = callback;
    this._promise = promise;
}

function safePredicate(predicate, e) {
    var safeObject = {};
    var retfilter = tryCatch(predicate).call(safeObject, e);

    if (retfilter === errorObj) return retfilter;

    var safeKeys = keys(safeObject);
    if (safeKeys.length) {
        errorObj.e = new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a");
        return errorObj;
    }
    return retfilter;
}

CatchFilter.prototype.doFilter = function (e) {
    var cb = this._callback;
    var promise = this._promise;
    var boundTo = promise._boundTo;
    for (var i = 0, len = this._instances.length; i < len; ++i) {
        var item = this._instances[i];
        var itemIsErrorType = item === Error ||
            (item != null && item.prototype instanceof Error);

        if (itemIsErrorType && e instanceof item) {
            var ret = tryCatch(cb).call(boundTo, e);
            if (ret === errorObj) {
                NEXT_FILTER.e = ret.e;
                return NEXT_FILTER;
            }
            return ret;
        } else if (typeof item === "function" && !itemIsErrorType) {
            var shouldHandle = safePredicate(item, e);
            if (shouldHandle === errorObj) {
                e = errorObj.e;
                break;
            } else if (shouldHandle) {
                var ret = tryCatch(cb).call(boundTo, e);
                if (ret === errorObj) {
                    NEXT_FILTER.e = ret.e;
                    return NEXT_FILTER;
                }
                return ret;
            }
        }
    }
    NEXT_FILTER.e = e;
    return NEXT_FILTER;
};

return CatchFilter;
};

},{"./errors.js":13,"./es5.js":14,"./util.js":38}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, CapturedTrace, isDebugging) {
var contextStack = [];
function Context() {
    this._trace = new CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (!isDebugging()) return;
    if (this._trace !== undefined) {
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (!isDebugging()) return;
    if (this._trace !== undefined) {
        contextStack.pop();
    }
};

function createContext() {
    if (isDebugging()) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}

Promise.prototype._peekContext = peekContext;
Promise.prototype._pushContext = Context.prototype._pushContext;
Promise.prototype._popContext = Context.prototype._popContext;

return createContext;
};

},{}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, CapturedTrace) {
var getDomain = Promise._getDomain;
var async = _dereq_("./async.js");
var Warning = _dereq_("./errors.js").Warning;
var util = _dereq_("./util.js");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var debugging = false || (util.isNode &&
                    (!!process.env["BLUEBIRD_DEBUG"] ||
                     process.env["NODE_ENV"] === "development"));

if (debugging) {
    async.disableTrampolineIfNecessary();
}

Promise.prototype._ignoreRejections = function() {
    this._unsetRejectionIsUnhandled();
    this._bitField = this._bitField | 16777216;
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 16777216) !== 0) return;
    this._setRejectionIsUnhandled();
    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    CapturedTrace.fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._getCarriedStackTrace() || this._settledValue;
        this._setUnhandledRejectionIsNotified();
        CapturedTrace.fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 524288;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~524288);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 524288) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 2097152;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~2097152);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 2097152) > 0;
};

Promise.prototype._setCarriedStackTrace = function (capturedTrace) {
    this._bitField = this._bitField | 1048576;
    this._fulfillmentHandler0 = capturedTrace;
};

Promise.prototype._isCarryingStackTrace = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._getCarriedStackTrace = function () {
    return this._isCarryingStackTrace()
        ? this._fulfillmentHandler0
        : undefined;
};

Promise.prototype._captureStackTrace = function () {
    if (debugging) {
        this._trace = new CapturedTrace(this._peekContext());
    }
    return this;
};

Promise.prototype._attachExtraTrace = function (error, ignoreSelf) {
    if (debugging && canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = CapturedTrace.parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
};

Promise.prototype._warn = function(message) {
    var warning = new Warning(message);
    var ctx = this._peekContext();
    if (ctx) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = CapturedTrace.parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }
    CapturedTrace.formatAndLogError(warning, "");
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
                                 : undefined;
};

Promise.longStackTraces = function () {
    if (async.haveItemsQueued() &&
        debugging === false
   ) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/DT1qyG\u000a");
    }
    debugging = CapturedTrace.isSupported();
    if (debugging) {
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return debugging && CapturedTrace.isSupported();
};

if (!CapturedTrace.isSupported()) {
    Promise.longStackTraces = function(){};
    debugging = false;
}

return function() {
    return debugging;
};
};

},{"./async.js":2,"./errors.js":13,"./util.js":38}],11:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util.js");
var isPrimitive = util.isPrimitive;

module.exports = function(Promise) {
var returner = function () {
    return this;
};
var thrower = function () {
    throw this;
};
var returnUndefined = function() {};
var throwUndefined = function() {
    throw undefined;
};

var wrapper = function (value, action) {
    if (action === 1) {
        return function () {
            throw value;
        };
    } else if (action === 2) {
        return function () {
            return value;
        };
    }
};


Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value === undefined) return this.then(returnUndefined);

    if (isPrimitive(value)) {
        return this._then(
            wrapper(value, 2),
            undefined,
            undefined,
            undefined,
            undefined
       );
    }
    return this._then(returner, undefined, undefined, value, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    if (reason === undefined) return this.then(throwUndefined);

    if (isPrimitive(reason)) {
        return this._then(
            wrapper(reason, 1),
            undefined,
            undefined,
            undefined,
            undefined
       );
    }
    return this._then(thrower, undefined, undefined, reason, undefined);
};
};

},{"./util.js":38}],12:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, null, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, null, INTERNAL);
};
};

},{}],13:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5.js");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util.js");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    notEnumerableProp(Error, "__BluebirdErrorTypes__", errorTypes);
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5.js":14,"./util.js":38}],14:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, NEXT_FILTER, tryConvertToPromise) {
var util = _dereq_("./util.js");
var isPrimitive = util.isPrimitive;
var thrower = util.thrower;

function returnThis() {
    return this;
}
function throwThis() {
    throw this;
}
function return$(r) {
    return function() {
        return r;
    };
}
function throw$(r) {
    return function() {
        throw r;
    };
}
function promisedFinally(ret, reasonOrValue, isFulfilled) {
    var then;
    if (isPrimitive(reasonOrValue)) {
        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
    } else {
        then = isFulfilled ? returnThis : throwThis;
    }
    return ret._then(then, thrower, undefined, reasonOrValue, undefined);
}

function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo)
                    : handler();

    if (ret !== undefined) {
        var maybePromise = tryConvertToPromise(ret, promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            return promisedFinally(maybePromise, reasonOrValue,
                                    promise.isFulfilled());
        }
    }

    if (promise.isRejected()) {
        NEXT_FILTER.e = reasonOrValue;
        return NEXT_FILTER;
    } else {
        return reasonOrValue;
    }
}

function tapHandler(value) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo, value)
                    : handler(value);

    if (ret !== undefined) {
        var maybePromise = tryConvertToPromise(ret, promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            return promisedFinally(maybePromise, value, true);
        }
    }
    return value;
}

Promise.prototype._passThroughHandler = function (handler, isFinally) {
    if (typeof handler !== "function") return this.then();

    var promiseAndHandler = {
        promise: this,
        handler: handler
    };

    return this._then(
            isFinally ? finallyHandler : tapHandler,
            isFinally ? finallyHandler : undefined, undefined,
            promiseAndHandler, undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThroughHandler(handler, true);
};

Promise.prototype.tap = function (handler) {
    return this._passThroughHandler(handler, false);
};
};

},{"./util.js":38}],17:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise) {
var errors = _dereq_("./errors.js");
var TypeError = errors.TypeError;
var util = _dereq_("./util.js");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    var promise = this._promise = new Promise(INTERNAL);
    promise._captureStackTrace();
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
}

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._next(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    if (result === errorObj) {
        return this._promise._rejectCallback(result.e, false, true);
    }

    var value = result.value;
    if (result.done === true) {
        this._promise._resolveCallback(value);
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._throw(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/4Y4pDk\u000a\u000a".replace("%s", value) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise._then(
            this._next,
            this._throw,
            undefined,
            this,
            null
       );
    }
};

PromiseSpawn.prototype._throw = function (reason) {
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._next = function (value) {
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        spawn._generator = generator;
        spawn._next(undefined);
        return spawn.promise();
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors.js":13,"./util.js":38}],18:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL) {
var util = _dereq_("./util.js");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (!true) {
if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var caller = function(count) {
        var values = [];
        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
        return new Function("holder", "                                      \n\
            'use strict';                                                    \n\
            var callback = holder.fn;                                        \n\
            return callback(values);                                         \n\
            ".replace(/values/g, values.join(", ")));
    };
    var thenCallbacks = [];
    var callers = [undefined];
    for (var i = 1; i <= 5; ++i) {
        thenCallbacks.push(thenCallback(i));
        callers.push(caller(i));
    }

    var Holder = function(total, fn) {
        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
        this.fn = fn;
        this.total = total;
        this.now = 0;
    };

    Holder.prototype.callers = callers;
    Holder.prototype.checkFulfillment = function(promise) {
        var now = this.now;
        now++;
        var total = this.total;
        if (now >= total) {
            var handler = this.callers[total];
            promise._pushContext();
            var ret = tryCatch(handler)(this);
            promise._popContext();
            if (ret === errorObj) {
                promise._rejectCallback(ret.e, false, true);
            } else {
                promise._resolveCallback(ret);
            }
        } else {
            this.now = now;
        }
    };

    var reject = function (reason) {
        this._reject(reason);
    };
}
}

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (!true) {
            if (last < 6 && canEvaluate) {
                var ret = new Promise(INTERNAL);
                ret._captureStackTrace();
                var holder = new Holder(last, fn);
                var callbacks = thenCallbacks;
                for (var i = 0; i < last; ++i) {
                    var maybePromise = tryConvertToPromise(arguments[i], ret);
                    if (maybePromise instanceof Promise) {
                        maybePromise = maybePromise._target();
                        if (maybePromise._isPending()) {
                            maybePromise._then(callbacks[i], reject,
                                               undefined, ret, holder);
                        } else if (maybePromise._isFulfilled()) {
                            callbacks[i].call(ret,
                                              maybePromise._value(), holder);
                        } else {
                            ret._reject(maybePromise._reason());
                        }
                    } else {
                        callbacks[i].call(ret, maybePromise, holder);
                    }
                }
                return ret;
            }
        }
    }
    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util.js":38}],19:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL) {
var async = _dereq_("./async.js");
var util = _dereq_("./util.js");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var PENDING = {};
var EMPTY_ARRAY = [];

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    this._callback = fn;
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
    async.invoke(init, this, undefined);
}
util.inherits(MappingPromiseArray, PromiseArray);
function init() {this._init$(undefined, -2);}

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;
    if (values[index] === PENDING) {
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var callback = this._callback;
        var receiver = this._promise._boundTo;
        this._promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        this._promise._popContext();
        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            if (maybePromise._isPending()) {
                if (limit >= 1) this._inFlight++;
                values[index] = PENDING;
                return maybePromise._proxyPromiseArray(this, index);
            } else if (maybePromise._isFulfilled()) {
                ret = maybePromise._value();
            } else {
                return this._reject(maybePromise._reason());
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }

    }
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    var limit = typeof options === "object" && options !== null
        ? options.concurrency
        : 0;
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter);
}

Promise.prototype.map = function (fn, options) {
    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");

    return map(this, fn, options, null).promise();
};

Promise.map = function (promises, fn, options, _filter) {
    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
    return map(promises, fn, options, _filter).promise();
};


};

},{"./async.js":2,"./util.js":38}],20:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util.js");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        ret._popContext();
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn, args, ctx) {
    if (typeof fn !== "function") {
        return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value = util.isArray(args)
        ? tryCatch(fn).apply(ctx, args)
        : tryCatch(fn).call(ctx, args);
    ret._popContext();
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false, true);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util.js":38}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util.js");
var async = _dereq_("./async.js");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret = tryCatch(nodeback).apply(promise._boundTo, [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundTo;
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var target = promise._target();
        var newReason = target._getCarriedStackTrace();
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundTo, reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = 
Promise.prototype.nodeify = function (nodeback, options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./async.js":2,"./util.js":38}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray) {
var util = _dereq_("./util.js");
var async = _dereq_("./async.js");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

Promise.prototype.progressed = function (handler) {
    return this._then(undefined, undefined, handler, undefined, undefined);
};

Promise.prototype._progress = function (progressValue) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._target()._progressUnchecked(progressValue);

};

Promise.prototype._progressHandlerAt = function (index) {
    return index === 0
        ? this._progressHandler0
        : this[(index << 2) + index - 5 + 2];
};

Promise.prototype._doProgressWith = function (progression) {
    var progressValue = progression.value;
    var handler = progression.handler;
    var promise = progression.promise;
    var receiver = progression.receiver;

    var ret = tryCatch(handler).call(receiver, progressValue);
    if (ret === errorObj) {
        if (ret.e != null &&
            ret.e.name !== "StopProgressPropagation") {
            var trace = util.canAttachTrace(ret.e)
                ? ret.e : new Error(util.toString(ret.e));
            promise._attachExtraTrace(trace);
            promise._progress(ret.e);
        }
    } else if (ret instanceof Promise) {
        ret._then(promise._progress, null, null, promise, undefined);
    } else {
        promise._progress(ret);
    }
};


Promise.prototype._progressUnchecked = function (progressValue) {
    var len = this._length();
    var progress = this._progress;
    for (var i = 0; i < len; i++) {
        var handler = this._progressHandlerAt(i);
        var promise = this._promiseAt(i);
        if (!(promise instanceof Promise)) {
            var receiver = this._receiverAt(i);
            if (typeof handler === "function") {
                handler.call(receiver, progressValue, promise);
            } else if (receiver instanceof PromiseArray &&
                       !receiver._isResolved()) {
                receiver._promiseProgressed(progressValue, promise);
            }
            continue;
        }

        if (typeof handler === "function") {
            async.invoke(this._doProgressWith, this, {
                handler: handler,
                promise: promise,
                receiver: this._receiverAt(i),
                value: progressValue
            });
        } else {
            async.invoke(progress, promise, progressValue);
        }
    }
};
};

},{"./async.js":2,"./util.js":38}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/LhFpo0\u000a");
};
var reflect = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};

var util = _dereq_("./util.js");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var async = _dereq_("./async.js");
var errors = _dereq_("./errors.js");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {e: null};
var tryConvertToPromise = _dereq_("./thenables.js")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array.js")(Promise, INTERNAL,
                                    tryConvertToPromise, apiRejection);
var CapturedTrace = _dereq_("./captured_trace.js")();
var isDebugging = _dereq_("./debuggability.js")(Promise, CapturedTrace);
 /*jshint unused:false*/
var createContext =
    _dereq_("./context.js")(Promise, CapturedTrace, isDebugging);
var CatchFilter = _dereq_("./catch_filter.js")(NEXT_FILTER);
var PromiseResolver = _dereq_("./promise_resolver.js");
var nodebackForPromise = PromiseResolver._nodebackForPromise;
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function Promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("the promise constructor requires a resolver function\u000a\u000a    See http://goo.gl/EC22Yn\u000a");
    }
    if (this.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/KsIlge\u000a");
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._progressHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settledValue = undefined;
    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (typeof item === "function") {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(
                    new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a"));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        var catchFilter = new CatchFilter(catchInstances, fn, this);
        return this._then(undefined, catchFilter.doFilter, undefined,
            catchFilter, undefined);
    }
    return this._then(undefined, fn, undefined, undefined, undefined);
};

Promise.prototype.reflect = function () {
    return this._then(reflect, reflect, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject, didProgress) {
    if (isDebugging() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, didProgress,
        undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject, didProgress) {
    var promise = this._then(didFulfill, didReject, didProgress,
        undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (didFulfill, didReject) {
    return this.all()._then(didFulfill, didReject, undefined, APPLY, undefined);
};

Promise.prototype.isCancellable = function () {
    return !this.isResolved() &&
        this._cancellable();
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = function(fn) {
    var ret = new Promise(INTERNAL);
    var result = tryCatch(fn)(nodebackForPromise(ret));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true, true);
    }
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.defer = Promise.pending = function () {
    var promise = new Promise(INTERNAL);
    return new PromiseResolver(promise);
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        var val = ret;
        ret = new Promise(INTERNAL);
        ret._fulfillUnchecked(val);
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
    var prev = async._schedule;
    async._schedule = fn;
    return prev;
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    didProgress,
    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

    if (!haveInternalData) {
        ret._propagateFrom(this, 4 | 1);
        ret._captureStackTrace();
    }

    var target = this._target();
    if (target !== this) {
        if (receiver === undefined) receiver = this._boundTo;
        if (!haveInternalData) ret._setIsMigrated();
    }

    var callbackIndex = target._addCallbacks(didFulfill,
                                             didReject,
                                             didProgress,
                                             ret,
                                             receiver,
                                             getDomain());

    if (target._isResolved() && !target._isSettlePromisesQueued()) {
        async.invoke(
            target._settlePromiseAtPostResolution, target, callbackIndex);
    }

    return ret;
};

Promise.prototype._settlePromiseAtPostResolution = function (index) {
    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
    this._settlePromiseAt(index);
};

Promise.prototype._length = function () {
    return this._bitField & 131071;
};

Promise.prototype._isFollowingOrFulfilledOrRejected = function () {
    return (this._bitField & 939524096) > 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 536870912) === 536870912;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -131072) |
        (len & 131071);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 536870912;
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 33554432;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 33554432) > 0;
};

Promise.prototype._cancellable = function () {
    return (this._bitField & 67108864) > 0;
};

Promise.prototype._setCancellable = function () {
    this._bitField = this._bitField | 67108864;
};

Promise.prototype._unsetCancellable = function () {
    this._bitField = this._bitField & (~67108864);
};

Promise.prototype._setIsMigrated = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._unsetIsMigrated = function () {
    this._bitField = this._bitField & (~4194304);
};

Promise.prototype._isMigrated = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0
        ? this._receiver0
        : this[
            index * 5 - 5 + 4];
    if (ret === undefined && this._isBound()) {
        return this._boundTo;
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return index === 0
        ? this._promise0
        : this[index * 5 - 5 + 3];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return index === 0
        ? this._fulfillmentHandler0
        : this[index * 5 - 5 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return index === 0
        ? this._rejectionHandler0
        : this[index * 5 - 5 + 1];
};

Promise.prototype._migrateCallbacks = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var progress = follower._progressHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (promise instanceof Promise) promise._setIsMigrated();
    this._addCallbacks(fulfill, reject, progress, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    progress,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 131071 - 5) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        if (receiver !== undefined) this._receiver0 = receiver;
        if (typeof fulfill === "function" && !this._isCarryingStackTrace()) {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : domain.bind(fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : domain.bind(reject);
        }
        if (typeof progress === "function") {
            this._progressHandler0 =
                domain === null ? progress : domain.bind(progress);
        }
    } else {
        var base = index * 5 - 5;
        this[base + 3] = promise;
        this[base + 4] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : domain.bind(fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : domain.bind(reject);
        }
        if (typeof progress === "function") {
            this[base + 2] =
                domain === null ? progress : domain.bind(progress);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._setProxyHandlers = function (receiver, promiseSlotValue) {
    var index = this._length();

    if (index >= 131071 - 5) {
        index = 0;
        this._setLength(0);
    }
    if (index === 0) {
        this._promise0 = promiseSlotValue;
        this._receiver0 = receiver;
    } else {
        var base = index * 5 - 5;
        this[base + 3] = promiseSlotValue;
        this[base + 4] = receiver;
    }
    this._setLength(index + 1);
};

Promise.prototype._proxyPromiseArray = function (promiseArray, index) {
    this._setProxyHandlers(promiseArray, index);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false, true);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    var propagationFlags = 1 | (shouldBind ? 4 : 0);
    this._propagateFrom(maybePromise, propagationFlags);
    var promise = maybePromise._target();
    if (promise._isPending()) {
        var len = this._length();
        for (var i = 0; i < len; ++i) {
            promise._migrateCallbacks(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (promise._isFulfilled()) {
        this._fulfillUnchecked(promise._value());
    } else {
        this._rejectUnchecked(promise._reason(),
            promise._getCarriedStackTrace());
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, shouldNotMarkOriginatingFromRejection) {
    if (!shouldNotMarkOriginatingFromRejection) {
        util.markAsOriginatingFromRejection(reason);
    }
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason, hasStack ? undefined : trace);
};

Promise.prototype._resolveFromResolver = function (resolver) {
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = tryCatch(resolver)(function(value) {
        if (promise === null) return;
        promise._resolveCallback(value);
        promise = null;
    }, function (reason) {
        if (promise === null) return;
        promise._rejectCallback(reason, synchronous);
        promise = null;
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined && r === errorObj && promise !== null) {
        promise._rejectCallback(r.e, true, true);
        promise = null;
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    if (promise._isRejected()) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY && !this._isRejected()) {
        x = tryCatch(handler).apply(this._boundTo, value);
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    promise._popContext();

    if (x === errorObj || x === promise || x === NEXT_FILTER) {
        var err = x === promise ? makeSelfResolutionError() : x.e;
        promise._rejectCallback(err, false, true);
    } else {
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._cleanValues = function () {
    if (this._cancellable()) {
        this._cancellationParent = undefined;
    }
};

Promise.prototype._propagateFrom = function (parent, flags) {
    if ((flags & 1) > 0 && parent._cancellable()) {
        this._setCancellable();
        this._cancellationParent = parent;
    }
    if ((flags & 4) > 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
};

Promise.prototype._fulfill = function (value) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._fulfillUnchecked(value);
};

Promise.prototype._reject = function (reason, carriedStackTrace) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._rejectUnchecked(reason, carriedStackTrace);
};

Promise.prototype._settlePromiseAt = function (index) {
    var promise = this._promiseAt(index);
    var isPromise = promise instanceof Promise;

    if (isPromise && promise._isMigrated()) {
        promise._unsetIsMigrated();
        return async.invoke(this._settlePromiseAt, this, index);
    }
    var handler = this._isFulfilled()
        ? this._fulfillmentHandlerAt(index)
        : this._rejectionHandlerAt(index);

    var carriedStackTrace =
        this._isCarryingStackTrace() ? this._getCarriedStackTrace() : undefined;
    var value = this._settledValue;
    var receiver = this._receiverAt(index);


    this._clearCallbackDataAtIndex(index);

    if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof PromiseArray) {
        if (!receiver._isResolved()) {
            if (this._isFulfilled()) {
                receiver._promiseFulfilled(value, promise);
            }
            else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (this._isFulfilled()) {
            promise._fulfill(value);
        } else {
            promise._reject(value, carriedStackTrace);
        }
    }

    if (index >= 4 && (index & 31) === 4)
        async.invokeLater(this._setLength, this, 0);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    if (index === 0) {
        if (!this._isCarryingStackTrace()) {
            this._fulfillmentHandler0 = undefined;
        }
        this._rejectionHandler0 =
        this._progressHandler0 =
        this._receiver0 =
        this._promise0 = undefined;
    } else {
        var base = index * 5 - 5;
        this[base + 3] =
        this[base + 4] =
        this[base + 0] =
        this[base + 1] =
        this[base + 2] = undefined;
    }
};

Promise.prototype._isSettlePromisesQueued = function () {
    return (this._bitField &
            -1073741824) === -1073741824;
};

Promise.prototype._setSettlePromisesQueued = function () {
    this._bitField = this._bitField | -1073741824;
};

Promise.prototype._unsetSettlePromisesQueued = function () {
    this._bitField = this._bitField & (~-1073741824);
};

Promise.prototype._queueSettlePromises = function() {
    async.settlePromises(this);
    this._setSettlePromisesQueued();
};

Promise.prototype._fulfillUnchecked = function (value) {
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err, undefined);
    }
    this._setFulfilled();
    this._settledValue = value;
    this._cleanValues();

    if (this._length() > 0) {
        this._queueSettlePromises();
    }
};

Promise.prototype._rejectUncheckedCheckError = function (reason) {
    var trace = util.ensureErrorObject(reason);
    this._rejectUnchecked(reason, trace === reason ? undefined : trace);
};

Promise.prototype._rejectUnchecked = function (reason, trace) {
    if (reason === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err);
    }
    this._setRejected();
    this._settledValue = reason;
    this._cleanValues();

    if (this._isFinal()) {
        async.throwLater(function(e) {
            if ("stack" in e) {
                async.invokeFirst(
                    CapturedTrace.unhandledRejection, undefined, e);
            }
            throw e;
        }, trace === undefined ? reason : trace);
        return;
    }

    if (trace !== undefined && trace !== reason) {
        this._setCarriedStackTrace(trace);
    }

    if (this._length() > 0) {
        this._queueSettlePromises();
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._settlePromises = function () {
    this._unsetSettlePromisesQueued();
    var len = this._length();
    for (var i = 0; i < len; i++) {
        this._settlePromiseAt(i);
    }
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./progress.js")(Promise, PromiseArray);
_dereq_("./method.js")(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_("./bind.js")(Promise, INTERNAL, tryConvertToPromise);
_dereq_("./finally.js")(Promise, NEXT_FILTER, tryConvertToPromise);
_dereq_("./direct_resolve.js")(Promise);
_dereq_("./synchronous_inspection.js")(Promise);
_dereq_("./join.js")(Promise, PromiseArray, tryConvertToPromise, INTERNAL);
Promise.Promise = Promise;
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
_dereq_('./cancel.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise);
_dereq_('./nodeify.js')(Promise);
_dereq_('./call_get.js')(Promise);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
_dereq_('./settle.js')(Promise, PromiseArray);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./timers.js')(Promise, INTERNAL);
_dereq_('./filter.js')(Promise, INTERNAL);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._progressHandler0 = value;                                         
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
        p._settledValue = value;                                             
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    CapturedTrace.setBounds(async.firstLineError, util.lastLineError);       
    return Promise;                                                          

};

},{"./any.js":1,"./async.js":2,"./bind.js":3,"./call_get.js":5,"./cancel.js":6,"./captured_trace.js":7,"./catch_filter.js":8,"./context.js":9,"./debuggability.js":10,"./direct_resolve.js":11,"./each.js":12,"./errors.js":13,"./filter.js":15,"./finally.js":16,"./generators.js":17,"./join.js":18,"./map.js":19,"./method.js":20,"./nodeify.js":21,"./progress.js":22,"./promise_array.js":24,"./promise_resolver.js":25,"./promisify.js":26,"./props.js":27,"./race.js":29,"./reduce.js":30,"./settle.js":32,"./some.js":33,"./synchronous_inspection.js":34,"./thenables.js":35,"./timers.js":36,"./using.js":37,"./util.js":38}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection) {
var util = _dereq_("./util.js");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    var parent;
    if (values instanceof Promise) {
        parent = values;
        promise._propagateFrom(parent, 1 | 4);
    }
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        this._values = values;
        if (values._isFulfilled()) {
            values = values._value();
            if (!isArray(values)) {
                var err = new Promise.TypeError("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
                this.__hardReject__(err);
                return;
            }
        } else if (values._isPending()) {
            values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
            return;
        } else {
            this._reject(values._reason());
            return;
        }
    } else if (!isArray(values)) {
        this._promise._reject(apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a")._reason());
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var promise = this._promise;
    for (var i = 0; i < len; ++i) {
        var isResolved = this._isResolved();
        var maybePromise = tryConvertToPromise(values[i], promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            if (isResolved) {
                maybePromise._ignoreRejections();
            } else if (maybePromise._isPending()) {
                maybePromise._proxyPromiseArray(this, i);
            } else if (maybePromise._isFulfilled()) {
                this._promiseFulfilled(maybePromise._value(), i);
            } else {
                this._promiseRejected(maybePromise._reason(), i);
            }
        } else if (!isResolved) {
            this._promiseFulfilled(maybePromise, i);
        }
    }
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype.__hardReject__ =
PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false, true);
};

PromiseArray.prototype._promiseProgressed = function (progressValue, index) {
    this._promise._progress({
        index: index,
        value: progressValue
    });
};


PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

PromiseArray.prototype._promiseRejected = function (reason, index) {
    this._totalResolved++;
    this._reject(reason);
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util.js":38}],25:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util.js");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors.js");
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var haveGetters = util.haveGetters;
var es5 = _dereq_("./es5.js");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise) {
    return function(err, value) {
        if (promise === null) return;

        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (arguments.length > 2) {
            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
            promise._fulfill(args);
        } else {
            promise._fulfill(value);
        }

        promise = null;
    };
}


var PromiseResolver;
if (!haveGetters) {
    PromiseResolver = function (promise) {
        this.promise = promise;
        this.asCallback = nodebackForPromise(promise);
        this.callback = this.asCallback;
    };
}
else {
    PromiseResolver = function (promise) {
        this.promise = promise;
    };
}
if (haveGetters) {
    var prop = {
        get: function() {
            return nodebackForPromise(this.promise);
        }
    };
    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
}

PromiseResolver._nodebackForPromise = nodebackForPromise;

PromiseResolver.prototype.toString = function () {
    return "[object PromiseResolver]";
};

PromiseResolver.prototype.resolve =
PromiseResolver.prototype.fulfill = function (value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
    }
    this.promise._resolveCallback(value);
};

PromiseResolver.prototype.reject = function (reason) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
    }
    this.promise._rejectCallback(reason);
};

PromiseResolver.prototype.progress = function (value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
    }
    this.promise._progress(value);
};

PromiseResolver.prototype.cancel = function (err) {
    this.promise.cancel(err);
};

PromiseResolver.prototype.timeout = function () {
    this.reject(new TimeoutError("timeout"));
};

PromiseResolver.prototype.isResolved = function () {
    return this.promise.isResolved();
};

PromiseResolver.prototype.toJSON = function () {
    return this.promise.toJSON();
};

module.exports = PromiseResolver;

},{"./errors.js":13,"./es5.js":14,"./util.js":38}],26:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util.js");
var nodebackForPromise = _dereq_("./promise_resolver.js")
    ._nodebackForPromise;
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/iWrZbw\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (!true) {
var switchCaseArgumentOrder = function(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 3);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
        ret.push(i);
    }
    return ret;
};

var argumentSequence = function(argumentCount) {
    return util.filledRange(argumentCount, "_arg", "");
};

var parameterDeclaration = function(parameterCount) {
    return util.filledRange(
        Math.max(parameterCount, 3), "_arg", "");
};

var parameterCount = function(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
};

makeNodePromisifiedEval =
function(callback, receiver, originalName, fn) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (shouldProxyThis) {
            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
        } else {
            ret = receiver === undefined
                ? "ret = callback({{args}}, nodeback); break;\n"
                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
        }
        return ret.replace("{{args}}", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for (var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", (shouldProxyThis
                                ? "ret = callback.apply(this, args);\n"
                                : "ret = callback.apply(receiver, args);\n"));
        return ret;
    }

    var getFunctionCode = typeof callback === "string"
                                ? ("this != null ? this['"+callback+"'] : fn")
                                : "fn";

    return new Function("Promise",
                        "fn",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "tryCatch",
                        "errorObj",
                        "notEnumerableProp",
                        "INTERNAL","'use strict';                            \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise);                      \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
        "
        .replace("Parameters", parameterDeclaration(newParameterCount))
        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
        .replace("[GetFunctionCode]", getFunctionCode))(
            Promise,
            fn,
            receiver,
            withAppended,
            maybeWrapAsError,
            nodebackForPromise,
            util.tryCatch,
            util.errorObj,
            util.notEnumerableProp,
            INTERNAL
        );
};
}

function makeNodePromisifiedClosure(callback, receiver, _, fn) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        obj[promisifiedKey] = promisifier === makeNodePromisified
                ? makeNodePromisified(key, THIS, key, fn, suffix)
                : promisifier(fn, function() {
                    return makeNodePromisified(key, THIS, key, fn, suffix);
                });
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver) {
    return makeNodePromisified(callback, receiver, undefined, callback);
}

Promise.promisify = function (fn, receiver) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
    }
    if (isPromisified(fn)) {
        return fn;
    }
    var ret = promisify(fn, arguments.length < 2 ? THIS : receiver);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/9ITlV0\u000a");
    }
    options = Object(options);
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/8FZo5V\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier);
            promisifyAll(value, suffix, filter, promisifier);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier);
};
};


},{"./errors":13,"./promise_resolver.js":25,"./util.js":38}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util.js");
var isObject = util.isObject;
var es5 = _dereq_("./es5.js");

function PropertiesPromiseArray(obj) {
    var keys = es5.keys(obj);
    var len = keys.length;
    var values = new Array(len * 2);
    for (var i = 0; i < len; ++i) {
        var key = keys[i];
        values[i] = obj[key];
        values[i + len] = key;
    }
    this.constructor$(values);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {
    this._init$(undefined, -3) ;
};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val = {};
        var keyOffset = this.length();
        for (var i = 0, len = this.length(); i < len; ++i) {
            val[this._values[i + keyOffset]] = this._values[i];
        }
        this._resolve(val);
    }
};

PropertiesPromiseArray.prototype._promiseProgressed = function (value, index) {
    this._promise._progress({
        key: this._values[index + this.length()],
        value: value
    });
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/OsFKC8\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 4);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5.js":14,"./util.js":38}],28:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype._unshiftOne = function(value) {
    var capacity = this._capacity;
    this._checkCapacity(this.length() + 1);
    var front = this._front;
    var i = (((( front - 1 ) &
                    ( capacity - 1) ) ^ capacity ) - capacity );
    this[i] = value;
    this._front = i;
    this._length = this.length() + 1;
};

Queue.prototype.unshift = function(fn, receiver, arg) {
    this._unshiftOne(arg);
    this._unshiftOne(receiver);
    this._unshiftOne(fn);
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],29:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var isArray = _dereq_("./util.js").isArray;

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else if (!isArray(promises)) {
        return apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 4 | 1);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util.js":38}],30:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL) {
var async = _dereq_("./async.js");
var util = _dereq_("./util.js");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
function ReductionPromiseArray(promises, fn, accum, _each) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    this._preservedValues = _each === INTERNAL ? [] : null;
    this._zerothIsAccum = (accum === undefined);
    this._gotAccum = false;
    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
    this._valuesPhase = undefined;
    var maybePromise = tryConvertToPromise(accum, this._promise);
    var rejected = false;
    var isPromise = maybePromise instanceof Promise;
    if (isPromise) {
        maybePromise = maybePromise._target();
        if (maybePromise._isPending()) {
            maybePromise._proxyPromiseArray(this, -1);
        } else if (maybePromise._isFulfilled()) {
            accum = maybePromise._value();
            this._gotAccum = true;
        } else {
            this._reject(maybePromise._reason());
            rejected = true;
        }
    }
    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
    this._callback = fn;
    this._accum = accum;
    if (!rejected) async.invoke(init, this, undefined);
}
function init() {
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._init = function () {};

ReductionPromiseArray.prototype._resolveEmptyArray = function () {
    if (this._gotAccum || this._zerothIsAccum) {
        this._resolve(this._preservedValues !== null
                        ? [] : this._accum);
    }
};

ReductionPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    values[index] = value;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var isEach = preservedValues !== null;
    var gotAccum = this._gotAccum;
    var valuesPhase = this._valuesPhase;
    var valuesPhaseIndex;
    if (!valuesPhase) {
        valuesPhase = this._valuesPhase = new Array(length);
        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
            valuesPhase[valuesPhaseIndex] = 0;
        }
    }
    valuesPhaseIndex = valuesPhase[index];

    if (index === 0 && this._zerothIsAccum) {
        this._accum = value;
        this._gotAccum = gotAccum = true;
        valuesPhase[index] = ((valuesPhaseIndex === 0)
            ? 1 : 2);
    } else if (index === -1) {
        this._accum = value;
        this._gotAccum = gotAccum = true;
    } else {
        if (valuesPhaseIndex === 0) {
            valuesPhase[index] = 1;
        } else {
            valuesPhase[index] = 2;
            this._accum = value;
        }
    }
    if (!gotAccum) return;

    var callback = this._callback;
    var receiver = this._promise._boundTo;
    var ret;

    for (var i = this._reducingIndex; i < length; ++i) {
        valuesPhaseIndex = valuesPhase[i];
        if (valuesPhaseIndex === 2) {
            this._reducingIndex = i + 1;
            continue;
        }
        if (valuesPhaseIndex !== 1) return;
        value = values[i];
        this._promise._pushContext();
        if (isEach) {
            preservedValues.push(value);
            ret = tryCatch(callback).call(receiver, value, i, length);
        }
        else {
            ret = tryCatch(callback)
                .call(receiver, this._accum, value, i, length);
        }
        this._promise._popContext();

        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            if (maybePromise._isPending()) {
                valuesPhase[i] = 4;
                return maybePromise._proxyPromiseArray(this, i);
            } else if (maybePromise._isFulfilled()) {
                ret = maybePromise._value();
            } else {
                return this._reject(maybePromise._reason());
            }
        }

        this._reducingIndex = i + 1;
        this._accum = ret;
    }

    this._resolve(isEach ? preservedValues : this._accum);
};

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};
};

},{"./async.js":2,"./util.js":38}],31:[function(_dereq_,module,exports){
"use strict";
var schedule;
var util = _dereq_("./util");
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
};
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            window.navigator.standalone)) {
    schedule = function(fn) {
        var div = document.createElement("div");
        var observer = new MutationObserver(fn);
        observer.observe(div, {attributes: true});
        return function() { div.classList.toggle("foo"); };
    };
    schedule.isStatic = true;
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":38}],32:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util.js");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 268435456;
    ret._settledValue = value;
    this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 134217728;
    ret._settledValue = reason;
    this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return new SettledPromiseArray(this).promise();
};
};

},{"./util.js":38}],33:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util.js");
var RangeError = _dereq_("./errors.js").RangeError;
var AggregateError = _dereq_("./errors.js").AggregateError;
var isArray = util.isArray;


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
    }

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            e.push(this._values[i]);
        }
        this._reject(e);
    }
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/1wAmHx\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors.js":13,"./util.js":38}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValue = promise._settledValue;
    }
    else {
        this._bitField = 0;
        this._settledValue = undefined;
    }
}

PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
    }
    return this._settledValue;
};

PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
    }
    return this._settledValue;
};

PromiseInspection.prototype.isFulfilled =
Promise.prototype._isFulfilled = function () {
    return (this._bitField & 268435456) > 0;
};

PromiseInspection.prototype.isRejected =
Promise.prototype._isRejected = function () {
    return (this._bitField & 134217728) > 0;
};

PromiseInspection.prototype.isPending =
Promise.prototype._isPending = function () {
    return (this._bitField & 402653184) === 0;
};

PromiseInspection.prototype.isResolved =
Promise.prototype._isResolved = function () {
    return (this._bitField & 402653184) > 0;
};

Promise.prototype.isPending = function() {
    return this._target()._isPending();
};

Promise.prototype.isRejected = function() {
    return this._target()._isRejected();
};

Promise.prototype.isFulfilled = function() {
    return this._target()._isFulfilled();
};

Promise.prototype.isResolved = function() {
    return this._target()._isResolved();
};

Promise.prototype._value = function() {
    return this._settledValue;
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue;
};

Promise.prototype.value = function() {
    var target = this._target();
    if (!target.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
    }
    return target._settledValue;
};

Promise.prototype.reason = function() {
    var target = this._target();
    if (!target.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
    }
    target._unsetRejectionIsUnhandled();
    return target._settledValue;
};


Promise.PromiseInspection = PromiseInspection;
};

},{}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util.js");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) {
            return obj;
        }
        else if (isAnyBluebirdPromise(obj)) {
            var ret = new Promise(INTERNAL);
            obj._then(
                ret._fulfillUnchecked,
                ret._rejectUncheckedCheckError,
                ret._progressUnchecked,
                ret,
                null
            );
            return ret;
        }
        var then = util.tryCatch(getThen)(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function getThen(obj) {
    return obj.then;
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    return hasProp.call(obj, "_promise0");
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x,
                                        resolveFromThenable,
                                        rejectFromThenable,
                                        progressFromThenable);
    synchronous = false;
    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolveFromThenable(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function rejectFromThenable(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }

    function progressFromThenable(value) {
        if (!promise) return;
        if (typeof promise._progress === "function") {
            promise._progress(value);
        }
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util.js":38}],36:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util.js");
var TimeoutError = Promise.TimeoutError;

var afterTimeout = function (promise, message) {
    if (!promise.isPending()) return;
    if (typeof message !== "string") {
        message = "operation timed out";
    }
    var err = new TimeoutError(message);
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._cancel(err);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (value, ms) {
    if (ms === undefined) {
        ms = value;
        value = undefined;
        var ret = new Promise(INTERNAL);
        setTimeout(function() { ret._fulfill(); }, ms);
        return ret;
    }
    ms = +ms;
    return Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
};

Promise.prototype.delay = function (ms) {
    return delay(this, ms);
};

function successClear(value) {
    var handle = this;
    if (handle instanceof Number) handle = +handle;
    clearTimeout(handle);
    return value;
}

function failureClear(reason) {
    var handle = this;
    if (handle instanceof Number) handle = +handle;
    clearTimeout(handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret = this.then().cancellable();
    ret._cancellationParent = this;
    var handle = setTimeout(function timeoutTimeout() {
        afterTimeout(ret, message);
    }, ms);
    return ret._then(successClear, failureClear, undefined, handle, undefined);
};

};

},{"./util.js":38}],37:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext) {
    var TypeError = _dereq_("./errors.js").TypeError;
    var inherits = _dereq_("./util.js").inherits;
    var PromiseInspection = Promise.PromiseInspection;

    function inspectionMapper(inspections) {
        var len = inspections.length;
        for (var i = 0; i < len; ++i) {
            var inspection = inspections[i];
            if (inspection.isRejected()) {
                return Promise.reject(inspection.error());
            }
            inspections[i] = inspection._settledValue;
        }
        return inspections;
    }

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = Promise.defer();
        function iterator() {
            if (i >= len) return ret.resolve();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret.promise;
    }

    function disposerSuccess(value) {
        var inspection = new PromiseInspection();
        inspection._settledValue = value;
        inspection._bitField = 268435456;
        return dispose(this, inspection).thenReturn(value);
    }

    function disposerFail(reason) {
        var inspection = new PromiseInspection();
        inspection._settledValue = reason;
        inspection._bitField = 134217728;
        return dispose(this, inspection).thenThrow(reason);
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return null;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== null
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
        len--;
        var resources = new Array(len);
        for (var i = 0; i < len; ++i) {
            var resource = arguments[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var promise = Promise.settle(resources)
            .then(inspectionMapper)
            .then(function(vals) {
                promise._pushContext();
                var ret;
                try {
                    ret = fn.apply(undefined, vals);
                } finally {
                    promise._popContext();
                }
                return ret;
            })
            ._then(
                disposerSuccess, disposerFail, undefined, resources, undefined);
        resources.promise = promise;
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 262144;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 262144) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~262144);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors.js":13,"./util.js":38}],38:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5.js");
var canEvaluate = typeof navigator == "undefined";
var haveGetters = (function(){
    try {
        var o = {};
        es5.defineProperty(o, "f", {
            get: function () {
                return 3;
            }
        });
        return o.f === 3;
    }
    catch (e) {
        return false;
    }

})();

var errorObj = {e: {}};
var tryCatchTarget;
function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return !isPrimitive(value);
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function f() {}
    f.prototype = obj;
    var l = 8;
    while (l--) new f();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return obj instanceof Error && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    haveGetters: haveGetters,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]"
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5.js":14}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9icm93c2VyL2JsdWViaXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAcHJlc2VydmVcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG4vKipcbiAqIGJsdWViaXJkIGJ1aWxkIHZlcnNpb24gMi45LjMzXG4gKiBGZWF0dXJlcyBlbmFibGVkOiBjb3JlLCByYWNlLCBjYWxsX2dldCwgZ2VuZXJhdG9ycywgbWFwLCBub2RlaWZ5LCBwcm9taXNpZnksIHByb3BzLCByZWR1Y2UsIHNldHRsZSwgc29tZSwgY2FuY2VsLCB1c2luZywgZmlsdGVyLCBhbnksIGVhY2gsIHRpbWVyc1xuKi9cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIGY7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9mPXdpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2Y9Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYoZj1zZWxmKSxmLlByb21pc2U9ZSgpfX0oZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIF9kZXJlcV89PVwiZnVuY3Rpb25cIiYmX2RlcmVxXztpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX2RlcmVxXz09XCJmdW5jdGlvblwiJiZfZGVyZXFfO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIFNvbWVQcm9taXNlQXJyYXkgPSBQcm9taXNlLl9Tb21lUHJvbWlzZUFycmF5O1xuZnVuY3Rpb24gYW55KHByb21pc2VzKSB7XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgcmV0LnNldEhvd01hbnkoMSk7XG4gICAgcmV0LnNldFVud3JhcCgpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2UuYW55ID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIGFueShwcm9taXNlcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFueSh0aGlzKTtcbn07XG5cbn07XG5cbn0se31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZmlyc3RMaW5lRXJyb3I7XG50cnkge3Rocm93IG5ldyBFcnJvcigpOyB9IGNhdGNoIChlKSB7Zmlyc3RMaW5lRXJyb3IgPSBlO31cbnZhciBzY2hlZHVsZSA9IF9kZXJlcV8oXCIuL3NjaGVkdWxlLmpzXCIpO1xudmFyIFF1ZXVlID0gX2RlcmVxXyhcIi4vcXVldWUuanNcIik7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG5cbmZ1bmN0aW9uIEFzeW5jKCkge1xuICAgIHRoaXMuX2lzVGlja1VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sYXRlUXVldWUgPSBuZXcgUXVldWUoMTYpO1xuICAgIHRoaXMuX25vcm1hbFF1ZXVlID0gbmV3IFF1ZXVlKDE2KTtcbiAgICB0aGlzLl90cmFtcG9saW5lRW5hYmxlZCA9IHRydWU7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZHJhaW5RdWV1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX2RyYWluUXVldWVzKCk7XG4gICAgfTtcbiAgICB0aGlzLl9zY2hlZHVsZSA9XG4gICAgICAgIHNjaGVkdWxlLmlzU3RhdGljID8gc2NoZWR1bGUodGhpcy5kcmFpblF1ZXVlcykgOiBzY2hlZHVsZTtcbn1cblxuQXN5bmMucHJvdG90eXBlLmRpc2FibGVUcmFtcG9saW5lSWZOZWNlc3NhcnkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodXRpbC5oYXNEZXZUb29scykge1xuICAgICAgICB0aGlzLl90cmFtcG9saW5lRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5lbmFibGVUcmFtcG9saW5lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICB0aGlzLl90cmFtcG9saW5lRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5oYXZlSXRlbXNRdWV1ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbFF1ZXVlLmxlbmd0aCgpID4gMDtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS50aHJvd0xhdGVyID0gZnVuY3Rpb24oZm4sIGFyZykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGFyZyA9IGZuO1xuICAgICAgICBmbiA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgYXJnOyB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuKGFyZyk7XG4gICAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB0cnkge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuKGFyZyk7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXN5bmMgc2NoZWR1bGVyIGF2YWlsYWJsZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL20zT1RYa1xcdTAwMGFcIik7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gQXN5bmNJbnZva2VMYXRlcihmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHRoaXMuX2xhdGVRdWV1ZS5wdXNoKGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbn1cblxuZnVuY3Rpb24gQXN5bmNJbnZva2UoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0aGlzLl9ub3JtYWxRdWV1ZS5wdXNoKGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbn1cblxuZnVuY3Rpb24gQXN5bmNTZXR0bGVQcm9taXNlcyhwcm9taXNlKSB7XG4gICAgdGhpcy5fbm9ybWFsUXVldWUuX3B1c2hPbmUocHJvbWlzZSk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59XG5cbmlmICghdXRpbC5oYXNEZXZUb29scykge1xuICAgIEFzeW5jLnByb3RvdHlwZS5pbnZva2VMYXRlciA9IEFzeW5jSW52b2tlTGF0ZXI7XG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZSA9IEFzeW5jSW52b2tlO1xuICAgIEFzeW5jLnByb3RvdHlwZS5zZXR0bGVQcm9taXNlcyA9IEFzeW5jU2V0dGxlUHJvbWlzZXM7XG59IGVsc2Uge1xuICAgIGlmIChzY2hlZHVsZS5pc1N0YXRpYykge1xuICAgICAgICBzY2hlZHVsZSA9IGZ1bmN0aW9uKGZuKSB7IHNldFRpbWVvdXQoZm4sIDApOyB9O1xuICAgIH1cbiAgICBBc3luYy5wcm90b3R5cGUuaW52b2tlTGF0ZXIgPSBmdW5jdGlvbiAoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkKSB7XG4gICAgICAgICAgICBBc3luY0ludm9rZUxhdGVyLmNhbGwodGhpcywgZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4uY2FsbChyZWNlaXZlciwgYXJnKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIChmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgICAgICBpZiAodGhpcy5fdHJhbXBvbGluZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIEFzeW5jSW52b2tlLmNhbGwodGhpcywgZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChyZWNlaXZlciwgYXJnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFzeW5jLnByb3RvdHlwZS5zZXR0bGVQcm9taXNlcyA9IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkKSB7XG4gICAgICAgICAgICBBc3luY1NldHRsZVByb21pc2VzLmNhbGwodGhpcywgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9zZXR0bGVQcm9taXNlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5Bc3luYy5wcm90b3R5cGUuaW52b2tlRmlyc3QgPSBmdW5jdGlvbiAoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0aGlzLl9ub3JtYWxRdWV1ZS51bnNoaWZ0KGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fZHJhaW5RdWV1ZSA9IGZ1bmN0aW9uKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCgpID4gMCkge1xuICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGZuLl9zZXR0bGVQcm9taXNlcygpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlY2VpdmVyID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgdmFyIGFyZyA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgfVxufTtcblxuQXN5bmMucHJvdG90eXBlLl9kcmFpblF1ZXVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9kcmFpblF1ZXVlKHRoaXMuX25vcm1hbFF1ZXVlKTtcbiAgICB0aGlzLl9yZXNldCgpO1xuICAgIHRoaXMuX2RyYWluUXVldWUodGhpcy5fbGF0ZVF1ZXVlKTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcXVldWVUaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5faXNUaWNrVXNlZCkge1xuICAgICAgICB0aGlzLl9pc1RpY2tVc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGUodGhpcy5kcmFpblF1ZXVlcyk7XG4gICAgfVxufTtcblxuQXN5bmMucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9pc1RpY2tVc2VkID0gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBBc3luYygpO1xubW9kdWxlLmV4cG9ydHMuZmlyc3RMaW5lRXJyb3IgPSBmaXJzdExpbmVFcnJvcjtcblxufSx7XCIuL3F1ZXVlLmpzXCI6MjgsXCIuL3NjaGVkdWxlLmpzXCI6MzEsXCIuL3V0aWwuanNcIjozOH1dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlKSB7XG52YXIgcmVqZWN0VGhpcyA9IGZ1bmN0aW9uKF8sIGUpIHtcbiAgICB0aGlzLl9yZWplY3QoZSk7XG59O1xuXG52YXIgdGFyZ2V0UmVqZWN0ZWQgPSBmdW5jdGlvbihlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dC5wcm9taXNlUmVqZWN0aW9uUXVldWVkID0gdHJ1ZTtcbiAgICBjb250ZXh0LmJpbmRpbmdQcm9taXNlLl90aGVuKHJlamVjdFRoaXMsIHJlamVjdFRoaXMsIG51bGwsIHRoaXMsIGUpO1xufTtcblxudmFyIGJpbmRpbmdSZXNvbHZlZCA9IGZ1bmN0aW9uKHRoaXNBcmcsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9zZXRCb3VuZFRvKHRoaXNBcmcpO1xuICAgIGlmICh0aGlzLl9pc1BlbmRpbmcoKSkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlQ2FsbGJhY2soY29udGV4dC50YXJnZXQpO1xuICAgIH1cbn07XG5cbnZhciBiaW5kaW5nUmVqZWN0ZWQgPSBmdW5jdGlvbihlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFjb250ZXh0LnByb21pc2VSZWplY3Rpb25RdWV1ZWQpIHRoaXMuX3JlamVjdChlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAodGhpc0FyZykge1xuICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHRoaXNBcmcpO1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHRoaXMsIDEpO1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXQoKTtcbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHByb21pc2VSZWplY3Rpb25RdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcHJvbWlzZTogcmV0LFxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICBiaW5kaW5nUHJvbWlzZTogbWF5YmVQcm9taXNlXG4gICAgICAgIH07XG4gICAgICAgIHRhcmdldC5fdGhlbihJTlRFUk5BTCwgdGFyZ2V0UmVqZWN0ZWQsIHJldC5fcHJvZ3Jlc3MsIHJldCwgY29udGV4dCk7XG4gICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihcbiAgICAgICAgICAgIGJpbmRpbmdSZXNvbHZlZCwgYmluZGluZ1JlamVjdGVkLCByZXQuX3Byb2dyZXNzLCByZXQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5fc2V0Qm91bmRUbyh0aGlzQXJnKTtcbiAgICAgICAgcmV0Ll9yZXNvbHZlQ2FsbGJhY2sodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRCb3VuZFRvID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTMxMDcyO1xuICAgICAgICB0aGlzLl9ib3VuZFRvID0gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjEzMTA3Mik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzQm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEzMTA3MikgPT09IDEzMTA3Mjtcbn07XG5cblByb21pc2UuYmluZCA9IGZ1bmN0aW9uICh0aGlzQXJnLCB2YWx1ZSkge1xuICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHRoaXNBcmcpO1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG5cbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBtYXliZVByb21pc2UuX3RoZW4oZnVuY3Rpb24odGhpc0FyZykge1xuICAgICAgICAgICAgcmV0Ll9zZXRCb3VuZFRvKHRoaXNBcmcpO1xuICAgICAgICAgICAgcmV0Ll9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xuICAgICAgICB9LCByZXQuX3JlamVjdCwgcmV0Ll9wcm9ncmVzcywgcmV0LCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG59O1xuXG59LHt9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIG9sZDtcbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIikgb2xkID0gUHJvbWlzZTtcbmZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgdHJ5IHsgaWYgKFByb21pc2UgPT09IGJsdWViaXJkKSBQcm9taXNlID0gb2xkOyB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGJsdWViaXJkO1xufVxudmFyIGJsdWViaXJkID0gX2RlcmVxXyhcIi4vcHJvbWlzZS5qc1wiKSgpO1xuYmx1ZWJpcmQubm9Db25mbGljdCA9IG5vQ29uZmxpY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGJsdWViaXJkO1xuXG59LHtcIi4vcHJvbWlzZS5qc1wiOjIzfV0sNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBjciA9IE9iamVjdC5jcmVhdGU7XG5pZiAoY3IpIHtcbiAgICB2YXIgY2FsbGVyQ2FjaGUgPSBjcihudWxsKTtcbiAgICB2YXIgZ2V0dGVyQ2FjaGUgPSBjcihudWxsKTtcbiAgICBjYWxsZXJDYWNoZVtcIiBzaXplXCJdID0gZ2V0dGVyQ2FjaGVbXCIgc2l6ZVwiXSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGNhbkV2YWx1YXRlID0gdXRpbC5jYW5FdmFsdWF0ZTtcbnZhciBpc0lkZW50aWZpZXIgPSB1dGlsLmlzSWRlbnRpZmllcjtcblxudmFyIGdldE1ldGhvZENhbGxlcjtcbnZhciBnZXRHZXR0ZXI7XG5pZiAoIXRydWUpIHtcbnZhciBtYWtlTWV0aG9kQ2FsbGVyID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiZW5zdXJlTWV0aG9kXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGVuc3VyZU1ldGhvZChvYmosICdtZXRob2ROYW1lJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHN3aXRjaChsZW4pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdKTsgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdKTsgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdKTsgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBvYmoubWV0aG9kTmFtZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5tZXRob2ROYW1lLmFwcGx5KG9iaiwgdGhpcyk7ICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZSgvbWV0aG9kTmFtZS9nLCBtZXRob2ROYW1lKSkoZW5zdXJlTWV0aG9kKTtcbn07XG5cbnZhciBtYWtlR2V0dGVyID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJvYmpcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICByZXR1cm4gb2JqLnByb3BlcnR5TmFtZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIi5yZXBsYWNlKFwicHJvcGVydHlOYW1lXCIsIHByb3BlcnR5TmFtZSkpO1xufTtcblxudmFyIGdldENvbXBpbGVkID0gZnVuY3Rpb24obmFtZSwgY29tcGlsZXIsIGNhY2hlKSB7XG4gICAgdmFyIHJldCA9IGNhY2hlW25hbWVdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFpc0lkZW50aWZpZXIobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNvbXBpbGVyKG5hbWUpO1xuICAgICAgICBjYWNoZVtuYW1lXSA9IHJldDtcbiAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSsrO1xuICAgICAgICBpZiAoY2FjaGVbXCIgc2l6ZVwiXSA+IDUxMikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjYWNoZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSBkZWxldGUgY2FjaGVba2V5c1tpXV07XG4gICAgICAgICAgICBjYWNoZVtcIiBzaXplXCJdID0ga2V5cy5sZW5ndGggLSAyNTY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmdldE1ldGhvZENhbGxlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZU1ldGhvZENhbGxlciwgY2FsbGVyQ2FjaGUpO1xufTtcblxuZ2V0R2V0dGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBnZXRDb21waWxlZChuYW1lLCBtYWtlR2V0dGVyLCBnZXR0ZXJDYWNoZSk7XG59O1xufVxuXG5mdW5jdGlvbiBlbnN1cmVNZXRob2Qob2JqLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIGZuO1xuICAgIGlmIChvYmogIT0gbnVsbCkgZm4gPSBvYmpbbWV0aG9kTmFtZV07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJPYmplY3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKG9iaikgKyBcIiBoYXMgbm8gbWV0aG9kICdcIiArXG4gICAgICAgICAgICB1dGlsLnRvU3RyaW5nKG1ldGhvZE5hbWUpICsgXCInXCI7XG4gICAgICAgIHRocm93IG5ldyBQcm9taXNlLlR5cGVFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjYWxsZXIob2JqKSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSB0aGlzLnBvcCgpO1xuICAgIHZhciBmbiA9IGVuc3VyZU1ldGhvZChvYmosIG1ldGhvZE5hbWUpO1xuICAgIHJldHVybiBmbi5hcHBseShvYmosIHRoaXMpO1xufVxuUHJvbWlzZS5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgdmFyICRfbGVuID0gYXJndW1lbnRzLmxlbmd0aDt2YXIgYXJncyA9IG5ldyBBcnJheSgkX2xlbiAtIDEpOyBmb3IodmFyICRfaSA9IDE7ICRfaSA8ICRfbGVuOyArKyRfaSkge2FyZ3NbJF9pIC0gMV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgaWYgKCF0cnVlKSB7XG4gICAgICAgIGlmIChjYW5FdmFsdWF0ZSkge1xuICAgICAgICAgICAgdmFyIG1heWJlQ2FsbGVyID0gZ2V0TWV0aG9kQ2FsbGVyKG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgaWYgKG1heWJlQ2FsbGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICAgICAgICAgIG1heWJlQ2FsbGVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJncywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmdzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oY2FsbGVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJncywgdW5kZWZpbmVkKTtcbn07XG5cbmZ1bmN0aW9uIG5hbWVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5mdW5jdGlvbiBpbmRleGVkR2V0dGVyKG9iaikge1xuICAgIHZhciBpbmRleCA9ICt0aGlzO1xuICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gTWF0aC5tYXgoMCwgaW5kZXggKyBvYmoubGVuZ3RoKTtcbiAgICByZXR1cm4gb2JqW2luZGV4XTtcbn1cblByb21pc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICB2YXIgaXNJbmRleCA9ICh0eXBlb2YgcHJvcGVydHlOYW1lID09PSBcIm51bWJlclwiKTtcbiAgICB2YXIgZ2V0dGVyO1xuICAgIGlmICghaXNJbmRleCkge1xuICAgICAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZUdldHRlciA9IGdldEdldHRlcihwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgZ2V0dGVyID0gbWF5YmVHZXR0ZXIgIT09IG51bGwgPyBtYXliZUdldHRlciA6IG5hbWVkR2V0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0dGVyID0gbmFtZWRHZXR0ZXI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXR0ZXIgPSBpbmRleGVkR2V0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihnZXR0ZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwcm9wZXJ0eU5hbWUsIHVuZGVmaW5lZCk7XG59O1xufTtcblxufSx7XCIuL3V0aWwuanNcIjozOH1dLDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciBlcnJvcnMgPSBfZGVyZXFfKFwiLi9lcnJvcnMuanNcIik7XG52YXIgYXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luYy5qc1wiKTtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IGVycm9ycy5DYW5jZWxsYXRpb25FcnJvcjtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICBpZiAoIXRoaXMuaXNDYW5jZWxsYWJsZSgpKSByZXR1cm4gdGhpcztcbiAgICB2YXIgcGFyZW50O1xuICAgIHZhciBwcm9taXNlVG9SZWplY3QgPSB0aGlzO1xuICAgIHdoaWxlICgocGFyZW50ID0gcHJvbWlzZVRvUmVqZWN0Ll9jYW5jZWxsYXRpb25QYXJlbnQpICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgcGFyZW50LmlzQ2FuY2VsbGFibGUoKSkge1xuICAgICAgICBwcm9taXNlVG9SZWplY3QgPSBwYXJlbnQ7XG4gICAgfVxuICAgIHRoaXMuX3Vuc2V0Q2FuY2VsbGFibGUoKTtcbiAgICBwcm9taXNlVG9SZWplY3QuX3RhcmdldCgpLl9yZWplY3RDYWxsYmFjayhyZWFzb24sIGZhbHNlLCB0cnVlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICBpZiAoIXRoaXMuaXNDYW5jZWxsYWJsZSgpKSByZXR1cm4gdGhpcztcbiAgICBpZiAocmVhc29uID09PSB1bmRlZmluZWQpIHJlYXNvbiA9IG5ldyBDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgIGFzeW5jLmludm9rZUxhdGVyKHRoaXMuX2NhbmNlbCwgdGhpcywgcmVhc29uKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhbmNlbGxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9jYW5jZWxsYWJsZSgpKSByZXR1cm4gdGhpcztcbiAgICBhc3luYy5lbmFibGVUcmFtcG9saW5lKCk7XG4gICAgdGhpcy5fc2V0Q2FuY2VsbGFibGUoKTtcbiAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS51bmNhbmNlbGxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXQgPSB0aGlzLnRoZW4oKTtcbiAgICByZXQuX3Vuc2V0Q2FuY2VsbGFibGUoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uIChkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzKSB7XG4gICAgdmFyIHJldCA9IHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbiAgICByZXQuX3NldENhbmNlbGxhYmxlKCk7XG4gICAgcmV0Ll9jYW5jZWxsYXRpb25QYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG59O1xuXG59LHtcIi4vYXN5bmMuanNcIjoyLFwiLi9lcnJvcnMuanNcIjoxM31dLDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xudmFyIGFzeW5jID0gX2RlcmVxXyhcIi4vYXN5bmMuanNcIik7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgYmx1ZWJpcmRGcmFtZVBhdHRlcm4gPVxuICAgIC9bXFxcXFxcL11ibHVlYmlyZFtcXFxcXFwvXWpzW1xcXFxcXC9dKG1haW58ZGVidWd8emFsZ298aW5zdHJ1bWVudGVkKS87XG52YXIgc3RhY2tGcmFtZVBhdHRlcm4gPSBudWxsO1xudmFyIGZvcm1hdFN0YWNrID0gbnVsbDtcbnZhciBpbmRlbnRTdGFja0ZyYW1lcyA9IGZhbHNlO1xudmFyIHdhcm47XG5cbmZ1bmN0aW9uIENhcHR1cmVkVHJhY2UocGFyZW50KSB7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHZhciBsZW5ndGggPSB0aGlzLl9sZW5ndGggPSAxICsgKHBhcmVudCA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcmVudC5fbGVuZ3RoKTtcbiAgICBjYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBDYXB0dXJlZFRyYWNlKTtcbiAgICBpZiAobGVuZ3RoID4gMzIpIHRoaXMudW5jeWNsZSgpO1xufVxudXRpbC5pbmhlcml0cyhDYXB0dXJlZFRyYWNlLCBFcnJvcik7XG5cbkNhcHR1cmVkVHJhY2UucHJvdG90eXBlLnVuY3ljbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPCAyKSByZXR1cm47XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIHN0YWNrVG9JbmRleCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG5vZGUgPSB0aGlzOyBub2RlICE9PSB1bmRlZmluZWQ7ICsraSkge1xuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fcGFyZW50O1xuICAgIH1cbiAgICBsZW5ndGggPSB0aGlzLl9sZW5ndGggPSBpO1xuICAgIGZvciAodmFyIGkgPSBsZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgc3RhY2sgPSBub2Rlc1tpXS5zdGFjaztcbiAgICAgICAgaWYgKHN0YWNrVG9JbmRleFtzdGFja10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhY2tUb0luZGV4W3N0YWNrXSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgY3VycmVudFN0YWNrID0gbm9kZXNbaV0uc3RhY2s7XG4gICAgICAgIHZhciBpbmRleCA9IHN0YWNrVG9JbmRleFtjdXJyZW50U3RhY2tdO1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIG5vZGVzW2luZGV4IC0gMV0uX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBub2Rlc1tpbmRleCAtIDFdLl9sZW5ndGggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZXNbaV0uX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG5vZGVzW2ldLl9sZW5ndGggPSAxO1xuICAgICAgICAgICAgdmFyIGN5Y2xlRWRnZU5vZGUgPSBpID4gMCA/IG5vZGVzW2kgLSAxXSA6IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA8IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9wYXJlbnQgPSBub2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX3BhcmVudC51bmN5Y2xlKCk7XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fbGVuZ3RoID1cbiAgICAgICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fcGFyZW50Ll9sZW5ndGggKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fbGVuZ3RoID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjdXJyZW50Q2hpbGRMZW5ndGggPSBjeWNsZUVkZ2VOb2RlLl9sZW5ndGggKyAxO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgLSAyOyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgICAgIG5vZGVzW2pdLl9sZW5ndGggPSBjdXJyZW50Q2hpbGRMZW5ndGg7XG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkTGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5DYXB0dXJlZFRyYWNlLnByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xufTtcblxuQ2FwdHVyZWRUcmFjZS5wcm90b3R5cGUuaGFzUGFyZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudCAhPT0gdW5kZWZpbmVkO1xufTtcblxuQ2FwdHVyZWRUcmFjZS5wcm90b3R5cGUuYXR0YWNoRXh0cmFUcmFjZSA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLl9fc3RhY2tDbGVhbmVkX18pIHJldHVybjtcbiAgICB0aGlzLnVuY3ljbGUoKTtcbiAgICB2YXIgcGFyc2VkID0gQ2FwdHVyZWRUcmFjZS5wYXJzZVN0YWNrQW5kTWVzc2FnZShlcnJvcik7XG4gICAgdmFyIG1lc3NhZ2UgPSBwYXJzZWQubWVzc2FnZTtcbiAgICB2YXIgc3RhY2tzID0gW3BhcnNlZC5zdGFja107XG5cbiAgICB2YXIgdHJhY2UgPSB0aGlzO1xuICAgIHdoaWxlICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YWNrcy5wdXNoKGNsZWFuU3RhY2sodHJhY2Uuc3RhY2suc3BsaXQoXCJcXG5cIikpKTtcbiAgICAgICAgdHJhY2UgPSB0cmFjZS5fcGFyZW50O1xuICAgIH1cbiAgICByZW1vdmVDb21tb25Sb290cyhzdGFja3MpO1xuICAgIHJlbW92ZUR1cGxpY2F0ZU9yRW1wdHlKdW1wcyhzdGFja3MpO1xuICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AoZXJyb3IsIFwic3RhY2tcIiwgcmVjb25zdHJ1Y3RTdGFjayhtZXNzYWdlLCBzdGFja3MpKTtcbiAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKGVycm9yLCBcIl9fc3RhY2tDbGVhbmVkX19cIiwgdHJ1ZSk7XG59O1xuXG5mdW5jdGlvbiByZWNvbnN0cnVjdFN0YWNrKG1lc3NhZ2UsIHN0YWNrcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgICAgICBzdGFja3NbaV0ucHVzaChcIkZyb20gcHJldmlvdXMgZXZlbnQ6XCIpO1xuICAgICAgICBzdGFja3NbaV0gPSBzdGFja3NbaV0uam9pbihcIlxcblwiKTtcbiAgICB9XG4gICAgaWYgKGkgPCBzdGFja3MubGVuZ3RoKSB7XG4gICAgICAgIHN0YWNrc1tpXSA9IHN0YWNrc1tpXS5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFja3Muam9pbihcIlxcblwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlT3JFbXB0eUp1bXBzKHN0YWNrcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChzdGFja3NbaV0ubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAoKGkgKyAxIDwgc3RhY2tzLmxlbmd0aCkgJiYgc3RhY2tzW2ldWzBdID09PSBzdGFja3NbaSsxXVswXSkpIHtcbiAgICAgICAgICAgIHN0YWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbW1vblJvb3RzKHN0YWNrcykge1xuICAgIHZhciBjdXJyZW50ID0gc3RhY2tzWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc3RhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBwcmV2ID0gc3RhY2tzW2ldO1xuICAgICAgICB2YXIgY3VycmVudExhc3RJbmRleCA9IGN1cnJlbnQubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGN1cnJlbnRMYXN0TGluZSA9IGN1cnJlbnRbY3VycmVudExhc3RJbmRleF07XG4gICAgICAgIHZhciBjb21tb25Sb290TWVldFBvaW50ID0gLTE7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IHByZXYubGVuZ3RoIC0gMTsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIGlmIChwcmV2W2pdID09PSBjdXJyZW50TGFzdExpbmUpIHtcbiAgICAgICAgICAgICAgICBjb21tb25Sb290TWVldFBvaW50ID0gajtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSBjb21tb25Sb290TWVldFBvaW50OyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSBwcmV2W2pdO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRbY3VycmVudExhc3RJbmRleF0gPT09IGxpbmUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnBvcCgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMYXN0SW5kZXgtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IHByZXY7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblN0YWNrKHN0YWNrKSB7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBzdGFja1tpXTtcbiAgICAgICAgdmFyIGlzVHJhY2VMaW5lID0gc3RhY2tGcmFtZVBhdHRlcm4udGVzdChsaW5lKSB8fFxuICAgICAgICAgICAgXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiID09PSBsaW5lO1xuICAgICAgICB2YXIgaXNJbnRlcm5hbEZyYW1lID0gaXNUcmFjZUxpbmUgJiYgc2hvdWxkSWdub3JlKGxpbmUpO1xuICAgICAgICBpZiAoaXNUcmFjZUxpbmUgJiYgIWlzSW50ZXJuYWxGcmFtZSkge1xuICAgICAgICAgICAgaWYgKGluZGVudFN0YWNrRnJhbWVzICYmIGxpbmUuY2hhckF0KDApICE9PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBcIiAgICBcIiArIGxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBzdGFja0ZyYW1lc0FzQXJyYXkoZXJyb3IpIHtcbiAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFjay5yZXBsYWNlKC9cXHMrJC9nLCBcIlwiKS5zcGxpdChcIlxcblwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsaW5lID0gc3RhY2tbaV07XG4gICAgICAgIGlmIChcIiAgICAoTm8gc3RhY2sgdHJhY2UpXCIgPT09IGxpbmUgfHwgc3RhY2tGcmFtZVBhdHRlcm4udGVzdChsaW5lKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoaSk7XG4gICAgfVxuICAgIHJldHVybiBzdGFjaztcbn1cblxuQ2FwdHVyZWRUcmFjZS5wYXJzZVN0YWNrQW5kTWVzc2FnZSA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvci50b1N0cmluZygpO1xuICAgIHN0YWNrID0gdHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiICYmIHN0YWNrLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHN0YWNrRnJhbWVzQXNBcnJheShlcnJvcikgOiBbXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBzdGFjazogY2xlYW5TdGFjayhzdGFjaylcbiAgICB9O1xufTtcblxuQ2FwdHVyZWRUcmFjZS5mb3JtYXRBbmRMb2dFcnJvciA9IGZ1bmN0aW9uKGVycm9yLCB0aXRsZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGl0bGUgKyBmb3JtYXRTdGFjayhzdGFjaywgZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRpdGxlICsgU3RyaW5nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdhcm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgd2FybihtZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUubG9nID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkNhcHR1cmVkVHJhY2UudW5oYW5kbGVkUmVqZWN0aW9uID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIENhcHR1cmVkVHJhY2UuZm9ybWF0QW5kTG9nRXJyb3IocmVhc29uLCBcIl4tLS0gV2l0aCBhZGRpdGlvbmFsIHN0YWNrIHRyYWNlOiBcIik7XG59O1xuXG5DYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgY2FwdHVyZVN0YWNrVHJhY2UgPT09IFwiZnVuY3Rpb25cIjtcbn07XG5cbkNhcHR1cmVkVHJhY2UuZmlyZVJlamVjdGlvbkV2ZW50ID1cbmZ1bmN0aW9uKG5hbWUsIGxvY2FsSGFuZGxlciwgcmVhc29uLCBwcm9taXNlKSB7XG4gICAgdmFyIGxvY2FsRXZlbnRGaXJlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGxvY2FsRXZlbnRGaXJlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJyZWplY3Rpb25IYW5kbGVkXCIpIHtcbiAgICAgICAgICAgICAgICBsb2NhbEhhbmRsZXIocHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsSGFuZGxlcihyZWFzb24sIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUpO1xuICAgIH1cblxuICAgIHZhciBnbG9iYWxFdmVudEZpcmVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2xvYmFsRXZlbnRGaXJlZCA9IGZpcmVHbG9iYWxFdmVudChuYW1lLCByZWFzb24sIHByb21pc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZ2xvYmFsRXZlbnRGaXJlZCA9IHRydWU7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZSk7XG4gICAgfVxuXG4gICAgdmFyIGRvbUV2ZW50RmlyZWQgPSBmYWxzZTtcbiAgICBpZiAoZmlyZURvbUV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb21FdmVudEZpcmVkID0gZmlyZURvbUV2ZW50KG5hbWUudG9Mb3dlckNhc2UoKSwge1xuICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkb21FdmVudEZpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWdsb2JhbEV2ZW50RmlyZWQgJiYgIWxvY2FsRXZlbnRGaXJlZCAmJiAhZG9tRXZlbnRGaXJlZCAmJlxuICAgICAgICBuYW1lID09PSBcInVuaGFuZGxlZFJlamVjdGlvblwiKSB7XG4gICAgICAgIENhcHR1cmVkVHJhY2UuZm9ybWF0QW5kTG9nRXJyb3IocmVhc29uLCBcIlVuaGFuZGxlZCByZWplY3Rpb24gXCIpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdE5vbkVycm9yKG9iaikge1xuICAgIHZhciBzdHI7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBzdHIgPSBcIltmdW5jdGlvbiBcIiArXG4gICAgICAgICAgICAob2JqLm5hbWUgfHwgXCJhbm9ueW1vdXNcIikgK1xuICAgICAgICAgICAgXCJdXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gb2JqLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBydXNlbGVzc1RvU3RyaW5nID0gL1xcW29iamVjdCBbYS16QS1aMC05JF9dK1xcXS87XG4gICAgICAgIGlmIChydXNlbGVzc1RvU3RyaW5nLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBuZXdTdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3RyID0gXCIoZW1wdHkgYXJyYXkpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcIig8XCIgKyBzbmlwKHN0cikgKyBcIj4sIG5vIHN0YWNrIHRyYWNlKVwiKTtcbn1cblxuZnVuY3Rpb24gc25pcChzdHIpIHtcbiAgICB2YXIgbWF4Q2hhcnMgPSA0MTtcbiAgICBpZiAoc3RyLmxlbmd0aCA8IG1heENoYXJzKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIG1heENoYXJzIC0gMykgKyBcIi4uLlwiO1xufVxuXG52YXIgc2hvdWxkSWdub3JlID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbnZhciBwYXJzZUxpbmVJbmZvUmVnZXggPSAvW1xcLzxcXChdKFteOlxcL10rKTooXFxkKyk6KD86XFxkKylcXCk/XFxzKiQvO1xuZnVuY3Rpb24gcGFyc2VMaW5lSW5mbyhsaW5lKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBsaW5lLm1hdGNoKHBhcnNlTGluZUluZm9SZWdleCk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBtYXRjaGVzWzFdLFxuICAgICAgICAgICAgbGluZTogcGFyc2VJbnQobWF0Y2hlc1syXSwgMTApXG4gICAgICAgIH07XG4gICAgfVxufVxuQ2FwdHVyZWRUcmFjZS5zZXRCb3VuZHMgPSBmdW5jdGlvbihmaXJzdExpbmVFcnJvciwgbGFzdExpbmVFcnJvcikge1xuICAgIGlmICghQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCgpKSByZXR1cm47XG4gICAgdmFyIGZpcnN0U3RhY2tMaW5lcyA9IGZpcnN0TGluZUVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICAgIHZhciBsYXN0U3RhY2tMaW5lcyA9IGxhc3RMaW5lRXJyb3Iuc3RhY2suc3BsaXQoXCJcXG5cIik7XG4gICAgdmFyIGZpcnN0SW5kZXggPSAtMTtcbiAgICB2YXIgbGFzdEluZGV4ID0gLTE7XG4gICAgdmFyIGZpcnN0RmlsZU5hbWU7XG4gICAgdmFyIGxhc3RGaWxlTmFtZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpcnN0U3RhY2tMaW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VMaW5lSW5mbyhmaXJzdFN0YWNrTGluZXNbaV0pO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBmaXJzdEZpbGVOYW1lID0gcmVzdWx0LmZpbGVOYW1lO1xuICAgICAgICAgICAgZmlyc3RJbmRleCA9IHJlc3VsdC5saW5lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0U3RhY2tMaW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VMaW5lSW5mbyhsYXN0U3RhY2tMaW5lc1tpXSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGxhc3RGaWxlTmFtZSA9IHJlc3VsdC5maWxlTmFtZTtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHJlc3VsdC5saW5lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpcnN0SW5kZXggPCAwIHx8IGxhc3RJbmRleCA8IDAgfHwgIWZpcnN0RmlsZU5hbWUgfHwgIWxhc3RGaWxlTmFtZSB8fFxuICAgICAgICBmaXJzdEZpbGVOYW1lICE9PSBsYXN0RmlsZU5hbWUgfHwgZmlyc3RJbmRleCA+PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3VsZElnbm9yZSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgaWYgKGJsdWViaXJkRnJhbWVQYXR0ZXJuLnRlc3QobGluZSkpIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgaW5mbyA9IHBhcnNlTGluZUluZm8obGluZSk7XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5maWxlTmFtZSA9PT0gZmlyc3RGaWxlTmFtZSAmJlxuICAgICAgICAgICAgICAgIChmaXJzdEluZGV4IDw9IGluZm8ubGluZSAmJiBpbmZvLmxpbmUgPD0gbGFzdEluZGV4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufTtcblxudmFyIGNhcHR1cmVTdGFja1RyYWNlID0gKGZ1bmN0aW9uIHN0YWNrRGV0ZWN0aW9uKCkge1xuICAgIHZhciB2OHN0YWNrRnJhbWVQYXR0ZXJuID0gL15cXHMqYXRcXHMqLztcbiAgICB2YXIgdjhzdGFja0Zvcm1hdHRlciA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICBpZiAodHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiKSByZXR1cm4gc3RhY2s7XG5cbiAgICAgICAgaWYgKGVycm9yLm5hbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICB0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBFcnJvci5zdGFja1RyYWNlTGltaXQgKyA2O1xuICAgICAgICBzdGFja0ZyYW1lUGF0dGVybiA9IHY4c3RhY2tGcmFtZVBhdHRlcm47XG4gICAgICAgIGZvcm1hdFN0YWNrID0gdjhzdGFja0Zvcm1hdHRlcjtcbiAgICAgICAgdmFyIGNhcHR1cmVTdGFja1RyYWNlID0gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XG5cbiAgICAgICAgc2hvdWxkSWdub3JlID0gZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIGJsdWViaXJkRnJhbWVQYXR0ZXJuLnRlc3QobGluZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihyZWNlaXZlciwgaWdub3JlVW50aWwpIHtcbiAgICAgICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdCArIDY7XG4gICAgICAgICAgICBjYXB0dXJlU3RhY2tUcmFjZShyZWNlaXZlciwgaWdub3JlVW50aWwpO1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IC0gNjtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKHR5cGVvZiBlcnIuc3RhY2sgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgZXJyLnN0YWNrLnNwbGl0KFwiXFxuXCIpWzBdLmluZGV4T2YoXCJzdGFja0RldGVjdGlvbkBcIikgPj0gMCkge1xuICAgICAgICBzdGFja0ZyYW1lUGF0dGVybiA9IC9ALztcbiAgICAgICAgZm9ybWF0U3RhY2sgPSB2OHN0YWNrRm9ybWF0dGVyO1xuICAgICAgICBpbmRlbnRTdGFja0ZyYW1lcyA9IHRydWU7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjYXB0dXJlU3RhY2tUcmFjZShvKSB7XG4gICAgICAgICAgICBvLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGhhc1N0YWNrQWZ0ZXJUaHJvdztcbiAgICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IoKTsgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgaGFzU3RhY2tBZnRlclRocm93ID0gKFwic3RhY2tcIiBpbiBlKTtcbiAgICB9XG4gICAgaWYgKCEoXCJzdGFja1wiIGluIGVycikgJiYgaGFzU3RhY2tBZnRlclRocm93ICYmXG4gICAgICAgIHR5cGVvZiBFcnJvci5zdGFja1RyYWNlTGltaXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc3RhY2tGcmFtZVBhdHRlcm4gPSB2OHN0YWNrRnJhbWVQYXR0ZXJuO1xuICAgICAgICBmb3JtYXRTdGFjayA9IHY4c3RhY2tGb3JtYXR0ZXI7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjYXB0dXJlU3RhY2tUcmFjZShvKSB7XG4gICAgICAgICAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBFcnJvci5zdGFja1RyYWNlTGltaXQgKyA2O1xuICAgICAgICAgICAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKCk7IH1cbiAgICAgICAgICAgIGNhdGNoKGUpIHsgby5zdGFjayA9IGUuc3RhY2s7IH1cbiAgICAgICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdCAtIDY7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0U3RhY2sgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgIGlmICgodHlwZW9mIGVycm9yID09PSBcIm9iamVjdFwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09IFwiZnVuY3Rpb25cIikgJiZcbiAgICAgICAgICAgIGVycm9yLm5hbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICByZXR1cm4gbnVsbDtcblxufSkoW10pO1xuXG52YXIgZmlyZURvbUV2ZW50O1xudmFyIGZpcmVHbG9iYWxFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAodXRpbC5pc05vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUsIHJlYXNvbiwgcHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwicmVqZWN0aW9uSGFuZGxlZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW1pdChuYW1lLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW1pdChuYW1lLCByZWFzb24sIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXN0b21FdmVudFdvcmtzID0gZmFsc2U7XG4gICAgICAgIHZhciBhbnlFdmVudFdvcmtzID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBldiA9IG5ldyBzZWxmLkN1c3RvbUV2ZW50KFwidGVzdFwiKTtcbiAgICAgICAgICAgIGN1c3RvbUV2ZW50V29ya3MgPSBldiBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50O1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICBpZiAoIWN1c3RvbUV2ZW50V29ya3MpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoXCJ0ZXN0aW5ndGhlZXZlbnRcIiwgZmFsc2UsIHRydWUsIHt9KTtcbiAgICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGFueUV2ZW50V29ya3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYW55RXZlbnRXb3Jrcykge1xuICAgICAgICAgICAgZmlyZURvbUV2ZW50ID0gZnVuY3Rpb24odHlwZSwgZGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50O1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21FdmVudFdvcmtzKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IHNlbGYuQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmRpc3BhdGNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIHRydWUsIGRldGFpbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ID8gIXNlbGYuZGlzcGF0Y2hFdmVudChldmVudCkgOiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9XaW5kb3dNZXRob2ROYW1lTWFwID0ge307XG4gICAgICAgIHRvV2luZG93TWV0aG9kTmFtZU1hcFtcInVuaGFuZGxlZFJlamVjdGlvblwiXSA9IChcIm9uXCIgK1xuICAgICAgICAgICAgXCJ1bmhhbmRsZWRSZWplY3Rpb25cIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdG9XaW5kb3dNZXRob2ROYW1lTWFwW1wicmVqZWN0aW9uSGFuZGxlZFwiXSA9IChcIm9uXCIgK1xuICAgICAgICAgICAgXCJyZWplY3Rpb25IYW5kbGVkXCIpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUsIHJlYXNvbiwgcHJvbWlzZSkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSB0b1dpbmRvd01ldGhvZE5hbWVNYXBbbmFtZV07XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gc2VsZlttZXRob2ROYW1lXTtcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJyZWplY3Rpb25IYW5kbGVkXCIpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QuY2FsbChzZWxmLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwoc2VsZiwgcmVhc29uLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH1cbn0pKCk7XG5cbmlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS53YXJuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2FybiA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9O1xuICAgIGlmICh1dGlsLmlzTm9kZSAmJiBwcm9jZXNzLnN0ZGVyci5pc1RUWSkge1xuICAgICAgICB3YXJuID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXCJcXHUwMDFiWzMxbVwiICsgbWVzc2FnZSArIFwiXFx1MDAxYlszOW1cXG5cIik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdXRpbC5pc05vZGUgJiYgdHlwZW9mIChuZXcgRXJyb3IoKS5zdGFjaykgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgd2FybiA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIiVjXCIgKyBtZXNzYWdlLCBcImNvbG9yOiByZWRcIik7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5yZXR1cm4gQ2FwdHVyZWRUcmFjZTtcbn07XG5cbn0se1wiLi9hc3luYy5qc1wiOjIsXCIuL3V0aWwuanNcIjozOH1dLDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5FWFRfRklMVEVSKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgZXJyb3JzID0gX2RlcmVxXyhcIi4vZXJyb3JzLmpzXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIga2V5cyA9IF9kZXJlcV8oXCIuL2VzNS5qc1wiKS5rZXlzO1xudmFyIFR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG5cbmZ1bmN0aW9uIENhdGNoRmlsdGVyKGluc3RhbmNlcywgY2FsbGJhY2ssIHByb21pc2UpIHtcbiAgICB0aGlzLl9pbnN0YW5jZXMgPSBpbnN0YW5jZXM7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLl9wcm9taXNlID0gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc2FmZVByZWRpY2F0ZShwcmVkaWNhdGUsIGUpIHtcbiAgICB2YXIgc2FmZU9iamVjdCA9IHt9O1xuICAgIHZhciByZXRmaWx0ZXIgPSB0cnlDYXRjaChwcmVkaWNhdGUpLmNhbGwoc2FmZU9iamVjdCwgZSk7XG5cbiAgICBpZiAocmV0ZmlsdGVyID09PSBlcnJvck9iaikgcmV0dXJuIHJldGZpbHRlcjtcblxuICAgIHZhciBzYWZlS2V5cyA9IGtleXMoc2FmZU9iamVjdCk7XG4gICAgaWYgKHNhZmVLZXlzLmxlbmd0aCkge1xuICAgICAgICBlcnJvck9iai5lID0gbmV3IFR5cGVFcnJvcihcIkNhdGNoIGZpbHRlciBtdXN0IGluaGVyaXQgZnJvbSBFcnJvciBvciBiZSBhIHNpbXBsZSBwcmVkaWNhdGUgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9vODRvNjhcXHUwMDBhXCIpO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxuICAgIHJldHVybiByZXRmaWx0ZXI7XG59XG5cbkNhdGNoRmlsdGVyLnByb3RvdHlwZS5kb0ZpbHRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGNiID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgIHZhciBib3VuZFRvID0gcHJvbWlzZS5fYm91bmRUbztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5faW5zdGFuY2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5faW5zdGFuY2VzW2ldO1xuICAgICAgICB2YXIgaXRlbUlzRXJyb3JUeXBlID0gaXRlbSA9PT0gRXJyb3IgfHxcbiAgICAgICAgICAgIChpdGVtICE9IG51bGwgJiYgaXRlbS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvcik7XG5cbiAgICAgICAgaWYgKGl0ZW1Jc0Vycm9yVHlwZSAmJiBlIGluc3RhbmNlb2YgaXRlbSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoKGNiKS5jYWxsKGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICBORVhUX0ZJTFRFUi5lID0gcmV0LmU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJmdW5jdGlvblwiICYmICFpdGVtSXNFcnJvclR5cGUpIHtcbiAgICAgICAgICAgIHZhciBzaG91bGRIYW5kbGUgPSBzYWZlUHJlZGljYXRlKGl0ZW0sIGUpO1xuICAgICAgICAgICAgaWYgKHNob3VsZEhhbmRsZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICBlID0gZXJyb3JPYmouZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoKGNiKS5jYWxsKGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIE5FWFRfRklMVEVSLmUgPSByZXQuZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIE5FWFRfRklMVEVSLmUgPSBlO1xuICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbn07XG5cbnJldHVybiBDYXRjaEZpbHRlcjtcbn07XG5cbn0se1wiLi9lcnJvcnMuanNcIjoxMyxcIi4vZXM1LmpzXCI6MTQsXCIuL3V0aWwuanNcIjozOH1dLDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIENhcHR1cmVkVHJhY2UsIGlzRGVidWdnaW5nKSB7XG52YXIgY29udGV4dFN0YWNrID0gW107XG5mdW5jdGlvbiBDb250ZXh0KCkge1xuICAgIHRoaXMuX3RyYWNlID0gbmV3IENhcHR1cmVkVHJhY2UocGVla0NvbnRleHQoKSk7XG59XG5Db250ZXh0LnByb3RvdHlwZS5fcHVzaENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc0RlYnVnZ2luZygpKSByZXR1cm47XG4gICAgaWYgKHRoaXMuX3RyYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dFN0YWNrLnB1c2godGhpcy5fdHJhY2UpO1xuICAgIH1cbn07XG5cbkNvbnRleHQucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNEZWJ1Z2dpbmcoKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLl90cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHRTdGFjay5wb3AoKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xuICAgIGlmIChpc0RlYnVnZ2luZygpKSByZXR1cm4gbmV3IENvbnRleHQoKTtcbn1cblxuZnVuY3Rpb24gcGVla0NvbnRleHQoKSB7XG4gICAgdmFyIGxhc3RJbmRleCA9IGNvbnRleHRTdGFjay5sZW5ndGggLSAxO1xuICAgIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgICAgICByZXR1cm4gY29udGV4dFN0YWNrW2xhc3RJbmRleF07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cblByb21pc2UucHJvdG90eXBlLl9wZWVrQ29udGV4dCA9IHBlZWtDb250ZXh0O1xuUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gQ29udGV4dC5wcm90b3R5cGUuX3B1c2hDb250ZXh0O1xuUHJvbWlzZS5wcm90b3R5cGUuX3BvcENvbnRleHQgPSBDb250ZXh0LnByb3RvdHlwZS5fcG9wQ29udGV4dDtcblxucmV0dXJuIGNyZWF0ZUNvbnRleHQ7XG59O1xuXG59LHt9XSwxMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgQ2FwdHVyZWRUcmFjZSkge1xudmFyIGdldERvbWFpbiA9IFByb21pc2UuX2dldERvbWFpbjtcbnZhciBhc3luYyA9IF9kZXJlcV8oXCIuL2FzeW5jLmpzXCIpO1xudmFyIFdhcm5pbmcgPSBfZGVyZXFfKFwiLi9lcnJvcnMuanNcIikuV2FybmluZztcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBjYW5BdHRhY2hUcmFjZSA9IHV0aWwuY2FuQXR0YWNoVHJhY2U7XG52YXIgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZDtcbnZhciBwb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbjtcbnZhciBkZWJ1Z2dpbmcgPSBmYWxzZSB8fCAodXRpbC5pc05vZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgKCEhcHJvY2Vzcy5lbnZbXCJCTFVFQklSRF9ERUJVR1wiXSB8fFxuICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnZbXCJOT0RFX0VOVlwiXSA9PT0gXCJkZXZlbG9wbWVudFwiKSk7XG5cbmlmIChkZWJ1Z2dpbmcpIHtcbiAgICBhc3luYy5kaXNhYmxlVHJhbXBvbGluZUlmTmVjZXNzYXJ5KCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLl9pZ25vcmVSZWplY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAxNjc3NzIxNjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCh0aGlzLl9iaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgYXN5bmMuaW52b2tlTGF0ZXIodGhpcy5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uLCB0aGlzLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBDYXB0dXJlZFRyYWNlLmZpcmVSZWplY3Rpb25FdmVudChcInJlamVjdGlvbkhhbmRsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkLCB1bmRlZmluZWQsIHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5faXNSZWplY3Rpb25VbmhhbmRsZWQoKSkge1xuICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSB8fCB0aGlzLl9zZXR0bGVkVmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKTtcbiAgICAgICAgQ2FwdHVyZWRUcmFjZS5maXJlUmVqZWN0aW9uRXZlbnQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24sIHJlYXNvbiwgdGhpcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDUyNDI4ODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NTI0Mjg4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA1MjQyODgpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjA5NzE1Mjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjIwOTcxNTIpO1xuICAgIGlmICh0aGlzLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkKCkpIHtcbiAgICAgICAgdGhpcy5fdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG4gICAgICAgIHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1JlamVjdGlvblVuaGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjA5NzE1MikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldENhcnJpZWRTdGFja1RyYWNlID0gZnVuY3Rpb24gKGNhcHR1cmVkVHJhY2UpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTA0ODU3NjtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gY2FwdHVyZWRUcmFjZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTA0ODU3NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2dldENhcnJpZWRTdGFja1RyYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpXG4gICAgICAgID8gdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMFxuICAgICAgICA6IHVuZGVmaW5lZDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYXB0dXJlU3RhY2tUcmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGVidWdnaW5nKSB7XG4gICAgICAgIHRoaXMuX3RyYWNlID0gbmV3IENhcHR1cmVkVHJhY2UodGhpcy5fcGVla0NvbnRleHQoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaEV4dHJhVHJhY2UgPSBmdW5jdGlvbiAoZXJyb3IsIGlnbm9yZVNlbGYpIHtcbiAgICBpZiAoZGVidWdnaW5nICYmIGNhbkF0dGFjaFRyYWNlKGVycm9yKSkge1xuICAgICAgICB2YXIgdHJhY2UgPSB0aGlzLl90cmFjZTtcbiAgICAgICAgaWYgKHRyYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmVTZWxmKSB0cmFjZSA9IHRyYWNlLl9wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyYWNlLmF0dGFjaEV4dHJhVHJhY2UoZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKCFlcnJvci5fX3N0YWNrQ2xlYW5lZF9fKSB7XG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gQ2FwdHVyZWRUcmFjZS5wYXJzZVN0YWNrQW5kTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKGVycm9yLCBcInN0YWNrXCIsXG4gICAgICAgICAgICAgICAgcGFyc2VkLm1lc3NhZ2UgKyBcIlxcblwiICsgcGFyc2VkLnN0YWNrLmpvaW4oXCJcXG5cIikpO1xuICAgICAgICAgICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChlcnJvciwgXCJfX3N0YWNrQ2xlYW5lZF9fXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3dhcm4gPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgdmFyIHdhcm5pbmcgPSBuZXcgV2FybmluZyhtZXNzYWdlKTtcbiAgICB2YXIgY3R4ID0gdGhpcy5fcGVla0NvbnRleHQoKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICAgIGN0eC5hdHRhY2hFeHRyYVRyYWNlKHdhcm5pbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSBDYXB0dXJlZFRyYWNlLnBhcnNlU3RhY2tBbmRNZXNzYWdlKHdhcm5pbmcpO1xuICAgICAgICB3YXJuaW5nLnN0YWNrID0gcGFyc2VkLm1lc3NhZ2UgKyBcIlxcblwiICsgcGFyc2VkLnN0YWNrLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIENhcHR1cmVkVHJhY2UuZm9ybWF0QW5kTG9nRXJyb3Iod2FybmluZywgXCJcIik7XG59O1xuXG5Qcm9taXNlLm9uUG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgcG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPVxuICAgICAgICB0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiA/IChkb21haW4gPT09IG51bGwgPyBmbiA6IGRvbWFpbi5iaW5kKGZuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xufTtcblxuUHJvbWlzZS5vblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9XG4gICAgICAgIHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiID8gKGRvbWFpbiA9PT0gbnVsbCA/IGZuIDogZG9tYWluLmJpbmQoZm4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG59O1xuXG5Qcm9taXNlLmxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXN5bmMuaGF2ZUl0ZW1zUXVldWVkKCkgJiZcbiAgICAgICAgZGVidWdnaW5nID09PSBmYWxzZVxuICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBlbmFibGUgbG9uZyBzdGFjayB0cmFjZXMgYWZ0ZXIgcHJvbWlzZXMgaGF2ZSBiZWVuIGNyZWF0ZWRcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9EVDFxeUdcXHUwMDBhXCIpO1xuICAgIH1cbiAgICBkZWJ1Z2dpbmcgPSBDYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkKCk7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICBhc3luYy5kaXNhYmxlVHJhbXBvbGluZUlmTmVjZXNzYXJ5KCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5oYXNMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlYnVnZ2luZyAmJiBDYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkKCk7XG59O1xuXG5pZiAoIUNhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKSkge1xuICAgIFByb21pc2UubG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24oKXt9O1xuICAgIGRlYnVnZ2luZyA9IGZhbHNlO1xufVxuXG5yZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlYnVnZ2luZztcbn07XG59O1xuXG59LHtcIi4vYXN5bmMuanNcIjoyLFwiLi9lcnJvcnMuanNcIjoxMyxcIi4vdXRpbC5qc1wiOjM4fV0sMTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgaXNQcmltaXRpdmUgPSB1dGlsLmlzUHJpbWl0aXZlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciByZXR1cm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyB0aGlzO1xufTtcbnZhciByZXR1cm5VbmRlZmluZWQgPSBmdW5jdGlvbigpIHt9O1xudmFyIHRocm93VW5kZWZpbmVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgdW5kZWZpbmVkO1xufTtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuXG5Qcm9taXNlLnByb3RvdHlwZVtcInJldHVyblwiXSA9XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuUmV0dXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnRoZW4ocmV0dXJuVW5kZWZpbmVkKTtcblxuICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICB3cmFwcGVyKHZhbHVlLCAyKSxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKHJldHVybmVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVtcInRocm93XCJdID1cblByb21pc2UucHJvdG90eXBlLnRoZW5UaHJvdyA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICBpZiAocmVhc29uID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnRoZW4odGhyb3dVbmRlZmluZWQpO1xuXG4gICAgaWYgKGlzUHJpbWl0aXZlKHJlYXNvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICB3cmFwcGVyKHJlYXNvbiwgMSksXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbih0aHJvd2VyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcmVhc29uLCB1bmRlZmluZWQpO1xufTtcbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSwxMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBQcm9taXNlUmVkdWNlID0gUHJvbWlzZS5yZWR1Y2U7XG5cblByb21pc2UucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZSh0aGlzLCBmbiwgbnVsbCwgSU5URVJOQUwpO1xufTtcblxuUHJvbWlzZS5lYWNoID0gZnVuY3Rpb24gKHByb21pc2VzLCBmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHByb21pc2VzLCBmbiwgbnVsbCwgSU5URVJOQUwpO1xufTtcbn07XG5cbn0se31dLDEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIGVzNSA9IF9kZXJlcV8oXCIuL2VzNS5qc1wiKTtcbnZhciBPYmplY3RmcmVlemUgPSBlczUuZnJlZXplO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGluaGVyaXRzID0gdXRpbC5pbmhlcml0cztcbnZhciBub3RFbnVtZXJhYmxlUHJvcCA9IHV0aWwubm90RW51bWVyYWJsZVByb3A7XG5cbmZ1bmN0aW9uIHN1YkVycm9yKG5hbWVQcm9wZXJ0eSwgZGVmYXVsdE1lc3NhZ2UpIHtcbiAgICBmdW5jdGlvbiBTdWJFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTdWJFcnJvcikpIHJldHVybiBuZXcgU3ViRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyBtZXNzYWdlIDogZGVmYXVsdE1lc3NhZ2UpO1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm5hbWVcIiwgbmFtZVByb3BlcnR5KTtcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5oZXJpdHMoU3ViRXJyb3IsIEVycm9yKTtcbiAgICByZXR1cm4gU3ViRXJyb3I7XG59XG5cbnZhciBfVHlwZUVycm9yLCBfUmFuZ2VFcnJvcjtcbnZhciBXYXJuaW5nID0gc3ViRXJyb3IoXCJXYXJuaW5nXCIsIFwid2FybmluZ1wiKTtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IHN1YkVycm9yKFwiQ2FuY2VsbGF0aW9uRXJyb3JcIiwgXCJjYW5jZWxsYXRpb24gZXJyb3JcIik7XG52YXIgVGltZW91dEVycm9yID0gc3ViRXJyb3IoXCJUaW1lb3V0RXJyb3JcIiwgXCJ0aW1lb3V0IGVycm9yXCIpO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gc3ViRXJyb3IoXCJBZ2dyZWdhdGVFcnJvclwiLCBcImFnZ3JlZ2F0ZSBlcnJvclwiKTtcbnRyeSB7XG4gICAgX1R5cGVFcnJvciA9IFR5cGVFcnJvcjtcbiAgICBfUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG59IGNhdGNoKGUpIHtcbiAgICBfVHlwZUVycm9yID0gc3ViRXJyb3IoXCJUeXBlRXJyb3JcIiwgXCJ0eXBlIGVycm9yXCIpO1xuICAgIF9SYW5nZUVycm9yID0gc3ViRXJyb3IoXCJSYW5nZUVycm9yXCIsIFwicmFuZ2UgZXJyb3JcIik7XG59XG5cbnZhciBtZXRob2RzID0gKFwiam9pbiBwb3AgcHVzaCBzaGlmdCB1bnNoaWZ0IHNsaWNlIGZpbHRlciBmb3JFYWNoIHNvbWUgXCIgK1xuICAgIFwiZXZlcnkgbWFwIGluZGV4T2YgbGFzdEluZGV4T2YgcmVkdWNlIHJlZHVjZVJpZ2h0IHNvcnQgcmV2ZXJzZVwiKS5zcGxpdChcIiBcIik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgQWdncmVnYXRlRXJyb3IucHJvdG90eXBlW21ldGhvZHNbaV1dID0gQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dO1xuICAgIH1cbn1cblxuZXM1LmRlZmluZVByb3BlcnR5KEFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xuICAgIHZhbHVlOiAwLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxufSk7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGVbXCJpc09wZXJhdGlvbmFsXCJdID0gdHJ1ZTtcbnZhciBsZXZlbCA9IDA7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZW50ID0gQXJyYXkobGV2ZWwgKiA0ICsgMSkuam9pbihcIiBcIik7XG4gICAgdmFyIHJldCA9IFwiXFxuXCIgKyBpbmRlbnQgKyBcIkFnZ3JlZ2F0ZUVycm9yIG9mOlwiICsgXCJcXG5cIjtcbiAgICBsZXZlbCsrO1xuICAgIGluZGVudCA9IEFycmF5KGxldmVsICogNCArIDEpLmpvaW4oXCIgXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgc3RyID0gdGhpc1tpXSA9PT0gdGhpcyA/IFwiW0NpcmN1bGFyIEFnZ3JlZ2F0ZUVycm9yXVwiIDogdGhpc1tpXSArIFwiXCI7XG4gICAgICAgIHZhciBsaW5lcyA9IHN0ci5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbGluZXNbal0gPSBpbmRlbnQgKyBsaW5lc1tqXTtcbiAgICAgICAgfVxuICAgICAgICBzdHIgPSBsaW5lcy5qb2luKFwiXFxuXCIpO1xuICAgICAgICByZXQgKz0gc3RyICsgXCJcXG5cIjtcbiAgICB9XG4gICAgbGV2ZWwtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gT3BlcmF0aW9uYWxFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE9wZXJhdGlvbmFsRXJyb3IpKVxuICAgICAgICByZXR1cm4gbmV3IE9wZXJhdGlvbmFsRXJyb3IobWVzc2FnZSk7XG4gICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJuYW1lXCIsIFwiT3BlcmF0aW9uYWxFcnJvclwiKTtcbiAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgdGhpcy5jYXVzZSA9IG1lc3NhZ2U7XG4gICAgdGhpc1tcImlzT3BlcmF0aW9uYWxcIl0gPSB0cnVlO1xuXG4gICAgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm1lc3NhZ2VcIiwgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJzdGFja1wiLCBtZXNzYWdlLnN0YWNrKTtcbiAgICB9IGVsc2UgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cblxufVxuaW5oZXJpdHMoT3BlcmF0aW9uYWxFcnJvciwgRXJyb3IpO1xuXG52YXIgZXJyb3JUeXBlcyA9IEVycm9yW1wiX19CbHVlYmlyZEVycm9yVHlwZXNfX1wiXTtcbmlmICghZXJyb3JUeXBlcykge1xuICAgIGVycm9yVHlwZXMgPSBPYmplY3RmcmVlemUoe1xuICAgICAgICBDYW5jZWxsYXRpb25FcnJvcjogQ2FuY2VsbGF0aW9uRXJyb3IsXG4gICAgICAgIFRpbWVvdXRFcnJvcjogVGltZW91dEVycm9yLFxuICAgICAgICBPcGVyYXRpb25hbEVycm9yOiBPcGVyYXRpb25hbEVycm9yLFxuICAgICAgICBSZWplY3Rpb25FcnJvcjogT3BlcmF0aW9uYWxFcnJvcixcbiAgICAgICAgQWdncmVnYXRlRXJyb3I6IEFnZ3JlZ2F0ZUVycm9yXG4gICAgfSk7XG4gICAgbm90RW51bWVyYWJsZVByb3AoRXJyb3IsIFwiX19CbHVlYmlyZEVycm9yVHlwZXNfX1wiLCBlcnJvclR5cGVzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgRXJyb3I6IEVycm9yLFxuICAgIFR5cGVFcnJvcjogX1R5cGVFcnJvcixcbiAgICBSYW5nZUVycm9yOiBfUmFuZ2VFcnJvcixcbiAgICBDYW5jZWxsYXRpb25FcnJvcjogZXJyb3JUeXBlcy5DYW5jZWxsYXRpb25FcnJvcixcbiAgICBPcGVyYXRpb25hbEVycm9yOiBlcnJvclR5cGVzLk9wZXJhdGlvbmFsRXJyb3IsXG4gICAgVGltZW91dEVycm9yOiBlcnJvclR5cGVzLlRpbWVvdXRFcnJvcixcbiAgICBBZ2dyZWdhdGVFcnJvcjogZXJyb3JUeXBlcy5BZ2dyZWdhdGVFcnJvcixcbiAgICBXYXJuaW5nOiBXYXJuaW5nXG59O1xuXG59LHtcIi4vZXM1LmpzXCI6MTQsXCIuL3V0aWwuanNcIjozOH1dLDE0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc0VTNSA9IChmdW5jdGlvbigpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHJldHVybiB0aGlzID09PSB1bmRlZmluZWQ7XG59KSgpO1xuXG5pZiAoaXNFUzUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZnJlZXplOiBPYmplY3QuZnJlZXplLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgICAgICBnZXREZXNjcmlwdG9yOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgICBrZXlzOiBPYmplY3Qua2V5cyxcbiAgICAgICAgbmFtZXM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgICAgICBnZXRQcm90b3R5cGVPZjogT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgICAgICBpc0FycmF5OiBBcnJheS5pc0FycmF5LFxuICAgICAgICBpc0VTNTogaXNFUzUsXG4gICAgICAgIHByb3BlcnR5SXNXcml0YWJsZTogZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgICAgIHJldHVybiAhISghZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3Iuc2V0KTtcbiAgICAgICAgfVxuICAgIH07XG59IGVsc2Uge1xuICAgIHZhciBoYXMgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgICB2YXIgc3RyID0ge30udG9TdHJpbmc7XG4gICAgdmFyIHByb3RvID0ge30uY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4gICAgdmFyIE9iamVjdEtleXMgPSBmdW5jdGlvbiAobykge1xuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwobywga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdEdldERlc2NyaXB0b3IgPSBmdW5jdGlvbihvLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogb1trZXldfTtcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdERlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG8sIGtleSwgZGVzYykge1xuICAgICAgICBvW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdEZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdEdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdChvYmopLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBBcnJheUlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgaXNBcnJheTogQXJyYXlJc0FycmF5LFxuICAgICAgICBrZXlzOiBPYmplY3RLZXlzLFxuICAgICAgICBuYW1lczogT2JqZWN0S2V5cyxcbiAgICAgICAgZGVmaW5lUHJvcGVydHk6IE9iamVjdERlZmluZVByb3BlcnR5LFxuICAgICAgICBnZXREZXNjcmlwdG9yOiBPYmplY3RHZXREZXNjcmlwdG9yLFxuICAgICAgICBmcmVlemU6IE9iamVjdEZyZWV6ZSxcbiAgICAgICAgZ2V0UHJvdG90eXBlT2Y6IE9iamVjdEdldFByb3RvdHlwZU9mLFxuICAgICAgICBpc0VTNTogaXNFUzUsXG4gICAgICAgIHByb3BlcnR5SXNXcml0YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbn0se31dLDE1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VNYXAgPSBQcm9taXNlLm1hcDtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIFByb21pc2VNYXAodGhpcywgZm4sIG9wdGlvbnMsIElOVEVSTkFMKTtcbn07XG5cblByb21pc2UuZmlsdGVyID0gZnVuY3Rpb24gKHByb21pc2VzLCBmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBQcm9taXNlTWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgSU5URVJOQUwpO1xufTtcbn07XG5cbn0se31dLDE2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBORVhUX0ZJTFRFUiwgdHJ5Q29udmVydFRvUHJvbWlzZSkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGlzUHJpbWl0aXZlID0gdXRpbC5pc1ByaW1pdGl2ZTtcbnZhciB0aHJvd2VyID0gdXRpbC50aHJvd2VyO1xuXG5mdW5jdGlvbiByZXR1cm5UaGlzKCkge1xuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gdGhyb3dUaGlzKCkge1xuICAgIHRocm93IHRoaXM7XG59XG5mdW5jdGlvbiByZXR1cm4kKHIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG59XG5mdW5jdGlvbiB0aHJvdyQocikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gcHJvbWlzZWRGaW5hbGx5KHJldCwgcmVhc29uT3JWYWx1ZSwgaXNGdWxmaWxsZWQpIHtcbiAgICB2YXIgdGhlbjtcbiAgICBpZiAoaXNQcmltaXRpdmUocmVhc29uT3JWYWx1ZSkpIHtcbiAgICAgICAgdGhlbiA9IGlzRnVsZmlsbGVkID8gcmV0dXJuJChyZWFzb25PclZhbHVlKSA6IHRocm93JChyZWFzb25PclZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuID0gaXNGdWxmaWxsZWQgPyByZXR1cm5UaGlzIDogdGhyb3dUaGlzO1xuICAgIH1cbiAgICByZXR1cm4gcmV0Ll90aGVuKHRoZW4sIHRocm93ZXIsIHVuZGVmaW5lZCwgcmVhc29uT3JWYWx1ZSwgdW5kZWZpbmVkKTtcbn1cblxuZnVuY3Rpb24gZmluYWxseUhhbmRsZXIocmVhc29uT3JWYWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgdmFyIHJldCA9IHByb21pc2UuX2lzQm91bmQoKVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXIuY2FsbChwcm9taXNlLl9ib3VuZFRvKVxuICAgICAgICAgICAgICAgICAgICA6IGhhbmRsZXIoKTtcblxuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXQsIHByb21pc2UpO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID0gbWF5YmVQcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlZEZpbmFsbHkobWF5YmVQcm9taXNlLCByZWFzb25PclZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5pc0Z1bGZpbGxlZCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICBORVhUX0ZJTFRFUi5lID0gcmVhc29uT3JWYWx1ZTtcbiAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWFzb25PclZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFwSGFuZGxlcih2YWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgdmFyIHJldCA9IHByb21pc2UuX2lzQm91bmQoKVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXIuY2FsbChwcm9taXNlLl9ib3VuZFRvLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVyKHZhbHVlKTtcblxuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXQsIHByb21pc2UpO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID0gbWF5YmVQcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlZEZpbmFsbHkobWF5YmVQcm9taXNlLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5fcGFzc1Rocm91Z2hIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIsIGlzRmluYWxseSkge1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdGhpcy50aGVuKCk7XG5cbiAgICB2YXIgcHJvbWlzZUFuZEhhbmRsZXIgPSB7XG4gICAgICAgIHByb21pc2U6IHRoaXMsXG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICBpc0ZpbmFsbHkgPyBmaW5hbGx5SGFuZGxlciA6IHRhcEhhbmRsZXIsXG4gICAgICAgICAgICBpc0ZpbmFsbHkgPyBmaW5hbGx5SGFuZGxlciA6IHVuZGVmaW5lZCwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcHJvbWlzZUFuZEhhbmRsZXIsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5sYXN0bHkgPVxuUHJvbWlzZS5wcm90b3R5cGVbXCJmaW5hbGx5XCJdID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc1Rocm91Z2hIYW5kbGVyKGhhbmRsZXIsIHRydWUpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGFwID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc1Rocm91Z2hIYW5kbGVyKGhhbmRsZXIsIGZhbHNlKTtcbn07XG59O1xuXG59LHtcIi4vdXRpbC5qc1wiOjM4fV0sMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnRUb1Byb21pc2UpIHtcbnZhciBlcnJvcnMgPSBfZGVyZXFfKFwiLi9lcnJvcnMuanNcIik7XG52YXIgVHlwZUVycm9yID0gZXJyb3JzLlR5cGVFcnJvcjtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIHlpZWxkSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gcHJvbWlzZUZyb21ZaWVsZEhhbmRsZXIodmFsdWUsIHlpZWxkSGFuZGxlcnMsIHRyYWNlUGFyZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB5aWVsZEhhbmRsZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHRyYWNlUGFyZW50Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goeWllbGRIYW5kbGVyc1tpXSkodmFsdWUpO1xuICAgICAgICB0cmFjZVBhcmVudC5fcG9wQ29udGV4dCgpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgdHJhY2VQYXJlbnQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgICAgICB2YXIgcmV0ID0gUHJvbWlzZS5yZWplY3QoZXJyb3JPYmouZSk7XG4gICAgICAgICAgICB0cmFjZVBhcmVudC5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXN1bHQsIHRyYWNlUGFyZW50KTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHJlY2VpdmVyLCB5aWVsZEhhbmRsZXIsIHN0YWNrKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdGhpcy5fc3RhY2sgPSBzdGFjaztcbiAgICB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvckZ1bmN0aW9uO1xuICAgIHRoaXMuX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3lpZWxkSGFuZGxlcnMgPSB0eXBlb2YgeWllbGRIYW5kbGVyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBbeWllbGRIYW5kbGVyXS5jb25jYXQoeWllbGRIYW5kbGVycylcbiAgICAgICAgOiB5aWVsZEhhbmRsZXJzO1xufVxuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl9ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24uY2FsbCh0aGlzLl9yZWNlaXZlcik7XG4gICAgdGhpcy5fcmVjZWl2ZXIgPVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uZXh0KHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl9jb250aW51ZSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVzdWx0LmUsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgaWYgKHJlc3VsdC5kb25lID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3Jlc29sdmVDYWxsYmFjayh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodmFsdWUsIHRoaXMuX3Byb21pc2UpO1xuICAgICAgICBpZiAoIShtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID1cbiAgICAgICAgICAgICAgICBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcihtYXliZVByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5feWllbGRIYW5kbGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9taXNlKTtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aHJvdyhcbiAgICAgICAgICAgICAgICAgICAgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQSB2YWx1ZSAlcyB3YXMgeWllbGRlZCB0aGF0IGNvdWxkIG5vdCBiZSB0cmVhdGVkIGFzIGEgcHJvbWlzZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzRZNHBEa1xcdTAwMGFcXHUwMDBhXCIucmVwbGFjZShcIiVzXCIsIHZhbHVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZyb20gY29yb3V0aW5lOlxcdTAwMGFcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFjay5zcGxpdChcIlxcblwiKS5zbGljZSgxLCAtNykuam9pbihcIlxcblwiKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKFxuICAgICAgICAgICAgdGhpcy5fbmV4dCxcbiAgICAgICAgICAgIHRoaXMuX3Rocm93LFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICApO1xuICAgIH1cbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Rocm93ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRoaXMuX3Byb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UocmVhc29uKTtcbiAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3JbXCJ0aHJvd1wiXSlcbiAgICAgICAgLmNhbGwodGhpcy5fZ2VuZXJhdG9yLCByZWFzb24pO1xuICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX3Byb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuX2dlbmVyYXRvci5uZXh0KS5jYWxsKHRoaXMuX2dlbmVyYXRvciwgdmFsdWUpO1xuICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZS5jb3JvdXRpbmUgPSBmdW5jdGlvbiAoZ2VuZXJhdG9yRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzZWcWhtMFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciB5aWVsZEhhbmRsZXIgPSBPYmplY3Qob3B0aW9ucykueWllbGRIYW5kbGVyO1xuICAgIHZhciBQcm9taXNlU3Bhd24kID0gUHJvbWlzZVNwYXduO1xuICAgIHZhciBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnZW5lcmF0b3IgPSBnZW5lcmF0b3JGdW5jdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgc3Bhd24gPSBuZXcgUHJvbWlzZVNwYXduJCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgeWllbGRIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjayk7XG4gICAgICAgIHNwYXduLl9nZW5lcmF0b3IgPSBnZW5lcmF0b3I7XG4gICAgICAgIHNwYXduLl9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBzcGF3bi5wcm9taXNlKCk7XG4gICAgfTtcbn07XG5cblByb21pc2UuY29yb3V0aW5lLmFkZFlpZWxkSGFuZGxlciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICB5aWVsZEhhbmRsZXJzLnB1c2goZm4pO1xufTtcblxuUHJvbWlzZS5zcGF3biA9IGZ1bmN0aW9uIChnZW5lcmF0b3JGdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2YgZ2VuZXJhdG9yRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZ2VuZXJhdG9yRnVuY3Rpb24gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvNlZxaG0wXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdmFyIHNwYXduID0gbmV3IFByb21pc2VTcGF3bihnZW5lcmF0b3JGdW5jdGlvbiwgdGhpcyk7XG4gICAgdmFyIHJldCA9IHNwYXduLnByb21pc2UoKTtcbiAgICBzcGF3bi5fcnVuKFByb21pc2Uuc3Bhd24pO1xuICAgIHJldHVybiByZXQ7XG59O1xufTtcblxufSx7XCIuL2Vycm9ycy5qc1wiOjEzLFwiLi91dGlsLmpzXCI6Mzh9XSwxODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgdHJ5Q29udmVydFRvUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciByZWplY3Q7XG5cbmlmICghdHJ1ZSkge1xuaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgdmFyIHRoZW5DYWxsYmFjayA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInZhbHVlXCIsIFwiaG9sZGVyXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaG9sZGVyLnBJbmRleCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaG9sZGVyLmNoZWNrRnVsZmlsbG1lbnQodGhpcyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCIucmVwbGFjZSgvSW5kZXgvZywgaSkpO1xuICAgIH07XG5cbiAgICB2YXIgY2FsbGVyID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBjb3VudDsgKytpKSB2YWx1ZXMucHVzaChcImhvbGRlci5wXCIgKyBpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGhvbGRlci5mbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh2YWx1ZXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL3ZhbHVlcy9nLCB2YWx1ZXMuam9pbihcIiwgXCIpKSk7XG4gICAgfTtcbiAgICB2YXIgdGhlbkNhbGxiYWNrcyA9IFtdO1xuICAgIHZhciBjYWxsZXJzID0gW3VuZGVmaW5lZF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gNTsgKytpKSB7XG4gICAgICAgIHRoZW5DYWxsYmFja3MucHVzaCh0aGVuQ2FsbGJhY2soaSkpO1xuICAgICAgICBjYWxsZXJzLnB1c2goY2FsbGVyKGkpKTtcbiAgICB9XG5cbiAgICB2YXIgSG9sZGVyID0gZnVuY3Rpb24odG90YWwsIGZuKSB7XG4gICAgICAgIHRoaXMucDEgPSB0aGlzLnAyID0gdGhpcy5wMyA9IHRoaXMucDQgPSB0aGlzLnA1ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xuICAgICAgICB0aGlzLnRvdGFsID0gdG90YWw7XG4gICAgICAgIHRoaXMubm93ID0gMDtcbiAgICB9O1xuXG4gICAgSG9sZGVyLnByb3RvdHlwZS5jYWxsZXJzID0gY2FsbGVycztcbiAgICBIb2xkZXIucHJvdG90eXBlLmNoZWNrRnVsZmlsbG1lbnQgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLm5vdztcbiAgICAgICAgbm93Kys7XG4gICAgICAgIHZhciB0b3RhbCA9IHRoaXMudG90YWw7XG4gICAgICAgIGlmIChub3cgPj0gdG90YWwpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5jYWxsZXJzW3RvdGFsXTtcbiAgICAgICAgICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2goaGFuZGxlcikodGhpcyk7XG4gICAgICAgICAgICBwcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHJldC5lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3Jlc29sdmVDYWxsYmFjayhyZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub3cgPSBub3c7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG4gICAgfTtcbn1cbn1cblxuUHJvbWlzZS5qb2luID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0ID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGZuO1xuICAgIGlmIChsYXN0ID4gMCAmJiB0eXBlb2YgYXJndW1lbnRzW2xhc3RdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm4gPSBhcmd1bWVudHNbbGFzdF07XG4gICAgICAgIGlmICghdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGxhc3QgPCA2ICYmIGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgICAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGhvbGRlciA9IG5ldyBIb2xkZXIobGFzdCwgZm4pO1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGVuQ2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKGFyZ3VtZW50c1tpXSwgcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlLl9pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihjYWxsYmFja3NbaV0sIHJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCByZXQsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5faXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5jYWxsKHJldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3ZhbHVlKCksIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5fcmVqZWN0KG1heWJlUHJvbWlzZS5fcmVhc29uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmNhbGwocmV0LCBtYXliZVByb21pc2UsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuKTsgZm9yKHZhciAkX2kgPSAwOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgaWYgKGZuKSBhcmdzLnBvcCgpO1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZUFycmF5KGFyZ3MpLnByb21pc2UoKTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IHJldC5zcHJlYWQoZm4pIDogcmV0O1xufTtcblxufTtcblxufSx7XCIuL3V0aWwuanNcIjozOH1dLDE5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwpIHtcbnZhciBhc3luYyA9IF9kZXJlcV8oXCIuL2FzeW5jLmpzXCIpO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgUEVORElORyA9IHt9O1xudmFyIEVNUFRZX0FSUkFZID0gW107XG5cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBsaW1pdCwgX2ZpbHRlcikge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB0aGlzLl9wcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZm47XG4gICAgdGhpcy5fcHJlc2VydmVkVmFsdWVzID0gX2ZpbHRlciA9PT0gSU5URVJOQUxcbiAgICAgICAgPyBuZXcgQXJyYXkodGhpcy5sZW5ndGgoKSlcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy5faW5GbGlnaHQgPSAwO1xuICAgIHRoaXMuX3F1ZXVlID0gbGltaXQgPj0gMSA/IFtdIDogRU1QVFlfQVJSQVk7XG4gICAgYXN5bmMuaW52b2tlKGluaXQsIHRoaXMsIHVuZGVmaW5lZCk7XG59XG51dGlsLmluaGVyaXRzKE1hcHBpbmdQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5mdW5jdGlvbiBpbml0KCkge3RoaXMuX2luaXQkKHVuZGVmaW5lZCwgLTIpO31cblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICB2YXIgcHJlc2VydmVkVmFsdWVzID0gdGhpcy5fcHJlc2VydmVkVmFsdWVzO1xuICAgIHZhciBsaW1pdCA9IHRoaXMuX2xpbWl0O1xuICAgIGlmICh2YWx1ZXNbaW5kZXhdID09PSBQRU5ESU5HKSB7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGxpbWl0ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2luRmxpZ2h0LS07XG4gICAgICAgICAgICB0aGlzLl9kcmFpblF1ZXVlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGltaXQgPj0gMSAmJiB0aGlzLl9pbkZsaWdodCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcXVldWUucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCkgcHJlc2VydmVkVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrO1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9wcm9taXNlLl9ib3VuZFRvO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2goY2FsbGJhY2spLmNhbGwocmVjZWl2ZXIsIHZhbHVlLCBpbmRleCwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikgcmV0dXJuIHRoaXMuX3JlamVjdChyZXQuZSk7XG5cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmV0LCB0aGlzLl9wcm9taXNlKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlLl9pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIGlmIChsaW1pdCA+PSAxKSB0aGlzLl9pbkZsaWdodCsrO1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBQRU5ESU5HO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF5YmVQcm9taXNlLl9pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLl92YWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KG1heWJlUHJvbWlzZS5fcmVhc29uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSByZXQ7XG4gICAgfVxuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IGxlbmd0aCkge1xuICAgICAgICBpZiAocHJlc2VydmVkVmFsdWVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXIodmFsdWVzLCBwcmVzZXJ2ZWRWYWx1ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICB9XG59O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZHJhaW5RdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX2luRmxpZ2h0IDwgbGltaXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZXNbaW5kZXhdLCBpbmRleCk7XG4gICAgfVxufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2ZpbHRlciA9IGZ1bmN0aW9uIChib29sZWFucywgdmFsdWVzKSB7XG4gICAgdmFyIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShsZW4pO1xuICAgIHZhciBqID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmIChib29sZWFuc1tpXSkgcmV0W2orK10gPSB2YWx1ZXNbaV07XG4gICAgfVxuICAgIHJldC5sZW5ndGggPSBqO1xuICAgIHRoaXMuX3Jlc29sdmUocmV0KTtcbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLnByZXNlcnZlZFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlc2VydmVkVmFsdWVzO1xufTtcblxuZnVuY3Rpb24gbWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgX2ZpbHRlcikge1xuICAgIHZhciBsaW1pdCA9IHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMgIT09IG51bGxcbiAgICAgICAgPyBvcHRpb25zLmNvbmN1cnJlbmN5XG4gICAgICAgIDogMDtcbiAgICBsaW1pdCA9IHR5cGVvZiBsaW1pdCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICBpc0Zpbml0ZShsaW1pdCkgJiYgbGltaXQgPj0gMSA/IGxpbWl0IDogMDtcbiAgICByZXR1cm4gbmV3IE1hcHBpbmdQcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBsaW1pdCwgX2ZpbHRlcik7XG59XG5cblByb21pc2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzkxNmxKSlxcdTAwMGFcIik7XG5cbiAgICByZXR1cm4gbWFwKHRoaXMsIGZuLCBvcHRpb25zLCBudWxsKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLm1hcCA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4sIG9wdGlvbnMsIF9maWx0ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC85MTZsSkpcXHUwMDBhXCIpO1xuICAgIHJldHVybiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKS5wcm9taXNlKCk7XG59O1xuXG5cbn07XG5cbn0se1wiLi9hc3luYy5qc1wiOjIsXCIuL3V0aWwuanNcIjozOH1dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbikge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcblxuUHJvbWlzZS5tZXRob2QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFByb21pc2UuVHlwZUVycm9yKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICByZXQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNhdGNoKGZuKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgcmV0Ll9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn07XG5cblByb21pc2UuYXR0ZW1wdCA9IFByb21pc2VbXCJ0cnlcIl0gPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIGN0eCkge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgcmV0Ll9wdXNoQ29udGV4dCgpO1xuICAgIHZhciB2YWx1ZSA9IHV0aWwuaXNBcnJheShhcmdzKVxuICAgICAgICA/IHRyeUNhdGNoKGZuKS5hcHBseShjdHgsIGFyZ3MpXG4gICAgICAgIDogdHJ5Q2F0Y2goZm4pLmNhbGwoY3R4LCBhcmdzKTtcbiAgICByZXQuX3BvcENvbnRleHQoKTtcbiAgICByZXQuX3Jlc29sdmVGcm9tU3luY1ZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc29sdmVGcm9tU3luY1ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1dGlsLmVycm9yT2JqKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdENhbGxiYWNrKHZhbHVlLmUsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUsIHRydWUpO1xuICAgIH1cbn07XG59O1xuXG59LHtcIi4vdXRpbC5qc1wiOjM4fV0sMjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBhc3luYyA9IF9kZXJlcV8oXCIuL2FzeW5jLmpzXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG5cbmZ1bmN0aW9uIHNwcmVhZEFkYXB0ZXIodmFsLCBub2RlYmFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICBpZiAoIXV0aWwuaXNBcnJheSh2YWwpKSByZXR1cm4gc3VjY2Vzc0FkYXB0ZXIuY2FsbChwcm9taXNlLCB2YWwsIG5vZGViYWNrKTtcbiAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2gobm9kZWJhY2spLmFwcGx5KHByb21pc2UuX2JvdW5kVG8sIFtudWxsXS5jb25jYXQodmFsKSk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihyZXQuZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdWNjZXNzQWRhcHRlcih2YWwsIG5vZGViYWNrKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHZhciByZWNlaXZlciA9IHByb21pc2UuX2JvdW5kVG87XG4gICAgdmFyIHJldCA9IHZhbCA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gdHJ5Q2F0Y2gobm9kZWJhY2spLmNhbGwocmVjZWl2ZXIsIG51bGwpXG4gICAgICAgIDogdHJ5Q2F0Y2gobm9kZWJhY2spLmNhbGwocmVjZWl2ZXIsIG51bGwsIHZhbCk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihyZXQuZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZXJyb3JBZGFwdGVyKHJlYXNvbiwgbm9kZWJhY2spIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICB2YXIgbmV3UmVhc29uID0gdGFyZ2V0Ll9nZXRDYXJyaWVkU3RhY2tUcmFjZSgpO1xuICAgICAgICBuZXdSZWFzb24uY2F1c2UgPSByZWFzb247XG4gICAgICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgICB9XG4gICAgdmFyIHJldCA9IHRyeUNhdGNoKG5vZGViYWNrKS5jYWxsKHByb21pc2UuX2JvdW5kVG8sIHJlYXNvbik7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihyZXQuZSk7XG4gICAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5hc0NhbGxiYWNrID0gXG5Qcm9taXNlLnByb3RvdHlwZS5ub2RlaWZ5ID0gZnVuY3Rpb24gKG5vZGViYWNrLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIGFkYXB0ZXIgPSBzdWNjZXNzQWRhcHRlcjtcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiBPYmplY3Qob3B0aW9ucykuc3ByZWFkKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gc3ByZWFkQWRhcHRlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aGVuKFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIGVycm9yQWRhcHRlcixcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBub2RlYmFja1xuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG59O1xuXG59LHtcIi4vYXN5bmMuanNcIjoyLFwiLi91dGlsLmpzXCI6Mzh9XSwyMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5KSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgYXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luYy5qc1wiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5wcm9ncmVzc2VkID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbih1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGFuZGxlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzVmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3RhcmdldCgpLl9wcm9ncmVzc1VuY2hlY2tlZChwcm9ncmVzc1ZhbHVlKTtcblxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb2dyZXNzSGFuZGxlckF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgMl07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZG9Qcm9ncmVzc1dpdGggPSBmdW5jdGlvbiAocHJvZ3Jlc3Npb24pIHtcbiAgICB2YXIgcHJvZ3Jlc3NWYWx1ZSA9IHByb2dyZXNzaW9uLnZhbHVlO1xuICAgIHZhciBoYW5kbGVyID0gcHJvZ3Jlc3Npb24uaGFuZGxlcjtcbiAgICB2YXIgcHJvbWlzZSA9IHByb2dyZXNzaW9uLnByb21pc2U7XG4gICAgdmFyIHJlY2VpdmVyID0gcHJvZ3Jlc3Npb24ucmVjZWl2ZXI7XG5cbiAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2goaGFuZGxlcikuY2FsbChyZWNlaXZlciwgcHJvZ3Jlc3NWYWx1ZSk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgaWYgKHJldC5lICE9IG51bGwgJiZcbiAgICAgICAgICAgIHJldC5lLm5hbWUgIT09IFwiU3RvcFByb2dyZXNzUHJvcGFnYXRpb25cIikge1xuICAgICAgICAgICAgdmFyIHRyYWNlID0gdXRpbC5jYW5BdHRhY2hUcmFjZShyZXQuZSlcbiAgICAgICAgICAgICAgICA/IHJldC5lIDogbmV3IEVycm9yKHV0aWwudG9TdHJpbmcocmV0LmUpKTtcbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5fcHJvZ3Jlc3MocmV0LmUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldC5fdGhlbihwcm9taXNlLl9wcm9ncmVzcywgbnVsbCwgbnVsbCwgcHJvbWlzZSwgdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLl9wcm9ncmVzcyhyZXQpO1xuICAgIH1cbn07XG5cblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb2dyZXNzVW5jaGVja2VkID0gZnVuY3Rpb24gKHByb2dyZXNzVmFsdWUpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCk7XG4gICAgdmFyIHByb2dyZXNzID0gdGhpcy5fcHJvZ3Jlc3M7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuX3Byb2dyZXNzSGFuZGxlckF0KGkpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2VBdChpKTtcbiAgICAgICAgaWYgKCEocHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9yZWNlaXZlckF0KGkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwocmVjZWl2ZXIsIHByb2dyZXNzVmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2VBcnJheSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAhcmVjZWl2ZXIuX2lzUmVzb2x2ZWQoKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9taXNlUHJvZ3Jlc3NlZChwcm9ncmVzc1ZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9kb1Byb2dyZXNzV2l0aCwgdGhpcywge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlcjogdGhpcy5fcmVjZWl2ZXJBdChpKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvZ3Jlc3NWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3luYy5pbnZva2UocHJvZ3Jlc3MsIHByb21pc2UsIHByb2dyZXNzVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbn07XG5cbn0se1wiLi9hc3luYy5qc1wiOjIsXCIuL3V0aWwuanNcIjozOH1dLDIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbnZhciBtYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImNpcmN1bGFyIHByb21pc2UgcmVzb2x1dGlvbiBjaGFpblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL0xoRnBvMFxcdTAwMGFcIik7XG59O1xudmFyIHJlZmxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb24odGhpcy5fdGFyZ2V0KCkpO1xufTtcbnZhciBhcGlSZWplY3Rpb24gPSBmdW5jdGlvbihtc2cpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihtc2cpKTtcbn07XG5cbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcblxudmFyIGdldERvbWFpbjtcbmlmICh1dGlsLmlzTm9kZSkge1xuICAgIGdldERvbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmV0ID0gcHJvY2Vzcy5kb21haW47XG4gICAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkgcmV0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBnZXREb21haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbn1cbnV0aWwubm90RW51bWVyYWJsZVByb3AoUHJvbWlzZSwgXCJfZ2V0RG9tYWluXCIsIGdldERvbWFpbik7XG5cbnZhciBhc3luYyA9IF9kZXJlcV8oXCIuL2FzeW5jLmpzXCIpO1xudmFyIGVycm9ycyA9IF9kZXJlcV8oXCIuL2Vycm9ycy5qc1wiKTtcbnZhciBUeXBlRXJyb3IgPSBQcm9taXNlLlR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG5Qcm9taXNlLlJhbmdlRXJyb3IgPSBlcnJvcnMuUmFuZ2VFcnJvcjtcblByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IgPSBlcnJvcnMuQ2FuY2VsbGF0aW9uRXJyb3I7XG5Qcm9taXNlLlRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG5Qcm9taXNlLk9wZXJhdGlvbmFsRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuUmVqZWN0aW9uRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuQWdncmVnYXRlRXJyb3IgPSBlcnJvcnMuQWdncmVnYXRlRXJyb3I7XG52YXIgSU5URVJOQUwgPSBmdW5jdGlvbigpe307XG52YXIgQVBQTFkgPSB7fTtcbnZhciBORVhUX0ZJTFRFUiA9IHtlOiBudWxsfTtcbnZhciB0cnlDb252ZXJ0VG9Qcm9taXNlID0gX2RlcmVxXyhcIi4vdGhlbmFibGVzLmpzXCIpKFByb21pc2UsIElOVEVSTkFMKTtcbnZhciBQcm9taXNlQXJyYXkgPVxuICAgIF9kZXJlcV8oXCIuL3Byb21pc2VfYXJyYXkuanNcIikoUHJvbWlzZSwgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pO1xudmFyIENhcHR1cmVkVHJhY2UgPSBfZGVyZXFfKFwiLi9jYXB0dXJlZF90cmFjZS5qc1wiKSgpO1xudmFyIGlzRGVidWdnaW5nID0gX2RlcmVxXyhcIi4vZGVidWdnYWJpbGl0eS5qc1wiKShQcm9taXNlLCBDYXB0dXJlZFRyYWNlKTtcbiAvKmpzaGludCB1bnVzZWQ6ZmFsc2UqL1xudmFyIGNyZWF0ZUNvbnRleHQgPVxuICAgIF9kZXJlcV8oXCIuL2NvbnRleHQuanNcIikoUHJvbWlzZSwgQ2FwdHVyZWRUcmFjZSwgaXNEZWJ1Z2dpbmcpO1xudmFyIENhdGNoRmlsdGVyID0gX2RlcmVxXyhcIi4vY2F0Y2hfZmlsdGVyLmpzXCIpKE5FWFRfRklMVEVSKTtcbnZhciBQcm9taXNlUmVzb2x2ZXIgPSBfZGVyZXFfKFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCIpO1xudmFyIG5vZGViYWNrRm9yUHJvbWlzZSA9IFByb21pc2VSZXNvbHZlci5fbm9kZWJhY2tGb3JQcm9taXNlO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG5mdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciByZXF1aXJlcyBhIHJlc29sdmVyIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvRUMyMlluXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IgIT09IFByb21pc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBpbnZva2VkIGRpcmVjdGx5XFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvS3NJbGdlXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdGhpcy5fYml0RmllbGQgPSAwO1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wcm9taXNlMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZWNlaXZlcjAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGlmIChyZXNvbHZlciAhPT0gSU5URVJOQUwpIHRoaXMuX3Jlc29sdmVGcm9tUmVzb2x2ZXIocmVzb2x2ZXIpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IFByb21pc2VdXCI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXVnaHQgPSBQcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgICAgdmFyIGNhdGNoSW5zdGFuY2VzID0gbmV3IEFycmF5KGxlbiAtIDEpLFxuICAgICAgICAgICAgaiA9IDAsIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4gLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjYXRjaEluc3RhbmNlc1tqKytdID0gaXRlbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFwiQ2F0Y2ggZmlsdGVyIG11c3QgaW5oZXJpdCBmcm9tIEVycm9yIG9yIGJlIGEgc2ltcGxlIHByZWRpY2F0ZSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL284NG82OFxcdTAwMGFcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoSW5zdGFuY2VzLmxlbmd0aCA9IGo7XG4gICAgICAgIGZuID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB2YXIgY2F0Y2hGaWx0ZXIgPSBuZXcgQ2F0Y2hGaWx0ZXIoY2F0Y2hJbnN0YW5jZXMsIGZuLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4odW5kZWZpbmVkLCBjYXRjaEZpbHRlci5kb0ZpbHRlciwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2F0Y2hGaWx0ZXIsIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKHVuZGVmaW5lZCwgZm4sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUucmVmbGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihyZWZsZWN0LCByZWZsZWN0LCB1bmRlZmluZWQsIHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICBpZiAoaXNEZWJ1Z2dpbmcoKSAmJiBhcmd1bWVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICB0eXBlb2YgZGlkRnVsZmlsbCAhPT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIHR5cGVvZiBkaWRSZWplY3QgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgbXNnID0gXCIudGhlbigpIG9ubHkgYWNjZXB0cyBmdW5jdGlvbnMgYnV0IHdhcyBwYXNzZWQ6IFwiICtcbiAgICAgICAgICAgICAgICB1dGlsLmNsYXNzU3RyaW5nKGRpZEZ1bGZpbGwpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIG1zZyArPSBcIiwgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGRpZFJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fd2Fybihtc2cpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHByb21pc2UuX3NldElzRmluYWwoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNwcmVhZCA9IGZ1bmN0aW9uIChkaWRGdWxmaWxsLCBkaWRSZWplY3QpIHtcbiAgICByZXR1cm4gdGhpcy5hbGwoKS5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIHVuZGVmaW5lZCwgQVBQTFksIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc0NhbmNlbGxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhdGhpcy5pc1Jlc29sdmVkKCkgJiZcbiAgICAgICAgdGhpcy5fY2FuY2VsbGFibGUoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmV0ID0ge1xuICAgICAgICBpc0Z1bGZpbGxlZDogZmFsc2UsXG4gICAgICAgIGlzUmVqZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBmdWxmaWxsbWVudFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIHJlamVjdGlvblJlYXNvbjogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAodGhpcy5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHJldC5mdWxmaWxsbWVudFZhbHVlID0gdGhpcy52YWx1ZSgpO1xuICAgICAgICByZXQuaXNGdWxmaWxsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgcmV0LnJlamVjdGlvblJlYXNvbiA9IHRoaXMucmVhc29uKCk7XG4gICAgICAgIHJldC5pc1JlamVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VBcnJheSh0aGlzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLmNhdWdodCh1dGlsLm9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uLCBmbik7XG59O1xuXG5Qcm9taXNlLmlzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBQcm9taXNlO1xufTtcblxuUHJvbWlzZS5mcm9tTm9kZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goZm4pKG5vZGViYWNrRm9yUHJvbWlzZShyZXQpKTtcbiAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICByZXQuX3JlamVjdENhbGxiYWNrKHJlc3VsdC5lLCB0cnVlLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkocHJvbWlzZXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UuZGVmZXIgPSBQcm9taXNlLnBlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlUmVzb2x2ZXIocHJvbWlzZSk7XG59O1xuXG5Qcm9taXNlLmNhc3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHJldCA9IHRyeUNvbnZlcnRUb1Byb21pc2Uob2JqKTtcbiAgICBpZiAoIShyZXQgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICB2YXIgdmFsID0gcmV0O1xuICAgICAgICByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHJldC5fZnVsZmlsbFVuY2hlY2tlZCh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gUHJvbWlzZS5mdWxmaWxsZWQgPSBQcm9taXNlLmNhc3Q7XG5cblByb21pc2UucmVqZWN0ID0gUHJvbWlzZS5yZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICByZXQuX3JlamVjdENhbGxiYWNrKHJlYXNvbiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2Uuc2V0U2NoZWR1bGVyID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC85MTZsSkpcXHUwMDBhXCIpO1xuICAgIHZhciBwcmV2ID0gYXN5bmMuX3NjaGVkdWxlO1xuICAgIGFzeW5jLl9zY2hlZHVsZSA9IGZuO1xuICAgIHJldHVybiBwcmV2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3RoZW4gPSBmdW5jdGlvbiAoXG4gICAgZGlkRnVsZmlsbCxcbiAgICBkaWRSZWplY3QsXG4gICAgZGlkUHJvZ3Jlc3MsXG4gICAgcmVjZWl2ZXIsXG4gICAgaW50ZXJuYWxEYXRhXG4pIHtcbiAgICB2YXIgaGF2ZUludGVybmFsRGF0YSA9IGludGVybmFsRGF0YSAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciByZXQgPSBoYXZlSW50ZXJuYWxEYXRhID8gaW50ZXJuYWxEYXRhIDogbmV3IFByb21pc2UoSU5URVJOQUwpO1xuXG4gICAgaWYgKCFoYXZlSW50ZXJuYWxEYXRhKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCA0IHwgMSk7XG4gICAgICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgaWYgKHRhcmdldCAhPT0gdGhpcykge1xuICAgICAgICBpZiAocmVjZWl2ZXIgPT09IHVuZGVmaW5lZCkgcmVjZWl2ZXIgPSB0aGlzLl9ib3VuZFRvO1xuICAgICAgICBpZiAoIWhhdmVJbnRlcm5hbERhdGEpIHJldC5fc2V0SXNNaWdyYXRlZCgpO1xuICAgIH1cblxuICAgIHZhciBjYWxsYmFja0luZGV4ID0gdGFyZ2V0Ll9hZGRDYWxsYmFja3MoZGlkRnVsZmlsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZFJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZFByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXREb21haW4oKSk7XG5cbiAgICBpZiAodGFyZ2V0Ll9pc1Jlc29sdmVkKCkgJiYgIXRhcmdldC5faXNTZXR0bGVQcm9taXNlc1F1ZXVlZCgpKSB7XG4gICAgICAgIGFzeW5jLmludm9rZShcbiAgICAgICAgICAgIHRhcmdldC5fc2V0dGxlUHJvbWlzZUF0UG9zdFJlc29sdXRpb24sIHRhcmdldCwgY2FsbGJhY2tJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlQXRQb3N0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1JlamVjdGlvblVuaGFuZGxlZCgpKSB0aGlzLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgdGhpcy5fc2V0dGxlUHJvbWlzZUF0KGluZGV4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdEZpZWxkICYgMTMxMDcxO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA5Mzk1MjQwOTYpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0ZvbGxvd2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNTM2ODcwOTEyKSA9PT0gNTM2ODcwOTEyO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldExlbmd0aCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9ICh0aGlzLl9iaXRGaWVsZCAmIC0xMzEwNzIpIHxcbiAgICAgICAgKGxlbiAmIDEzMTA3MSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0RnVsZmlsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyNjg0MzU0NTY7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmVqZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEzNDIxNzcyODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRJc0ZpbmFsID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAzMzU1NDQzMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0ZpbmFsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAzMzU1NDQzMikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbGxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA2NzEwODg2NCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldENhbmNlbGxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA2NzEwODg2NDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhbmNlbGxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjY3MTA4ODY0KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRJc01pZ3JhdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA0MTk0MzA0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0SXNNaWdyYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH40MTk0MzA0KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc01pZ3JhdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA0MTk0MzA0KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVjZWl2ZXJBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciByZXQgPSBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3JlY2VpdmVyMFxuICAgICAgICA6IHRoaXNbXG4gICAgICAgICAgICBpbmRleCAqIDUgLSA1ICsgNF07XG4gICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzQm91bmQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRUbztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9taXNlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9wcm9taXNlMFxuICAgICAgICA6IHRoaXNbaW5kZXggKiA1IC0gNSArIDNdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Z1bGZpbGxtZW50SGFuZGxlckF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMFxuICAgICAgICA6IHRoaXNbaW5kZXggKiA1IC0gNSArIDBdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdGlvbkhhbmRsZXJBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwXG4gICAgICAgIDogdGhpc1tpbmRleCAqIDUgLSA1ICsgMV07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbWlncmF0ZUNhbGxiYWNrcyA9IGZ1bmN0aW9uIChmb2xsb3dlciwgaW5kZXgpIHtcbiAgICB2YXIgZnVsZmlsbCA9IGZvbGxvd2VyLl9mdWxmaWxsbWVudEhhbmRsZXJBdChpbmRleCk7XG4gICAgdmFyIHJlamVjdCA9IGZvbGxvd2VyLl9yZWplY3Rpb25IYW5kbGVyQXQoaW5kZXgpO1xuICAgIHZhciBwcm9ncmVzcyA9IGZvbGxvd2VyLl9wcm9ncmVzc0hhbmRsZXJBdChpbmRleCk7XG4gICAgdmFyIHByb21pc2UgPSBmb2xsb3dlci5fcHJvbWlzZUF0KGluZGV4KTtcbiAgICB2YXIgcmVjZWl2ZXIgPSBmb2xsb3dlci5fcmVjZWl2ZXJBdChpbmRleCk7XG4gICAgaWYgKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSBwcm9taXNlLl9zZXRJc01pZ3JhdGVkKCk7XG4gICAgdGhpcy5fYWRkQ2FsbGJhY2tzKGZ1bGZpbGwsIHJlamVjdCwgcHJvZ3Jlc3MsIHByb21pc2UsIHJlY2VpdmVyLCBudWxsKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9hZGRDYWxsYmFja3MgPSBmdW5jdGlvbiAoXG4gICAgZnVsZmlsbCxcbiAgICByZWplY3QsXG4gICAgcHJvZ3Jlc3MsXG4gICAgcHJvbWlzZSxcbiAgICByZWNlaXZlcixcbiAgICBkb21haW5cbikge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX2xlbmd0aCgpO1xuXG4gICAgaWYgKGluZGV4ID49IDEzMTA3MSAtIDUpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9zZXRMZW5ndGgoMCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UwID0gcHJvbWlzZTtcbiAgICAgICAgaWYgKHJlY2VpdmVyICE9PSB1bmRlZmluZWQpIHRoaXMuX3JlY2VpdmVyMCA9IHJlY2VpdmVyO1xuICAgICAgICBpZiAodHlwZW9mIGZ1bGZpbGwgPT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpcy5faXNDYXJyeWluZ1N0YWNrVHJhY2UoKSkge1xuICAgICAgICAgICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gZnVsZmlsbCA6IGRvbWFpbi5iaW5kKGZ1bGZpbGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID1cbiAgICAgICAgICAgICAgICBkb21haW4gPT09IG51bGwgPyByZWplY3QgOiBkb21haW4uYmluZChyZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gcHJvZ3Jlc3MgOiBkb21haW4uYmluZChwcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYmFzZSA9IGluZGV4ICogNSAtIDU7XG4gICAgICAgIHRoaXNbYmFzZSArIDNdID0gcHJvbWlzZTtcbiAgICAgICAgdGhpc1tiYXNlICsgNF0gPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXNbYmFzZSArIDBdID1cbiAgICAgICAgICAgICAgICBkb21haW4gPT09IG51bGwgPyBmdWxmaWxsIDogZG9tYWluLmJpbmQoZnVsZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpc1tiYXNlICsgMV0gPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IHJlamVjdCA6IGRvbWFpbi5iaW5kKHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzW2Jhc2UgKyAyXSA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gcHJvZ3Jlc3MgOiBkb21haW4uYmluZChwcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TGVuZ3RoKGluZGV4ICsgMSk7XG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFByb3h5SGFuZGxlcnMgPSBmdW5jdGlvbiAocmVjZWl2ZXIsIHByb21pc2VTbG90VmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAxMzEwNzEgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZTAgPSBwcm9taXNlU2xvdFZhbHVlO1xuICAgICAgICB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYmFzZSA9IGluZGV4ICogNSAtIDU7XG4gICAgICAgIHRoaXNbYmFzZSArIDNdID0gcHJvbWlzZVNsb3RWYWx1ZTtcbiAgICAgICAgdGhpc1tiYXNlICsgNF0gPSByZWNlaXZlcjtcbiAgICB9XG4gICAgdGhpcy5fc2V0TGVuZ3RoKGluZGV4ICsgMSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJveHlQcm9taXNlQXJyYXkgPSBmdW5jdGlvbiAocHJvbWlzZUFycmF5LCBpbmRleCkge1xuICAgIHRoaXMuX3NldFByb3h5SGFuZGxlcnMocHJvbWlzZUFycmF5LCBpbmRleCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVzb2x2ZUNhbGxiYWNrID0gZnVuY3Rpb24odmFsdWUsIHNob3VsZEJpbmQpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcylcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdENhbGxiYWNrKG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCksIGZhbHNlLCB0cnVlKTtcbiAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh2YWx1ZSwgdGhpcyk7XG4gICAgaWYgKCEobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHJldHVybiB0aGlzLl9mdWxmaWxsKHZhbHVlKTtcblxuICAgIHZhciBwcm9wYWdhdGlvbkZsYWdzID0gMSB8IChzaG91bGRCaW5kID8gNCA6IDApO1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUZyb20obWF5YmVQcm9taXNlLCBwcm9wYWdhdGlvbkZsYWdzKTtcbiAgICB2YXIgcHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgaWYgKHByb21pc2UuX2lzUGVuZGluZygpKSB7XG4gICAgICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fbWlncmF0ZUNhbGxiYWNrcyh0aGlzLCBpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXRGb2xsb3dpbmcoKTtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgICAgICB0aGlzLl9zZXRGb2xsb3dlZShwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKHByb21pc2UuX2lzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhpcy5fZnVsZmlsbFVuY2hlY2tlZChwcm9taXNlLl92YWx1ZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocHJvbWlzZS5fcmVhc29uKCksXG4gICAgICAgICAgICBwcm9taXNlLl9nZXRDYXJyaWVkU3RhY2tUcmFjZSgpKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0Q2FsbGJhY2sgPVxuZnVuY3Rpb24ocmVhc29uLCBzeW5jaHJvbm91cywgc2hvdWxkTm90TWFya09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbikge1xuICAgIGlmICghc2hvdWxkTm90TWFya09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbikge1xuICAgICAgICB1dGlsLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihyZWFzb24pO1xuICAgIH1cbiAgICB2YXIgdHJhY2UgPSB1dGlsLmVuc3VyZUVycm9yT2JqZWN0KHJlYXNvbik7XG4gICAgdmFyIGhhc1N0YWNrID0gdHJhY2UgPT09IHJlYXNvbjtcbiAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlLCBzeW5jaHJvbm91cyA/IGhhc1N0YWNrIDogZmFsc2UpO1xuICAgIHRoaXMuX3JlamVjdChyZWFzb24sIGhhc1N0YWNrID8gdW5kZWZpbmVkIDogdHJhY2UpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc29sdmVGcm9tUmVzb2x2ZXIgPSBmdW5jdGlvbiAocmVzb2x2ZXIpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdGhpcy5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB0aGlzLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciBzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgdmFyIHIgPSB0cnlDYXRjaChyZXNvbHZlcikoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHByb21pc2UgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICBpZiAocHJvbWlzZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZWFzb24sIHN5bmNocm9ub3VzKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfSk7XG4gICAgc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICB0aGlzLl9wb3BDb250ZXh0KCk7XG5cbiAgICBpZiAociAhPT0gdW5kZWZpbmVkICYmIHIgPT09IGVycm9yT2JqICYmIHByb21pc2UgIT09IG51bGwpIHtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2soci5lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlciA9IGZ1bmN0aW9uIChcbiAgICBoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUsIHByb21pc2Vcbikge1xuICAgIGlmIChwcm9taXNlLl9pc1JlamVjdGVkKCkpIHJldHVybjtcbiAgICBwcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciB4O1xuICAgIGlmIChyZWNlaXZlciA9PT0gQVBQTFkgJiYgIXRoaXMuX2lzUmVqZWN0ZWQoKSkge1xuICAgICAgICB4ID0gdHJ5Q2F0Y2goaGFuZGxlcikuYXBwbHkodGhpcy5fYm91bmRUbywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSB0cnlDYXRjaChoYW5kbGVyKS5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgfVxuICAgIHByb21pc2UuX3BvcENvbnRleHQoKTtcblxuICAgIGlmICh4ID09PSBlcnJvck9iaiB8fCB4ID09PSBwcm9taXNlIHx8IHggPT09IE5FWFRfRklMVEVSKSB7XG4gICAgICAgIHZhciBlcnIgPSB4ID09PSBwcm9taXNlID8gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKSA6IHguZTtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2soZXJyLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl90YXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gdGhpcztcbiAgICB3aGlsZSAocmV0Ll9pc0ZvbGxvd2luZygpKSByZXQgPSByZXQuX2ZvbGxvd2VlKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mb2xsb3dlZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dlZSA9IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHByb21pc2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYW5WYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9wYWdhdGVGcm9tID0gZnVuY3Rpb24gKHBhcmVudCwgZmxhZ3MpIHtcbiAgICBpZiAoKGZsYWdzICYgMSkgPiAwICYmIHBhcmVudC5fY2FuY2VsbGFibGUoKSkge1xuICAgICAgICB0aGlzLl9zZXRDYW5jZWxsYWJsZSgpO1xuICAgICAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIGlmICgoZmxhZ3MgJiA0KSA+IDAgJiYgcGFyZW50Ll9pc0JvdW5kKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Qm91bmRUbyhwYXJlbnQuX2JvdW5kVG8pO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9mdWxmaWxsVW5jaGVja2VkKHZhbHVlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uLCBjYXJyaWVkU3RhY2tUcmFjZSkge1xuICAgIGlmICh0aGlzLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fcmVqZWN0VW5jaGVja2VkKHJlYXNvbiwgY2FycmllZFN0YWNrVHJhY2UpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZUF0KGluZGV4KTtcbiAgICB2YXIgaXNQcm9taXNlID0gcHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2U7XG5cbiAgICBpZiAoaXNQcm9taXNlICYmIHByb21pc2UuX2lzTWlncmF0ZWQoKSkge1xuICAgICAgICBwcm9taXNlLl91bnNldElzTWlncmF0ZWQoKTtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmludm9rZSh0aGlzLl9zZXR0bGVQcm9taXNlQXQsIHRoaXMsIGluZGV4KTtcbiAgICB9XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9pc0Z1bGZpbGxlZCgpXG4gICAgICAgID8gdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyQXQoaW5kZXgpXG4gICAgICAgIDogdGhpcy5fcmVqZWN0aW9uSGFuZGxlckF0KGluZGV4KTtcblxuICAgIHZhciBjYXJyaWVkU3RhY2tUcmFjZSA9XG4gICAgICAgIHRoaXMuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkgPyB0aGlzLl9nZXRDYXJyaWVkU3RhY2tUcmFjZSgpIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuX3NldHRsZWRWYWx1ZTtcbiAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9yZWNlaXZlckF0KGluZGV4KTtcblxuXG4gICAgdGhpcy5fY2xlYXJDYWxsYmFja0RhdGFBdEluZGV4KGluZGV4KTtcblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmICghaXNQcm9taXNlKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwocmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2VBcnJheSkge1xuICAgICAgICBpZiAoIXJlY2VpdmVyLl9pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuX3Byb21pc2VSZWplY3RlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICBpZiAodGhpcy5faXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3QodmFsdWUsIGNhcnJpZWRTdGFja1RyYWNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSA0ICYmIChpbmRleCAmIDMxKSA9PT0gNClcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodGhpcy5fc2V0TGVuZ3RoLCB0aGlzLCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jbGVhckNhbGxiYWNrRGF0YUF0SW5kZXggPSBmdW5jdGlvbihpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPVxuICAgICAgICB0aGlzLl9wcm9ncmVzc0hhbmRsZXIwID1cbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIwID1cbiAgICAgICAgdGhpcy5fcHJvbWlzZTAgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJhc2UgPSBpbmRleCAqIDUgLSA1O1xuICAgICAgICB0aGlzW2Jhc2UgKyAzXSA9XG4gICAgICAgIHRoaXNbYmFzZSArIDRdID1cbiAgICAgICAgdGhpc1tiYXNlICsgMF0gPVxuICAgICAgICB0aGlzW2Jhc2UgKyAxXSA9XG4gICAgICAgIHRoaXNbYmFzZSArIDJdID0gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1NldHRsZVByb21pc2VzUXVldWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJlxuICAgICAgICAgICAgLTEwNzM3NDE4MjQpID09PSAtMTA3Mzc0MTgyNDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRTZXR0bGVQcm9taXNlc1F1ZXVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgLTEwNzM3NDE4MjQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRTZXR0bGVQcm9taXNlc1F1ZXVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4tMTA3Mzc0MTgyNCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcXVldWVTZXR0bGVQcm9taXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGFzeW5jLnNldHRsZVByb21pc2VzKHRoaXMpO1xuICAgIHRoaXMuX3NldFNldHRsZVByb21pc2VzUXVldWVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbFVuY2hlY2tlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcykge1xuICAgICAgICB2YXIgZXJyID0gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0VW5jaGVja2VkKGVyciwgdW5kZWZpbmVkKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0RnVsZmlsbGVkKCk7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY2xlYW5WYWx1ZXMoKTtcblxuICAgIGlmICh0aGlzLl9sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdGhpcy5fcXVldWVTZXR0bGVQcm9taXNlcygpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RVbmNoZWNrZWRDaGVja0Vycm9yID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHZhciB0cmFjZSA9IHV0aWwuZW5zdXJlRXJyb3JPYmplY3QocmVhc29uKTtcbiAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocmVhc29uLCB0cmFjZSA9PT0gcmVhc29uID8gdW5kZWZpbmVkIDogdHJhY2UpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdFVuY2hlY2tlZCA9IGZ1bmN0aW9uIChyZWFzb24sIHRyYWNlKSB7XG4gICAgaWYgKHJlYXNvbiA9PT0gdGhpcykge1xuICAgICAgICB2YXIgZXJyID0gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0VW5jaGVja2VkKGVycik7XG4gICAgfVxuICAgIHRoaXMuX3NldFJlamVjdGVkKCk7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gcmVhc29uO1xuICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG5cbiAgICBpZiAodGhpcy5faXNGaW5hbCgpKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKFwic3RhY2tcIiBpbiBlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmMuaW52b2tlRmlyc3QoXG4gICAgICAgICAgICAgICAgICAgIENhcHR1cmVkVHJhY2UudW5oYW5kbGVkUmVqZWN0aW9uLCB1bmRlZmluZWQsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSwgdHJhY2UgPT09IHVuZGVmaW5lZCA/IHJlYXNvbiA6IHRyYWNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0cmFjZSAhPT0gdW5kZWZpbmVkICYmIHRyYWNlICE9PSByZWFzb24pIHtcbiAgICAgICAgdGhpcy5fc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdGhpcy5fcXVldWVTZXR0bGVQcm9taXNlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91bnNldFNldHRsZVByb21pc2VzUXVldWVkKCk7XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZUF0KGkpO1xuICAgIH1cbn07XG5cbnV0aWwubm90RW51bWVyYWJsZVByb3AoUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJfbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IpO1xuXG5fZGVyZXFfKFwiLi9wcm9ncmVzcy5qc1wiKShQcm9taXNlLCBQcm9taXNlQXJyYXkpO1xuX2RlcmVxXyhcIi4vbWV0aG9kLmpzXCIpKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pO1xuX2RlcmVxXyhcIi4vYmluZC5qc1wiKShQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSk7XG5fZGVyZXFfKFwiLi9maW5hbGx5LmpzXCIpKFByb21pc2UsIE5FWFRfRklMVEVSLCB0cnlDb252ZXJ0VG9Qcm9taXNlKTtcbl9kZXJlcV8oXCIuL2RpcmVjdF9yZXNvbHZlLmpzXCIpKFByb21pc2UpO1xuX2RlcmVxXyhcIi4vc3luY2hyb25vdXNfaW5zcGVjdGlvbi5qc1wiKShQcm9taXNlKTtcbl9kZXJlcV8oXCIuL2pvaW4uanNcIikoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBJTlRFUk5BTCk7XG5Qcm9taXNlLlByb21pc2UgPSBQcm9taXNlO1xuX2RlcmVxXygnLi9tYXAuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbiwgdHJ5Q29udmVydFRvUHJvbWlzZSwgSU5URVJOQUwpO1xuX2RlcmVxXygnLi9jYW5jZWwuanMnKShQcm9taXNlKTtcbl9kZXJlcV8oJy4vdXNpbmcuanMnKShQcm9taXNlLCBhcGlSZWplY3Rpb24sIHRyeUNvbnZlcnRUb1Byb21pc2UsIGNyZWF0ZUNvbnRleHQpO1xuX2RlcmVxXygnLi9nZW5lcmF0b3JzLmpzJykoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSk7XG5fZGVyZXFfKCcuL25vZGVpZnkuanMnKShQcm9taXNlKTtcbl9kZXJlcV8oJy4vY2FsbF9nZXQuanMnKShQcm9taXNlKTtcbl9kZXJlcV8oJy4vcHJvcHMuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbik7XG5fZGVyZXFfKCcuL3JhY2UuanMnKShQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKTtcbl9kZXJlcV8oJy4vcmVkdWNlLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIHRyeUNvbnZlcnRUb1Byb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vc2V0dGxlLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5KTtcbl9kZXJlcV8oJy4vc29tZS5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKTtcbl9kZXJlcV8oJy4vcHJvbWlzaWZ5LmpzJykoUHJvbWlzZSwgSU5URVJOQUwpO1xuX2RlcmVxXygnLi9hbnkuanMnKShQcm9taXNlKTtcbl9kZXJlcV8oJy4vZWFjaC5qcycpKFByb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vdGltZXJzLmpzJykoUHJvbWlzZSwgSU5URVJOQUwpO1xuX2RlcmVxXygnLi9maWx0ZXIuanMnKShQcm9taXNlLCBJTlRFUk5BTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB1dGlsLnRvRmFzdFByb3BlcnRpZXMoUHJvbWlzZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgdXRpbC50b0Zhc3RQcm9wZXJ0aWVzKFByb21pc2UucHJvdG90eXBlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZ1bmN0aW9uIGZpbGxUeXBlcyh2YWx1ZSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9yZWplY3Rpb25IYW5kbGVyMCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fcHJvZ3Jlc3NIYW5kbGVyMCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX3Byb21pc2UwID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9yZWNlaXZlcjAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fc2V0dGxlZFZhbHVlID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIC8vIENvbXBsZXRlIHNsYWNrIHRyYWNraW5nLCBvcHQgb3V0IG9mIGZpZWxkLXR5cGUgdHJhY2tpbmcgYW5kICAgICAgICAgICBcbiAgICAvLyBzdGFiaWxpemUgbWFwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKHthOiAxfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyh7YjogMn0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoe2M6IDN9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKDEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyhmdW5jdGlvbigpe30pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXModW5kZWZpbmVkKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKGZhbHNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyhuZXcgUHJvbWlzZShJTlRFUk5BTCkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBDYXB0dXJlZFRyYWNlLnNldEJvdW5kcyhhc3luYy5maXJzdExpbmVFcnJvciwgdXRpbC5sYXN0TGluZUVycm9yKTsgICAgICAgXG4gICAgcmV0dXJuIFByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG59O1xuXG59LHtcIi4vYW55LmpzXCI6MSxcIi4vYXN5bmMuanNcIjoyLFwiLi9iaW5kLmpzXCI6MyxcIi4vY2FsbF9nZXQuanNcIjo1LFwiLi9jYW5jZWwuanNcIjo2LFwiLi9jYXB0dXJlZF90cmFjZS5qc1wiOjcsXCIuL2NhdGNoX2ZpbHRlci5qc1wiOjgsXCIuL2NvbnRleHQuanNcIjo5LFwiLi9kZWJ1Z2dhYmlsaXR5LmpzXCI6MTAsXCIuL2RpcmVjdF9yZXNvbHZlLmpzXCI6MTEsXCIuL2VhY2guanNcIjoxMixcIi4vZXJyb3JzLmpzXCI6MTMsXCIuL2ZpbHRlci5qc1wiOjE1LFwiLi9maW5hbGx5LmpzXCI6MTYsXCIuL2dlbmVyYXRvcnMuanNcIjoxNyxcIi4vam9pbi5qc1wiOjE4LFwiLi9tYXAuanNcIjoxOSxcIi4vbWV0aG9kLmpzXCI6MjAsXCIuL25vZGVpZnkuanNcIjoyMSxcIi4vcHJvZ3Jlc3MuanNcIjoyMixcIi4vcHJvbWlzZV9hcnJheS5qc1wiOjI0LFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCI6MjUsXCIuL3Byb21pc2lmeS5qc1wiOjI2LFwiLi9wcm9wcy5qc1wiOjI3LFwiLi9yYWNlLmpzXCI6MjksXCIuL3JlZHVjZS5qc1wiOjMwLFwiLi9zZXR0bGUuanNcIjozMixcIi4vc29tZS5qc1wiOjMzLFwiLi9zeW5jaHJvbm91c19pbnNwZWN0aW9uLmpzXCI6MzQsXCIuL3RoZW5hYmxlcy5qc1wiOjM1LFwiLi90aW1lcnMuanNcIjozNixcIi4vdXNpbmcuanNcIjozNyxcIi4vdXRpbC5qc1wiOjM4fV0sMjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgIGFwaVJlamVjdGlvbikge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG5cbmZ1bmN0aW9uIHRvUmVzb2x1dGlvblZhbHVlKHZhbCkge1xuICAgIHN3aXRjaCh2YWwpIHtcbiAgICBjYXNlIC0yOiByZXR1cm4gW107XG4gICAgY2FzZSAtMzogcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICB2YXIgcGFyZW50O1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHBhcmVudCA9IHZhbHVlcztcbiAgICAgICAgcHJvbWlzZS5fcHJvcGFnYXRlRnJvbShwYXJlbnQsIDEgfCA0KTtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCA9IDA7XG4gICAgdGhpcy5faW5pdCh1bmRlZmluZWQsIC0yKTtcbn1cblByb21pc2VBcnJheS5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gaW5pdChfLCByZXNvbHZlVmFsdWVJZkVtcHR5KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRyeUNvbnZlcnRUb1Byb21pc2UodGhpcy5fdmFsdWVzLCB0aGlzLl9wcm9taXNlKTtcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuX3RhcmdldCgpO1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIGlmICh2YWx1ZXMuX2lzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5fdmFsdWUoKTtcbiAgICAgICAgICAgIGlmICghaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBQcm9taXNlLlR5cGVFcnJvcihcImV4cGVjdGluZyBhbiBhcnJheSwgYSBwcm9taXNlIG9yIGEgdGhlbmFibGVcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9zOE1NaGNcXHUwMDBhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19oYXJkUmVqZWN0X18oZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWVzLl9pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgdmFsdWVzLl90aGVuKFxuICAgICAgICAgICAgICAgIGluaXQsXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVqZWN0LFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHJlc29sdmVWYWx1ZUlmRW1wdHlcbiAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCh2YWx1ZXMuX3JlYXNvbigpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9yZWplY3QoYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGFuIGFycmF5LCBhIHByb21pc2Ugb3IgYSB0aGVuYWJsZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL3M4TU1oY1xcdTAwMGFcIikuX3JlYXNvbigpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChyZXNvbHZlVmFsdWVJZkVtcHR5ID09PSAtNSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUVtcHR5QXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodG9SZXNvbHV0aW9uVmFsdWUocmVzb2x2ZVZhbHVlSWZFbXB0eSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxlbiA9IHRoaXMuZ2V0QWN0dWFsTGVuZ3RoKHZhbHVlcy5sZW5ndGgpO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbjtcbiAgICB0aGlzLl92YWx1ZXMgPSB0aGlzLnNob3VsZENvcHlWYWx1ZXMoKSA/IG5ldyBBcnJheShsZW4pIDogdGhpcy5fdmFsdWVzO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBpc1Jlc29sdmVkID0gdGhpcy5faXNSZXNvbHZlZCgpO1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh2YWx1ZXNbaV0sIHByb21pc2UpO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID0gbWF5YmVQcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgICAgIGlmIChpc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9pZ25vcmVSZWplY3Rpb25zKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5faXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuX2lzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9taXNlRnVsZmlsbGVkKG1heWJlUHJvbWlzZS5fdmFsdWUoKSwgaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb21pc2VSZWplY3RlZChtYXliZVByb21pc2UuX3JlYXNvbigpLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZChtYXliZVByb21pc2UsIGkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faXNSZXNvbHZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzID09PSBudWxsO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IG51bGw7XG4gICAgdGhpcy5fcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9faGFyZFJlamVjdF9fID1cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX3JlamVjdENhbGxiYWNrKHJlYXNvbiwgZmFsc2UsIHRydWUpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVByb2dyZXNzZWQgPSBmdW5jdGlvbiAocHJvZ3Jlc3NWYWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl9wcm9taXNlLl9wcm9ncmVzcyh7XG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgdmFsdWU6IHByb2dyZXNzVmFsdWVcbiAgICB9KTtcbn07XG5cblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVqZWN0ZWQgPSBmdW5jdGlvbiAocmVhc29uLCBpbmRleCkge1xuICAgIHRoaXMuX3RvdGFsUmVzb2x2ZWQrKztcbiAgICB0aGlzLl9yZWplY3QocmVhc29uKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuc2hvdWxkQ29weVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID0gZnVuY3Rpb24gKGxlbikge1xuICAgIHJldHVybiBsZW47XG59O1xuXG5yZXR1cm4gUHJvbWlzZUFycmF5O1xufTtcblxufSx7XCIuL3V0aWwuanNcIjozOH1dLDI1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIG1heWJlV3JhcEFzRXJyb3IgPSB1dGlsLm1heWJlV3JhcEFzRXJyb3I7XG52YXIgZXJyb3JzID0gX2RlcmVxXyhcIi4vZXJyb3JzLmpzXCIpO1xudmFyIFRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG52YXIgT3BlcmF0aW9uYWxFcnJvciA9IGVycm9ycy5PcGVyYXRpb25hbEVycm9yO1xudmFyIGhhdmVHZXR0ZXJzID0gdXRpbC5oYXZlR2V0dGVycztcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczUuanNcIik7XG5cbmZ1bmN0aW9uIGlzVW50eXBlZEVycm9yKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvciAmJlxuICAgICAgICBlczUuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gRXJyb3IucHJvdG90eXBlO1xufVxuXG52YXIgckVycm9yS2V5ID0gL14oPzpuYW1lfG1lc3NhZ2V8c3RhY2t8Y2F1c2UpJC87XG5mdW5jdGlvbiB3cmFwQXNPcGVyYXRpb25hbEVycm9yKG9iaikge1xuICAgIHZhciByZXQ7XG4gICAgaWYgKGlzVW50eXBlZEVycm9yKG9iaikpIHtcbiAgICAgICAgcmV0ID0gbmV3IE9wZXJhdGlvbmFsRXJyb3Iob2JqKTtcbiAgICAgICAgcmV0Lm5hbWUgPSBvYmoubmFtZTtcbiAgICAgICAgcmV0Lm1lc3NhZ2UgPSBvYmoubWVzc2FnZTtcbiAgICAgICAgcmV0LnN0YWNrID0gb2JqLnN0YWNrO1xuICAgICAgICB2YXIga2V5cyA9IGVzNS5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIXJFcnJvcktleS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHV0aWwubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXJyLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvbWlzZSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVkID0gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihtYXliZVdyYXBBc0Vycm9yKGVycikpO1xuICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh3cmFwcGVkKTtcbiAgICAgICAgICAgIHByb21pc2UuX3JlamVjdCh3cmFwcGVkKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdmFyICRfbGVuID0gYXJndW1lbnRzLmxlbmd0aDt2YXIgYXJncyA9IG5ldyBBcnJheSgkX2xlbiAtIDEpOyBmb3IodmFyICRfaSA9IDE7ICRfaSA8ICRfbGVuOyArKyRfaSkge2FyZ3NbJF9pIC0gMV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKGFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICB9O1xufVxuXG5cbnZhciBQcm9taXNlUmVzb2x2ZXI7XG5pZiAoIWhhdmVHZXR0ZXJzKSB7XG4gICAgUHJvbWlzZVJlc29sdmVyID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5hc0NhbGxiYWNrID0gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5hc0NhbGxiYWNrO1xuICAgIH07XG59XG5lbHNlIHtcbiAgICBQcm9taXNlUmVzb2x2ZXIgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIH07XG59XG5pZiAoaGF2ZUdldHRlcnMpIHtcbiAgICB2YXIgcHJvcCA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlYmFja0ZvclByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KFByb21pc2VSZXNvbHZlci5wcm90b3R5cGUsIFwiYXNDYWxsYmFja1wiLCBwcm9wKTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkoUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZSwgXCJjYWxsYmFja1wiLCBwcm9wKTtcbn1cblxuUHJvbWlzZVJlc29sdmVyLl9ub2RlYmFja0ZvclByb21pc2UgPSBub2RlYmFja0ZvclByb21pc2U7XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBQcm9taXNlUmVzb2x2ZXJdXCI7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmUgPVxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5mdWxmaWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9zZGtYTDlcXHUwMDBhXCIpO1xuICAgIH1cbiAgICB0aGlzLnByb21pc2UuX3Jlc29sdmVDYWxsYmFjayh2YWx1ZSk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVJlc29sdmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBpbnZvY2F0aW9uLCByZXNvbHZlciByZXNvbHZlL3JlamVjdCBtdXN0IGJlIGNhbGxlZCB3aXRoaW4gYSByZXNvbHZlciBjb250ZXh0LiBDb25zaWRlciB1c2luZyB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciBpbnN0ZWFkLlxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL3Nka1hMOVxcdTAwMGFcIik7XG4gICAgfVxuICAgIHRoaXMucHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVhc29uKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVJlc29sdmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBpbnZvY2F0aW9uLCByZXNvbHZlciByZXNvbHZlL3JlamVjdCBtdXN0IGJlIGNhbGxlZCB3aXRoaW4gYSByZXNvbHZlciBjb250ZXh0LiBDb25zaWRlciB1c2luZyB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciBpbnN0ZWFkLlxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL3Nka1hMOVxcdTAwMGFcIik7XG4gICAgfVxuICAgIHRoaXMucHJvbWlzZS5fcHJvZ3Jlc3ModmFsdWUpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdGhpcy5wcm9taXNlLmNhbmNlbChlcnIpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVqZWN0KG5ldyBUaW1lb3V0RXJyb3IoXCJ0aW1lb3V0XCIpKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuaXNSZXNvbHZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlLmlzUmVzb2x2ZWQoKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnByb21pc2UudG9KU09OKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2VSZXNvbHZlcjtcblxufSx7XCIuL2Vycm9ycy5qc1wiOjEzLFwiLi9lczUuanNcIjoxNCxcIi4vdXRpbC5qc1wiOjM4fV0sMjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgVEhJUyA9IHt9O1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIG5vZGViYWNrRm9yUHJvbWlzZSA9IF9kZXJlcV8oXCIuL3Byb21pc2VfcmVzb2x2ZXIuanNcIilcbiAgICAuX25vZGViYWNrRm9yUHJvbWlzZTtcbnZhciB3aXRoQXBwZW5kZWQgPSB1dGlsLndpdGhBcHBlbmRlZDtcbnZhciBtYXliZVdyYXBBc0Vycm9yID0gdXRpbC5tYXliZVdyYXBBc0Vycm9yO1xudmFyIGNhbkV2YWx1YXRlID0gdXRpbC5jYW5FdmFsdWF0ZTtcbnZhciBUeXBlRXJyb3IgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIikuVHlwZUVycm9yO1xudmFyIGRlZmF1bHRTdWZmaXggPSBcIkFzeW5jXCI7XG52YXIgZGVmYXVsdFByb21pc2lmaWVkID0ge19faXNQcm9taXNpZmllZF9fOiB0cnVlfTtcbnZhciBub0NvcHlQcm9wcyA9IFtcbiAgICBcImFyaXR5XCIsICAgIFwibGVuZ3RoXCIsXG4gICAgXCJuYW1lXCIsXG4gICAgXCJhcmd1bWVudHNcIixcbiAgICBcImNhbGxlclwiLFxuICAgIFwiY2FsbGVlXCIsXG4gICAgXCJwcm90b3R5cGVcIixcbiAgICBcIl9faXNQcm9taXNpZmllZF9fXCJcbl07XG52YXIgbm9Db3B5UHJvcHNQYXR0ZXJuID0gbmV3IFJlZ0V4cChcIl4oPzpcIiArIG5vQ29weVByb3BzLmpvaW4oXCJ8XCIpICsgXCIpJFwiKTtcblxudmFyIGRlZmF1bHRGaWx0ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHV0aWwuaXNJZGVudGlmaWVyKG5hbWUpICYmXG4gICAgICAgIG5hbWUuY2hhckF0KDApICE9PSBcIl9cIiAmJlxuICAgICAgICBuYW1lICE9PSBcImNvbnN0cnVjdG9yXCI7XG59O1xuXG5mdW5jdGlvbiBwcm9wc0ZpbHRlcihrZXkpIHtcbiAgICByZXR1cm4gIW5vQ29weVByb3BzUGF0dGVybi50ZXN0KGtleSk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzaWZpZWQoZm4pIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4uX19pc1Byb21pc2lmaWVkX18gPT09IHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1Byb21pc2lmaWVkKG9iaiwga2V5LCBzdWZmaXgpIHtcbiAgICB2YXIgdmFsID0gdXRpbC5nZXREYXRhUHJvcGVydHlPckRlZmF1bHQob2JqLCBrZXkgKyBzdWZmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9taXNpZmllZCk7XG4gICAgcmV0dXJuIHZhbCA/IGlzUHJvbWlzaWZpZWQodmFsKSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gY2hlY2tWYWxpZChyZXQsIHN1ZmZpeCwgc3VmZml4UmVnZXhwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGtleSA9IHJldFtpXTtcbiAgICAgICAgaWYgKHN1ZmZpeFJlZ2V4cC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHZhciBrZXlXaXRob3V0QXN5bmNTdWZmaXggPSBrZXkucmVwbGFjZShzdWZmaXhSZWdleHAsIFwiXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXQubGVuZ3RoOyBqICs9IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0W2pdID09PSBrZXlXaXRob3V0QXN5bmNTdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwcm9taXNpZnkgYW4gQVBJIHRoYXQgaGFzIG5vcm1hbCBtZXRob2RzIHdpdGggJyVzJy1zdWZmaXhcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9pV3JaYndcXHUwMDBhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJXNcIiwgc3VmZml4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9taXNpZmlhYmxlTWV0aG9kcyhvYmosIHN1ZmZpeCwgc3VmZml4UmVnZXhwLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IHV0aWwuaW5oZXJpdGVkRGF0YUtleXMob2JqKTtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgdmFyIHBhc3Nlc0RlZmF1bHRGaWx0ZXIgPSBmaWx0ZXIgPT09IGRlZmF1bHRGaWx0ZXJcbiAgICAgICAgICAgID8gdHJ1ZSA6IGRlZmF1bHRGaWx0ZXIoa2V5LCB2YWx1ZSwgb2JqKTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAhaXNQcm9taXNpZmllZCh2YWx1ZSkgJiZcbiAgICAgICAgICAgICFoYXNQcm9taXNpZmllZChvYmosIGtleSwgc3VmZml4KSAmJlxuICAgICAgICAgICAgZmlsdGVyKGtleSwgdmFsdWUsIG9iaiwgcGFzc2VzRGVmYXVsdEZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrVmFsaWQocmV0LCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxudmFyIGVzY2FwZUlkZW50UmVnZXggPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbJF0pLywgXCJcXFxcJFwiKTtcbn07XG5cbnZhciBtYWtlTm9kZVByb21pc2lmaWVkRXZhbDtcbmlmICghdHJ1ZSkge1xudmFyIHN3aXRjaENhc2VBcmd1bWVudE9yZGVyID0gZnVuY3Rpb24obGlrZWx5QXJndW1lbnRDb3VudCkge1xuICAgIHZhciByZXQgPSBbbGlrZWx5QXJndW1lbnRDb3VudF07XG4gICAgdmFyIG1pbiA9IE1hdGgubWF4KDAsIGxpa2VseUFyZ3VtZW50Q291bnQgLSAxIC0gMyk7XG4gICAgZm9yKHZhciBpID0gbGlrZWx5QXJndW1lbnRDb3VudCAtIDE7IGkgPj0gbWluOyAtLWkpIHtcbiAgICAgICAgcmV0LnB1c2goaSk7XG4gICAgfVxuICAgIGZvcih2YXIgaSA9IGxpa2VseUFyZ3VtZW50Q291bnQgKyAxOyBpIDw9IDM7ICsraSkge1xuICAgICAgICByZXQucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbnZhciBhcmd1bWVudFNlcXVlbmNlID0gZnVuY3Rpb24oYXJndW1lbnRDb3VudCkge1xuICAgIHJldHVybiB1dGlsLmZpbGxlZFJhbmdlKGFyZ3VtZW50Q291bnQsIFwiX2FyZ1wiLCBcIlwiKTtcbn07XG5cbnZhciBwYXJhbWV0ZXJEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKHBhcmFtZXRlckNvdW50KSB7XG4gICAgcmV0dXJuIHV0aWwuZmlsbGVkUmFuZ2UoXG4gICAgICAgIE1hdGgubWF4KHBhcmFtZXRlckNvdW50LCAzKSwgXCJfYXJnXCIsIFwiXCIpO1xufTtcblxudmFyIHBhcmFtZXRlckNvdW50ID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oZm4ubGVuZ3RoLCAxMDIzICsgMSksIDApO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbm1ha2VOb2RlUHJvbWlzaWZpZWRFdmFsID1cbmZ1bmN0aW9uKGNhbGxiYWNrLCByZWNlaXZlciwgb3JpZ2luYWxOYW1lLCBmbikge1xuICAgIHZhciBuZXdQYXJhbWV0ZXJDb3VudCA9IE1hdGgubWF4KDAsIHBhcmFtZXRlckNvdW50KGZuKSAtIDEpO1xuICAgIHZhciBhcmd1bWVudE9yZGVyID0gc3dpdGNoQ2FzZUFyZ3VtZW50T3JkZXIobmV3UGFyYW1ldGVyQ291bnQpO1xuICAgIHZhciBzaG91bGRQcm94eVRoaXMgPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCIgfHwgcmVjZWl2ZXIgPT09IFRISVM7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhbGxGb3JBcmd1bWVudENvdW50KGNvdW50KSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRTZXF1ZW5jZShjb3VudCkuam9pbihcIiwgXCIpO1xuICAgICAgICB2YXIgY29tbWEgPSBjb3VudCA+IDAgPyBcIiwgXCIgOiBcIlwiO1xuICAgICAgICB2YXIgcmV0O1xuICAgICAgICBpZiAoc2hvdWxkUHJveHlUaGlzKSB7XG4gICAgICAgICAgICByZXQgPSBcInJldCA9IGNhbGxiYWNrLmNhbGwodGhpcywge3thcmdzfX0sIG5vZGViYWNrKTsgYnJlYWs7XFxuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQgPSByZWNlaXZlciA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBcInJldCA9IGNhbGxiYWNrKHt7YXJnc319LCBub2RlYmFjayk7IGJyZWFrO1xcblwiXG4gICAgICAgICAgICAgICAgOiBcInJldCA9IGNhbGxiYWNrLmNhbGwocmVjZWl2ZXIsIHt7YXJnc319LCBub2RlYmFjayk7IGJyZWFrO1xcblwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQucmVwbGFjZShcInt7YXJnc319XCIsIGFyZ3MpLnJlcGxhY2UoXCIsIFwiLCBjb21tYSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVBcmd1bWVudFN3aXRjaENhc2UoKSB7XG4gICAgICAgIHZhciByZXQgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50T3JkZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldCArPSBcImNhc2UgXCIgKyBhcmd1bWVudE9yZGVyW2ldICtcIjpcIiArXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChhcmd1bWVudE9yZGVyW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCArPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobGVuICsgMSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgYXJnc1tpXSA9IG5vZGViYWNrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgW0NvZGVGb3JDYWxsXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIi5yZXBsYWNlKFwiW0NvZGVGb3JDYWxsXVwiLCAoc2hvdWxkUHJveHlUaGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZXQgPSBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcXG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmV0ID0gY2FsbGJhY2suYXBwbHkocmVjZWl2ZXIsIGFyZ3MpO1xcblwiKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgdmFyIGdldEZ1bmN0aW9uQ29kZSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChcInRoaXMgIT0gbnVsbCA/IHRoaXNbJ1wiK2NhbGxiYWNrK1wiJ10gOiBmblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm5cIjtcblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJQcm9taXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlY2VpdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpdGhBcHBlbmRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXliZVdyYXBBc0Vycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vZGViYWNrRm9yUHJvbWlzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnlDYXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvck9ialwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RFbnVtZXJhYmxlUHJvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJTlRFUk5BTFwiLFwiJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB2YXIgcmV0ID0gZnVuY3Rpb24gKFBhcmFtZXRlcnMpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIG5vZGViYWNrID0gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpOyAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIHJldDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdHJ5Q2F0Y2goW0dldEZ1bmN0aW9uQ29kZV0pOyAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgc3dpdGNoKGxlbikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIFtDb2RlRm9yU3dpdGNoQ2FzZV0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKG1heWJlV3JhcEFzRXJyb3IocmV0LmUpLCB0cnVlLCB0cnVlKTtcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB9OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcChyZXQsICdfX2lzUHJvbWlzaWZpZWRfXycsIHRydWUpOyAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICByZXR1cm4gcmV0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIlxuICAgICAgICAucmVwbGFjZShcIlBhcmFtZXRlcnNcIiwgcGFyYW1ldGVyRGVjbGFyYXRpb24obmV3UGFyYW1ldGVyQ291bnQpKVxuICAgICAgICAucmVwbGFjZShcIltDb2RlRm9yU3dpdGNoQ2FzZV1cIiwgZ2VuZXJhdGVBcmd1bWVudFN3aXRjaENhc2UoKSlcbiAgICAgICAgLnJlcGxhY2UoXCJbR2V0RnVuY3Rpb25Db2RlXVwiLCBnZXRGdW5jdGlvbkNvZGUpKShcbiAgICAgICAgICAgIFByb21pc2UsXG4gICAgICAgICAgICBmbixcbiAgICAgICAgICAgIHJlY2VpdmVyLFxuICAgICAgICAgICAgd2l0aEFwcGVuZGVkLFxuICAgICAgICAgICAgbWF5YmVXcmFwQXNFcnJvcixcbiAgICAgICAgICAgIG5vZGViYWNrRm9yUHJvbWlzZSxcbiAgICAgICAgICAgIHV0aWwudHJ5Q2F0Y2gsXG4gICAgICAgICAgICB1dGlsLmVycm9yT2JqLFxuICAgICAgICAgICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcCxcbiAgICAgICAgICAgIElOVEVSTkFMXG4gICAgICAgICk7XG59O1xufVxuXG5mdW5jdGlvbiBtYWtlTm9kZVByb21pc2lmaWVkQ2xvc3VyZShjYWxsYmFjaywgcmVjZWl2ZXIsIF8sIGZuKSB7XG4gICAgdmFyIGRlZmF1bHRUaGlzID0gKGZ1bmN0aW9uKCkge3JldHVybiB0aGlzO30pKCk7XG4gICAgdmFyIG1ldGhvZCA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb21pc2lmaWVkKCkge1xuICAgICAgICB2YXIgX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgICAgIGlmIChyZWNlaXZlciA9PT0gVEhJUykgX3JlY2VpdmVyID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgICAgIHZhciBjYiA9IHR5cGVvZiBtZXRob2QgPT09IFwic3RyaW5nXCIgJiYgdGhpcyAhPT0gZGVmYXVsdFRoaXNcbiAgICAgICAgICAgID8gdGhpc1ttZXRob2RdIDogY2FsbGJhY2s7XG4gICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNiLmFwcGx5KF9yZWNlaXZlciwgd2l0aEFwcGVuZGVkKGFyZ3VtZW50cywgZm4pKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhtYXliZVdyYXBBc0Vycm9yKGUpLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChwcm9taXNpZmllZCwgXCJfX2lzUHJvbWlzaWZpZWRfX1wiLCB0cnVlKTtcbiAgICByZXR1cm4gcHJvbWlzaWZpZWQ7XG59XG5cbnZhciBtYWtlTm9kZVByb21pc2lmaWVkID0gY2FuRXZhbHVhdGVcbiAgICA/IG1ha2VOb2RlUHJvbWlzaWZpZWRFdmFsXG4gICAgOiBtYWtlTm9kZVByb21pc2lmaWVkQ2xvc3VyZTtcblxuZnVuY3Rpb24gcHJvbWlzaWZ5QWxsKG9iaiwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyKSB7XG4gICAgdmFyIHN1ZmZpeFJlZ2V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlSWRlbnRSZWdleChzdWZmaXgpICsgXCIkXCIpO1xuICAgIHZhciBtZXRob2RzID1cbiAgICAgICAgcHJvbWlzaWZpYWJsZU1ldGhvZHMob2JqLCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCwgZmlsdGVyKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSs9IDIpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGhvZHNbaV07XG4gICAgICAgIHZhciBmbiA9IG1ldGhvZHNbaSsxXTtcbiAgICAgICAgdmFyIHByb21pc2lmaWVkS2V5ID0ga2V5ICsgc3VmZml4O1xuICAgICAgICBvYmpbcHJvbWlzaWZpZWRLZXldID0gcHJvbWlzaWZpZXIgPT09IG1ha2VOb2RlUHJvbWlzaWZpZWRcbiAgICAgICAgICAgICAgICA/IG1ha2VOb2RlUHJvbWlzaWZpZWQoa2V5LCBUSElTLCBrZXksIGZuLCBzdWZmaXgpXG4gICAgICAgICAgICAgICAgOiBwcm9taXNpZmllcihmbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTm9kZVByb21pc2lmaWVkKGtleSwgVEhJUywga2V5LCBmbiwgc3VmZml4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgdXRpbC50b0Zhc3RQcm9wZXJ0aWVzKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZ5KGNhbGxiYWNrLCByZWNlaXZlcikge1xuICAgIHJldHVybiBtYWtlTm9kZVByb21pc2lmaWVkKGNhbGxiYWNrLCByZWNlaXZlciwgdW5kZWZpbmVkLCBjYWxsYmFjayk7XG59XG5cblByb21pc2UucHJvbWlzaWZ5ID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlcikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzaWZpZWQoZm4pKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9XG4gICAgdmFyIHJldCA9IHByb21pc2lmeShmbiwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBUSElTIDogcmVjZWl2ZXIpO1xuICAgIHV0aWwuY29weURlc2NyaXB0b3JzKGZuLCByZXQsIHByb3BzRmlsdGVyKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm9taXNpZnlBbGwgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGUgdGFyZ2V0IG9mIHByb21pc2lmeUFsbCBtdXN0IGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOUlUbFYwXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IE9iamVjdChvcHRpb25zKTtcbiAgICB2YXIgc3VmZml4ID0gb3B0aW9ucy5zdWZmaXg7XG4gICAgaWYgKHR5cGVvZiBzdWZmaXggIT09IFwic3RyaW5nXCIpIHN1ZmZpeCA9IGRlZmF1bHRTdWZmaXg7XG4gICAgdmFyIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSBcImZ1bmN0aW9uXCIpIGZpbHRlciA9IGRlZmF1bHRGaWx0ZXI7XG4gICAgdmFyIHByb21pc2lmaWVyID0gb3B0aW9ucy5wcm9taXNpZmllcjtcbiAgICBpZiAodHlwZW9mIHByb21pc2lmaWVyICE9PSBcImZ1bmN0aW9uXCIpIHByb21pc2lmaWVyID0gbWFrZU5vZGVQcm9taXNpZmllZDtcblxuICAgIGlmICghdXRpbC5pc0lkZW50aWZpZXIoc3VmZml4KSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInN1ZmZpeCBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzhGWm81VlxcdTAwMGFcIik7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKHRhcmdldCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXlzW2ldXTtcbiAgICAgICAgaWYgKGtleXNbaV0gIT09IFwiY29uc3RydWN0b3JcIiAmJlxuICAgICAgICAgICAgdXRpbC5pc0NsYXNzKHZhbHVlKSkge1xuICAgICAgICAgICAgcHJvbWlzaWZ5QWxsKHZhbHVlLnByb3RvdHlwZSwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyKTtcbiAgICAgICAgICAgIHByb21pc2lmeUFsbCh2YWx1ZSwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNpZnlBbGwodGFyZ2V0LCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xufTtcbn07XG5cblxufSx7XCIuL2Vycm9yc1wiOjEzLFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCI6MjUsXCIuL3V0aWwuanNcIjozOH1dLDI3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihcbiAgICBQcm9taXNlLCBQcm9taXNlQXJyYXksIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbikge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczUuanNcIik7XG5cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkob2JqKSB7XG4gICAgdmFyIGtleXMgPSBlczUua2V5cyhvYmopO1xuICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXldO1xuICAgICAgICB2YWx1ZXNbaSArIGxlbl0gPSBrZXk7XG4gICAgfVxuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG59XG51dGlsLmluaGVyaXRzKFByb3BlcnRpZXNQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2luaXQkKHVuZGVmaW5lZCwgLTMpIDtcbn07XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgdmFyIHZhbCA9IHt9O1xuICAgICAgICB2YXIga2V5T2Zmc2V0ID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoKCk7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFsW3RoaXMuX3ZhbHVlc1tpICsga2V5T2Zmc2V0XV0gPSB0aGlzLl92YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh2YWwpO1xuICAgIH1cbn07XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUHJvZ3Jlc3NlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl9wcm9taXNlLl9wcm9ncmVzcyh7XG4gICAgICAgIGtleTogdGhpcy5fdmFsdWVzW2luZGV4ICsgdGhpcy5sZW5ndGgoKV0sXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuc2hvdWxkQ29weVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5nZXRBY3R1YWxMZW5ndGggPSBmdW5jdGlvbiAobGVuKSB7XG4gICAgcmV0dXJuIGxlbiA+PiAxO1xufTtcblxuZnVuY3Rpb24gcHJvcHMocHJvbWlzZXMpIHtcbiAgICB2YXIgcmV0O1xuICAgIHZhciBjYXN0VmFsdWUgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHByb21pc2VzKTtcblxuICAgIGlmICghaXNPYmplY3QoY2FzdFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiY2Fubm90IGF3YWl0IHByb3BlcnRpZXMgb2YgYSBub24tb2JqZWN0XFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvT3NGS0M4XFx1MDAwYVwiKTtcbiAgICB9IGVsc2UgaWYgKGNhc3RWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0ID0gY2FzdFZhbHVlLl90aGVuKFxuICAgICAgICAgICAgUHJvbWlzZS5wcm9wcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBuZXcgUHJvcGVydGllc1Byb21pc2VBcnJheShjYXN0VmFsdWUpLnByb21pc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20oY2FzdFZhbHVlLCA0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb3BzKHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm9wcyA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIHJldHVybiBwcm9wcyhwcm9taXNlcyk7XG59O1xufTtcblxufSx7XCIuL2VzNS5qc1wiOjE0LFwiLi91dGlsLmpzXCI6Mzh9XSwyODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGFycmF5TW92ZShzcmMsIHNyY0luZGV4LCBkc3QsIGRzdEluZGV4LCBsZW4pIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxlbjsgKytqKSB7XG4gICAgICAgIGRzdFtqICsgZHN0SW5kZXhdID0gc3JjW2ogKyBzcmNJbmRleF07XG4gICAgICAgIHNyY1tqICsgc3JjSW5kZXhdID0gdm9pZCAwO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUXVldWUoY2FwYWNpdHkpIHtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJvbnQgPSAwO1xufVxuXG5RdWV1ZS5wcm90b3R5cGUuX3dpbGxCZU92ZXJDYXBhY2l0eSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5IDwgc2l6ZTtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5fcHVzaE9uZSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICB0aGlzLl9jaGVja0NhcGFjaXR5KGxlbmd0aCArIDEpO1xuICAgIHZhciBpID0gKHRoaXMuX2Zyb250ICsgbGVuZ3RoKSAmICh0aGlzLl9jYXBhY2l0eSAtIDEpO1xuICAgIHRoaXNbaV0gPSBhcmc7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoICsgMTtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5fdW5zaGlmdE9uZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGNhcGFjaXR5ID0gdGhpcy5fY2FwYWNpdHk7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eSh0aGlzLmxlbmd0aCgpICsgMSk7XG4gICAgdmFyIGZyb250ID0gdGhpcy5fZnJvbnQ7XG4gICAgdmFyIGkgPSAoKCgoIGZyb250IC0gMSApICZcbiAgICAgICAgICAgICAgICAgICAgKCBjYXBhY2l0eSAtIDEpICkgXiBjYXBhY2l0eSApIC0gY2FwYWNpdHkgKTtcbiAgICB0aGlzW2ldID0gdmFsdWU7XG4gICAgdGhpcy5fZnJvbnQgPSBpO1xuICAgIHRoaXMuX2xlbmd0aCA9IHRoaXMubGVuZ3RoKCkgKyAxO1xufTtcblxuUXVldWUucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHRoaXMuX3Vuc2hpZnRPbmUoYXJnKTtcbiAgICB0aGlzLl91bnNoaWZ0T25lKHJlY2VpdmVyKTtcbiAgICB0aGlzLl91bnNoaWZ0T25lKGZuKTtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCkgKyAzO1xuICAgIGlmICh0aGlzLl93aWxsQmVPdmVyQ2FwYWNpdHkobGVuZ3RoKSkge1xuICAgICAgICB0aGlzLl9wdXNoT25lKGZuKTtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShyZWNlaXZlcik7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUoYXJnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaiA9IHRoaXMuX2Zyb250ICsgbGVuZ3RoIC0gMztcbiAgICB0aGlzLl9jaGVja0NhcGFjaXR5KGxlbmd0aCk7XG4gICAgdmFyIHdyYXBNYXNrID0gdGhpcy5fY2FwYWNpdHkgLSAxO1xuICAgIHRoaXNbKGogKyAwKSAmIHdyYXBNYXNrXSA9IGZuO1xuICAgIHRoaXNbKGogKyAxKSAmIHdyYXBNYXNrXSA9IHJlY2VpdmVyO1xuICAgIHRoaXNbKGogKyAyKSAmIHdyYXBNYXNrXSA9IGFyZztcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZyb250ID0gdGhpcy5fZnJvbnQsXG4gICAgICAgIHJldCA9IHRoaXNbZnJvbnRdO1xuXG4gICAgdGhpc1tmcm9udF0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZnJvbnQgPSAoZnJvbnQgKyAxKSAmICh0aGlzLl9jYXBhY2l0eSAtIDEpO1xuICAgIHRoaXMuX2xlbmd0aC0tO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX2NoZWNrQ2FwYWNpdHkgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eSA8IHNpemUpIHtcbiAgICAgICAgdGhpcy5fcmVzaXplVG8odGhpcy5fY2FwYWNpdHkgPDwgMSk7XG4gICAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLl9yZXNpemVUbyA9IGZ1bmN0aW9uIChjYXBhY2l0eSkge1xuICAgIHZhciBvbGRDYXBhY2l0eSA9IHRoaXMuX2NhcGFjaXR5O1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgdmFyIGZyb250ID0gdGhpcy5fZnJvbnQ7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX2xlbmd0aDtcbiAgICB2YXIgbW92ZUl0ZW1zQ291bnQgPSAoZnJvbnQgKyBsZW5ndGgpICYgKG9sZENhcGFjaXR5IC0gMSk7XG4gICAgYXJyYXlNb3ZlKHRoaXMsIDAsIHRoaXMsIG9sZENhcGFjaXR5LCBtb3ZlSXRlbXNDb3VudCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuXG59LHt9XSwyOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oXG4gICAgUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbikge1xudmFyIGlzQXJyYXkgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpLmlzQXJyYXk7XG5cbnZhciByYWNlTGF0ZXIgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHJhY2UoYXJyYXksIHByb21pc2UpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmFjZShwcm9taXNlcywgcGFyZW50KSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocHJvbWlzZXMpO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHJhY2VMYXRlcihtYXliZVByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoIWlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvczhNTWhjXFx1MDAwYVwiKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20ocGFyZW50LCA0IHwgMSk7XG4gICAgfVxuICAgIHZhciBmdWxmaWxsID0gcmV0Ll9mdWxmaWxsO1xuICAgIHZhciByZWplY3QgPSByZXQuX3JlamVjdDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcHJvbWlzZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIHZhbCA9IHByb21pc2VzW2ldO1xuXG4gICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCAmJiAhKGkgaW4gcHJvbWlzZXMpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByb21pc2UuY2FzdCh2YWwpLl90aGVuKGZ1bGZpbGwsIHJlamVjdCwgdW5kZWZpbmVkLCByZXQsIG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gcmFjZShwcm9taXNlcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJhY2UodGhpcywgdW5kZWZpbmVkKTtcbn07XG5cbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSwzMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZUFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlSZWplY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnRUb1Byb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIElOVEVSTkFMKSB7XG52YXIgYXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luYy5qc1wiKTtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgYWNjdW0sIF9lYWNoKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQocHJvbWlzZXMpO1xuICAgIHRoaXMuX3Byb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdGhpcy5fcHJlc2VydmVkVmFsdWVzID0gX2VhY2ggPT09IElOVEVSTkFMID8gW10gOiBudWxsO1xuICAgIHRoaXMuX3plcm90aElzQWNjdW0gPSAoYWNjdW0gPT09IHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fZ290QWNjdW0gPSBmYWxzZTtcbiAgICB0aGlzLl9yZWR1Y2luZ0luZGV4ID0gKHRoaXMuX3plcm90aElzQWNjdW0gPyAxIDogMCk7XG4gICAgdGhpcy5fdmFsdWVzUGhhc2UgPSB1bmRlZmluZWQ7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UoYWNjdW0sIHRoaXMuX3Byb21pc2UpO1xuICAgIHZhciByZWplY3RlZCA9IGZhbHNlO1xuICAgIHZhciBpc1Byb21pc2UgPSBtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlO1xuICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgbWF5YmVQcm9taXNlID0gbWF5YmVQcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5faXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fcHJveHlQcm9taXNlQXJyYXkodGhpcywgLTEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5faXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgYWNjdW0gPSBtYXliZVByb21pc2UuX3ZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLl9nb3RBY2N1bSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLl9yZWFzb24oKSk7XG4gICAgICAgICAgICByZWplY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEoaXNQcm9taXNlIHx8IHRoaXMuX3plcm90aElzQWNjdW0pKSB0aGlzLl9nb3RBY2N1bSA9IHRydWU7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBmbjtcbiAgICB0aGlzLl9hY2N1bSA9IGFjY3VtO1xuICAgIGlmICghcmVqZWN0ZWQpIGFzeW5jLmludm9rZShpbml0LCB0aGlzLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC01KTtcbn1cbnV0aWwuaW5oZXJpdHMoUmVkdWN0aW9uUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge307XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9nb3RBY2N1bSB8fCB0aGlzLl96ZXJvdGhJc0FjY3VtKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fcHJlc2VydmVkVmFsdWVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdIDogdGhpcy5fYWNjdW0pO1xuICAgIH1cbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdmFyIHByZXNlcnZlZFZhbHVlcyA9IHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbiAgICB2YXIgaXNFYWNoID0gcHJlc2VydmVkVmFsdWVzICE9PSBudWxsO1xuICAgIHZhciBnb3RBY2N1bSA9IHRoaXMuX2dvdEFjY3VtO1xuICAgIHZhciB2YWx1ZXNQaGFzZSA9IHRoaXMuX3ZhbHVlc1BoYXNlO1xuICAgIHZhciB2YWx1ZXNQaGFzZUluZGV4O1xuICAgIGlmICghdmFsdWVzUGhhc2UpIHtcbiAgICAgICAgdmFsdWVzUGhhc2UgPSB0aGlzLl92YWx1ZXNQaGFzZSA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICBmb3IgKHZhbHVlc1BoYXNlSW5kZXg9MDsgdmFsdWVzUGhhc2VJbmRleDxsZW5ndGg7ICsrdmFsdWVzUGhhc2VJbmRleCkge1xuICAgICAgICAgICAgdmFsdWVzUGhhc2VbdmFsdWVzUGhhc2VJbmRleF0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhbHVlc1BoYXNlSW5kZXggPSB2YWx1ZXNQaGFzZVtpbmRleF07XG5cbiAgICBpZiAoaW5kZXggPT09IDAgJiYgdGhpcy5femVyb3RoSXNBY2N1bSkge1xuICAgICAgICB0aGlzLl9hY2N1bSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9nb3RBY2N1bSA9IGdvdEFjY3VtID0gdHJ1ZTtcbiAgICAgICAgdmFsdWVzUGhhc2VbaW5kZXhdID0gKCh2YWx1ZXNQaGFzZUluZGV4ID09PSAwKVxuICAgICAgICAgICAgPyAxIDogMik7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZ290QWNjdW0gPSBnb3RBY2N1bSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbHVlc1BoYXNlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHZhbHVlc1BoYXNlW2luZGV4XSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNQaGFzZVtpbmRleF0gPSAyO1xuICAgICAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWdvdEFjY3VtKSByZXR1cm47XG5cbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9wcm9taXNlLl9ib3VuZFRvO1xuICAgIHZhciByZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy5fcmVkdWNpbmdJbmRleDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhbHVlc1BoYXNlSW5kZXggPSB2YWx1ZXNQaGFzZVtpXTtcbiAgICAgICAgaWYgKHZhbHVlc1BoYXNlSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZXNQaGFzZUluZGV4ICE9PSAxKSByZXR1cm47XG4gICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICBpZiAoaXNFYWNoKSB7XG4gICAgICAgICAgICBwcmVzZXJ2ZWRWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICByZXQgPSB0cnlDYXRjaChjYWxsYmFjaykuY2FsbChyZWNlaXZlciwgdmFsdWUsIGksIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXQgPSB0cnlDYXRjaChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAuY2FsbChyZWNlaXZlciwgdGhpcy5fYWNjdW0sIHZhbHVlLCBpLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcblxuICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikgcmV0dXJuIHRoaXMuX3JlamVjdChyZXQuZSk7XG5cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmV0LCB0aGlzLl9wcm9taXNlKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlLl9pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1BoYXNlW2ldID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF5YmVQcm9taXNlLl9pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLl92YWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KG1heWJlUHJvbWlzZS5fcmVhc29uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVkdWNpbmdJbmRleCA9IGkgKyAxO1xuICAgICAgICB0aGlzLl9hY2N1bSA9IHJldDtcbiAgICB9XG5cbiAgICB0aGlzLl9yZXNvbHZlKGlzRWFjaCA/IHByZXNlcnZlZFZhbHVlcyA6IHRoaXMuX2FjY3VtKTtcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC85MTZsSkpcXHUwMDBhXCIpO1xuICAgIHZhciBhcnJheSA9IG5ldyBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKTtcbiAgICByZXR1cm4gYXJyYXkucHJvbWlzZSgpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoZm4sIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiByZWR1Y2UodGhpcywgZm4sIGluaXRpYWxWYWx1ZSwgbnVsbCk7XG59O1xuXG5Qcm9taXNlLnJlZHVjZSA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICByZXR1cm4gcmVkdWNlKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCk7XG59O1xufTtcblxufSx7XCIuL2FzeW5jLmpzXCI6MixcIi4vdXRpbC5qc1wiOjM4fV0sMzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc2NoZWR1bGU7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgbm9Bc3luY1NjaGVkdWxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFzeW5jIHNjaGVkdWxlciBhdmFpbGFibGVcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9tM09UWGtcXHUwMDBhXCIpO1xufTtcbmlmICh1dGlsLmlzTm9kZSAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBHbG9iYWxTZXRJbW1lZGlhdGUgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBQcm9jZXNzTmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuICAgIHNjaGVkdWxlID0gdXRpbC5pc1JlY2VudE5vZGVcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGZuKSB7IEdsb2JhbFNldEltbWVkaWF0ZS5jYWxsKGdsb2JhbCwgZm4pOyB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbihmbikgeyBQcm9jZXNzTmV4dFRpY2suY2FsbChwcm9jZXNzLCBmbik7IH07XG59IGVsc2UgaWYgKCh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIikgJiZcbiAgICAgICAgICAhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IgJiZcbiAgICAgICAgICAgIHdpbmRvdy5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICBzY2hlZHVsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbik7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZGl2LCB7YXR0cmlidXRlczogdHJ1ZX0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7IGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpOyB9O1xuICAgIH07XG4gICAgc2NoZWR1bGUuaXNTdGF0aWMgPSB0cnVlO1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHNjaGVkdWxlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59IGVsc2Uge1xuICAgIHNjaGVkdWxlID0gbm9Bc3luY1NjaGVkdWxlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gc2NoZWR1bGU7XG5cbn0se1wiLi91dGlsXCI6Mzh9XSwzMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbiAgICBmdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXkpIHtcbnZhciBQcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb247XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG5cbmZ1bmN0aW9uIFNldHRsZWRQcm9taXNlQXJyYXkodmFsdWVzKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQodmFsdWVzKTtcbn1cbnV0aWwuaW5oZXJpdHMoU2V0dGxlZFByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZXNvbHZlZCA9IGZ1bmN0aW9uIChpbmRleCwgaW5zcGVjdGlvbikge1xuICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSBpbnNwZWN0aW9uO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAyNjg0MzU0NTY7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIHJldCk7XG59O1xuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24sIGluZGV4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAxMzQyMTc3Mjg7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSByZWFzb247XG4gICAgdGhpcy5fcHJvbWlzZVJlc29sdmVkKGluZGV4LCByZXQpO1xufTtcblxuUHJvbWlzZS5zZXR0bGUgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gbmV3IFNldHRsZWRQcm9taXNlQXJyYXkocHJvbWlzZXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNldHRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFNldHRsZWRQcm9taXNlQXJyYXkodGhpcykucHJvbWlzZSgpO1xufTtcbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSwzMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgUmFuZ2VFcnJvciA9IF9kZXJlcV8oXCIuL2Vycm9ycy5qc1wiKS5SYW5nZUVycm9yO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzLmpzXCIpLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG5cblxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xuICAgIHRoaXMuX2hvd01hbnkgPSAwO1xuICAgIHRoaXMuX3Vud3JhcCA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFNvbWVQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG93TWFueSA9PT0gMCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC01KTtcbiAgICB2YXIgaXNBcnJheVJlc29sdmVkID0gaXNBcnJheSh0aGlzLl92YWx1ZXMpO1xuICAgIGlmICghdGhpcy5faXNSZXNvbHZlZCgpICYmXG4gICAgICAgIGlzQXJyYXlSZXNvbHZlZCAmJlxuICAgICAgICB0aGlzLl9ob3dNYW55ID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHRoaXMuX2dldFJhbmdlRXJyb3IodGhpcy5sZW5ndGgoKSkpO1xuICAgIH1cbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2luaXQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldFVud3JhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91bndyYXAgPSB0cnVlO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuaG93TWFueSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faG93TWFueTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldEhvd01hbnkgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICB0aGlzLl9ob3dNYW55ID0gY291bnQ7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX2FkZEZ1bGZpbGxlZCh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Z1bGZpbGxlZCgpID09PSB0aGlzLmhvd01hbnkoKSkge1xuICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gdGhpcy5ob3dNYW55KCk7XG4gICAgICAgIGlmICh0aGlzLmhvd01hbnkoKSA9PT0gMSAmJiB0aGlzLl91bndyYXApIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVqZWN0ZWQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdGhpcy5fYWRkUmVqZWN0ZWQocmVhc29uKTtcbiAgICBpZiAodGhpcy5ob3dNYW55KCkgPiB0aGlzLl9jYW5Qb3NzaWJseUZ1bGZpbGwoKSkge1xuICAgICAgICB2YXIgZSA9IG5ldyBBZ2dyZWdhdGVFcnJvcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGgoKTsgaSA8IHRoaXMuX3ZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgZS5wdXNoKHRoaXMuX3ZhbHVlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVqZWN0KGUpO1xuICAgIH1cbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9mdWxmaWxsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUmVzb2x2ZWQ7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVqZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5sZW5ndGggLSB0aGlzLmxlbmd0aCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZFJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHJlYXNvbik7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fYWRkRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzW3RoaXMuX3RvdGFsUmVzb2x2ZWQrK10gPSB2YWx1ZTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9jYW5Qb3NzaWJseUZ1bGZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoKCkgLSB0aGlzLl9yZWplY3RlZCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2dldFJhbmdlRXJyb3IgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICB2YXIgbWVzc2FnZSA9IFwiSW5wdXQgYXJyYXkgbXVzdCBjb250YWluIGF0IGxlYXN0IFwiICtcbiAgICAgICAgICAgIHRoaXMuX2hvd01hbnkgKyBcIiBpdGVtcyBidXQgY29udGFpbnMgb25seSBcIiArIGNvdW50ICsgXCIgaXRlbXNcIjtcbiAgICByZXR1cm4gbmV3IFJhbmdlRXJyb3IobWVzc2FnZSk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZUVtcHR5QXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcmVqZWN0KHRoaXMuX2dldFJhbmdlRXJyb3IoMCkpO1xufTtcblxuZnVuY3Rpb24gc29tZShwcm9taXNlcywgaG93TWFueSkge1xuICAgIGlmICgoaG93TWFueSB8IDApICE9PSBob3dNYW55IHx8IGhvd01hbnkgPCAwKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBwb3NpdGl2ZSBpbnRlZ2VyXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvMXdBbUh4XFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgcmV0LnNldEhvd01hbnkoaG93TWFueSk7XG4gICAgcmV0LmluaXQoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuUHJvbWlzZS5zb21lID0gZnVuY3Rpb24gKHByb21pc2VzLCBob3dNYW55KSB7XG4gICAgcmV0dXJuIHNvbWUocHJvbWlzZXMsIGhvd01hbnkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuc29tZSA9IGZ1bmN0aW9uIChob3dNYW55KSB7XG4gICAgcmV0dXJuIHNvbWUodGhpcywgaG93TWFueSk7XG59O1xuXG5Qcm9taXNlLl9Tb21lUHJvbWlzZUFycmF5ID0gU29tZVByb21pc2VBcnJheTtcbn07XG5cbn0se1wiLi9lcnJvcnMuanNcIjoxMyxcIi4vdXRpbC5qc1wiOjM4fV0sMzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbmZ1bmN0aW9uIFByb21pc2VJbnNwZWN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAocHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSBwcm9taXNlLl9iaXRGaWVsZDtcbiAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gcHJvbWlzZS5fc2V0dGxlZFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSAwO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgb2YgYSBub24tZnVsZmlsbGVkIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9oYzFETGpcXHUwMDBhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmVycm9yID1cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2Fubm90IGdldCByZWplY3Rpb24gcmVhc29uIG9mIGEgbm9uLXJlamVjdGVkIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9oUHVpd0JcXHUwMDBhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzRnVsZmlsbGVkID1cblByb21pc2UucHJvdG90eXBlLl9pc0Z1bGZpbGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjY4NDM1NDU2KSA+IDA7XG59O1xuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNSZWplY3RlZCA9XG5Qcm9taXNlLnByb3RvdHlwZS5faXNSZWplY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTM0MjE3NzI4KSA+IDA7XG59O1xuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNQZW5kaW5nID1cblByb21pc2UucHJvdG90eXBlLl9pc1BlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDQwMjY1MzE4NCkgPT09IDA7XG59O1xuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNSZXNvbHZlZCA9XG5Qcm9taXNlLnByb3RvdHlwZS5faXNSZXNvbHZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDAyNjUzMTg0KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0KCkuX2lzUGVuZGluZygpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXQoKS5faXNSZWplY3RlZCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0KCkuX2lzRnVsZmlsbGVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1Jlc29sdmVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldCgpLl9pc1Jlc29sdmVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgaWYgKCF0YXJnZXQuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2Fubm90IGdldCBmdWxmaWxsbWVudCB2YWx1ZSBvZiBhIG5vbi1mdWxmaWxsZWQgcHJvbWlzZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL2hjMURMalxcdTAwMGFcIik7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXQoKTtcbiAgICBpZiAoIXRhcmdldC5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgcmVqZWN0aW9uIHJlYXNvbiBvZiBhIG5vbi1yZWplY3RlZCBwcm9taXNlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvaFB1aXdCXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdGFyZ2V0Ll91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgcmV0dXJuIHRhcmdldC5fc2V0dGxlZFZhbHVlO1xufTtcblxuXG5Qcm9taXNlLlByb21pc2VJbnNwZWN0aW9uID0gUHJvbWlzZUluc3BlY3Rpb247XG59O1xuXG59LHt9XSwzNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgaXNPYmplY3QgPSB1dGlsLmlzT2JqZWN0O1xuXG5mdW5jdGlvbiB0cnlDb252ZXJ0VG9Qcm9taXNlKG9iaiwgY29udGV4dCkge1xuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQW55Qmx1ZWJpcmRQcm9taXNlKG9iaikpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgICAgICBvYmouX3RoZW4oXG4gICAgICAgICAgICAgICAgcmV0Ll9mdWxmaWxsVW5jaGVja2VkLFxuICAgICAgICAgICAgICAgIHJldC5fcmVqZWN0VW5jaGVja2VkQ2hlY2tFcnJvcixcbiAgICAgICAgICAgICAgICByZXQuX3Byb2dyZXNzVW5jaGVja2VkLFxuICAgICAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGhlbiA9IHV0aWwudHJ5Q2F0Y2goZ2V0VGhlbikob2JqKTtcbiAgICAgICAgaWYgKHRoZW4gPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkgY29udGV4dC5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgICAgIHZhciByZXQgPSBQcm9taXNlLnJlamVjdCh0aGVuLmUpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGRvVGhlbmFibGUob2JqLCB0aGVuLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBnZXRUaGVuKG9iaikge1xuICAgIHJldHVybiBvYmoudGhlbjtcbn1cblxudmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGlzQW55Qmx1ZWJpcmRQcm9taXNlKG9iaikge1xuICAgIHJldHVybiBoYXNQcm9wLmNhbGwob2JqLCBcIl9wcm9taXNlMFwiKTtcbn1cblxuZnVuY3Rpb24gZG9UaGVuYWJsZSh4LCB0aGVuLCBjb250ZXh0KSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHJldCA9IHByb21pc2U7XG4gICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3B1c2hDb250ZXh0KCk7XG4gICAgcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICBpZiAoY29udGV4dCkgY29udGV4dC5fcG9wQ29udGV4dCgpO1xuICAgIHZhciBzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgdmFyIHJlc3VsdCA9IHV0aWwudHJ5Q2F0Y2godGhlbikuY2FsbCh4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVGcm9tVGhlbmFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0RnJvbVRoZW5hYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzRnJvbVRoZW5hYmxlKTtcbiAgICBzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgIGlmIChwcm9taXNlICYmIHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVzdWx0LmUsIHRydWUsIHRydWUpO1xuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlRnJvbVRoZW5hYmxlKHZhbHVlKSB7XG4gICAgICAgIGlmICghcHJvbWlzZSkgcmV0dXJuO1xuICAgICAgICBwcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWplY3RGcm9tVGhlbmFibGUocmVhc29uKSB7XG4gICAgICAgIGlmICghcHJvbWlzZSkgcmV0dXJuO1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZWFzb24sIHN5bmNocm9ub3VzLCB0cnVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvZ3Jlc3NGcm9tVGhlbmFibGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCFwcm9taXNlKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgcHJvbWlzZS5fcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcHJvbWlzZS5fcHJvZ3Jlc3ModmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbnJldHVybiB0cnlDb252ZXJ0VG9Qcm9taXNlO1xufTtcblxufSx7XCIuL3V0aWwuanNcIjozOH1dLDM2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIFRpbWVvdXRFcnJvciA9IFByb21pc2UuVGltZW91dEVycm9yO1xuXG52YXIgYWZ0ZXJUaW1lb3V0ID0gZnVuY3Rpb24gKHByb21pc2UsIG1lc3NhZ2UpIHtcbiAgICBpZiAoIXByb21pc2UuaXNQZW5kaW5nKCkpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbWVzc2FnZSA9IFwib3BlcmF0aW9uIHRpbWVkIG91dFwiO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IFRpbWVvdXRFcnJvcihtZXNzYWdlKTtcbiAgICB1dGlsLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihlcnIpO1xuICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICBwcm9taXNlLl9jYW5jZWwoZXJyKTtcbn07XG5cbnZhciBhZnRlclZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIGRlbGF5KCt0aGlzKS50aGVuUmV0dXJuKHZhbHVlKTsgfTtcbnZhciBkZWxheSA9IFByb21pc2UuZGVsYXkgPSBmdW5jdGlvbiAodmFsdWUsIG1zKSB7XG4gICAgaWYgKG1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbXMgPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJldC5fZnVsZmlsbCgpOyB9LCBtcyk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIG1zID0gK21zO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLl90aGVuKGFmdGVyVmFsdWUsIG51bGwsIG51bGwsIG1zLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbiAobXMpIHtcbiAgICByZXR1cm4gZGVsYXkodGhpcywgbXMpO1xufTtcblxuZnVuY3Rpb24gc3VjY2Vzc0NsZWFyKHZhbHVlKSB7XG4gICAgdmFyIGhhbmRsZSA9IHRoaXM7XG4gICAgaWYgKGhhbmRsZSBpbnN0YW5jZW9mIE51bWJlcikgaGFuZGxlID0gK2hhbmRsZTtcbiAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZhaWx1cmVDbGVhcihyZWFzb24pIHtcbiAgICB2YXIgaGFuZGxlID0gdGhpcztcbiAgICBpZiAoaGFuZGxlIGluc3RhbmNlb2YgTnVtYmVyKSBoYW5kbGUgPSAraGFuZGxlO1xuICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgIHRocm93IHJlYXNvbjtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIChtcywgbWVzc2FnZSkge1xuICAgIG1zID0gK21zO1xuICAgIHZhciByZXQgPSB0aGlzLnRoZW4oKS5jYW5jZWxsYWJsZSgpO1xuICAgIHJldC5fY2FuY2VsbGF0aW9uUGFyZW50ID0gdGhpcztcbiAgICB2YXIgaGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0VGltZW91dCgpIHtcbiAgICAgICAgYWZ0ZXJUaW1lb3V0KHJldCwgbWVzc2FnZSk7XG4gICAgfSwgbXMpO1xuICAgIHJldHVybiByZXQuX3RoZW4oc3VjY2Vzc0NsZWFyLCBmYWlsdXJlQ2xlYXIsIHVuZGVmaW5lZCwgaGFuZGxlLCB1bmRlZmluZWQpO1xufTtcblxufTtcblxufSx7XCIuL3V0aWwuanNcIjozOH1dLDM3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgIGNyZWF0ZUNvbnRleHQpIHtcbiAgICB2YXIgVHlwZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzLmpzXCIpLlR5cGVFcnJvcjtcbiAgICB2YXIgaW5oZXJpdHMgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpLmluaGVyaXRzO1xuICAgIHZhciBQcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb247XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0aW9uTWFwcGVyKGluc3BlY3Rpb25zKSB7XG4gICAgICAgIHZhciBsZW4gPSBpbnNwZWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpbnNwZWN0aW9uID0gaW5zcGVjdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoaW5zcGVjdGlvbi5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoaW5zcGVjdGlvbi5lcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3BlY3Rpb25zW2ldID0gaW5zcGVjdGlvbi5fc2V0dGxlZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aHJvd2VyKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FzdFByZXNlcnZpbmdEaXNwb3NhYmxlKHRoZW5hYmxlKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHRoZW5hYmxlKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSAhPT0gdGhlbmFibGUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB0aGVuYWJsZS5faXNEaXNwb3NhYmxlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiB0aGVuYWJsZS5fZ2V0RGlzcG9zZXIgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgdGhlbmFibGUuX2lzRGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UuX3NldERpc3Bvc2FibGUodGhlbmFibGUuX2dldERpc3Bvc2VyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UocmVzb3VyY2VzLCBpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGxlbiA9IHJlc291cmNlcy5sZW5ndGg7XG4gICAgICAgIHZhciByZXQgPSBQcm9taXNlLmRlZmVyKCk7XG4gICAgICAgIGZ1bmN0aW9uIGl0ZXJhdG9yKCkge1xuICAgICAgICAgICAgaWYgKGkgPj0gbGVuKSByZXR1cm4gcmV0LnJlc29sdmUoKTtcbiAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0UHJlc2VydmluZ0Rpc3Bvc2FibGUocmVzb3VyY2VzW2krK10pO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX2lzRGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fZ2V0RGlzcG9zZXIoKS50cnlEaXNwb3NlKGluc3BlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzLnByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93ZXIoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3RoZW4oaXRlcmF0b3IsIHRocm93ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICByZXR1cm4gcmV0LnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJTdWNjZXNzKHZhbHVlKSB7XG4gICAgICAgIHZhciBpbnNwZWN0aW9uID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgICAgIGluc3BlY3Rpb24uX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpbnNwZWN0aW9uLl9iaXRGaWVsZCA9IDI2ODQzNTQ1NjtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2UodGhpcywgaW5zcGVjdGlvbikudGhlblJldHVybih2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJGYWlsKHJlYXNvbikge1xuICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgICAgICBpbnNwZWN0aW9uLl9zZXR0bGVkVmFsdWUgPSByZWFzb247XG4gICAgICAgIGluc3BlY3Rpb24uX2JpdEZpZWxkID0gMTM0MjE3NzI4O1xuICAgICAgICByZXR1cm4gZGlzcG9zZSh0aGlzLCBpbnNwZWN0aW9uKS50aGVuVGhyb3cocmVhc29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEaXNwb3NlcihkYXRhLCBwcm9taXNlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfTtcblxuICAgIERpc3Bvc2VyLnByb3RvdHlwZS5yZXNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvbWlzZSgpLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoKS52YWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUudHJ5RGlzcG9zZSA9IGZ1bmN0aW9uKGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gdGhpcy5yZXNvdXJjZSgpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIGNvbnRleHQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHZhciByZXQgPSByZXNvdXJjZSAhPT0gbnVsbFxuICAgICAgICAgICAgPyB0aGlzLmRvRGlzcG9zZShyZXNvdXJjZSwgaW5zcGVjdGlvbikgOiBudWxsO1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSBjb250ZXh0Ll9wb3BDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3Vuc2V0RGlzcG9zYWJsZSgpO1xuICAgICAgICB0aGlzLl9kYXRhID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIuaXNEaXNwb3NlciA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAoZCAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGQucmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkLnRyeURpc3Bvc2UgPT09IFwiZnVuY3Rpb25cIik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIEZ1bmN0aW9uRGlzcG9zZXIoZm4sIHByb21pc2UsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciQoZm4sIHByb21pc2UsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpbmhlcml0cyhGdW5jdGlvbkRpc3Bvc2VyLCBEaXNwb3Nlcik7XG5cbiAgICBGdW5jdGlvbkRpc3Bvc2VyLnByb3RvdHlwZS5kb0Rpc3Bvc2UgPSBmdW5jdGlvbiAocmVzb3VyY2UsIGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIGZuID0gdGhpcy5kYXRhKCk7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHJlc291cmNlLCByZXNvdXJjZSwgaW5zcGVjdGlvbik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1heWJlVW53cmFwRGlzcG9zZXIodmFsdWUpIHtcbiAgICAgICAgaWYgKERpc3Bvc2VyLmlzRGlzcG9zZXIodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlc1t0aGlzLmluZGV4XS5fc2V0RGlzcG9zYWJsZSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUucHJvbWlzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBQcm9taXNlLnVzaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA8IDIpIHJldHVybiBhcGlSZWplY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlvdSBtdXN0IHBhc3MgYXQgbGVhc3QgMiBhcmd1bWVudHMgdG8gUHJvbWlzZS51c2luZ1wiKTtcbiAgICAgICAgdmFyIGZuID0gYXJndW1lbnRzW2xlbiAtIDFdO1xuICAgICAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC85MTZsSkpcXHUwMDBhXCIpO1xuICAgICAgICBsZW4tLTtcbiAgICAgICAgdmFyIHJlc291cmNlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpZiAoRGlzcG9zZXIuaXNEaXNwb3NlcihyZXNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzcG9zZXIgPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5fc2V0RGlzcG9zYWJsZShkaXNwb3Nlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3RoZW4obWF5YmVVbndyYXBEaXNwb3NlciwgbnVsbCwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgICAgICAgICAgICAgIH0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb3VyY2VzW2ldID0gcmVzb3VyY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2Uuc2V0dGxlKHJlc291cmNlcylcbiAgICAgICAgICAgIC50aGVuKGluc3BlY3Rpb25NYXBwZXIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbih2YWxzKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmV0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGZuLmFwcGx5KHVuZGVmaW5lZCwgdmFscyk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5fdGhlbihcbiAgICAgICAgICAgICAgICBkaXNwb3NlclN1Y2Nlc3MsIGRpc3Bvc2VyRmFpbCwgdW5kZWZpbmVkLCByZXNvdXJjZXMsIHVuZGVmaW5lZCk7XG4gICAgICAgIHJlc291cmNlcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKGRpc3Bvc2VyKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyNjIxNDQ7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VyID0gZGlzcG9zZXI7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9pc0Rpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjIxNDQpID4gMDtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX2dldERpc3Bvc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzcG9zZXI7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl91bnNldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjI2MjE0NCk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VyID0gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5kaXNwb3NlciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb25EaXNwb3NlcihmbiwgdGhpcywgY3JlYXRlQ29udGV4dCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgfTtcblxufTtcblxufSx7XCIuL2Vycm9ycy5qc1wiOjEzLFwiLi91dGlsLmpzXCI6Mzh9XSwzODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczUuanNcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB0eXBlb2YgbmF2aWdhdG9yID09IFwidW5kZWZpbmVkXCI7XG52YXIgaGF2ZUdldHRlcnMgPSAoZnVuY3Rpb24oKXtcbiAgICB0cnkge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkobywgXCJmXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG8uZiA9PT0gMztcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufSkoKTtcblxudmFyIGVycm9yT2JqID0ge2U6IHt9fTtcbnZhciB0cnlDYXRjaFRhcmdldDtcbmZ1bmN0aW9uIHRyeUNhdGNoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRyeUNhdGNoVGFyZ2V0O1xuICAgICAgICB0cnlDYXRjaFRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJ5Q2F0Y2goZm4pIHtcbiAgICB0cnlDYXRjaFRhcmdldCA9IGZuO1xuICAgIHJldHVybiB0cnlDYXRjaGVyO1xufVxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbihDaGlsZCwgUGFyZW50KSB7XG4gICAgdmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgIGZ1bmN0aW9uIFQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZDtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciQgPSBQYXJlbnQ7XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBQYXJlbnQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKFBhcmVudC5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUuY2hhckF0KHByb3BlcnR5TmFtZS5sZW5ndGgtMSkgIT09IFwiJFwiXG4gICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lICsgXCIkXCJdID0gUGFyZW50LnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFQucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZTtcbiAgICBDaGlsZC5wcm90b3R5cGUgPSBuZXcgVCgpO1xuICAgIHJldHVybiBDaGlsZC5wcm90b3R5cGU7XG59O1xuXG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG5cbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVXcmFwQXNFcnJvcihtYXliZUVycm9yKSB7XG4gICAgaWYgKCFpc1ByaW1pdGl2ZShtYXliZUVycm9yKSkgcmV0dXJuIG1heWJlRXJyb3I7XG5cbiAgICByZXR1cm4gbmV3IEVycm9yKHNhZmVUb1N0cmluZyhtYXliZUVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIHdpdGhBcHBlbmRlZCh0YXJnZXQsIGFwcGVuZGVlKSB7XG4gICAgdmFyIGxlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShsZW4gKyAxKTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgcmV0W2ldID0gdGFyZ2V0W2ldO1xuICAgIH1cbiAgICByZXRbaV0gPSBhcHBlbmRlZTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBnZXREYXRhUHJvcGVydHlPckRlZmF1bHQob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmIChlczUuaXNFUzUpIHtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgICAgICBpZiAoZGVzYyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gZGVzYy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSA/IG9ialtrZXldIDogdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90RW51bWVyYWJsZVByb3Aob2JqLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZShvYmopKSByZXR1cm4gb2JqO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiB0aHJvd2VyKHIpIHtcbiAgICB0aHJvdyByO1xufVxuXG52YXIgaW5oZXJpdGVkRGF0YUtleXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV4Y2x1ZGVkUHJvdG90eXBlcyA9IFtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLFxuICAgICAgICBPYmplY3QucHJvdG90eXBlLFxuICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGVcbiAgICBdO1xuXG4gICAgdmFyIGlzRXhjbHVkZWRQcm90byA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4Y2x1ZGVkUHJvdG90eXBlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkUHJvdG90eXBlc1tpXSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAoZXM1LmlzRVM1KSB7XG4gICAgICAgIHZhciBnZXRLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgICAgIHZhciB2aXNpdGVkS2V5cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB3aGlsZSAob2JqICE9IG51bGwgJiYgIWlzRXhjbHVkZWRQcm90byhvYmopKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleXM7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IGdldEtleXMob2JqKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2l0ZWRLZXlzW2tleV0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MgIT0gbnVsbCAmJiBkZXNjLmdldCA9PSBudWxsICYmIGRlc2Muc2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqID0gZXM1LmdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIGlmIChpc0V4Y2x1ZGVkUHJvdG8ob2JqKSkgcmV0dXJuIFtdO1xuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICAgICAgICAvKmpzaGludCBmb3JpbjpmYWxzZSAqL1xuICAgICAgICAgICAgZW51bWVyYXRpb246IGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhjbHVkZWRQcm90b3R5cGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKGV4Y2x1ZGVkUHJvdG90eXBlc1tpXSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIGVudW1lcmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICB9XG5cbn0pKCk7XG5cbnZhciB0aGlzQXNzaWdubWVudFBhdHRlcm4gPSAvdGhpc1xccypcXC5cXHMqXFxTK1xccyo9LztcbmZ1bmN0aW9uIGlzQ2xhc3MoZm4pIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gZXM1Lm5hbWVzKGZuLnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAgIHZhciBoYXNNZXRob2RzID0gZXM1LmlzRVM1ICYmIGtleXMubGVuZ3RoID4gMTtcbiAgICAgICAgICAgIHZhciBoYXNNZXRob2RzT3RoZXJUaGFuQ29uc3RydWN0b3IgPSBrZXlzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAhKGtleXMubGVuZ3RoID09PSAxICYmIGtleXNbMF0gPT09IFwiY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICB2YXIgaGFzVGhpc0Fzc2lnbm1lbnRBbmRTdGF0aWNNZXRob2RzID1cbiAgICAgICAgICAgICAgICB0aGlzQXNzaWdubWVudFBhdHRlcm4udGVzdChmbiArIFwiXCIpICYmIGVzNS5uYW1lcyhmbikubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgaWYgKGhhc01ldGhvZHMgfHwgaGFzTWV0aG9kc090aGVyVGhhbkNvbnN0cnVjdG9yIHx8XG4gICAgICAgICAgICAgICAgaGFzVGhpc0Fzc2lnbm1lbnRBbmRTdGF0aWNNZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9GYXN0UHJvcGVydGllcyhvYmopIHtcbiAgICAvKmpzaGludCAtVzAyNywtVzA1NSwtVzAzMSovXG4gICAgZnVuY3Rpb24gZigpIHt9XG4gICAgZi5wcm90b3R5cGUgPSBvYmo7XG4gICAgdmFyIGwgPSA4O1xuICAgIHdoaWxlIChsLS0pIG5ldyBmKCk7XG4gICAgcmV0dXJuIG9iajtcbiAgICBldmFsKG9iaik7XG59XG5cbnZhciByaWRlbnQgPSAvXlthLXokX11bYS16JF8wLTldKiQvaTtcbmZ1bmN0aW9uIGlzSWRlbnRpZmllcihzdHIpIHtcbiAgICByZXR1cm4gcmlkZW50LnRlc3Qoc3RyKTtcbn1cblxuZnVuY3Rpb24gZmlsbGVkUmFuZ2UoY291bnQsIHByZWZpeCwgc3VmZml4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgcmV0W2ldID0gcHJlZml4ICsgaSArIHN1ZmZpeDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc2FmZVRvU3RyaW5nKG9iaikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBvYmogKyBcIlwiO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiW25vIHN0cmluZyByZXByZXNlbnRhdGlvbl1cIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AoZSwgXCJpc09wZXJhdGlvbmFsXCIsIHRydWUpO1xuICAgIH1cbiAgICBjYXRjaChpZ25vcmUpIHt9XG59XG5cbmZ1bmN0aW9uIG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uKGUpIHtcbiAgICBpZiAoZSA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICgoZSBpbnN0YW5jZW9mIEVycm9yW1wiX19CbHVlYmlyZEVycm9yVHlwZXNfX1wiXS5PcGVyYXRpb25hbEVycm9yKSB8fFxuICAgICAgICBlW1wiaXNPcGVyYXRpb25hbFwiXSA9PT0gdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbkF0dGFjaFRyYWNlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvciAmJiBlczUucHJvcGVydHlJc1dyaXRhYmxlKG9iaiwgXCJzdGFja1wiKTtcbn1cblxudmFyIGVuc3VyZUVycm9yT2JqZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmICghKFwic3RhY2tcIiBpbiBuZXcgRXJyb3IoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY2FuQXR0YWNoVHJhY2UodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB0cnkge3Rocm93IG5ldyBFcnJvcihzYWZlVG9TdHJpbmcodmFsdWUpKTt9XG4gICAgICAgICAgICBjYXRjaChlcnIpIHtyZXR1cm4gZXJyO31cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjYW5BdHRhY2hUcmFjZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3Ioc2FmZVRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgfVxufSkoKTtcblxuZnVuY3Rpb24gY2xhc3NTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gY29weURlc2NyaXB0b3JzKGZyb20sIHRvLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IGVzNS5uYW1lcyhmcm9tKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIGlmIChmaWx0ZXIoa2V5KSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkodG8sIGtleSwgZXM1LmdldERlc2NyaXB0b3IoZnJvbSwga2V5KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciByZXQgPSB7XG4gICAgaXNDbGFzczogaXNDbGFzcyxcbiAgICBpc0lkZW50aWZpZXI6IGlzSWRlbnRpZmllcixcbiAgICBpbmhlcml0ZWREYXRhS2V5czogaW5oZXJpdGVkRGF0YUtleXMsXG4gICAgZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0OiBnZXREYXRhUHJvcGVydHlPckRlZmF1bHQsXG4gICAgdGhyb3dlcjogdGhyb3dlcixcbiAgICBpc0FycmF5OiBlczUuaXNBcnJheSxcbiAgICBoYXZlR2V0dGVyczogaGF2ZUdldHRlcnMsXG4gICAgbm90RW51bWVyYWJsZVByb3A6IG5vdEVudW1lcmFibGVQcm9wLFxuICAgIGlzUHJpbWl0aXZlOiBpc1ByaW1pdGl2ZSxcbiAgICBpc09iamVjdDogaXNPYmplY3QsXG4gICAgY2FuRXZhbHVhdGU6IGNhbkV2YWx1YXRlLFxuICAgIGVycm9yT2JqOiBlcnJvck9iaixcbiAgICB0cnlDYXRjaDogdHJ5Q2F0Y2gsXG4gICAgaW5oZXJpdHM6IGluaGVyaXRzLFxuICAgIHdpdGhBcHBlbmRlZDogd2l0aEFwcGVuZGVkLFxuICAgIG1heWJlV3JhcEFzRXJyb3I6IG1heWJlV3JhcEFzRXJyb3IsXG4gICAgdG9GYXN0UHJvcGVydGllczogdG9GYXN0UHJvcGVydGllcyxcbiAgICBmaWxsZWRSYW5nZTogZmlsbGVkUmFuZ2UsXG4gICAgdG9TdHJpbmc6IHNhZmVUb1N0cmluZyxcbiAgICBjYW5BdHRhY2hUcmFjZTogY2FuQXR0YWNoVHJhY2UsXG4gICAgZW5zdXJlRXJyb3JPYmplY3Q6IGVuc3VyZUVycm9yT2JqZWN0LFxuICAgIG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uOiBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbixcbiAgICBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb246IG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbixcbiAgICBjbGFzc1N0cmluZzogY2xhc3NTdHJpbmcsXG4gICAgY29weURlc2NyaXB0b3JzOiBjb3B5RGVzY3JpcHRvcnMsXG4gICAgaGFzRGV2VG9vbHM6IHR5cGVvZiBjaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY2hyb21lICYmXG4gICAgICAgICAgICAgICAgIHR5cGVvZiBjaHJvbWUubG9hZFRpbWVzID09PSBcImZ1bmN0aW9uXCIsXG4gICAgaXNOb2RlOiB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICBjbGFzc1N0cmluZyhwcm9jZXNzKS50b0xvd2VyQ2FzZSgpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIlxufTtcbnJldC5pc1JlY2VudE5vZGUgPSByZXQuaXNOb2RlICYmIChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmVyc2lvbiA9IHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdChcIi5cIikubWFwKE51bWJlcik7XG4gICAgcmV0dXJuICh2ZXJzaW9uWzBdID09PSAwICYmIHZlcnNpb25bMV0gPiAxMCkgfHwgKHZlcnNpb25bMF0gPiAwKTtcbn0pKCk7XG5cbmlmIChyZXQuaXNOb2RlKSByZXQudG9GYXN0UHJvcGVydGllcyhwcm9jZXNzKTtcblxudHJ5IHt0aHJvdyBuZXcgRXJyb3IoKTsgfSBjYXRjaCAoZSkge3JldC5sYXN0TGluZUVycm9yID0gZTt9XG5tb2R1bGUuZXhwb3J0cyA9IHJldDtcblxufSx7XCIuL2VzNS5qc1wiOjE0fV19LHt9LFs0XSkoNClcbn0pOyAgICAgICAgICAgICAgICAgICAgO2lmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgIT09IG51bGwpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LlAgPSB3aW5kb3cuUHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgIT09IG51bGwpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuUCA9IHNlbGYuUHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Il19
},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
var _ = require('underscore');
var Promise = require('bluebird');
var chunkArray = require('./chunkArray');

var chunk =  function chunk(items, process, context, options) {
    var DEFAULT_OPTIONS = {
        chunkSize: 10,
        interval: 1,
        cancel: false,
        resultLimit: null
    };

    options = _.extend({}, DEFAULT_OPTIONS, options);

    var itemsToProcess = chunkArray(items, options.chunkSize);
    var deferred = Promise.pending();
    var chunkIndex = 0;
    var output = [];

    var processNextChunk = function() {
        Promise.resolve(process.call(context, itemsToProcess.shift(), chunkIndex++))
            .then(function(results) {
                output = output.concat(results);

                if (itemsToProcess.length && (!options.resultLimit || output.length < options.resultLimit) && !options.cancel) {
                    setTimeout(processNextChunk, options.interval);
                } else {
                    deferred.resolve(output);
                }
            });
    };

    setTimeout(processNextChunk, options.interval);

    return deferred.promise;
};

module.exports = chunk;

},{"./chunkArray":5,"bluebird":2,"underscore":"underscore"}],5:[function(require,module,exports){
var chunkArray = function chunkArray(arr, chunkSize) {
    var dataChunks = [];
    var dataChunk = [];

    var threshold = chunkSize - 1;

    for (var i = 0, len = arr.length; i < len; i++) {
        dataChunk.push(arr[i]);
        if (i % chunkSize === threshold || i === len - 1) {
            dataChunks.push(dataChunk);
            dataChunk = [];
        }
    }

    return dataChunks;
};

module.exports = chunkArray;

},{}],6:[function(require,module,exports){
var stash = require('./stash');
var chunk = require('./chunk');
var loop = require('./loop');

module.exports = {
    stash: stash,
    chunk: chunk,
    loop: loop
};

},{"./chunk":4,"./loop":7,"./stash":8}],7:[function(require,module,exports){
var Promise = require('bluebird');

var loop = function(state, guard, operation, postOperation) {
    return Promise.method(guard.bind(state))()
        .then(function(allowed) {
            if (allowed) {
                return Promise.method(operation.bind(state))()
                    .then(postOperation.bind(state))
                    .then(function() {
                        return loop(state, guard, operation, postOperation);
                    });
            } else {
                return state;
            }
        });
};

module.exports = loop;

},{"bluebird":2}],8:[function(require,module,exports){
var Promise = require('bluebird');

var stash = function (maps, key) {
    return function (map) {
        maps[key] = map;
        return Promise.resolve({});
    };
};

module.exports = stash;

},{"bluebird":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9hcHAuanMiLCJub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvYnJvd3Nlci9ibHVlYmlyZC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJzcmMvamF2YXNjcmlwdC9wcm9taXNlUGF0dGVybnMvY2h1bmsuanMiLCJzcmMvamF2YXNjcmlwdC9wcm9taXNlUGF0dGVybnMvY2h1bmtBcnJheS5qcyIsInNyYy9qYXZhc2NyaXB0L3Byb21pc2VQYXR0ZXJucy9pbmRleC5qcyIsInNyYy9qYXZhc2NyaXB0L3Byb21pc2VQYXR0ZXJucy9sb29wLmpzIiwic3JjL2phdmFzY3JpcHQvcHJvbWlzZVBhdHRlcm5zL3N0YXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzdUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIHByb21pc2VQYXR0ZXJucyA9IHJlcXVpcmUoJy4vcHJvbWlzZVBhdHRlcm5zJyk7XG5cbnZhciBpdGVtcyA9IFtcbiAgICB7bmFtZTogJ0FmZ2hhbmlzdGFuJywgY29kZTogJ0FGJ30sXG4gICAge25hbWU6ICfDg+KApmxhbmQgSXNsYW5kcycsIGNvZGU6ICdBWCd9LFxuICAgIHtuYW1lOiAnQWxiYW5pYScsIGNvZGU6ICdBTCd9LFxuICAgIHtuYW1lOiAnQWxnZXJpYScsIGNvZGU6ICdEWid9LFxuICAgIHtuYW1lOiAnQW1lcmljYW4gU2Ftb2EnLCBjb2RlOiAnQVMnfSxcbiAgICB7bmFtZTogJ0FuZG9yckEnLCBjb2RlOiAnQUQnfSxcbiAgICB7bmFtZTogJ0FuZ29sYScsIGNvZGU6ICdBTyd9LFxuICAgIHtuYW1lOiAnQW5ndWlsbGEnLCBjb2RlOiAnQUknfSxcbiAgICB7bmFtZTogJ0FudGFyY3RpY2EnLCBjb2RlOiAnQVEnfSxcbiAgICB7bmFtZTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLCBjb2RlOiAnQUcnfSxcbiAgICB7bmFtZTogJ0FyZ2VudGluYScsIGNvZGU6ICdBUid9LFxuICAgIHtuYW1lOiAnQXJtZW5pYScsIGNvZGU6ICdBTSd9LFxuICAgIHtuYW1lOiAnQXJ1YmEnLCBjb2RlOiAnQVcnfSxcbiAgICB7bmFtZTogJ0F1c3RyYWxpYScsIGNvZGU6ICdBVSd9LFxuICAgIHtuYW1lOiAnQXVzdHJpYScsIGNvZGU6ICdBVCd9LFxuICAgIHtuYW1lOiAnQXplcmJhaWphbicsIGNvZGU6ICdBWid9LFxuICAgIHtuYW1lOiAnQmFoYW1hcycsIGNvZGU6ICdCUyd9LFxuICAgIHtuYW1lOiAnQmFocmFpbicsIGNvZGU6ICdCSCd9LFxuICAgIHtuYW1lOiAnQmFuZ2xhZGVzaCcsIGNvZGU6ICdCRCd9LFxuICAgIHtuYW1lOiAnQmFyYmFkb3MnLCBjb2RlOiAnQkInfSxcbiAgICB7bmFtZTogJ0JlbGFydXMnLCBjb2RlOiAnQlknfSxcbiAgICB7bmFtZTogJ0JlbGdpdW0nLCBjb2RlOiAnQkUnfSxcbiAgICB7bmFtZTogJ0JlbGl6ZScsIGNvZGU6ICdCWid9LFxuICAgIHtuYW1lOiAnQmVuaW4nLCBjb2RlOiAnQkonfSxcbiAgICB7bmFtZTogJ0Jlcm11ZGEnLCBjb2RlOiAnQk0nfSxcbiAgICB7bmFtZTogJ0JodXRhbicsIGNvZGU6ICdCVCd9LFxuICAgIHtuYW1lOiAnQm9saXZpYScsIGNvZGU6ICdCTyd9LFxuICAgIHtuYW1lOiAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScsIGNvZGU6ICdCQSd9LFxuICAgIHtuYW1lOiAnQm90c3dhbmEnLCBjb2RlOiAnQlcnfSxcbiAgICB7bmFtZTogJ0JvdXZldCBJc2xhbmQnLCBjb2RlOiAnQlYnfSxcbiAgICB7bmFtZTogJ0JyYXppbCcsIGNvZGU6ICdCUid9LFxuICAgIHtuYW1lOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JywgY29kZTogJ0lPJ30sXG4gICAge25hbWU6ICdCcnVuZWkgRGFydXNzYWxhbScsIGNvZGU6ICdCTid9LFxuICAgIHtuYW1lOiAnQnVsZ2FyaWEnLCBjb2RlOiAnQkcnfSxcbiAgICB7bmFtZTogJ0J1cmtpbmEgRmFzbycsIGNvZGU6ICdCRid9LFxuICAgIHtuYW1lOiAnQnVydW5kaScsIGNvZGU6ICdCSSd9LFxuICAgIHtuYW1lOiAnQ2FtYm9kaWEnLCBjb2RlOiAnS0gnfSxcbiAgICB7bmFtZTogJ0NhbWVyb29uJywgY29kZTogJ0NNJ30sXG4gICAge25hbWU6ICdDYW5hZGEnLCBjb2RlOiAnQ0EnfSxcbiAgICB7bmFtZTogJ0NhcGUgVmVyZGUnLCBjb2RlOiAnQ1YnfSxcbiAgICB7bmFtZTogJ0NheW1hbiBJc2xhbmRzJywgY29kZTogJ0tZJ30sXG4gICAge25hbWU6ICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMnLCBjb2RlOiAnQ0YnfSxcbiAgICB7bmFtZTogJ0NoYWQnLCBjb2RlOiAnVEQnfSxcbiAgICB7bmFtZTogJ0NoaWxlJywgY29kZTogJ0NMJ30sXG4gICAge25hbWU6ICdDaGluYScsIGNvZGU6ICdDTid9LFxuICAgIHtuYW1lOiAnQ2hyaXN0bWFzIElzbGFuZCcsIGNvZGU6ICdDWCd9LFxuICAgIHtuYW1lOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLCBjb2RlOiAnQ0MnfSxcbiAgICB7bmFtZTogJ0NvbG9tYmlhJywgY29kZTogJ0NPJ30sXG4gICAge25hbWU6ICdDb21vcm9zJywgY29kZTogJ0tNJ30sXG4gICAge25hbWU6ICdDb25nbycsIGNvZGU6ICdDRyd9LFxuICAgIHtuYW1lOiAnQ29uZ28sIFRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZScsIGNvZGU6ICdDRCd9LFxuICAgIHtuYW1lOiAnQ29vayBJc2xhbmRzJywgY29kZTogJ0NLJ30sXG4gICAge25hbWU6ICdDb3N0YSBSaWNhJywgY29kZTogJ0NSJ30sXG4gICAge25hbWU6ICdDb3RlIERcXCdJdm9pcmUnLCBjb2RlOiAnQ0knfSxcbiAgICB7bmFtZTogJ0Nyb2F0aWEnLCBjb2RlOiAnSFInfSxcbiAgICB7bmFtZTogJ0N1YmEnLCBjb2RlOiAnQ1UnfSxcbiAgICB7bmFtZTogJ0N5cHJ1cycsIGNvZGU6ICdDWSd9LFxuICAgIHtuYW1lOiAnQ3plY2ggUmVwdWJsaWMnLCBjb2RlOiAnQ1onfSxcbiAgICB7bmFtZTogJ0Rlbm1hcmsnLCBjb2RlOiAnREsnfSxcbiAgICB7bmFtZTogJ0RqaWJvdXRpJywgY29kZTogJ0RKJ30sXG4gICAge25hbWU6ICdEb21pbmljYScsIGNvZGU6ICdETSd9LFxuICAgIHtuYW1lOiAnRG9taW5pY2FuIFJlcHVibGljJywgY29kZTogJ0RPJ30sXG4gICAge25hbWU6ICdFY3VhZG9yJywgY29kZTogJ0VDJ30sXG4gICAge25hbWU6ICdFZ3lwdCcsIGNvZGU6ICdFRyd9LFxuICAgIHtuYW1lOiAnRWwgU2FsdmFkb3InLCBjb2RlOiAnU1YnfSxcbiAgICB7bmFtZTogJ0VxdWF0b3JpYWwgR3VpbmVhJywgY29kZTogJ0dRJ30sXG4gICAge25hbWU6ICdFcml0cmVhJywgY29kZTogJ0VSJ30sXG4gICAge25hbWU6ICdFc3RvbmlhJywgY29kZTogJ0VFJ30sXG4gICAge25hbWU6ICdFdGhpb3BpYScsIGNvZGU6ICdFVCd9LFxuICAgIHtuYW1lOiAnRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpJywgY29kZTogJ0ZLJ30sXG4gICAge25hbWU6ICdGYXJvZSBJc2xhbmRzJywgY29kZTogJ0ZPJ30sXG4gICAge25hbWU6ICdGaWppJywgY29kZTogJ0ZKJ30sXG4gICAge25hbWU6ICdGaW5sYW5kJywgY29kZTogJ0ZJJ30sXG4gICAge25hbWU6ICdGcmFuY2UnLCBjb2RlOiAnRlInfSxcbiAgICB7bmFtZTogJ0ZyZW5jaCBHdWlhbmEnLCBjb2RlOiAnR0YnfSxcbiAgICB7bmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLCBjb2RlOiAnUEYnfSxcbiAgICB7bmFtZTogJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcycsIGNvZGU6ICdURid9LFxuICAgIHtuYW1lOiAnR2Fib24nLCBjb2RlOiAnR0EnfSxcbiAgICB7bmFtZTogJ0dhbWJpYScsIGNvZGU6ICdHTSd9LFxuICAgIHtuYW1lOiAnR2VvcmdpYScsIGNvZGU6ICdHRSd9LFxuICAgIHtuYW1lOiAnR2VybWFueScsIGNvZGU6ICdERSd9LFxuICAgIHtuYW1lOiAnR2hhbmEnLCBjb2RlOiAnR0gnfSxcbiAgICB7bmFtZTogJ0dpYnJhbHRhcicsIGNvZGU6ICdHSSd9LFxuICAgIHtuYW1lOiAnR3JlZWNlJywgY29kZTogJ0dSJ30sXG4gICAge25hbWU6ICdHcmVlbmxhbmQnLCBjb2RlOiAnR0wnfSxcbiAgICB7bmFtZTogJ0dyZW5hZGEnLCBjb2RlOiAnR0QnfSxcbiAgICB7bmFtZTogJ0d1YWRlbG91cGUnLCBjb2RlOiAnR1AnfSxcbiAgICB7bmFtZTogJ0d1YW0nLCBjb2RlOiAnR1UnfSxcbiAgICB7bmFtZTogJ0d1YXRlbWFsYScsIGNvZGU6ICdHVCd9LFxuICAgIHtuYW1lOiAnR3Vlcm5zZXknLCBjb2RlOiAnR0cnfSxcbiAgICB7bmFtZTogJ0d1aW5lYScsIGNvZGU6ICdHTid9LFxuICAgIHtuYW1lOiAnR3VpbmVhLUJpc3NhdScsIGNvZGU6ICdHVyd9LFxuICAgIHtuYW1lOiAnR3V5YW5hJywgY29kZTogJ0dZJ30sXG4gICAge25hbWU6ICdIYWl0aScsIGNvZGU6ICdIVCd9LFxuICAgIHtuYW1lOiAnSGVhcmQgSXNsYW5kIGFuZCBNY2RvbmFsZCBJc2xhbmRzJywgY29kZTogJ0hNJ30sXG4gICAge25hbWU6ICdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKScsIGNvZGU6ICdWQSd9LFxuICAgIHtuYW1lOiAnSG9uZHVyYXMnLCBjb2RlOiAnSE4nfSxcbiAgICB7bmFtZTogJ0hvbmcgS29uZycsIGNvZGU6ICdISyd9LFxuICAgIHtuYW1lOiAnSHVuZ2FyeScsIGNvZGU6ICdIVSd9LFxuICAgIHtuYW1lOiAnSWNlbGFuZCcsIGNvZGU6ICdJUyd9LFxuICAgIHtuYW1lOiAnSW5kaWEnLCBjb2RlOiAnSU4nfSxcbiAgICB7bmFtZTogJ0luZG9uZXNpYScsIGNvZGU6ICdJRCd9LFxuICAgIHtuYW1lOiAnSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBPZicsIGNvZGU6ICdJUid9LFxuICAgIHtuYW1lOiAnSXJhcScsIGNvZGU6ICdJUSd9LFxuICAgIHtuYW1lOiAnSXJlbGFuZCcsIGNvZGU6ICdJRSd9LFxuICAgIHtuYW1lOiAnSXNsZSBvZiBNYW4nLCBjb2RlOiAnSU0nfSxcbiAgICB7bmFtZTogJ0lzcmFlbCcsIGNvZGU6ICdJTCd9LFxuICAgIHtuYW1lOiAnSXRhbHknLCBjb2RlOiAnSVQnfSxcbiAgICB7bmFtZTogJ0phbWFpY2EnLCBjb2RlOiAnSk0nfSxcbiAgICB7bmFtZTogJ0phcGFuJywgY29kZTogJ0pQJ30sXG4gICAge25hbWU6ICdKZXJzZXknLCBjb2RlOiAnSkUnfSxcbiAgICB7bmFtZTogJ0pvcmRhbicsIGNvZGU6ICdKTyd9LFxuICAgIHtuYW1lOiAnS2F6YWtoc3RhbicsIGNvZGU6ICdLWid9LFxuICAgIHtuYW1lOiAnS2VueWEnLCBjb2RlOiAnS0UnfSxcbiAgICB7bmFtZTogJ0tpcmliYXRpJywgY29kZTogJ0tJJ30sXG4gICAge25hbWU6ICdLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGVcXCdTIFJlcHVibGljIG9mJywgY29kZTogJ0tQJ30sXG4gICAge25hbWU6ICdLb3JlYSwgUmVwdWJsaWMgb2YnLCBjb2RlOiAnS1InfSxcbiAgICB7bmFtZTogJ0t1d2FpdCcsIGNvZGU6ICdLVyd9LFxuICAgIHtuYW1lOiAnS3lyZ3l6c3RhbicsIGNvZGU6ICdLRyd9LFxuICAgIHtuYW1lOiAnTGFvIFBlb3BsZVxcJ1MgRGVtb2NyYXRpYyBSZXB1YmxpYycsIGNvZGU6ICdMQSd9LFxuICAgIHtuYW1lOiAnTGF0dmlhJywgY29kZTogJ0xWJ30sXG4gICAge25hbWU6ICdMZWJhbm9uJywgY29kZTogJ0xCJ30sXG4gICAge25hbWU6ICdMZXNvdGhvJywgY29kZTogJ0xTJ30sXG4gICAge25hbWU6ICdMaWJlcmlhJywgY29kZTogJ0xSJ30sXG4gICAge25hbWU6ICdMaWJ5YW4gQXJhYiBKYW1haGlyaXlhJywgY29kZTogJ0xZJ30sXG4gICAge25hbWU6ICdMaWVjaHRlbnN0ZWluJywgY29kZTogJ0xJJ30sXG4gICAge25hbWU6ICdMaXRodWFuaWEnLCBjb2RlOiAnTFQnfSxcbiAgICB7bmFtZTogJ0x1eGVtYm91cmcnLCBjb2RlOiAnTFUnfSxcbiAgICB7bmFtZTogJ01hY2FvJywgY29kZTogJ01PJ30sXG4gICAge25hbWU6ICdNYWNlZG9uaWEsIFRoZSBGb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2YnLCBjb2RlOiAnTUsnfSxcbiAgICB7bmFtZTogJ01hZGFnYXNjYXInLCBjb2RlOiAnTUcnfSxcbiAgICB7bmFtZTogJ01hbGF3aScsIGNvZGU6ICdNVyd9LFxuICAgIHtuYW1lOiAnTWFsYXlzaWEnLCBjb2RlOiAnTVknfSxcbiAgICB7bmFtZTogJ01hbGRpdmVzJywgY29kZTogJ01WJ30sXG4gICAge25hbWU6ICdNYWxpJywgY29kZTogJ01MJ30sXG4gICAge25hbWU6ICdNYWx0YScsIGNvZGU6ICdNVCd9LFxuICAgIHtuYW1lOiAnTWFyc2hhbGwgSXNsYW5kcycsIGNvZGU6ICdNSCd9LFxuICAgIHtuYW1lOiAnTWFydGluaXF1ZScsIGNvZGU6ICdNUSd9LFxuICAgIHtuYW1lOiAnTWF1cml0YW5pYScsIGNvZGU6ICdNUid9LFxuICAgIHtuYW1lOiAnTWF1cml0aXVzJywgY29kZTogJ01VJ30sXG4gICAge25hbWU6ICdNYXlvdHRlJywgY29kZTogJ1lUJ30sXG4gICAge25hbWU6ICdNZXhpY28nLCBjb2RlOiAnTVgnfSxcbiAgICB7bmFtZTogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YnLCBjb2RlOiAnRk0nfSxcbiAgICB7bmFtZTogJ01vbGRvdmEsIFJlcHVibGljIG9mJywgY29kZTogJ01EJ30sXG4gICAge25hbWU6ICdNb25hY28nLCBjb2RlOiAnTUMnfSxcbiAgICB7bmFtZTogJ01vbmdvbGlhJywgY29kZTogJ01OJ30sXG4gICAge25hbWU6ICdNb250c2VycmF0JywgY29kZTogJ01TJ30sXG4gICAge25hbWU6ICdNb3JvY2NvJywgY29kZTogJ01BJ30sXG4gICAge25hbWU6ICdNb3phbWJpcXVlJywgY29kZTogJ01aJ30sXG4gICAge25hbWU6ICdNeWFubWFyJywgY29kZTogJ01NJ30sXG4gICAge25hbWU6ICdOYW1pYmlhJywgY29kZTogJ05BJ30sXG4gICAge25hbWU6ICdOYXVydScsIGNvZGU6ICdOUid9LFxuICAgIHtuYW1lOiAnTmVwYWwnLCBjb2RlOiAnTlAnfSxcbiAgICB7bmFtZTogJ05ldGhlcmxhbmRzJywgY29kZTogJ05MJ30sXG4gICAge25hbWU6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsIGNvZGU6ICdBTid9LFxuICAgIHtuYW1lOiAnTmV3IENhbGVkb25pYScsIGNvZGU6ICdOQyd9LFxuICAgIHtuYW1lOiAnTmV3IFplYWxhbmQnLCBjb2RlOiAnTlonfSxcbiAgICB7bmFtZTogJ05pY2FyYWd1YScsIGNvZGU6ICdOSSd9LFxuICAgIHtuYW1lOiAnTmlnZXInLCBjb2RlOiAnTkUnfSxcbiAgICB7bmFtZTogJ05pZ2VyaWEnLCBjb2RlOiAnTkcnfSxcbiAgICB7bmFtZTogJ05pdWUnLCBjb2RlOiAnTlUnfSxcbiAgICB7bmFtZTogJ05vcmZvbGsgSXNsYW5kJywgY29kZTogJ05GJ30sXG4gICAge25hbWU6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLCBjb2RlOiAnTVAnfSxcbiAgICB7bmFtZTogJ05vcndheScsIGNvZGU6ICdOTyd9LFxuICAgIHtuYW1lOiAnT21hbicsIGNvZGU6ICdPTSd9LFxuICAgIHtuYW1lOiAnUGFraXN0YW4nLCBjb2RlOiAnUEsnfSxcbiAgICB7bmFtZTogJ1BhbGF1JywgY29kZTogJ1BXJ30sXG4gICAge25hbWU6ICdQYWxlc3RpbmlhbiBUZXJyaXRvcnksIE9jY3VwaWVkJywgY29kZTogJ1BTJ30sXG4gICAge25hbWU6ICdQYW5hbWEnLCBjb2RlOiAnUEEnfSxcbiAgICB7bmFtZTogJ1BhcHVhIE5ldyBHdWluZWEnLCBjb2RlOiAnUEcnfSxcbiAgICB7bmFtZTogJ1BhcmFndWF5JywgY29kZTogJ1BZJ30sXG4gICAge25hbWU6ICdQZXJ1JywgY29kZTogJ1BFJ30sXG4gICAge25hbWU6ICdQaGlsaXBwaW5lcycsIGNvZGU6ICdQSCd9LFxuICAgIHtuYW1lOiAnUGl0Y2Fpcm4nLCBjb2RlOiAnUE4nfSxcbiAgICB7bmFtZTogJ1BvbGFuZCcsIGNvZGU6ICdQTCd9LFxuICAgIHtuYW1lOiAnUG9ydHVnYWwnLCBjb2RlOiAnUFQnfSxcbiAgICB7bmFtZTogJ1B1ZXJ0byBSaWNvJywgY29kZTogJ1BSJ30sXG4gICAge25hbWU6ICdRYXRhcicsIGNvZGU6ICdRQSd9LFxuICAgIHtuYW1lOiAnUmV1bmlvbicsIGNvZGU6ICdSRSd9LFxuICAgIHtuYW1lOiAnUm9tYW5pYScsIGNvZGU6ICdSTyd9LFxuICAgIHtuYW1lOiAnUnVzc2lhbiBGZWRlcmF0aW9uJywgY29kZTogJ1JVJ30sXG4gICAge25hbWU6ICdSV0FOREEnLCBjb2RlOiAnUlcnfSxcbiAgICB7bmFtZTogJ1NhaW50IEhlbGVuYScsIGNvZGU6ICdTSCd9LFxuICAgIHtuYW1lOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJywgY29kZTogJ0tOJ30sXG4gICAge25hbWU6ICdTYWludCBMdWNpYScsIGNvZGU6ICdMQyd9LFxuICAgIHtuYW1lOiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicsIGNvZGU6ICdQTSd9LFxuICAgIHtuYW1lOiAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnLCBjb2RlOiAnVkMnfSxcbiAgICB7bmFtZTogJ1NhbW9hJywgY29kZTogJ1dTJ30sXG4gICAge25hbWU6ICdTYW4gTWFyaW5vJywgY29kZTogJ1NNJ30sXG4gICAge25hbWU6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLCBjb2RlOiAnU1QnfSxcbiAgICB7bmFtZTogJ1NhdWRpIEFyYWJpYScsIGNvZGU6ICdTQSd9LFxuICAgIHtuYW1lOiAnU2VuZWdhbCcsIGNvZGU6ICdTTid9LFxuICAgIHtuYW1lOiAnU2VyYmlhIGFuZCBNb250ZW5lZ3JvJywgY29kZTogJ0NTJ30sXG4gICAge25hbWU6ICdTZXljaGVsbGVzJywgY29kZTogJ1NDJ30sXG4gICAge25hbWU6ICdTaWVycmEgTGVvbmUnLCBjb2RlOiAnU0wnfSxcbiAgICB7bmFtZTogJ1NpbmdhcG9yZScsIGNvZGU6ICdTRyd9LFxuICAgIHtuYW1lOiAnU2xvdmFraWEnLCBjb2RlOiAnU0snfSxcbiAgICB7bmFtZTogJ1Nsb3ZlbmlhJywgY29kZTogJ1NJJ30sXG4gICAge25hbWU6ICdTb2xvbW9uIElzbGFuZHMnLCBjb2RlOiAnU0InfSxcbiAgICB7bmFtZTogJ1NvbWFsaWEnLCBjb2RlOiAnU08nfSxcbiAgICB7bmFtZTogJ1NvdXRoIEFmcmljYScsIGNvZGU6ICdaQSd9LFxuICAgIHtuYW1lOiAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLCBjb2RlOiAnR1MnfSxcbiAgICB7bmFtZTogJ1NwYWluJywgY29kZTogJ0VTJ30sXG4gICAge25hbWU6ICdTcmkgTGFua2EnLCBjb2RlOiAnTEsnfSxcbiAgICB7bmFtZTogJ1N1ZGFuJywgY29kZTogJ1NEJ30sXG4gICAge25hbWU6ICdTdXJpbmFtZScsIGNvZGU6ICdTUid9LFxuICAgIHtuYW1lOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsIGNvZGU6ICdTSid9LFxuICAgIHtuYW1lOiAnU3dhemlsYW5kJywgY29kZTogJ1NaJ30sXG4gICAge25hbWU6ICdTd2VkZW4nLCBjb2RlOiAnU0UnfSxcbiAgICB7bmFtZTogJ1N3aXR6ZXJsYW5kJywgY29kZTogJ0NIJ30sXG4gICAge25hbWU6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsIGNvZGU6ICdTWSd9LFxuICAgIHtuYW1lOiAnVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYScsIGNvZGU6ICdUVyd9LFxuICAgIHtuYW1lOiAnVGFqaWtpc3RhbicsIGNvZGU6ICdUSid9LFxuICAgIHtuYW1lOiAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicsIGNvZGU6ICdUWid9LFxuICAgIHtuYW1lOiAnVGhhaWxhbmQnLCBjb2RlOiAnVEgnfSxcbiAgICB7bmFtZTogJ1RpbW9yLUxlc3RlJywgY29kZTogJ1RMJ30sXG4gICAge25hbWU6ICdUb2dvJywgY29kZTogJ1RHJ30sXG4gICAge25hbWU6ICdUb2tlbGF1JywgY29kZTogJ1RLJ30sXG4gICAge25hbWU6ICdUb25nYScsIGNvZGU6ICdUTyd9LFxuICAgIHtuYW1lOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsIGNvZGU6ICdUVCd9LFxuICAgIHtuYW1lOiAnVHVuaXNpYScsIGNvZGU6ICdUTid9LFxuICAgIHtuYW1lOiAnVHVya2V5JywgY29kZTogJ1RSJ30sXG4gICAge25hbWU6ICdUdXJrbWVuaXN0YW4nLCBjb2RlOiAnVE0nfSxcbiAgICB7bmFtZTogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsIGNvZGU6ICdUQyd9LFxuICAgIHtuYW1lOiAnVHV2YWx1JywgY29kZTogJ1RWJ30sXG4gICAge25hbWU6ICdVZ2FuZGEnLCBjb2RlOiAnVUcnfSxcbiAgICB7bmFtZTogJ1VrcmFpbmUnLCBjb2RlOiAnVUEnfSxcbiAgICB7bmFtZTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJywgY29kZTogJ0FFJ30sXG4gICAge25hbWU6ICdVbml0ZWQgS2luZ2RvbScsIGNvZGU6ICdHQid9LFxuICAgIHtuYW1lOiAnVW5pdGVkIFN0YXRlcycsIGNvZGU6ICdVUyd9LFxuICAgIHtuYW1lOiAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzJywgY29kZTogJ1VNJ30sXG4gICAge25hbWU6ICdVcnVndWF5JywgY29kZTogJ1VZJ30sXG4gICAge25hbWU6ICdVemJla2lzdGFuJywgY29kZTogJ1VaJ30sXG4gICAge25hbWU6ICdWYW51YXR1JywgY29kZTogJ1ZVJ30sXG4gICAge25hbWU6ICdWZW5lenVlbGEnLCBjb2RlOiAnVkUnfSxcbiAgICB7bmFtZTogJ1ZpZXQgTmFtJywgY29kZTogJ1ZOJ30sXG4gICAge25hbWU6ICdWaXJnaW4gSXNsYW5kcywgQnJpdGlzaCcsIGNvZGU6ICdWRyd9LFxuICAgIHtuYW1lOiAnVmlyZ2luIElzbGFuZHMsIFUuUy4nLCBjb2RlOiAnVkknfSxcbiAgICB7bmFtZTogJ1dhbGxpcyBhbmQgRnV0dW5hJywgY29kZTogJ1dGJ30sXG4gICAge25hbWU6ICdXZXN0ZXJuIFNhaGFyYScsIGNvZGU6ICdFSCd9LFxuICAgIHtuYW1lOiAnWWVtZW4nLCBjb2RlOiAnWUUnfSxcbiAgICB7bmFtZTogJ1phbWJpYScsIGNvZGU6ICdaTSd9LFxuICAgIHtuYW1lOiAnWmltYmFid2UnLCBjb2RlOiAnWlcnfVxuXTtcblxudmFyIHNob3dDb3VudHJpZXMgPSBwcm9taXNlUGF0dGVybnMuY2h1bmsoaXRlbXMsXG4gICAgZnVuY3Rpb24oY291bnRyaWVzKSB7XG4gICAgICAgIF8uZWFjaChjb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50cnkubmFtZSk7XG4gICAgICAgIH0pXG4gICAgfSwgbnVsbCwge1xuICAgICAgICBpbnRlcnZhbCA6IDEwMDBcbiAgICB9KTtcblxudmFyIHNheUhlbGxvID0gcHJvbWlzZVBhdHRlcm5zLmxvb3AoXG4gICAge1xuICAgICAgICB4OjBcbiAgICB9LFxuICAgIGZ1bmN0aW9uIGd1YXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54IDwgMTA7XG4gICAgfSxcbiAgICBmdW5jdGlvbiBvcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvICcgKyB0aGlzLngpO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyAxO1xuICAgIH1cbik7XG5cbnNob3dDb3VudHJpZXMudGhlbihzYXlIZWxsbyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwpe1xuLyogQHByZXNlcnZlXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuLyoqXG4gKiBibHVlYmlyZCBidWlsZCB2ZXJzaW9uIDIuOS4zM1xuICogRmVhdHVyZXMgZW5hYmxlZDogY29yZSwgcmFjZSwgY2FsbF9nZXQsIGdlbmVyYXRvcnMsIG1hcCwgbm9kZWlmeSwgcHJvbWlzaWZ5LCBwcm9wcywgcmVkdWNlLCBzZXR0bGUsIHNvbWUsIGNhbmNlbCwgdXNpbmcsIGZpbHRlciwgYW55LCBlYWNoLCB0aW1lcnNcbiovXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxlKTtlbHNle3ZhciBmO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/Zj13aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9mPWdsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKGY9c2VsZiksZi5Qcm9taXNlPWUoKX19KGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiBfZGVyZXFfPT1cImZ1bmN0aW9uXCImJl9kZXJlcV87aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIF9kZXJlcV89PVwiZnVuY3Rpb25cIiYmX2RlcmVxXztmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciBTb21lUHJvbWlzZUFycmF5ID0gUHJvbWlzZS5fU29tZVByb21pc2VBcnJheTtcbmZ1bmN0aW9uIGFueShwcm9taXNlcykge1xuICAgIHZhciByZXQgPSBuZXcgU29tZVByb21pc2VBcnJheShwcm9taXNlcyk7XG4gICAgdmFyIHByb21pc2UgPSByZXQucHJvbWlzZSgpO1xuICAgIHJldC5zZXRIb3dNYW55KDEpO1xuICAgIHJldC5zZXRVbndyYXAoKTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLmFueSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIHJldHVybiBhbnkocHJvbWlzZXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhbnkodGhpcyk7XG59O1xuXG59O1xuXG59LHt9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIGZpcnN0TGluZUVycm9yO1xudHJ5IHt0aHJvdyBuZXcgRXJyb3IoKTsgfSBjYXRjaCAoZSkge2ZpcnN0TGluZUVycm9yID0gZTt9XG52YXIgc2NoZWR1bGUgPSBfZGVyZXFfKFwiLi9zY2hlZHVsZS5qc1wiKTtcbnZhciBRdWV1ZSA9IF9kZXJlcV8oXCIuL3F1ZXVlLmpzXCIpO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xuXG5mdW5jdGlvbiBBc3luYygpIHtcbiAgICB0aGlzLl9pc1RpY2tVc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fbGF0ZVF1ZXVlID0gbmV3IFF1ZXVlKDE2KTtcbiAgICB0aGlzLl9ub3JtYWxRdWV1ZSA9IG5ldyBRdWV1ZSgxNik7XG4gICAgdGhpcy5fdHJhbXBvbGluZUVuYWJsZWQgPSB0cnVlO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmRyYWluUXVldWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9kcmFpblF1ZXVlcygpO1xuICAgIH07XG4gICAgdGhpcy5fc2NoZWR1bGUgPVxuICAgICAgICBzY2hlZHVsZS5pc1N0YXRpYyA/IHNjaGVkdWxlKHRoaXMuZHJhaW5RdWV1ZXMpIDogc2NoZWR1bGU7XG59XG5cbkFzeW5jLnByb3RvdHlwZS5kaXNhYmxlVHJhbXBvbGluZUlmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHV0aWwuaGFzRGV2VG9vbHMpIHtcbiAgICAgICAgdGhpcy5fdHJhbXBvbGluZUVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuZW5hYmxlVHJhbXBvbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5fdHJhbXBvbGluZUVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fdHJhbXBvbGluZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaGF2ZUl0ZW1zUXVldWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxRdWV1ZS5sZW5ndGgoKSA+IDA7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUudGhyb3dMYXRlciA9IGZ1bmN0aW9uKGZuLCBhcmcpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBhcmcgPSBmbjtcbiAgICAgICAgZm4gPSBmdW5jdGlvbiAoKSB7IHRocm93IGFyZzsgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbihhcmcpO1xuICAgICAgICB9LCAwKTtcbiAgICB9IGVsc2UgdHJ5IHtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbihhcmcpO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFzeW5jIHNjaGVkdWxlciBhdmFpbGFibGVcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9tM09UWGtcXHUwMDBhXCIpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIEFzeW5jSW52b2tlTGF0ZXIoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0aGlzLl9sYXRlUXVldWUucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59XG5cbmZ1bmN0aW9uIEFzeW5jSW52b2tlKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgdGhpcy5fbm9ybWFsUXVldWUucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59XG5cbmZ1bmN0aW9uIEFzeW5jU2V0dGxlUHJvbWlzZXMocHJvbWlzZSkge1xuICAgIHRoaXMuX25vcm1hbFF1ZXVlLl9wdXNoT25lKHByb21pc2UpO1xuICAgIHRoaXMuX3F1ZXVlVGljaygpO1xufVxuXG5pZiAoIXV0aWwuaGFzRGV2VG9vbHMpIHtcbiAgICBBc3luYy5wcm90b3R5cGUuaW52b2tlTGF0ZXIgPSBBc3luY0ludm9rZUxhdGVyO1xuICAgIEFzeW5jLnByb3RvdHlwZS5pbnZva2UgPSBBc3luY0ludm9rZTtcbiAgICBBc3luYy5wcm90b3R5cGUuc2V0dGxlUHJvbWlzZXMgPSBBc3luY1NldHRsZVByb21pc2VzO1xufSBlbHNlIHtcbiAgICBpZiAoc2NoZWR1bGUuaXNTdGF0aWMpIHtcbiAgICAgICAgc2NoZWR1bGUgPSBmdW5jdGlvbihmbikgeyBzZXRUaW1lb3V0KGZuLCAwKTsgfTtcbiAgICB9XG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZUxhdGVyID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgQXN5bmNJbnZva2VMYXRlci5jYWxsKHRoaXMsIGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFzeW5jLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkKSB7XG4gICAgICAgICAgICBBc3luY0ludm9rZS5jYWxsKHRoaXMsIGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBc3luYy5wcm90b3R5cGUuc2V0dGxlUHJvbWlzZXMgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgQXN5bmNTZXR0bGVQcm9taXNlcy5jYWxsKHRoaXMsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fc2V0dGxlUHJvbWlzZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuQXN5bmMucHJvdG90eXBlLmludm9rZUZpcnN0ID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgdGhpcy5fbm9ybWFsUXVldWUudW5zaGlmdChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX2RyYWluUXVldWUgPSBmdW5jdGlvbihxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBmbi5fc2V0dGxlUHJvbWlzZXMoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWNlaXZlciA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHZhciBhcmcgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBmbi5jYWxsKHJlY2VpdmVyLCBhcmcpO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fZHJhaW5RdWV1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZHJhaW5RdWV1ZSh0aGlzLl9ub3JtYWxRdWV1ZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgICB0aGlzLl9kcmFpblF1ZXVlKHRoaXMuX2xhdGVRdWV1ZSk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX3F1ZXVlVGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX2lzVGlja1VzZWQpIHtcbiAgICAgICAgdGhpcy5faXNUaWNrVXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlKHRoaXMuZHJhaW5RdWV1ZXMpO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faXNUaWNrVXNlZCA9IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgQXN5bmMoKTtcbm1vZHVsZS5leHBvcnRzLmZpcnN0TGluZUVycm9yID0gZmlyc3RMaW5lRXJyb3I7XG5cbn0se1wiLi9xdWV1ZS5qc1wiOjI4LFwiLi9zY2hlZHVsZS5qc1wiOjMxLFwiLi91dGlsLmpzXCI6Mzh9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSkge1xudmFyIHJlamVjdFRoaXMgPSBmdW5jdGlvbihfLCBlKSB7XG4gICAgdGhpcy5fcmVqZWN0KGUpO1xufTtcblxudmFyIHRhcmdldFJlamVjdGVkID0gZnVuY3Rpb24oZSwgY29udGV4dCkge1xuICAgIGNvbnRleHQucHJvbWlzZVJlamVjdGlvblF1ZXVlZCA9IHRydWU7XG4gICAgY29udGV4dC5iaW5kaW5nUHJvbWlzZS5fdGhlbihyZWplY3RUaGlzLCByZWplY3RUaGlzLCBudWxsLCB0aGlzLCBlKTtcbn07XG5cbnZhciBiaW5kaW5nUmVzb2x2ZWQgPSBmdW5jdGlvbih0aGlzQXJnLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fc2V0Qm91bmRUbyh0aGlzQXJnKTtcbiAgICBpZiAodGhpcy5faXNQZW5kaW5nKCkpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUNhbGxiYWNrKGNvbnRleHQudGFyZ2V0KTtcbiAgICB9XG59O1xuXG52YXIgYmluZGluZ1JlamVjdGVkID0gZnVuY3Rpb24oZSwgY29udGV4dCkge1xuICAgIGlmICghY29udGV4dC5wcm9taXNlUmVqZWN0aW9uUXVldWVkKSB0aGlzLl9yZWplY3QoZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGlzQXJnKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCAxKTtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBwcm9taXNlUmVqZWN0aW9uUXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHByb21pc2U6IHJldCxcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgYmluZGluZ1Byb21pc2U6IG1heWJlUHJvbWlzZVxuICAgICAgICB9O1xuICAgICAgICB0YXJnZXQuX3RoZW4oSU5URVJOQUwsIHRhcmdldFJlamVjdGVkLCByZXQuX3Byb2dyZXNzLCByZXQsIGNvbnRleHQpO1xuICAgICAgICBtYXliZVByb21pc2UuX3RoZW4oXG4gICAgICAgICAgICBiaW5kaW5nUmVzb2x2ZWQsIGJpbmRpbmdSZWplY3RlZCwgcmV0Ll9wcm9ncmVzcywgcmV0LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUNhbGxiYWNrKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Qm91bmRUbyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEzMTA3MjtcbiAgICAgICAgdGhpcy5fYm91bmRUbyA9IG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4xMzEwNzIpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0JvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAxMzEwNzIpID09PSAxMzEwNzI7XG59O1xuXG5Qcm9taXNlLmJpbmQgPSBmdW5jdGlvbiAodGhpc0FyZywgdmFsdWUpIHtcbiAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGlzQXJnKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKGZ1bmN0aW9uKHRoaXNBcmcpIHtcbiAgICAgICAgICAgIHJldC5fc2V0Qm91bmRUbyh0aGlzQXJnKTtcbiAgICAgICAgICAgIHJldC5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgfSwgcmV0Ll9yZWplY3QsIHJldC5fcHJvZ3Jlc3MsIHJldCwgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0Ll9zZXRCb3VuZFRvKHRoaXNBcmcpO1xuICAgICAgICByZXQuX3Jlc29sdmVDYWxsYmFjayh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xufTtcblxufSx7fV0sNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBvbGQ7XG5pZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIpIG9sZCA9IFByb21pc2U7XG5mdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgIHRyeSB7IGlmIChQcm9taXNlID09PSBibHVlYmlyZCkgUHJvbWlzZSA9IG9sZDsgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBibHVlYmlyZDtcbn1cbnZhciBibHVlYmlyZCA9IF9kZXJlcV8oXCIuL3Byb21pc2UuanNcIikoKTtcbmJsdWViaXJkLm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xubW9kdWxlLmV4cG9ydHMgPSBibHVlYmlyZDtcblxufSx7XCIuL3Byb21pc2UuanNcIjoyM31dLDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY3IgPSBPYmplY3QuY3JlYXRlO1xuaWYgKGNyKSB7XG4gICAgdmFyIGNhbGxlckNhY2hlID0gY3IobnVsbCk7XG4gICAgdmFyIGdldHRlckNhY2hlID0gY3IobnVsbCk7XG4gICAgY2FsbGVyQ2FjaGVbXCIgc2l6ZVwiXSA9IGdldHRlckNhY2hlW1wiIHNpemVcIl0gPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgaXNJZGVudGlmaWVyID0gdXRpbC5pc0lkZW50aWZpZXI7XG5cbnZhciBnZXRNZXRob2RDYWxsZXI7XG52YXIgZ2V0R2V0dGVyO1xuaWYgKCF0cnVlKSB7XG52YXIgbWFrZU1ldGhvZENhbGxlciA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImVuc3VyZU1ldGhvZFwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBlbnN1cmVNZXRob2Qob2JqLCAnbWV0aG9kTmFtZScpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBzd2l0Y2gobGVuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSk7ICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSwgdGhpc1sxXSk7ICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7ICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmoubWV0aG9kTmFtZS5hcHBseShvYmosIHRoaXMpOyAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoL21ldGhvZE5hbWUvZywgbWV0aG9kTmFtZSkpKGVuc3VyZU1ldGhvZCk7XG59O1xuXG52YXIgbWFrZUdldHRlciA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwib2JqXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIG9iai5wcm9wZXJ0eU5hbWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZShcInByb3BlcnR5TmFtZVwiLCBwcm9wZXJ0eU5hbWUpKTtcbn07XG5cbnZhciBnZXRDb21waWxlZCA9IGZ1bmN0aW9uKG5hbWUsIGNvbXBpbGVyLCBjYWNoZSkge1xuICAgIHZhciByZXQgPSBjYWNoZVtuYW1lXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmICghaXNJZGVudGlmaWVyKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBjb21waWxlcihuYW1lKTtcbiAgICAgICAgY2FjaGVbbmFtZV0gPSByZXQ7XG4gICAgICAgIGNhY2hlW1wiIHNpemVcIl0rKztcbiAgICAgICAgaWYgKGNhY2hlW1wiIHNpemVcIl0gPiA1MTIpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY2FjaGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkgZGVsZXRlIGNhY2hlW2tleXNbaV1dO1xuICAgICAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSA9IGtleXMubGVuZ3RoIC0gMjU2O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5nZXRNZXRob2RDYWxsZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIGdldENvbXBpbGVkKG5hbWUsIG1ha2VNZXRob2RDYWxsZXIsIGNhbGxlckNhY2hlKTtcbn07XG5cbmdldEdldHRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZUdldHRlciwgZ2V0dGVyQ2FjaGUpO1xufTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlTWV0aG9kKG9iaiwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBmbjtcbiAgICBpZiAob2JqICE9IG51bGwpIGZuID0gb2JqW21ldGhvZE5hbWVdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IFwiT2JqZWN0IFwiICsgdXRpbC5jbGFzc1N0cmluZyhvYmopICsgXCIgaGFzIG5vIG1ldGhvZCAnXCIgK1xuICAgICAgICAgICAgdXRpbC50b1N0cmluZyhtZXRob2ROYW1lKSArIFwiJ1wiO1xuICAgICAgICB0aHJvdyBuZXcgUHJvbWlzZS5UeXBlRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY2FsbGVyKG9iaikge1xuICAgIHZhciBtZXRob2ROYW1lID0gdGhpcy5wb3AoKTtcbiAgICB2YXIgZm4gPSBlbnN1cmVNZXRob2Qob2JqLCBtZXRob2ROYW1lKTtcbiAgICByZXR1cm4gZm4uYXBwbHkob2JqLCB0aGlzKTtcbn1cblByb21pc2UucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7dmFyIGFyZ3MgPSBuZXcgQXJyYXkoJF9sZW4gLSAxKTsgZm9yKHZhciAkX2kgPSAxOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaSAtIDFdID0gYXJndW1lbnRzWyRfaV07fVxuICAgIGlmICghdHJ1ZSkge1xuICAgICAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZUNhbGxlciA9IGdldE1ldGhvZENhbGxlcihtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIGlmIChtYXliZUNhbGxlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgICAgICAgICBtYXliZUNhbGxlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFyZ3MsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJncy5wdXNoKG1ldGhvZE5hbWUpO1xuICAgIHJldHVybiB0aGlzLl90aGVuKGNhbGxlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFyZ3MsIHVuZGVmaW5lZCk7XG59O1xuXG5mdW5jdGlvbiBuYW1lZEdldHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqW3RoaXNdO1xufVxuZnVuY3Rpb24gaW5kZXhlZEdldHRlcihvYmopIHtcbiAgICB2YXIgaW5kZXggPSArdGhpcztcbiAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IE1hdGgubWF4KDAsIGluZGV4ICsgb2JqLmxlbmd0aCk7XG4gICAgcmV0dXJuIG9ialtpbmRleF07XG59XG5Qcm9taXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgdmFyIGlzSW5kZXggPSAodHlwZW9mIHByb3BlcnR5TmFtZSA9PT0gXCJudW1iZXJcIik7XG4gICAgdmFyIGdldHRlcjtcbiAgICBpZiAoIWlzSW5kZXgpIHtcbiAgICAgICAgaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICB2YXIgbWF5YmVHZXR0ZXIgPSBnZXRHZXR0ZXIocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIGdldHRlciA9IG1heWJlR2V0dGVyICE9PSBudWxsID8gbWF5YmVHZXR0ZXIgOiBuYW1lZEdldHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldHRlciA9IG5hbWVkR2V0dGVyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0dGVyID0gaW5kZXhlZEdldHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oZ2V0dGVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcHJvcGVydHlOYW1lLCB1bmRlZmluZWQpO1xufTtcbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSw2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgZXJyb3JzID0gX2RlcmVxXyhcIi4vZXJyb3JzLmpzXCIpO1xudmFyIGFzeW5jID0gX2RlcmVxXyhcIi4vYXN5bmMuanNcIik7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBlcnJvcnMuQ2FuY2VsbGF0aW9uRXJyb3I7XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWwgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHBhcmVudDtcbiAgICB2YXIgcHJvbWlzZVRvUmVqZWN0ID0gdGhpcztcbiAgICB3aGlsZSAoKHBhcmVudCA9IHByb21pc2VUb1JlamVjdC5fY2FuY2VsbGF0aW9uUGFyZW50KSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHBhcmVudC5pc0NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgcHJvbWlzZVRvUmVqZWN0ID0gcGFyZW50O1xuICAgIH1cbiAgICB0aGlzLl91bnNldENhbmNlbGxhYmxlKCk7XG4gICAgcHJvbWlzZVRvUmVqZWN0Ll90YXJnZXQoKS5fcmVqZWN0Q2FsbGJhY2socmVhc29uLCBmYWxzZSwgdHJ1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKHJlYXNvbiA9PT0gdW5kZWZpbmVkKSByZWFzb24gPSBuZXcgQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICBhc3luYy5pbnZva2VMYXRlcih0aGlzLl9jYW5jZWwsIHRoaXMsIHJlYXNvbik7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYW5jZWxsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fY2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgYXN5bmMuZW5hYmxlVHJhbXBvbGluZSgpO1xuICAgIHRoaXMuX3NldENhbmNlbGxhYmxlKCk7XG4gICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudW5jYW5jZWxsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmV0ID0gdGhpcy50aGVuKCk7XG4gICAgcmV0Ll91bnNldENhbmNlbGxhYmxlKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmZvcmsgPSBmdW5jdGlvbiAoZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcykge1xuICAgIHZhciByZXQgPSB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuXG4gICAgcmV0Ll9zZXRDYW5jZWxsYWJsZSgpO1xuICAgIHJldC5fY2FuY2VsbGF0aW9uUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXQ7XG59O1xufTtcblxufSx7XCIuL2FzeW5jLmpzXCI6MixcIi4vZXJyb3JzLmpzXCI6MTN9XSw3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbnZhciBhc3luYyA9IF9kZXJlcV8oXCIuL2FzeW5jLmpzXCIpO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGJsdWViaXJkRnJhbWVQYXR0ZXJuID1cbiAgICAvW1xcXFxcXC9dYmx1ZWJpcmRbXFxcXFxcL11qc1tcXFxcXFwvXShtYWlufGRlYnVnfHphbGdvfGluc3RydW1lbnRlZCkvO1xudmFyIHN0YWNrRnJhbWVQYXR0ZXJuID0gbnVsbDtcbnZhciBmb3JtYXRTdGFjayA9IG51bGw7XG52YXIgaW5kZW50U3RhY2tGcmFtZXMgPSBmYWxzZTtcbnZhciB3YXJuO1xuXG5mdW5jdGlvbiBDYXB0dXJlZFRyYWNlKHBhcmVudCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoID0gMSArIChwYXJlbnQgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJlbnQuX2xlbmd0aCk7XG4gICAgY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ2FwdHVyZWRUcmFjZSk7XG4gICAgaWYgKGxlbmd0aCA+IDMyKSB0aGlzLnVuY3ljbGUoKTtcbn1cbnV0aWwuaW5oZXJpdHMoQ2FwdHVyZWRUcmFjZSwgRXJyb3IpO1xuXG5DYXB0dXJlZFRyYWNlLnByb3RvdHlwZS51bmN5Y2xlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX2xlbmd0aDtcbiAgICBpZiAobGVuZ3RoIDwgMikgcmV0dXJuO1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIHZhciBzdGFja1RvSW5kZXggPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBub2RlID0gdGhpczsgbm9kZSAhPT0gdW5kZWZpbmVkOyArK2kpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgbm9kZSA9IG5vZGUuX3BhcmVudDtcbiAgICB9XG4gICAgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoID0gaTtcbiAgICBmb3IgKHZhciBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIHN0YWNrID0gbm9kZXNbaV0uc3RhY2s7XG4gICAgICAgIGlmIChzdGFja1RvSW5kZXhbc3RhY2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YWNrVG9JbmRleFtzdGFja10gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTdGFjayA9IG5vZGVzW2ldLnN0YWNrO1xuICAgICAgICB2YXIgaW5kZXggPSBzdGFja1RvSW5kZXhbY3VycmVudFN0YWNrXTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBub2Rlc1tpbmRleCAtIDFdLl9wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbm9kZXNbaW5kZXggLSAxXS5fbGVuZ3RoID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVzW2ldLl9wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBub2Rlc1tpXS5fbGVuZ3RoID0gMTtcbiAgICAgICAgICAgIHZhciBjeWNsZUVkZ2VOb2RlID0gaSA+IDAgPyBub2Rlc1tpIC0gMV0gOiB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fcGFyZW50ID0gbm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9wYXJlbnQudW5jeWNsZSgpO1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX2xlbmd0aCA9XG4gICAgICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX3BhcmVudC5fbGVuZ3RoICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX2xlbmd0aCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3VycmVudENoaWxkTGVuZ3RoID0gY3ljbGVFZGdlTm9kZS5fbGVuZ3RoICsgMTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpIC0gMjsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgICAgICBub2Rlc1tqXS5fbGVuZ3RoID0gY3VycmVudENoaWxkTGVuZ3RoO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDaGlsZExlbmd0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuQ2FwdHVyZWRUcmFjZS5wcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbn07XG5cbkNhcHR1cmVkVHJhY2UucHJvdG90eXBlLmhhc1BhcmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQgIT09IHVuZGVmaW5lZDtcbn07XG5cbkNhcHR1cmVkVHJhY2UucHJvdG90eXBlLmF0dGFjaEV4dHJhVHJhY2UgPSBmdW5jdGlvbihlcnJvcikge1xuICAgIGlmIChlcnJvci5fX3N0YWNrQ2xlYW5lZF9fKSByZXR1cm47XG4gICAgdGhpcy51bmN5Y2xlKCk7XG4gICAgdmFyIHBhcnNlZCA9IENhcHR1cmVkVHJhY2UucGFyc2VTdGFja0FuZE1lc3NhZ2UoZXJyb3IpO1xuICAgIHZhciBtZXNzYWdlID0gcGFyc2VkLm1lc3NhZ2U7XG4gICAgdmFyIHN0YWNrcyA9IFtwYXJzZWQuc3RhY2tdO1xuXG4gICAgdmFyIHRyYWNlID0gdGhpcztcbiAgICB3aGlsZSAodHJhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFja3MucHVzaChjbGVhblN0YWNrKHRyYWNlLnN0YWNrLnNwbGl0KFwiXFxuXCIpKSk7XG4gICAgICAgIHRyYWNlID0gdHJhY2UuX3BhcmVudDtcbiAgICB9XG4gICAgcmVtb3ZlQ29tbW9uUm9vdHMoc3RhY2tzKTtcbiAgICByZW1vdmVEdXBsaWNhdGVPckVtcHR5SnVtcHMoc3RhY2tzKTtcbiAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKGVycm9yLCBcInN0YWNrXCIsIHJlY29uc3RydWN0U3RhY2sobWVzc2FnZSwgc3RhY2tzKSk7XG4gICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChlcnJvciwgXCJfX3N0YWNrQ2xlYW5lZF9fXCIsIHRydWUpO1xufTtcblxuZnVuY3Rpb24gcmVjb25zdHJ1Y3RTdGFjayhtZXNzYWdlLCBzdGFja3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgc3RhY2tzW2ldLnB1c2goXCJGcm9tIHByZXZpb3VzIGV2ZW50OlwiKTtcbiAgICAgICAgc3RhY2tzW2ldID0gc3RhY2tzW2ldLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIGlmIChpIDwgc3RhY2tzLmxlbmd0aCkge1xuICAgICAgICBzdGFja3NbaV0gPSBzdGFja3NbaV0uam9pbihcIlxcblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2tzLmpvaW4oXCJcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZU9yRW1wdHlKdW1wcyhzdGFja3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoc3RhY2tzW2ldLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgKChpICsgMSA8IHN0YWNrcy5sZW5ndGgpICYmIHN0YWNrc1tpXVswXSA9PT0gc3RhY2tzW2krMV1bMF0pKSB7XG4gICAgICAgICAgICBzdGFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDb21tb25Sb290cyhzdGFja3MpIHtcbiAgICB2YXIgY3VycmVudCA9IHN0YWNrc1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHN0YWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgcHJldiA9IHN0YWNrc1tpXTtcbiAgICAgICAgdmFyIGN1cnJlbnRMYXN0SW5kZXggPSBjdXJyZW50Lmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBjdXJyZW50TGFzdExpbmUgPSBjdXJyZW50W2N1cnJlbnRMYXN0SW5kZXhdO1xuICAgICAgICB2YXIgY29tbW9uUm9vdE1lZXRQb2ludCA9IC0xO1xuXG4gICAgICAgIGZvciAodmFyIGogPSBwcmV2Lmxlbmd0aCAtIDE7IGogPj0gMDsgLS1qKSB7XG4gICAgICAgICAgICBpZiAocHJldltqXSA9PT0gY3VycmVudExhc3RMaW5lKSB7XG4gICAgICAgICAgICAgICAgY29tbW9uUm9vdE1lZXRQb2ludCA9IGo7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gY29tbW9uUm9vdE1lZXRQb2ludDsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gcHJldltqXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50W2N1cnJlbnRMYXN0SW5kZXhdID09PSBsaW5lKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5wb3AoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGFzdEluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBwcmV2O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5TdGFjayhzdGFjaykge1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsaW5lID0gc3RhY2tbaV07XG4gICAgICAgIHZhciBpc1RyYWNlTGluZSA9IHN0YWNrRnJhbWVQYXR0ZXJuLnRlc3QobGluZSkgfHxcbiAgICAgICAgICAgIFwiICAgIChObyBzdGFjayB0cmFjZSlcIiA9PT0gbGluZTtcbiAgICAgICAgdmFyIGlzSW50ZXJuYWxGcmFtZSA9IGlzVHJhY2VMaW5lICYmIHNob3VsZElnbm9yZShsaW5lKTtcbiAgICAgICAgaWYgKGlzVHJhY2VMaW5lICYmICFpc0ludGVybmFsRnJhbWUpIHtcbiAgICAgICAgICAgIGlmIChpbmRlbnRTdGFja0ZyYW1lcyAmJiBsaW5lLmNoYXJBdCgwKSAhPT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gXCIgICAgXCIgKyBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc3RhY2tGcmFtZXNBc0FycmF5KGVycm9yKSB7XG4gICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2sucmVwbGFjZSgvXFxzKyQvZywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgbGluZSA9IHN0YWNrW2ldO1xuICAgICAgICBpZiAoXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiID09PSBsaW5lIHx8IHN0YWNrRnJhbWVQYXR0ZXJuLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpID4gMCkge1xuICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhY2s7XG59XG5cbkNhcHR1cmVkVHJhY2UucGFyc2VTdGFja0FuZE1lc3NhZ2UgPSBmdW5jdGlvbihlcnJvcikge1xuICAgIHZhciBzdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIHZhciBtZXNzYWdlID0gZXJyb3IudG9TdHJpbmcoKTtcbiAgICBzdGFjayA9IHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIiAmJiBzdGFjay5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBzdGFja0ZyYW1lc0FzQXJyYXkoZXJyb3IpIDogW1wiICAgIChObyBzdGFjayB0cmFjZSlcIl07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgc3RhY2s6IGNsZWFuU3RhY2soc3RhY2spXG4gICAgfTtcbn07XG5cbkNhcHR1cmVkVHJhY2UuZm9ybWF0QW5kTG9nRXJyb3IgPSBmdW5jdGlvbihlcnJvciwgdGl0bGUpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBzdGFjayA9IGVycm9yLnN0YWNrO1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRpdGxlICsgZm9ybWF0U3RhY2soc3RhY2ssIGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aXRsZSArIFN0cmluZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3YXJuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHdhcm4obWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5DYXB0dXJlZFRyYWNlLnVuaGFuZGxlZFJlamVjdGlvbiA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICBDYXB0dXJlZFRyYWNlLmZvcm1hdEFuZExvZ0Vycm9yKHJlYXNvbiwgXCJeLS0tIFdpdGggYWRkaXRpb25hbCBzdGFjayB0cmFjZTogXCIpO1xufTtcblxuQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCI7XG59O1xuXG5DYXB0dXJlZFRyYWNlLmZpcmVSZWplY3Rpb25FdmVudCA9XG5mdW5jdGlvbihuYW1lLCBsb2NhbEhhbmRsZXIsIHJlYXNvbiwgcHJvbWlzZSkge1xuICAgIHZhciBsb2NhbEV2ZW50RmlyZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxvY2FsSGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBsb2NhbEV2ZW50RmlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwicmVqZWN0aW9uSGFuZGxlZFwiKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxIYW5kbGVyKHByb21pc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbEhhbmRsZXIocmVhc29uLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihlKTtcbiAgICB9XG5cbiAgICB2YXIgZ2xvYmFsRXZlbnRGaXJlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGdsb2JhbEV2ZW50RmlyZWQgPSBmaXJlR2xvYmFsRXZlbnQobmFtZSwgcmVhc29uLCBwcm9taXNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGdsb2JhbEV2ZW50RmlyZWQgPSB0cnVlO1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUpO1xuICAgIH1cblxuICAgIHZhciBkb21FdmVudEZpcmVkID0gZmFsc2U7XG4gICAgaWYgKGZpcmVEb21FdmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9tRXZlbnRGaXJlZCA9IGZpcmVEb21FdmVudChuYW1lLnRvTG93ZXJDYXNlKCksIHtcbiAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvbixcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9tRXZlbnRGaXJlZCA9IHRydWU7XG4gICAgICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFnbG9iYWxFdmVudEZpcmVkICYmICFsb2NhbEV2ZW50RmlyZWQgJiYgIWRvbUV2ZW50RmlyZWQgJiZcbiAgICAgICAgbmFtZSA9PT0gXCJ1bmhhbmRsZWRSZWplY3Rpb25cIikge1xuICAgICAgICBDYXB0dXJlZFRyYWNlLmZvcm1hdEFuZExvZ0Vycm9yKHJlYXNvbiwgXCJVbmhhbmRsZWQgcmVqZWN0aW9uIFwiKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXROb25FcnJvcihvYmopIHtcbiAgICB2YXIgc3RyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc3RyID0gXCJbZnVuY3Rpb24gXCIgK1xuICAgICAgICAgICAgKG9iai5uYW1lIHx8IFwiYW5vbnltb3VzXCIpICtcbiAgICAgICAgICAgIFwiXVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IG9iai50b1N0cmluZygpO1xuICAgICAgICB2YXIgcnVzZWxlc3NUb1N0cmluZyA9IC9cXFtvYmplY3QgW2EtekEtWjAtOSRfXStcXF0vO1xuICAgICAgICBpZiAocnVzZWxlc3NUb1N0cmluZy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1N0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgICAgICAgICAgc3RyID0gbmV3U3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHN0ciA9IFwiKGVtcHR5IGFycmF5KVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXCIoPFwiICsgc25pcChzdHIpICsgXCI+LCBubyBzdGFjayB0cmFjZSlcIik7XG59XG5cbmZ1bmN0aW9uIHNuaXAoc3RyKSB7XG4gICAgdmFyIG1heENoYXJzID0gNDE7XG4gICAgaWYgKHN0ci5sZW5ndGggPCBtYXhDaGFycykge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBtYXhDaGFycyAtIDMpICsgXCIuLi5cIjtcbn1cblxudmFyIHNob3VsZElnbm9yZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG52YXIgcGFyc2VMaW5lSW5mb1JlZ2V4ID0gL1tcXC88XFwoXShbXjpcXC9dKyk6KFxcZCspOig/OlxcZCspXFwpP1xccyokLztcbmZ1bmN0aW9uIHBhcnNlTGluZUluZm8obGluZSkge1xuICAgIHZhciBtYXRjaGVzID0gbGluZS5tYXRjaChwYXJzZUxpbmVJbmZvUmVnZXgpO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogbWF0Y2hlc1sxXSxcbiAgICAgICAgICAgIGxpbmU6IHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKVxuICAgICAgICB9O1xuICAgIH1cbn1cbkNhcHR1cmVkVHJhY2Uuc2V0Qm91bmRzID0gZnVuY3Rpb24oZmlyc3RMaW5lRXJyb3IsIGxhc3RMaW5lRXJyb3IpIHtcbiAgICBpZiAoIUNhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKSkgcmV0dXJuO1xuICAgIHZhciBmaXJzdFN0YWNrTGluZXMgPSBmaXJzdExpbmVFcnJvci5zdGFjay5zcGxpdChcIlxcblwiKTtcbiAgICB2YXIgbGFzdFN0YWNrTGluZXMgPSBsYXN0TGluZUVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICAgIHZhciBmaXJzdEluZGV4ID0gLTE7XG4gICAgdmFyIGxhc3RJbmRleCA9IC0xO1xuICAgIHZhciBmaXJzdEZpbGVOYW1lO1xuICAgIHZhciBsYXN0RmlsZU5hbWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaXJzdFN0YWNrTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlTGluZUluZm8oZmlyc3RTdGFja0xpbmVzW2ldKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgZmlyc3RGaWxlTmFtZSA9IHJlc3VsdC5maWxlTmFtZTtcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSByZXN1bHQubGluZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdFN0YWNrTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlTGluZUluZm8obGFzdFN0YWNrTGluZXNbaV0pO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBsYXN0RmlsZU5hbWUgPSByZXN1bHQuZmlsZU5hbWU7XG4gICAgICAgICAgICBsYXN0SW5kZXggPSByZXN1bHQubGluZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmaXJzdEluZGV4IDwgMCB8fCBsYXN0SW5kZXggPCAwIHx8ICFmaXJzdEZpbGVOYW1lIHx8ICFsYXN0RmlsZU5hbWUgfHxcbiAgICAgICAgZmlyc3RGaWxlTmFtZSAhPT0gbGFzdEZpbGVOYW1lIHx8IGZpcnN0SW5kZXggPj0gbGFzdEluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIGlmIChibHVlYmlyZEZyYW1lUGF0dGVybi50ZXN0KGxpbmUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIGluZm8gPSBwYXJzZUxpbmVJbmZvKGxpbmUpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8uZmlsZU5hbWUgPT09IGZpcnN0RmlsZU5hbWUgJiZcbiAgICAgICAgICAgICAgICAoZmlyc3RJbmRleCA8PSBpbmZvLmxpbmUgJiYgaW5mby5saW5lIDw9IGxhc3RJbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn07XG5cbnZhciBjYXB0dXJlU3RhY2tUcmFjZSA9IChmdW5jdGlvbiBzdGFja0RldGVjdGlvbigpIHtcbiAgICB2YXIgdjhzdGFja0ZyYW1lUGF0dGVybiA9IC9eXFxzKmF0XFxzKi87XG4gICAgdmFyIHY4c3RhY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgIGlmIChlcnJvci5uYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBFcnJvci5zdGFja1RyYWNlTGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgdHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICsgNjtcbiAgICAgICAgc3RhY2tGcmFtZVBhdHRlcm4gPSB2OHN0YWNrRnJhbWVQYXR0ZXJuO1xuICAgICAgICBmb3JtYXRTdGFjayA9IHY4c3RhY2tGb3JtYXR0ZXI7XG4gICAgICAgIHZhciBjYXB0dXJlU3RhY2tUcmFjZSA9IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlO1xuXG4gICAgICAgIHNob3VsZElnbm9yZSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBibHVlYmlyZEZyYW1lUGF0dGVybi50ZXN0KGxpbmUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ocmVjZWl2ZXIsIGlnbm9yZVVudGlsKSB7XG4gICAgICAgICAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBFcnJvci5zdGFja1RyYWNlTGltaXQgKyA2O1xuICAgICAgICAgICAgY2FwdHVyZVN0YWNrVHJhY2UocmVjZWl2ZXIsIGlnbm9yZVVudGlsKTtcbiAgICAgICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdCAtIDY7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmICh0eXBlb2YgZXJyLnN0YWNrID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgIGVyci5zdGFjay5zcGxpdChcIlxcblwiKVswXS5pbmRleE9mKFwic3RhY2tEZXRlY3Rpb25AXCIpID49IDApIHtcbiAgICAgICAgc3RhY2tGcmFtZVBhdHRlcm4gPSAvQC87XG4gICAgICAgIGZvcm1hdFN0YWNrID0gdjhzdGFja0Zvcm1hdHRlcjtcbiAgICAgICAgaW5kZW50U3RhY2tGcmFtZXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgby5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBoYXNTdGFja0FmdGVyVGhyb3c7XG4gICAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKCk7IH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIGhhc1N0YWNrQWZ0ZXJUaHJvdyA9IChcInN0YWNrXCIgaW4gZSk7XG4gICAgfVxuICAgIGlmICghKFwic3RhY2tcIiBpbiBlcnIpICYmIGhhc1N0YWNrQWZ0ZXJUaHJvdyAmJlxuICAgICAgICB0eXBlb2YgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHN0YWNrRnJhbWVQYXR0ZXJuID0gdjhzdGFja0ZyYW1lUGF0dGVybjtcbiAgICAgICAgZm9ybWF0U3RhY2sgPSB2OHN0YWNrRm9ybWF0dGVyO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICsgNjtcbiAgICAgICAgICAgIHRyeSB7IHRocm93IG5ldyBFcnJvcigpOyB9XG4gICAgICAgICAgICBjYXRjaChlKSB7IG8uc3RhY2sgPSBlLnN0YWNrOyB9XG4gICAgICAgICAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBFcnJvci5zdGFja1RyYWNlTGltaXQgLSA2O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdFN0YWNrID0gZnVuY3Rpb24oc3RhY2ssIGVycm9yKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIpIHJldHVybiBzdGFjaztcblxuICAgICAgICBpZiAoKHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGVycm9yID09PSBcImZ1bmN0aW9uXCIpICYmXG4gICAgICAgICAgICBlcnJvci5uYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG51bGw7XG5cbn0pKFtdKTtcblxudmFyIGZpcmVEb21FdmVudDtcbnZhciBmaXJlR2xvYmFsRXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHV0aWwuaXNOb2RlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihuYW1lLCByZWFzb24sIHByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcInJlamVjdGlvbkhhbmRsZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVtaXQobmFtZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVtaXQobmFtZSwgcmVhc29uLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VzdG9tRXZlbnRXb3JrcyA9IGZhbHNlO1xuICAgICAgICB2YXIgYW55RXZlbnRXb3JrcyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgZXYgPSBuZXcgc2VsZi5DdXN0b21FdmVudChcInRlc3RcIik7XG4gICAgICAgICAgICBjdXN0b21FdmVudFdvcmtzID0gZXYgaW5zdGFuY2VvZiBDdXN0b21FdmVudDtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgaWYgKCFjdXN0b21FdmVudFdvcmtzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KFwidGVzdGluZ3RoZWV2ZW50XCIsIGZhbHNlLCB0cnVlLCB7fSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBhbnlFdmVudFdvcmtzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFueUV2ZW50V29ya3MpIHtcbiAgICAgICAgICAgIGZpcmVEb21FdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGRldGFpbCkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudDtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tRXZlbnRXb3Jrcykge1xuICAgICAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBzZWxmLkN1c3RvbUV2ZW50KHR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogZGV0YWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5kaXNwYXRjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCB0cnVlLCBkZXRhaWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudCA/ICFzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpIDogZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvV2luZG93TWV0aG9kTmFtZU1hcCA9IHt9O1xuICAgICAgICB0b1dpbmRvd01ldGhvZE5hbWVNYXBbXCJ1bmhhbmRsZWRSZWplY3Rpb25cIl0gPSAoXCJvblwiICtcbiAgICAgICAgICAgIFwidW5oYW5kbGVkUmVqZWN0aW9uXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRvV2luZG93TWV0aG9kTmFtZU1hcFtcInJlamVjdGlvbkhhbmRsZWRcIl0gPSAoXCJvblwiICtcbiAgICAgICAgICAgIFwicmVqZWN0aW9uSGFuZGxlZFwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihuYW1lLCByZWFzb24sIHByb21pc2UpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gdG9XaW5kb3dNZXRob2ROYW1lTWFwW25hbWVdO1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHNlbGZbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwicmVqZWN0aW9uSGFuZGxlZFwiKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwoc2VsZiwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKHNlbGYsIHJlYXNvbiwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9XG59KSgpO1xuXG5pZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUud2FybiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdhcm4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfTtcbiAgICBpZiAodXRpbC5pc05vZGUgJiYgcHJvY2Vzcy5zdGRlcnIuaXNUVFkpIHtcbiAgICAgICAgd2FybiA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFwiXFx1MDAxYlszMW1cIiArIG1lc3NhZ2UgKyBcIlxcdTAwMWJbMzltXFxuXCIpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIXV0aWwuaXNOb2RlICYmIHR5cGVvZiAobmV3IEVycm9yKCkuc3RhY2spID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHdhcm4gPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCIlY1wiICsgbWVzc2FnZSwgXCJjb2xvcjogcmVkXCIpO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxucmV0dXJuIENhcHR1cmVkVHJhY2U7XG59O1xuXG59LHtcIi4vYXN5bmMuanNcIjoyLFwiLi91dGlsLmpzXCI6Mzh9XSw4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihORVhUX0ZJTFRFUikge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGVycm9ycyA9IF9kZXJlcV8oXCIuL2Vycm9ycy5qc1wiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGtleXMgPSBfZGVyZXFfKFwiLi9lczUuanNcIikua2V5cztcbnZhciBUeXBlRXJyb3IgPSBlcnJvcnMuVHlwZUVycm9yO1xuXG5mdW5jdGlvbiBDYXRjaEZpbHRlcihpbnN0YW5jZXMsIGNhbGxiYWNrLCBwcm9taXNlKSB7XG4gICAgdGhpcy5faW5zdGFuY2VzID0gaW5zdGFuY2VzO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHNhZmVQcmVkaWNhdGUocHJlZGljYXRlLCBlKSB7XG4gICAgdmFyIHNhZmVPYmplY3QgPSB7fTtcbiAgICB2YXIgcmV0ZmlsdGVyID0gdHJ5Q2F0Y2gocHJlZGljYXRlKS5jYWxsKHNhZmVPYmplY3QsIGUpO1xuXG4gICAgaWYgKHJldGZpbHRlciA9PT0gZXJyb3JPYmopIHJldHVybiByZXRmaWx0ZXI7XG5cbiAgICB2YXIgc2FmZUtleXMgPSBrZXlzKHNhZmVPYmplY3QpO1xuICAgIGlmIChzYWZlS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IG5ldyBUeXBlRXJyb3IoXCJDYXRjaCBmaWx0ZXIgbXVzdCBpbmhlcml0IGZyb20gRXJyb3Igb3IgYmUgYSBzaW1wbGUgcHJlZGljYXRlIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvbzg0bzY4XFx1MDAwYVwiKTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbiAgICByZXR1cm4gcmV0ZmlsdGVyO1xufVxuXG5DYXRjaEZpbHRlci5wcm90b3R5cGUuZG9GaWx0ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjYiA9IHRoaXMuX2NhbGxiYWNrO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZTtcbiAgICB2YXIgYm91bmRUbyA9IHByb21pc2UuX2JvdW5kVG87XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuX2luc3RhbmNlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuX2luc3RhbmNlc1tpXTtcbiAgICAgICAgdmFyIGl0ZW1Jc0Vycm9yVHlwZSA9IGl0ZW0gPT09IEVycm9yIHx8XG4gICAgICAgICAgICAoaXRlbSAhPSBudWxsICYmIGl0ZW0ucHJvdG90eXBlIGluc3RhbmNlb2YgRXJyb3IpO1xuXG4gICAgICAgIGlmIChpdGVtSXNFcnJvclR5cGUgJiYgZSBpbnN0YW5jZW9mIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciByZXQgPSB0cnlDYXRjaChjYikuY2FsbChib3VuZFRvLCBlKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgTkVYVF9GSUxURVIuZSA9IHJldC5lO1xuICAgICAgICAgICAgICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIiAmJiAhaXRlbUlzRXJyb3JUeXBlKSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkSGFuZGxlID0gc2FmZVByZWRpY2F0ZShpdGVtLCBlKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRIYW5kbGUgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgZSA9IGVycm9yT2JqLmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB0cnlDYXRjaChjYikuY2FsbChib3VuZFRvLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgICAgICBORVhUX0ZJTFRFUi5lID0gcmV0LmU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBORVhUX0ZJTFRFUi5lID0gZTtcbiAgICByZXR1cm4gTkVYVF9GSUxURVI7XG59O1xuXG5yZXR1cm4gQ2F0Y2hGaWx0ZXI7XG59O1xuXG59LHtcIi4vZXJyb3JzLmpzXCI6MTMsXCIuL2VzNS5qc1wiOjE0LFwiLi91dGlsLmpzXCI6Mzh9XSw5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBDYXB0dXJlZFRyYWNlLCBpc0RlYnVnZ2luZykge1xudmFyIGNvbnRleHRTdGFjayA9IFtdO1xuZnVuY3Rpb24gQ29udGV4dCgpIHtcbiAgICB0aGlzLl90cmFjZSA9IG5ldyBDYXB0dXJlZFRyYWNlKHBlZWtDb250ZXh0KCkpO1xufVxuQ29udGV4dC5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNEZWJ1Z2dpbmcoKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLl90cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHRTdGFjay5wdXNoKHRoaXMuX3RyYWNlKTtcbiAgICB9XG59O1xuXG5Db250ZXh0LnByb3RvdHlwZS5fcG9wQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzRGVidWdnaW5nKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5fdHJhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0U3RhY2sucG9wKCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dCgpIHtcbiAgICBpZiAoaXNEZWJ1Z2dpbmcoKSkgcmV0dXJuIG5ldyBDb250ZXh0KCk7XG59XG5cbmZ1bmN0aW9uIHBlZWtDb250ZXh0KCkge1xuICAgIHZhciBsYXN0SW5kZXggPSBjb250ZXh0U3RhY2subGVuZ3RoIC0gMTtcbiAgICBpZiAobGFzdEluZGV4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRTdGFja1tsYXN0SW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5fcGVla0NvbnRleHQgPSBwZWVrQ29udGV4dDtcblByb21pc2UucHJvdG90eXBlLl9wdXNoQ29udGV4dCA9IENvbnRleHQucHJvdG90eXBlLl9wdXNoQ29udGV4dDtcblByb21pc2UucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gQ29udGV4dC5wcm90b3R5cGUuX3BvcENvbnRleHQ7XG5cbnJldHVybiBjcmVhdGVDb250ZXh0O1xufTtcblxufSx7fV0sMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIENhcHR1cmVkVHJhY2UpIHtcbnZhciBnZXREb21haW4gPSBQcm9taXNlLl9nZXREb21haW47XG52YXIgYXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luYy5qc1wiKTtcbnZhciBXYXJuaW5nID0gX2RlcmVxXyhcIi4vZXJyb3JzLmpzXCIpLldhcm5pbmc7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgY2FuQXR0YWNoVHJhY2UgPSB1dGlsLmNhbkF0dGFjaFRyYWNlO1xudmFyIHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQ7XG52YXIgcG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb247XG52YXIgZGVidWdnaW5nID0gZmFsc2UgfHwgKHV0aWwuaXNOb2RlICYmXG4gICAgICAgICAgICAgICAgICAgICghIXByb2Nlc3MuZW52W1wiQkxVRUJJUkRfREVCVUdcIl0gfHxcbiAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52W1wiTk9ERV9FTlZcIl0gPT09IFwiZGV2ZWxvcG1lbnRcIikpO1xuXG5pZiAoZGVidWdnaW5nKSB7XG4gICAgYXN5bmMuZGlzYWJsZVRyYW1wb2xpbmVJZk5lY2Vzc2FyeSgpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5faWdub3JlUmVqZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTY3NzcyMTY7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgodGhpcy5fYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApIHJldHVybjtcbiAgICB0aGlzLl9zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIGFzeW5jLmludm9rZUxhdGVyKHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbiwgdGhpcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgQ2FwdHVyZWRUcmFjZS5maXJlUmVqZWN0aW9uRXZlbnQoXCJyZWplY3Rpb25IYW5kbGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCwgdW5kZWZpbmVkLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHtcbiAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuX2dldENhcnJpZWRTdGFja1RyYWNlKCkgfHwgdGhpcy5fc2V0dGxlZFZhbHVlO1xuICAgICAgICB0aGlzLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG4gICAgICAgIENhcHR1cmVkVHJhY2UuZmlyZVJlamVjdGlvbkV2ZW50KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uLCByZWFzb24sIHRoaXMpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA1MjQyODg7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjUyNDI4OCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNVbmhhbmRsZWRSZWplY3Rpb25Ob3RpZmllZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNTI0Mjg4KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDIwOTcxNTI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4yMDk3MTUyKTtcbiAgICBpZiAodGhpcy5faXNVbmhhbmRsZWRSZWplY3Rpb25Ob3RpZmllZCgpKSB7XG4gICAgICAgIHRoaXMuX3Vuc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpO1xuICAgICAgICB0aGlzLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNSZWplY3Rpb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDIwOTcxNTIpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSA9IGZ1bmN0aW9uIChjYXB0dXJlZFRyYWNlKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEwNDg1NzY7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IGNhcHR1cmVkVHJhY2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNDYXJyeWluZ1N0YWNrVHJhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEwNDg1NzYpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9nZXRDYXJyaWVkU3RhY2tUcmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNDYXJyeWluZ1N0YWNrVHJhY2UoKVxuICAgICAgICA/IHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjBcbiAgICAgICAgOiB1bmRlZmluZWQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FwdHVyZVN0YWNrVHJhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICB0aGlzLl90cmFjZSA9IG5ldyBDYXB0dXJlZFRyYWNlKHRoaXMuX3BlZWtDb250ZXh0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlID0gZnVuY3Rpb24gKGVycm9yLCBpZ25vcmVTZWxmKSB7XG4gICAgaWYgKGRlYnVnZ2luZyAmJiBjYW5BdHRhY2hUcmFjZShlcnJvcikpIHtcbiAgICAgICAgdmFyIHRyYWNlID0gdGhpcy5fdHJhY2U7XG4gICAgICAgIGlmICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlU2VsZikgdHJhY2UgPSB0cmFjZS5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cmFjZS5hdHRhY2hFeHRyYVRyYWNlKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICghZXJyb3IuX19zdGFja0NsZWFuZWRfXykge1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IENhcHR1cmVkVHJhY2UucGFyc2VTdGFja0FuZE1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChlcnJvciwgXCJzdGFja1wiLFxuICAgICAgICAgICAgICAgIHBhcnNlZC5tZXNzYWdlICsgXCJcXG5cIiArIHBhcnNlZC5zdGFjay5qb2luKFwiXFxuXCIpKTtcbiAgICAgICAgICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AoZXJyb3IsIFwiX19zdGFja0NsZWFuZWRfX1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl93YXJuID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHZhciB3YXJuaW5nID0gbmV3IFdhcm5pbmcobWVzc2FnZSk7XG4gICAgdmFyIGN0eCA9IHRoaXMuX3BlZWtDb250ZXh0KCk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgICBjdHguYXR0YWNoRXh0cmFUcmFjZSh3YXJuaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyc2VkID0gQ2FwdHVyZWRUcmFjZS5wYXJzZVN0YWNrQW5kTWVzc2FnZSh3YXJuaW5nKTtcbiAgICAgICAgd2FybmluZy5zdGFjayA9IHBhcnNlZC5tZXNzYWdlICsgXCJcXG5cIiArIHBhcnNlZC5zdGFjay5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICBDYXB0dXJlZFRyYWNlLmZvcm1hdEFuZExvZ0Vycm9yKHdhcm5pbmcsIFwiXCIpO1xufTtcblxuUHJvbWlzZS5vblBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGRvbWFpbiA9IGdldERvbWFpbigpO1xuICAgIHBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uID1cbiAgICAgICAgdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgPyAoZG9tYWluID09PSBudWxsID8gZm4gOiBkb21haW4uYmluZChmbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbn07XG5cblByb21pc2Uub25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGRvbWFpbiA9IGdldERvbWFpbigpO1xuICAgIHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPVxuICAgICAgICB0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiA/IChkb21haW4gPT09IG51bGwgPyBmbiA6IGRvbWFpbi5iaW5kKGZuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xufTtcblxuUHJvbWlzZS5sb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFzeW5jLmhhdmVJdGVtc1F1ZXVlZCgpICYmXG4gICAgICAgIGRlYnVnZ2luZyA9PT0gZmFsc2VcbiAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgZW5hYmxlIGxvbmcgc3RhY2sgdHJhY2VzIGFmdGVyIHByb21pc2VzIGhhdmUgYmVlbiBjcmVhdGVkXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvRFQxcXlHXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgZGVidWdnaW5nID0gQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCgpO1xuICAgIGlmIChkZWJ1Z2dpbmcpIHtcbiAgICAgICAgYXN5bmMuZGlzYWJsZVRyYW1wb2xpbmVJZk5lY2Vzc2FyeSgpO1xuICAgIH1cbn07XG5cblByb21pc2UuaGFzTG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWJ1Z2dpbmcgJiYgQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCgpO1xufTtcblxuaWYgKCFDYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICBQcm9taXNlLmxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCl7fTtcbiAgICBkZWJ1Z2dpbmcgPSBmYWxzZTtcbn1cblxucmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWJ1Z2dpbmc7XG59O1xufTtcblxufSx7XCIuL2FzeW5jLmpzXCI6MixcIi4vZXJyb3JzLmpzXCI6MTMsXCIuL3V0aWwuanNcIjozOH1dLDExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGlzUHJpbWl0aXZlID0gdXRpbC5pc1ByaW1pdGl2ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgcmV0dXJuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xudmFyIHRocm93ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgdGhpcztcbn07XG52YXIgcmV0dXJuVW5kZWZpbmVkID0gZnVuY3Rpb24oKSB7fTtcbnZhciB0aHJvd1VuZGVmaW5lZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IHVuZGVmaW5lZDtcbn07XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gMikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cblxuUHJvbWlzZS5wcm90b3R5cGVbXCJyZXR1cm5cIl0gPVxuUHJvbWlzZS5wcm90b3R5cGUudGhlblJldHVybiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy50aGVuKHJldHVyblVuZGVmaW5lZCk7XG5cbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgd3JhcHBlcih2YWx1ZSwgMiksXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihyZXR1cm5lciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZhbHVlLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuVGhyb3cgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKHJlYXNvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy50aGVuKHRocm93VW5kZWZpbmVkKTtcblxuICAgIGlmIChpc1ByaW1pdGl2ZShyZWFzb24pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgd3JhcHBlcihyZWFzb24sIDEpLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4odGhyb3dlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlYXNvbiwgdW5kZWZpbmVkKTtcbn07XG59O1xuXG59LHtcIi4vdXRpbC5qc1wiOjM4fV0sMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgUHJvbWlzZVJlZHVjZSA9IFByb21pc2UucmVkdWNlO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5lYWNoID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIFByb21pc2VSZWR1Y2UodGhpcywgZm4sIG51bGwsIElOVEVSTkFMKTtcbn07XG5cblByb21pc2UuZWFjaCA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZShwcm9taXNlcywgZm4sIG51bGwsIElOVEVSTkFMKTtcbn07XG59O1xuXG59LHt9XSwxMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczUuanNcIik7XG52YXIgT2JqZWN0ZnJlZXplID0gZXM1LmZyZWV6ZTtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBpbmhlcml0cyA9IHV0aWwuaW5oZXJpdHM7XG52YXIgbm90RW51bWVyYWJsZVByb3AgPSB1dGlsLm5vdEVudW1lcmFibGVQcm9wO1xuXG5mdW5jdGlvbiBzdWJFcnJvcihuYW1lUHJvcGVydHksIGRlZmF1bHRNZXNzYWdlKSB7XG4gICAgZnVuY3Rpb24gU3ViRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3ViRXJyb3IpKSByZXR1cm4gbmV3IFN1YkVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJuYW1lXCIsIG5hbWVQcm9wZXJ0eSk7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaGVyaXRzKFN1YkVycm9yLCBFcnJvcik7XG4gICAgcmV0dXJuIFN1YkVycm9yO1xufVxuXG52YXIgX1R5cGVFcnJvciwgX1JhbmdlRXJyb3I7XG52YXIgV2FybmluZyA9IHN1YkVycm9yKFwiV2FybmluZ1wiLCBcIndhcm5pbmdcIik7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBzdWJFcnJvcihcIkNhbmNlbGxhdGlvbkVycm9yXCIsIFwiY2FuY2VsbGF0aW9uIGVycm9yXCIpO1xudmFyIFRpbWVvdXRFcnJvciA9IHN1YkVycm9yKFwiVGltZW91dEVycm9yXCIsIFwidGltZW91dCBlcnJvclwiKTtcbnZhciBBZ2dyZWdhdGVFcnJvciA9IHN1YkVycm9yKFwiQWdncmVnYXRlRXJyb3JcIiwgXCJhZ2dyZWdhdGUgZXJyb3JcIik7XG50cnkge1xuICAgIF9UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4gICAgX1JhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xufSBjYXRjaChlKSB7XG4gICAgX1R5cGVFcnJvciA9IHN1YkVycm9yKFwiVHlwZUVycm9yXCIsIFwidHlwZSBlcnJvclwiKTtcbiAgICBfUmFuZ2VFcnJvciA9IHN1YkVycm9yKFwiUmFuZ2VFcnJvclwiLCBcInJhbmdlIGVycm9yXCIpO1xufVxuXG52YXIgbWV0aG9kcyA9IChcImpvaW4gcG9wIHB1c2ggc2hpZnQgdW5zaGlmdCBzbGljZSBmaWx0ZXIgZm9yRWFjaCBzb21lIFwiICtcbiAgICBcImV2ZXJ5IG1hcCBpbmRleE9mIGxhc3RJbmRleE9mIHJlZHVjZSByZWR1Y2VSaWdodCBzb3J0IHJldmVyc2VcIikuc3BsaXQoXCIgXCIpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZVttZXRob2RzW2ldXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIEFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZVttZXRob2RzW2ldXSA9IEFycmF5LnByb3RvdHlwZVttZXRob2RzW2ldXTtcbiAgICB9XG59XG5cbmVzNS5kZWZpbmVQcm9wZXJ0eShBZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICB2YWx1ZTogMCxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbn0pO1xuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlW1wiaXNPcGVyYXRpb25hbFwiXSA9IHRydWU7XG52YXIgbGV2ZWwgPSAwO1xuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGVudCA9IEFycmF5KGxldmVsICogNCArIDEpLmpvaW4oXCIgXCIpO1xuICAgIHZhciByZXQgPSBcIlxcblwiICsgaW5kZW50ICsgXCJBZ2dyZWdhdGVFcnJvciBvZjpcIiArIFwiXFxuXCI7XG4gICAgbGV2ZWwrKztcbiAgICBpbmRlbnQgPSBBcnJheShsZXZlbCAqIDQgKyAxKS5qb2luKFwiIFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXNbaV0gPT09IHRoaXMgPyBcIltDaXJjdWxhciBBZ2dyZWdhdGVFcnJvcl1cIiA6IHRoaXNbaV0gKyBcIlwiO1xuICAgICAgICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGluZXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGxpbmVzW2pdID0gaW5kZW50ICsgbGluZXNbal07XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gbGluZXMuam9pbihcIlxcblwiKTtcbiAgICAgICAgcmV0ICs9IHN0ciArIFwiXFxuXCI7XG4gICAgfVxuICAgIGxldmVsLS07XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIE9wZXJhdGlvbmFsRXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBPcGVyYXRpb25hbEVycm9yKSlcbiAgICAgICAgcmV0dXJuIG5ldyBPcGVyYXRpb25hbEVycm9yKG1lc3NhZ2UpO1xuICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwibmFtZVwiLCBcIk9wZXJhdGlvbmFsRXJyb3JcIik7XG4gICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgIHRoaXMuY2F1c2UgPSBtZXNzYWdlO1xuICAgIHRoaXNbXCJpc09wZXJhdGlvbmFsXCJdID0gdHJ1ZTtcblxuICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJtZXNzYWdlXCIsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwic3RhY2tcIiwgbWVzc2FnZS5zdGFjayk7XG4gICAgfSBlbHNlIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbn1cbmluaGVyaXRzKE9wZXJhdGlvbmFsRXJyb3IsIEVycm9yKTtcblxudmFyIGVycm9yVHlwZXMgPSBFcnJvcltcIl9fQmx1ZWJpcmRFcnJvclR5cGVzX19cIl07XG5pZiAoIWVycm9yVHlwZXMpIHtcbiAgICBlcnJvclR5cGVzID0gT2JqZWN0ZnJlZXplKHtcbiAgICAgICAgQ2FuY2VsbGF0aW9uRXJyb3I6IENhbmNlbGxhdGlvbkVycm9yLFxuICAgICAgICBUaW1lb3V0RXJyb3I6IFRpbWVvdXRFcnJvcixcbiAgICAgICAgT3BlcmF0aW9uYWxFcnJvcjogT3BlcmF0aW9uYWxFcnJvcixcbiAgICAgICAgUmVqZWN0aW9uRXJyb3I6IE9wZXJhdGlvbmFsRXJyb3IsXG4gICAgICAgIEFnZ3JlZ2F0ZUVycm9yOiBBZ2dyZWdhdGVFcnJvclxuICAgIH0pO1xuICAgIG5vdEVudW1lcmFibGVQcm9wKEVycm9yLCBcIl9fQmx1ZWJpcmRFcnJvclR5cGVzX19cIiwgZXJyb3JUeXBlcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEVycm9yOiBFcnJvcixcbiAgICBUeXBlRXJyb3I6IF9UeXBlRXJyb3IsXG4gICAgUmFuZ2VFcnJvcjogX1JhbmdlRXJyb3IsXG4gICAgQ2FuY2VsbGF0aW9uRXJyb3I6IGVycm9yVHlwZXMuQ2FuY2VsbGF0aW9uRXJyb3IsXG4gICAgT3BlcmF0aW9uYWxFcnJvcjogZXJyb3JUeXBlcy5PcGVyYXRpb25hbEVycm9yLFxuICAgIFRpbWVvdXRFcnJvcjogZXJyb3JUeXBlcy5UaW1lb3V0RXJyb3IsXG4gICAgQWdncmVnYXRlRXJyb3I6IGVycm9yVHlwZXMuQWdncmVnYXRlRXJyb3IsXG4gICAgV2FybmluZzogV2FybmluZ1xufTtcblxufSx7XCIuL2VzNS5qc1wiOjE0LFwiLi91dGlsLmpzXCI6Mzh9XSwxNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNFUzUgPSAoZnVuY3Rpb24oKXtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICByZXR1cm4gdGhpcyA9PT0gdW5kZWZpbmVkO1xufSkoKTtcblxuaWYgKGlzRVM1KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGZyZWV6ZTogT2JqZWN0LmZyZWV6ZSxcbiAgICAgICAgZGVmaW5lUHJvcGVydHk6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAgZ2V0RGVzY3JpcHRvcjogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICAgICAga2V5czogT2JqZWN0LmtleXMsXG4gICAgICAgIG5hbWVzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICAgICAgZ2V0UHJvdG90eXBlT2Y6IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNBcnJheTogQXJyYXkuaXNBcnJheSxcbiAgICAgICAgaXNFUzU6IGlzRVM1LFxuICAgICAgICBwcm9wZXJ0eUlzV3JpdGFibGU6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgICAgICAgICByZXR1cm4gISEoIWRlc2NyaXB0b3IgfHwgZGVzY3JpcHRvci53cml0YWJsZSB8fCBkZXNjcmlwdG9yLnNldCk7XG4gICAgICAgIH1cbiAgICB9O1xufSBlbHNlIHtcbiAgICB2YXIgaGFzID0ge30uaGFzT3duUHJvcGVydHk7XG4gICAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nO1xuICAgIHZhciBwcm90byA9IHt9LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxuICAgIHZhciBPYmplY3RLZXlzID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbykge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKG8sIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIHZhciBPYmplY3RHZXREZXNjcmlwdG9yID0gZnVuY3Rpb24obywga2V5KSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IG9ba2V5XX07XG4gICAgfTtcblxuICAgIHZhciBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvLCBrZXksIGRlc2MpIHtcbiAgICAgICAgb1trZXldID0gZGVzYy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHZhciBPYmplY3RGcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIHZhciBPYmplY3RHZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qob2JqKS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQXJyYXlJc0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGlzQXJyYXk6IEFycmF5SXNBcnJheSxcbiAgICAgICAga2V5czogT2JqZWN0S2V5cyxcbiAgICAgICAgbmFtZXM6IE9iamVjdEtleXMsXG4gICAgICAgIGRlZmluZVByb3BlcnR5OiBPYmplY3REZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAgZ2V0RGVzY3JpcHRvcjogT2JqZWN0R2V0RGVzY3JpcHRvcixcbiAgICAgICAgZnJlZXplOiBPYmplY3RGcmVlemUsXG4gICAgICAgIGdldFByb3RvdHlwZU9mOiBPYmplY3RHZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNFUzU6IGlzRVM1LFxuICAgICAgICBwcm9wZXJ0eUlzV3JpdGFibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG59LHt9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBQcm9taXNlTWFwID0gUHJvbWlzZS5tYXA7XG5cblByb21pc2UucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBQcm9taXNlTWFwKHRoaXMsIGZuLCBvcHRpb25zLCBJTlRFUk5BTCk7XG59O1xuXG5Qcm9taXNlLmZpbHRlciA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIElOVEVSTkFMKTtcbn07XG59O1xuXG59LHt9XSwxNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgTkVYVF9GSUxURVIsIHRyeUNvbnZlcnRUb1Byb21pc2UpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBpc1ByaW1pdGl2ZSA9IHV0aWwuaXNQcmltaXRpdmU7XG52YXIgdGhyb3dlciA9IHV0aWwudGhyb3dlcjtcblxuZnVuY3Rpb24gcmV0dXJuVGhpcygpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHRocm93VGhpcygpIHtcbiAgICB0aHJvdyB0aGlzO1xufVxuZnVuY3Rpb24gcmV0dXJuJChyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gdGhyb3ckKHIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IHI7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHByb21pc2VkRmluYWxseShyZXQsIHJlYXNvbk9yVmFsdWUsIGlzRnVsZmlsbGVkKSB7XG4gICAgdmFyIHRoZW47XG4gICAgaWYgKGlzUHJpbWl0aXZlKHJlYXNvbk9yVmFsdWUpKSB7XG4gICAgICAgIHRoZW4gPSBpc0Z1bGZpbGxlZCA/IHJldHVybiQocmVhc29uT3JWYWx1ZSkgOiB0aHJvdyQocmVhc29uT3JWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbiA9IGlzRnVsZmlsbGVkID8gcmV0dXJuVGhpcyA6IHRocm93VGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHJldC5fdGhlbih0aGVuLCB0aHJvd2VyLCB1bmRlZmluZWQsIHJlYXNvbk9yVmFsdWUsIHVuZGVmaW5lZCk7XG59XG5cbmZ1bmN0aW9uIGZpbmFsbHlIYW5kbGVyKHJlYXNvbk9yVmFsdWUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICB2YXIgaGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcblxuICAgIHZhciByZXQgPSBwcm9taXNlLl9pc0JvdW5kKClcbiAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVyLmNhbGwocHJvbWlzZS5fYm91bmRUbylcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVyKCk7XG5cbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmV0LCBwcm9taXNlKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZWRGaW5hbGx5KG1heWJlUHJvbWlzZSwgcmVhc29uT3JWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UuaXNGdWxmaWxsZWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgTkVYVF9GSUxURVIuZSA9IHJlYXNvbk9yVmFsdWU7XG4gICAgICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVhc29uT3JWYWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRhcEhhbmRsZXIodmFsdWUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICB2YXIgaGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcblxuICAgIHZhciByZXQgPSBwcm9taXNlLl9pc0JvdW5kKClcbiAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVyLmNhbGwocHJvbWlzZS5fYm91bmRUbywgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIDogaGFuZGxlcih2YWx1ZSk7XG5cbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmV0LCBwcm9taXNlKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZWRGaW5hbGx5KG1heWJlUHJvbWlzZSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuX3Bhc3NUaHJvdWdoSGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyLCBpc0ZpbmFsbHkpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRoaXMudGhlbigpO1xuXG4gICAgdmFyIHByb21pc2VBbmRIYW5kbGVyID0ge1xuICAgICAgICBwcm9taXNlOiB0aGlzLFxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgaXNGaW5hbGx5ID8gZmluYWxseUhhbmRsZXIgOiB0YXBIYW5kbGVyLFxuICAgICAgICAgICAgaXNGaW5hbGx5ID8gZmluYWxseUhhbmRsZXIgOiB1bmRlZmluZWQsIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHByb21pc2VBbmRIYW5kbGVyLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUubGFzdGx5ID1cblByb21pc2UucHJvdG90eXBlW1wiZmluYWxseVwiXSA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3NUaHJvdWdoSGFuZGxlcihoYW5kbGVyLCB0cnVlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3NUaHJvdWdoSGFuZGxlcihoYW5kbGVyLCBmYWxzZSk7XG59O1xufTtcblxufSx7XCIuL3V0aWwuanNcIjozOH1dLDE3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlSZWplY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIElOVEVSTkFMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlKSB7XG52YXIgZXJyb3JzID0gX2RlcmVxXyhcIi4vZXJyb3JzLmpzXCIpO1xudmFyIFR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciB5aWVsZEhhbmRsZXJzID0gW107XG5cbmZ1bmN0aW9uIHByb21pc2VGcm9tWWllbGRIYW5kbGVyKHZhbHVlLCB5aWVsZEhhbmRsZXJzLCB0cmFjZVBhcmVudCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeWllbGRIYW5kbGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICB0cmFjZVBhcmVudC5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHlpZWxkSGFuZGxlcnNbaV0pKHZhbHVlKTtcbiAgICAgICAgdHJhY2VQYXJlbnQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIHRyYWNlUGFyZW50Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICAgICAgdmFyIHJldCA9IFByb21pc2UucmVqZWN0KGVycm9yT2JqLmUpO1xuICAgICAgICAgICAgdHJhY2VQYXJlbnQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmVzdWx0LCB0cmFjZVBhcmVudCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gUHJvbWlzZVNwYXduKGdlbmVyYXRvckZ1bmN0aW9uLCByZWNlaXZlciwgeWllbGRIYW5kbGVyLCBzdGFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHRoaXMuX3N0YWNrID0gc3RhY2s7XG4gICAgdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24gPSBnZW5lcmF0b3JGdW5jdGlvbjtcbiAgICB0aGlzLl9yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgIHRoaXMuX2dlbmVyYXRvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl95aWVsZEhhbmRsZXJzID0gdHlwZW9mIHlpZWxkSGFuZGxlciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gW3lpZWxkSGFuZGxlcl0uY29uY2F0KHlpZWxkSGFuZGxlcnMpXG4gICAgICAgIDogeWllbGRIYW5kbGVycztcbn1cblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2dlbmVyYXRvciA9IHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uLmNhbGwodGhpcy5fcmVjZWl2ZXIpO1xuICAgIHRoaXMuX3JlY2VpdmVyID1cbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbmV4dCh1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fY29udGludWUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2UuX3JlamVjdENhbGxiYWNrKHJlc3VsdC5lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChyZXN1bHQuZG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHZhbHVlLCB0aGlzLl9wcm9taXNlKTtcbiAgICAgICAgaWYgKCEobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9XG4gICAgICAgICAgICAgICAgcHJvbWlzZUZyb21ZaWVsZEhhbmRsZXIobWF5YmVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3lpZWxkSGFuZGxlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGhyb3coXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkEgdmFsdWUgJXMgd2FzIHlpZWxkZWQgdGhhdCBjb3VsZCBub3QgYmUgdHJlYXRlZCBhcyBhIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC80WTRwRGtcXHUwMDBhXFx1MDAwYVwiLnJlcGxhY2UoXCIlc1wiLCB2YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcm9tIGNvcm91dGluZTpcXHUwMDBhXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhY2suc3BsaXQoXCJcXG5cIikuc2xpY2UoMSwgLTcpLmpvaW4oXCJcXG5cIilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihcbiAgICAgICAgICAgIHRoaXMuX25leHQsXG4gICAgICAgICAgICB0aGlzLl90aHJvdyxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBudWxsXG4gICAgICAgKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl90aHJvdyA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgdGhpcy5fcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5fZ2VuZXJhdG9yW1widGhyb3dcIl0pXG4gICAgICAgIC5jYWxsKHRoaXMuX2dlbmVyYXRvciwgcmVhc29uKTtcbiAgICB0aGlzLl9wcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgdGhpcy5fY29udGludWUocmVzdWx0KTtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3IubmV4dCkuY2FsbCh0aGlzLl9nZW5lcmF0b3IsIHZhbHVlKTtcbiAgICB0aGlzLl9wcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgdGhpcy5fY29udGludWUocmVzdWx0KTtcbn07XG5cblByb21pc2UuY29yb3V0aW5lID0gZnVuY3Rpb24gKGdlbmVyYXRvckZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBnZW5lcmF0b3JGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJnZW5lcmF0b3JGdW5jdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC82VnFobTBcXHUwMDBhXCIpO1xuICAgIH1cbiAgICB2YXIgeWllbGRIYW5kbGVyID0gT2JqZWN0KG9wdGlvbnMpLnlpZWxkSGFuZGxlcjtcbiAgICB2YXIgUHJvbWlzZVNwYXduJCA9IFByb21pc2VTcGF3bjtcbiAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yRnVuY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIHNwYXduID0gbmV3IFByb21pc2VTcGF3biQodW5kZWZpbmVkLCB1bmRlZmluZWQsIHlpZWxkSGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2spO1xuICAgICAgICBzcGF3bi5fZ2VuZXJhdG9yID0gZ2VuZXJhdG9yO1xuICAgICAgICBzcGF3bi5fbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gc3Bhd24ucHJvbWlzZSgpO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmNvcm91dGluZS5hZGRZaWVsZEhhbmRsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzkxNmxKSlxcdTAwMGFcIik7XG4gICAgeWllbGRIYW5kbGVycy5wdXNoKGZuKTtcbn07XG5cblByb21pc2Uuc3Bhd24gPSBmdW5jdGlvbiAoZ2VuZXJhdG9yRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzZWcWhtMFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHRoaXMpO1xuICAgIHZhciByZXQgPSBzcGF3bi5wcm9taXNlKCk7XG4gICAgc3Bhd24uX3J1bihQcm9taXNlLnNwYXduKTtcbiAgICByZXR1cm4gcmV0O1xufTtcbn07XG5cbn0se1wiLi9lcnJvcnMuanNcIjoxMyxcIi4vdXRpbC5qc1wiOjM4fV0sMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9XG5mdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIHRyeUNvbnZlcnRUb1Byb21pc2UsIElOVEVSTkFMKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgcmVqZWN0O1xuXG5pZiAoIXRydWUpIHtcbmlmIChjYW5FdmFsdWF0ZSkge1xuICAgIHZhciB0aGVuQ2FsbGJhY2sgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJ2YWx1ZVwiLCBcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5jaGVja0Z1bGZpbGxtZW50KHRoaXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGxlciA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gY291bnQ7ICsraSkgdmFsdWVzLnB1c2goXCJob2xkZXIucFwiICsgaSk7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJob2xkZXJcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBob2xkZXIuZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodmFsdWVzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIi5yZXBsYWNlKC92YWx1ZXMvZywgdmFsdWVzLmpvaW4oXCIsIFwiKSkpO1xuICAgIH07XG4gICAgdmFyIHRoZW5DYWxsYmFja3MgPSBbXTtcbiAgICB2YXIgY2FsbGVycyA9IFt1bmRlZmluZWRdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICAgICAgICB0aGVuQ2FsbGJhY2tzLnB1c2godGhlbkNhbGxiYWNrKGkpKTtcbiAgICAgICAgY2FsbGVycy5wdXNoKGNhbGxlcihpKSk7XG4gICAgfVxuXG4gICAgdmFyIEhvbGRlciA9IGZ1bmN0aW9uKHRvdGFsLCBmbikge1xuICAgICAgICB0aGlzLnAxID0gdGhpcy5wMiA9IHRoaXMucDMgPSB0aGlzLnA0ID0gdGhpcy5wNSA9IG51bGw7XG4gICAgICAgIHRoaXMuZm4gPSBmbjtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICB0aGlzLm5vdyA9IDA7XG4gICAgfTtcblxuICAgIEhvbGRlci5wcm90b3R5cGUuY2FsbGVycyA9IGNhbGxlcnM7XG4gICAgSG9sZGVyLnByb3RvdHlwZS5jaGVja0Z1bGZpbGxtZW50ID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgbm93ID0gdGhpcy5ub3c7XG4gICAgICAgIG5vdysrO1xuICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgICAgICBpZiAobm93ID49IHRvdGFsKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuY2FsbGVyc1t0b3RhbF07XG4gICAgICAgICAgICBwcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoKGhhbmRsZXIpKHRoaXMpO1xuICAgICAgICAgICAgcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZXQuZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2socmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xuICAgIH07XG59XG59XG5cblByb21pc2Uuam9pbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgIHZhciBmbjtcbiAgICBpZiAobGFzdCA+IDAgJiYgdHlwZW9mIGFyZ3VtZW50c1tsYXN0XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGZuID0gYXJndW1lbnRzW2xhc3RdO1xuICAgICAgICBpZiAoIXRydWUpIHtcbiAgICAgICAgICAgIGlmIChsYXN0IDwgNiAmJiBjYW5FdmFsdWF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgICAgICAgICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICAgICAgICAgIHZhciBob2xkZXIgPSBuZXcgSG9sZGVyKGxhc3QsIGZuKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhlbkNhbGxiYWNrcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3Q7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShhcmd1bWVudHNbaV0sIHJldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5faXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3RoZW4oY2FsbGJhY2tzW2ldLCByZWplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgcmV0LCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuX2lzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uY2FsbChyZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl92YWx1ZSgpLCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuX3JlamVjdChtYXliZVByb21pc2UuX3JlYXNvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5jYWxsKHJldCwgbWF5YmVQcm9taXNlLCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyICRfbGVuID0gYXJndW1lbnRzLmxlbmd0aDt2YXIgYXJncyA9IG5ldyBBcnJheSgkX2xlbik7IGZvcih2YXIgJF9pID0gMDsgJF9pIDwgJF9sZW47ICsrJF9pKSB7YXJnc1skX2ldID0gYXJndW1lbnRzWyRfaV07fVxuICAgIGlmIChmbikgYXJncy5wb3AoKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VBcnJheShhcmdzKS5wcm9taXNlKCk7XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyByZXQuc3ByZWFkKGZuKSA6IHJldDtcbn07XG5cbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSwxOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZUFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlSZWplY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnRUb1Byb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIElOVEVSTkFMKSB7XG52YXIgYXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luYy5qc1wiKTtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIFBFTkRJTkcgPSB7fTtcbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xuXG5mdW5jdGlvbiBNYXBwaW5nUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgbGltaXQsIF9maWx0ZXIpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJChwcm9taXNlcyk7XG4gICAgdGhpcy5fcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB0aGlzLl9jYWxsYmFjayA9IGZuO1xuICAgIHRoaXMuX3ByZXNlcnZlZFZhbHVlcyA9IF9maWx0ZXIgPT09IElOVEVSTkFMXG4gICAgICAgID8gbmV3IEFycmF5KHRoaXMubGVuZ3RoKCkpXG4gICAgICAgIDogbnVsbDtcbiAgICB0aGlzLl9saW1pdCA9IGxpbWl0O1xuICAgIHRoaXMuX2luRmxpZ2h0ID0gMDtcbiAgICB0aGlzLl9xdWV1ZSA9IGxpbWl0ID49IDEgPyBbXSA6IEVNUFRZX0FSUkFZO1xuICAgIGFzeW5jLmludm9rZShpbml0LCB0aGlzLCB1bmRlZmluZWQpO1xufVxudXRpbC5pbmhlcml0cyhNYXBwaW5nUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuZnVuY3Rpb24gaW5pdCgpIHt0aGlzLl9pbml0JCh1bmRlZmluZWQsIC0yKTt9XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge307XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdmFyIHByZXNlcnZlZFZhbHVlcyA9IHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICBpZiAodmFsdWVzW2luZGV4XSA9PT0gUEVORElORykge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkZsaWdodC0tO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5RdWV1ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxpbWl0ID49IDEgJiYgdGhpcy5faW5GbGlnaHQgPj0gbGltaXQpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwpIHByZXNlcnZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcHJvbWlzZS5fYm91bmRUbztcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoKGNhbGxiYWNrKS5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgaW5kZXgsIGxlbmd0aCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHJldHVybiB0aGlzLl9yZWplY3QocmV0LmUpO1xuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHJldCwgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5faXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGltaXQgPj0gMSkgdGhpcy5faW5GbGlnaHQrKztcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gUEVORElORztcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5faXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldCA9IG1heWJlUHJvbWlzZS5fdmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdChtYXliZVByb21pc2UuX3JlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gcmV0O1xuICAgIH1cbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyKHZhbHVlcywgcHJlc2VydmVkVmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgfVxufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2RyYWluUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5fcXVldWU7XG4gICAgdmFyIGxpbWl0ID0gdGhpcy5fbGltaXQ7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCAmJiB0aGlzLl9pbkZsaWdodCA8IGxpbWl0KSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodmFsdWVzW2luZGV4XSwgaW5kZXgpO1xuICAgIH1cbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9maWx0ZXIgPSBmdW5jdGlvbiAoYm9vbGVhbnMsIHZhbHVlcykge1xuICAgIHZhciBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgIHZhciByZXQgPSBuZXcgQXJyYXkobGVuKTtcbiAgICB2YXIgaiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBpZiAoYm9vbGVhbnNbaV0pIHJldFtqKytdID0gdmFsdWVzW2ldO1xuICAgIH1cbiAgICByZXQubGVuZ3RoID0gajtcbiAgICB0aGlzLl9yZXNvbHZlKHJldCk7XG59O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5wcmVzZXJ2ZWRWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbn07XG5cbmZ1bmN0aW9uIG1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIF9maWx0ZXIpIHtcbiAgICB2YXIgbGltaXQgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zICE9PSBudWxsXG4gICAgICAgID8gb3B0aW9ucy5jb25jdXJyZW5jeVxuICAgICAgICA6IDA7XG4gICAgbGltaXQgPSB0eXBlb2YgbGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgaXNGaW5pdGUobGltaXQpICYmIGxpbWl0ID49IDEgPyBsaW1pdCA6IDA7XG4gICAgcmV0dXJuIG5ldyBNYXBwaW5nUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgbGltaXQsIF9maWx0ZXIpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC85MTZsSkpcXHUwMDBhXCIpO1xuXG4gICAgcmV0dXJuIG1hcCh0aGlzLCBmbiwgb3B0aW9ucywgbnVsbCkucHJvbWlzZSgpO1xufTtcblxuUHJvbWlzZS5tYXAgPSBmdW5jdGlvbiAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICByZXR1cm4gbWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgX2ZpbHRlcikucHJvbWlzZSgpO1xufTtcblxuXG59O1xuXG59LHtcIi4vYXN5bmMuanNcIjoyLFwiLi91dGlsLmpzXCI6Mzh9XSwyMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG5cblByb21pc2UubWV0aG9kID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBQcm9taXNlLlR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzkxNmxKSlxcdTAwMGFcIik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICAgICAgcmV0Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDYXRjaChmbikuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0Ll9wb3BDb250ZXh0KCk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmF0dGVtcHQgPSBQcm9taXNlW1widHJ5XCJdID0gZnVuY3Rpb24gKGZuLCBhcmdzLCBjdHgpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzkxNmxKSlxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHJldC5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgdmFsdWUgPSB1dGlsLmlzQXJyYXkoYXJncylcbiAgICAgICAgPyB0cnlDYXRjaChmbikuYXBwbHkoY3R4LCBhcmdzKVxuICAgICAgICA6IHRyeUNhdGNoKGZuKS5jYWxsKGN0eCwgYXJncyk7XG4gICAgcmV0Ll9wb3BDb250ZXh0KCk7XG4gICAgcmV0Ll9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVN5bmNWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdXRpbC5lcnJvck9iaikge1xuICAgICAgICB0aGlzLl9yZWplY3RDYWxsYmFjayh2YWx1ZS5lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlLCB0cnVlKTtcbiAgICB9XG59O1xufTtcblxufSx7XCIuL3V0aWwuanNcIjozOH1dLDIxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgYXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luYy5qc1wiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5mdW5jdGlvbiBzcHJlYWRBZGFwdGVyKHZhbCwgbm9kZWJhY2spIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgaWYgKCF1dGlsLmlzQXJyYXkodmFsKSkgcmV0dXJuIHN1Y2Nlc3NBZGFwdGVyLmNhbGwocHJvbWlzZSwgdmFsLCBub2RlYmFjayk7XG4gICAgdmFyIHJldCA9IHRyeUNhdGNoKG5vZGViYWNrKS5hcHBseShwcm9taXNlLl9ib3VuZFRvLCBbbnVsbF0uY29uY2F0KHZhbCkpO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIocmV0LmUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3VjY2Vzc0FkYXB0ZXIodmFsLCBub2RlYmFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB2YXIgcmVjZWl2ZXIgPSBwcm9taXNlLl9ib3VuZFRvO1xuICAgIHZhciByZXQgPSB2YWwgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IHRyeUNhdGNoKG5vZGViYWNrKS5jYWxsKHJlY2VpdmVyLCBudWxsKVxuICAgICAgICA6IHRyeUNhdGNoKG5vZGViYWNrKS5jYWxsKHJlY2VpdmVyLCBudWxsLCB2YWwpO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIocmV0LmUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVycm9yQWRhcHRlcihyZWFzb24sIG5vZGViYWNrKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBwcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgdmFyIG5ld1JlYXNvbiA9IHRhcmdldC5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKTtcbiAgICAgICAgbmV3UmVhc29uLmNhdXNlID0gcmVhc29uO1xuICAgICAgICByZWFzb24gPSBuZXdSZWFzb247XG4gICAgfVxuICAgIHZhciByZXQgPSB0cnlDYXRjaChub2RlYmFjaykuY2FsbChwcm9taXNlLl9ib3VuZFRvLCByZWFzb24pO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIocmV0LmUpO1xuICAgIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuYXNDYWxsYmFjayA9IFxuUHJvbWlzZS5wcm90b3R5cGUubm9kZWlmeSA9IGZ1bmN0aW9uIChub2RlYmFjaywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygbm9kZWJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBhZGFwdGVyID0gc3VjY2Vzc0FkYXB0ZXI7XG4gICAgICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQgJiYgT2JqZWN0KG9wdGlvbnMpLnNwcmVhZCkge1xuICAgICAgICAgICAgYWRhcHRlciA9IHNwcmVhZEFkYXB0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGhlbihcbiAgICAgICAgICAgIGFkYXB0ZXIsXG4gICAgICAgICAgICBlcnJvckFkYXB0ZXIsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbm9kZWJhY2tcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xufTtcblxufSx7XCIuL2FzeW5jLmpzXCI6MixcIi4vdXRpbC5qc1wiOjM4fV0sMjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gX2RlcmVxXyhcIi4vYXN5bmMuanNcIik7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcblxuUHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3NlZCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4odW5kZWZpbmVkLCB1bmRlZmluZWQsIGhhbmRsZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzc1ZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl90YXJnZXQoKS5fcHJvZ3Jlc3NVbmNoZWNrZWQocHJvZ3Jlc3NWYWx1ZSk7XG5cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc0hhbmRsZXJBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3Byb2dyZXNzSGFuZGxlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDJdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2RvUHJvZ3Jlc3NXaXRoID0gZnVuY3Rpb24gKHByb2dyZXNzaW9uKSB7XG4gICAgdmFyIHByb2dyZXNzVmFsdWUgPSBwcm9ncmVzc2lvbi52YWx1ZTtcbiAgICB2YXIgaGFuZGxlciA9IHByb2dyZXNzaW9uLmhhbmRsZXI7XG4gICAgdmFyIHByb21pc2UgPSBwcm9ncmVzc2lvbi5wcm9taXNlO1xuICAgIHZhciByZWNlaXZlciA9IHByb2dyZXNzaW9uLnJlY2VpdmVyO1xuXG4gICAgdmFyIHJldCA9IHRyeUNhdGNoKGhhbmRsZXIpLmNhbGwocmVjZWl2ZXIsIHByb2dyZXNzVmFsdWUpO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGlmIChyZXQuZSAhPSBudWxsICYmXG4gICAgICAgICAgICByZXQuZS5uYW1lICE9PSBcIlN0b3BQcm9ncmVzc1Byb3BhZ2F0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciB0cmFjZSA9IHV0aWwuY2FuQXR0YWNoVHJhY2UocmV0LmUpXG4gICAgICAgICAgICAgICAgPyByZXQuZSA6IG5ldyBFcnJvcih1dGlsLnRvU3RyaW5nKHJldC5lKSk7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX3Byb2dyZXNzKHJldC5lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3RoZW4ocHJvbWlzZS5fcHJvZ3Jlc3MsIG51bGwsIG51bGwsIHByb21pc2UsIHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS5fcHJvZ3Jlc3MocmV0KTtcbiAgICB9XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc1VuY2hlY2tlZCA9IGZ1bmN0aW9uIChwcm9ncmVzc1ZhbHVlKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuX3Byb2dyZXNzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9wcm9ncmVzc0hhbmRsZXJBdChpKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaSk7XG4gICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcmVjZWl2ZXJBdChpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCBwcm9ncmVzc1ZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlQXJyYXkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIXJlY2VpdmVyLl9pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fcHJvbWlzZVByb2dyZXNzZWQocHJvZ3Jlc3NWYWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fZG9Qcm9ncmVzc1dpdGgsIHRoaXMsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHRoaXMuX3JlY2VpdmVyQXQoaSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb2dyZXNzVmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXN5bmMuaW52b2tlKHByb2dyZXNzLCBwcm9taXNlLCBwcm9ncmVzc1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG59O1xuXG59LHtcIi4vYXN5bmMuanNcIjoyLFwiLi91dGlsLmpzXCI6Mzh9XSwyMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG52YXIgbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJjaXJjdWxhciBwcm9taXNlIHJlc29sdXRpb24gY2hhaW5cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9MaEZwbzBcXHUwMDBhXCIpO1xufTtcbnZhciByZWZsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uKHRoaXMuX3RhcmdldCgpKTtcbn07XG52YXIgYXBpUmVqZWN0aW9uID0gZnVuY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IobXNnKSk7XG59O1xuXG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG5cbnZhciBnZXREb21haW47XG5pZiAodXRpbC5pc05vZGUpIHtcbiAgICBnZXREb21haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJldCA9IHByb2Nlc3MuZG9tYWluO1xuICAgICAgICBpZiAocmV0ID09PSB1bmRlZmluZWQpIHJldCA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgZ2V0RG9tYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG59XG51dGlsLm5vdEVudW1lcmFibGVQcm9wKFByb21pc2UsIFwiX2dldERvbWFpblwiLCBnZXREb21haW4pO1xuXG52YXIgYXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luYy5qc1wiKTtcbnZhciBlcnJvcnMgPSBfZGVyZXFfKFwiLi9lcnJvcnMuanNcIik7XG52YXIgVHlwZUVycm9yID0gUHJvbWlzZS5UeXBlRXJyb3IgPSBlcnJvcnMuVHlwZUVycm9yO1xuUHJvbWlzZS5SYW5nZUVycm9yID0gZXJyb3JzLlJhbmdlRXJyb3I7XG5Qcm9taXNlLkNhbmNlbGxhdGlvbkVycm9yID0gZXJyb3JzLkNhbmNlbGxhdGlvbkVycm9yO1xuUHJvbWlzZS5UaW1lb3V0RXJyb3IgPSBlcnJvcnMuVGltZW91dEVycm9yO1xuUHJvbWlzZS5PcGVyYXRpb25hbEVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG5Qcm9taXNlLlJlamVjdGlvbkVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG5Qcm9taXNlLkFnZ3JlZ2F0ZUVycm9yID0gZXJyb3JzLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIElOVEVSTkFMID0gZnVuY3Rpb24oKXt9O1xudmFyIEFQUExZID0ge307XG52YXIgTkVYVF9GSUxURVIgPSB7ZTogbnVsbH07XG52YXIgdHJ5Q29udmVydFRvUHJvbWlzZSA9IF9kZXJlcV8oXCIuL3RoZW5hYmxlcy5qc1wiKShQcm9taXNlLCBJTlRFUk5BTCk7XG52YXIgUHJvbWlzZUFycmF5ID1cbiAgICBfZGVyZXFfKFwiLi9wcm9taXNlX2FycmF5LmpzXCIpKFByb21pc2UsIElOVEVSTkFMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKTtcbnZhciBDYXB0dXJlZFRyYWNlID0gX2RlcmVxXyhcIi4vY2FwdHVyZWRfdHJhY2UuanNcIikoKTtcbnZhciBpc0RlYnVnZ2luZyA9IF9kZXJlcV8oXCIuL2RlYnVnZ2FiaWxpdHkuanNcIikoUHJvbWlzZSwgQ2FwdHVyZWRUcmFjZSk7XG4gLypqc2hpbnQgdW51c2VkOmZhbHNlKi9cbnZhciBjcmVhdGVDb250ZXh0ID1cbiAgICBfZGVyZXFfKFwiLi9jb250ZXh0LmpzXCIpKFByb21pc2UsIENhcHR1cmVkVHJhY2UsIGlzRGVidWdnaW5nKTtcbnZhciBDYXRjaEZpbHRlciA9IF9kZXJlcV8oXCIuL2NhdGNoX2ZpbHRlci5qc1wiKShORVhUX0ZJTFRFUik7XG52YXIgUHJvbWlzZVJlc29sdmVyID0gX2RlcmVxXyhcIi4vcHJvbWlzZV9yZXNvbHZlci5qc1wiKTtcbnZhciBub2RlYmFja0ZvclByb21pc2UgPSBQcm9taXNlUmVzb2x2ZXIuX25vZGViYWNrRm9yUHJvbWlzZTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhlIHByb21pc2UgY29uc3RydWN0b3IgcmVxdWlyZXMgYSByZXNvbHZlciBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL0VDMjJZblxcdTAwMGFcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yICE9PSBQcm9taXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgaW52b2tlZCBkaXJlY3RseVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL0tzSWxnZVxcdTAwMGFcIik7XG4gICAgfVxuICAgIHRoaXMuX2JpdEZpZWxkID0gMDtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Byb2dyZXNzSGFuZGxlcjAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJvbWlzZTAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVjZWl2ZXIwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAocmVzb2x2ZXIgIT09IElOVEVSTkFMKSB0aGlzLl9yZXNvbHZlRnJvbVJlc29sdmVyKHJlc29sdmVyKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBQcm9taXNlXVwiO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2F1Z2h0ID0gUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgIHZhciBjYXRjaEluc3RhbmNlcyA9IG5ldyBBcnJheShsZW4gLSAxKSxcbiAgICAgICAgICAgIGogPSAwLCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuIC0gMTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY2F0Y2hJbnN0YW5jZXNbaisrXSA9IGl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFR5cGVFcnJvcihcIkNhdGNoIGZpbHRlciBtdXN0IGluaGVyaXQgZnJvbSBFcnJvciBvciBiZSBhIHNpbXBsZSBwcmVkaWNhdGUgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9vODRvNjhcXHUwMDBhXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaEluc3RhbmNlcy5sZW5ndGggPSBqO1xuICAgICAgICBmbiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgdmFyIGNhdGNoRmlsdGVyID0gbmV3IENhdGNoRmlsdGVyKGNhdGNoSW5zdGFuY2VzLCBmbiwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKHVuZGVmaW5lZCwgY2F0Y2hGaWx0ZXIuZG9GaWx0ZXIsIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNhdGNoRmlsdGVyLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbih1bmRlZmluZWQsIGZuLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJlZmxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4ocmVmbGVjdCwgcmVmbGVjdCwgdW5kZWZpbmVkLCB0aGlzLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzKSB7XG4gICAgaWYgKGlzRGVidWdnaW5nKCkgJiYgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgdHlwZW9mIGRpZEZ1bGZpbGwgIT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICB0eXBlb2YgZGlkUmVqZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIG1zZyA9IFwiLnRoZW4oKSBvbmx5IGFjY2VwdHMgZnVuY3Rpb25zIGJ1dCB3YXMgcGFzc2VkOiBcIiArXG4gICAgICAgICAgICAgICAgdXRpbC5jbGFzc1N0cmluZyhkaWRGdWxmaWxsKTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBtc2cgKz0gXCIsIFwiICsgdXRpbC5jbGFzc1N0cmluZyhkaWRSZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dhcm4obXNnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIChkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MsXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICBwcm9taXNlLl9zZXRJc0ZpbmFsKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zcHJlYWQgPSBmdW5jdGlvbiAoZGlkRnVsZmlsbCwgZGlkUmVqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsKCkuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCB1bmRlZmluZWQsIEFQUExZLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNSZXNvbHZlZCgpICYmXG4gICAgICAgIHRoaXMuX2NhbmNlbGxhYmxlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxuICAgICAgICBpc1JlamVjdGVkOiBmYWxzZSxcbiAgICAgICAgZnVsZmlsbG1lbnRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICByZWplY3Rpb25SZWFzb246IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKHRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICByZXQuZnVsZmlsbG1lbnRWYWx1ZSA9IHRoaXMudmFsdWUoKTtcbiAgICAgICAgcmV0LmlzRnVsZmlsbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldC5yZWplY3Rpb25SZWFzb24gPSB0aGlzLnJlYXNvbigpO1xuICAgICAgICByZXQuaXNSZWplY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkodGhpcykucHJvbWlzZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5jYXVnaHQodXRpbC5vcmlnaW5hdGVzRnJvbVJlamVjdGlvbiwgZm4pO1xufTtcblxuUHJvbWlzZS5pcyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsIGluc3RhbmNlb2YgUHJvbWlzZTtcbn07XG5cblByb21pc2UuZnJvbU5vZGUgPSBmdW5jdGlvbihmbikge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKGZuKShub2RlYmFja0ZvclByb21pc2UocmV0KSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgcmV0Ll9yZWplY3RDYWxsYmFjayhyZXN1bHQuZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLmRlZmVyID0gUHJvbWlzZS5wZW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZVJlc29sdmVyKHByb21pc2UpO1xufTtcblxuUHJvbWlzZS5jYXN0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciByZXQgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKG9iaik7XG4gICAgaWYgKCEocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHJldDtcbiAgICAgICAgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX2Z1bGZpbGxVbmNoZWNrZWQodmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucmVzb2x2ZSA9IFByb21pc2UuZnVsZmlsbGVkID0gUHJvbWlzZS5jYXN0O1xuXG5Qcm9taXNlLnJlamVjdCA9IFByb21pc2UucmVqZWN0ZWQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgcmV0Ll9yZWplY3RDYWxsYmFjayhyZWFzb24sIHRydWUpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnNldFNjaGVkdWxlciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICB2YXIgcHJldiA9IGFzeW5jLl9zY2hlZHVsZTtcbiAgICBhc3luYy5fc2NoZWR1bGUgPSBmbjtcbiAgICByZXR1cm4gcHJldjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl90aGVuID0gZnVuY3Rpb24gKFxuICAgIGRpZEZ1bGZpbGwsXG4gICAgZGlkUmVqZWN0LFxuICAgIGRpZFByb2dyZXNzLFxuICAgIHJlY2VpdmVyLFxuICAgIGludGVybmFsRGF0YVxuKSB7XG4gICAgdmFyIGhhdmVJbnRlcm5hbERhdGEgPSBpbnRlcm5hbERhdGEgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgcmV0ID0gaGF2ZUludGVybmFsRGF0YSA/IGludGVybmFsRGF0YSA6IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcblxuICAgIGlmICghaGF2ZUludGVybmFsRGF0YSkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20odGhpcywgNCB8IDEpO1xuICAgICAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldCgpO1xuICAgIGlmICh0YXJnZXQgIT09IHRoaXMpIHtcbiAgICAgICAgaWYgKHJlY2VpdmVyID09PSB1bmRlZmluZWQpIHJlY2VpdmVyID0gdGhpcy5fYm91bmRUbztcbiAgICAgICAgaWYgKCFoYXZlSW50ZXJuYWxEYXRhKSByZXQuX3NldElzTWlncmF0ZWQoKTtcbiAgICB9XG5cbiAgICB2YXIgY2FsbGJhY2tJbmRleCA9IHRhcmdldC5fYWRkQ2FsbGJhY2tzKGRpZEZ1bGZpbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWRSZWplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWRQcm9ncmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RG9tYWluKCkpO1xuXG4gICAgaWYgKHRhcmdldC5faXNSZXNvbHZlZCgpICYmICF0YXJnZXQuX2lzU2V0dGxlUHJvbWlzZXNRdWV1ZWQoKSkge1xuICAgICAgICBhc3luYy5pbnZva2UoXG4gICAgICAgICAgICB0YXJnZXQuX3NldHRsZVByb21pc2VBdFBvc3RSZXNvbHV0aW9uLCB0YXJnZXQsIGNhbGxiYWNrSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUF0UG9zdFJlc29sdXRpb24gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZWplY3Rpb25VbmhhbmRsZWQoKSkgdGhpcy5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIHRoaXMuX3NldHRsZVByb21pc2VBdChpbmRleCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9iaXRGaWVsZCAmIDEzMTA3MTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgOTM5NTI0MDk2KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGb2xsb3dpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUzNjg3MDkxMikgPT09IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRMZW5ndGggPSBmdW5jdGlvbiAobGVuKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSAodGhpcy5fYml0RmllbGQgJiAtMTMxMDcyKSB8XG4gICAgICAgIChsZW4gJiAxMzEwNzEpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjY4NDM1NDU2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAxMzQyMTc3Mjg7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Rm9sbG93aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA1MzY4NzA5MTI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0SXNGaW5hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMzM1NTQ0MzI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGaW5hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMzM1NTQ0MzIpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWxsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNjcxMDg4NjQpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNjcxMDg4NjQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH42NzEwODg2NCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0SXNNaWdyYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNDE5NDMwNDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldElzTWlncmF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NDE5NDMwNCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNNaWdyYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDE5NDMwNCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlY2VpdmVyQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgcmV0ID0gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9yZWNlaXZlcjBcbiAgICAgICAgOiB0aGlzW1xuICAgICAgICAgICAgaW5kZXggKiA1IC0gNSArIDRdO1xuICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9pc0JvdW5kKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kVG87XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fcHJvbWlzZTBcbiAgICAgICAgOiB0aGlzW2luZGV4ICogNSAtIDUgKyAzXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsbWVudEhhbmRsZXJBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjBcbiAgICAgICAgOiB0aGlzW2luZGV4ICogNSAtIDUgKyAwXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3Rpb25IYW5kbGVyQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMFxuICAgICAgICA6IHRoaXNbaW5kZXggKiA1IC0gNSArIDFdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX21pZ3JhdGVDYWxsYmFja3MgPSBmdW5jdGlvbiAoZm9sbG93ZXIsIGluZGV4KSB7XG4gICAgdmFyIGZ1bGZpbGwgPSBmb2xsb3dlci5fZnVsZmlsbG1lbnRIYW5kbGVyQXQoaW5kZXgpO1xuICAgIHZhciByZWplY3QgPSBmb2xsb3dlci5fcmVqZWN0aW9uSGFuZGxlckF0KGluZGV4KTtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBmb2xsb3dlci5fcHJvZ3Jlc3NIYW5kbGVyQXQoaW5kZXgpO1xuICAgIHZhciBwcm9taXNlID0gZm9sbG93ZXIuX3Byb21pc2VBdChpbmRleCk7XG4gICAgdmFyIHJlY2VpdmVyID0gZm9sbG93ZXIuX3JlY2VpdmVyQXQoaW5kZXgpO1xuICAgIGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkgcHJvbWlzZS5fc2V0SXNNaWdyYXRlZCgpO1xuICAgIHRoaXMuX2FkZENhbGxiYWNrcyhmdWxmaWxsLCByZWplY3QsIHByb2dyZXNzLCBwcm9taXNlLCByZWNlaXZlciwgbnVsbCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fYWRkQ2FsbGJhY2tzID0gZnVuY3Rpb24gKFxuICAgIGZ1bGZpbGwsXG4gICAgcmVqZWN0LFxuICAgIHByb2dyZXNzLFxuICAgIHByb21pc2UsXG4gICAgcmVjZWl2ZXIsXG4gICAgZG9tYWluXG4pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAxMzEwNzEgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9wcm9taXNlMCA9IHByb21pc2U7XG4gICAgICAgIGlmIChyZWNlaXZlciAhPT0gdW5kZWZpbmVkKSB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXMuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IGZ1bGZpbGwgOiBkb21haW4uYmluZChmdWxmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlamVjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gcmVqZWN0IDogZG9tYWluLmJpbmQocmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHByb2dyZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzSGFuZGxlcjAgPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IHByb2dyZXNzIDogZG9tYWluLmJpbmQocHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJhc2UgPSBpbmRleCAqIDUgLSA1O1xuICAgICAgICB0aGlzW2Jhc2UgKyAzXSA9IHByb21pc2U7XG4gICAgICAgIHRoaXNbYmFzZSArIDRdID0gcmVjZWl2ZXI7XG4gICAgICAgIGlmICh0eXBlb2YgZnVsZmlsbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzW2Jhc2UgKyAwXSA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gZnVsZmlsbCA6IGRvbWFpbi5iaW5kKGZ1bGZpbGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXNbYmFzZSArIDFdID1cbiAgICAgICAgICAgICAgICBkb21haW4gPT09IG51bGwgPyByZWplY3QgOiBkb21haW4uYmluZChyZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpc1tiYXNlICsgMl0gPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IHByb2dyZXNzIDogZG9tYWluLmJpbmQocHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xuICAgIHJldHVybiBpbmRleDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRQcm94eUhhbmRsZXJzID0gZnVuY3Rpb24gKHJlY2VpdmVyLCBwcm9taXNlU2xvdFZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fbGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMTMxMDcxIC0gNSkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICB9XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UwID0gcHJvbWlzZVNsb3RWYWx1ZTtcbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIwID0gcmVjZWl2ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJhc2UgPSBpbmRleCAqIDUgLSA1O1xuICAgICAgICB0aGlzW2Jhc2UgKyAzXSA9IHByb21pc2VTbG90VmFsdWU7XG4gICAgICAgIHRoaXNbYmFzZSArIDRdID0gcmVjZWl2ZXI7XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5UHJvbWlzZUFycmF5ID0gZnVuY3Rpb24gKHByb21pc2VBcnJheSwgaW5kZXgpIHtcbiAgICB0aGlzLl9zZXRQcm94eUhhbmRsZXJzKHByb21pc2VBcnJheSwgaW5kZXgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc29sdmVDYWxsYmFjayA9IGZ1bmN0aW9uKHZhbHVlLCBzaG91bGRCaW5kKSB7XG4gICAgaWYgKHRoaXMuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkpIHJldHVybjtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMpXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3RDYWxsYmFjayhtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpLCBmYWxzZSwgdHJ1ZSk7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodmFsdWUsIHRoaXMpO1xuICAgIGlmICghKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSByZXR1cm4gdGhpcy5fZnVsZmlsbCh2YWx1ZSk7XG5cbiAgICB2YXIgcHJvcGFnYXRpb25GbGFncyA9IDEgfCAoc2hvdWxkQmluZCA/IDQgOiAwKTtcbiAgICB0aGlzLl9wcm9wYWdhdGVGcm9tKG1heWJlUHJvbWlzZSwgcHJvcGFnYXRpb25GbGFncyk7XG4gICAgdmFyIHByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgIGlmIChwcm9taXNlLl9pc1BlbmRpbmcoKSkge1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHByb21pc2UuX21pZ3JhdGVDYWxsYmFja3ModGhpcywgaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0Rm9sbG93aW5nKCk7XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICAgICAgdGhpcy5fc2V0Rm9sbG93ZWUocHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChwcm9taXNlLl9pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHRoaXMuX2Z1bGZpbGxVbmNoZWNrZWQocHJvbWlzZS5fdmFsdWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0VW5jaGVja2VkKHByb21pc2UuX3JlYXNvbigpLFxuICAgICAgICAgICAgcHJvbWlzZS5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdENhbGxiYWNrID1cbmZ1bmN0aW9uKHJlYXNvbiwgc3luY2hyb25vdXMsIHNob3VsZE5vdE1hcmtPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24pIHtcbiAgICBpZiAoIXNob3VsZE5vdE1hcmtPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24pIHtcbiAgICAgICAgdXRpbC5tYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24ocmVhc29uKTtcbiAgICB9XG4gICAgdmFyIHRyYWNlID0gdXRpbC5lbnN1cmVFcnJvck9iamVjdChyZWFzb24pO1xuICAgIHZhciBoYXNTdGFjayA9IHRyYWNlID09PSByZWFzb247XG4gICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSwgc3luY2hyb25vdXMgPyBoYXNTdGFjayA6IGZhbHNlKTtcbiAgICB0aGlzLl9yZWplY3QocmVhc29uLCBoYXNTdGFjayA/IHVuZGVmaW5lZCA6IHRyYWNlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHRoaXMuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdGhpcy5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgc3luY2hyb25vdXMgPSB0cnVlO1xuICAgIHZhciByID0gdHJ5Q2F0Y2gocmVzb2x2ZXIpKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9taXNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHByb21pc2UuX3Jlc29sdmVDYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgaWYgKHByb21pc2UgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVhc29uLCBzeW5jaHJvbm91cyk7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH0pO1xuICAgIHN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgdGhpcy5fcG9wQ29udGV4dCgpO1xuXG4gICAgaWYgKHIgIT09IHVuZGVmaW5lZCAmJiByID09PSBlcnJvck9iaiAmJiBwcm9taXNlICE9PSBudWxsKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHIuZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIgPSBmdW5jdGlvbiAoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlXG4pIHtcbiAgICBpZiAocHJvbWlzZS5faXNSZWplY3RlZCgpKSByZXR1cm47XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgeDtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEFQUExZICYmICF0aGlzLl9pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgeCA9IHRyeUNhdGNoKGhhbmRsZXIpLmFwcGx5KHRoaXMuX2JvdW5kVG8sIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gdHJ5Q2F0Y2goaGFuZGxlcikuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgIH1cbiAgICBwcm9taXNlLl9wb3BDb250ZXh0KCk7XG5cbiAgICBpZiAoeCA9PT0gZXJyb3JPYmogfHwgeCA9PT0gcHJvbWlzZSB8fCB4ID09PSBORVhUX0ZJTFRFUikge1xuICAgICAgICB2YXIgZXJyID0geCA9PT0gcHJvbWlzZSA/IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCkgOiB4LmU7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKGVyciwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UuX3Jlc29sdmVDYWxsYmFjayh4KTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHRoaXM7XG4gICAgd2hpbGUgKHJldC5faXNGb2xsb3dpbmcoKSkgcmV0ID0gcmV0Ll9mb2xsb3dlZSgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZm9sbG93ZWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Rm9sbG93ZWUgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSBwcm9taXNlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NsZWFuVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9jYW5jZWxsYWJsZSgpKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbGxhdGlvblBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvcGFnYXRlRnJvbSA9IGZ1bmN0aW9uIChwYXJlbnQsIGZsYWdzKSB7XG4gICAgaWYgKChmbGFncyAmIDEpID4gMCAmJiBwYXJlbnQuX2NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Q2FuY2VsbGFibGUoKTtcbiAgICAgICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICBpZiAoKGZsYWdzICYgNCkgPiAwICYmIHBhcmVudC5faXNCb3VuZCgpKSB7XG4gICAgICAgIHRoaXMuX3NldEJvdW5kVG8ocGFyZW50Ll9ib3VuZFRvKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fZnVsZmlsbFVuY2hlY2tlZCh2YWx1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbiwgY2FycmllZFN0YWNrVHJhY2UpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3JlamVjdFVuY2hlY2tlZChyZWFzb24sIGNhcnJpZWRTdGFja1RyYWNlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2VBdChpbmRleCk7XG4gICAgdmFyIGlzUHJvbWlzZSA9IHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlO1xuXG4gICAgaWYgKGlzUHJvbWlzZSAmJiBwcm9taXNlLl9pc01pZ3JhdGVkKCkpIHtcbiAgICAgICAgcHJvbWlzZS5fdW5zZXRJc01pZ3JhdGVkKCk7XG4gICAgICAgIHJldHVybiBhc3luYy5pbnZva2UodGhpcy5fc2V0dGxlUHJvbWlzZUF0LCB0aGlzLCBpbmRleCk7XG4gICAgfVxuICAgIHZhciBoYW5kbGVyID0gdGhpcy5faXNGdWxmaWxsZWQoKVxuICAgICAgICA/IHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlckF0KGluZGV4KVxuICAgICAgICA6IHRoaXMuX3JlamVjdGlvbkhhbmRsZXJBdChpbmRleCk7XG5cbiAgICB2YXIgY2FycmllZFN0YWNrVHJhY2UgPVxuICAgICAgICB0aGlzLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpID8gdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9zZXR0bGVkVmFsdWU7XG4gICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcmVjZWl2ZXJBdChpbmRleCk7XG5cblxuICAgIHRoaXMuX2NsZWFyQ2FsbGJhY2tEYXRhQXRJbmRleChpbmRleCk7XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpZiAoIWlzUHJvbWlzZSkge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIoaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlQXJyYXkpIHtcbiAgICAgICAgaWYgKCFyZWNlaXZlci5faXNSZXNvbHZlZCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9taXNlUmVqZWN0ZWQodmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHZhbHVlLCBjYXJyaWVkU3RhY2tUcmFjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gNCAmJiAoaW5kZXggJiAzMSkgPT09IDQpXG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHRoaXMuX3NldExlbmd0aCwgdGhpcywgMCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYXJDYWxsYmFja0RhdGFBdEluZGV4ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID1cbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9XG4gICAgICAgIHRoaXMuX3JlY2VpdmVyMCA9XG4gICAgICAgIHRoaXMuX3Byb21pc2UwID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBiYXNlID0gaW5kZXggKiA1IC0gNTtcbiAgICAgICAgdGhpc1tiYXNlICsgM10gPVxuICAgICAgICB0aGlzW2Jhc2UgKyA0XSA9XG4gICAgICAgIHRoaXNbYmFzZSArIDBdID1cbiAgICAgICAgdGhpc1tiYXNlICsgMV0gPVxuICAgICAgICB0aGlzW2Jhc2UgKyAyXSA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNTZXR0bGVQcm9taXNlc1F1ZXVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICZcbiAgICAgICAgICAgIC0xMDczNzQxODI0KSA9PT0gLTEwNzM3NDE4MjQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0U2V0dGxlUHJvbWlzZXNRdWV1ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IC0xMDczNzQxODI0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0U2V0dGxlUHJvbWlzZXNRdWV1ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+LTEwNzM3NDE4MjQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3F1ZXVlU2V0dGxlUHJvbWlzZXMgPSBmdW5jdGlvbigpIHtcbiAgICBhc3luYy5zZXR0bGVQcm9taXNlcyh0aGlzKTtcbiAgICB0aGlzLl9zZXRTZXR0bGVQcm9taXNlc1F1ZXVlZCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Z1bGZpbGxVbmNoZWNrZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMpIHtcbiAgICAgICAgdmFyIGVyciA9IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdFVuY2hlY2tlZChlcnIsIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHRoaXMuX3NldEZ1bGZpbGxlZCgpO1xuICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG5cbiAgICBpZiAodGhpcy5fbGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlU2V0dGxlUHJvbWlzZXMoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0VW5jaGVja2VkQ2hlY2tFcnJvciA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB2YXIgdHJhY2UgPSB1dGlsLmVuc3VyZUVycm9yT2JqZWN0KHJlYXNvbik7XG4gICAgdGhpcy5fcmVqZWN0VW5jaGVja2VkKHJlYXNvbiwgdHJhY2UgPT09IHJlYXNvbiA/IHVuZGVmaW5lZCA6IHRyYWNlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RVbmNoZWNrZWQgPSBmdW5jdGlvbiAocmVhc29uLCB0cmFjZSkge1xuICAgIGlmIChyZWFzb24gPT09IHRoaXMpIHtcbiAgICAgICAgdmFyIGVyciA9IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdFVuY2hlY2tlZChlcnIpO1xuICAgIH1cbiAgICB0aGlzLl9zZXRSZWplY3RlZCgpO1xuICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcbiAgICB0aGlzLl9jbGVhblZhbHVlcygpO1xuXG4gICAgaWYgKHRoaXMuX2lzRmluYWwoKSkge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChcInN0YWNrXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jLmludm9rZUZpcnN0KFxuICAgICAgICAgICAgICAgICAgICBDYXB0dXJlZFRyYWNlLnVuaGFuZGxlZFJlamVjdGlvbiwgdW5kZWZpbmVkLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0sIHRyYWNlID09PSB1bmRlZmluZWQgPyByZWFzb24gOiB0cmFjZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHJhY2UgIT09IHVuZGVmaW5lZCAmJiB0cmFjZSAhPT0gcmVhc29uKSB7XG4gICAgICAgIHRoaXMuX3NldENhcnJpZWRTdGFja1RyYWNlKHRyYWNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlU2V0dGxlUHJvbWlzZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdW5zZXRTZXR0bGVQcm9taXNlc1F1ZXVlZCgpO1xuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VBdChpKTtcbiAgICB9XG59O1xuXG51dGlsLm5vdEVudW1lcmFibGVQcm9wKFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiX21ha2VTZWxmUmVzb2x1dGlvbkVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKTtcblxuX2RlcmVxXyhcIi4vcHJvZ3Jlc3MuanNcIikoUHJvbWlzZSwgUHJvbWlzZUFycmF5KTtcbl9kZXJlcV8oXCIuL21ldGhvZC5qc1wiKShQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKTtcbl9kZXJlcV8oXCIuL2JpbmQuanNcIikoUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UpO1xuX2RlcmVxXyhcIi4vZmluYWxseS5qc1wiKShQcm9taXNlLCBORVhUX0ZJTFRFUiwgdHJ5Q29udmVydFRvUHJvbWlzZSk7XG5fZGVyZXFfKFwiLi9kaXJlY3RfcmVzb2x2ZS5qc1wiKShQcm9taXNlKTtcbl9kZXJlcV8oXCIuL3N5bmNocm9ub3VzX2luc3BlY3Rpb24uanNcIikoUHJvbWlzZSk7XG5fZGVyZXFfKFwiLi9qb2luLmpzXCIpKFByb21pc2UsIFByb21pc2VBcnJheSwgdHJ5Q29udmVydFRvUHJvbWlzZSwgSU5URVJOQUwpO1xuUHJvbWlzZS5Qcm9taXNlID0gUHJvbWlzZTtcbl9kZXJlcV8oJy4vbWFwLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIHRyeUNvbnZlcnRUb1Byb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vY2FuY2VsLmpzJykoUHJvbWlzZSk7XG5fZGVyZXFfKCcuL3VzaW5nLmpzJykoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBjcmVhdGVDb250ZXh0KTtcbl9kZXJlcV8oJy4vZ2VuZXJhdG9ycy5qcycpKFByb21pc2UsIGFwaVJlamVjdGlvbiwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UpO1xuX2RlcmVxXygnLi9ub2RlaWZ5LmpzJykoUHJvbWlzZSk7XG5fZGVyZXFfKCcuL2NhbGxfZ2V0LmpzJykoUHJvbWlzZSk7XG5fZGVyZXFfKCcuL3Byb3BzLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pO1xuX2RlcmVxXygnLi9yYWNlLmpzJykoUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbik7XG5fZGVyZXFfKCcuL3JlZHVjZS5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBJTlRFUk5BTCk7XG5fZGVyZXFfKCcuL3NldHRsZS5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSk7XG5fZGVyZXFfKCcuL3NvbWUuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbik7XG5fZGVyZXFfKCcuL3Byb21pc2lmeS5qcycpKFByb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vYW55LmpzJykoUHJvbWlzZSk7XG5fZGVyZXFfKCcuL2VhY2guanMnKShQcm9taXNlLCBJTlRFUk5BTCk7XG5fZGVyZXFfKCcuL3RpbWVycy5qcycpKFByb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vZmlsdGVyLmpzJykoUHJvbWlzZSwgSU5URVJOQUwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgdXRpbC50b0Zhc3RQcm9wZXJ0aWVzKFByb21pc2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHV0aWwudG9GYXN0UHJvcGVydGllcyhQcm9taXNlLnByb3RvdHlwZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmdW5jdGlvbiBmaWxsVHlwZXModmFsdWUpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBwID0gbmV3IFByb21pc2UoSU5URVJOQUwpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fcmVqZWN0aW9uSGFuZGxlcjAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX3Byb2dyZXNzSGFuZGxlcjAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9wcm9taXNlMCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fcmVjZWl2ZXIwID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX3NldHRsZWRWYWx1ZSA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAvLyBDb21wbGV0ZSBzbGFjayB0cmFja2luZywgb3B0IG91dCBvZiBmaWVsZC10eXBlIHRyYWNraW5nIGFuZCAgICAgICAgICAgXG4gICAgLy8gc3RhYmlsaXplIG1hcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyh7YTogMX0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoe2I6IDJ9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKHtjOiAzfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcygxKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoZnVuY3Rpb24oKXt9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKHVuZGVmaW5lZCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyhmYWxzZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMobmV3IFByb21pc2UoSU5URVJOQUwpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgQ2FwdHVyZWRUcmFjZS5zZXRCb3VuZHMoYXN5bmMuZmlyc3RMaW5lRXJyb3IsIHV0aWwubGFzdExpbmVFcnJvcik7ICAgICAgIFxuICAgIHJldHVybiBQcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxufTtcblxufSx7XCIuL2FueS5qc1wiOjEsXCIuL2FzeW5jLmpzXCI6MixcIi4vYmluZC5qc1wiOjMsXCIuL2NhbGxfZ2V0LmpzXCI6NSxcIi4vY2FuY2VsLmpzXCI6NixcIi4vY2FwdHVyZWRfdHJhY2UuanNcIjo3LFwiLi9jYXRjaF9maWx0ZXIuanNcIjo4LFwiLi9jb250ZXh0LmpzXCI6OSxcIi4vZGVidWdnYWJpbGl0eS5qc1wiOjEwLFwiLi9kaXJlY3RfcmVzb2x2ZS5qc1wiOjExLFwiLi9lYWNoLmpzXCI6MTIsXCIuL2Vycm9ycy5qc1wiOjEzLFwiLi9maWx0ZXIuanNcIjoxNSxcIi4vZmluYWxseS5qc1wiOjE2LFwiLi9nZW5lcmF0b3JzLmpzXCI6MTcsXCIuL2pvaW4uanNcIjoxOCxcIi4vbWFwLmpzXCI6MTksXCIuL21ldGhvZC5qc1wiOjIwLFwiLi9ub2RlaWZ5LmpzXCI6MjEsXCIuL3Byb2dyZXNzLmpzXCI6MjIsXCIuL3Byb21pc2VfYXJyYXkuanNcIjoyNCxcIi4vcHJvbWlzZV9yZXNvbHZlci5qc1wiOjI1LFwiLi9wcm9taXNpZnkuanNcIjoyNixcIi4vcHJvcHMuanNcIjoyNyxcIi4vcmFjZS5qc1wiOjI5LFwiLi9yZWR1Y2UuanNcIjozMCxcIi4vc2V0dGxlLmpzXCI6MzIsXCIuL3NvbWUuanNcIjozMyxcIi4vc3luY2hyb25vdXNfaW5zcGVjdGlvbi5qc1wiOjM0LFwiLi90aGVuYWJsZXMuanNcIjozNSxcIi4vdGltZXJzLmpzXCI6MzYsXCIuL3VzaW5nLmpzXCI6MzcsXCIuL3V0aWwuanNcIjozOH1dLDI0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICBhcGlSZWplY3Rpb24pIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBpc0FycmF5ID0gdXRpbC5pc0FycmF5O1xuXG5mdW5jdGlvbiB0b1Jlc29sdXRpb25WYWx1ZSh2YWwpIHtcbiAgICBzd2l0Y2godmFsKSB7XG4gICAgY2FzZSAtMjogcmV0dXJuIFtdO1xuICAgIGNhc2UgLTM6IHJldHVybiB7fTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHBhcmVudDtcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwYXJlbnQgPSB2YWx1ZXM7XG4gICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20ocGFyZW50LCAxIHwgNCk7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX3RvdGFsUmVzb2x2ZWQgPSAwO1xuICAgIHRoaXMuX2luaXQodW5kZWZpbmVkLCAtMik7XG59XG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIGluaXQoXywgcmVzb2x2ZVZhbHVlSWZFbXB0eSkge1xuICAgIHZhciB2YWx1ZXMgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHRoaXMuX3ZhbHVlcywgdGhpcy5fcHJvbWlzZSk7XG4gICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLl90YXJnZXQoKTtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgICAgICBpZiAodmFsdWVzLl9pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuX3ZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoIWlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgUHJvbWlzZS5UeXBlRXJyb3IoXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvczhNTWhjXFx1MDAwYVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9faGFyZFJlamVjdF9fKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlcy5faXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgIHZhbHVlcy5fdGhlbihcbiAgICAgICAgICAgICAgICBpbml0LFxuICAgICAgICAgICAgICAgIHRoaXMuX3JlamVjdCxcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICByZXNvbHZlVmFsdWVJZkVtcHR5XG4gICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QodmFsdWVzLl9yZWFzb24oKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcmVqZWN0KGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhbiBhcnJheSwgYSBwcm9taXNlIG9yIGEgdGhlbmFibGVcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9zOE1NaGNcXHUwMDBhXCIpLl9yZWFzb24oKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocmVzb2x2ZVZhbHVlSWZFbXB0eSA9PT0gLTUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVFbXB0eUFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRvUmVzb2x1dGlvblZhbHVlKHJlc29sdmVWYWx1ZUlmRW1wdHkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsZW4gPSB0aGlzLmdldEFjdHVhbExlbmd0aCh2YWx1ZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW47XG4gICAgdGhpcy5fdmFsdWVzID0gdGhpcy5zaG91bGRDb3B5VmFsdWVzKCkgPyBuZXcgQXJyYXkobGVuKSA6IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgaXNSZXNvbHZlZCA9IHRoaXMuX2lzUmVzb2x2ZWQoKTtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodmFsdWVzW2ldLCBwcm9taXNlKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICBpZiAoaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5faWdub3JlUmVqZWN0aW9ucygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuX2lzUGVuZGluZygpKSB7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF5YmVQcm9taXNlLl9pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZChtYXliZVByb21pc2UuX3ZhbHVlKCksIGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9taXNlUmVqZWN0ZWQobWF5YmVQcm9taXNlLl9yZWFzb24oKSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQobWF5YmVQcm9taXNlLCBpKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX2lzUmVzb2x2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcyA9PT0gbnVsbDtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fX2hhcmRSZWplY3RfXyA9XG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZWFzb24sIGZhbHNlLCB0cnVlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VQcm9ncmVzc2VkID0gZnVuY3Rpb24gKHByb2dyZXNzVmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fcHJvbWlzZS5fcHJvZ3Jlc3Moe1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHZhbHVlOiBwcm9ncmVzc1ZhbHVlXG4gICAgfSk7XG59O1xuXG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbiwgaW5kZXgpIHtcbiAgICB0aGlzLl90b3RhbFJlc29sdmVkKys7XG4gICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLnNob3VsZENvcHlWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLmdldEFjdHVhbExlbmd0aCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgICByZXR1cm4gbGVuO1xufTtcblxucmV0dXJuIFByb21pc2VBcnJheTtcbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSwyNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBtYXliZVdyYXBBc0Vycm9yID0gdXRpbC5tYXliZVdyYXBBc0Vycm9yO1xudmFyIGVycm9ycyA9IF9kZXJlcV8oXCIuL2Vycm9ycy5qc1wiKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBlcnJvcnMuVGltZW91dEVycm9yO1xudmFyIE9wZXJhdGlvbmFsRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcbnZhciBoYXZlR2V0dGVycyA9IHV0aWwuaGF2ZUdldHRlcnM7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1LmpzXCIpO1xuXG5mdW5jdGlvbiBpc1VudHlwZWRFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgZXM1LmdldFByb3RvdHlwZU9mKG9iaikgPT09IEVycm9yLnByb3RvdHlwZTtcbn1cblxudmFyIHJFcnJvcktleSA9IC9eKD86bmFtZXxtZXNzYWdlfHN0YWNrfGNhdXNlKSQvO1xuZnVuY3Rpb24gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihvYmopIHtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChpc1VudHlwZWRFcnJvcihvYmopKSB7XG4gICAgICAgIHJldCA9IG5ldyBPcGVyYXRpb25hbEVycm9yKG9iaik7XG4gICAgICAgIHJldC5uYW1lID0gb2JqLm5hbWU7XG4gICAgICAgIHJldC5tZXNzYWdlID0gb2JqLm1lc3NhZ2U7XG4gICAgICAgIHJldC5zdGFjayA9IG9iai5zdGFjaztcbiAgICAgICAgdmFyIGtleXMgPSBlczUua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFyRXJyb3JLZXkudGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICB1dGlsLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVyciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb21pc2UgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IHdyYXBBc09wZXJhdGlvbmFsRXJyb3IobWF5YmVXcmFwQXNFcnJvcihlcnIpKTtcbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2Uod3JhcHBlZCk7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7dmFyIGFyZ3MgPSBuZXcgQXJyYXkoJF9sZW4gLSAxKTsgZm9yKHZhciAkX2kgPSAxOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaSAtIDFdID0gYXJndW1lbnRzWyRfaV07fVxuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbChhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfTtcbn1cblxuXG52YXIgUHJvbWlzZVJlc29sdmVyO1xuaWYgKCFoYXZlR2V0dGVycykge1xuICAgIFByb21pc2VSZXNvbHZlciA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMuYXNDYWxsYmFjayA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMuYXNDYWxsYmFjaztcbiAgICB9O1xufVxuZWxzZSB7XG4gICAgUHJvbWlzZVJlc29sdmVyID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB9O1xufVxuaWYgKGhhdmVHZXR0ZXJzKSB7XG4gICAgdmFyIHByb3AgPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZWJhY2tGb3JQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGVzNS5kZWZpbmVQcm9wZXJ0eShQcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLCBcImFzQ2FsbGJhY2tcIiwgcHJvcCk7XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KFByb21pc2VSZXNvbHZlci5wcm90b3R5cGUsIFwiY2FsbGJhY2tcIiwgcHJvcCk7XG59XG5cblByb21pc2VSZXNvbHZlci5fbm9kZWJhY2tGb3JQcm9taXNlID0gbm9kZWJhY2tGb3JQcm9taXNlO1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgUHJvbWlzZVJlc29sdmVyXVwiO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5yZXNvbHZlID1cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuZnVsZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlUmVzb2x2ZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGludm9jYXRpb24sIHJlc29sdmVyIHJlc29sdmUvcmVqZWN0IG11c3QgYmUgY2FsbGVkIHdpdGhpbiBhIHJlc29sdmVyIGNvbnRleHQuIENvbnNpZGVyIHVzaW5nIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGluc3RlYWQuXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvc2RrWEw5XFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdGhpcy5wcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9zZGtYTDlcXHUwMDBhXCIpO1xuICAgIH1cbiAgICB0aGlzLnByb21pc2UuX3JlamVjdENhbGxiYWNrKHJlYXNvbik7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9zZGtYTDlcXHUwMDBhXCIpO1xuICAgIH1cbiAgICB0aGlzLnByb21pc2UuX3Byb2dyZXNzKHZhbHVlKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKGVycikge1xuICAgIHRoaXMucHJvbWlzZS5jYW5jZWwoZXJyKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlamVjdChuZXcgVGltZW91dEVycm9yKFwidGltZW91dFwiKSk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLmlzUmVzb2x2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS5pc1Jlc29sdmVkKCk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlLnRvSlNPTigpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlUmVzb2x2ZXI7XG5cbn0se1wiLi9lcnJvcnMuanNcIjoxMyxcIi4vZXM1LmpzXCI6MTQsXCIuL3V0aWwuanNcIjozOH1dLDI2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFRISVMgPSB7fTtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBub2RlYmFja0ZvclByb21pc2UgPSBfZGVyZXFfKFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCIpXG4gICAgLl9ub2RlYmFja0ZvclByb21pc2U7XG52YXIgd2l0aEFwcGVuZGVkID0gdXRpbC53aXRoQXBwZW5kZWQ7XG52YXIgbWF5YmVXcmFwQXNFcnJvciA9IHV0aWwubWF5YmVXcmFwQXNFcnJvcjtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgVHlwZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLlR5cGVFcnJvcjtcbnZhciBkZWZhdWx0U3VmZml4ID0gXCJBc3luY1wiO1xudmFyIGRlZmF1bHRQcm9taXNpZmllZCA9IHtfX2lzUHJvbWlzaWZpZWRfXzogdHJ1ZX07XG52YXIgbm9Db3B5UHJvcHMgPSBbXG4gICAgXCJhcml0eVwiLCAgICBcImxlbmd0aFwiLFxuICAgIFwibmFtZVwiLFxuICAgIFwiYXJndW1lbnRzXCIsXG4gICAgXCJjYWxsZXJcIixcbiAgICBcImNhbGxlZVwiLFxuICAgIFwicHJvdG90eXBlXCIsXG4gICAgXCJfX2lzUHJvbWlzaWZpZWRfX1wiXG5dO1xudmFyIG5vQ29weVByb3BzUGF0dGVybiA9IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBub0NvcHlQcm9wcy5qb2luKFwifFwiKSArIFwiKSRcIik7XG5cbnZhciBkZWZhdWx0RmlsdGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB1dGlsLmlzSWRlbnRpZmllcihuYW1lKSAmJlxuICAgICAgICBuYW1lLmNoYXJBdCgwKSAhPT0gXCJfXCIgJiZcbiAgICAgICAgbmFtZSAhPT0gXCJjb25zdHJ1Y3RvclwiO1xufTtcblxuZnVuY3Rpb24gcHJvcHNGaWx0ZXIoa2V5KSB7XG4gICAgcmV0dXJuICFub0NvcHlQcm9wc1BhdHRlcm4udGVzdChrZXkpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2lmaWVkKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZuLl9faXNQcm9taXNpZmllZF9fID09PSB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNQcm9taXNpZmllZChvYmosIGtleSwgc3VmZml4KSB7XG4gICAgdmFyIHZhbCA9IHV0aWwuZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0KG9iaiwga2V5ICsgc3VmZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvbWlzaWZpZWQpO1xuICAgIHJldHVybiB2YWwgPyBpc1Byb21pc2lmaWVkKHZhbCkgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNoZWNrVmFsaWQocmV0LCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSByZXRbaV07XG4gICAgICAgIGlmIChzdWZmaXhSZWdleHAudGVzdChrZXkpKSB7XG4gICAgICAgICAgICB2YXIga2V5V2l0aG91dEFzeW5jU3VmZml4ID0ga2V5LnJlcGxhY2Uoc3VmZml4UmVnZXhwLCBcIlwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmV0Lmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldFtqXSA9PT0ga2V5V2l0aG91dEFzeW5jU3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcHJvbWlzaWZ5IGFuIEFQSSB0aGF0IGhhcyBub3JtYWwgbWV0aG9kcyB3aXRoICclcyctc3VmZml4XFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvaVdyWmJ3XFx1MDAwYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiVzXCIsIHN1ZmZpeCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZpYWJsZU1ldGhvZHMob2JqLCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCwgZmlsdGVyKSB7XG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKG9iaik7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgIHZhciBwYXNzZXNEZWZhdWx0RmlsdGVyID0gZmlsdGVyID09PSBkZWZhdWx0RmlsdGVyXG4gICAgICAgICAgICA/IHRydWUgOiBkZWZhdWx0RmlsdGVyKGtleSwgdmFsdWUsIG9iaik7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgIWlzUHJvbWlzaWZpZWQodmFsdWUpICYmXG4gICAgICAgICAgICAhaGFzUHJvbWlzaWZpZWQob2JqLCBrZXksIHN1ZmZpeCkgJiZcbiAgICAgICAgICAgIGZpbHRlcihrZXksIHZhbHVlLCBvYmosIHBhc3Nlc0RlZmF1bHRGaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXQucHVzaChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja1ZhbGlkKHJldCwgc3VmZml4LCBzdWZmaXhSZWdleHApO1xuICAgIHJldHVybiByZXQ7XG59XG5cbnZhciBlc2NhcGVJZGVudFJlZ2V4ID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWyRdKS8sIFwiXFxcXCRcIik7XG59O1xuXG52YXIgbWFrZU5vZGVQcm9taXNpZmllZEV2YWw7XG5pZiAoIXRydWUpIHtcbnZhciBzd2l0Y2hDYXNlQXJndW1lbnRPcmRlciA9IGZ1bmN0aW9uKGxpa2VseUFyZ3VtZW50Q291bnQpIHtcbiAgICB2YXIgcmV0ID0gW2xpa2VseUFyZ3VtZW50Q291bnRdO1xuICAgIHZhciBtaW4gPSBNYXRoLm1heCgwLCBsaWtlbHlBcmd1bWVudENvdW50IC0gMSAtIDMpO1xuICAgIGZvcih2YXIgaSA9IGxpa2VseUFyZ3VtZW50Q291bnQgLSAxOyBpID49IG1pbjsgLS1pKSB7XG4gICAgICAgIHJldC5wdXNoKGkpO1xuICAgIH1cbiAgICBmb3IodmFyIGkgPSBsaWtlbHlBcmd1bWVudENvdW50ICsgMTsgaSA8PSAzOyArK2kpIHtcbiAgICAgICAgcmV0LnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG52YXIgYXJndW1lbnRTZXF1ZW5jZSA9IGZ1bmN0aW9uKGFyZ3VtZW50Q291bnQpIHtcbiAgICByZXR1cm4gdXRpbC5maWxsZWRSYW5nZShhcmd1bWVudENvdW50LCBcIl9hcmdcIiwgXCJcIik7XG59O1xuXG52YXIgcGFyYW1ldGVyRGVjbGFyYXRpb24gPSBmdW5jdGlvbihwYXJhbWV0ZXJDb3VudCkge1xuICAgIHJldHVybiB1dGlsLmZpbGxlZFJhbmdlKFxuICAgICAgICBNYXRoLm1heChwYXJhbWV0ZXJDb3VudCwgMyksIFwiX2FyZ1wiLCBcIlwiKTtcbn07XG5cbnZhciBwYXJhbWV0ZXJDb3VudCA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbi5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGZuLmxlbmd0aCwgMTAyMyArIDEpLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5tYWtlTm9kZVByb21pc2lmaWVkRXZhbCA9XG5mdW5jdGlvbihjYWxsYmFjaywgcmVjZWl2ZXIsIG9yaWdpbmFsTmFtZSwgZm4pIHtcbiAgICB2YXIgbmV3UGFyYW1ldGVyQ291bnQgPSBNYXRoLm1heCgwLCBwYXJhbWV0ZXJDb3VudChmbikgLSAxKTtcbiAgICB2YXIgYXJndW1lbnRPcmRlciA9IHN3aXRjaENhc2VBcmd1bWVudE9yZGVyKG5ld1BhcmFtZXRlckNvdW50KTtcbiAgICB2YXIgc2hvdWxkUHJveHlUaGlzID0gdHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiIHx8IHJlY2VpdmVyID09PSBUSElTO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChjb3VudCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50U2VxdWVuY2UoY291bnQpLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgdmFyIGNvbW1hID0gY291bnQgPiAwID8gXCIsIFwiIDogXCJcIjtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgaWYgKHNob3VsZFByb3h5VGhpcykge1xuICAgICAgICAgICAgcmV0ID0gXCJyZXQgPSBjYWxsYmFjay5jYWxsKHRoaXMsIHt7YXJnc319LCBub2RlYmFjayk7IGJyZWFrO1xcblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gcmVjZWl2ZXIgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gXCJyZXQgPSBjYWxsYmFjayh7e2FyZ3N9fSwgbm9kZWJhY2spOyBicmVhaztcXG5cIlxuICAgICAgICAgICAgICAgIDogXCJyZXQgPSBjYWxsYmFjay5jYWxsKHJlY2VpdmVyLCB7e2FyZ3N9fSwgbm9kZWJhY2spOyBicmVhaztcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0LnJlcGxhY2UoXCJ7e2FyZ3N9fVwiLCBhcmdzKS5yZXBsYWNlKFwiLCBcIiwgY29tbWEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkge1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudE9yZGVyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQgKz0gXCJjYXNlIFwiICsgYXJndW1lbnRPcmRlcltpXSArXCI6XCIgK1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ2FsbEZvckFyZ3VtZW50Q291bnQoYXJndW1lbnRPcmRlcltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXQgKz0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgZGVmYXVsdDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGxlbiArIDEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBpID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGFyZ3NbaV0gPSBub2RlYmFjazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFtDb2RlRm9yQ2FsbF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZShcIltDb2RlRm9yQ2FsbF1cIiwgKHNob3VsZFByb3h5VGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmV0ID0gY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XFxuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJldCA9IGNhbGxiYWNrLmFwcGx5KHJlY2VpdmVyLCBhcmdzKTtcXG5cIikpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHZhciBnZXRGdW5jdGlvbkNvZGUgPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoXCJ0aGlzICE9IG51bGwgPyB0aGlzWydcIitjYWxsYmFjaytcIiddIDogZm5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZuXCI7XG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiUHJvbWlzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoQXBwZW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF5YmVXcmFwQXNFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub2RlYmFja0ZvclByb21pc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ5Q2F0Y2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3JPYmpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90RW51bWVyYWJsZVByb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSU5URVJOQUxcIixcIid1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgdmFyIHJldCA9IGZ1bmN0aW9uIChQYXJhbWV0ZXJzKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBub2RlYmFjayA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTsgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciByZXQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHRyeUNhdGNoKFtHZXRGdW5jdGlvbkNvZGVdKTsgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHN3aXRjaChsZW4pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBbQ29kZUZvclN3aXRjaENhc2VdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhtYXliZVdyYXBBc0Vycm9yKHJldC5lKSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AocmV0LCAnX19pc1Byb21pc2lmaWVkX18nLCB0cnVlKTsgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIHJldDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCJcbiAgICAgICAgLnJlcGxhY2UoXCJQYXJhbWV0ZXJzXCIsIHBhcmFtZXRlckRlY2xhcmF0aW9uKG5ld1BhcmFtZXRlckNvdW50KSlcbiAgICAgICAgLnJlcGxhY2UoXCJbQ29kZUZvclN3aXRjaENhc2VdXCIsIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkpXG4gICAgICAgIC5yZXBsYWNlKFwiW0dldEZ1bmN0aW9uQ29kZV1cIiwgZ2V0RnVuY3Rpb25Db2RlKSkoXG4gICAgICAgICAgICBQcm9taXNlLFxuICAgICAgICAgICAgZm4sXG4gICAgICAgICAgICByZWNlaXZlcixcbiAgICAgICAgICAgIHdpdGhBcHBlbmRlZCxcbiAgICAgICAgICAgIG1heWJlV3JhcEFzRXJyb3IsXG4gICAgICAgICAgICBub2RlYmFja0ZvclByb21pc2UsXG4gICAgICAgICAgICB1dGlsLnRyeUNhdGNoLFxuICAgICAgICAgICAgdXRpbC5lcnJvck9iaixcbiAgICAgICAgICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AsXG4gICAgICAgICAgICBJTlRFUk5BTFxuICAgICAgICApO1xufTtcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmUoY2FsbGJhY2ssIHJlY2VpdmVyLCBfLCBmbikge1xuICAgIHZhciBkZWZhdWx0VGhpcyA9IChmdW5jdGlvbigpIHtyZXR1cm4gdGhpczt9KSgpO1xuICAgIHZhciBtZXRob2QgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjYWxsYmFjayA9IGZuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9taXNpZmllZCgpIHtcbiAgICAgICAgdmFyIF9yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICBpZiAocmVjZWl2ZXIgPT09IFRISVMpIF9yZWNlaXZlciA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICB2YXIgY2IgPSB0eXBlb2YgbWV0aG9kID09PSBcInN0cmluZ1wiICYmIHRoaXMgIT09IGRlZmF1bHRUaGlzXG4gICAgICAgICAgICA/IHRoaXNbbWV0aG9kXSA6IGNhbGxiYWNrO1xuICAgICAgICB2YXIgZm4gPSBub2RlYmFja0ZvclByb21pc2UocHJvbWlzZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYi5hcHBseShfcmVjZWl2ZXIsIHdpdGhBcHBlbmRlZChhcmd1bWVudHMsIGZuKSk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2sobWF5YmVXcmFwQXNFcnJvcihlKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AocHJvbWlzaWZpZWQsIFwiX19pc1Byb21pc2lmaWVkX19cIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHByb21pc2lmaWVkO1xufVxuXG52YXIgbWFrZU5vZGVQcm9taXNpZmllZCA9IGNhbkV2YWx1YXRlXG4gICAgPyBtYWtlTm9kZVByb21pc2lmaWVkRXZhbFxuICAgIDogbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmU7XG5cbmZ1bmN0aW9uIHByb21pc2lmeUFsbChvYmosIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcikge1xuICAgIHZhciBzdWZmaXhSZWdleHAgPSBuZXcgUmVnRXhwKGVzY2FwZUlkZW50UmVnZXgoc3VmZml4KSArIFwiJFwiKTtcbiAgICB2YXIgbWV0aG9kcyA9XG4gICAgICAgIHByb21pc2lmaWFibGVNZXRob2RzKG9iaiwgc3VmZml4LCBzdWZmaXhSZWdleHAsIGZpbHRlcik7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRob2RzW2ldO1xuICAgICAgICB2YXIgZm4gPSBtZXRob2RzW2krMV07XG4gICAgICAgIHZhciBwcm9taXNpZmllZEtleSA9IGtleSArIHN1ZmZpeDtcbiAgICAgICAgb2JqW3Byb21pc2lmaWVkS2V5XSA9IHByb21pc2lmaWVyID09PSBtYWtlTm9kZVByb21pc2lmaWVkXG4gICAgICAgICAgICAgICAgPyBtYWtlTm9kZVByb21pc2lmaWVkKGtleSwgVEhJUywga2V5LCBmbiwgc3VmZml4KVxuICAgICAgICAgICAgICAgIDogcHJvbWlzaWZpZXIoZm4sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU5vZGVQcm9taXNpZmllZChrZXksIFRISVMsIGtleSwgZm4sIHN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHV0aWwudG9GYXN0UHJvcGVydGllcyhvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHByb21pc2lmeShjYWxsYmFjaywgcmVjZWl2ZXIpIHtcbiAgICByZXR1cm4gbWFrZU5vZGVQcm9taXNpZmllZChjYWxsYmFjaywgcmVjZWl2ZXIsIHVuZGVmaW5lZCwgY2FsbGJhY2spO1xufVxuXG5Qcm9taXNlLnByb21pc2lmeSA9IGZ1bmN0aW9uIChmbiwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzkxNmxKSlxcdTAwMGFcIik7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2lmaWVkKGZuKSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgfVxuICAgIHZhciByZXQgPSBwcm9taXNpZnkoZm4sIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gVEhJUyA6IHJlY2VpdmVyKTtcbiAgICB1dGlsLmNvcHlEZXNjcmlwdG9ycyhmbiwgcmV0LCBwcm9wc0ZpbHRlcik7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvbWlzaWZ5QWxsID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhlIHRhcmdldCBvZiBwcm9taXNpZnlBbGwgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzlJVGxWMFxcdTAwMGFcIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgdmFyIHN1ZmZpeCA9IG9wdGlvbnMuc3VmZml4O1xuICAgIGlmICh0eXBlb2Ygc3VmZml4ICE9PSBcInN0cmluZ1wiKSBzdWZmaXggPSBkZWZhdWx0U3VmZml4O1xuICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gXCJmdW5jdGlvblwiKSBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyO1xuICAgIHZhciBwcm9taXNpZmllciA9IG9wdGlvbnMucHJvbWlzaWZpZXI7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBwcm9taXNpZmllciA9IG1ha2VOb2RlUHJvbWlzaWZpZWQ7XG5cbiAgICBpZiAoIXV0aWwuaXNJZGVudGlmaWVyKHN1ZmZpeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJzdWZmaXggbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC84RlpvNVZcXHUwMDBhXCIpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gdXRpbC5pbmhlcml0ZWREYXRhS2V5cyh0YXJnZXQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5c1tpXV07XG4gICAgICAgIGlmIChrZXlzW2ldICE9PSBcImNvbnN0cnVjdG9yXCIgJiZcbiAgICAgICAgICAgIHV0aWwuaXNDbGFzcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHByb21pc2lmeUFsbCh2YWx1ZS5wcm90b3R5cGUsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcik7XG4gICAgICAgICAgICBwcm9taXNpZnlBbGwodmFsdWUsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzaWZ5QWxsKHRhcmdldCwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyKTtcbn07XG59O1xuXG5cbn0se1wiLi9lcnJvcnNcIjoxMyxcIi4vcHJvbWlzZV9yZXNvbHZlci5qc1wiOjI1LFwiLi91dGlsLmpzXCI6Mzh9XSwyNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oXG4gICAgUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBpc09iamVjdCA9IHV0aWwuaXNPYmplY3Q7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1LmpzXCIpO1xuXG5mdW5jdGlvbiBQcm9wZXJ0aWVzUHJvbWlzZUFycmF5KG9iaikge1xuICAgIHZhciBrZXlzID0gZXM1LmtleXMob2JqKTtcbiAgICB2YXIgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW4gKiAyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWx1ZXNbaV0gPSBvYmpba2V5XTtcbiAgICAgICAgdmFsdWVzW2kgKyBsZW5dID0ga2V5O1xuICAgIH1cbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xufVxudXRpbC5pbmhlcml0cyhQcm9wZXJ0aWVzUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC0zKSA7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgIHZhciB2YWwgPSB7fTtcbiAgICAgICAgdmFyIGtleU9mZnNldCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aCgpOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhbFt0aGlzLl92YWx1ZXNbaSArIGtleU9mZnNldF1dID0gdGhpcy5fdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodmFsKTtcbiAgICB9XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVByb2dyZXNzZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fcHJvbWlzZS5fcHJvZ3Jlc3Moe1xuICAgICAgICBrZXk6IHRoaXMuX3ZhbHVlc1tpbmRleCArIHRoaXMubGVuZ3RoKCldLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn07XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLnNob3VsZENvcHlWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID0gZnVuY3Rpb24gKGxlbikge1xuICAgIHJldHVybiBsZW4gPj4gMTtcbn07XG5cbmZ1bmN0aW9uIHByb3BzKHByb21pc2VzKSB7XG4gICAgdmFyIHJldDtcbiAgICB2YXIgY2FzdFZhbHVlID0gdHJ5Q29udmVydFRvUHJvbWlzZShwcm9taXNlcyk7XG5cbiAgICBpZiAoIWlzT2JqZWN0KGNhc3RWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImNhbm5vdCBhd2FpdCBwcm9wZXJ0aWVzIG9mIGEgbm9uLW9iamVjdFxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL09zRktDOFxcdTAwMGFcIik7XG4gICAgfSBlbHNlIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldCA9IGNhc3RWYWx1ZS5fdGhlbihcbiAgICAgICAgICAgIFByb21pc2UucHJvcHMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gbmV3IFByb3BlcnRpZXNQcm9taXNlQXJyYXkoY2FzdFZhbHVlKS5wcm9taXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGNhc3RWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0Ll9wcm9wYWdhdGVGcm9tKGNhc3RWYWx1ZSwgNCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cblByb21pc2UucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9wcyh0aGlzKTtcbn07XG5cblByb21pc2UucHJvcHMgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gcHJvcHMocHJvbWlzZXMpO1xufTtcbn07XG5cbn0se1wiLi9lczUuanNcIjoxNCxcIi4vdXRpbC5qc1wiOjM4fV0sMjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBhcnJheU1vdmUoc3JjLCBzcmNJbmRleCwgZHN0LCBkc3RJbmRleCwgbGVuKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZW47ICsraikge1xuICAgICAgICBkc3RbaiArIGRzdEluZGV4XSA9IHNyY1tqICsgc3JjSW5kZXhdO1xuICAgICAgICBzcmNbaiArIHNyY0luZGV4XSA9IHZvaWQgMDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFF1ZXVlKGNhcGFjaXR5KSB7XG4gICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX2Zyb250ID0gMDtcbn1cblxuUXVldWUucHJvdG90eXBlLl93aWxsQmVPdmVyQ2FwYWNpdHkgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eSA8IHNpemU7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX3B1c2hPbmUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGggKyAxKTtcbiAgICB2YXIgaSA9ICh0aGlzLl9mcm9udCArIGxlbmd0aCkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzW2ldID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aCArIDE7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX3Vuc2hpZnRPbmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBjYXBhY2l0eSA9IHRoaXMuX2NhcGFjaXR5O1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkodGhpcy5sZW5ndGgoKSArIDEpO1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250O1xuICAgIHZhciBpID0gKCgoKCBmcm9udCAtIDEgKSAmXG4gICAgICAgICAgICAgICAgICAgICggY2FwYWNpdHkgLSAxKSApIF4gY2FwYWNpdHkgKSAtIGNhcGFjaXR5ICk7XG4gICAgdGhpc1tpXSA9IHZhbHVlO1xuICAgIHRoaXMuX2Zyb250ID0gaTtcbiAgICB0aGlzLl9sZW5ndGggPSB0aGlzLmxlbmd0aCgpICsgMTtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0aGlzLl91bnNoaWZ0T25lKGFyZyk7XG4gICAgdGhpcy5fdW5zaGlmdE9uZShyZWNlaXZlcik7XG4gICAgdGhpcy5fdW5zaGlmdE9uZShmbik7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpICsgMztcbiAgICBpZiAodGhpcy5fd2lsbEJlT3ZlckNhcGFjaXR5KGxlbmd0aCkpIHtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShmbik7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUocmVjZWl2ZXIpO1xuICAgICAgICB0aGlzLl9wdXNoT25lKGFyZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGogPSB0aGlzLl9mcm9udCArIGxlbmd0aCAtIDM7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGgpO1xuICAgIHZhciB3cmFwTWFzayA9IHRoaXMuX2NhcGFjaXR5IC0gMTtcbiAgICB0aGlzWyhqICsgMCkgJiB3cmFwTWFza10gPSBmbjtcbiAgICB0aGlzWyhqICsgMSkgJiB3cmFwTWFza10gPSByZWNlaXZlcjtcbiAgICB0aGlzWyhqICsgMikgJiB3cmFwTWFza10gPSBhcmc7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250LFxuICAgICAgICByZXQgPSB0aGlzW2Zyb250XTtcblxuICAgIHRoaXNbZnJvbnRdID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Zyb250ID0gKGZyb250ICsgMSkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUXVldWUucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9jaGVja0NhcGFjaXR5ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICBpZiAodGhpcy5fY2FwYWNpdHkgPCBzaXplKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVRvKHRoaXMuX2NhcGFjaXR5IDw8IDEpO1xuICAgIH1cbn07XG5cblF1ZXVlLnByb3RvdHlwZS5fcmVzaXplVG8gPSBmdW5jdGlvbiAoY2FwYWNpdHkpIHtcbiAgICB2YXIgb2xkQ2FwYWNpdHkgPSB0aGlzLl9jYXBhY2l0eTtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250O1xuICAgIHZhciBsZW5ndGggPSB0aGlzLl9sZW5ndGg7XG4gICAgdmFyIG1vdmVJdGVtc0NvdW50ID0gKGZyb250ICsgbGVuZ3RoKSAmIChvbGRDYXBhY2l0eSAtIDEpO1xuICAgIGFycmF5TW92ZSh0aGlzLCAwLCB0aGlzLCBvbGRDYXBhY2l0eSwgbW92ZUl0ZW1zQ291bnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxufSx7fV0sMjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFxuICAgIFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pIHtcbnZhciBpc0FycmF5ID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKS5pc0FycmF5O1xuXG52YXIgcmFjZUxhdGVyID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIHJldHVybiByYWNlKGFycmF5LCBwcm9taXNlKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHJhY2UocHJvbWlzZXMsIHBhcmVudCkge1xuICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHByb21pc2VzKTtcblxuICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiByYWNlTGF0ZXIobWF5YmVQcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKCFpc0FycmF5KHByb21pc2VzKSkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGFuIGFycmF5LCBhIHByb21pc2Ugb3IgYSB0aGVuYWJsZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL3M4TU1oY1xcdTAwMGFcIik7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHBhcmVudCwgNCB8IDEpO1xuICAgIH1cbiAgICB2YXIgZnVsZmlsbCA9IHJldC5fZnVsZmlsbDtcbiAgICB2YXIgcmVqZWN0ID0gcmV0Ll9yZWplY3Q7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHByb21pc2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciB2YWwgPSBwcm9taXNlc1tpXTtcblxuICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgJiYgIShpIGluIHByb21pc2VzKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmNhc3QodmFsKS5fdGhlbihmdWxmaWxsLCByZWplY3QsIHVuZGVmaW5lZCwgcmV0LCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIHJhY2UocHJvbWlzZXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByYWNlKHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG59O1xuXG59LHtcIi4vdXRpbC5qc1wiOjM4fV0sMzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2VBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpUmVqZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBJTlRFUk5BTCkge1xudmFyIGFzeW5jID0gX2RlcmVxXyhcIi4vYXN5bmMuanNcIik7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbmZ1bmN0aW9uIFJlZHVjdGlvblByb21pc2VBcnJheShwcm9taXNlcywgZm4sIGFjY3VtLCBfZWFjaCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB0aGlzLl9wcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHRoaXMuX3ByZXNlcnZlZFZhbHVlcyA9IF9lYWNoID09PSBJTlRFUk5BTCA/IFtdIDogbnVsbDtcbiAgICB0aGlzLl96ZXJvdGhJc0FjY3VtID0gKGFjY3VtID09PSB1bmRlZmluZWQpO1xuICAgIHRoaXMuX2dvdEFjY3VtID0gZmFsc2U7XG4gICAgdGhpcy5fcmVkdWNpbmdJbmRleCA9ICh0aGlzLl96ZXJvdGhJc0FjY3VtID8gMSA6IDApO1xuICAgIHRoaXMuX3ZhbHVlc1BoYXNlID0gdW5kZWZpbmVkO1xuICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKGFjY3VtLCB0aGlzLl9wcm9taXNlKTtcbiAgICB2YXIgcmVqZWN0ZWQgPSBmYWxzZTtcbiAgICB2YXIgaXNQcm9taXNlID0gbWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZTtcbiAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UuX2lzUGVuZGluZygpKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIC0xKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuX2lzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIGFjY3VtID0gbWF5YmVQcm9taXNlLl92YWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5fZ290QWNjdW0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0KG1heWJlUHJvbWlzZS5fcmVhc29uKCkpO1xuICAgICAgICAgICAgcmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghKGlzUHJvbWlzZSB8fCB0aGlzLl96ZXJvdGhJc0FjY3VtKSkgdGhpcy5fZ290QWNjdW0gPSB0cnVlO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZm47XG4gICAgdGhpcy5fYWNjdW0gPSBhY2N1bTtcbiAgICBpZiAoIXJlamVjdGVkKSBhc3luYy5pbnZva2UoaW5pdCwgdGhpcywgdW5kZWZpbmVkKTtcbn1cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy5faW5pdCQodW5kZWZpbmVkLCAtNSk7XG59XG51dGlsLmluaGVyaXRzKFJlZHVjdGlvblByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlRW1wdHlBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fZ290QWNjdW0gfHwgdGhpcy5femVyb3RoSXNBY2N1bSkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXSA6IHRoaXMuX2FjY3VtKTtcbiAgICB9XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgIHZhciBwcmVzZXJ2ZWRWYWx1ZXMgPSB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXM7XG4gICAgdmFyIGlzRWFjaCA9IHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbDtcbiAgICB2YXIgZ290QWNjdW0gPSB0aGlzLl9nb3RBY2N1bTtcbiAgICB2YXIgdmFsdWVzUGhhc2UgPSB0aGlzLl92YWx1ZXNQaGFzZTtcbiAgICB2YXIgdmFsdWVzUGhhc2VJbmRleDtcbiAgICBpZiAoIXZhbHVlc1BoYXNlKSB7XG4gICAgICAgIHZhbHVlc1BoYXNlID0gdGhpcy5fdmFsdWVzUGhhc2UgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YWx1ZXNQaGFzZUluZGV4PTA7IHZhbHVlc1BoYXNlSW5kZXg8bGVuZ3RoOyArK3ZhbHVlc1BoYXNlSW5kZXgpIHtcbiAgICAgICAgICAgIHZhbHVlc1BoYXNlW3ZhbHVlc1BoYXNlSW5kZXhdID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZXNQaGFzZUluZGV4ID0gdmFsdWVzUGhhc2VbaW5kZXhdO1xuXG4gICAgaWYgKGluZGV4ID09PSAwICYmIHRoaXMuX3plcm90aElzQWNjdW0pIHtcbiAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZ290QWNjdW0gPSBnb3RBY2N1bSA9IHRydWU7XG4gICAgICAgIHZhbHVlc1BoYXNlW2luZGV4XSA9ICgodmFsdWVzUGhhc2VJbmRleCA9PT0gMClcbiAgICAgICAgICAgID8gMSA6IDIpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2FjY3VtID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2dvdEFjY3VtID0gZ290QWNjdW0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWx1ZXNQaGFzZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB2YWx1ZXNQaGFzZVtpbmRleF0gPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzUGhhc2VbaW5kZXhdID0gMjtcbiAgICAgICAgICAgIHRoaXMuX2FjY3VtID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFnb3RBY2N1bSkgcmV0dXJuO1xuXG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcHJvbWlzZS5fYm91bmRUbztcbiAgICB2YXIgcmV0O1xuXG4gICAgZm9yICh2YXIgaSA9IHRoaXMuX3JlZHVjaW5nSW5kZXg7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICB2YWx1ZXNQaGFzZUluZGV4ID0gdmFsdWVzUGhhc2VbaV07XG4gICAgICAgIGlmICh2YWx1ZXNQaGFzZUluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWR1Y2luZ0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVzUGhhc2VJbmRleCAhPT0gMSkgcmV0dXJuO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgaWYgKGlzRWFjaCkge1xuICAgICAgICAgICAgcHJlc2VydmVkVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgcmV0ID0gdHJ5Q2F0Y2goY2FsbGJhY2spLmNhbGwocmVjZWl2ZXIsIHZhbHVlLCBpLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gdHJ5Q2F0Y2goY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgLmNhbGwocmVjZWl2ZXIsIHRoaXMuX2FjY3VtLCB2YWx1ZSwgaSwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9taXNlLl9wb3BDb250ZXh0KCk7XG5cbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHJldHVybiB0aGlzLl9yZWplY3QocmV0LmUpO1xuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHJldCwgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5faXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNQaGFzZVtpXSA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fcHJveHlQcm9taXNlQXJyYXkodGhpcywgaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5faXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldCA9IG1heWJlUHJvbWlzZS5fdmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdChtYXliZVByb21pc2UuX3JlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSBpICsgMTtcbiAgICAgICAgdGhpcy5fYWNjdW0gPSByZXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVzb2x2ZShpc0VhY2ggPyBwcmVzZXJ2ZWRWYWx1ZXMgOiB0aGlzLl9hY2N1bSk7XG59O1xuXG5mdW5jdGlvbiByZWR1Y2UocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICB2YXIgYXJyYXkgPSBuZXcgUmVkdWN0aW9uUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCk7XG4gICAgcmV0dXJuIGFycmF5LnByb21pc2UoKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGZuLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gcmVkdWNlKHRoaXMsIGZuLCBpbml0aWFsVmFsdWUsIG51bGwpO1xufTtcblxuUHJvbWlzZS5yZWR1Y2UgPSBmdW5jdGlvbiAocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKSB7XG4gICAgcmV0dXJuIHJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpO1xufTtcbn07XG5cbn0se1wiLi9hc3luYy5qc1wiOjIsXCIuL3V0aWwuanNcIjozOH1dLDMxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIHNjaGVkdWxlO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIG5vQXN5bmNTY2hlZHVsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhc3luYyBzY2hlZHVsZXIgYXZhaWxhYmxlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvbTNPVFhrXFx1MDAwYVwiKTtcbn07XG5pZiAodXRpbC5pc05vZGUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgR2xvYmFsU2V0SW1tZWRpYXRlID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbiAgICB2YXIgUHJvY2Vzc05leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICBzY2hlZHVsZSA9IHV0aWwuaXNSZWNlbnROb2RlXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbihmbikgeyBHbG9iYWxTZXRJbW1lZGlhdGUuY2FsbChnbG9iYWwsIGZuKTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24oZm4pIHsgUHJvY2Vzc05leHRUaWNrLmNhbGwocHJvY2VzcywgZm4pOyB9O1xufSBlbHNlIGlmICgodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIpICYmXG4gICAgICAgICAgISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yICYmXG4gICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZm4pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRpdiwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgeyBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImZvb1wiKTsgfTtcbiAgICB9O1xuICAgIHNjaGVkdWxlLmlzU3RhdGljID0gdHJ1ZTtcbn0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHNjaGVkdWxlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfTtcbn0gZWxzZSBpZiAodHlwZW9mIHNldFRpbWVvdXQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBzY2hlZHVsZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBzY2hlZHVsZSA9IG5vQXN5bmNTY2hlZHVsZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNjaGVkdWxlO1xuXG59LHtcIi4vdXRpbFwiOjM4fV0sMzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9XG4gICAgZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5KSB7XG52YXIgUHJvbWlzZUluc3BlY3Rpb24gPSBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xuXG5mdW5jdGlvbiBTZXR0bGVkUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG59XG51dGlsLmluaGVyaXRzKFNldHRsZWRQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVzb2x2ZWQgPSBmdW5jdGlvbiAoaW5kZXgsIGluc3BlY3Rpb24pIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gaW5zcGVjdGlvbjtcbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgIH1cbn07XG5cblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZUluc3BlY3Rpb24oKTtcbiAgICByZXQuX2JpdEZpZWxkID0gMjY4NDM1NDU2O1xuICAgIHJldC5fc2V0dGxlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fcHJvbWlzZVJlc29sdmVkKGluZGV4LCByZXQpO1xufTtcblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVqZWN0ZWQgPSBmdW5jdGlvbiAocmVhc29uLCBpbmRleCkge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZUluc3BlY3Rpb24oKTtcbiAgICByZXQuX2JpdEZpZWxkID0gMTM0MjE3NzI4O1xuICAgIHJldC5fc2V0dGxlZFZhbHVlID0gcmVhc29uO1xuICAgIHRoaXMuX3Byb21pc2VSZXNvbHZlZChpbmRleCwgcmV0KTtcbn07XG5cblByb21pc2Uuc2V0dGxlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXR0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHRoaXMpLnByb21pc2UoKTtcbn07XG59O1xuXG59LHtcIi4vdXRpbC5qc1wiOjM4fV0sMzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9XG5mdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbikge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsLmpzXCIpO1xudmFyIFJhbmdlRXJyb3IgPSBfZGVyZXFfKFwiLi9lcnJvcnMuanNcIikuUmFuZ2VFcnJvcjtcbnZhciBBZ2dyZWdhdGVFcnJvciA9IF9kZXJlcV8oXCIuL2Vycm9ycy5qc1wiKS5BZ2dyZWdhdGVFcnJvcjtcbnZhciBpc0FycmF5ID0gdXRpbC5pc0FycmF5O1xuXG5cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkodmFsdWVzKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQodmFsdWVzKTtcbiAgICB0aGlzLl9ob3dNYW55ID0gMDtcbiAgICB0aGlzLl91bndyYXAgPSBmYWxzZTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xufVxudXRpbC5pbmhlcml0cyhTb21lUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvd01hbnkgPT09IDApIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faW5pdCQodW5kZWZpbmVkLCAtNSk7XG4gICAgdmFyIGlzQXJyYXlSZXNvbHZlZCA9IGlzQXJyYXkodGhpcy5fdmFsdWVzKTtcbiAgICBpZiAoIXRoaXMuX2lzUmVzb2x2ZWQoKSAmJlxuICAgICAgICBpc0FycmF5UmVzb2x2ZWQgJiZcbiAgICAgICAgdGhpcy5faG93TWFueSA+IHRoaXMuX2NhblBvc3NpYmx5RnVsZmlsbCgpKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKHRoaXMubGVuZ3RoKCkpKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9pbml0KCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zZXRVbndyYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdW53cmFwID0gdHJ1ZTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLmhvd01hbnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvd01hbnk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zZXRIb3dNYW55ID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdGhpcy5faG93TWFueSA9IGNvdW50O1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLl9hZGRGdWxmaWxsZWQodmFsdWUpO1xuICAgIGlmICh0aGlzLl9mdWxmaWxsZWQoKSA9PT0gdGhpcy5ob3dNYW55KCkpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IHRoaXMuaG93TWFueSgpO1xuICAgICAgICBpZiAodGhpcy5ob3dNYW55KCkgPT09IDEgJiYgdGhpcy5fdW53cmFwKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRoaXMuX2FkZFJlamVjdGVkKHJlYXNvbik7XG4gICAgaWYgKHRoaXMuaG93TWFueSgpID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQWdncmVnYXRlRXJyb3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoKCk7IGkgPCB0aGlzLl92YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGUucHVzaCh0aGlzLl92YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZnVsZmlsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJlc29sdmVkO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMubGVuZ3RoIC0gdGhpcy5sZW5ndGgoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9hZGRSZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl92YWx1ZXMucHVzaChyZWFzb24pO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl90b3RhbFJlc29sdmVkKytdID0gdmFsdWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2FuUG9zc2libHlGdWxmaWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCgpIC0gdGhpcy5fcmVqZWN0ZWQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9nZXRSYW5nZUVycm9yID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIklucHV0IGFycmF5IG11c3QgY29udGFpbiBhdCBsZWFzdCBcIiArXG4gICAgICAgICAgICB0aGlzLl9ob3dNYW55ICsgXCIgaXRlbXMgYnV0IGNvbnRhaW5zIG9ubHkgXCIgKyBjb3VudCArIFwiIGl0ZW1zXCI7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKG1lc3NhZ2UpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKDApKTtcbn07XG5cbmZ1bmN0aW9uIHNvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICBpZiAoKGhvd01hbnkgfCAwKSAhPT0gaG93TWFueSB8fCBob3dNYW55IDwgMCkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgcG9zaXRpdmUgaW50ZWdlclxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsLzF3QW1IeFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciByZXQgPSBuZXcgU29tZVByb21pc2VBcnJheShwcm9taXNlcyk7XG4gICAgdmFyIHByb21pc2UgPSByZXQucHJvbWlzZSgpO1xuICAgIHJldC5zZXRIb3dNYW55KGhvd01hbnkpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2Uuc29tZSA9IGZ1bmN0aW9uIChwcm9taXNlcywgaG93TWFueSkge1xuICAgIHJldHVybiBzb21lKHByb21pc2VzLCBob3dNYW55KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNvbWUgPSBmdW5jdGlvbiAoaG93TWFueSkge1xuICAgIHJldHVybiBzb21lKHRoaXMsIGhvd01hbnkpO1xufTtcblxuUHJvbWlzZS5fU29tZVByb21pc2VBcnJheSA9IFNvbWVQcm9taXNlQXJyYXk7XG59O1xuXG59LHtcIi4vZXJyb3JzLmpzXCI6MTMsXCIuL3V0aWwuanNcIjozOH1dLDM0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiBQcm9taXNlSW5zcGVjdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKHByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHByb21pc2UuX3NldHRsZWRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gMDtcbiAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYW5ub3QgZ2V0IGZ1bGZpbGxtZW50IHZhbHVlIG9mIGEgbm9uLWZ1bGZpbGxlZCBwcm9taXNlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvaGMxRExqXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5lcnJvciA9XG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUucmVhc29uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgcmVqZWN0aW9uIHJlYXNvbiBvZiBhIG5vbi1yZWplY3RlZCBwcm9taXNlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvaFB1aXdCXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc0Z1bGZpbGxlZCA9XG5Qcm9taXNlLnByb3RvdHlwZS5faXNGdWxmaWxsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDI2ODQzNTQ1NikgPiAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUmVqZWN0ZWQgPVxuUHJvbWlzZS5wcm90b3R5cGUuX2lzUmVqZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEzNDIxNzcyOCkgPiAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUGVuZGluZyA9XG5Qcm9taXNlLnByb3RvdHlwZS5faXNQZW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA0MDI2NTMxODQpID09PSAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUmVzb2x2ZWQgPVxuUHJvbWlzZS5wcm90b3R5cGUuX2lzUmVzb2x2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDQwMjY1MzE4NCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNQZW5kaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldCgpLl9pc1BlbmRpbmcoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzUmVqZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0KCkuX2lzUmVqZWN0ZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzRnVsZmlsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldCgpLl9pc0Z1bGZpbGxlZCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZXNvbHZlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXQoKS5faXNSZXNvbHZlZCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3ZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWFzb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldCgpO1xuICAgIGlmICghdGFyZ2V0LmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgb2YgYSBub24tZnVsZmlsbGVkIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9oYzFETGpcXHUwMDBhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0Ll9zZXR0bGVkVmFsdWU7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgaWYgKCF0YXJnZXQuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYW5ub3QgZ2V0IHJlamVjdGlvbiByZWFzb24gb2YgYSBub24tcmVqZWN0ZWQgcHJvbWlzZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL2hQdWl3QlxcdTAwMGFcIik7XG4gICAgfVxuICAgIHRhcmdldC5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIHJldHVybiB0YXJnZXQuX3NldHRsZWRWYWx1ZTtcbn07XG5cblxuUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2VJbnNwZWN0aW9uO1xufTtcblxufSx7fV0sMzU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWwuanNcIik7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcblxuZnVuY3Rpb24gdHJ5Q29udmVydFRvUHJvbWlzZShvYmosIGNvbnRleHQpIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FueUJsdWViaXJkUHJvbWlzZShvYmopKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICAgICAgb2JqLl90aGVuKFxuICAgICAgICAgICAgICAgIHJldC5fZnVsZmlsbFVuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICByZXQuX3JlamVjdFVuY2hlY2tlZENoZWNrRXJyb3IsXG4gICAgICAgICAgICAgICAgcmV0Ll9wcm9ncmVzc1VuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICByZXQsXG4gICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRoZW4gPSB1dGlsLnRyeUNhdGNoKGdldFRoZW4pKG9iaik7XG4gICAgICAgIGlmICh0aGVuID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgICAgICB2YXIgcmV0ID0gUHJvbWlzZS5yZWplY3QodGhlbi5lKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0KSBjb250ZXh0Ll9wb3BDb250ZXh0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkb1RoZW5hYmxlKG9iaiwgdGhlbiwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgICByZXR1cm4gb2JqLnRoZW47XG59XG5cbnZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBpc0FueUJsdWViaXJkUHJvbWlzZShvYmopIHtcbiAgICByZXR1cm4gaGFzUHJvcC5jYWxsKG9iaiwgXCJfcHJvbWlzZTBcIik7XG59XG5cbmZ1bmN0aW9uIGRvVGhlbmFibGUoeCwgdGhlbiwgY29udGV4dCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHZhciByZXQgPSBwcm9taXNlO1xuICAgIGlmIChjb250ZXh0KSBjb250ZXh0Ll9wdXNoQ29udGV4dCgpO1xuICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3BvcENvbnRleHQoKTtcbiAgICB2YXIgc3luY2hyb25vdXMgPSB0cnVlO1xuICAgIHZhciByZXN1bHQgPSB1dGlsLnRyeUNhdGNoKHRoZW4pLmNhbGwoeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlRnJvbVRoZW5hYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdEZyb21UaGVuYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Zyb21UaGVuYWJsZSk7XG4gICAgc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICBpZiAocHJvbWlzZSAmJiByZXN1bHQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHJlc3VsdC5lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUZyb21UaGVuYWJsZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXByb21pc2UpIHJldHVybjtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVqZWN0RnJvbVRoZW5hYmxlKHJlYXNvbikge1xuICAgICAgICBpZiAoIXByb21pc2UpIHJldHVybjtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVhc29uLCBzeW5jaHJvbm91cywgdHJ1ZSk7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2dyZXNzRnJvbVRoZW5hYmxlKHZhbHVlKSB7XG4gICAgICAgIGlmICghcHJvbWlzZSkgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIHByb21pc2UuX3Byb2dyZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHByb21pc2UuX3Byb2dyZXNzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5yZXR1cm4gdHJ5Q29udmVydFRvUHJvbWlzZTtcbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSwzNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBQcm9taXNlLlRpbWVvdXRFcnJvcjtcblxudmFyIGFmdGVyVGltZW91dCA9IGZ1bmN0aW9uIChwcm9taXNlLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFwcm9taXNlLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBcIm9wZXJhdGlvbiB0aW1lZCBvdXRcIjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBUaW1lb3V0RXJyb3IobWVzc2FnZSk7XG4gICAgdXRpbC5tYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24oZXJyKTtcbiAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKGVycik7XG4gICAgcHJvbWlzZS5fY2FuY2VsKGVycik7XG59O1xuXG52YXIgYWZ0ZXJWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBkZWxheSgrdGhpcykudGhlblJldHVybih2YWx1ZSk7IH07XG52YXIgZGVsYXkgPSBQcm9taXNlLmRlbGF5ID0gZnVuY3Rpb24gKHZhbHVlLCBtcykge1xuICAgIGlmIChtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1zID0gdmFsdWU7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyByZXQuX2Z1bGZpbGwoKTsgfSwgbXMpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBtcyA9ICttcztcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS5fdGhlbihhZnRlclZhbHVlLCBudWxsLCBudWxsLCBtcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gKG1zKSB7XG4gICAgcmV0dXJuIGRlbGF5KHRoaXMsIG1zKTtcbn07XG5cbmZ1bmN0aW9uIHN1Y2Nlc3NDbGVhcih2YWx1ZSkge1xuICAgIHZhciBoYW5kbGUgPSB0aGlzO1xuICAgIGlmIChoYW5kbGUgaW5zdGFuY2VvZiBOdW1iZXIpIGhhbmRsZSA9ICtoYW5kbGU7XG4gICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBmYWlsdXJlQ2xlYXIocmVhc29uKSB7XG4gICAgdmFyIGhhbmRsZSA9IHRoaXM7XG4gICAgaWYgKGhhbmRsZSBpbnN0YW5jZW9mIE51bWJlcikgaGFuZGxlID0gK2hhbmRsZTtcbiAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICB0aHJvdyByZWFzb247XG59XG5cblByb21pc2UucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbiAobXMsIG1lc3NhZ2UpIHtcbiAgICBtcyA9ICttcztcbiAgICB2YXIgcmV0ID0gdGhpcy50aGVuKCkuY2FuY2VsbGFibGUoKTtcbiAgICByZXQuX2NhbmNlbGxhdGlvblBhcmVudCA9IHRoaXM7XG4gICAgdmFyIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dFRpbWVvdXQoKSB7XG4gICAgICAgIGFmdGVyVGltZW91dChyZXQsIG1lc3NhZ2UpO1xuICAgIH0sIG1zKTtcbiAgICByZXR1cm4gcmV0Ll90aGVuKHN1Y2Nlc3NDbGVhciwgZmFpbHVyZUNsZWFyLCB1bmRlZmluZWQsIGhhbmRsZSwgdW5kZWZpbmVkKTtcbn07XG5cbn07XG5cbn0se1wiLi91dGlsLmpzXCI6Mzh9XSwzNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFByb21pc2UsIGFwaVJlamVjdGlvbiwgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICBjcmVhdGVDb250ZXh0KSB7XG4gICAgdmFyIFR5cGVFcnJvciA9IF9kZXJlcV8oXCIuL2Vycm9ycy5qc1wiKS5UeXBlRXJyb3I7XG4gICAgdmFyIGluaGVyaXRzID0gX2RlcmVxXyhcIi4vdXRpbC5qc1wiKS5pbmhlcml0cztcbiAgICB2YXIgUHJvbWlzZUluc3BlY3Rpb24gPSBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uO1xuXG4gICAgZnVuY3Rpb24gaW5zcGVjdGlvbk1hcHBlcihpbnNwZWN0aW9ucykge1xuICAgICAgICB2YXIgbGVuID0gaW5zcGVjdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IGluc3BlY3Rpb25zW2ldO1xuICAgICAgICAgICAgaWYgKGluc3BlY3Rpb24uaXNSZWplY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGluc3BlY3Rpb24uZXJyb3IoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnNwZWN0aW9uc1tpXSA9IGluc3BlY3Rpb24uX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zcGVjdGlvbnM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGhyb3dlcihlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30sIDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhc3RQcmVzZXJ2aW5nRGlzcG9zYWJsZSh0aGVuYWJsZSkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGVuYWJsZSk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgIT09IHRoZW5hYmxlICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhlbmFibGUuX2lzRGlzcG9zYWJsZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhlbmFibGUuX2dldERpc3Bvc2VyID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgIHRoZW5hYmxlLl9pc0Rpc3Bvc2FibGUoKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9zZXREaXNwb3NhYmxlKHRoZW5hYmxlLl9nZXREaXNwb3NlcigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwb3NlKHJlc291cmNlcywgaW5zcGVjdGlvbikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW4gPSByZXNvdXJjZXMubGVuZ3RoO1xuICAgICAgICB2YXIgcmV0ID0gUHJvbWlzZS5kZWZlcigpO1xuICAgICAgICBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICAgICAgICAgIGlmIChpID49IGxlbikgcmV0dXJuIHJldC5yZXNvbHZlKCk7XG4gICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdFByZXNlcnZpbmdEaXNwb3NhYmxlKHJlc291cmNlc1tpKytdKTtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlICYmXG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9pc0Rpc3Bvc2FibGUoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX2dldERpc3Bvc2VyKCkudHJ5RGlzcG9zZShpbnNwZWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlcy5wcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd2VyKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl90aGVuKGl0ZXJhdG9yLCB0aHJvd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZXJhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlcmF0b3IoKTtcbiAgICAgICAgcmV0dXJuIHJldC5wcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VyU3VjY2Vzcyh2YWx1ZSkge1xuICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgICAgICBpbnNwZWN0aW9uLl9zZXR0bGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaW5zcGVjdGlvbi5fYml0RmllbGQgPSAyNjg0MzU0NTY7XG4gICAgICAgIHJldHVybiBkaXNwb3NlKHRoaXMsIGluc3BlY3Rpb24pLnRoZW5SZXR1cm4odmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VyRmFpbChyZWFzb24pIHtcbiAgICAgICAgdmFyIGluc3BlY3Rpb24gPSBuZXcgUHJvbWlzZUluc3BlY3Rpb24oKTtcbiAgICAgICAgaW5zcGVjdGlvbi5fc2V0dGxlZFZhbHVlID0gcmVhc29uO1xuICAgICAgICBpbnNwZWN0aW9uLl9iaXRGaWVsZCA9IDEzNDIxNzcyODtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2UodGhpcywgaW5zcGVjdGlvbikudGhlblRocm93KHJlYXNvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGlzcG9zZXIoZGF0YSwgcHJvbWlzZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIERpc3Bvc2VyLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucmVzb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb21pc2UoKS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlKCkudmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnRyeURpc3Bvc2UgPSBmdW5jdGlvbihpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2UoKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSBjb250ZXh0Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmV0ID0gcmVzb3VyY2UgIT09IG51bGxcbiAgICAgICAgICAgID8gdGhpcy5kb0Rpc3Bvc2UocmVzb3VyY2UsIGluc3BlY3Rpb24pIDogbnVsbDtcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgY29udGV4dC5fcG9wQ29udGV4dCgpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl91bnNldERpc3Bvc2FibGUoKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIERpc3Bvc2VyLmlzRGlzcG9zZXIgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gKGQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkLnJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZC50cnlEaXNwb3NlID09PSBcImZ1bmN0aW9uXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBGdW5jdGlvbkRpc3Bvc2VyKGZuLCBwcm9taXNlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkKGZuLCBwcm9taXNlLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaW5oZXJpdHMoRnVuY3Rpb25EaXNwb3NlciwgRGlzcG9zZXIpO1xuXG4gICAgRnVuY3Rpb25EaXNwb3Nlci5wcm90b3R5cGUuZG9EaXNwb3NlID0gZnVuY3Rpb24gKHJlc291cmNlLCBpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciBmbiA9IHRoaXMuZGF0YSgpO1xuICAgICAgICByZXR1cm4gZm4uY2FsbChyZXNvdXJjZSwgcmVzb3VyY2UsIGluc3BlY3Rpb24pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYXliZVVud3JhcERpc3Bvc2VyKHZhbHVlKSB7XG4gICAgICAgIGlmIChEaXNwb3Nlci5pc0Rpc3Bvc2VyKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5pbmRleF0uX3NldERpc3Bvc2FibGUodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnByb21pc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgUHJvbWlzZS51c2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPCAyKSByZXR1cm4gYXBpUmVqZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5b3UgbXVzdCBwYXNzIGF0IGxlYXN0IDIgYXJndW1lbnRzIHRvIFByb21pc2UudXNpbmdcIik7XG4gICAgICAgIHZhciBmbiA9IGFyZ3VtZW50c1tsZW4gLSAxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvOTE2bEpKXFx1MDAwYVwiKTtcbiAgICAgICAgbGVuLS07XG4gICAgICAgIHZhciByZXNvdXJjZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKERpc3Bvc2VyLmlzRGlzcG9zZXIocmVzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3Bvc2VyID0gcmVzb3VyY2U7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgPSByZXNvdXJjZS5wcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UuX3NldERpc3Bvc2FibGUoZGlzcG9zZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXNvdXJjZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKG1heWJlVW53cmFwRGlzcG9zZXIsIG51bGwsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaVxuICAgICAgICAgICAgICAgICAgICB9LCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlc1tpXSA9IHJlc291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnNldHRsZShyZXNvdXJjZXMpXG4gICAgICAgICAgICAudGhlbihpbnNwZWN0aW9uTWFwcGVyKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odmFscykge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHJldDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBmbi5hcHBseSh1bmRlZmluZWQsIHZhbHMpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuX3RoZW4oXG4gICAgICAgICAgICAgICAgZGlzcG9zZXJTdWNjZXNzLCBkaXNwb3NlckZhaWwsIHVuZGVmaW5lZCwgcmVzb3VyY2VzLCB1bmRlZmluZWQpO1xuICAgICAgICByZXNvdXJjZXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjYyMTQ0O1xuICAgICAgICB0aGlzLl9kaXNwb3NlciA9IGRpc3Bvc2VyO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5faXNEaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjYyMTQ0KSA+IDA7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3Bvc2VyO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fdW5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4yNjIxNDQpO1xuICAgICAgICB0aGlzLl9kaXNwb3NlciA9IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuZGlzcG9zZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uRGlzcG9zZXIoZm4sIHRoaXMsIGNyZWF0ZUNvbnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgIH07XG5cbn07XG5cbn0se1wiLi9lcnJvcnMuanNcIjoxMyxcIi4vdXRpbC5qc1wiOjM4fV0sMzg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1LmpzXCIpO1xudmFyIGNhbkV2YWx1YXRlID0gdHlwZW9mIG5hdmlnYXRvciA9PSBcInVuZGVmaW5lZFwiO1xudmFyIGhhdmVHZXR0ZXJzID0gKGZ1bmN0aW9uKCl7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIG8gPSB7fTtcbiAgICAgICAgZXM1LmRlZmluZVByb3BlcnR5KG8sIFwiZlwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvLmYgPT09IDM7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn0pKCk7XG5cbnZhciBlcnJvck9iaiA9IHtlOiB7fX07XG52YXIgdHJ5Q2F0Y2hUYXJnZXQ7XG5mdW5jdGlvbiB0cnlDYXRjaGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0cnlDYXRjaFRhcmdldDtcbiAgICAgICAgdHJ5Q2F0Y2hUYXJnZXQgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyeUNhdGNoKGZuKSB7XG4gICAgdHJ5Q2F0Y2hUYXJnZXQgPSBmbjtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hlcjtcbn1cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24oQ2hpbGQsIFBhcmVudCkge1xuICAgIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBUKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkID0gUGFyZW50O1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gUGFyZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3AuY2FsbChQYXJlbnQucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLmNoYXJBdChwcm9wZXJ0eU5hbWUubGVuZ3RoLTEpICE9PSBcIiRcIlxuICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZSArIFwiJFwiXSA9IFBhcmVudC5wcm90b3R5cGVbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBULnByb3RvdHlwZSA9IFBhcmVudC5wcm90b3R5cGU7XG4gICAgQ2hpbGQucHJvdG90eXBlID0gbmV3IFQoKTtcbiAgICByZXR1cm4gQ2hpbGQucHJvdG90eXBlO1xufTtcblxuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSB0cnVlIHx8IHZhbCA9PT0gZmFsc2UgfHxcbiAgICAgICAgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiO1xuXG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIG1heWJlV3JhcEFzRXJyb3IobWF5YmVFcnJvcikge1xuICAgIGlmICghaXNQcmltaXRpdmUobWF5YmVFcnJvcikpIHJldHVybiBtYXliZUVycm9yO1xuXG4gICAgcmV0dXJuIG5ldyBFcnJvcihzYWZlVG9TdHJpbmcobWF5YmVFcnJvcikpO1xufVxuXG5mdW5jdGlvbiB3aXRoQXBwZW5kZWQodGFyZ2V0LCBhcHBlbmRlZSkge1xuICAgIHZhciBsZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgIHZhciByZXQgPSBuZXcgQXJyYXkobGVuICsgMSk7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHJldFtpXSA9IHRhcmdldFtpXTtcbiAgICB9XG4gICAgcmV0W2ldID0gYXBwZW5kZWU7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0KG9iaiwga2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoZXM1LmlzRVM1KSB7XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG5cbiAgICAgICAgaWYgKGRlc2MgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlc2MuZ2V0ID09IG51bGwgJiYgZGVzYy5zZXQgPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IGRlc2MudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgPyBvYmpba2V5XSA6IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vdEVudW1lcmFibGVQcm9wKG9iaiwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoaXNQcmltaXRpdmUob2JqKSkgcmV0dXJuIG9iajtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH07XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gdGhyb3dlcihyKSB7XG4gICAgdGhyb3cgcjtcbn1cblxudmFyIGluaGVyaXRlZERhdGFLZXlzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBleGNsdWRlZFByb3RvdHlwZXMgPSBbXG4gICAgICAgIEFycmF5LnByb3RvdHlwZSxcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZSxcbiAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlXG4gICAgXTtcblxuICAgIHZhciBpc0V4Y2x1ZGVkUHJvdG8gPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGNsdWRlZFByb3RvdHlwZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZFByb3RvdHlwZXNbaV0gPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgaWYgKGVzNS5pc0VTNSkge1xuICAgICAgICB2YXIgZ2V0S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgICAgICB2YXIgdmlzaXRlZEtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgd2hpbGUgKG9iaiAhPSBudWxsICYmICFpc0V4Y2x1ZGVkUHJvdG8ob2JqKSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSBnZXRLZXlzKG9iaik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkS2V5c1trZXldKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRlZEtleXNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjICE9IG51bGwgJiYgZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iaiA9IGVzNS5nZXRQcm90b3R5cGVPZihvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAoaXNFeGNsdWRlZFByb3RvKG9iaikpIHJldHVybiBbXTtcbiAgICAgICAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgICAgICAgLypqc2hpbnQgZm9yaW46ZmFsc2UgKi9cbiAgICAgICAgICAgIGVudW1lcmF0aW9uOiBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3AuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4Y2x1ZGVkUHJvdG90eXBlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1Byb3AuY2FsbChleGNsdWRlZFByb3RvdHlwZXNbaV0sIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBlbnVtZXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH07XG4gICAgfVxuXG59KSgpO1xuXG52YXIgdGhpc0Fzc2lnbm1lbnRQYXR0ZXJuID0gL3RoaXNcXHMqXFwuXFxzKlxcUytcXHMqPS87XG5mdW5jdGlvbiBpc0NsYXNzKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IGVzNS5uYW1lcyhmbi5wcm90b3R5cGUpO1xuXG4gICAgICAgICAgICB2YXIgaGFzTWV0aG9kcyA9IGVzNS5pc0VTNSAmJiBrZXlzLmxlbmd0aCA+IDE7XG4gICAgICAgICAgICB2YXIgaGFzTWV0aG9kc090aGVyVGhhbkNvbnN0cnVjdG9yID0ga2V5cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgIShrZXlzLmxlbmd0aCA9PT0gMSAmJiBrZXlzWzBdID09PSBcImNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgdmFyIGhhc1RoaXNBc3NpZ25tZW50QW5kU3RhdGljTWV0aG9kcyA9XG4gICAgICAgICAgICAgICAgdGhpc0Fzc2lnbm1lbnRQYXR0ZXJuLnRlc3QoZm4gKyBcIlwiKSAmJiBlczUubmFtZXMoZm4pLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgIGlmIChoYXNNZXRob2RzIHx8IGhhc01ldGhvZHNPdGhlclRoYW5Db25zdHJ1Y3RvciB8fFxuICAgICAgICAgICAgICAgIGhhc1RoaXNBc3NpZ25tZW50QW5kU3RhdGljTWV0aG9kcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvRmFzdFByb3BlcnRpZXMob2JqKSB7XG4gICAgLypqc2hpbnQgLVcwMjcsLVcwNTUsLVcwMzEqL1xuICAgIGZ1bmN0aW9uIGYoKSB7fVxuICAgIGYucHJvdG90eXBlID0gb2JqO1xuICAgIHZhciBsID0gODtcbiAgICB3aGlsZSAobC0tKSBuZXcgZigpO1xuICAgIHJldHVybiBvYmo7XG4gICAgZXZhbChvYmopO1xufVxuXG52YXIgcmlkZW50ID0gL15bYS16JF9dW2EteiRfMC05XSokL2k7XG5mdW5jdGlvbiBpc0lkZW50aWZpZXIoc3RyKSB7XG4gICAgcmV0dXJuIHJpZGVudC50ZXN0KHN0cik7XG59XG5cbmZ1bmN0aW9uIGZpbGxlZFJhbmdlKGNvdW50LCBwcmVmaXgsIHN1ZmZpeCkge1xuICAgIHZhciByZXQgPSBuZXcgQXJyYXkoY291bnQpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgIHJldFtpXSA9IHByZWZpeCArIGkgKyBzdWZmaXg7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHNhZmVUb1N0cmluZyhvYmopIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gb2JqICsgXCJcIjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBcIltubyBzdHJpbmcgcmVwcmVzZW50YXRpb25dXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24oZSkge1xuICAgIHRyeSB7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKGUsIFwiaXNPcGVyYXRpb25hbFwiLCB0cnVlKTtcbiAgICB9XG4gICAgY2F0Y2goaWdub3JlKSB7fVxufVxuXG5mdW5jdGlvbiBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbihlKSB7XG4gICAgaWYgKGUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoKGUgaW5zdGFuY2VvZiBFcnJvcltcIl9fQmx1ZWJpcmRFcnJvclR5cGVzX19cIl0uT3BlcmF0aW9uYWxFcnJvcikgfHxcbiAgICAgICAgZVtcImlzT3BlcmF0aW9uYWxcIl0gPT09IHRydWUpO1xufVxuXG5mdW5jdGlvbiBjYW5BdHRhY2hUcmFjZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3IgJiYgZXM1LnByb3BlcnR5SXNXcml0YWJsZShvYmosIFwic3RhY2tcIik7XG59XG5cbnZhciBlbnN1cmVFcnJvck9iamVjdCA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoIShcInN0YWNrXCIgaW4gbmV3IEVycm9yKCkpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGNhbkF0dGFjaFRyYWNlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgdHJ5IHt0aHJvdyBuZXcgRXJyb3Ioc2FmZVRvU3RyaW5nKHZhbHVlKSk7fVxuICAgICAgICAgICAgY2F0Y2goZXJyKSB7cmV0dXJuIGVycjt9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY2FuQXR0YWNoVHJhY2UodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKHNhZmVUb1N0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGNsYXNzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIGNvcHlEZXNjcmlwdG9ycyhmcm9tLCB0bywgZmlsdGVyKSB7XG4gICAgdmFyIGtleXMgPSBlczUubmFtZXMoZnJvbSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoZmlsdGVyKGtleSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZXM1LmRlZmluZVByb3BlcnR5KHRvLCBrZXksIGVzNS5nZXREZXNjcmlwdG9yKGZyb20sIGtleSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcmV0ID0ge1xuICAgIGlzQ2xhc3M6IGlzQ2xhc3MsXG4gICAgaXNJZGVudGlmaWVyOiBpc0lkZW50aWZpZXIsXG4gICAgaW5oZXJpdGVkRGF0YUtleXM6IGluaGVyaXRlZERhdGFLZXlzLFxuICAgIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdDogZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0LFxuICAgIHRocm93ZXI6IHRocm93ZXIsXG4gICAgaXNBcnJheTogZXM1LmlzQXJyYXksXG4gICAgaGF2ZUdldHRlcnM6IGhhdmVHZXR0ZXJzLFxuICAgIG5vdEVudW1lcmFibGVQcm9wOiBub3RFbnVtZXJhYmxlUHJvcCxcbiAgICBpc1ByaW1pdGl2ZTogaXNQcmltaXRpdmUsXG4gICAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICAgIGNhbkV2YWx1YXRlOiBjYW5FdmFsdWF0ZSxcbiAgICBlcnJvck9iajogZXJyb3JPYmosXG4gICAgdHJ5Q2F0Y2g6IHRyeUNhdGNoLFxuICAgIGluaGVyaXRzOiBpbmhlcml0cyxcbiAgICB3aXRoQXBwZW5kZWQ6IHdpdGhBcHBlbmRlZCxcbiAgICBtYXliZVdyYXBBc0Vycm9yOiBtYXliZVdyYXBBc0Vycm9yLFxuICAgIHRvRmFzdFByb3BlcnRpZXM6IHRvRmFzdFByb3BlcnRpZXMsXG4gICAgZmlsbGVkUmFuZ2U6IGZpbGxlZFJhbmdlLFxuICAgIHRvU3RyaW5nOiBzYWZlVG9TdHJpbmcsXG4gICAgY2FuQXR0YWNoVHJhY2U6IGNhbkF0dGFjaFRyYWNlLFxuICAgIGVuc3VyZUVycm9yT2JqZWN0OiBlbnN1cmVFcnJvck9iamVjdCxcbiAgICBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbjogb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sXG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uOiBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24sXG4gICAgY2xhc3NTdHJpbmc6IGNsYXNzU3RyaW5nLFxuICAgIGNvcHlEZXNjcmlwdG9yczogY29weURlc2NyaXB0b3JzLFxuICAgIGhhc0RldlRvb2xzOiB0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZSAmJlxuICAgICAgICAgICAgICAgICB0eXBlb2YgY2hyb21lLmxvYWRUaW1lcyA9PT0gXCJmdW5jdGlvblwiLFxuICAgIGlzTm9kZTogdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgY2xhc3NTdHJpbmcocHJvY2VzcykudG9Mb3dlckNhc2UoKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCJcbn07XG5yZXQuaXNSZWNlbnROb2RlID0gcmV0LmlzTm9kZSAmJiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZlcnNpb24gPSBwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoXCIuXCIpLm1hcChOdW1iZXIpO1xuICAgIHJldHVybiAodmVyc2lvblswXSA9PT0gMCAmJiB2ZXJzaW9uWzFdID4gMTApIHx8ICh2ZXJzaW9uWzBdID4gMCk7XG59KSgpO1xuXG5pZiAocmV0LmlzTm9kZSkgcmV0LnRvRmFzdFByb3BlcnRpZXMocHJvY2Vzcyk7XG5cbnRyeSB7dGhyb3cgbmV3IEVycm9yKCk7IH0gY2F0Y2ggKGUpIHtyZXQubGFzdExpbmVFcnJvciA9IGU7fVxubW9kdWxlLmV4cG9ydHMgPSByZXQ7XG5cbn0se1wiLi9lczUuanNcIjoxNH1dfSx7fSxbNF0pKDQpXG59KTsgICAgICAgICAgICAgICAgICAgIDtpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICE9PSBudWxsKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5QID0gd2luZG93LlByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmICE9PSBudWxsKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlAgPSBzZWxmLlByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJyksdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpYkhWbFltbHlaQzlxY3k5aWNtOTNjMlZ5TDJKc2RXVmlhWEprTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpQkFjSEpsYzJWeWRtVmNiaUFxSUZSb1pTQk5TVlFnVEdsalpXNXpaU0FvVFVsVUtWeHVJQ29nWEc0Z0tpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UUWdVR1YwYTJFZ1FXNTBiMjV2ZGx4dUlDb2dYRzRnS2lCUVpYSnRhWE56YVc5dUlHbHpJR2hsY21WaWVTQm5jbUZ1ZEdWa0xDQm1jbVZsSUc5bUlHTm9ZWEpuWlN3Z2RHOGdZVzU1SUhCbGNuTnZiaUJ2WW5SaGFXNXBibWNnWVNCamIzQjVYRzRnS2lCdlppQjBhR2x6SUhOdlpuUjNZWEpsSUdGdVpDQmhjM052WTJsaGRHVmtJR1J2WTNWdFpXNTBZWFJwYjI0Z1ptbHNaWE1nS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCMGJ5QmtaV0ZzWEc0Z0tpQnBiaUIwYUdVZ1UyOW1kSGRoY21VZ2QybDBhRzkxZENCeVpYTjBjbWxqZEdsdmJpd2dhVzVqYkhWa2FXNW5JSGRwZEdodmRYUWdiR2x0YVhSaGRHbHZiaUIwYUdVZ2NtbG5hSFJ6WEc0Z0tpQjBieUIxYzJVc0lHTnZjSGtzSUcxdlpHbG1lU3dnYldWeVoyVXNJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNYRzRnS2lCamIzQnBaWE1nYjJZZ2RHaGxJRk52Wm5SM1lYSmxMQ0JoYm1RZ2RHOGdjR1Z5YldsMElIQmxjbk52Ym5NZ2RHOGdkMmh2YlNCMGFHVWdVMjltZEhkaGNtVWdhWE5jYmlBcUlHWjFjbTVwYzJobFpDQjBieUJrYnlCemJ5d2djM1ZpYW1WamRDQjBieUIwYUdVZ1ptOXNiRzkzYVc1bklHTnZibVJwZEdsdmJuTTZQQzl3UGx4dUlDb2dYRzRnS2lCVWFHVWdZV0p2ZG1VZ1kyOXdlWEpwWjJoMElHNXZkR2xqWlNCaGJtUWdkR2hwY3lCd1pYSnRhWE56YVc5dUlHNXZkR2xqWlNCemFHRnNiQ0JpWlNCcGJtTnNkV1JsWkNCcGJseHVJQ29nWVd4c0lHTnZjR2xsY3lCdmNpQnpkV0p6ZEdGdWRHbGhiQ0J3YjNKMGFXOXVjeUJ2WmlCMGFHVWdVMjltZEhkaGNtVXVYRzRnS2lCY2JpQXFJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2JpQXFJRWxOVUV4SlJVUXNJRWxPUTB4VlJFbE9SeUJDVlZRZ1RrOVVJRXhKVFVsVVJVUWdWRThnVkVoRklGZEJVbEpCVGxSSlJWTWdUMFlnVFVWU1EwaEJUbFJCUWtsTVNWUlpMRnh1SUNvZ1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z0lFbE9JRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSVnh1SUNvZ1FWVlVTRTlTVXlCUFVpQkRUMUJaVWtsSFNGUWdTRTlNUkVWU1V5QkNSU0JNU1VGQ1RFVWdSazlTSUVGT1dTQkRURUZKVFN3Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWx4dUlDb2dURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2JpQXFJRTlWVkNCUFJpQlBVaUJKVGlCRFQwNU9SVU5VU1U5T0lGZEpWRWdnVkVoRklGTlBSbFJYUVZKRklFOVNJRlJJUlNCVlUwVWdUMUlnVDFSSVJWSWdSRVZCVEVsT1IxTWdTVTVjYmlBcUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUlGeHVJQ292WEc0dktpcGNiaUFxSUdKc2RXVmlhWEprSUdKMWFXeGtJSFpsY25OcGIyNGdNaTQ1TGpNelhHNGdLaUJHWldGMGRYSmxjeUJsYm1GaWJHVmtPaUJqYjNKbExDQnlZV05sTENCallXeHNYMmRsZEN3Z1oyVnVaWEpoZEc5eWN5d2diV0Z3TENCdWIyUmxhV1o1TENCd2NtOXRhWE5wWm5rc0lIQnliM0J6TENCeVpXUjFZMlVzSUhObGRIUnNaU3dnYzI5dFpTd2dZMkZ1WTJWc0xDQjFjMmx1Wnl3Z1ptbHNkR1Z5TENCaGJua3NJR1ZoWTJnc0lIUnBiV1Z5YzF4dUtpOWNiaUZtZFc1amRHbHZiaWhsS1h0cFppaGNJbTlpYW1WamRGd2lQVDEwZVhCbGIyWWdaWGh3YjNKMGN5WW1YQ0oxYm1SbFptbHVaV1JjSWlFOWRIbHdaVzltSUcxdlpIVnNaU2x0YjJSMWJHVXVaWGh3YjNKMGN6MWxLQ2s3Wld4elpTQnBaaWhjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCa1pXWnBibVVtSm1SbFptbHVaUzVoYldRcFpHVm1hVzVsS0Z0ZExHVXBPMlZzYzJWN2RtRnlJR1k3WENKMWJtUmxabWx1WldSY0lpRTlkSGx3Wlc5bUlIZHBibVJ2ZHo5bVBYZHBibVJ2ZHpwY0luVnVaR1ZtYVc1bFpGd2lJVDEwZVhCbGIyWWdaMnh2WW1Gc1AyWTlaMnh2WW1Gc09sd2lkVzVrWldacGJtVmtYQ0loUFhSNWNHVnZaaUJ6Wld4bUppWW9aajF6Wld4bUtTeG1MbEJ5YjIxcGMyVTlaU2dwZlgwb1puVnVZM1JwYjI0b0tYdDJZWElnWkdWbWFXNWxMRzF2WkhWc1pTeGxlSEJ2Y25Sek8zSmxkSFZ5YmlBb1puVnVZM1JwYjI0Z1pTaDBMRzRzY2lsN1puVnVZM1JwYjI0Z2N5aHZMSFVwZTJsbUtDRnVXMjlkS1h0cFppZ2hkRnR2WFNsN2RtRnlJR0U5ZEhsd1pXOW1JRjlrWlhKbGNWODlQVndpWm5WdVkzUnBiMjVjSWlZbVgyUmxjbVZ4WHp0cFppZ2hkU1ltWVNseVpYUjFjbTRnWVNodkxDRXdLVHRwWmlocEtYSmxkSFZ5YmlCcEtHOHNJVEFwTzNaaGNpQm1QVzVsZHlCRmNuSnZjaWhjSWtOaGJtNXZkQ0JtYVc1a0lHMXZaSFZzWlNBblhDSXJieXRjSWlkY0lpazdkR2h5YjNjZ1ppNWpiMlJsUFZ3aVRVOUVWVXhGWDA1UFZGOUdUMVZPUkZ3aUxHWjlkbUZ5SUd3OWJsdHZYVDE3Wlhod2IzSjBjenA3ZlgwN2RGdHZYVnN3WFM1allXeHNLR3d1Wlhod2IzSjBjeXhtZFc1amRHbHZiaWhsS1h0MllYSWdiajEwVzI5ZFd6RmRXMlZkTzNKbGRIVnliaUJ6S0c0L2JqcGxLWDBzYkN4c0xtVjRjRzl5ZEhNc1pTeDBMRzRzY2lsOWNtVjBkWEp1SUc1YmIxMHVaWGh3YjNKMGMzMTJZWElnYVQxMGVYQmxiMllnWDJSbGNtVnhYejA5WENKbWRXNWpkR2x2Ymx3aUppWmZaR1Z5WlhGZk8yWnZjaWgyWVhJZ2J6MHdPMjg4Y2k1c1pXNW5kR2c3YnlzcktYTW9jbHR2WFNrN2NtVjBkWEp1SUhOOUtTaDdNVHBiWm5WdVkzUnBiMjRvWDJSbGNtVnhYeXh0YjJSMWJHVXNaWGh3YjNKMGN5bDdYRzVjSW5WelpTQnpkSEpwWTNSY0lqdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9VSEp2YldselpTa2dlMXh1ZG1GeUlGTnZiV1ZRY205dGFYTmxRWEp5WVhrZ1BTQlFjbTl0YVhObExsOVRiMjFsVUhKdmJXbHpaVUZ5Y21GNU8xeHVablZ1WTNScGIyNGdZVzU1S0hCeWIyMXBjMlZ6S1NCN1hHNGdJQ0FnZG1GeUlISmxkQ0E5SUc1bGR5QlRiMjFsVUhKdmJXbHpaVUZ5Y21GNUtIQnliMjFwYzJWektUdGNiaUFnSUNCMllYSWdjSEp2YldselpTQTlJSEpsZEM1d2NtOXRhWE5sS0NrN1hHNGdJQ0FnY21WMExuTmxkRWh2ZDAxaGJua29NU2s3WEc0Z0lDQWdjbVYwTG5ObGRGVnVkM0poY0NncE8xeHVJQ0FnSUhKbGRDNXBibWwwS0NrN1hHNGdJQ0FnY21WMGRYSnVJSEJ5YjIxcGMyVTdYRzU5WEc1Y2JsQnliMjFwYzJVdVlXNTVJRDBnWm5WdVkzUnBiMjRnS0hCeWIyMXBjMlZ6S1NCN1hHNGdJQ0FnY21WMGRYSnVJR0Z1ZVNod2NtOXRhWE5sY3lrN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1aGJua2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJR0Z1ZVNoMGFHbHpLVHRjYm4wN1hHNWNibjA3WEc1Y2JuMHNlMzFkTERJNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1MllYSWdabWx5YzNSTWFXNWxSWEp5YjNJN1hHNTBjbmtnZTNSb2NtOTNJRzVsZHlCRmNuSnZjaWdwT3lCOUlHTmhkR05vSUNobEtTQjdabWx5YzNSTWFXNWxSWEp5YjNJZ1BTQmxPMzFjYm5aaGNpQnpZMmhsWkhWc1pTQTlJRjlrWlhKbGNWOG9YQ0l1TDNOamFHVmtkV3hsTG1welhDSXBPMXh1ZG1GeUlGRjFaWFZsSUQwZ1gyUmxjbVZ4WHloY0lpNHZjWFZsZFdVdWFuTmNJaWs3WEc1MllYSWdkWFJwYkNBOUlGOWtaWEpsY1Y4b1hDSXVMM1YwYVd3dWFuTmNJaWs3WEc1Y2JtWjFibU4wYVc5dUlFRnplVzVqS0NrZ2UxeHVJQ0FnSUhSb2FYTXVYMmx6VkdsamExVnpaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQjBhR2x6TGw5c1lYUmxVWFZsZFdVZ1BTQnVaWGNnVVhWbGRXVW9NVFlwTzF4dUlDQWdJSFJvYVhNdVgyNXZjbTFoYkZGMVpYVmxJRDBnYm1WM0lGRjFaWFZsS0RFMktUdGNiaUFnSUNCMGFHbHpMbDkwY21GdGNHOXNhVzVsUlc1aFlteGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ2RtRnlJSE5sYkdZZ1BTQjBhR2x6TzF4dUlDQWdJSFJvYVhNdVpISmhhVzVSZFdWMVpYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lITmxiR1l1WDJSeVlXbHVVWFZsZFdWektDazdYRzRnSUNBZ2ZUdGNiaUFnSUNCMGFHbHpMbDl6WTJobFpIVnNaU0E5WEc0Z0lDQWdJQ0FnSUhOamFHVmtkV3hsTG1selUzUmhkR2xqSUQ4Z2MyTm9aV1IxYkdVb2RHaHBjeTVrY21GcGJsRjFaWFZsY3lrZ09pQnpZMmhsWkhWc1pUdGNibjFjYmx4dVFYTjVibU11Y0hKdmRHOTBlWEJsTG1ScGMyRmliR1ZVY21GdGNHOXNhVzVsU1daT1pXTmxjM05oY25rZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQnBaaUFvZFhScGJDNW9ZWE5FWlhaVWIyOXNjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDkwY21GdGNHOXNhVzVsUlc1aFlteGxaQ0E5SUdaaGJITmxPMXh1SUNBZ0lIMWNibjA3WEc1Y2JrRnplVzVqTG5CeWIzUnZkSGx3WlM1bGJtRmliR1ZVY21GdGNHOXNhVzVsSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxsOTBjbUZ0Y0c5c2FXNWxSVzVoWW14bFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOTBjbUZ0Y0c5c2FXNWxSVzVoWW14bFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNOamFHVmtkV3hsSUQwZ1puVnVZM1JwYjI0b1ptNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9abTRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibjA3WEc1Y2JrRnplVzVqTG5CeWIzUnZkSGx3WlM1b1lYWmxTWFJsYlhOUmRXVjFaV1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMjV2Y20xaGJGRjFaWFZsTG14bGJtZDBhQ2dwSUQ0Z01EdGNibjA3WEc1Y2JrRnplVzVqTG5CeWIzUnZkSGx3WlM1MGFISnZkMHhoZEdWeUlEMGdablZ1WTNScGIyNG9abTRzSUdGeVp5a2dlMXh1SUNBZ0lHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9JRDA5UFNBeEtTQjdYRzRnSUNBZ0lDQWdJR0Z5WnlBOUlHWnVPMXh1SUNBZ0lDQWdJQ0JtYmlBOUlHWjFibU4wYVc5dUlDZ3BJSHNnZEdoeWIzY2dZWEpuT3lCOU8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhObGRGUnBiV1Z2ZFhRZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJcElIdGNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p1S0dGeVp5azdYRzRnSUNBZ0lDQWdJSDBzSURBcE8xeHVJQ0FnSUgwZ1pXeHpaU0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5elkyaGxaSFZzWlNobWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadUtHRnlaeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lUbThnWVhONWJtTWdjMk5vWldSMWJHVnlJR0YyWVdsc1lXSnNaVnhjZFRBd01HRmNYSFV3TURCaElDQWdJRk5sWlNCb2RIUndPaTh2WjI5dkxtZHNMMjB6VDFSWWExeGNkVEF3TUdGY0lpazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z1FYTjVibU5KYm5admEyVk1ZWFJsY2lobWJpd2djbVZqWldsMlpYSXNJR0Z5WnlrZ2UxeHVJQ0FnSUhSb2FYTXVYMnhoZEdWUmRXVjFaUzV3ZFhOb0tHWnVMQ0J5WldObGFYWmxjaXdnWVhKbktUdGNiaUFnSUNCMGFHbHpMbDl4ZFdWMVpWUnBZMnNvS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnUVhONWJtTkpiblp2YTJVb1ptNHNJSEpsWTJWcGRtVnlMQ0JoY21jcElIdGNiaUFnSUNCMGFHbHpMbDl1YjNKdFlXeFJkV1YxWlM1d2RYTm9LR1p1TENCeVpXTmxhWFpsY2l3Z1lYSm5LVHRjYmlBZ0lDQjBhR2x6TGw5eGRXVjFaVlJwWTJzb0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1FYTjVibU5UWlhSMGJHVlFjbTl0YVhObGN5aHdjbTl0YVhObEtTQjdYRzRnSUNBZ2RHaHBjeTVmYm05eWJXRnNVWFZsZFdVdVgzQjFjMmhQYm1Vb2NISnZiV2x6WlNrN1hHNGdJQ0FnZEdocGN5NWZjWFZsZFdWVWFXTnJLQ2s3WEc1OVhHNWNibWxtSUNnaGRYUnBiQzVvWVhORVpYWlViMjlzY3lrZ2UxeHVJQ0FnSUVGemVXNWpMbkJ5YjNSdmRIbHdaUzVwYm5admEyVk1ZWFJsY2lBOUlFRnplVzVqU1c1MmIydGxUR0YwWlhJN1hHNGdJQ0FnUVhONWJtTXVjSEp2ZEc5MGVYQmxMbWx1ZG05clpTQTlJRUZ6ZVc1alNXNTJiMnRsTzF4dUlDQWdJRUZ6ZVc1akxuQnliM1J2ZEhsd1pTNXpaWFIwYkdWUWNtOXRhWE5sY3lBOUlFRnplVzVqVTJWMGRHeGxVSEp2YldselpYTTdYRzU5SUdWc2MyVWdlMXh1SUNBZ0lHbG1JQ2h6WTJobFpIVnNaUzVwYzFOMFlYUnBZeWtnZTF4dUlDQWdJQ0FnSUNCelkyaGxaSFZzWlNBOUlHWjFibU4wYVc5dUtHWnVLU0I3SUhObGRGUnBiV1Z2ZFhRb1ptNHNJREFwT3lCOU8xeHVJQ0FnSUgxY2JpQWdJQ0JCYzNsdVl5NXdjbTkwYjNSNWNHVXVhVzUyYjJ0bFRHRjBaWElnUFNCbWRXNWpkR2x2YmlBb1ptNHNJSEpsWTJWcGRtVnlMQ0JoY21jcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYM1J5WVcxd2IyeHBibVZGYm1GaWJHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQkJjM2x1WTBsdWRtOXJaVXhoZEdWeUxtTmhiR3dvZEdocGN5d2dabTRzSUhKbFkyVnBkbVZ5TENCaGNtY3BPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYzJOb1pXUjFiR1VvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptNHVZMkZzYkNoeVpXTmxhWFpsY2l3Z1lYSm5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TENBeE1EQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdRWE41Ym1NdWNISnZkRzkwZVhCbExtbHVkbTlyWlNBOUlHWjFibU4wYVc5dUlDaG1iaXdnY21WalpXbDJaWElzSUdGeVp5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmZEhKaGJYQnZiR2x1WlVWdVlXSnNaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRUZ6ZVc1alNXNTJiMnRsTG1OaGJHd29kR2hwY3l3Z1ptNHNJSEpsWTJWcGRtVnlMQ0JoY21jcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZjMk5vWldSMWJHVW9ablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm00dVkyRnNiQ2h5WldObGFYWmxjaXdnWVhKbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lFRnplVzVqTG5CeWIzUnZkSGx3WlM1elpYUjBiR1ZRY205dGFYTmxjeUE5SUdaMWJtTjBhVzl1S0hCeWIyMXBjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgzUnlZVzF3YjJ4cGJtVkZibUZpYkdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCQmMzbHVZMU5sZEhSc1pWQnliMjFwYzJWekxtTmhiR3dvZEdocGN5d2djSEp2YldselpTazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDl6WTJobFpIVnNaU2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXRhWE5sTGw5elpYUjBiR1ZRY205dGFYTmxjeWdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZWeHVYRzVCYzNsdVl5NXdjbTkwYjNSNWNHVXVhVzUyYjJ0bFJtbHljM1FnUFNCbWRXNWpkR2x2YmlBb1ptNHNJSEpsWTJWcGRtVnlMQ0JoY21jcElIdGNiaUFnSUNCMGFHbHpMbDl1YjNKdFlXeFJkV1YxWlM1MWJuTm9hV1owS0dadUxDQnlaV05sYVhabGNpd2dZWEpuS1R0Y2JpQWdJQ0IwYUdsekxsOXhkV1YxWlZScFkyc29LVHRjYm4wN1hHNWNia0Z6ZVc1akxuQnliM1J2ZEhsd1pTNWZaSEpoYVc1UmRXVjFaU0E5SUdaMWJtTjBhVzl1S0hGMVpYVmxLU0I3WEc0Z0lDQWdkMmhwYkdVZ0tIRjFaWFZsTG14bGJtZDBhQ2dwSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1ptNGdQU0J4ZFdWMVpTNXphR2xtZENncE8xeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JR1p1SUNFOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p1TGw5elpYUjBiR1ZRY205dGFYTmxjeWdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZG1GeUlISmxZMlZwZG1WeUlEMGdjWFZsZFdVdWMyaHBablFvS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR0Z5WnlBOUlIRjFaWFZsTG5Ob2FXWjBLQ2s3WEc0Z0lDQWdJQ0FnSUdadUxtTmhiR3dvY21WalpXbDJaWElzSUdGeVp5azdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVFYTjVibU11Y0hKdmRHOTBlWEJsTGw5a2NtRnBibEYxWlhWbGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IwYUdsekxsOWtjbUZwYmxGMVpYVmxLSFJvYVhNdVgyNXZjbTFoYkZGMVpYVmxLVHRjYmlBZ0lDQjBhR2x6TGw5eVpYTmxkQ2dwTzF4dUlDQWdJSFJvYVhNdVgyUnlZV2x1VVhWbGRXVW9kR2hwY3k1ZmJHRjBaVkYxWlhWbEtUdGNibjA3WEc1Y2JrRnplVzVqTG5CeWIzUnZkSGx3WlM1ZmNYVmxkV1ZVYVdOcklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTVmYVhOVWFXTnJWWE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5cGMxUnBZMnRWYzJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmYzJOb1pXUjFiR1VvZEdocGN5NWtjbUZwYmxGMVpYVmxjeWs3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVRWE41Ym1NdWNISnZkRzkwZVhCbExsOXlaWE5sZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjBhR2x6TGw5cGMxUnBZMnRWYzJWa0lEMGdabUZzYzJVN1hHNTlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUc1bGR5QkJjM2x1WXlncE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNdVptbHljM1JNYVc1bFJYSnliM0lnUFNCbWFYSnpkRXhwYm1WRmNuSnZjanRjYmx4dWZTeDdYQ0l1TDNGMVpYVmxMbXB6WENJNk1qZ3NYQ0l1TDNOamFHVmtkV3hsTG1welhDSTZNekVzWENJdUwzVjBhV3d1YW5OY0lqb3pPSDFkTERNNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0ZCeWIyMXBjMlVzSUVsT1ZFVlNUa0ZNTENCMGNubERiMjUyWlhKMFZHOVFjbTl0YVhObEtTQjdYRzUyWVhJZ2NtVnFaV04wVkdocGN5QTlJR1oxYm1OMGFXOXVLRjhzSUdVcElIdGNiaUFnSUNCMGFHbHpMbDl5WldwbFkzUW9aU2s3WEc1OU8xeHVYRzUyWVhJZ2RHRnlaMlYwVW1WcVpXTjBaV1FnUFNCbWRXNWpkR2x2YmlobExDQmpiMjUwWlhoMEtTQjdYRzRnSUNBZ1kyOXVkR1Y0ZEM1d2NtOXRhWE5sVW1WcVpXTjBhVzl1VVhWbGRXVmtJRDBnZEhKMVpUdGNiaUFnSUNCamIyNTBaWGgwTG1KcGJtUnBibWRRY205dGFYTmxMbDkwYUdWdUtISmxhbVZqZEZSb2FYTXNJSEpsYW1WamRGUm9hWE1zSUc1MWJHd3NJSFJvYVhNc0lHVXBPMXh1ZlR0Y2JseHVkbUZ5SUdKcGJtUnBibWRTWlhOdmJIWmxaQ0E5SUdaMWJtTjBhVzl1S0hSb2FYTkJjbWNzSUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0IwYUdsekxsOXpaWFJDYjNWdVpGUnZLSFJvYVhOQmNtY3BPMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOXBjMUJsYm1ScGJtY29LU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl5WlhOdmJIWmxRMkZzYkdKaFkyc29ZMjl1ZEdWNGRDNTBZWEpuWlhRcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYm5aaGNpQmlhVzVrYVc1blVtVnFaV04wWldRZ1BTQm1kVzVqZEdsdmJpaGxMQ0JqYjI1MFpYaDBLU0I3WEc0Z0lDQWdhV1lnS0NGamIyNTBaWGgwTG5CeWIyMXBjMlZTWldwbFkzUnBiMjVSZFdWMVpXUXBJSFJvYVhNdVgzSmxhbVZqZENobEtUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtSnBibVFnUFNCbWRXNWpkR2x2YmlBb2RHaHBjMEZ5WnlrZ2UxeHVJQ0FnSUhaaGNpQnRZWGxpWlZCeWIyMXBjMlVnUFNCMGNubERiMjUyWlhKMFZHOVFjbTl0YVhObEtIUm9hWE5CY21jcE8xeHVJQ0FnSUhaaGNpQnlaWFFnUFNCdVpYY2dVSEp2YldselpTaEpUbFJGVWs1QlRDazdYRzRnSUNBZ2NtVjBMbDl3Y205d1lXZGhkR1ZHY205dEtIUm9hWE1zSURFcE8xeHVJQ0FnSUhaaGNpQjBZWEpuWlhRZ1BTQjBhR2x6TGw5MFlYSm5aWFFvS1R0Y2JpQWdJQ0JwWmlBb2JXRjVZbVZRY205dGFYTmxJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZMjl1ZEdWNGRDQTlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliMjFwYzJWU1pXcGxZM1JwYjI1UmRXVjFaV1E2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZiV2x6WlRvZ2NtVjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnlaMlYwT2lCMFlYSm5aWFFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmlhVzVrYVc1blVISnZiV2x6WlRvZ2JXRjVZbVZRY205dGFYTmxYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUhSaGNtZGxkQzVmZEdobGJpaEpUbFJGVWs1QlRDd2dkR0Z5WjJWMFVtVnFaV04wWldRc0lISmxkQzVmY0hKdlozSmxjM01zSUhKbGRDd2dZMjl1ZEdWNGRDazdYRzRnSUNBZ0lDQWdJRzFoZVdKbFVISnZiV2x6WlM1ZmRHaGxiaWhjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnBibVJwYm1kU1pYTnZiSFpsWkN3Z1ltbHVaR2x1WjFKbGFtVmpkR1ZrTENCeVpYUXVYM0J5YjJkeVpYTnpMQ0J5WlhRc0lHTnZiblJsZUhRcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRDNWZjMlYwUW05MWJtUlVieWgwYUdselFYSm5LVHRjYmlBZ0lDQWdJQ0FnY21WMExsOXlaWE52YkhabFEyRnNiR0poWTJzb2RHRnlaMlYwS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlISmxkRHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDl6WlhSQ2IzVnVaRlJ2SUQwZ1puVnVZM1JwYjI0Z0tHOWlhaWtnZTF4dUlDQWdJR2xtSUNodlltb2dJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5aWFYUkdhV1ZzWkNBOUlIUm9hWE11WDJKcGRFWnBaV3hrSUh3Z01UTXhNRGN5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlpYjNWdVpGUnZJRDBnYjJKcU8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMkpwZEVacFpXeGtJRDBnZEdocGN5NWZZbWwwUm1sbGJHUWdKaUFvZmpFek1UQTNNaWs3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYMmx6UW05MWJtUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2gwYUdsekxsOWlhWFJHYVdWc1pDQW1JREV6TVRBM01pa2dQVDA5SURFek1UQTNNanRjYm4wN1hHNWNibEJ5YjIxcGMyVXVZbWx1WkNBOUlHWjFibU4wYVc5dUlDaDBhR2x6UVhKbkxDQjJZV3gxWlNrZ2UxeHVJQ0FnSUhaaGNpQnRZWGxpWlZCeWIyMXBjMlVnUFNCMGNubERiMjUyWlhKMFZHOVFjbTl0YVhObEtIUm9hWE5CY21jcE8xeHVJQ0FnSUhaaGNpQnlaWFFnUFNCdVpYY2dVSEp2YldselpTaEpUbFJGVWs1QlRDazdYRzVjYmlBZ0lDQnBaaUFvYldGNVltVlFjbTl0YVhObElHbHVjM1JoYm1ObGIyWWdVSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0J0WVhsaVpWQnliMjFwYzJVdVgzUm9aVzRvWm5WdVkzUnBiMjRvZEdocGMwRnlaeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwTGw5elpYUkNiM1Z1WkZSdktIUm9hWE5CY21jcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMExsOXlaWE52YkhabFEyRnNiR0poWTJzb2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCOUxDQnlaWFF1WDNKbGFtVmpkQ3dnY21WMExsOXdjbTluY21WemN5d2djbVYwTENCdWRXeHNLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnlaWFF1WDNObGRFSnZkVzVrVkc4b2RHaHBjMEZ5WnlrN1hHNGdJQ0FnSUNBZ0lISmxkQzVmY21WemIyeDJaVU5oYkd4aVlXTnJLSFpoYkhWbEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JuMDdYRzU5TzF4dVhHNTlMSHQ5WFN3ME9sdG1kVzVqZEdsdmJpaGZaR1Z5WlhGZkxHMXZaSFZzWlN4bGVIQnZjblJ6S1h0Y2Jsd2lkWE5sSUhOMGNtbGpkRndpTzF4dWRtRnlJRzlzWkR0Y2JtbG1JQ2gwZVhCbGIyWWdVSEp2YldselpTQWhQVDBnWENKMWJtUmxabWx1WldSY0lpa2diMnhrSUQwZ1VISnZiV2x6WlR0Y2JtWjFibU4wYVc5dUlHNXZRMjl1Wm14cFkzUW9LU0I3WEc0Z0lDQWdkSEo1SUhzZ2FXWWdLRkJ5YjIxcGMyVWdQVDA5SUdKc2RXVmlhWEprS1NCUWNtOXRhWE5sSUQwZ2IyeGtPeUI5WEc0Z0lDQWdZMkYwWTJnZ0tHVXBJSHQ5WEc0Z0lDQWdjbVYwZFhKdUlHSnNkV1ZpYVhKa08xeHVmVnh1ZG1GeUlHSnNkV1ZpYVhKa0lEMGdYMlJsY21WeFh5aGNJaTR2Y0hKdmJXbHpaUzVxYzF3aUtTZ3BPMXh1WW14MVpXSnBjbVF1Ym05RGIyNW1iR2xqZENBOUlHNXZRMjl1Wm14cFkzUTdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR0pzZFdWaWFYSmtPMXh1WEc1OUxIdGNJaTR2Y0hKdmJXbHpaUzVxYzF3aU9qSXpmVjBzTlRwYlpuVnVZM1JwYjI0b1gyUmxjbVZ4WHl4dGIyUjFiR1VzWlhod2IzSjBjeWw3WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYm5aaGNpQmpjaUE5SUU5aWFtVmpkQzVqY21WaGRHVTdYRzVwWmlBb1kzSXBJSHRjYmlBZ0lDQjJZWElnWTJGc2JHVnlRMkZqYUdVZ1BTQmpjaWh1ZFd4c0tUdGNiaUFnSUNCMllYSWdaMlYwZEdWeVEyRmphR1VnUFNCamNpaHVkV3hzS1R0Y2JpQWdJQ0JqWVd4c1pYSkRZV05vWlZ0Y0lpQnphWHBsWENKZElEMGdaMlYwZEdWeVEyRmphR1ZiWENJZ2MybDZaVndpWFNBOUlEQTdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b1VISnZiV2x6WlNrZ2UxeHVkbUZ5SUhWMGFXd2dQU0JmWkdWeVpYRmZLRndpTGk5MWRHbHNMbXB6WENJcE8xeHVkbUZ5SUdOaGJrVjJZV3gxWVhSbElEMGdkWFJwYkM1allXNUZkbUZzZFdGMFpUdGNiblpoY2lCcGMwbGtaVzUwYVdacFpYSWdQU0IxZEdsc0xtbHpTV1JsYm5ScFptbGxjanRjYmx4dWRtRnlJR2RsZEUxbGRHaHZaRU5oYkd4bGNqdGNiblpoY2lCblpYUkhaWFIwWlhJN1hHNXBaaUFvSVhSeWRXVXBJSHRjYm5aaGNpQnRZV3RsVFdWMGFHOWtRMkZzYkdWeUlEMGdablZ1WTNScGIyNGdLRzFsZEdodlpFNWhiV1VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUVaMWJtTjBhVzl1S0Z3aVpXNXpkWEpsVFdWMGFHOWtYQ0lzSUZ3aUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeHVYRnhjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVLRzlpYWlrZ2V5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRnh1WEZ4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ2QxYzJVZ2MzUnlhV04wSnlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEZ4dVhGeGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnNaVzRnUFNCMGFHbHpMbXhsYm1kMGFEc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeHVYRnhjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnVjM1Z5WlUxbGRHaHZaQ2h2WW1vc0lDZHRaWFJvYjJST1lXMWxKeWs3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRnh1WEZ4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDaHNaVzRwSUhzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEZ4dVhGeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURFNklISmxkSFZ5YmlCdlltb3ViV1YwYUc5a1RtRnRaU2gwYUdseld6QmRLVHNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeHVYRnhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElESTZJSEpsZEhWeWJpQnZZbW91YldWMGFHOWtUbUZ0WlNoMGFHbHpXekJkTENCMGFHbHpXekZkS1RzZ0lDQWdJQ0FnSUNBZ0lDQWdYRnh1WEZ4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRE02SUhKbGRIVnliaUJ2WW1vdWJXVjBhRzlrVG1GdFpTaDBhR2x6V3pCZExDQjBhR2x6V3pGZExDQjBhR2x6V3pKZEtUc2dJQ0FnWEZ4dVhGeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURBNklISmxkSFZ5YmlCdlltb3ViV1YwYUc5a1RtRnRaU2dwT3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeHVYRnhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRnh1WEZ4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHOWlhaTV0WlhSb2IyUk9ZVzFsTG1Gd2NHeDVLRzlpYWl3Z2RHaHBjeWs3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEZ4dVhGeGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeHVYRnhjYmlBZ0lDQWdJQ0FnZlRzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRnh1WEZ4Y2JpQWdJQ0FnSUNBZ1hDSXVjbVZ3YkdGalpTZ3ZiV1YwYUc5a1RtRnRaUzluTENCdFpYUm9iMlJPWVcxbEtTa29aVzV6ZFhKbFRXVjBhRzlrS1R0Y2JuMDdYRzVjYm5aaGNpQnRZV3RsUjJWMGRHVnlJRDBnWm5WdVkzUnBiMjRnS0hCeWIzQmxjblI1VG1GdFpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dSblZ1WTNScGIyNG9YQ0p2WW1wY0lpd2dYQ0lnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQW5kWE5sSUhOMGNtbGpkQ2M3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiMkpxTG5CeWIzQmxjblI1VG1GdFpUc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNCY0lpNXlaWEJzWVdObEtGd2ljSEp2Y0dWeWRIbE9ZVzFsWENJc0lIQnliM0JsY25SNVRtRnRaU2twTzF4dWZUdGNibHh1ZG1GeUlHZGxkRU52YlhCcGJHVmtJRDBnWm5WdVkzUnBiMjRvYm1GdFpTd2dZMjl0Y0dsc1pYSXNJR05oWTJobEtTQjdYRzRnSUNBZ2RtRnlJSEpsZENBOUlHTmhZMmhsVzI1aGJXVmRPMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVYwSUNFOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZwYzBsa1pXNTBhV1pwWlhJb2JtRnRaU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkQ0E5SUdOdmJYQnBiR1Z5S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0JqWVdOb1pWdHVZVzFsWFNBOUlISmxkRHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmJYQ0lnYzJsNlpWd2lYU3NyTzF4dUlDQWdJQ0FnSUNCcFppQW9ZMkZqYUdWYlhDSWdjMmw2WlZ3aVhTQStJRFV4TWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHdGxlWE1nUFNCUFltcGxZM1F1YTJWNWN5aGpZV05vWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SURJMU5qc2dLeXRwS1NCa1pXeGxkR1VnWTJGamFHVmJhMlY1YzF0cFhWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRjSWlCemFYcGxYQ0pkSUQwZ2EyVjVjeTVzWlc1bmRHZ2dMU0F5TlRZN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JuMDdYRzVjYm1kbGRFMWxkR2h2WkVOaGJHeGxjaUE5SUdaMWJtTjBhVzl1S0c1aGJXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z1oyVjBRMjl0Y0dsc1pXUW9ibUZ0WlN3Z2JXRnJaVTFsZEdodlpFTmhiR3hsY2l3Z1kyRnNiR1Z5UTJGamFHVXBPMXh1ZlR0Y2JseHVaMlYwUjJWMGRHVnlJRDBnWm5WdVkzUnBiMjRvYm1GdFpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCblpYUkRiMjF3YVd4bFpDaHVZVzFsTENCdFlXdGxSMlYwZEdWeUxDQm5aWFIwWlhKRFlXTm9aU2s3WEc1OU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCbGJuTjFjbVZOWlhSb2IyUW9iMkpxTENCdFpYUm9iMlJPWVcxbEtTQjdYRzRnSUNBZ2RtRnlJR1p1TzF4dUlDQWdJR2xtSUNodlltb2dJVDBnYm5Wc2JDa2dabTRnUFNCdlltcGJiV1YwYUc5a1RtRnRaVjA3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJtYmlBaFBUMGdYQ0ptZFc1amRHbHZibHdpS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ0WlhOellXZGxJRDBnWENKUFltcGxZM1FnWENJZ0t5QjFkR2xzTG1Oc1lYTnpVM1J5YVc1bktHOWlhaWtnS3lCY0lpQm9ZWE1nYm04Z2JXVjBhRzlrSUNkY0lpQXJYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNMblJ2VTNSeWFXNW5LRzFsZEdodlpFNWhiV1VwSUNzZ1hDSW5YQ0k3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCUWNtOXRhWE5sTGxSNWNHVkZjbkp2Y2lodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHWnVPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpZV3hzWlhJb2IySnFLU0I3WEc0Z0lDQWdkbUZ5SUcxbGRHaHZaRTVoYldVZ1BTQjBhR2x6TG5CdmNDZ3BPMXh1SUNBZ0lIWmhjaUJtYmlBOUlHVnVjM1Z5WlUxbGRHaHZaQ2h2WW1vc0lHMWxkR2h2WkU1aGJXVXBPMXh1SUNBZ0lISmxkSFZ5YmlCbWJpNWhjSEJzZVNodlltb3NJSFJvYVhNcE8xeHVmVnh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WTJGc2JDQTlJR1oxYm1OMGFXOXVJQ2h0WlhSb2IyUk9ZVzFsS1NCN1hHNGdJQ0FnZG1GeUlDUmZiR1Z1SUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUR0MllYSWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTZ2tYMnhsYmlBdElERXBPeUJtYjNJb2RtRnlJQ1JmYVNBOUlERTdJQ1JmYVNBOElDUmZiR1Z1T3lBckt5UmZhU2tnZTJGeVozTmJKRjlwSUMwZ01WMGdQU0JoY21kMWJXVnVkSE5iSkY5cFhUdDlYRzRnSUNBZ2FXWWdLQ0YwY25WbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoallXNUZkbUZzZFdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzFoZVdKbFEyRnNiR1Z5SUQwZ1oyVjBUV1YwYUc5a1EyRnNiR1Z5S0cxbGRHaHZaRTVoYldVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHMWhlV0psUTJGc2JHVnlJQ0U5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzUm9aVzRvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWhlV0psUTJGc2JHVnlMQ0IxYm1SbFptbHVaV1FzSUhWdVpHVm1hVzVsWkN3Z1lYSm5jeXdnZFc1a1pXWnBibVZrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQmhjbWR6TG5CMWMyZ29iV1YwYUc5a1RtRnRaU2s3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDNSb1pXNG9ZMkZzYkdWeUxDQjFibVJsWm1sdVpXUXNJSFZ1WkdWbWFXNWxaQ3dnWVhKbmN5d2dkVzVrWldacGJtVmtLVHRjYm4wN1hHNWNibVoxYm1OMGFXOXVJRzVoYldWa1IyVjBkR1Z5S0c5aWFpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdlltcGJkR2hwYzEwN1hHNTlYRzVtZFc1amRHbHZiaUJwYm1SbGVHVmtSMlYwZEdWeUtHOWlhaWtnZTF4dUlDQWdJSFpoY2lCcGJtUmxlQ0E5SUN0MGFHbHpPMXh1SUNBZ0lHbG1JQ2hwYm1SbGVDQThJREFwSUdsdVpHVjRJRDBnVFdGMGFDNXRZWGdvTUN3Z2FXNWtaWGdnS3lCdlltb3ViR1Z1WjNSb0tUdGNiaUFnSUNCeVpYUjFjbTRnYjJKcVcybHVaR1Y0WFR0Y2JuMWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbWRsZENBOUlHWjFibU4wYVc5dUlDaHdjbTl3WlhKMGVVNWhiV1VwSUh0Y2JpQWdJQ0IyWVhJZ2FYTkpibVJsZUNBOUlDaDBlWEJsYjJZZ2NISnZjR1Z5ZEhsT1lXMWxJRDA5UFNCY0ltNTFiV0psY2x3aUtUdGNiaUFnSUNCMllYSWdaMlYwZEdWeU8xeHVJQ0FnSUdsbUlDZ2hhWE5KYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1kyRnVSWFpoYkhWaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ0WVhsaVpVZGxkSFJsY2lBOUlHZGxkRWRsZEhSbGNpaHdjbTl3WlhKMGVVNWhiV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaMlYwZEdWeUlEMGdiV0Y1WW1WSFpYUjBaWElnSVQwOUlHNTFiR3dnUHlCdFlYbGlaVWRsZEhSbGNpQTZJRzVoYldWa1IyVjBkR1Z5TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMlYwZEdWeUlEMGdibUZ0WldSSFpYUjBaWEk3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JuWlhSMFpYSWdQU0JwYm1SbGVHVmtSMlYwZEdWeU8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmRHaGxiaWhuWlhSMFpYSXNJSFZ1WkdWbWFXNWxaQ3dnZFc1a1pXWnBibVZrTENCd2NtOXdaWEowZVU1aGJXVXNJSFZ1WkdWbWFXNWxaQ2s3WEc1OU8xeHVmVHRjYmx4dWZTeDdYQ0l1TDNWMGFXd3Vhbk5jSWpvek9IMWRMRFk2VzJaMWJtTjBhVzl1S0Y5a1pYSmxjVjhzYlc5a2RXeGxMR1Y0Y0c5eWRITXBlMXh1WENKMWMyVWdjM1J5YVdOMFhDSTdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLRkJ5YjIxcGMyVXBJSHRjYm5aaGNpQmxjbkp2Y25NZ1BTQmZaR1Z5WlhGZktGd2lMaTlsY25KdmNuTXVhbk5jSWlrN1hHNTJZWElnWVhONWJtTWdQU0JmWkdWeVpYRmZLRndpTGk5aGMzbHVZeTVxYzF3aUtUdGNiblpoY2lCRFlXNWpaV3hzWVhScGIyNUZjbkp2Y2lBOUlHVnljbTl5Y3k1RFlXNWpaV3hzWVhScGIyNUZjbkp2Y2p0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYMk5oYm1ObGJDQTlJR1oxYm1OMGFXOXVJQ2h5WldGemIyNHBJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVhWE5EWVc1alpXeHNZV0pzWlNncEtTQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjJZWElnY0dGeVpXNTBPMXh1SUNBZ0lIWmhjaUJ3Y205dGFYTmxWRzlTWldwbFkzUWdQU0IwYUdsek8xeHVJQ0FnSUhkb2FXeGxJQ2dvY0dGeVpXNTBJRDBnY0hKdmJXbHpaVlJ2VW1WcVpXTjBMbDlqWVc1alpXeHNZWFJwYjI1UVlYSmxiblFwSUNFOVBTQjFibVJsWm1sdVpXUWdKaVpjYmlBZ0lDQWdJQ0FnY0dGeVpXNTBMbWx6UTJGdVkyVnNiR0ZpYkdVb0tTa2dlMXh1SUNBZ0lDQWdJQ0J3Y205dGFYTmxWRzlTWldwbFkzUWdQU0J3WVhKbGJuUTdYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVYM1Z1YzJWMFEyRnVZMlZzYkdGaWJHVW9LVHRjYmlBZ0lDQndjbTl0YVhObFZHOVNaV3BsWTNRdVgzUmhjbWRsZENncExsOXlaV3BsWTNSRFlXeHNZbUZqYXloeVpXRnpiMjRzSUdaaGJITmxMQ0IwY25WbEtUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtTmhibU5sYkNBOUlHWjFibU4wYVc5dUlDaHlaV0Z6YjI0cElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWFYTkRZVzVqWld4c1lXSnNaU2dwS1NCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCcFppQW9jbVZoYzI5dUlEMDlQU0IxYm1SbFptbHVaV1FwSUhKbFlYTnZiaUE5SUc1bGR5QkRZVzVqWld4c1lYUnBiMjVGY25KdmNpZ3BPMXh1SUNBZ0lHRnplVzVqTG1sdWRtOXJaVXhoZEdWeUtIUm9hWE11WDJOaGJtTmxiQ3dnZEdocGN5d2djbVZoYzI5dUtUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtTmhibU5sYkd4aFlteGxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TGw5allXNWpaV3hzWVdKc1pTZ3BLU0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0JoYzNsdVl5NWxibUZpYkdWVWNtRnRjRzlzYVc1bEtDazdYRzRnSUNBZ2RHaHBjeTVmYzJWMFEyRnVZMlZzYkdGaWJHVW9LVHRjYmlBZ0lDQjBhR2x6TGw5allXNWpaV3hzWVhScGIyNVFZWEpsYm5RZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNTFibU5oYm1ObGJHeGhZbXhsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIWmhjaUJ5WlhRZ1BTQjBhR2x6TG5Sb1pXNG9LVHRjYmlBZ0lDQnlaWFF1WDNWdWMyVjBRMkZ1WTJWc2JHRmliR1VvS1R0Y2JpQWdJQ0J5WlhSMWNtNGdjbVYwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1Wm05eWF5QTlJR1oxYm1OMGFXOXVJQ2hrYVdSR2RXeG1hV3hzTENCa2FXUlNaV3BsWTNRc0lHUnBaRkJ5YjJkeVpYTnpLU0I3WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJSFJvYVhNdVgzUm9aVzRvWkdsa1JuVnNabWxzYkN3Z1pHbGtVbVZxWldOMExDQmthV1JRY205bmNtVnpjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxYm1SbFptbHVaV1FzSUhWdVpHVm1hVzVsWkNrN1hHNWNiaUFnSUNCeVpYUXVYM05sZEVOaGJtTmxiR3hoWW14bEtDazdYRzRnSUNBZ2NtVjBMbDlqWVc1alpXeHNZWFJwYjI1UVlYSmxiblFnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JuMDdYRzU5TzF4dVhHNTlMSHRjSWk0dllYTjVibU11YW5OY0lqb3lMRndpTGk5bGNuSnZjbk11YW5OY0lqb3hNMzFkTERjNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVkbUZ5SUdGemVXNWpJRDBnWDJSbGNtVnhYeWhjSWk0dllYTjVibU11YW5OY0lpazdYRzUyWVhJZ2RYUnBiQ0E5SUY5a1pYSmxjVjhvWENJdUwzVjBhV3d1YW5OY0lpazdYRzUyWVhJZ1lteDFaV0pwY21SR2NtRnRaVkJoZEhSbGNtNGdQVnh1SUNBZ0lDOWJYRnhjWEZ4Y0wxMWliSFZsWW1seVpGdGNYRnhjWEZ3dlhXcHpXMXhjWEZ4Y1hDOWRLRzFoYVc1OFpHVmlkV2Q4ZW1Gc1oyOThhVzV6ZEhKMWJXVnVkR1ZrS1M4N1hHNTJZWElnYzNSaFkydEdjbUZ0WlZCaGRIUmxjbTRnUFNCdWRXeHNPMXh1ZG1GeUlHWnZjbTFoZEZOMFlXTnJJRDBnYm5Wc2JEdGNiblpoY2lCcGJtUmxiblJUZEdGamEwWnlZVzFsY3lBOUlHWmhiSE5sTzF4dWRtRnlJSGRoY200N1hHNWNibVoxYm1OMGFXOXVJRU5oY0hSMWNtVmtWSEpoWTJVb2NHRnlaVzUwS1NCN1hHNGdJQ0FnZEdocGN5NWZjR0Z5Wlc1MElEMGdjR0Z5Wlc1ME8xeHVJQ0FnSUhaaGNpQnNaVzVuZEdnZ1BTQjBhR2x6TGw5c1pXNW5kR2dnUFNBeElDc2dLSEJoY21WdWRDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z01DQTZJSEJoY21WdWRDNWZiR1Z1WjNSb0tUdGNiaUFnSUNCallYQjBkWEpsVTNSaFkydFVjbUZqWlNoMGFHbHpMQ0JEWVhCMGRYSmxaRlJ5WVdObEtUdGNiaUFnSUNCcFppQW9iR1Z1WjNSb0lENGdNeklwSUhSb2FYTXVkVzVqZVdOc1pTZ3BPMXh1ZlZ4dWRYUnBiQzVwYm1obGNtbDBjeWhEWVhCMGRYSmxaRlJ5WVdObExDQkZjbkp2Y2lrN1hHNWNia05oY0hSMWNtVmtWSEpoWTJVdWNISnZkRzkwZVhCbExuVnVZM2xqYkdVZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQjJZWElnYkdWdVozUm9JRDBnZEdocGN5NWZiR1Z1WjNSb08xeHVJQ0FnSUdsbUlDaHNaVzVuZEdnZ1BDQXlLU0J5WlhSMWNtNDdYRzRnSUNBZ2RtRnlJRzV2WkdWeklEMGdXMTA3WEc0Z0lDQWdkbUZ5SUhOMFlXTnJWRzlKYm1SbGVDQTlJSHQ5TzF4dVhHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQXNJRzV2WkdVZ1BTQjBhR2x6T3lCdWIyUmxJQ0U5UFNCMWJtUmxabWx1WldRN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNCdWIyUmxjeTV3ZFhOb0tHNXZaR1VwTzF4dUlDQWdJQ0FnSUNCdWIyUmxJRDBnYm05a1pTNWZjR0Z5Wlc1ME8xeHVJQ0FnSUgxY2JpQWdJQ0JzWlc1bmRHZ2dQU0IwYUdsekxsOXNaVzVuZEdnZ1BTQnBPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0JzWlc1bmRHZ2dMU0F4T3lCcElENDlJREE3SUMwdGFTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MzUmhZMnNnUFNCdWIyUmxjMXRwWFM1emRHRmphenRjYmlBZ0lDQWdJQ0FnYVdZZ0tITjBZV05yVkc5SmJtUmxlRnR6ZEdGamExMGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSaFkydFViMGx1WkdWNFczTjBZV05yWFNBOUlHazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZM1Z5Y21WdWRGTjBZV05ySUQwZ2JtOWtaWE5iYVYwdWMzUmhZMnM3WEc0Z0lDQWdJQ0FnSUhaaGNpQnBibVJsZUNBOUlITjBZV05yVkc5SmJtUmxlRnRqZFhKeVpXNTBVM1JoWTJ0ZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1a1pYZ2dJVDA5SUhWdVpHVm1hVzVsWkNBbUppQnBibVJsZUNBaFBUMGdhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dsdVpHVjRJRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1Z6VzJsdVpHVjRJQzBnTVYwdVgzQmhjbVZ1ZENBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnViMlJsYzF0cGJtUmxlQ0F0SURGZExsOXNaVzVuZEdnZ1BTQXhPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYm05a1pYTmJhVjB1WDNCaGNtVnVkQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzV2WkdWelcybGRMbDlzWlc1bmRHZ2dQU0F4TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdONVkyeGxSV1JuWlU1dlpHVWdQU0JwSUQ0Z01DQS9JRzV2WkdWelcya2dMU0F4WFNBNklIUm9hWE03WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGJtUmxlQ0E4SUd4bGJtZDBhQ0F0SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmplV05zWlVWa1oyVk9iMlJsTGw5d1lYSmxiblFnUFNCdWIyUmxjMXRwYm1SbGVDQXJJREZkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdONVkyeGxSV1JuWlU1dlpHVXVYM0JoY21WdWRDNTFibU41WTJ4bEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM2xqYkdWRlpHZGxUbTlrWlM1ZmJHVnVaM1JvSUQxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM2xqYkdWRlpHZGxUbTlrWlM1ZmNHRnlaVzUwTGw5c1pXNW5kR2dnS3lBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZVdOc1pVVmtaMlZPYjJSbExsOXdZWEpsYm5RZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM2xqYkdWRlpHZGxUbTlrWlM1ZmJHVnVaM1JvSUQwZ01UdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCamRYSnlaVzUwUTJocGJHUk1aVzVuZEdnZ1BTQmplV05zWlVWa1oyVk9iMlJsTGw5c1pXNW5kR2dnS3lBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYWlBOUlHa2dMU0F5T3lCcUlENDlJREE3SUMwdGFpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzV2WkdWelcycGRMbDlzWlc1bmRHZ2dQU0JqZFhKeVpXNTBRMmhwYkdSTVpXNW5kR2c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRU5vYVd4a1RHVnVaM1JvS3lzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlPMXh1WEc1RFlYQjBkWEpsWkZSeVlXTmxMbkJ5YjNSdmRIbHdaUzV3WVhKbGJuUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmNHRnlaVzUwTzF4dWZUdGNibHh1UTJGd2RIVnlaV1JVY21GalpTNXdjbTkwYjNSNWNHVXVhR0Z6VUdGeVpXNTBJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzQmhjbVZ1ZENBaFBUMGdkVzVrWldacGJtVmtPMXh1ZlR0Y2JseHVRMkZ3ZEhWeVpXUlVjbUZqWlM1d2NtOTBiM1I1Y0dVdVlYUjBZV05vUlhoMGNtRlVjbUZqWlNBOUlHWjFibU4wYVc5dUtHVnljbTl5S1NCN1hHNGdJQ0FnYVdZZ0tHVnljbTl5TGw5ZmMzUmhZMnREYkdWaGJtVmtYMThwSUhKbGRIVnlianRjYmlBZ0lDQjBhR2x6TG5WdVkzbGpiR1VvS1R0Y2JpQWdJQ0IyWVhJZ2NHRnljMlZrSUQwZ1EyRndkSFZ5WldSVWNtRmpaUzV3WVhKelpWTjBZV05yUVc1a1RXVnpjMkZuWlNobGNuSnZjaWs3WEc0Z0lDQWdkbUZ5SUcxbGMzTmhaMlVnUFNCd1lYSnpaV1F1YldWemMyRm5aVHRjYmlBZ0lDQjJZWElnYzNSaFkydHpJRDBnVzNCaGNuTmxaQzV6ZEdGamExMDdYRzVjYmlBZ0lDQjJZWElnZEhKaFkyVWdQU0IwYUdsek8xeHVJQ0FnSUhkb2FXeGxJQ2gwY21GalpTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lITjBZV05yY3k1d2RYTm9LR05zWldGdVUzUmhZMnNvZEhKaFkyVXVjM1JoWTJzdWMzQnNhWFFvWENKY1hHNWNJaWtwS1R0Y2JpQWdJQ0FnSUNBZ2RISmhZMlVnUFNCMGNtRmpaUzVmY0dGeVpXNTBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpXMXZkbVZEYjIxdGIyNVNiMjkwY3loemRHRmphM01wTzF4dUlDQWdJSEpsYlc5MlpVUjFjR3hwWTJGMFpVOXlSVzF3ZEhsS2RXMXdjeWh6ZEdGamEzTXBPMXh1SUNBZ0lIVjBhV3d1Ym05MFJXNTFiV1Z5WVdKc1pWQnliM0FvWlhKeWIzSXNJRndpYzNSaFkydGNJaXdnY21WamIyNXpkSEoxWTNSVGRHRmpheWh0WlhOellXZGxMQ0J6ZEdGamEzTXBLVHRjYmlBZ0lDQjFkR2xzTG01dmRFVnVkVzFsY21GaWJHVlFjbTl3S0dWeWNtOXlMQ0JjSWw5ZmMzUmhZMnREYkdWaGJtVmtYMTljSWl3Z2RISjFaU2s3WEc1OU8xeHVYRzVtZFc1amRHbHZiaUJ5WldOdmJuTjBjblZqZEZOMFlXTnJLRzFsYzNOaFoyVXNJSE4wWVdOcmN5a2dlMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djM1JoWTJ0ekxteGxibWQwYUNBdElERTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQnpkR0ZqYTNOYmFWMHVjSFZ6YUNoY0lrWnliMjBnY0hKbGRtbHZkWE1nWlhabGJuUTZYQ0lwTzF4dUlDQWdJQ0FnSUNCemRHRmphM05iYVYwZ1BTQnpkR0ZqYTNOYmFWMHVhbTlwYmloY0lseGNibHdpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0drZ1BDQnpkR0ZqYTNNdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lITjBZV05yYzF0cFhTQTlJSE4wWVdOcmMxdHBYUzVxYjJsdUtGd2lYRnh1WENJcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdiV1Z6YzJGblpTQXJJRndpWEZ4dVhDSWdLeUJ6ZEdGamEzTXVhbTlwYmloY0lseGNibHdpS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnY21WdGIzWmxSSFZ3YkdsallYUmxUM0pGYlhCMGVVcDFiWEJ6S0hOMFlXTnJjeWtnZTF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYzNSaFkydHpMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGamEzTmJhVjB1YkdWdVozUm9JRDA5UFNBd0lIeDhYRzRnSUNBZ0lDQWdJQ0FnSUNBb0tHa2dLeUF4SUR3Z2MzUmhZMnR6TG14bGJtZDBhQ2tnSmlZZ2MzUmhZMnR6VzJsZFd6QmRJRDA5UFNCemRHRmphM05iYVNzeFhWc3dYU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdOcmN5NXpjR3hwWTJVb2FTd2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBMUzA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJSEpsYlc5MlpVTnZiVzF2YmxKdmIzUnpLSE4wWVdOcmN5a2dlMXh1SUNBZ0lIWmhjaUJqZFhKeVpXNTBJRDBnYzNSaFkydHpXekJkTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnYzNSaFkydHpMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3Y21WMklEMGdjM1JoWTJ0elcybGRPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kzVnljbVZ1ZEV4aGMzUkpibVJsZUNBOUlHTjFjbkpsYm5RdWJHVnVaM1JvSUMwZ01UdGNiaUFnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJNWVhOMFRHbHVaU0E5SUdOMWNuSmxiblJiWTNWeWNtVnVkRXhoYzNSSmJtUmxlRjA3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiMjF0YjI1U2IyOTBUV1ZsZEZCdmFXNTBJRDBnTFRFN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhaUE5SUhCeVpYWXViR1Z1WjNSb0lDMGdNVHNnYWlBK1BTQXdPeUF0TFdvcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbVYyVzJwZElEMDlQU0JqZFhKeVpXNTBUR0Z6ZEV4cGJtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjIxdGIyNVNiMjkwVFdWbGRGQnZhVzUwSUQwZ2FqdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHb2dQU0JqYjIxdGIyNVNiMjkwVFdWbGRGQnZhVzUwT3lCcUlENDlJREE3SUMwdGFpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR3hwYm1VZ1BTQndjbVYyVzJwZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SYlkzVnljbVZ1ZEV4aGMzUkpibVJsZUYwZ1BUMDlJR3hwYm1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MExuQnZjQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJNWVhOMFNXNWtaWGd0TFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZENBOUlIQnlaWFk3WEc0Z0lDQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpiR1ZoYmxOMFlXTnJLSE4wWVdOcktTQjdYRzRnSUNBZ2RtRnlJSEpsZENBOUlGdGRPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djM1JoWTJzdWJHVnVaM1JvT3lBcksya3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHeHBibVVnUFNCemRHRmphMXRwWFR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2x6VkhKaFkyVk1hVzVsSUQwZ2MzUmhZMnRHY21GdFpWQmhkSFJsY200dWRHVnpkQ2hzYVc1bEtTQjhmRnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSWdJQ0FnS0U1dklITjBZV05ySUhSeVlXTmxLVndpSUQwOVBTQnNhVzVsTzF4dUlDQWdJQ0FnSUNCMllYSWdhWE5KYm5SbGNtNWhiRVp5WVcxbElEMGdhWE5VY21GalpVeHBibVVnSmlZZ2MyaHZkV3hrU1dkdWIzSmxLR3hwYm1VcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYVhOVWNtRmpaVXhwYm1VZ0ppWWdJV2x6U1c1MFpYSnVZV3hHY21GdFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x1WkdWdWRGTjBZV05yUm5KaGJXVnpJQ1ltSUd4cGJtVXVZMmhoY2tGMEtEQXBJQ0U5UFNCY0lpQmNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4cGJtVWdQU0JjSWlBZ0lDQmNJaUFySUd4cGJtVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhRdWNIVnphQ2hzYVc1bEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCemRHRmphMFp5WVcxbGMwRnpRWEp5WVhrb1pYSnliM0lwSUh0Y2JpQWdJQ0IyWVhJZ2MzUmhZMnNnUFNCbGNuSnZjaTV6ZEdGamF5NXlaWEJzWVdObEtDOWNYSE1ySkM5bkxDQmNJbHdpS1M1emNHeHBkQ2hjSWx4Y2Jsd2lLVHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE4wWVdOckxteGxibWQwYURzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnNhVzVsSUQwZ2MzUmhZMnRiYVYwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hjSWlBZ0lDQW9UbThnYzNSaFkyc2dkSEpoWTJVcFhDSWdQVDA5SUd4cGJtVWdmSHdnYzNSaFkydEdjbUZ0WlZCaGRIUmxjbTR1ZEdWemRDaHNhVzVsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLR2tnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJSE4wWVdOcklEMGdjM1JoWTJzdWMyeHBZMlVvYVNrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnpkR0ZqYXp0Y2JuMWNibHh1UTJGd2RIVnlaV1JVY21GalpTNXdZWEp6WlZOMFlXTnJRVzVrVFdWemMyRm5aU0E5SUdaMWJtTjBhVzl1S0dWeWNtOXlLU0I3WEc0Z0lDQWdkbUZ5SUhOMFlXTnJJRDBnWlhKeWIzSXVjM1JoWTJzN1hHNGdJQ0FnZG1GeUlHMWxjM05oWjJVZ1BTQmxjbkp2Y2k1MGIxTjBjbWx1WnlncE8xeHVJQ0FnSUhOMFlXTnJJRDBnZEhsd1pXOW1JSE4wWVdOcklEMDlQU0JjSW5OMGNtbHVaMXdpSUNZbUlITjBZV05yTG14bGJtZDBhQ0ErSURCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lITjBZV05yUm5KaGJXVnpRWE5CY25KaGVTaGxjbkp2Y2lrZ09pQmJYQ0lnSUNBZ0tFNXZJSE4wWVdOcklIUnlZV05sS1Z3aVhUdGNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCdFpYTnpZV2RsT2lCdFpYTnpZV2RsTEZ4dUlDQWdJQ0FnSUNCemRHRmphem9nWTJ4bFlXNVRkR0ZqYXloemRHRmpheWxjYmlBZ0lDQjlPMXh1ZlR0Y2JseHVRMkZ3ZEhWeVpXUlVjbUZqWlM1bWIzSnRZWFJCYm1STWIyZEZjbkp2Y2lBOUlHWjFibU4wYVc5dUtHVnljbTl5TENCMGFYUnNaU2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWTI5dWMyOXNaU0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdiV1Z6YzJGblpUdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJsY25KdmNpQTlQVDBnWENKdlltcGxZM1JjSWlCOGZDQjBlWEJsYjJZZ1pYSnliM0lnUFQwOUlGd2lablZ1WTNScGIyNWNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhOMFlXTnJJRDBnWlhKeWIzSXVjM1JoWTJzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WlhOellXZGxJRDBnZEdsMGJHVWdLeUJtYjNKdFlYUlRkR0ZqYXloemRHRmpheXdnWlhKeWIzSXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXVnpjMkZuWlNBOUlIUnBkR3hsSUNzZ1UzUnlhVzVuS0dWeWNtOXlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlIZGhjbTRnUFQwOUlGd2lablZ1WTNScGIyNWNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkMkZ5YmlodFpYTnpZV2RsS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ1kyOXVjMjlzWlM1c2IyY2dQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpQjhmRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVzltSUdOdmJuTnZiR1V1Ykc5bklEMDlQU0JjSW05aWFtVmpkRndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMDdYRzVjYmtOaGNIUjFjbVZrVkhKaFkyVXVkVzVvWVc1a2JHVmtVbVZxWldOMGFXOXVJRDBnWm5WdVkzUnBiMjRnS0hKbFlYTnZiaWtnZTF4dUlDQWdJRU5oY0hSMWNtVmtWSEpoWTJVdVptOXliV0YwUVc1a1RHOW5SWEp5YjNJb2NtVmhjMjl1TENCY0lsNHRMUzBnVjJsMGFDQmhaR1JwZEdsdmJtRnNJSE4wWVdOcklIUnlZV05sT2lCY0lpazdYRzU5TzF4dVhHNURZWEIwZFhKbFpGUnlZV05sTG1selUzVndjRzl5ZEdWa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBlWEJsYjJZZ1kyRndkSFZ5WlZOMFlXTnJWSEpoWTJVZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWp0Y2JuMDdYRzVjYmtOaGNIUjFjbVZrVkhKaFkyVXVabWx5WlZKbGFtVmpkR2x2YmtWMlpXNTBJRDFjYm1aMWJtTjBhVzl1S0c1aGJXVXNJR3h2WTJGc1NHRnVaR3hsY2l3Z2NtVmhjMjl1TENCd2NtOXRhWE5sS1NCN1hHNGdJQ0FnZG1GeUlHeHZZMkZzUlhabGJuUkdhWEpsWkNBOUlHWmhiSE5sTzF4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdiRzlqWVd4SVlXNWtiR1Z5SUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3h2WTJGc1JYWmxiblJHYVhKbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtRnRaU0E5UFQwZ1hDSnlaV3BsWTNScGIyNUlZVzVrYkdWa1hDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzYjJOaGJFaGhibVJzWlhJb2NISnZiV2x6WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3h2WTJGc1NHRnVaR3hsY2loeVpXRnpiMjRzSUhCeWIyMXBjMlVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCaGMzbHVZeTUwYUhKdmQweGhkR1Z5S0dVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhaaGNpQm5iRzlpWVd4RmRtVnVkRVpwY21Wa0lEMGdabUZzYzJVN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdaMnh2WW1Gc1JYWmxiblJHYVhKbFpDQTlJR1pwY21WSGJHOWlZV3hGZG1WdWRDaHVZVzFsTENCeVpXRnpiMjRzSUhCeWIyMXBjMlVwTzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ1oyeHZZbUZzUlhabGJuUkdhWEpsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUdGemVXNWpMblJvY205M1RHRjBaWElvWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlHUnZiVVYyWlc1MFJtbHlaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQnBaaUFvWm1seVpVUnZiVVYyWlc1MEtTQjdYRzRnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjIxRmRtVnVkRVpwY21Wa0lEMGdabWx5WlVSdmJVVjJaVzUwS0c1aGJXVXVkRzlNYjNkbGNrTmhjMlVvS1N3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZWE52YmpvZ2NtVmhjMjl1TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyMXBjMlU2SUhCeWIyMXBjMlZjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjIxRmRtVnVkRVpwY21Wa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6ZVc1akxuUm9jbTkzVEdGMFpYSW9aU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb0lXZHNiMkpoYkVWMlpXNTBSbWx5WldRZ0ppWWdJV3h2WTJGc1JYWmxiblJHYVhKbFpDQW1KaUFoWkc5dFJYWmxiblJHYVhKbFpDQW1KbHh1SUNBZ0lDQWdJQ0J1WVcxbElEMDlQU0JjSW5WdWFHRnVaR3hsWkZKbGFtVmpkR2x2Ymx3aUtTQjdYRzRnSUNBZ0lDQWdJRU5oY0hSMWNtVmtWSEpoWTJVdVptOXliV0YwUVc1a1RHOW5SWEp5YjNJb2NtVmhjMjl1TENCY0lsVnVhR0Z1Wkd4bFpDQnlaV3BsWTNScGIyNGdYQ0lwTzF4dUlDQWdJSDFjYm4wN1hHNWNibVoxYm1OMGFXOXVJR1p2Y20xaGRFNXZia1Z5Y205eUtHOWlhaWtnZTF4dUlDQWdJSFpoY2lCemRISTdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQnZZbW9nUFQwOUlGd2lablZ1WTNScGIyNWNJaWtnZTF4dUlDQWdJQ0FnSUNCemRISWdQU0JjSWx0bWRXNWpkR2x2YmlCY0lpQXJYRzRnSUNBZ0lDQWdJQ0FnSUNBb2IySnFMbTVoYldVZ2ZId2dYQ0poYm05dWVXMXZkWE5jSWlrZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0FnWENKZFhDSTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2MzUnlJRDBnYjJKcUxuUnZVM1J5YVc1bktDazdYRzRnSUNBZ0lDQWdJSFpoY2lCeWRYTmxiR1Z6YzFSdlUzUnlhVzVuSUQwZ0wxeGNXMjlpYW1WamRDQmJZUzE2UVMxYU1DMDVKRjlkSzF4Y1hTODdYRzRnSUNBZ0lDQWdJR2xtSUNoeWRYTmxiR1Z6YzFSdlUzUnlhVzVuTG5SbGMzUW9jM1J5S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm1WM1UzUnlJRDBnU2xOUFRpNXpkSEpwYm1kcFpua29iMkpxS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRISWdQU0J1WlhkVGRISTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhSamFDaGxLU0I3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCcFppQW9jM1J5TG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUnlJRDBnWENJb1pXMXdkSGtnWVhKeVlYa3BYQ0k3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlDaGNJaWc4WENJZ0t5QnpibWx3S0hOMGNpa2dLeUJjSWo0c0lHNXZJSE4wWVdOcklIUnlZV05sS1Z3aUtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2MyNXBjQ2h6ZEhJcElIdGNiaUFnSUNCMllYSWdiV0Y0UTJoaGNuTWdQU0EwTVR0Y2JpQWdJQ0JwWmlBb2MzUnlMbXhsYm1kMGFDQThJRzFoZUVOb1lYSnpLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEhJN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnpkSEl1YzNWaWMzUnlLREFzSUcxaGVFTm9ZWEp6SUMwZ015a2dLeUJjSWk0dUxsd2lPMXh1ZlZ4dVhHNTJZWElnYzJodmRXeGtTV2R1YjNKbElEMGdablZ1WTNScGIyNG9LU0I3SUhKbGRIVnliaUJtWVd4elpUc2dmVHRjYm5aaGNpQndZWEp6WlV4cGJtVkpibVp2VW1WblpYZ2dQU0F2VzF4Y0x6eGNYQ2hkS0Z0ZU9seGNMMTByS1Rvb1hGeGtLeWs2S0Q4NlhGeGtLeWxjWENrL1hGeHpLaVF2TzF4dVpuVnVZM1JwYjI0Z2NHRnljMlZNYVc1bFNXNW1ieWhzYVc1bEtTQjdYRzRnSUNBZ2RtRnlJRzFoZEdOb1pYTWdQU0JzYVc1bExtMWhkR05vS0hCaGNuTmxUR2x1WlVsdVptOVNaV2RsZUNrN1hHNGdJQ0FnYVdZZ0tHMWhkR05vWlhNcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdacGJHVk9ZVzFsT2lCdFlYUmphR1Z6V3pGZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdsdVpUb2djR0Z5YzJWSmJuUW9iV0YwWTJobGMxc3lYU3dnTVRBcFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVmVnh1UTJGd2RIVnlaV1JVY21GalpTNXpaWFJDYjNWdVpITWdQU0JtZFc1amRHbHZiaWhtYVhKemRFeHBibVZGY25KdmNpd2diR0Z6ZEV4cGJtVkZjbkp2Y2lrZ2UxeHVJQ0FnSUdsbUlDZ2hRMkZ3ZEhWeVpXUlVjbUZqWlM1cGMxTjFjSEJ2Y25SbFpDZ3BLU0J5WlhSMWNtNDdYRzRnSUNBZ2RtRnlJR1pwY25OMFUzUmhZMnRNYVc1bGN5QTlJR1pwY25OMFRHbHVaVVZ5Y205eUxuTjBZV05yTG5Od2JHbDBLRndpWEZ4dVhDSXBPMXh1SUNBZ0lIWmhjaUJzWVhOMFUzUmhZMnRNYVc1bGN5QTlJR3hoYzNSTWFXNWxSWEp5YjNJdWMzUmhZMnN1YzNCc2FYUW9YQ0pjWEc1Y0lpazdYRzRnSUNBZ2RtRnlJR1pwY25OMFNXNWtaWGdnUFNBdE1UdGNiaUFnSUNCMllYSWdiR0Z6ZEVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnZG1GeUlHWnBjbk4wUm1sc1pVNWhiV1U3WEc0Z0lDQWdkbUZ5SUd4aGMzUkdhV3hsVG1GdFpUdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHWnBjbk4wVTNSaFkydE1hVzVsY3k1c1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NtVnpkV3gwSUQwZ2NHRnljMlZNYVc1bFNXNW1ieWhtYVhKemRGTjBZV05yVEdsdVpYTmJhVjBwTzF4dUlDQWdJQ0FnSUNCcFppQW9jbVZ6ZFd4MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWFYSnpkRVpwYkdWT1lXMWxJRDBnY21WemRXeDBMbVpwYkdWT1lXMWxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptbHljM1JKYm1SbGVDQTlJSEpsYzNWc2RDNXNhVzVsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1lYTjBVM1JoWTJ0TWFXNWxjeTVzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY21WemRXeDBJRDBnY0dGeWMyVk1hVzVsU1c1bWJ5aHNZWE4wVTNSaFkydE1hVzVsYzF0cFhTazdYRzRnSUNBZ0lDQWdJR2xtSUNoeVpYTjFiSFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoYzNSR2FXeGxUbUZ0WlNBOUlISmxjM1ZzZEM1bWFXeGxUbUZ0WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoYzNSSmJtUmxlQ0E5SUhKbGMzVnNkQzVzYVc1bE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLR1pwY25OMFNXNWtaWGdnUENBd0lIeDhJR3hoYzNSSmJtUmxlQ0E4SURBZ2ZId2dJV1pwY25OMFJtbHNaVTVoYldVZ2ZId2dJV3hoYzNSR2FXeGxUbUZ0WlNCOGZGeHVJQ0FnSUNBZ0lDQm1hWEp6ZEVacGJHVk9ZVzFsSUNFOVBTQnNZWE4wUm1sc1pVNWhiV1VnZkh3Z1ptbHljM1JKYm1SbGVDQStQU0JzWVhOMFNXNWtaWGdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5vYjNWc1pFbG5ibTl5WlNBOUlHWjFibU4wYVc5dUtHeHBibVVwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR0pzZFdWaWFYSmtSbkpoYldWUVlYUjBaWEp1TG5SbGMzUW9iR2x1WlNrcElISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2FXNW1ieUE5SUhCaGNuTmxUR2x1WlVsdVptOG9iR2x1WlNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hwYm1adktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hVzVtYnk1bWFXeGxUbUZ0WlNBOVBUMGdabWx5YzNSR2FXeGxUbUZ0WlNBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDaG1hWEp6ZEVsdVpHVjRJRHc5SUdsdVptOHViR2x1WlNBbUppQnBibVp2TG14cGJtVWdQRDBnYkdGemRFbHVaR1Y0S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0I5TzF4dWZUdGNibHh1ZG1GeUlHTmhjSFIxY21WVGRHRmphMVJ5WVdObElEMGdLR1oxYm1OMGFXOXVJSE4wWVdOclJHVjBaV04wYVc5dUtDa2dlMXh1SUNBZ0lIWmhjaUIyT0hOMFlXTnJSbkpoYldWUVlYUjBaWEp1SUQwZ0wxNWNYSE1xWVhSY1hITXFMenRjYmlBZ0lDQjJZWElnZGpoemRHRmphMFp2Y20xaGRIUmxjaUE5SUdaMWJtTjBhVzl1S0hOMFlXTnJMQ0JsY25KdmNpa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhOMFlXTnJJRDA5UFNCY0luTjBjbWx1WjF3aUtTQnlaWFIxY200Z2MzUmhZMnM3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR1Z5Y205eUxtNWhiV1VnSVQwOUlIVnVaR1ZtYVc1bFpDQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pYSnliM0l1YldWemMyRm5aU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWlhKeWIzSXVkRzlUZEhKcGJtY29LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm05eWJXRjBUbTl1UlhKeWIzSW9aWEp5YjNJcE8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlFVnljbTl5TG5OMFlXTnJWSEpoWTJWTWFXMXBkQ0E5UFQwZ1hDSnVkVzFpWlhKY0lpQW1KbHh1SUNBZ0lDQWdJQ0IwZVhCbGIyWWdSWEp5YjNJdVkyRndkSFZ5WlZOMFlXTnJWSEpoWTJVZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQkZjbkp2Y2k1emRHRmphMVJ5WVdObFRHbHRhWFFnUFNCRmNuSnZjaTV6ZEdGamExUnlZV05sVEdsdGFYUWdLeUEyTzF4dUlDQWdJQ0FnSUNCemRHRmphMFp5WVcxbFVHRjBkR1Z5YmlBOUlIWTRjM1JoWTJ0R2NtRnRaVkJoZEhSbGNtNDdYRzRnSUNBZ0lDQWdJR1p2Y20xaGRGTjBZV05ySUQwZ2RqaHpkR0ZqYTBadmNtMWhkSFJsY2p0Y2JpQWdJQ0FnSUNBZ2RtRnlJR05oY0hSMWNtVlRkR0ZqYTFSeVlXTmxJRDBnUlhKeWIzSXVZMkZ3ZEhWeVpWTjBZV05yVkhKaFkyVTdYRzVjYmlBZ0lDQWdJQ0FnYzJodmRXeGtTV2R1YjNKbElEMGdablZ1WTNScGIyNG9iR2x1WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0pzZFdWaWFYSmtSbkpoYldWUVlYUjBaWEp1TG5SbGMzUW9iR2x1WlNrN1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpaHlaV05sYVhabGNpd2dhV2R1YjNKbFZXNTBhV3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRVZ5Y205eUxuTjBZV05yVkhKaFkyVk1hVzFwZENBOUlFVnljbTl5TG5OMFlXTnJWSEpoWTJWTWFXMXBkQ0FySURZN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhCMGRYSmxVM1JoWTJ0VWNtRmpaU2h5WldObGFYWmxjaXdnYVdkdWIzSmxWVzUwYVd3cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnUlhKeWIzSXVjM1JoWTJ0VWNtRmpaVXhwYldsMElEMGdSWEp5YjNJdWMzUmhZMnRVY21GalpVeHBiV2wwSUMwZ05qdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzRnSUNBZ2RtRnlJR1Z5Y2lBOUlHNWxkeUJGY25KdmNpZ3BPMXh1WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJsY25JdWMzUmhZMnNnUFQwOUlGd2ljM1J5YVc1blhDSWdKaVpjYmlBZ0lDQWdJQ0FnWlhKeUxuTjBZV05yTG5Od2JHbDBLRndpWEZ4dVhDSXBXekJkTG1sdVpHVjRUMllvWENKemRHRmphMFJsZEdWamRHbHZia0JjSWlrZ1BqMGdNQ2tnZTF4dUlDQWdJQ0FnSUNCemRHRmphMFp5WVcxbFVHRjBkR1Z5YmlBOUlDOUFMenRjYmlBZ0lDQWdJQ0FnWm05eWJXRjBVM1JoWTJzZ1BTQjJPSE4wWVdOclJtOXliV0YwZEdWeU8xeHVJQ0FnSUNBZ0lDQnBibVJsYm5SVGRHRmphMFp5WVcxbGN5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCallYQjBkWEpsVTNSaFkydFVjbUZqWlNodktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdkxuTjBZV05ySUQwZ2JtVjNJRVZ5Y205eUtDa3VjM1JoWTJzN1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJR2hoYzFOMFlXTnJRV1owWlhKVWFISnZkenRjYmlBZ0lDQjBjbmtnZXlCMGFISnZkeUJ1WlhjZ1JYSnliM0lvS1RzZ2ZWeHVJQ0FnSUdOaGRHTm9LR1VwSUh0Y2JpQWdJQ0FnSUNBZ2FHRnpVM1JoWTJ0QlpuUmxjbFJvY205M0lEMGdLRndpYzNSaFkydGNJaUJwYmlCbEtUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tDRW9YQ0p6ZEdGamExd2lJR2x1SUdWeWNpa2dKaVlnYUdGelUzUmhZMnRCWm5SbGNsUm9jbTkzSUNZbVhHNGdJQ0FnSUNBZ0lIUjVjR1Z2WmlCRmNuSnZjaTV6ZEdGamExUnlZV05sVEdsdGFYUWdQVDA5SUZ3aWJuVnRZbVZ5WENJcElIdGNiaUFnSUNBZ0lDQWdjM1JoWTJ0R2NtRnRaVkJoZEhSbGNtNGdQU0IyT0hOMFlXTnJSbkpoYldWUVlYUjBaWEp1TzF4dUlDQWdJQ0FnSUNCbWIzSnRZWFJUZEdGamF5QTlJSFk0YzNSaFkydEdiM0p0WVhSMFpYSTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQmpZWEIwZFhKbFUzUmhZMnRVY21GalpTaHZLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQkZjbkp2Y2k1emRHRmphMVJ5WVdObFRHbHRhWFFnUFNCRmNuSnZjaTV6ZEdGamExUnlZV05sVEdsdGFYUWdLeUEyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkSEo1SUhzZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NrN0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGRHTm9LR1VwSUhzZ2J5NXpkR0ZqYXlBOUlHVXVjM1JoWTJzN0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUVWeWNtOXlMbk4wWVdOclZISmhZMlZNYVcxcGRDQTlJRVZ5Y205eUxuTjBZV05yVkhKaFkyVk1hVzFwZENBdElEWTdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdabTl5YldGMFUzUmhZMnNnUFNCbWRXNWpkR2x2YmloemRHRmpheXdnWlhKeWIzSXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCemRHRmpheUE5UFQwZ1hDSnpkSEpwYm1kY0lpa2djbVYwZFhKdUlITjBZV05yTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2dvZEhsd1pXOW1JR1Z5Y205eUlEMDlQU0JjSW05aWFtVmpkRndpSUh4OFhHNGdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbGIyWWdaWEp5YjNJZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUdWeWNtOXlMbTVoYldVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdaWEp5YjNJdWJXVnpjMkZuWlNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1pYSnliM0l1ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptOXliV0YwVG05dVJYSnliM0lvWlhKeWIzSXBPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnlaWFIxY200Z2JuVnNiRHRjYmx4dWZTa29XMTBwTzF4dVhHNTJZWElnWm1seVpVUnZiVVYyWlc1ME8xeHVkbUZ5SUdacGNtVkhiRzlpWVd4RmRtVnVkQ0E5SUNobWRXNWpkR2x2YmlncElIdGNiaUFnSUNCcFppQW9kWFJwYkM1cGMwNXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0c1aGJXVXNJSEpsWVhOdmJpd2djSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVoYldVZ1BUMDlJRndpY21WcVpXTjBhVzl1U0dGdVpHeGxaRndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCeWIyTmxjM011WlcxcGRDaHVZVzFsTENCd2NtOXRhWE5sS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIQnliMk5sYzNNdVpXMXBkQ2h1WVcxbExDQnlaV0Z6YjI0c0lIQnliMjFwYzJVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpkWE4wYjIxRmRtVnVkRmR2Y210eklEMGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIWmhjaUJoYm5sRmRtVnVkRmR2Y210eklEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJsZGlBOUlHNWxkeUJ6Wld4bUxrTjFjM1J2YlVWMlpXNTBLRndpZEdWemRGd2lLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjM1J2YlVWMlpXNTBWMjl5YTNNZ1BTQmxkaUJwYm5OMFlXNWpaVzltSUVOMWMzUnZiVVYyWlc1ME8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3ZlZ4dUlDQWdJQ0FnSUNCcFppQW9JV04xYzNSdmJVVjJaVzUwVjI5eWEzTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHVjJaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUlhabGJuUW9YQ0pEZFhOMGIyMUZkbVZ1ZEZ3aUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZEM1cGJtbDBRM1Z6ZEc5dFJYWmxiblFvWENKMFpYTjBhVzVuZEdobFpYWmxiblJjSWl3Z1ptRnNjMlVzSUhSeWRXVXNJSHQ5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpXeG1MbVJwYzNCaGRHTm9SWFpsYm5Rb1pYWmxiblFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGdWVVVjJaVzUwVjI5eWEzTWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvWVc1NVJYWmxiblJYYjNKcmN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptbHlaVVJ2YlVWMlpXNTBJRDBnWm5WdVkzUnBiMjRvZEhsd1pTd2daR1YwWVdsc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdWMlpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamRYTjBiMjFGZG1WdWRGZHZjbXR6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1MElEMGdibVYzSUhObGJHWXVRM1Z6ZEc5dFJYWmxiblFvZEhsd1pTd2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1YwWVdsc09pQmtaWFJoYVd3c1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWRXSmliR1Z6T2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05oYm1ObGJHRmliR1U2SUhSeWRXVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHpaV3htTG1ScGMzQmhkR05vUlhabGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGZG1WdWRDaGNJa04xYzNSdmJVVjJaVzUwWENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWRDNXBibWwwUTNWemRHOXRSWFpsYm5Rb2RIbHdaU3dnWm1Gc2MyVXNJSFJ5ZFdVc0lHUmxkR0ZwYkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHVjJaVzUwSUQ4Z0lYTmxiR1l1WkdsemNHRjBZMmhGZG1WdWRDaGxkbVZ1ZENrZ09pQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjJZWElnZEc5WGFXNWtiM2ROWlhSb2IyUk9ZVzFsVFdGd0lEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSdlYybHVaRzkzVFdWMGFHOWtUbUZ0WlUxaGNGdGNJblZ1YUdGdVpHeGxaRkpsYW1WamRHbHZibHdpWFNBOUlDaGNJbTl1WENJZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0FnWENKMWJtaGhibVJzWldSU1pXcGxZM1JwYjI1Y0lpa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JpQWdJQ0FnSUNBZ2RHOVhhVzVrYjNkTlpYUm9iMlJPWVcxbFRXRndXMXdpY21WcVpXTjBhVzl1U0dGdVpHeGxaRndpWFNBOUlDaGNJbTl1WENJZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0FnWENKeVpXcGxZM1JwYjI1SVlXNWtiR1ZrWENJcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0c1aGJXVXNJSEpsWVhOdmJpd2djSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzFsZEdodlpFNWhiV1VnUFNCMGIxZHBibVJ2ZDAxbGRHaHZaRTVoYldWTllYQmJibUZ0WlYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2JXVjBhRzlrSUQwZ2MyVnNabHR0WlhSb2IyUk9ZVzFsWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGJXVjBhRzlrS1NCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibUZ0WlNBOVBUMGdYQ0p5WldwbFkzUnBiMjVJWVc1a2JHVmtYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFpYUm9iMlF1WTJGc2JDaHpaV3htTENCd2NtOXRhWE5sS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV1YwYUc5a0xtTmhiR3dvYzJWc1ppd2djbVZoYzI5dUxDQndjbTl0YVhObEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMHBLQ2s3WEc1Y2JtbG1JQ2gwZVhCbGIyWWdZMjl1YzI5c1pTQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQW1KaUIwZVhCbGIyWWdZMjl1YzI5c1pTNTNZWEp1SUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpS1NCN1hHNGdJQ0FnZDJGeWJpQTlJR1oxYm1OMGFXOXVJQ2h0WlhOellXZGxLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1ZDJGeWJpaHRaWE56WVdkbEtUdGNiaUFnSUNCOU8xeHVJQ0FnSUdsbUlDaDFkR2xzTG1selRtOWtaU0FtSmlCd2NtOWpaWE56TG5OMFpHVnljaTVwYzFSVVdTa2dlMXh1SUNBZ0lDQWdJQ0IzWVhKdUlEMGdablZ1WTNScGIyNG9iV1Z6YzJGblpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZZMlZ6Y3k1emRHUmxjbkl1ZDNKcGRHVW9YQ0pjWEhVd01ERmlXek14YlZ3aUlDc2diV1Z6YzJGblpTQXJJRndpWEZ4MU1EQXhZbHN6T1cxY1hHNWNJaWs3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGRYUnBiQzVwYzA1dlpHVWdKaVlnZEhsd1pXOW1JQ2h1WlhjZ1JYSnliM0lvS1M1emRHRmpheWtnUFQwOUlGd2ljM1J5YVc1blhDSXBJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpQTlJR1oxYm1OMGFXOXVLRzFsYzNOaFoyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdWQyRnliaWhjSWlWalhDSWdLeUJ0WlhOellXZGxMQ0JjSW1OdmJHOXlPaUJ5WldSY0lpazdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1ZlZ4dVhHNXlaWFIxY200Z1EyRndkSFZ5WldSVWNtRmpaVHRjYm4wN1hHNWNibjBzZTF3aUxpOWhjM2x1WXk1cWMxd2lPaklzWENJdUwzVjBhV3d1YW5OY0lqb3pPSDFkTERnNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0U1RldGUmZSa2xNVkVWU0tTQjdYRzUyWVhJZ2RYUnBiQ0E5SUY5a1pYSmxjVjhvWENJdUwzVjBhV3d1YW5OY0lpazdYRzUyWVhJZ1pYSnliM0p6SUQwZ1gyUmxjbVZ4WHloY0lpNHZaWEp5YjNKekxtcHpYQ0lwTzF4dWRtRnlJSFJ5ZVVOaGRHTm9JRDBnZFhScGJDNTBjbmxEWVhSamFEdGNiblpoY2lCbGNuSnZjazlpYWlBOUlIVjBhV3d1WlhKeWIzSlBZbW83WEc1MllYSWdhMlY1Y3lBOUlGOWtaWEpsY1Y4b1hDSXVMMlZ6TlM1cWMxd2lLUzVyWlhsek8xeHVkbUZ5SUZSNWNHVkZjbkp2Y2lBOUlHVnljbTl5Y3k1VWVYQmxSWEp5YjNJN1hHNWNibVoxYm1OMGFXOXVJRU5oZEdOb1JtbHNkR1Z5S0dsdWMzUmhibU5sY3l3Z1kyRnNiR0poWTJzc0lIQnliMjFwYzJVcElIdGNiaUFnSUNCMGFHbHpMbDlwYm5OMFlXNWpaWE1nUFNCcGJuTjBZVzVqWlhNN1hHNGdJQ0FnZEdocGN5NWZZMkZzYkdKaFkyc2dQU0JqWVd4c1ltRmphenRjYmlBZ0lDQjBhR2x6TGw5d2NtOXRhWE5sSUQwZ2NISnZiV2x6WlR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJGbVpWQnlaV1JwWTJGMFpTaHdjbVZrYVdOaGRHVXNJR1VwSUh0Y2JpQWdJQ0IyWVhJZ2MyRm1aVTlpYW1WamRDQTlJSHQ5TzF4dUlDQWdJSFpoY2lCeVpYUm1hV3gwWlhJZ1BTQjBjbmxEWVhSamFDaHdjbVZrYVdOaGRHVXBMbU5oYkd3b2MyRm1aVTlpYW1WamRDd2daU2s3WEc1Y2JpQWdJQ0JwWmlBb2NtVjBabWxzZEdWeUlEMDlQU0JsY25KdmNrOWlhaWtnY21WMGRYSnVJSEpsZEdacGJIUmxjanRjYmx4dUlDQWdJSFpoY2lCellXWmxTMlY1Y3lBOUlHdGxlWE1vYzJGbVpVOWlhbVZqZENrN1hHNGdJQ0FnYVdZZ0tITmhabVZMWlhsekxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQmxjbkp2Y2s5aWFpNWxJRDBnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa05oZEdOb0lHWnBiSFJsY2lCdGRYTjBJR2x1YUdWeWFYUWdabkp2YlNCRmNuSnZjaUJ2Y2lCaVpTQmhJSE5wYlhCc1pTQndjbVZrYVdOaGRHVWdablZ1WTNScGIyNWNYSFV3TURCaFhGeDFNREF3WVNBZ0lDQlRaV1VnYUhSMGNEb3ZMMmR2Ynk1bmJDOXZPRFJ2TmpoY1hIVXdNREJoWENJcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1pYSnliM0pQWW1vN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnlaWFJtYVd4MFpYSTdYRzU5WEc1Y2JrTmhkR05vUm1sc2RHVnlMbkJ5YjNSdmRIbHdaUzVrYjBacGJIUmxjaUE5SUdaMWJtTjBhVzl1SUNobEtTQjdYRzRnSUNBZ2RtRnlJR05pSUQwZ2RHaHBjeTVmWTJGc2JHSmhZMnM3WEc0Z0lDQWdkbUZ5SUhCeWIyMXBjMlVnUFNCMGFHbHpMbDl3Y205dGFYTmxPMXh1SUNBZ0lIWmhjaUJpYjNWdVpGUnZJRDBnY0hKdmJXbHpaUzVmWW05MWJtUlVienRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTUN3Z2JHVnVJRDBnZEdocGN5NWZhVzV6ZEdGdVkyVnpMbXhsYm1kMGFEc2dhU0E4SUd4bGJqc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwZEdWdElEMGdkR2hwY3k1ZmFXNXpkR0Z1WTJWelcybGRPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2FYUmxiVWx6UlhKeWIzSlVlWEJsSUQwZ2FYUmxiU0E5UFQwZ1JYSnliM0lnZkh4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ2hwZEdWdElDRTlJRzUxYkd3Z0ppWWdhWFJsYlM1d2NtOTBiM1I1Y0dVZ2FXNXpkR0Z1WTJWdlppQkZjbkp2Y2lrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dsMFpXMUpjMFZ5Y205eVZIbHdaU0FtSmlCbElHbHVjM1JoYm1ObGIyWWdhWFJsYlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlISmxkQ0E5SUhSeWVVTmhkR05vS0dOaUtTNWpZV3hzS0dKdmRXNWtWRzhzSUdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tISmxkQ0E5UFQwZ1pYSnliM0pQWW1vcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQk9SVmhVWDBaSlRGUkZVaTVsSUQwZ2NtVjBMbVU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRTVGV0ZSZlJrbE1WRVZTTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdhWFJsYlNBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlDRnBkR1Z0U1hORmNuSnZjbFI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnphRzkxYkdSSVlXNWtiR1VnUFNCellXWmxVSEpsWkdsallYUmxLR2wwWlcwc0lHVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSE5vYjNWc1pFaGhibVJzWlNBOVBUMGdaWEp5YjNKUFltb3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsSUQwZ1pYSnliM0pQWW1vdVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYzJodmRXeGtTR0Z1Wkd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbGRDQTlJSFJ5ZVVOaGRHTm9LR05pS1M1allXeHNLR0p2ZFc1a1ZHOHNJR1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlaWFFnUFQwOUlHVnljbTl5VDJKcUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUU1RldGUmZSa2xNVkVWU0xtVWdQU0J5WlhRdVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRTVGV0ZSZlJrbE1WRVZTTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY21WME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJRTVGV0ZSZlJrbE1WRVZTTG1VZ1BTQmxPMXh1SUNBZ0lISmxkSFZ5YmlCT1JWaFVYMFpKVEZSRlVqdGNibjA3WEc1Y2JuSmxkSFZ5YmlCRFlYUmphRVpwYkhSbGNqdGNibjA3WEc1Y2JuMHNlMXdpTGk5bGNuSnZjbk11YW5OY0lqb3hNeXhjSWk0dlpYTTFMbXB6WENJNk1UUXNYQ0l1TDNWMGFXd3Vhbk5jSWpvek9IMWRMRGs2VzJaMWJtTjBhVzl1S0Y5a1pYSmxjVjhzYlc5a2RXeGxMR1Y0Y0c5eWRITXBlMXh1WENKMWMyVWdjM1J5YVdOMFhDSTdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLRkJ5YjIxcGMyVXNJRU5oY0hSMWNtVmtWSEpoWTJVc0lHbHpSR1ZpZFdkbmFXNW5LU0I3WEc1MllYSWdZMjl1ZEdWNGRGTjBZV05ySUQwZ1cxMDdYRzVtZFc1amRHbHZiaUJEYjI1MFpYaDBLQ2tnZTF4dUlDQWdJSFJvYVhNdVgzUnlZV05sSUQwZ2JtVjNJRU5oY0hSMWNtVmtWSEpoWTJVb2NHVmxhME52Ym5SbGVIUW9LU2s3WEc1OVhHNURiMjUwWlhoMExuQnliM1J2ZEhsd1pTNWZjSFZ6YUVOdmJuUmxlSFFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2FXWWdLQ0ZwYzBSbFluVm5aMmx1WnlncEtTQnlaWFIxY200N1hHNGdJQ0FnYVdZZ0tIUm9hWE11WDNSeVlXTmxJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdWNGRGTjBZV05yTG5CMWMyZ29kR2hwY3k1ZmRISmhZMlVwTzF4dUlDQWdJSDFjYm4wN1hHNWNia052Ym5SbGVIUXVjSEp2ZEc5MGVYQmxMbDl3YjNCRGIyNTBaWGgwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHbG1JQ2doYVhORVpXSjFaMmRwYm1jb0tTa2djbVYwZFhKdU8xeHVJQ0FnSUdsbUlDaDBhR2x6TGw5MGNtRmpaU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUlRkR0ZqYXk1d2IzQW9LVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWRGIyNTBaWGgwS0NrZ2UxeHVJQ0FnSUdsbUlDaHBjMFJsWW5WbloybHVaeWdwS1NCeVpYUjFjbTRnYm1WM0lFTnZiblJsZUhRb0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2NHVmxhME52Ym5SbGVIUW9LU0I3WEc0Z0lDQWdkbUZ5SUd4aGMzUkpibVJsZUNBOUlHTnZiblJsZUhSVGRHRmpheTVzWlc1bmRHZ2dMU0F4TzF4dUlDQWdJR2xtSUNoc1lYTjBTVzVrWlhnZ1BqMGdNQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5dWRHVjRkRk4wWVdOclcyeGhjM1JKYm1SbGVGMDdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIxYm1SbFptbHVaV1E3WEc1OVhHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDl3WldWclEyOXVkR1Y0ZENBOUlIQmxaV3REYjI1MFpYaDBPMXh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDNCMWMyaERiMjUwWlhoMElEMGdRMjl1ZEdWNGRDNXdjbTkwYjNSNWNHVXVYM0IxYzJoRGIyNTBaWGgwTzF4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgzQnZjRU52Ym5SbGVIUWdQU0JEYjI1MFpYaDBMbkJ5YjNSdmRIbHdaUzVmY0c5d1EyOXVkR1Y0ZER0Y2JseHVjbVYwZFhKdUlHTnlaV0YwWlVOdmJuUmxlSFE3WEc1OU8xeHVYRzU5TEh0OVhTd3hNRHBiWm5WdVkzUnBiMjRvWDJSbGNtVnhYeXh0YjJSMWJHVXNaWGh3YjNKMGN5bDdYRzVjSW5WelpTQnpkSEpwWTNSY0lqdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9VSEp2YldselpTd2dRMkZ3ZEhWeVpXUlVjbUZqWlNrZ2UxeHVkbUZ5SUdkbGRFUnZiV0ZwYmlBOUlGQnliMjFwYzJVdVgyZGxkRVJ2YldGcGJqdGNiblpoY2lCaGMzbHVZeUE5SUY5a1pYSmxjVjhvWENJdUwyRnplVzVqTG1welhDSXBPMXh1ZG1GeUlGZGhjbTVwYm1jZ1BTQmZaR1Z5WlhGZktGd2lMaTlsY25KdmNuTXVhbk5jSWlrdVYyRnlibWx1Wnp0Y2JuWmhjaUIxZEdsc0lEMGdYMlJsY21WeFh5aGNJaTR2ZFhScGJDNXFjMXdpS1R0Y2JuWmhjaUJqWVc1QmRIUmhZMmhVY21GalpTQTlJSFYwYVd3dVkyRnVRWFIwWVdOb1ZISmhZMlU3WEc1MllYSWdkVzVvWVc1a2JHVmtVbVZxWldOMGFXOXVTR0Z1Wkd4bFpEdGNiblpoY2lCd2IzTnphV0pzZVZWdWFHRnVaR3hsWkZKbGFtVmpkR2x2Ymp0Y2JuWmhjaUJrWldKMVoyZHBibWNnUFNCbVlXeHpaU0I4ZkNBb2RYUnBiQzVwYzA1dlpHVWdKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tDRWhjSEp2WTJWemN5NWxiblpiWENKQ1RGVkZRa2xTUkY5RVJVSlZSMXdpWFNCOGZGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTVsYm5aYlhDSk9UMFJGWDBWT1Zsd2lYU0E5UFQwZ1hDSmtaWFpsYkc5d2JXVnVkRndpS1NrN1hHNWNibWxtSUNoa1pXSjFaMmRwYm1jcElIdGNiaUFnSUNCaGMzbHVZeTVrYVhOaFlteGxWSEpoYlhCdmJHbHVaVWxtVG1WalpYTnpZWEo1S0NrN1hHNTlYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5cFoyNXZjbVZTWldwbFkzUnBiMjV6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2RHaHBjeTVmZFc1elpYUlNaV3BsWTNScGIyNUpjMVZ1YUdGdVpHeGxaQ2dwTzF4dUlDQWdJSFJvYVhNdVgySnBkRVpwWld4a0lEMGdkR2hwY3k1ZlltbDBSbWxsYkdRZ2ZDQXhOamMzTnpJeE5qdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOWxibk4xY21WUWIzTnphV0pzWlZKbGFtVmpkR2x2YmtoaGJtUnNaV1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2FXWWdLQ2gwYUdsekxsOWlhWFJHYVdWc1pDQW1JREUyTnpjM01qRTJLU0FoUFQwZ01Da2djbVYwZFhKdU8xeHVJQ0FnSUhSb2FYTXVYM05sZEZKbGFtVmpkR2x2YmtselZXNW9ZVzVrYkdWa0tDazdYRzRnSUNBZ1lYTjVibU11YVc1MmIydGxUR0YwWlhJb2RHaHBjeTVmYm05MGFXWjVWVzVvWVc1a2JHVmtVbVZxWldOMGFXOXVMQ0IwYUdsekxDQjFibVJsWm1sdVpXUXBPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYMjV2ZEdsbWVWVnVhR0Z1Wkd4bFpGSmxhbVZqZEdsdmJrbHpTR0Z1Wkd4bFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JEWVhCMGRYSmxaRlJ5WVdObExtWnBjbVZTWldwbFkzUnBiMjVGZG1WdWRDaGNJbkpsYW1WamRHbHZia2hoYm1Sc1pXUmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxYm1oaGJtUnNaV1JTWldwbFkzUnBiMjVJWVc1a2JHVmtMQ0IxYm1SbFptbHVaV1FzSUhSb2FYTXBPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYMjV2ZEdsbWVWVnVhR0Z1Wkd4bFpGSmxhbVZqZEdsdmJpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVmYVhOU1pXcGxZM1JwYjI1VmJtaGhibVJzWldRb0tTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NtVmhjMjl1SUQwZ2RHaHBjeTVmWjJWMFEyRnljbWxsWkZOMFlXTnJWSEpoWTJVb0tTQjhmQ0IwYUdsekxsOXpaWFIwYkdWa1ZtRnNkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM05sZEZWdWFHRnVaR3hsWkZKbGFtVmpkR2x2YmtselRtOTBhV1pwWldRb0tUdGNiaUFnSUNBZ0lDQWdRMkZ3ZEhWeVpXUlVjbUZqWlM1bWFYSmxVbVZxWldOMGFXOXVSWFpsYm5Rb1hDSjFibWhoYm1Sc1pXUlNaV3BsWTNScGIyNWNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHOXpjMmxpYkhsVmJtaGhibVJzWldSU1pXcGxZM1JwYjI0c0lISmxZWE52Yml3Z2RHaHBjeWs3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYM05sZEZWdWFHRnVaR3hsWkZKbGFtVmpkR2x2YmtselRtOTBhV1pwWldRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkR2hwY3k1ZlltbDBSbWxsYkdRZ1BTQjBhR2x6TGw5aWFYUkdhV1ZzWkNCOElEVXlOREk0T0R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5MWJuTmxkRlZ1YUdGdVpHeGxaRkpsYW1WamRHbHZia2x6VG05MGFXWnBaV1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RHaHBjeTVmWW1sMFJtbGxiR1FnUFNCMGFHbHpMbDlpYVhSR2FXVnNaQ0FtSUNoK05USTBNamc0S1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5cGMxVnVhR0Z1Wkd4bFpGSmxhbVZqZEdsdmJrNXZkR2xtYVdWa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1ZlltbDBSbWxsYkdRZ0ppQTFNalF5T0RncElENGdNRHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDl6WlhSU1pXcGxZM1JwYjI1SmMxVnVhR0Z1Wkd4bFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IwYUdsekxsOWlhWFJHYVdWc1pDQTlJSFJvYVhNdVgySnBkRVpwWld4a0lId2dNakE1TnpFMU1qdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOTFibk5sZEZKbGFtVmpkR2x2YmtselZXNW9ZVzVrYkdWa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVgySnBkRVpwWld4a0lEMGdkR2hwY3k1ZlltbDBSbWxsYkdRZ0ppQW9makl3T1RjeE5USXBPMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOXBjMVZ1YUdGdVpHeGxaRkpsYW1WamRHbHZiazV2ZEdsbWFXVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZFc1elpYUlZibWhoYm1Sc1pXUlNaV3BsWTNScGIyNUpjMDV2ZEdsbWFXVmtLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjV2ZEdsbWVWVnVhR0Z1Wkd4bFpGSmxhbVZqZEdsdmJrbHpTR0Z1Wkd4bFpDZ3BPMXh1SUNBZ0lIMWNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXBjMUpsYW1WamRHbHZibFZ1YUdGdVpHeGxaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXVYMkpwZEVacFpXeGtJQ1lnTWpBNU56RTFNaWtnUGlBd08xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgzTmxkRU5oY25KcFpXUlRkR0ZqYTFSeVlXTmxJRDBnWm5WdVkzUnBiMjRnS0dOaGNIUjFjbVZrVkhKaFkyVXBJSHRjYmlBZ0lDQjBhR2x6TGw5aWFYUkdhV1ZzWkNBOUlIUm9hWE11WDJKcGRFWnBaV3hrSUh3Z01UQTBPRFUzTmp0Y2JpQWdJQ0IwYUdsekxsOW1kV3htYVd4c2JXVnVkRWhoYm1Sc1pYSXdJRDBnWTJGd2RIVnlaV1JVY21GalpUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXBjME5oY25KNWFXNW5VM1JoWTJ0VWNtRmpaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXVYMkpwZEVacFpXeGtJQ1lnTVRBME9EVTNOaWtnUGlBd08xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgyZGxkRU5oY25KcFpXUlRkR0ZqYTFSeVlXTmxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXBjME5oY25KNWFXNW5VM1JoWTJ0VWNtRmpaU2dwWEc0Z0lDQWdJQ0FnSUQ4Z2RHaHBjeTVmWm5Wc1ptbHNiRzFsYm5SSVlXNWtiR1Z5TUZ4dUlDQWdJQ0FnSUNBNklIVnVaR1ZtYVc1bFpEdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOWpZWEIwZFhKbFUzUmhZMnRVY21GalpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JwWmlBb1pHVmlkV2RuYVc1bktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzUnlZV05sSUQwZ2JtVjNJRU5oY0hSMWNtVmtWSEpoWTJVb2RHaHBjeTVmY0dWbGEwTnZiblJsZUhRb0tTazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgyRjBkR0ZqYUVWNGRISmhWSEpoWTJVZ1BTQm1kVzVqZEdsdmJpQW9aWEp5YjNJc0lHbG5ibTl5WlZObGJHWXBJSHRjYmlBZ0lDQnBaaUFvWkdWaWRXZG5hVzVuSUNZbUlHTmhia0YwZEdGamFGUnlZV05sS0dWeWNtOXlLU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdkSEpoWTJVZ1BTQjBhR2x6TGw5MGNtRmpaVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUnlZV05sSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hwWjI1dmNtVlRaV3htS1NCMGNtRmpaU0E5SUhSeVlXTmxMbDl3WVhKbGJuUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tIUnlZV05sSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnlZV05sTG1GMGRHRmphRVY0ZEhKaFZISmhZMlVvWlhKeWIzSXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NGbGNuSnZjaTVmWDNOMFlXTnJRMnhsWVc1bFpGOWZLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnY0dGeWMyVmtJRDBnUTJGd2RIVnlaV1JVY21GalpTNXdZWEp6WlZOMFlXTnJRVzVrVFdWemMyRm5aU2hsY25KdmNpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNMbTV2ZEVWdWRXMWxjbUZpYkdWUWNtOXdLR1Z5Y205eUxDQmNJbk4wWVdOclhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR0Z5YzJWa0xtMWxjM05oWjJVZ0t5QmNJbHhjYmx3aUlDc2djR0Z5YzJWa0xuTjBZV05yTG1wdmFXNG9YQ0pjWEc1Y0lpa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiQzV1YjNSRmJuVnRaWEpoWW14bFVISnZjQ2hsY25KdmNpd2dYQ0pmWDNOMFlXTnJRMnhsWVc1bFpGOWZYQ0lzSUhSeWRXVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYM2RoY200Z1BTQm1kVzVqZEdsdmJpaHRaWE56WVdkbEtTQjdYRzRnSUNBZ2RtRnlJSGRoY201cGJtY2dQU0J1WlhjZ1YyRnlibWx1WnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0IyWVhJZ1kzUjRJRDBnZEdocGN5NWZjR1ZsYTBOdmJuUmxlSFFvS1R0Y2JpQWdJQ0JwWmlBb1kzUjRLU0I3WEc0Z0lDQWdJQ0FnSUdOMGVDNWhkSFJoWTJoRmVIUnlZVlJ5WVdObEtIZGhjbTVwYm1jcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQndZWEp6WldRZ1BTQkRZWEIwZFhKbFpGUnlZV05sTG5CaGNuTmxVM1JoWTJ0QmJtUk5aWE56WVdkbEtIZGhjbTVwYm1jcE8xeHVJQ0FnSUNBZ0lDQjNZWEp1YVc1bkxuTjBZV05ySUQwZ2NHRnljMlZrTG0xbGMzTmhaMlVnS3lCY0lseGNibHdpSUNzZ2NHRnljMlZrTG5OMFlXTnJMbXB2YVc0b1hDSmNYRzVjSWlrN1hHNGdJQ0FnZlZ4dUlDQWdJRU5oY0hSMWNtVmtWSEpoWTJVdVptOXliV0YwUVc1a1RHOW5SWEp5YjNJb2QyRnlibWx1Wnl3Z1hDSmNJaWs3WEc1OU8xeHVYRzVRY205dGFYTmxMbTl1VUc5emMybGliSGxWYm1oaGJtUnNaV1JTWldwbFkzUnBiMjRnUFNCbWRXNWpkR2x2YmlBb1ptNHBJSHRjYmlBZ0lDQjJZWElnWkc5dFlXbHVJRDBnWjJWMFJHOXRZV2x1S0NrN1hHNGdJQ0FnY0c5emMybGliSGxWYm1oaGJtUnNaV1JTWldwbFkzUnBiMjRnUFZ4dUlDQWdJQ0FnSUNCMGVYQmxiMllnWm00Z1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBL0lDaGtiMjFoYVc0Z1BUMDlJRzUxYkd3Z1B5Qm1iaUE2SUdSdmJXRnBiaTVpYVc1a0tHWnVLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRG9nZFc1a1pXWnBibVZrTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV2YmxWdWFHRnVaR3hsWkZKbGFtVmpkR2x2YmtoaGJtUnNaV1FnUFNCbWRXNWpkR2x2YmlBb1ptNHBJSHRjYmlBZ0lDQjJZWElnWkc5dFlXbHVJRDBnWjJWMFJHOXRZV2x1S0NrN1hHNGdJQ0FnZFc1b1lXNWtiR1ZrVW1WcVpXTjBhVzl1U0dGdVpHeGxaQ0E5WEc0Z0lDQWdJQ0FnSUhSNWNHVnZaaUJtYmlBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUQ4Z0tHUnZiV0ZwYmlBOVBUMGdiblZzYkNBL0lHWnVJRG9nWkc5dFlXbHVMbUpwYm1Rb1ptNHBLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUIxYm1SbFptbHVaV1E3WEc1OU8xeHVYRzVRY205dGFYTmxMbXh2Ym1kVGRHRmphMVJ5WVdObGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JwWmlBb1lYTjVibU11YUdGMlpVbDBaVzF6VVhWbGRXVmtLQ2tnSmlaY2JpQWdJQ0FnSUNBZ1pHVmlkV2RuYVc1bklEMDlQU0JtWVd4elpWeHVJQ0FnS1NCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0ltTmhibTV2ZENCbGJtRmliR1VnYkc5dVp5QnpkR0ZqYXlCMGNtRmpaWE1nWVdaMFpYSWdjSEp2YldselpYTWdhR0YyWlNCaVpXVnVJR055WldGMFpXUmNYSFV3TURCaFhGeDFNREF3WVNBZ0lDQlRaV1VnYUhSMGNEb3ZMMmR2Ynk1bmJDOUVWREZ4ZVVkY1hIVXdNREJoWENJcE8xeHVJQ0FnSUgxY2JpQWdJQ0JrWldKMVoyZHBibWNnUFNCRFlYQjBkWEpsWkZSeVlXTmxMbWx6VTNWd2NHOXlkR1ZrS0NrN1hHNGdJQ0FnYVdZZ0tHUmxZblZuWjJsdVp5a2dlMXh1SUNBZ0lDQWdJQ0JoYzNsdVl5NWthWE5oWW14bFZISmhiWEJ2YkdsdVpVbG1UbVZqWlhOellYSjVLQ2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVVSEp2YldselpTNW9ZWE5NYjI1blUzUmhZMnRVY21GalpYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1JsWW5WbloybHVaeUFtSmlCRFlYQjBkWEpsWkZSeVlXTmxMbWx6VTNWd2NHOXlkR1ZrS0NrN1hHNTlPMXh1WEc1cFppQW9JVU5oY0hSMWNtVmtWSEpoWTJVdWFYTlRkWEJ3YjNKMFpXUW9LU2tnZTF4dUlDQWdJRkJ5YjIxcGMyVXViRzl1WjFOMFlXTnJWSEpoWTJWeklEMGdablZ1WTNScGIyNG9LWHQ5TzF4dUlDQWdJR1JsWW5WbloybHVaeUE5SUdaaGJITmxPMXh1ZlZ4dVhHNXlaWFIxY200Z1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUdSbFluVm5aMmx1Wnp0Y2JuMDdYRzU5TzF4dVhHNTlMSHRjSWk0dllYTjVibU11YW5OY0lqb3lMRndpTGk5bGNuSnZjbk11YW5OY0lqb3hNeXhjSWk0dmRYUnBiQzVxYzF3aU9qTTRmVjBzTVRFNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1MllYSWdkWFJwYkNBOUlGOWtaWEpsY1Y4b1hDSXVMM1YwYVd3dWFuTmNJaWs3WEc1MllYSWdhWE5RY21sdGFYUnBkbVVnUFNCMWRHbHNMbWx6VUhKcGJXbDBhWFpsTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtGQnliMjFwYzJVcElIdGNiblpoY2lCeVpYUjFjbTVsY2lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYm4wN1hHNTJZWElnZEdoeWIzZGxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMGFISnZkeUIwYUdsek8xeHVmVHRjYm5aaGNpQnlaWFIxY201VmJtUmxabWx1WldRZ1BTQm1kVzVqZEdsdmJpZ3BJSHQ5TzF4dWRtRnlJSFJvY205M1ZXNWtaV1pwYm1Wa0lEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2RXNWtaV1pwYm1Wa08xeHVmVHRjYmx4dWRtRnlJSGR5WVhCd1pYSWdQU0JtZFc1amRHbHZiaUFvZG1Gc2RXVXNJR0ZqZEdsdmJpa2dlMXh1SUNBZ0lHbG1JQ2hoWTNScGIyNGdQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDBnWld4elpTQnBaaUFvWVdOMGFXOXVJRDA5UFNBeUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dWZUdGNibHh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlZ0Y0luSmxkSFZ5Ymx3aVhTQTlYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzUwYUdWdVVtVjBkWEp1SUQwZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnYVdZZ0tIWmhiSFZsSUQwOVBTQjFibVJsWm1sdVpXUXBJSEpsZEhWeWJpQjBhR2x6TG5Sb1pXNG9jbVYwZFhKdVZXNWtaV1pwYm1Wa0tUdGNibHh1SUNBZ0lHbG1JQ2hwYzFCeWFXMXBkR2wyWlNoMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYM1JvWlc0b1hHNGdJQ0FnSUNBZ0lDQWdJQ0IzY21Gd2NHVnlLSFpoYkhWbExDQXlLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVaR1ZtYVc1bFpDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWdVpHVm1hVzVsWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFZ1WkdWbWFXNWxaQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVaR1ZtYVc1bFpGeHVJQ0FnSUNBZ0lDazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTBhR1Z1S0hKbGRIVnlibVZ5TENCMWJtUmxabWx1WldRc0lIVnVaR1ZtYVc1bFpDd2dkbUZzZFdVc0lIVnVaR1ZtYVc1bFpDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pWdGNJblJvY205M1hDSmRJRDFjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG5Sb1pXNVVhSEp2ZHlBOUlHWjFibU4wYVc5dUlDaHlaV0Z6YjI0cElIdGNiaUFnSUNCcFppQW9jbVZoYzI5dUlEMDlQU0IxYm1SbFptbHVaV1FwSUhKbGRIVnliaUIwYUdsekxuUm9aVzRvZEdoeWIzZFZibVJsWm1sdVpXUXBPMXh1WEc0Z0lDQWdhV1lnS0dselVISnBiV2wwYVhabEtISmxZWE52YmlrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDNSb1pXNG9YRzRnSUNBZ0lDQWdJQ0FnSUNCM2NtRndjR1Z5S0hKbFlYTnZiaXdnTVNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxYm1SbFptbHVaV1FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjFibVJsWm1sdVpXUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWJtUmxabWx1WldRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxYm1SbFptbHVaV1JjYmlBZ0lDQWdJQ0FwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmZEdobGJpaDBhSEp2ZDJWeUxDQjFibVJsWm1sdVpXUXNJSFZ1WkdWbWFXNWxaQ3dnY21WaGMyOXVMQ0IxYm1SbFptbHVaV1FwTzF4dWZUdGNibjA3WEc1Y2JuMHNlMXdpTGk5MWRHbHNMbXB6WENJNk16aDlYU3d4TWpwYlpuVnVZM1JwYjI0b1gyUmxjbVZ4WHl4dGIyUjFiR1VzWlhod2IzSjBjeWw3WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvVUhKdmJXbHpaU3dnU1U1VVJWSk9RVXdwSUh0Y2JuWmhjaUJRY205dGFYTmxVbVZrZFdObElEMGdVSEp2YldselpTNXlaV1IxWTJVN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbVZoWTJnZ1BTQm1kVzVqZEdsdmJpQW9abTRwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVSEp2YldselpWSmxaSFZqWlNoMGFHbHpMQ0JtYml3Z2JuVnNiQ3dnU1U1VVJWSk9RVXdwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzVsWVdOb0lEMGdablZ1WTNScGIyNGdLSEJ5YjIxcGMyVnpMQ0JtYmlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxVbVZrZFdObEtIQnliMjFwYzJWekxDQm1iaXdnYm5Wc2JDd2dTVTVVUlZKT1FVd3BPMXh1ZlR0Y2JuMDdYRzVjYm4wc2UzMWRMREV6T2x0bWRXNWpkR2x2YmloZlpHVnlaWEZmTEcxdlpIVnNaU3hsZUhCdmNuUnpLWHRjYmx3aWRYTmxJSE4wY21samRGd2lPMXh1ZG1GeUlHVnpOU0E5SUY5a1pYSmxjVjhvWENJdUwyVnpOUzVxYzF3aUtUdGNiblpoY2lCUFltcGxZM1JtY21WbGVtVWdQU0JsY3pVdVpuSmxaWHBsTzF4dWRtRnlJSFYwYVd3Z1BTQmZaR1Z5WlhGZktGd2lMaTkxZEdsc0xtcHpYQ0lwTzF4dWRtRnlJR2x1YUdWeWFYUnpJRDBnZFhScGJDNXBibWhsY21sMGN6dGNiblpoY2lCdWIzUkZiblZ0WlhKaFlteGxVSEp2Y0NBOUlIVjBhV3d1Ym05MFJXNTFiV1Z5WVdKc1pWQnliM0E3WEc1Y2JtWjFibU4wYVc5dUlITjFZa1Z5Y205eUtHNWhiV1ZRY205d1pYSjBlU3dnWkdWbVlYVnNkRTFsYzNOaFoyVXBJSHRjYmlBZ0lDQm1kVzVqZEdsdmJpQlRkV0pGY25KdmNpaHRaWE56WVdkbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaEtIUm9hWE1nYVc1emRHRnVZMlZ2WmlCVGRXSkZjbkp2Y2lrcElISmxkSFZ5YmlCdVpYY2dVM1ZpUlhKeWIzSW9iV1Z6YzJGblpTazdYRzRnSUNBZ0lDQWdJRzV2ZEVWdWRXMWxjbUZpYkdWUWNtOXdLSFJvYVhNc0lGd2liV1Z6YzJGblpWd2lMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVzltSUcxbGMzTmhaMlVnUFQwOUlGd2ljM1J5YVc1blhDSWdQeUJ0WlhOellXZGxJRG9nWkdWbVlYVnNkRTFsYzNOaFoyVXBPMXh1SUNBZ0lDQWdJQ0J1YjNSRmJuVnRaWEpoWW14bFVISnZjQ2gwYUdsekxDQmNJbTVoYldWY0lpd2dibUZ0WlZCeWIzQmxjblI1S1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLRVZ5Y205eUxtTmhjSFIxY21WVGRHRmphMVJ5WVdObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCRmNuSnZjaTVqWVhCMGRYSmxVM1JoWTJ0VWNtRmpaU2gwYUdsekxDQjBhR2x6TG1OdmJuTjBjblZqZEc5eUtUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUVWeWNtOXlMbU5oYkd3b2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdhVzVvWlhKcGRITW9VM1ZpUlhKeWIzSXNJRVZ5Y205eUtUdGNiaUFnSUNCeVpYUjFjbTRnVTNWaVJYSnliM0k3WEc1OVhHNWNiblpoY2lCZlZIbHdaVVZ5Y205eUxDQmZVbUZ1WjJWRmNuSnZjanRjYm5aaGNpQlhZWEp1YVc1bklEMGdjM1ZpUlhKeWIzSW9YQ0pYWVhKdWFXNW5YQ0lzSUZ3aWQyRnlibWx1WjF3aUtUdGNiblpoY2lCRFlXNWpaV3hzWVhScGIyNUZjbkp2Y2lBOUlITjFZa1Z5Y205eUtGd2lRMkZ1WTJWc2JHRjBhVzl1UlhKeWIzSmNJaXdnWENKallXNWpaV3hzWVhScGIyNGdaWEp5YjNKY0lpazdYRzUyWVhJZ1ZHbHRaVzkxZEVWeWNtOXlJRDBnYzNWaVJYSnliM0lvWENKVWFXMWxiM1YwUlhKeWIzSmNJaXdnWENKMGFXMWxiM1YwSUdWeWNtOXlYQ0lwTzF4dWRtRnlJRUZuWjNKbFoyRjBaVVZ5Y205eUlEMGdjM1ZpUlhKeWIzSW9YQ0pCWjJkeVpXZGhkR1ZGY25KdmNsd2lMQ0JjSW1GblozSmxaMkYwWlNCbGNuSnZjbHdpS1R0Y2JuUnllU0I3WEc0Z0lDQWdYMVI1Y0dWRmNuSnZjaUE5SUZSNWNHVkZjbkp2Y2p0Y2JpQWdJQ0JmVW1GdVoyVkZjbkp2Y2lBOUlGSmhibWRsUlhKeWIzSTdYRzU5SUdOaGRHTm9LR1VwSUh0Y2JpQWdJQ0JmVkhsd1pVVnljbTl5SUQwZ2MzVmlSWEp5YjNJb1hDSlVlWEJsUlhKeWIzSmNJaXdnWENKMGVYQmxJR1Z5Y205eVhDSXBPMXh1SUNBZ0lGOVNZVzVuWlVWeWNtOXlJRDBnYzNWaVJYSnliM0lvWENKU1lXNW5aVVZ5Y205eVhDSXNJRndpY21GdVoyVWdaWEp5YjNKY0lpazdYRzU5WEc1Y2JuWmhjaUJ0WlhSb2IyUnpJRDBnS0Z3aWFtOXBiaUJ3YjNBZ2NIVnphQ0J6YUdsbWRDQjFibk5vYVdaMElITnNhV05sSUdacGJIUmxjaUJtYjNKRllXTm9JSE52YldVZ1hDSWdLMXh1SUNBZ0lGd2laWFpsY25rZ2JXRndJR2x1WkdWNFQyWWdiR0Z6ZEVsdVpHVjRUMllnY21Wa2RXTmxJSEpsWkhWalpWSnBaMmgwSUhOdmNuUWdjbVYyWlhKelpWd2lLUzV6Y0d4cGRDaGNJaUJjSWlrN1hHNWNibVp2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYldWMGFHOWtjeTVzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsVzIxbGRHaHZaSE5iYVYxZElEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdRV2RuY21WbllYUmxSWEp5YjNJdWNISnZkRzkwZVhCbFcyMWxkR2h2WkhOYmFWMWRJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxXMjFsZEdodlpITmJhVjFkTzF4dUlDQWdJSDFjYm4xY2JseHVaWE0xTG1SbFptbHVaVkJ5YjNCbGNuUjVLRUZuWjNKbFoyRjBaVVZ5Y205eUxuQnliM1J2ZEhsd1pTd2dYQ0pzWlc1bmRHaGNJaXdnZTF4dUlDQWdJSFpoYkhWbE9pQXdMRnh1SUNBZ0lHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnSUNBZ2QzSnBkR0ZpYkdVNklIUnlkV1VzWEc0Z0lDQWdaVzUxYldWeVlXSnNaVG9nZEhKMVpWeHVmU2s3WEc1QloyZHlaV2RoZEdWRmNuSnZjaTV3Y205MGIzUjVjR1ZiWENKcGMwOXdaWEpoZEdsdmJtRnNYQ0pkSUQwZ2RISjFaVHRjYm5aaGNpQnNaWFpsYkNBOUlEQTdYRzVCWjJkeVpXZGhkR1ZGY25KdmNpNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY2dQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0IyWVhJZ2FXNWtaVzUwSUQwZ1FYSnlZWGtvYkdWMlpXd2dLaUEwSUNzZ01Ta3VhbTlwYmloY0lpQmNJaWs3WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJRndpWEZ4dVhDSWdLeUJwYm1SbGJuUWdLeUJjSWtGblozSmxaMkYwWlVWeWNtOXlJRzltT2x3aUlDc2dYQ0pjWEc1Y0lqdGNiaUFnSUNCc1pYWmxiQ3NyTzF4dUlDQWdJR2x1WkdWdWRDQTlJRUZ5Y21GNUtHeGxkbVZzSUNvZ05DQXJJREVwTG1wdmFXNG9YQ0lnWENJcE8xeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYzNSeUlEMGdkR2hwYzF0cFhTQTlQVDBnZEdocGN5QS9JRndpVzBOcGNtTjFiR0Z5SUVGblozSmxaMkYwWlVWeWNtOXlYVndpSURvZ2RHaHBjMXRwWFNBcklGd2lYQ0k3WEc0Z0lDQWdJQ0FnSUhaaGNpQnNhVzVsY3lBOUlITjBjaTV6Y0d4cGRDaGNJbHhjYmx3aUtUdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhaUE5SURBN0lHb2dQQ0JzYVc1bGN5NXNaVzVuZEdnN0lDc3JhaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR2x1WlhOYmFsMGdQU0JwYm1SbGJuUWdLeUJzYVc1bGMxdHFYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCemRISWdQU0JzYVc1bGN5NXFiMmx1S0Z3aVhGeHVYQ0lwTzF4dUlDQWdJQ0FnSUNCeVpYUWdLejBnYzNSeUlDc2dYQ0pjWEc1Y0lqdGNiaUFnSUNCOVhHNGdJQ0FnYkdWMlpXd3RMVHRjYmlBZ0lDQnlaWFIxY200Z2NtVjBPMXh1ZlR0Y2JseHVablZ1WTNScGIyNGdUM0JsY21GMGFXOXVZV3hGY25KdmNpaHRaWE56WVdkbEtTQjdYRzRnSUNBZ2FXWWdLQ0VvZEdocGN5QnBibk4wWVc1alpXOW1JRTl3WlhKaGRHbHZibUZzUlhKeWIzSXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUU5d1pYSmhkR2x2Ym1Gc1JYSnliM0lvYldWemMyRm5aU2s3WEc0Z0lDQWdibTkwUlc1MWJXVnlZV0pzWlZCeWIzQW9kR2hwY3l3Z1hDSnVZVzFsWENJc0lGd2lUM0JsY21GMGFXOXVZV3hGY25KdmNsd2lLVHRjYmlBZ0lDQnViM1JGYm5WdFpYSmhZbXhsVUhKdmNDaDBhR2x6TENCY0ltMWxjM05oWjJWY0lpd2diV1Z6YzJGblpTazdYRzRnSUNBZ2RHaHBjeTVqWVhWelpTQTlJRzFsYzNOaFoyVTdYRzRnSUNBZ2RHaHBjMXRjSW1selQzQmxjbUYwYVc5dVlXeGNJbDBnUFNCMGNuVmxPMXh1WEc0Z0lDQWdhV1lnS0cxbGMzTmhaMlVnYVc1emRHRnVZMlZ2WmlCRmNuSnZjaWtnZTF4dUlDQWdJQ0FnSUNCdWIzUkZiblZ0WlhKaFlteGxVSEp2Y0NoMGFHbHpMQ0JjSW0xbGMzTmhaMlZjSWl3Z2JXVnpjMkZuWlM1dFpYTnpZV2RsS1R0Y2JpQWdJQ0FnSUNBZ2JtOTBSVzUxYldWeVlXSnNaVkJ5YjNBb2RHaHBjeXdnWENKemRHRmphMXdpTENCdFpYTnpZV2RsTG5OMFlXTnJLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLRVZ5Y205eUxtTmhjSFIxY21WVGRHRmphMVJ5WVdObEtTQjdYRzRnSUNBZ0lDQWdJRVZ5Y205eUxtTmhjSFIxY21WVGRHRmphMVJ5WVdObEtIUm9hWE1zSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0lwTzF4dUlDQWdJSDFjYmx4dWZWeHVhVzVvWlhKcGRITW9UM0JsY21GMGFXOXVZV3hGY25KdmNpd2dSWEp5YjNJcE8xeHVYRzUyWVhJZ1pYSnliM0pVZVhCbGN5QTlJRVZ5Y205eVcxd2lYMTlDYkhWbFltbHlaRVZ5Y205eVZIbHdaWE5mWDF3aVhUdGNibWxtSUNnaFpYSnliM0pVZVhCbGN5a2dlMXh1SUNBZ0lHVnljbTl5Vkhsd1pYTWdQU0JQWW1wbFkzUm1jbVZsZW1Vb2UxeHVJQ0FnSUNBZ0lDQkRZVzVqWld4c1lYUnBiMjVGY25KdmNqb2dRMkZ1WTJWc2JHRjBhVzl1UlhKeWIzSXNYRzRnSUNBZ0lDQWdJRlJwYldWdmRYUkZjbkp2Y2pvZ1ZHbHRaVzkxZEVWeWNtOXlMRnh1SUNBZ0lDQWdJQ0JQY0dWeVlYUnBiMjVoYkVWeWNtOXlPaUJQY0dWeVlYUnBiMjVoYkVWeWNtOXlMRnh1SUNBZ0lDQWdJQ0JTWldwbFkzUnBiMjVGY25KdmNqb2dUM0JsY21GMGFXOXVZV3hGY25KdmNpeGNiaUFnSUNBZ0lDQWdRV2RuY21WbllYUmxSWEp5YjNJNklFRm5aM0psWjJGMFpVVnljbTl5WEc0Z0lDQWdmU2s3WEc0Z0lDQWdibTkwUlc1MWJXVnlZV0pzWlZCeWIzQW9SWEp5YjNJc0lGd2lYMTlDYkhWbFltbHlaRVZ5Y205eVZIbHdaWE5mWDF3aUxDQmxjbkp2Y2xSNWNHVnpLVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYRzRnSUNBZ1JYSnliM0k2SUVWeWNtOXlMRnh1SUNBZ0lGUjVjR1ZGY25KdmNqb2dYMVI1Y0dWRmNuSnZjaXhjYmlBZ0lDQlNZVzVuWlVWeWNtOXlPaUJmVW1GdVoyVkZjbkp2Y2l4Y2JpQWdJQ0JEWVc1alpXeHNZWFJwYjI1RmNuSnZjam9nWlhKeWIzSlVlWEJsY3k1RFlXNWpaV3hzWVhScGIyNUZjbkp2Y2l4Y2JpQWdJQ0JQY0dWeVlYUnBiMjVoYkVWeWNtOXlPaUJsY25KdmNsUjVjR1Z6TGs5d1pYSmhkR2x2Ym1Gc1JYSnliM0lzWEc0Z0lDQWdWR2x0Wlc5MWRFVnljbTl5T2lCbGNuSnZjbFI1Y0dWekxsUnBiV1Z2ZFhSRmNuSnZjaXhjYmlBZ0lDQkJaMmR5WldkaGRHVkZjbkp2Y2pvZ1pYSnliM0pVZVhCbGN5NUJaMmR5WldkaGRHVkZjbkp2Y2l4Y2JpQWdJQ0JYWVhKdWFXNW5PaUJYWVhKdWFXNW5YRzU5TzF4dVhHNTlMSHRjSWk0dlpYTTFMbXB6WENJNk1UUXNYQ0l1TDNWMGFXd3Vhbk5jSWpvek9IMWRMREUwT2x0bWRXNWpkR2x2YmloZlpHVnlaWEZmTEcxdlpIVnNaU3hsZUhCdmNuUnpLWHRjYm5aaGNpQnBjMFZUTlNBOUlDaG1kVzVqZEdsdmJpZ3BlMXh1SUNBZ0lGd2lkWE5sSUhOMGNtbGpkRndpTzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6SUQwOVBTQjFibVJsWm1sdVpXUTdYRzU5S1NncE8xeHVYRzVwWmlBb2FYTkZVelVwSUh0Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmlBZ0lDQWdJQ0FnWm5KbFpYcGxPaUJQWW1wbFkzUXVabkpsWlhwbExGeHVJQ0FnSUNBZ0lDQmtaV1pwYm1WUWNtOXdaWEowZVRvZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVMRnh1SUNBZ0lDQWdJQ0JuWlhSRVpYTmpjbWx3ZEc5eU9pQlBZbXBsWTNRdVoyVjBUM2R1VUhKdmNHVnlkSGxFWlhOamNtbHdkRzl5TEZ4dUlDQWdJQ0FnSUNCclpYbHpPaUJQWW1wbFkzUXVhMlY1Y3l4Y2JpQWdJQ0FnSUNBZ2JtRnRaWE02SUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVVNWhiV1Z6TEZ4dUlDQWdJQ0FnSUNCblpYUlFjbTkwYjNSNWNHVlBaam9nVDJKcVpXTjBMbWRsZEZCeWIzUnZkSGx3WlU5bUxGeHVJQ0FnSUNBZ0lDQnBjMEZ5Y21GNU9pQkJjbkpoZVM1cGMwRnljbUY1TEZ4dUlDQWdJQ0FnSUNCcGMwVlROVG9nYVhORlV6VXNYRzRnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVTWE5YY21sMFlXSnNaVG9nWm5WdVkzUnBiMjRvYjJKcUxDQndjbTl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1pHVnpZM0pwY0hSdmNpQTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVVSbGMyTnlhWEIwYjNJb2IySnFMQ0J3Y205d0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUFoSVNnaFpHVnpZM0pwY0hSdmNpQjhmQ0JrWlhOamNtbHdkRzl5TG5keWFYUmhZbXhsSUh4OElHUmxjMk55YVhCMGIzSXVjMlYwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNTlJR1ZzYzJVZ2UxeHVJQ0FnSUhaaGNpQm9ZWE1nUFNCN2ZTNW9ZWE5QZDI1UWNtOXdaWEowZVR0Y2JpQWdJQ0IyWVhJZ2MzUnlJRDBnZTMwdWRHOVRkSEpwYm1jN1hHNGdJQ0FnZG1GeUlIQnliM1J2SUQwZ2UzMHVZMjl1YzNSeWRXTjBiM0l1Y0hKdmRHOTBlWEJsTzF4dVhHNGdJQ0FnZG1GeUlFOWlhbVZqZEV0bGVYTWdQU0JtZFc1amRHbHZiaUFvYnlrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY21WMElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUJ2S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpMbU5oYkd3b2J5d2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkQzV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsZER0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnZG1GeUlFOWlhbVZqZEVkbGRFUmxjMk55YVhCMGIzSWdQU0JtZFc1amRHbHZiaWh2TENCclpYa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHQyWVd4MVpUb2diMXRyWlhsZGZUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2RtRnlJRTlpYW1WamRFUmxabWx1WlZCeWIzQmxjblI1SUQwZ1puVnVZM1JwYjI0Z0tHOHNJR3RsZVN3Z1pHVnpZeWtnZTF4dUlDQWdJQ0FnSUNCdlcydGxlVjBnUFNCa1pYTmpMblpoYkhWbE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2J6dGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2RtRnlJRTlpYW1WamRFWnlaV1Y2WlNBOUlHWjFibU4wYVc5dUlDaHZZbW9wSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFqdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2RtRnlJRTlpYW1WamRFZGxkRkJ5YjNSdmRIbHdaVTltSUQwZ1puVnVZM1JwYjI0Z0tHOWlhaWtnZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQ2h2WW1vcExtTnZibk4wY25WamRHOXlMbkJ5YjNSdmRIbHdaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ5YjNSdk8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lIWmhjaUJCY25KaGVVbHpRWEp5WVhrZ1BTQm1kVzVqZEdsdmJpQW9iMkpxS1NCN1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlMbU5oYkd3b2IySnFLU0E5UFQwZ1hDSmJiMkpxWldOMElFRnljbUY1WFZ3aU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR05oZEdOb0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmlBZ0lDQWdJQ0FnYVhOQmNuSmhlVG9nUVhKeVlYbEpjMEZ5Y21GNUxGeHVJQ0FnSUNBZ0lDQnJaWGx6T2lCUFltcGxZM1JMWlhsekxGeHVJQ0FnSUNBZ0lDQnVZVzFsY3pvZ1QySnFaV04wUzJWNWN5eGNiaUFnSUNBZ0lDQWdaR1ZtYVc1bFVISnZjR1Z5ZEhrNklFOWlhbVZqZEVSbFptbHVaVkJ5YjNCbGNuUjVMRnh1SUNBZ0lDQWdJQ0JuWlhSRVpYTmpjbWx3ZEc5eU9pQlBZbXBsWTNSSFpYUkVaWE5qY21sd2RHOXlMRnh1SUNBZ0lDQWdJQ0JtY21WbGVtVTZJRTlpYW1WamRFWnlaV1Y2WlN4Y2JpQWdJQ0FnSUNBZ1oyVjBVSEp2ZEc5MGVYQmxUMlk2SUU5aWFtVmpkRWRsZEZCeWIzUnZkSGx3WlU5bUxGeHVJQ0FnSUNBZ0lDQnBjMFZUTlRvZ2FYTkZVelVzWEc0Z0lDQWdJQ0FnSUhCeWIzQmxjblI1U1hOWGNtbDBZV0pzWlRvZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzU5WEc1Y2JuMHNlMzFkTERFMU9sdG1kVzVqZEdsdmJpaGZaR1Z5WlhGZkxHMXZaSFZzWlN4bGVIQnZjblJ6S1h0Y2Jsd2lkWE5sSUhOMGNtbGpkRndpTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloUWNtOXRhWE5sTENCSlRsUkZVazVCVENrZ2UxeHVkbUZ5SUZCeWIyMXBjMlZOWVhBZ1BTQlFjbTl0YVhObExtMWhjRHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVptbHNkR1Z5SUQwZ1puVnVZM1JwYjI0Z0tHWnVMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdjbVYwZFhKdUlGQnliMjFwYzJWTllYQW9kR2hwY3l3Z1ptNHNJRzl3ZEdsdmJuTXNJRWxPVkVWU1RrRk1LVHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVabWxzZEdWeUlEMGdablZ1WTNScGIyNGdLSEJ5YjIxcGMyVnpMQ0JtYml3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxUV0Z3S0hCeWIyMXBjMlZ6TENCbWJpd2diM0IwYVc5dWN5d2dTVTVVUlZKT1FVd3BPMXh1ZlR0Y2JuMDdYRzVjYm4wc2UzMWRMREUyT2x0bWRXNWpkR2x2YmloZlpHVnlaWEZmTEcxdlpIVnNaU3hsZUhCdmNuUnpLWHRjYmx3aWRYTmxJSE4wY21samRGd2lPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhRY205dGFYTmxMQ0JPUlZoVVgwWkpURlJGVWl3Z2RISjVRMjl1ZG1WeWRGUnZVSEp2YldselpTa2dlMXh1ZG1GeUlIVjBhV3dnUFNCZlpHVnlaWEZmS0Z3aUxpOTFkR2xzTG1welhDSXBPMXh1ZG1GeUlHbHpVSEpwYldsMGFYWmxJRDBnZFhScGJDNXBjMUJ5YVcxcGRHbDJaVHRjYm5aaGNpQjBhSEp2ZDJWeUlEMGdkWFJwYkM1MGFISnZkMlZ5TzF4dVhHNW1kVzVqZEdsdmJpQnlaWFIxY201VWFHbHpLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dWZWeHVablZ1WTNScGIyNGdkR2h5YjNkVWFHbHpLQ2tnZTF4dUlDQWdJSFJvY205M0lIUm9hWE03WEc1OVhHNW1kVzVqZEdsdmJpQnlaWFIxY200a0tISXBJSHRjYmlBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlPMXh1SUNBZ0lIMDdYRzU5WEc1bWRXNWpkR2x2YmlCMGFISnZkeVFvY2lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnY2p0Y2JpQWdJQ0I5TzF4dWZWeHVablZ1WTNScGIyNGdjSEp2YldselpXUkdhVzVoYkd4NUtISmxkQ3dnY21WaGMyOXVUM0pXWVd4MVpTd2dhWE5HZFd4bWFXeHNaV1FwSUh0Y2JpQWdJQ0IyWVhJZ2RHaGxianRjYmlBZ0lDQnBaaUFvYVhOUWNtbHRhWFJwZG1Vb2NtVmhjMjl1VDNKV1lXeDFaU2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaGxiaUE5SUdselJuVnNabWxzYkdWa0lEOGdjbVYwZFhKdUpDaHlaV0Z6YjI1UGNsWmhiSFZsS1NBNklIUm9jbTkzSkNoeVpXRnpiMjVQY2xaaGJIVmxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBhR1Z1SUQwZ2FYTkdkV3htYVd4c1pXUWdQeUJ5WlhSMWNtNVVhR2x6SURvZ2RHaHliM2RVYUdsek8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdjbVYwTGw5MGFHVnVLSFJvWlc0c0lIUm9jbTkzWlhJc0lIVnVaR1ZtYVc1bFpDd2djbVZoYzI5dVQzSldZV3gxWlN3Z2RXNWtaV1pwYm1Wa0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1ptbHVZV3hzZVVoaGJtUnNaWElvY21WaGMyOXVUM0pXWVd4MVpTa2dlMXh1SUNBZ0lIWmhjaUJ3Y205dGFYTmxJRDBnZEdocGN5NXdjbTl0YVhObE8xeHVJQ0FnSUhaaGNpQm9ZVzVrYkdWeUlEMGdkR2hwY3k1b1lXNWtiR1Z5TzF4dVhHNGdJQ0FnZG1GeUlISmxkQ0E5SUhCeWIyMXBjMlV1WDJselFtOTFibVFvS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQS9JR2hoYm1Sc1pYSXVZMkZzYkNod2NtOXRhWE5sTGw5aWIzVnVaRlJ2S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQTZJR2hoYm1Sc1pYSW9LVHRjYmx4dUlDQWdJR2xtSUNoeVpYUWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYldGNVltVlFjbTl0YVhObElEMGdkSEo1UTI5dWRtVnlkRlJ2VUhKdmJXbHpaU2h5WlhRc0lIQnliMjFwYzJVcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYldGNVltVlFjbTl0YVhObElHbHVjM1JoYm1ObGIyWWdVSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRjVZbVZRY205dGFYTmxJRDBnYldGNVltVlFjbTl0YVhObExsOTBZWEpuWlhRb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ3Y205dGFYTmxaRVpwYm1Gc2JIa29iV0Y1WW1WUWNtOXRhWE5sTENCeVpXRnpiMjVQY2xaaGJIVmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaUzVwYzBaMWJHWnBiR3hsWkNncEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h3Y205dGFYTmxMbWx6VW1WcVpXTjBaV1FvS1NrZ2UxeHVJQ0FnSUNBZ0lDQk9SVmhVWDBaSlRGUkZVaTVsSUQwZ2NtVmhjMjl1VDNKV1lXeDFaVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRTVGV0ZSZlJrbE1WRVZTTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaV0Z6YjI1UGNsWmhiSFZsTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdkR0Z3U0dGdVpHeGxjaWgyWVd4MVpTa2dlMXh1SUNBZ0lIWmhjaUJ3Y205dGFYTmxJRDBnZEdocGN5NXdjbTl0YVhObE8xeHVJQ0FnSUhaaGNpQm9ZVzVrYkdWeUlEMGdkR2hwY3k1b1lXNWtiR1Z5TzF4dVhHNGdJQ0FnZG1GeUlISmxkQ0E5SUhCeWIyMXBjMlV1WDJselFtOTFibVFvS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQS9JR2hoYm1Sc1pYSXVZMkZzYkNod2NtOXRhWE5sTGw5aWIzVnVaRlJ2TENCMllXeDFaU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ09pQm9ZVzVrYkdWeUtIWmhiSFZsS1R0Y2JseHVJQ0FnSUdsbUlDaHlaWFFnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JXRjVZbVZRY205dGFYTmxJRDBnZEhKNVEyOXVkbVZ5ZEZSdlVISnZiV2x6WlNoeVpYUXNJSEJ5YjIxcGMyVXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb2JXRjVZbVZRY205dGFYTmxJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Y1WW1WUWNtOXRhWE5sSUQwZ2JXRjVZbVZRY205dGFYTmxMbDkwWVhKblpYUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCd2NtOXRhWE5sWkVacGJtRnNiSGtvYldGNVltVlFjbTl0YVhObExDQjJZV3gxWlN3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIWmhiSFZsTzF4dWZWeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVmY0dGemMxUm9jbTkxWjJoSVlXNWtiR1Z5SUQwZ1puVnVZM1JwYjI0Z0tHaGhibVJzWlhJc0lHbHpSbWx1WVd4c2VTa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdhR0Z1Wkd4bGNpQWhQVDBnWENKbWRXNWpkR2x2Ymx3aUtTQnlaWFIxY200Z2RHaHBjeTUwYUdWdUtDazdYRzVjYmlBZ0lDQjJZWElnY0hKdmJXbHpaVUZ1WkVoaGJtUnNaWElnUFNCN1hHNGdJQ0FnSUNBZ0lIQnliMjFwYzJVNklIUm9hWE1zWEc0Z0lDQWdJQ0FnSUdoaGJtUnNaWEk2SUdoaGJtUnNaWEpjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDNSb1pXNG9YRzRnSUNBZ0lDQWdJQ0FnSUNCcGMwWnBibUZzYkhrZ1B5Qm1hVzVoYkd4NVNHRnVaR3hsY2lBNklIUmhjRWhoYm1Sc1pYSXNYRzRnSUNBZ0lDQWdJQ0FnSUNCcGMwWnBibUZzYkhrZ1B5Qm1hVzVoYkd4NVNHRnVaR3hsY2lBNklIVnVaR1ZtYVc1bFpDd2dkVzVrWldacGJtVmtMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZiV2x6WlVGdVpFaGhibVJzWlhJc0lIVnVaR1ZtYVc1bFpDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXNZWE4wYkhrZ1BWeHVVSEp2YldselpTNXdjbTkwYjNSNWNHVmJYQ0ptYVc1aGJHeDVYQ0pkSUQwZ1puVnVZM1JwYjI0Z0tHaGhibVJzWlhJcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZjR0Z6YzFSb2NtOTFaMmhJWVc1a2JHVnlLR2hoYm1Sc1pYSXNJSFJ5ZFdVcE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWRHRndJRDBnWm5WdVkzUnBiMjRnS0doaGJtUnNaWElwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmNHRnpjMVJvY205MVoyaElZVzVrYkdWeUtHaGhibVJzWlhJc0lHWmhiSE5sS1R0Y2JuMDdYRzU5TzF4dVhHNTlMSHRjSWk0dmRYUnBiQzVxYzF3aU9qTTRmVjBzTVRjNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0ZCeWIyMXBjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGd2FWSmxhbVZqZEdsdmJpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdTVTVVUlZKT1FVd3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ5ZVVOdmJuWmxjblJVYjFCeWIyMXBjMlVwSUh0Y2JuWmhjaUJsY25KdmNuTWdQU0JmWkdWeVpYRmZLRndpTGk5bGNuSnZjbk11YW5OY0lpazdYRzUyWVhJZ1ZIbHdaVVZ5Y205eUlEMGdaWEp5YjNKekxsUjVjR1ZGY25KdmNqdGNiblpoY2lCMWRHbHNJRDBnWDJSbGNtVnhYeWhjSWk0dmRYUnBiQzVxYzF3aUtUdGNiblpoY2lCbGNuSnZjazlpYWlBOUlIVjBhV3d1WlhKeWIzSlBZbW83WEc1MllYSWdkSEo1UTJGMFkyZ2dQU0IxZEdsc0xuUnllVU5oZEdOb08xeHVkbUZ5SUhscFpXeGtTR0Z1Wkd4bGNuTWdQU0JiWFR0Y2JseHVablZ1WTNScGIyNGdjSEp2YldselpVWnliMjFaYVdWc1pFaGhibVJzWlhJb2RtRnNkV1VzSUhscFpXeGtTR0Z1Wkd4bGNuTXNJSFJ5WVdObFVHRnlaVzUwS1NCN1hHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCNWFXVnNaRWhoYm1Sc1pYSnpMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lIUnlZV05sVUdGeVpXNTBMbDl3ZFhOb1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUNBZ0lDQjJZWElnY21WemRXeDBJRDBnZEhKNVEyRjBZMmdvZVdsbGJHUklZVzVrYkdWeWMxdHBYU2tvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0IwY21GalpWQmhjbVZ1ZEM1ZmNHOXdRMjl1ZEdWNGRDZ3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb2NtVnpkV3gwSUQwOVBTQmxjbkp2Y2s5aWFpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RISmhZMlZRWVhKbGJuUXVYM0IxYzJoRGIyNTBaWGgwS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NtVjBJRDBnVUhKdmJXbHpaUzV5WldwbFkzUW9aWEp5YjNKUFltb3VaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbUZqWlZCaGNtVnVkQzVmY0c5d1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjJZWElnYldGNVltVlFjbTl0YVhObElEMGdkSEo1UTI5dWRtVnlkRlJ2VUhKdmJXbHpaU2h5WlhOMWJIUXNJSFJ5WVdObFVHRnlaVzUwS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLRzFoZVdKbFVISnZiV2x6WlNCcGJuTjBZVzVqWlc5bUlGQnliMjFwYzJVcElISmxkSFZ5YmlCdFlYbGlaVkJ5YjIxcGMyVTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCUWNtOXRhWE5sVTNCaGQyNG9aMlZ1WlhKaGRHOXlSblZ1WTNScGIyNHNJSEpsWTJWcGRtVnlMQ0I1YVdWc1pFaGhibVJzWlhJc0lITjBZV05yS1NCN1hHNGdJQ0FnZG1GeUlIQnliMjFwYzJVZ1BTQjBhR2x6TGw5d2NtOXRhWE5sSUQwZ2JtVjNJRkJ5YjIxcGMyVW9TVTVVUlZKT1FVd3BPMXh1SUNBZ0lIQnliMjFwYzJVdVgyTmhjSFIxY21WVGRHRmphMVJ5WVdObEtDazdYRzRnSUNBZ2RHaHBjeTVmYzNSaFkyc2dQU0J6ZEdGamF6dGNiaUFnSUNCMGFHbHpMbDluWlc1bGNtRjBiM0pHZFc1amRHbHZiaUE5SUdkbGJtVnlZWFJ2Y2taMWJtTjBhVzl1TzF4dUlDQWdJSFJvYVhNdVgzSmxZMlZwZG1WeUlEMGdjbVZqWldsMlpYSTdYRzRnSUNBZ2RHaHBjeTVmWjJWdVpYSmhkRzl5SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUhSb2FYTXVYM2xwWld4a1NHRnVaR3hsY25NZ1BTQjBlWEJsYjJZZ2VXbGxiR1JJWVc1a2JHVnlJRDA5UFNCY0ltWjFibU4wYVc5dVhDSmNiaUFnSUNBZ0lDQWdQeUJiZVdsbGJHUklZVzVrYkdWeVhTNWpiMjVqWVhRb2VXbGxiR1JJWVc1a2JHVnljeWxjYmlBZ0lDQWdJQ0FnT2lCNWFXVnNaRWhoYm1Sc1pYSnpPMXh1ZlZ4dVhHNVFjbTl0YVhObFUzQmhkMjR1Y0hKdmRHOTBlWEJsTG5CeWIyMXBjMlVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYM0J5YjIxcGMyVTdYRzU5TzF4dVhHNVFjbTl0YVhObFUzQmhkMjR1Y0hKdmRHOTBlWEJsTGw5eWRXNGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEdocGN5NWZaMlZ1WlhKaGRHOXlJRDBnZEdocGN5NWZaMlZ1WlhKaGRHOXlSblZ1WTNScGIyNHVZMkZzYkNoMGFHbHpMbDl5WldObGFYWmxjaWs3WEc0Z0lDQWdkR2hwY3k1ZmNtVmpaV2wyWlhJZ1BWeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5blpXNWxjbUYwYjNKR2RXNWpkR2x2YmlBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCMGFHbHpMbDl1WlhoMEtIVnVaR1ZtYVc1bFpDazdYRzU5TzF4dVhHNVFjbTl0YVhObFUzQmhkMjR1Y0hKdmRHOTBlWEJsTGw5amIyNTBhVzUxWlNBOUlHWjFibU4wYVc5dUlDaHlaWE4xYkhRcElIdGNiaUFnSUNCcFppQW9jbVZ6ZFd4MElEMDlQU0JsY25KdmNrOWlhaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZjSEp2YldselpTNWZjbVZxWldOMFEyRnNiR0poWTJzb2NtVnpkV3gwTG1Vc0lHWmhiSE5sTENCMGNuVmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnZG1Gc2RXVWdQU0J5WlhOMWJIUXVkbUZzZFdVN1hHNGdJQ0FnYVdZZ0tISmxjM1ZzZEM1a2IyNWxJRDA5UFNCMGNuVmxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0J5YjIxcGMyVXVYM0psYzI5c2RtVkRZV3hzWW1GamF5aDJZV3gxWlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHMWhlV0psVUhKdmJXbHpaU0E5SUhSeWVVTnZiblpsY25SVWIxQnliMjFwYzJVb2RtRnNkV1VzSUhSb2FYTXVYM0J5YjIxcGMyVXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lTaHRZWGxpWlZCeWIyMXBjMlVnYVc1emRHRnVZMlZ2WmlCUWNtOXRhWE5sS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGNVltVlFjbTl0YVhObElEMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl0YVhObFJuSnZiVmxwWld4a1NHRnVaR3hsY2lodFlYbGlaVkJ5YjIxcGMyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZVdsbGJHUklZVzVrYkdWeWN5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDl3Y205dGFYTmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h0WVhsaVpWQnliMjFwYzJVZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5MGFISnZkeWhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpUVNCMllXeDFaU0FsY3lCM1lYTWdlV2xsYkdSbFpDQjBhR0YwSUdOdmRXeGtJRzV2ZENCaVpTQjBjbVZoZEdWa0lHRnpJR0VnY0hKdmJXbHpaVnhjZFRBd01HRmNYSFV3TURCaElDQWdJRk5sWlNCb2RIUndPaTh2WjI5dkxtZHNMelJaTkhCRWExeGNkVEF3TUdGY1hIVXdNREJoWENJdWNtVndiR0ZqWlNoY0lpVnpYQ0lzSUhaaGJIVmxLU0FyWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSWtaeWIyMGdZMjl5YjNWMGFXNWxPbHhjZFRBd01HRmNJaUFyWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXpkR0ZqYXk1emNHeHBkQ2hjSWx4Y2Jsd2lLUzV6YkdsalpTZ3hMQ0F0TnlrdWFtOXBiaWhjSWx4Y2Jsd2lLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2JXRjVZbVZRY205dGFYTmxMbDkwYUdWdUtGeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZibVY0ZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgzUm9jbTkzTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkVzVrWldacGJtVmtMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHNTFiR3hjYmlBZ0lDQWdJQ0FwTzF4dUlDQWdJSDFjYm4wN1hHNWNibEJ5YjIxcGMyVlRjR0YzYmk1d2NtOTBiM1I1Y0dVdVgzUm9jbTkzSUQwZ1puVnVZM1JwYjI0Z0tISmxZWE52YmlrZ2UxeHVJQ0FnSUhSb2FYTXVYM0J5YjIxcGMyVXVYMkYwZEdGamFFVjRkSEpoVkhKaFkyVW9jbVZoYzI5dUtUdGNiaUFnSUNCMGFHbHpMbDl3Y205dGFYTmxMbDl3ZFhOb1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUhaaGNpQnlaWE4xYkhRZ1BTQjBjbmxEWVhSamFDaDBhR2x6TGw5blpXNWxjbUYwYjNKYlhDSjBhSEp2ZDF3aVhTbGNiaUFnSUNBZ0lDQWdMbU5oYkd3b2RHaHBjeTVmWjJWdVpYSmhkRzl5TENCeVpXRnpiMjRwTzF4dUlDQWdJSFJvYVhNdVgzQnliMjFwYzJVdVgzQnZjRU52Ym5SbGVIUW9LVHRjYmlBZ0lDQjBhR2x6TGw5amIyNTBhVzUxWlNoeVpYTjFiSFFwTzF4dWZUdGNibHh1VUhKdmJXbHpaVk53WVhkdUxuQnliM1J2ZEhsd1pTNWZibVY0ZENBOUlHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0FnSUhSb2FYTXVYM0J5YjIxcGMyVXVYM0IxYzJoRGIyNTBaWGgwS0NrN1hHNGdJQ0FnZG1GeUlISmxjM1ZzZENBOUlIUnllVU5oZEdOb0tIUm9hWE11WDJkbGJtVnlZWFJ2Y2k1dVpYaDBLUzVqWVd4c0tIUm9hWE11WDJkbGJtVnlZWFJ2Y2l3Z2RtRnNkV1VwTzF4dUlDQWdJSFJvYVhNdVgzQnliMjFwYzJVdVgzQnZjRU52Ym5SbGVIUW9LVHRjYmlBZ0lDQjBhR2x6TGw5amIyNTBhVzUxWlNoeVpYTjFiSFFwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzVqYjNKdmRYUnBibVVnUFNCbWRXNWpkR2x2YmlBb1oyVnVaWEpoZEc5eVJuVnVZM1JwYjI0c0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHZGxibVZ5WVhSdmNrWjFibU4wYVc5dUlDRTlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSW1kbGJtVnlZWFJ2Y2taMWJtTjBhVzl1SUcxMWMzUWdZbVVnWVNCbWRXNWpkR2x2Ymx4Y2RUQXdNR0ZjWEhVd01EQmhJQ0FnSUZObFpTQm9kSFJ3T2k4dloyOXZMbWRzTHpaV2NXaHRNRnhjZFRBd01HRmNJaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIWmhjaUI1YVdWc1pFaGhibVJzWlhJZ1BTQlBZbXBsWTNRb2IzQjBhVzl1Y3lrdWVXbGxiR1JJWVc1a2JHVnlPMXh1SUNBZ0lIWmhjaUJRY205dGFYTmxVM0JoZDI0a0lEMGdVSEp2YldselpWTndZWGR1TzF4dUlDQWdJSFpoY2lCemRHRmpheUE5SUc1bGR5QkZjbkp2Y2lncExuTjBZV05yTzF4dUlDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQm5aVzVsY21GMGIzSWdQU0JuWlc1bGNtRjBiM0pHZFc1amRHbHZiaTVoY0hCc2VTaDBhR2x6TENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYzNCaGQyNGdQU0J1WlhjZ1VISnZiV2x6WlZOd1lYZHVKQ2gxYm1SbFptbHVaV1FzSUhWdVpHVm1hVzVsWkN3Z2VXbGxiR1JJWVc1a2JHVnlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRHRmpheWs3WEc0Z0lDQWdJQ0FnSUhOd1lYZHVMbDluWlc1bGNtRjBiM0lnUFNCblpXNWxjbUYwYjNJN1hHNGdJQ0FnSUNBZ0lITndZWGR1TGw5dVpYaDBLSFZ1WkdWbWFXNWxaQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6Y0dGM2JpNXdjbTl0YVhObEtDazdYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JsQnliMjFwYzJVdVkyOXliM1YwYVc1bExtRmtaRmxwWld4a1NHRnVaR3hsY2lBOUlHWjFibU4wYVc5dUtHWnVLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJtYmlBaFBUMGdYQ0ptZFc1amRHbHZibHdpS1NCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2labTRnYlhWemRDQmlaU0JoSUdaMWJtTjBhVzl1WEZ4MU1EQXdZVnhjZFRBd01HRWdJQ0FnVTJWbElHaDBkSEE2THk5bmIyOHVaMnd2T1RFMmJFcEtYRngxTURBd1lWd2lLVHRjYmlBZ0lDQjVhV1ZzWkVoaGJtUnNaWEp6TG5CMWMyZ29abTRwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV6Y0dGM2JpQTlJR1oxYm1OMGFXOXVJQ2huWlc1bGNtRjBiM0pHZFc1amRHbHZiaWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWjJWdVpYSmhkRzl5Um5WdVkzUnBiMjRnSVQwOUlGd2lablZ1WTNScGIyNWNJaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhCcFVtVnFaV04wYVc5dUtGd2laMlZ1WlhKaGRHOXlSblZ1WTNScGIyNGdiWFZ6ZENCaVpTQmhJR1oxYm1OMGFXOXVYRngxTURBd1lWeGNkVEF3TUdFZ0lDQWdVMlZsSUdoMGRIQTZMeTluYjI4dVoyd3ZObFp4YUcwd1hGeDFNREF3WVZ3aUtUdGNiaUFnSUNCOVhHNGdJQ0FnZG1GeUlITndZWGR1SUQwZ2JtVjNJRkJ5YjIxcGMyVlRjR0YzYmloblpXNWxjbUYwYjNKR2RXNWpkR2x2Yml3Z2RHaHBjeWs3WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJSE53WVhkdUxuQnliMjFwYzJVb0tUdGNiaUFnSUNCemNHRjNiaTVmY25WdUtGQnliMjFwYzJVdWMzQmhkMjRwTzF4dUlDQWdJSEpsZEhWeWJpQnlaWFE3WEc1OU8xeHVmVHRjYmx4dWZTeDdYQ0l1TDJWeWNtOXljeTVxYzF3aU9qRXpMRndpTGk5MWRHbHNMbXB6WENJNk16aDlYU3d4T0RwYlpuVnVZM1JwYjI0b1gyUmxjbVZ4WHl4dGIyUjFiR1VzWlhod2IzSjBjeWw3WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDFjYm1aMWJtTjBhVzl1S0ZCeWIyMXBjMlVzSUZCeWIyMXBjMlZCY25KaGVTd2dkSEo1UTI5dWRtVnlkRlJ2VUhKdmJXbHpaU3dnU1U1VVJWSk9RVXdwSUh0Y2JuWmhjaUIxZEdsc0lEMGdYMlJsY21WeFh5aGNJaTR2ZFhScGJDNXFjMXdpS1R0Y2JuWmhjaUJqWVc1RmRtRnNkV0YwWlNBOUlIVjBhV3d1WTJGdVJYWmhiSFZoZEdVN1hHNTJZWElnZEhKNVEyRjBZMmdnUFNCMWRHbHNMblJ5ZVVOaGRHTm9PMXh1ZG1GeUlHVnljbTl5VDJKcUlEMGdkWFJwYkM1bGNuSnZjazlpYWp0Y2JuWmhjaUJ5WldwbFkzUTdYRzVjYm1sbUlDZ2hkSEoxWlNrZ2UxeHVhV1lnS0dOaGJrVjJZV3gxWVhSbEtTQjdYRzRnSUNBZ2RtRnlJSFJvWlc1RFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCR2RXNWpkR2x2YmloY0luWmhiSFZsWENJc0lGd2lhRzlzWkdWeVhDSXNJRndpSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ0ozVnpaU0J6ZEhKcFkzUW5PeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhRzlzWkdWeUxuQkpibVJsZUNBOUlIWmhiSFZsT3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnYUc5c1pHVnlMbU5vWldOclJuVnNabWxzYkcxbGJuUW9kR2hwY3lrN0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXVjbVZ3YkdGalpTZ3ZTVzVrWlhndlp5d2dhU2twTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0IyWVhJZ1kyRnNiR1Z5SUQwZ1puVnVZM1JwYjI0b1kyOTFiblFwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFpoYkhWbGN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNVHNnYVNBOFBTQmpiM1Z1ZERzZ0t5dHBLU0IyWVd4MVpYTXVjSFZ6YUNoY0ltaHZiR1JsY2k1d1hDSWdLeUJwS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QkdkVzVqZEdsdmJpaGNJbWh2YkdSbGNsd2lMQ0JjSWlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeHVYRnhjYmlBZ0lDQWdJQ0FnSUNBZ0lDZDFjMlVnYzNSeWFXTjBKenNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRnh1WEZ4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCallXeHNZbUZqYXlBOUlHaHZiR1JsY2k1bWJqc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEZ4dVhGeGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVd4c1ltRmpheWgyWVd4MVpYTXBPeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeHVYRnhjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lMbkpsY0d4aFkyVW9MM1poYkhWbGN5OW5MQ0IyWVd4MVpYTXVhbTlwYmloY0lpd2dYQ0lwS1NrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0IyWVhJZ2RHaGxia05oYkd4aVlXTnJjeUE5SUZ0ZE8xeHVJQ0FnSUhaaGNpQmpZV3hzWlhKeklEMGdXM1Z1WkdWbWFXNWxaRjA3WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURFN0lHa2dQRDBnTlRzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUhSb1pXNURZV3hzWW1GamEzTXVjSFZ6YUNoMGFHVnVRMkZzYkdKaFkyc29hU2twTzF4dUlDQWdJQ0FnSUNCallXeHNaWEp6TG5CMWMyZ29ZMkZzYkdWeUtHa3BLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnU0c5c1pHVnlJRDBnWm5WdVkzUnBiMjRvZEc5MFlXd3NJR1p1S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0RFZ1BTQjBhR2x6TG5BeUlEMGdkR2hwY3k1d015QTlJSFJvYVhNdWNEUWdQU0IwYUdsekxuQTFJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bWJpQTlJR1p1TzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJ2ZEdGc0lEMGdkRzkwWVd3N1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym05M0lEMGdNRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdTRzlzWkdWeUxuQnliM1J2ZEhsd1pTNWpZV3hzWlhKeklEMGdZMkZzYkdWeWN6dGNiaUFnSUNCSWIyeGtaWEl1Y0hKdmRHOTBlWEJsTG1Ob1pXTnJSblZzWm1sc2JHMWxiblFnUFNCbWRXNWpkR2x2Ymlod2NtOXRhWE5sS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ1YjNjZ1BTQjBhR2x6TG01dmR6dGNiaUFnSUNBZ0lDQWdibTkzS3lzN1hHNGdJQ0FnSUNBZ0lIWmhjaUIwYjNSaGJDQTlJSFJvYVhNdWRHOTBZV3c3WEc0Z0lDQWdJQ0FnSUdsbUlDaHViM2NnUGowZ2RHOTBZV3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCb1lXNWtiR1Z5SUQwZ2RHaHBjeTVqWVd4c1pYSnpXM1J2ZEdGc1hUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeWIyMXBjMlV1WDNCMWMyaERiMjUwWlhoMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjbVYwSUQwZ2RISjVRMkYwWTJnb2FHRnVaR3hsY2lrb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTl0YVhObExsOXdiM0JEYjI1MFpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY21WMElEMDlQU0JsY25KdmNrOWlhaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyMXBjMlV1WDNKbGFtVmpkRU5oYkd4aVlXTnJLSEpsZEM1bExDQm1ZV3h6WlN3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliMjFwYzJVdVgzSmxjMjlzZG1WRFlXeHNZbUZqYXloeVpYUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXViM2NnUFNCdWIzYzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdkbUZ5SUhKbGFtVmpkQ0E5SUdaMWJtTjBhVzl1SUNoeVpXRnpiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY21WcVpXTjBLSEpsWVhOdmJpazdYRzRnSUNBZ2ZUdGNibjFjYm4xY2JseHVVSEp2YldselpTNXFiMmx1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIWmhjaUJzWVhOMElEMGdZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQXRJREU3WEc0Z0lDQWdkbUZ5SUdadU8xeHVJQ0FnSUdsbUlDaHNZWE4wSUQ0Z01DQW1KaUIwZVhCbGIyWWdZWEpuZFcxbGJuUnpXMnhoYzNSZElEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdabTRnUFNCaGNtZDFiV1Z1ZEhOYmJHRnpkRjA3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkSEoxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHeGhjM1FnUENBMklDWW1JR05oYmtWMllXeDFZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSEpsZENBOUlHNWxkeUJRY205dGFYTmxLRWxPVkVWU1RrRk1LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhRdVgyTmhjSFIxY21WVGRHRmphMVJ5WVdObEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdodmJHUmxjaUE5SUc1bGR5QkliMnhrWlhJb2JHRnpkQ3dnWm00cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJqWVd4c1ltRmphM01nUFNCMGFHVnVRMkZzYkdKaFkydHpPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdGemREc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCdFlYbGlaVkJ5YjIxcGMyVWdQU0IwY25sRGIyNTJaWEowVkc5UWNtOXRhWE5sS0dGeVozVnRaVzUwYzF0cFhTd2djbVYwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0cxaGVXSmxVSEp2YldselpTQnBibk4wWVc1alpXOW1JRkJ5YjIxcGMyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFoZVdKbFVISnZiV2x6WlNBOUlHMWhlV0psVUhKdmJXbHpaUzVmZEdGeVoyVjBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjVZbVZRY205dGFYTmxMbDlwYzFCbGJtUnBibWNvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFoZVdKbFVISnZiV2x6WlM1ZmRHaGxiaWhqWVd4c1ltRmphM05iYVYwc0lISmxhbVZqZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkVzVrWldacGJtVmtMQ0J5WlhRc0lHaHZiR1JsY2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHMWhlV0psVUhKdmJXbHpaUzVmYVhOR2RXeG1hV3hzWldRb0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOaGJHeGlZV05yYzF0cFhTNWpZV3hzS0hKbGRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhsaVpWQnliMjFwYzJVdVgzWmhiSFZsS0Nrc0lHaHZiR1JsY2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkQzVmY21WcVpXTjBLRzFoZVdKbFVISnZiV2x6WlM1ZmNtVmhjMjl1S0NrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZzYkdKaFkydHpXMmxkTG1OaGJHd29jbVYwTENCdFlYbGlaVkJ5YjIxcGMyVXNJR2h2YkdSbGNpazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ0pGOXNaVzRnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvTzNaaGNpQmhjbWR6SUQwZ2JtVjNJRUZ5Y21GNUtDUmZiR1Z1S1RzZ1ptOXlLSFpoY2lBa1gya2dQU0F3T3lBa1gya2dQQ0FrWDJ4bGJqc2dLeXNrWDJrcElIdGhjbWR6V3lSZmFWMGdQU0JoY21kMWJXVnVkSE5iSkY5cFhUdDlYRzRnSUNBZ2FXWWdLR1p1S1NCaGNtZHpMbkJ2Y0NncE8xeHVJQ0FnSUhaaGNpQnlaWFFnUFNCdVpYY2dVSEp2YldselpVRnljbUY1S0dGeVozTXBMbkJ5YjIxcGMyVW9LVHRjYmlBZ0lDQnlaWFIxY200Z1ptNGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lISmxkQzV6Y0hKbFlXUW9abTRwSURvZ2NtVjBPMXh1ZlR0Y2JseHVmVHRjYmx4dWZTeDdYQ0l1TDNWMGFXd3Vhbk5jSWpvek9IMWRMREU1T2x0bWRXNWpkR2x2YmloZlpHVnlaWEZmTEcxdlpIVnNaU3hsZUhCdmNuUnpLWHRjYmx3aWRYTmxJSE4wY21samRGd2lPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhRY205dGFYTmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JRY205dGFYTmxRWEp5WVhrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRndhVkpsYW1WamRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhKNVEyOXVkbVZ5ZEZSdlVISnZiV2x6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1NVNVVSVkpPUVV3cElIdGNiblpoY2lCaGMzbHVZeUE5SUY5a1pYSmxjVjhvWENJdUwyRnplVzVqTG1welhDSXBPMXh1ZG1GeUlIVjBhV3dnUFNCZlpHVnlaWEZmS0Z3aUxpOTFkR2xzTG1welhDSXBPMXh1ZG1GeUlIUnllVU5oZEdOb0lEMGdkWFJwYkM1MGNubERZWFJqYUR0Y2JuWmhjaUJsY25KdmNrOWlhaUE5SUhWMGFXd3VaWEp5YjNKUFltbzdYRzUyWVhJZ1VFVk9SRWxPUnlBOUlIdDlPMXh1ZG1GeUlFVk5VRlJaWDBGU1VrRlpJRDBnVzEwN1hHNWNibVoxYm1OMGFXOXVJRTFoY0hCcGJtZFFjbTl0YVhObFFYSnlZWGtvY0hKdmJXbHpaWE1zSUdadUxDQnNhVzFwZEN3Z1gyWnBiSFJsY2lrZ2UxeHVJQ0FnSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0lrS0hCeWIyMXBjMlZ6S1R0Y2JpQWdJQ0IwYUdsekxsOXdjbTl0YVhObExsOWpZWEIwZFhKbFUzUmhZMnRVY21GalpTZ3BPMXh1SUNBZ0lIUm9hWE11WDJOaGJHeGlZV05ySUQwZ1ptNDdYRzRnSUNBZ2RHaHBjeTVmY0hKbGMyVnlkbVZrVm1Gc2RXVnpJRDBnWDJacGJIUmxjaUE5UFQwZ1NVNVVSVkpPUVV4Y2JpQWdJQ0FnSUNBZ1B5QnVaWGNnUVhKeVlYa29kR2hwY3k1c1pXNW5kR2dvS1NsY2JpQWdJQ0FnSUNBZ09pQnVkV3hzTzF4dUlDQWdJSFJvYVhNdVgyeHBiV2wwSUQwZ2JHbHRhWFE3WEc0Z0lDQWdkR2hwY3k1ZmFXNUdiR2xuYUhRZ1BTQXdPMXh1SUNBZ0lIUm9hWE11WDNGMVpYVmxJRDBnYkdsdGFYUWdQajBnTVNBL0lGdGRJRG9nUlUxUVZGbGZRVkpTUVZrN1hHNGdJQ0FnWVhONWJtTXVhVzUyYjJ0bEtHbHVhWFFzSUhSb2FYTXNJSFZ1WkdWbWFXNWxaQ2s3WEc1OVhHNTFkR2xzTG1sdWFHVnlhWFJ6S0UxaGNIQnBibWRRY205dGFYTmxRWEp5WVhrc0lGQnliMjFwYzJWQmNuSmhlU2s3WEc1bWRXNWpkR2x2YmlCcGJtbDBLQ2tnZTNSb2FYTXVYMmx1YVhRa0tIVnVaR1ZtYVc1bFpDd2dMVElwTzMxY2JseHVUV0Z3Y0dsdVoxQnliMjFwYzJWQmNuSmhlUzV3Y205MGIzUjVjR1V1WDJsdWFYUWdQU0JtZFc1amRHbHZiaUFvS1NCN2ZUdGNibHh1VFdGd2NHbHVaMUJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVgzQnliMjFwYzJWR2RXeG1hV3hzWldRZ1BTQm1kVzVqZEdsdmJpQW9kbUZzZFdVc0lHbHVaR1Y0S1NCN1hHNGdJQ0FnZG1GeUlIWmhiSFZsY3lBOUlIUm9hWE11WDNaaGJIVmxjenRjYmlBZ0lDQjJZWElnYkdWdVozUm9JRDBnZEdocGN5NXNaVzVuZEdnb0tUdGNiaUFnSUNCMllYSWdjSEpsYzJWeWRtVmtWbUZzZFdWeklEMGdkR2hwY3k1ZmNISmxjMlZ5ZG1Wa1ZtRnNkV1Z6TzF4dUlDQWdJSFpoY2lCc2FXMXBkQ0E5SUhSb2FYTXVYMnhwYldsME8xeHVJQ0FnSUdsbUlDaDJZV3gxWlhOYmFXNWtaWGhkSUQwOVBTQlFSVTVFU1U1SEtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbGMxdHBibVJsZUYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2FXWWdLR3hwYldsMElENDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgybHVSbXhwWjJoMExTMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlrY21GcGJsRjFaWFZsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmYVhOU1pYTnZiSFpsWkNncEtTQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCcFppQW9iR2x0YVhRZ1BqMGdNU0FtSmlCMGFHbHpMbDlwYmtac2FXZG9kQ0ErUFNCc2FXMXBkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWelcybHVaR1Y0WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmNYVmxkV1V1Y0hWemFDaHBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnlaWE5sY25abFpGWmhiSFZsY3lBaFBUMGdiblZzYkNrZ2NISmxjMlZ5ZG1Wa1ZtRnNkV1Z6VzJsdVpHVjRYU0E5SUhaaGJIVmxPMXh1WEc0Z0lDQWdJQ0FnSUhaaGNpQmpZV3hzWW1GamF5QTlJSFJvYVhNdVgyTmhiR3hpWVdOck8xeHVJQ0FnSUNBZ0lDQjJZWElnY21WalpXbDJaWElnUFNCMGFHbHpMbDl3Y205dGFYTmxMbDlpYjNWdVpGUnZPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXdjbTl0YVhObExsOXdkWE5vUTI5dWRHVjRkQ2dwTzF4dUlDQWdJQ0FnSUNCMllYSWdjbVYwSUQwZ2RISjVRMkYwWTJnb1kyRnNiR0poWTJzcExtTmhiR3dvY21WalpXbDJaWElzSUhaaGJIVmxMQ0JwYm1SbGVDd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNISnZiV2x6WlM1ZmNHOXdRMjl1ZEdWNGRDZ3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb2NtVjBJRDA5UFNCbGNuSnZjazlpYWlrZ2NtVjBkWEp1SUhSb2FYTXVYM0psYW1WamRDaHlaWFF1WlNrN1hHNWNiaUFnSUNBZ0lDQWdkbUZ5SUcxaGVXSmxVSEp2YldselpTQTlJSFJ5ZVVOdmJuWmxjblJVYjFCeWIyMXBjMlVvY21WMExDQjBhR2x6TGw5d2NtOXRhWE5sS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLRzFoZVdKbFVISnZiV2x6WlNCcGJuTjBZVzVqWlc5bUlGQnliMjFwYzJVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGVXSmxVSEp2YldselpTQTlJRzFoZVdKbFVISnZiV2x6WlM1ZmRHRnlaMlYwS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjVZbVZRY205dGFYTmxMbDlwYzFCbGJtUnBibWNvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hzYVcxcGRDQStQU0F4S1NCMGFHbHpMbDlwYmtac2FXZG9kQ3NyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxjMXRwYm1SbGVGMGdQU0JRUlU1RVNVNUhPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnRZWGxpWlZCeWIyMXBjMlV1WDNCeWIzaDVVSEp2YldselpVRnljbUY1S0hSb2FYTXNJR2x1WkdWNEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JXRjVZbVZRY205dGFYTmxMbDlwYzBaMWJHWnBiR3hsWkNncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwSUQwZ2JXRjVZbVZRY205dGFYTmxMbDkyWVd4MVpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZjbVZxWldOMEtHMWhlV0psVUhKdmJXbHpaUzVmY21WaGMyOXVLQ2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhaaGJIVmxjMXRwYm1SbGVGMGdQU0J5WlhRN1hHNGdJQ0FnZlZ4dUlDQWdJSFpoY2lCMGIzUmhiRkpsYzI5c2RtVmtJRDBnS3l0MGFHbHpMbDkwYjNSaGJGSmxjMjlzZG1Wa08xeHVJQ0FnSUdsbUlDaDBiM1JoYkZKbGMyOXNkbVZrSUQ0OUlHeGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKbGMyVnlkbVZrVm1Gc2RXVnpJQ0U5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5bWFXeDBaWElvZG1Gc2RXVnpMQ0J3Y21WelpYSjJaV1JXWVd4MVpYTXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmY21WemIyeDJaU2gyWVd4MVpYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0I5WEc1OU8xeHVYRzVOWVhCd2FXNW5VSEp2YldselpVRnljbUY1TG5CeWIzUnZkSGx3WlM1ZlpISmhhVzVSZFdWMVpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IyWVhJZ2NYVmxkV1VnUFNCMGFHbHpMbDl4ZFdWMVpUdGNiaUFnSUNCMllYSWdiR2x0YVhRZ1BTQjBhR2x6TGw5c2FXMXBkRHRjYmlBZ0lDQjJZWElnZG1Gc2RXVnpJRDBnZEdocGN5NWZkbUZzZFdWek8xeHVJQ0FnSUhkb2FXeGxJQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BpQXdJQ1ltSUhSb2FYTXVYMmx1Um14cFoyaDBJRHdnYkdsdGFYUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WDJselVtVnpiMngyWldRb0tTa2djbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjJZWElnYVc1a1pYZ2dQU0J4ZFdWMVpTNXdiM0FvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY0hKdmJXbHpaVVoxYkdacGJHeGxaQ2gyWVd4MVpYTmJhVzVrWlhoZExDQnBibVJsZUNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1VFdGd2NHbHVaMUJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVgyWnBiSFJsY2lBOUlHWjFibU4wYVc5dUlDaGliMjlzWldGdWN5d2dkbUZzZFdWektTQjdYRzRnSUNBZ2RtRnlJR3hsYmlBOUlIWmhiSFZsY3k1c1pXNW5kR2c3WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJRzVsZHlCQmNuSmhlU2hzWlc0cE8xeHVJQ0FnSUhaaGNpQnFJRDBnTUR0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4bGJqc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hpYjI5c1pXRnVjMXRwWFNrZ2NtVjBXMm9ySzEwZ1BTQjJZV3gxWlhOYmFWMDdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRDNXNaVzVuZEdnZ1BTQnFPMXh1SUNBZ0lIUm9hWE11WDNKbGMyOXNkbVVvY21WMEtUdGNibjA3WEc1Y2JrMWhjSEJwYm1kUWNtOXRhWE5sUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbkJ5WlhObGNuWmxaRlpoYkhWbGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmNISmxjMlZ5ZG1Wa1ZtRnNkV1Z6TzF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnYldGd0tIQnliMjFwYzJWekxDQm1iaXdnYjNCMGFXOXVjeXdnWDJacGJIUmxjaWtnZTF4dUlDQWdJSFpoY2lCc2FXMXBkQ0E5SUhSNWNHVnZaaUJ2Y0hScGIyNXpJRDA5UFNCY0ltOWlhbVZqZEZ3aUlDWW1JRzl3ZEdsdmJuTWdJVDA5SUc1MWJHeGNiaUFnSUNBZ0lDQWdQeUJ2Y0hScGIyNXpMbU52Ym1OMWNuSmxibU41WEc0Z0lDQWdJQ0FnSURvZ01EdGNiaUFnSUNCc2FXMXBkQ0E5SUhSNWNHVnZaaUJzYVcxcGRDQTlQVDBnWENKdWRXMWlaWEpjSWlBbUpseHVJQ0FnSUNBZ0lDQnBjMFpwYm1sMFpTaHNhVzFwZENrZ0ppWWdiR2x0YVhRZ1BqMGdNU0EvSUd4cGJXbDBJRG9nTUR0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUUxaGNIQnBibWRRY205dGFYTmxRWEp5WVhrb2NISnZiV2x6WlhNc0lHWnVMQ0JzYVcxcGRDd2dYMlpwYkhSbGNpazdYRzU5WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtMWhjQ0E5SUdaMWJtTjBhVzl1SUNobWJpd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdabTRnSVQwOUlGd2lablZ1WTNScGIyNWNJaWtnY21WMGRYSnVJR0Z3YVZKbGFtVmpkR2x2YmloY0ltWnVJRzExYzNRZ1ltVWdZU0JtZFc1amRHbHZibHhjZFRBd01HRmNYSFV3TURCaElDQWdJRk5sWlNCb2RIUndPaTh2WjI5dkxtZHNMemt4Tm14S1NseGNkVEF3TUdGY0lpazdYRzVjYmlBZ0lDQnlaWFIxY200Z2JXRndLSFJvYVhNc0lHWnVMQ0J2Y0hScGIyNXpMQ0J1ZFd4c0tTNXdjbTl0YVhObEtDazdYRzU5TzF4dVhHNVFjbTl0YVhObExtMWhjQ0E5SUdaMWJtTjBhVzl1SUNod2NtOXRhWE5sY3l3Z1ptNHNJRzl3ZEdsdmJuTXNJRjltYVd4MFpYSXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR1p1SUNFOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUhKbGRIVnliaUJoY0dsU1pXcGxZM1JwYjI0b1hDSm1iaUJ0ZFhOMElHSmxJR0VnWm5WdVkzUnBiMjVjWEhVd01EQmhYRngxTURBd1lTQWdJQ0JUWldVZ2FIUjBjRG92TDJkdmJ5NW5iQzg1TVRac1NrcGNYSFV3TURCaFhDSXBPMXh1SUNBZ0lISmxkSFZ5YmlCdFlYQW9jSEp2YldselpYTXNJR1p1TENCdmNIUnBiMjV6TENCZlptbHNkR1Z5S1M1d2NtOXRhWE5sS0NrN1hHNTlPMXh1WEc1Y2JuMDdYRzVjYm4wc2Uxd2lMaTloYzNsdVl5NXFjMXdpT2pJc1hDSXVMM1YwYVd3dWFuTmNJam96T0gxZExESXdPbHRtZFc1amRHbHZiaWhmWkdWeVpYRmZMRzF2WkhWc1pTeGxlSEJ2Y25SektYdGNibHdpZFhObElITjBjbWxqZEZ3aU8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BWeHVablZ1WTNScGIyNG9VSEp2YldselpTd2dTVTVVUlZKT1FVd3NJSFJ5ZVVOdmJuWmxjblJVYjFCeWIyMXBjMlVzSUdGd2FWSmxhbVZqZEdsdmJpa2dlMXh1ZG1GeUlIVjBhV3dnUFNCZlpHVnlaWEZmS0Z3aUxpOTFkR2xzTG1welhDSXBPMXh1ZG1GeUlIUnllVU5oZEdOb0lEMGdkWFJwYkM1MGNubERZWFJqYUR0Y2JseHVVSEp2YldselpTNXRaWFJvYjJRZ1BTQm1kVzVqZEdsdmJpQW9abTRwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdadUlDRTlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRkJ5YjIxcGMyVXVWSGx3WlVWeWNtOXlLRndpWm00Z2JYVnpkQ0JpWlNCaElHWjFibU4wYVc5dVhGeDFNREF3WVZ4Y2RUQXdNR0VnSUNBZ1UyVmxJR2gwZEhBNkx5OW5iMjh1WjJ3dk9URTJiRXBLWEZ4MU1EQXdZVndpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlISmxkQ0E5SUc1bGR5QlFjbTl0YVhObEtFbE9WRVZTVGtGTUtUdGNiaUFnSUNBZ0lDQWdjbVYwTGw5allYQjBkWEpsVTNSaFkydFVjbUZqWlNncE8xeHVJQ0FnSUNBZ0lDQnlaWFF1WDNCMWMyaERiMjUwWlhoMEtDazdYRzRnSUNBZ0lDQWdJSFpoY2lCMllXeDFaU0E5SUhSeWVVTmhkR05vS0dadUtTNWhjSEJzZVNoMGFHbHpMQ0JoY21kMWJXVnVkSE1wTzF4dUlDQWdJQ0FnSUNCeVpYUXVYM0J2Y0VOdmJuUmxlSFFvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBMbDl5WlhOdmJIWmxSbkp2YlZONWJtTldZV3gxWlNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhRN1hHNGdJQ0FnZlR0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1WVhSMFpXMXdkQ0E5SUZCeWIyMXBjMlZiWENKMGNubGNJbDBnUFNCbWRXNWpkR2x2YmlBb1ptNHNJR0Z5WjNNc0lHTjBlQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWm00Z0lUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lYQnBVbVZxWldOMGFXOXVLRndpWm00Z2JYVnpkQ0JpWlNCaElHWjFibU4wYVc5dVhGeDFNREF3WVZ4Y2RUQXdNR0VnSUNBZ1UyVmxJR2gwZEhBNkx5OW5iMjh1WjJ3dk9URTJiRXBLWEZ4MU1EQXdZVndpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJRzVsZHlCUWNtOXRhWE5sS0VsT1ZFVlNUa0ZNS1R0Y2JpQWdJQ0J5WlhRdVgyTmhjSFIxY21WVGRHRmphMVJ5WVdObEtDazdYRzRnSUNBZ2NtVjBMbDl3ZFhOb1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUhaaGNpQjJZV3gxWlNBOUlIVjBhV3d1YVhOQmNuSmhlU2hoY21kektWeHVJQ0FnSUNBZ0lDQS9JSFJ5ZVVOaGRHTm9LR1p1S1M1aGNIQnNlU2hqZEhnc0lHRnlaM01wWEc0Z0lDQWdJQ0FnSURvZ2RISjVRMkYwWTJnb1ptNHBMbU5oYkd3b1kzUjRMQ0JoY21kektUdGNiaUFnSUNCeVpYUXVYM0J2Y0VOdmJuUmxlSFFvS1R0Y2JpQWdJQ0J5WlhRdVgzSmxjMjlzZG1WR2NtOXRVM2x1WTFaaGJIVmxLSFpoYkhWbEtUdGNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgzSmxjMjlzZG1WR2NtOXRVM2x1WTFaaGJIVmxJRDBnWm5WdVkzUnBiMjRnS0haaGJIVmxLU0I3WEc0Z0lDQWdhV1lnS0haaGJIVmxJRDA5UFNCMWRHbHNMbVZ5Y205eVQySnFLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0psYW1WamRFTmhiR3hpWVdOcktIWmhiSFZsTG1Vc0lHWmhiSE5sTENCMGNuVmxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5eVpYTnZiSFpsUTJGc2JHSmhZMnNvZG1Gc2RXVXNJSFJ5ZFdVcE8xeHVJQ0FnSUgxY2JuMDdYRzU5TzF4dVhHNTlMSHRjSWk0dmRYUnBiQzVxYzF3aU9qTTRmVjBzTWpFNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0ZCeWIyMXBjMlVwSUh0Y2JuWmhjaUIxZEdsc0lEMGdYMlJsY21WeFh5aGNJaTR2ZFhScGJDNXFjMXdpS1R0Y2JuWmhjaUJoYzNsdVl5QTlJRjlrWlhKbGNWOG9YQ0l1TDJGemVXNWpMbXB6WENJcE8xeHVkbUZ5SUhSeWVVTmhkR05vSUQwZ2RYUnBiQzUwY25sRFlYUmphRHRjYm5aaGNpQmxjbkp2Y2s5aWFpQTlJSFYwYVd3dVpYSnliM0pQWW1vN1hHNWNibVoxYm1OMGFXOXVJSE53Y21WaFpFRmtZWEIwWlhJb2RtRnNMQ0J1YjJSbFltRmpheWtnZTF4dUlDQWdJSFpoY2lCd2NtOXRhWE5sSUQwZ2RHaHBjenRjYmlBZ0lDQnBaaUFvSVhWMGFXd3VhWE5CY25KaGVTaDJZV3dwS1NCeVpYUjFjbTRnYzNWalkyVnpjMEZrWVhCMFpYSXVZMkZzYkNod2NtOXRhWE5sTENCMllXd3NJRzV2WkdWaVlXTnJLVHRjYmlBZ0lDQjJZWElnY21WMElEMGdkSEo1UTJGMFkyZ29ibTlrWldKaFkyc3BMbUZ3Y0d4NUtIQnliMjFwYzJVdVgySnZkVzVrVkc4c0lGdHVkV3hzWFM1amIyNWpZWFFvZG1Gc0tTazdYRzRnSUNBZ2FXWWdLSEpsZENBOVBUMGdaWEp5YjNKUFltb3BJSHRjYmlBZ0lDQWdJQ0FnWVhONWJtTXVkR2h5YjNkTVlYUmxjaWh5WlhRdVpTazdYRzRnSUNBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCemRXTmpaWE56UVdSaGNIUmxjaWgyWVd3c0lHNXZaR1ZpWVdOcktTQjdYRzRnSUNBZ2RtRnlJSEJ5YjIxcGMyVWdQU0IwYUdsek8xeHVJQ0FnSUhaaGNpQnlaV05sYVhabGNpQTlJSEJ5YjIxcGMyVXVYMkp2ZFc1a1ZHODdYRzRnSUNBZ2RtRnlJSEpsZENBOUlIWmhiQ0E5UFQwZ2RXNWtaV1pwYm1Wa1hHNGdJQ0FnSUNBZ0lEOGdkSEo1UTJGMFkyZ29ibTlrWldKaFkyc3BMbU5oYkd3b2NtVmpaV2wyWlhJc0lHNTFiR3dwWEc0Z0lDQWdJQ0FnSURvZ2RISjVRMkYwWTJnb2JtOWtaV0poWTJzcExtTmhiR3dvY21WalpXbDJaWElzSUc1MWJHd3NJSFpoYkNrN1hHNGdJQ0FnYVdZZ0tISmxkQ0E5UFQwZ1pYSnliM0pQWW1vcElIdGNiaUFnSUNBZ0lDQWdZWE41Ym1NdWRHaHliM2RNWVhSbGNpaHlaWFF1WlNrN1hHNGdJQ0FnZlZ4dWZWeHVablZ1WTNScGIyNGdaWEp5YjNKQlpHRndkR1Z5S0hKbFlYTnZiaXdnYm05a1pXSmhZMnNwSUh0Y2JpQWdJQ0IyWVhJZ2NISnZiV2x6WlNBOUlIUm9hWE03WEc0Z0lDQWdhV1lnS0NGeVpXRnpiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFJoY21kbGRDQTlJSEJ5YjIxcGMyVXVYM1JoY21kbGRDZ3BPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JtVjNVbVZoYzI5dUlEMGdkR0Z5WjJWMExsOW5aWFJEWVhKeWFXVmtVM1JoWTJ0VWNtRmpaU2dwTzF4dUlDQWdJQ0FnSUNCdVpYZFNaV0Z6YjI0dVkyRjFjMlVnUFNCeVpXRnpiMjQ3WEc0Z0lDQWdJQ0FnSUhKbFlYTnZiaUE5SUc1bGQxSmxZWE52Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJSFJ5ZVVOaGRHTm9LRzV2WkdWaVlXTnJLUzVqWVd4c0tIQnliMjFwYzJVdVgySnZkVzVrVkc4c0lISmxZWE52YmlrN1hHNGdJQ0FnYVdZZ0tISmxkQ0E5UFQwZ1pYSnliM0pQWW1vcElIdGNiaUFnSUNBZ0lDQWdZWE41Ym1NdWRHaHliM2RNWVhSbGNpaHlaWFF1WlNrN1hHNGdJQ0FnZlZ4dWZWeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVoYzBOaGJHeGlZV05ySUQwZ1hHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXViMlJsYVdaNUlEMGdablZ1WTNScGIyNGdLRzV2WkdWaVlXTnJMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ1YjJSbFltRmpheUE5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHRmtZWEIwWlhJZ1BTQnpkV05qWlhOelFXUmhjSFJsY2p0Y2JpQWdJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJuTWdJVDA5SUhWdVpHVm1hVzVsWkNBbUppQlBZbXBsWTNRb2IzQjBhVzl1Y3lrdWMzQnlaV0ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoWkdGd2RHVnlJRDBnYzNCeVpXRmtRV1JoY0hSbGNqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxsOTBhR1Z1S0Z4dUlDQWdJQ0FnSUNBZ0lDQWdZV1JoY0hSbGNpeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWeWNtOXlRV1JoY0hSbGNpeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWdVpHVm1hVzVsWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbFltRmphMXh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYm4wN1hHNTlPMXh1WEc1OUxIdGNJaTR2WVhONWJtTXVhbk5jSWpveUxGd2lMaTkxZEdsc0xtcHpYQ0k2TXpoOVhTd3lNanBiWm5WdVkzUnBiMjRvWDJSbGNtVnhYeXh0YjJSMWJHVXNaWGh3YjNKMGN5bDdYRzVjSW5WelpTQnpkSEpwWTNSY0lqdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9VSEp2YldselpTd2dVSEp2YldselpVRnljbUY1S1NCN1hHNTJZWElnZFhScGJDQTlJRjlrWlhKbGNWOG9YQ0l1TDNWMGFXd3Vhbk5jSWlrN1hHNTJZWElnWVhONWJtTWdQU0JmWkdWeVpYRmZLRndpTGk5aGMzbHVZeTVxYzF3aUtUdGNiblpoY2lCMGNubERZWFJqYUNBOUlIVjBhV3d1ZEhKNVEyRjBZMmc3WEc1MllYSWdaWEp5YjNKUFltb2dQU0IxZEdsc0xtVnljbTl5VDJKcU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzV3Y205bmNtVnpjMlZrSUQwZ1puVnVZM1JwYjI0Z0tHaGhibVJzWlhJcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZkR2hsYmloMWJtUmxabWx1WldRc0lIVnVaR1ZtYVc1bFpDd2dhR0Z1Wkd4bGNpd2dkVzVrWldacGJtVmtMQ0IxYm1SbFptbHVaV1FwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDNCeWIyZHlaWE56SUQwZ1puVnVZM1JwYjI0Z0tIQnliMmR5WlhOelZtRnNkV1VwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVmYVhOR2IyeHNiM2RwYm1kUGNrWjFiR1pwYkd4bFpFOXlVbVZxWldOMFpXUW9LU2tnY21WMGRYSnVPMXh1SUNBZ0lIUm9hWE11WDNSaGNtZGxkQ2dwTGw5d2NtOW5jbVZ6YzFWdVkyaGxZMnRsWkNod2NtOW5jbVZ6YzFaaGJIVmxLVHRjYmx4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDNCeWIyZHlaWE56U0dGdVpHeGxja0YwSUQwZ1puVnVZM1JwYjI0Z0tHbHVaR1Y0S1NCN1hHNGdJQ0FnY21WMGRYSnVJR2x1WkdWNElEMDlQU0F3WEc0Z0lDQWdJQ0FnSUQ4Z2RHaHBjeTVmY0hKdlozSmxjM05JWVc1a2JHVnlNRnh1SUNBZ0lDQWdJQ0E2SUhSb2FYTmJLR2x1WkdWNElEdzhJRElwSUNzZ2FXNWtaWGdnTFNBMUlDc2dNbDA3WEc1OU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVmWkc5UWNtOW5jbVZ6YzFkcGRHZ2dQU0JtZFc1amRHbHZiaUFvY0hKdlozSmxjM05wYjI0cElIdGNiaUFnSUNCMllYSWdjSEp2WjNKbGMzTldZV3gxWlNBOUlIQnliMmR5WlhOemFXOXVMblpoYkhWbE8xeHVJQ0FnSUhaaGNpQm9ZVzVrYkdWeUlEMGdjSEp2WjNKbGMzTnBiMjR1YUdGdVpHeGxjanRjYmlBZ0lDQjJZWElnY0hKdmJXbHpaU0E5SUhCeWIyZHlaWE56YVc5dUxuQnliMjFwYzJVN1hHNGdJQ0FnZG1GeUlISmxZMlZwZG1WeUlEMGdjSEp2WjNKbGMzTnBiMjR1Y21WalpXbDJaWEk3WEc1Y2JpQWdJQ0IyWVhJZ2NtVjBJRDBnZEhKNVEyRjBZMmdvYUdGdVpHeGxjaWt1WTJGc2JDaHlaV05sYVhabGNpd2djSEp2WjNKbGMzTldZV3gxWlNrN1hHNGdJQ0FnYVdZZ0tISmxkQ0E5UFQwZ1pYSnliM0pQWW1vcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbGRDNWxJQ0U5SUc1MWJHd2dKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkQzVsTG01aGJXVWdJVDA5SUZ3aVUzUnZjRkJ5YjJkeVpYTnpVSEp2Y0dGbllYUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIUnlZV05sSUQwZ2RYUnBiQzVqWVc1QmRIUmhZMmhVY21GalpTaHlaWFF1WlNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lISmxkQzVsSURvZ2JtVjNJRVZ5Y205eUtIVjBhV3d1ZEc5VGRISnBibWNvY21WMExtVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliMjFwYzJVdVgyRjBkR0ZqYUVWNGRISmhWSEpoWTJVb2RISmhZMlVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjSEp2YldselpTNWZjSEp2WjNKbGMzTW9jbVYwTG1VcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHlaWFFnYVc1emRHRnVZMlZ2WmlCUWNtOXRhWE5sS1NCN1hHNGdJQ0FnSUNBZ0lISmxkQzVmZEdobGJpaHdjbTl0YVhObExsOXdjbTluY21WemN5d2diblZzYkN3Z2JuVnNiQ3dnY0hKdmJXbHpaU3dnZFc1a1pXWnBibVZrS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J3Y205dGFYTmxMbDl3Y205bmNtVnpjeWh5WlhRcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgzQnliMmR5WlhOelZXNWphR1ZqYTJWa0lEMGdablZ1WTNScGIyNGdLSEJ5YjJkeVpYTnpWbUZzZFdVcElIdGNiaUFnSUNCMllYSWdiR1Z1SUQwZ2RHaHBjeTVmYkdWdVozUm9LQ2s3WEc0Z0lDQWdkbUZ5SUhCeWIyZHlaWE56SUQwZ2RHaHBjeTVmY0hKdlozSmxjM003WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc0N0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdhR0Z1Wkd4bGNpQTlJSFJvYVhNdVgzQnliMmR5WlhOelNHRnVaR3hsY2tGMEtHa3BPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NISnZiV2x6WlNBOUlIUm9hWE11WDNCeWIyMXBjMlZCZENocEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0NFb2NISnZiV2x6WlNCcGJuTjBZVzVqWlc5bUlGQnliMjFwYzJVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjbVZqWldsMlpYSWdQU0IwYUdsekxsOXlaV05sYVhabGNrRjBLR2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJvWVc1a2JHVnlJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVc1a2JHVnlMbU5oYkd3b2NtVmpaV2wyWlhJc0lIQnliMmR5WlhOelZtRnNkV1VzSUhCeWIyMXBjMlVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h5WldObGFYWmxjaUJwYm5OMFlXNWpaVzltSUZCeWIyMXBjMlZCY25KaGVTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWhjbVZqWldsMlpYSXVYMmx6VW1WemIyeDJaV1FvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMlZwZG1WeUxsOXdjbTl0YVhObFVISnZaM0psYzNObFpDaHdjbTluY21WemMxWmhiSFZsTENCd2NtOXRhWE5sS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJwYm5WbE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCb1lXNWtiR1Z5SUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6ZVc1akxtbHVkbTlyWlNoMGFHbHpMbDlrYjFCeWIyZHlaWE56VjJsMGFDd2dkR2hwY3l3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhibVJzWlhJNklHaGhibVJzWlhJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZiV2x6WlRvZ2NISnZiV2x6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTmxhWFpsY2pvZ2RHaHBjeTVmY21WalpXbDJaWEpCZENocEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ2NISnZaM0psYzNOV1lXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzbHVZeTVwYm5admEyVW9jSEp2WjNKbGMzTXNJSEJ5YjIxcGMyVXNJSEJ5YjJkeVpYTnpWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYm4wN1hHNWNibjBzZTF3aUxpOWhjM2x1WXk1cWMxd2lPaklzWENJdUwzVjBhV3d1YW5OY0lqb3pPSDFkTERJek9sdG1kVzVqZEdsdmJpaGZaR1Z5WlhGZkxHMXZaSFZzWlN4bGVIQnZjblJ6S1h0Y2Jsd2lkWE5sSUhOMGNtbGpkRndpTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlncElIdGNiblpoY2lCdFlXdGxVMlZzWmxKbGMyOXNkWFJwYjI1RmNuSnZjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGUjVjR1ZGY25KdmNpaGNJbU5wY21OMWJHRnlJSEJ5YjIxcGMyVWdjbVZ6YjJ4MWRHbHZiaUJqYUdGcGJseGNkVEF3TUdGY1hIVXdNREJoSUNBZ0lGTmxaU0JvZEhSd09pOHZaMjl2TG1kc0wweG9SbkJ2TUZ4Y2RUQXdNR0ZjSWlrN1hHNTlPMXh1ZG1GeUlISmxabXhsWTNRZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVXVVSEp2YldselpVbHVjM0JsWTNScGIyNG9kR2hwY3k1ZmRHRnlaMlYwS0NrcE8xeHVmVHRjYm5aaGNpQmhjR2xTWldwbFkzUnBiMjRnUFNCbWRXNWpkR2x2YmlodGMyY3BJSHRjYmlBZ0lDQnlaWFIxY200Z1VISnZiV2x6WlM1eVpXcGxZM1FvYm1WM0lGUjVjR1ZGY25KdmNpaHRjMmNwS1R0Y2JuMDdYRzVjYm5aaGNpQjFkR2xzSUQwZ1gyUmxjbVZ4WHloY0lpNHZkWFJwYkM1cWMxd2lLVHRjYmx4dWRtRnlJR2RsZEVSdmJXRnBianRjYm1sbUlDaDFkR2xzTG1selRtOWtaU2tnZTF4dUlDQWdJR2RsZEVSdmJXRnBiaUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY21WMElEMGdjSEp2WTJWemN5NWtiMjFoYVc0N1hHNGdJQ0FnSUNBZ0lHbG1JQ2h5WlhRZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnY21WMElEMGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNCOU8xeHVmU0JsYkhObElIdGNiaUFnSUNCblpYUkViMjFoYVc0Z1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzUxYkd3N1hHNGdJQ0FnZlR0Y2JuMWNiblYwYVd3dWJtOTBSVzUxYldWeVlXSnNaVkJ5YjNBb1VISnZiV2x6WlN3Z1hDSmZaMlYwUkc5dFlXbHVYQ0lzSUdkbGRFUnZiV0ZwYmlrN1hHNWNiblpoY2lCaGMzbHVZeUE5SUY5a1pYSmxjVjhvWENJdUwyRnplVzVqTG1welhDSXBPMXh1ZG1GeUlHVnljbTl5Y3lBOUlGOWtaWEpsY1Y4b1hDSXVMMlZ5Y205eWN5NXFjMXdpS1R0Y2JuWmhjaUJVZVhCbFJYSnliM0lnUFNCUWNtOXRhWE5sTGxSNWNHVkZjbkp2Y2lBOUlHVnljbTl5Y3k1VWVYQmxSWEp5YjNJN1hHNVFjbTl0YVhObExsSmhibWRsUlhKeWIzSWdQU0JsY25KdmNuTXVVbUZ1WjJWRmNuSnZjanRjYmxCeWIyMXBjMlV1UTJGdVkyVnNiR0YwYVc5dVJYSnliM0lnUFNCbGNuSnZjbk11UTJGdVkyVnNiR0YwYVc5dVJYSnliM0k3WEc1UWNtOXRhWE5sTGxScGJXVnZkWFJGY25KdmNpQTlJR1Z5Y205eWN5NVVhVzFsYjNWMFJYSnliM0k3WEc1UWNtOXRhWE5sTGs5d1pYSmhkR2x2Ym1Gc1JYSnliM0lnUFNCbGNuSnZjbk11VDNCbGNtRjBhVzl1WVd4RmNuSnZjanRjYmxCeWIyMXBjMlV1VW1WcVpXTjBhVzl1UlhKeWIzSWdQU0JsY25KdmNuTXVUM0JsY21GMGFXOXVZV3hGY25KdmNqdGNibEJ5YjIxcGMyVXVRV2RuY21WbllYUmxSWEp5YjNJZ1BTQmxjbkp2Y25NdVFXZG5jbVZuWVhSbFJYSnliM0k3WEc1MllYSWdTVTVVUlZKT1FVd2dQU0JtZFc1amRHbHZiaWdwZTMwN1hHNTJZWElnUVZCUVRGa2dQU0I3ZlR0Y2JuWmhjaUJPUlZoVVgwWkpURlJGVWlBOUlIdGxPaUJ1ZFd4c2ZUdGNiblpoY2lCMGNubERiMjUyWlhKMFZHOVFjbTl0YVhObElEMGdYMlJsY21WeFh5aGNJaTR2ZEdobGJtRmliR1Z6TG1welhDSXBLRkJ5YjIxcGMyVXNJRWxPVkVWU1RrRk1LVHRjYm5aaGNpQlFjbTl0YVhObFFYSnlZWGtnUFZ4dUlDQWdJRjlrWlhKbGNWOG9YQ0l1TDNCeWIyMXBjMlZmWVhKeVlYa3Vhbk5jSWlrb1VISnZiV2x6WlN3Z1NVNVVSVkpPUVV3c1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBjbmxEYjI1MlpYSjBWRzlRY205dGFYTmxMQ0JoY0dsU1pXcGxZM1JwYjI0cE8xeHVkbUZ5SUVOaGNIUjFjbVZrVkhKaFkyVWdQU0JmWkdWeVpYRmZLRndpTGk5allYQjBkWEpsWkY5MGNtRmpaUzVxYzF3aUtTZ3BPMXh1ZG1GeUlHbHpSR1ZpZFdkbmFXNW5JRDBnWDJSbGNtVnhYeWhjSWk0dlpHVmlkV2RuWVdKcGJHbDBlUzVxYzF3aUtTaFFjbTl0YVhObExDQkRZWEIwZFhKbFpGUnlZV05sS1R0Y2JpQXZLbXB6YUdsdWRDQjFiblZ6WldRNlptRnNjMlVxTDF4dWRtRnlJR055WldGMFpVTnZiblJsZUhRZ1BWeHVJQ0FnSUY5a1pYSmxjVjhvWENJdUwyTnZiblJsZUhRdWFuTmNJaWtvVUhKdmJXbHpaU3dnUTJGd2RIVnlaV1JVY21GalpTd2dhWE5FWldKMVoyZHBibWNwTzF4dWRtRnlJRU5oZEdOb1JtbHNkR1Z5SUQwZ1gyUmxjbVZ4WHloY0lpNHZZMkYwWTJoZlptbHNkR1Z5TG1welhDSXBLRTVGV0ZSZlJrbE1WRVZTS1R0Y2JuWmhjaUJRY205dGFYTmxVbVZ6YjJ4MlpYSWdQU0JmWkdWeVpYRmZLRndpTGk5d2NtOXRhWE5sWDNKbGMyOXNkbVZ5TG1welhDSXBPMXh1ZG1GeUlHNXZaR1ZpWVdOclJtOXlVSEp2YldselpTQTlJRkJ5YjIxcGMyVlNaWE52YkhabGNpNWZibTlrWldKaFkydEdiM0pRY205dGFYTmxPMXh1ZG1GeUlHVnljbTl5VDJKcUlEMGdkWFJwYkM1bGNuSnZjazlpYWp0Y2JuWmhjaUIwY25sRFlYUmphQ0E5SUhWMGFXd3VkSEo1UTJGMFkyZzdYRzVtZFc1amRHbHZiaUJRY205dGFYTmxLSEpsYzI5c2RtVnlLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ5WlhOdmJIWmxjaUFoUFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSjBhR1VnY0hKdmJXbHpaU0JqYjI1emRISjFZM1J2Y2lCeVpYRjFhWEpsY3lCaElISmxjMjlzZG1WeUlHWjFibU4wYVc5dVhGeDFNREF3WVZ4Y2RUQXdNR0VnSUNBZ1UyVmxJR2gwZEhBNkx5OW5iMjh1WjJ3dlJVTXlNbGx1WEZ4MU1EQXdZVndpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXVZMjl1YzNSeWRXTjBiM0lnSVQwOUlGQnliMjFwYzJVcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSW5Sb1pTQndjbTl0YVhObElHTnZibk4wY25WamRHOXlJR05oYm01dmRDQmlaU0JwYm5admEyVmtJR1JwY21WamRHeDVYRngxTURBd1lWeGNkVEF3TUdFZ0lDQWdVMlZsSUdoMGRIQTZMeTluYjI4dVoyd3ZTM05KYkdkbFhGeDFNREF3WVZ3aUtUdGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NWZZbWwwUm1sbGJHUWdQU0F3TzF4dUlDQWdJSFJvYVhNdVgyWjFiR1pwYkd4dFpXNTBTR0Z1Wkd4bGNqQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdkR2hwY3k1ZmNtVnFaV04wYVc5dVNHRnVaR3hsY2pBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2RHaHBjeTVmY0hKdlozSmxjM05JWVc1a2JHVnlNQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0IwYUdsekxsOXdjbTl0YVhObE1DQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQjBhR2x6TGw5eVpXTmxhWFpsY2pBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2RHaHBjeTVmYzJWMGRHeGxaRlpoYkhWbElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lHbG1JQ2h5WlhOdmJIWmxjaUFoUFQwZ1NVNVVSVkpPUVV3cElIUm9hWE11WDNKbGMyOXNkbVZHY205dFVtVnpiMngyWlhJb2NtVnpiMngyWlhJcE8xeHVmVnh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1WnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1hDSmJiMkpxWldOMElGQnliMjFwYzJWZFhDSTdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWpZWFZuYUhRZ1BTQlFjbTl0YVhObExuQnliM1J2ZEhsd1pWdGNJbU5oZEdOb1hDSmRJRDBnWm5WdVkzUnBiMjRnS0dadUtTQjdYRzRnSUNBZ2RtRnlJR3hsYmlBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN1hHNGdJQ0FnYVdZZ0tHeGxiaUErSURFcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdOaGRHTm9TVzV6ZEdGdVkyVnpJRDBnYm1WM0lFRnljbUY1S0d4bGJpQXRJREVwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhaUE5SURBc0lHazdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnNaVzRnTFNBeE95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCcGRHVnRJRDBnWVhKbmRXMWxiblJ6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCcGRHVnRJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhSamFFbHVjM1JoYm1ObGMxdHFLeXRkSUQwZ2FYUmxiVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZCeWIyMXBjMlV1Y21WcVpXTjBLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dWSGx3WlVWeWNtOXlLRndpUTJGMFkyZ2dabWxzZEdWeUlHMTFjM1FnYVc1b1pYSnBkQ0JtY205dElFVnljbTl5SUc5eUlHSmxJR0VnYzJsdGNHeGxJSEJ5WldScFkyRjBaU0JtZFc1amRHbHZibHhjZFRBd01HRmNYSFV3TURCaElDQWdJRk5sWlNCb2RIUndPaTh2WjI5dkxtZHNMMjg0Tkc4Mk9GeGNkVEF3TUdGY0lpa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR05oZEdOb1NXNXpkR0Z1WTJWekxteGxibWQwYUNBOUlHbzdYRzRnSUNBZ0lDQWdJR1p1SUQwZ1lYSm5kVzFsYm5SelcybGRPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyRjBZMmhHYVd4MFpYSWdQU0J1WlhjZ1EyRjBZMmhHYVd4MFpYSW9ZMkYwWTJoSmJuTjBZVzVqWlhNc0lHWnVMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDNSb1pXNG9kVzVrWldacGJtVmtMQ0JqWVhSamFFWnBiSFJsY2k1a2IwWnBiSFJsY2l3Z2RXNWtaV1pwYm1Wa0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGMFkyaEdhV3gwWlhJc0lIVnVaR1ZtYVc1bFpDazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTBhR1Z1S0hWdVpHVm1hVzVsWkN3Z1ptNHNJSFZ1WkdWbWFXNWxaQ3dnZFc1a1pXWnBibVZrTENCMWJtUmxabWx1WldRcE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWNtVm1iR1ZqZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmZEdobGJpaHlaV1pzWldOMExDQnlaV1pzWldOMExDQjFibVJsWm1sdVpXUXNJSFJvYVhNc0lIVnVaR1ZtYVc1bFpDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNTBhR1Z1SUQwZ1puVnVZM1JwYjI0Z0tHUnBaRVoxYkdacGJHd3NJR1JwWkZKbGFtVmpkQ3dnWkdsa1VISnZaM0psYzNNcElIdGNiaUFnSUNCcFppQW9hWE5FWldKMVoyZHBibWNvS1NBbUppQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNQ0FtSmx4dUlDQWdJQ0FnSUNCMGVYQmxiMllnWkdsa1JuVnNabWxzYkNBaFBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbVhHNGdJQ0FnSUNBZ0lIUjVjR1Z2WmlCa2FXUlNaV3BsWTNRZ0lUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYlhObklEMGdYQ0l1ZEdobGJpZ3BJRzl1YkhrZ1lXTmpaWEIwY3lCbWRXNWpkR2x2Ym5NZ1luVjBJSGRoY3lCd1lYTnpaV1E2SUZ3aUlDdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFkR2xzTG1Oc1lYTnpVM1J5YVc1bktHUnBaRVoxYkdacGJHd3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMXpaeUFyUFNCY0lpd2dYQ0lnS3lCMWRHbHNMbU5zWVhOelUzUnlhVzVuS0dScFpGSmxhbVZqZENrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmQyRnliaWh0YzJjcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmRHaGxiaWhrYVdSR2RXeG1hV3hzTENCa2FXUlNaV3BsWTNRc0lHUnBaRkJ5YjJkeVpYTnpMRnh1SUNBZ0lDQWdJQ0IxYm1SbFptbHVaV1FzSUhWdVpHVm1hVzVsWkNrN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1a2IyNWxJRDBnWm5WdVkzUnBiMjRnS0dScFpFWjFiR1pwYkd3c0lHUnBaRkpsYW1WamRDd2daR2xrVUhKdlozSmxjM01wSUh0Y2JpQWdJQ0IyWVhJZ2NISnZiV2x6WlNBOUlIUm9hWE11WDNSb1pXNG9aR2xrUm5Wc1ptbHNiQ3dnWkdsa1VtVnFaV04wTENCa2FXUlFjbTluY21WemN5eGNiaUFnSUNBZ0lDQWdkVzVrWldacGJtVmtMQ0IxYm1SbFptbHVaV1FwTzF4dUlDQWdJSEJ5YjIxcGMyVXVYM05sZEVselJtbHVZV3dvS1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG5Od2NtVmhaQ0E5SUdaMWJtTjBhVzl1SUNoa2FXUkdkV3htYVd4c0xDQmthV1JTWldwbFkzUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVoYkd3b0tTNWZkR2hsYmloa2FXUkdkV3htYVd4c0xDQmthV1JTWldwbFkzUXNJSFZ1WkdWbWFXNWxaQ3dnUVZCUVRGa3NJSFZ1WkdWbWFXNWxaQ2s3WEc1OU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVwYzBOaGJtTmxiR3hoWW14bElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQWhkR2hwY3k1cGMxSmxjMjlzZG1Wa0tDa2dKaVpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZMkZ1WTJWc2JHRmliR1VvS1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG5SdlNsTlBUaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMllYSWdjbVYwSUQwZ2UxeHVJQ0FnSUNBZ0lDQnBjMFoxYkdacGJHeGxaRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJR2x6VW1WcVpXTjBaV1E2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0JtZFd4bWFXeHNiV1Z1ZEZaaGJIVmxPaUIxYm1SbFptbHVaV1FzWEc0Z0lDQWdJQ0FnSUhKbGFtVmpkR2x2YmxKbFlYTnZiam9nZFc1a1pXWnBibVZrWEc0Z0lDQWdmVHRjYmlBZ0lDQnBaaUFvZEdocGN5NXBjMFoxYkdacGJHeGxaQ2dwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkQzVtZFd4bWFXeHNiV1Z1ZEZaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlNncE8xeHVJQ0FnSUNBZ0lDQnlaWFF1YVhOR2RXeG1hV3hzWldRZ1BTQjBjblZsTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NXBjMUpsYW1WamRHVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBMbkpsYW1WamRHbHZibEpsWVhOdmJpQTlJSFJvYVhNdWNtVmhjMjl1S0NrN1hHNGdJQ0FnSUNBZ0lISmxkQzVwYzFKbGFtVmpkR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhKbGREdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtRnNiQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJWQmNuSmhlU2gwYUdsektTNXdjbTl0YVhObEtDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWxjbkp2Y2lBOUlHWjFibU4wYVc5dUlDaG1iaWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1OaGRXZG9kQ2gxZEdsc0xtOXlhV2RwYm1GMFpYTkdjbTl0VW1WcVpXTjBhVzl1TENCbWJpazdYRzU5TzF4dVhHNVFjbTl0YVhObExtbHpJRDBnWm5WdVkzUnBiMjRnS0haaGJDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMllXd2dhVzV6ZEdGdVkyVnZaaUJRY205dGFYTmxPMXh1ZlR0Y2JseHVVSEp2YldselpTNW1jbTl0VG05a1pTQTlJR1oxYm1OMGFXOXVLR1p1S1NCN1hHNGdJQ0FnZG1GeUlISmxkQ0E5SUc1bGR5QlFjbTl0YVhObEtFbE9WRVZTVGtGTUtUdGNiaUFnSUNCMllYSWdjbVZ6ZFd4MElEMGdkSEo1UTJGMFkyZ29abTRwS0c1dlpHVmlZV05yUm05eVVISnZiV2x6WlNoeVpYUXBLVHRjYmlBZ0lDQnBaaUFvY21WemRXeDBJRDA5UFNCbGNuSnZjazlpYWlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFF1WDNKbGFtVmpkRU5oYkd4aVlXTnJLSEpsYzNWc2RDNWxMQ0IwY25WbExDQjBjblZsS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlISmxkRHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVZV3hzSUQwZ1puVnVZM1JwYjI0Z0tIQnliMjFwYzJWektTQjdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObFFYSnlZWGtvY0hKdmJXbHpaWE1wTG5CeWIyMXBjMlVvS1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1WkdWbVpYSWdQU0JRY205dGFYTmxMbkJsYm1ScGJtY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZG1GeUlIQnliMjFwYzJVZ1BTQnVaWGNnVUhKdmJXbHpaU2hKVGxSRlVrNUJUQ2s3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxVbVZ6YjJ4MlpYSW9jSEp2YldselpTazdYRzU5TzF4dVhHNVFjbTl0YVhObExtTmhjM1FnUFNCbWRXNWpkR2x2YmlBb2IySnFLU0I3WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJSFJ5ZVVOdmJuWmxjblJVYjFCeWIyMXBjMlVvYjJKcUtUdGNiaUFnSUNCcFppQW9JU2h5WlhRZ2FXNXpkR0Z1WTJWdlppQlFjbTl0YVhObEtTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RtRnNJRDBnY21WME8xeHVJQ0FnSUNBZ0lDQnlaWFFnUFNCdVpYY2dVSEp2YldselpTaEpUbFJGVWs1QlRDazdYRzRnSUNBZ0lDQWdJSEpsZEM1ZlpuVnNabWxzYkZWdVkyaGxZMnRsWkNoMllXd3BPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVmVHRjYmx4dVVISnZiV2x6WlM1eVpYTnZiSFpsSUQwZ1VISnZiV2x6WlM1bWRXeG1hV3hzWldRZ1BTQlFjbTl0YVhObExtTmhjM1E3WEc1Y2JsQnliMjFwYzJVdWNtVnFaV04wSUQwZ1VISnZiV2x6WlM1eVpXcGxZM1JsWkNBOUlHWjFibU4wYVc5dUlDaHlaV0Z6YjI0cElIdGNiaUFnSUNCMllYSWdjbVYwSUQwZ2JtVjNJRkJ5YjIxcGMyVW9TVTVVUlZKT1FVd3BPMXh1SUNBZ0lISmxkQzVmWTJGd2RIVnlaVk4wWVdOclZISmhZMlVvS1R0Y2JpQWdJQ0J5WlhRdVgzSmxhbVZqZEVOaGJHeGlZV05yS0hKbFlYTnZiaXdnZEhKMVpTazdYRzRnSUNBZ2NtVjBkWEp1SUhKbGREdGNibjA3WEc1Y2JsQnliMjFwYzJVdWMyVjBVMk5vWldSMWJHVnlJRDBnWm5WdVkzUnBiMjRvWm00cElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHWnVJQ0U5UFNCY0ltWjFibU4wYVc5dVhDSXBJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWENKbWJpQnRkWE4wSUdKbElHRWdablZ1WTNScGIyNWNYSFV3TURCaFhGeDFNREF3WVNBZ0lDQlRaV1VnYUhSMGNEb3ZMMmR2Ynk1bmJDODVNVFpzU2twY1hIVXdNREJoWENJcE8xeHVJQ0FnSUhaaGNpQndjbVYySUQwZ1lYTjVibU11WDNOamFHVmtkV3hsTzF4dUlDQWdJR0Z6ZVc1akxsOXpZMmhsWkhWc1pTQTlJR1p1TzF4dUlDQWdJSEpsZEhWeWJpQndjbVYyTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDNSb1pXNGdQU0JtZFc1amRHbHZiaUFvWEc0Z0lDQWdaR2xrUm5Wc1ptbHNiQ3hjYmlBZ0lDQmthV1JTWldwbFkzUXNYRzRnSUNBZ1pHbGtVSEp2WjNKbGMzTXNYRzRnSUNBZ2NtVmpaV2wyWlhJc1hHNGdJQ0FnYVc1MFpYSnVZV3hFWVhSaFhHNHBJSHRjYmlBZ0lDQjJZWElnYUdGMlpVbHVkR1Z5Ym1Gc1JHRjBZU0E5SUdsdWRHVnlibUZzUkdGMFlTQWhQVDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJSFpoY2lCeVpYUWdQU0JvWVhabFNXNTBaWEp1WVd4RVlYUmhJRDhnYVc1MFpYSnVZV3hFWVhSaElEb2dibVYzSUZCeWIyMXBjMlVvU1U1VVJWSk9RVXdwTzF4dVhHNGdJQ0FnYVdZZ0tDRm9ZWFpsU1c1MFpYSnVZV3hFWVhSaEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEM1ZmNISnZjR0ZuWVhSbFJuSnZiU2gwYUdsekxDQTBJSHdnTVNrN1hHNGdJQ0FnSUNBZ0lISmxkQzVmWTJGd2RIVnlaVk4wWVdOclZISmhZMlVvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ2RHRnlaMlYwSUQwZ2RHaHBjeTVmZEdGeVoyVjBLQ2s3WEc0Z0lDQWdhV1lnS0hSaGNtZGxkQ0FoUFQwZ2RHaHBjeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9jbVZqWldsMlpYSWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2NtVmpaV2wyWlhJZ1BTQjBhR2x6TGw5aWIzVnVaRlJ2TzF4dUlDQWdJQ0FnSUNCcFppQW9JV2hoZG1WSmJuUmxjbTVoYkVSaGRHRXBJSEpsZEM1ZmMyVjBTWE5OYVdkeVlYUmxaQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFpoY2lCallXeHNZbUZqYTBsdVpHVjRJRDBnZEdGeVoyVjBMbDloWkdSRFlXeHNZbUZqYTNNb1pHbGtSblZzWm1sc2JDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JwWkZKbGFtVmpkQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdScFpGQnliMmR5WlhOekxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpaV2wyWlhJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5aWFJFYjIxaGFXNG9LU2s3WEc1Y2JpQWdJQ0JwWmlBb2RHRnlaMlYwTGw5cGMxSmxjMjlzZG1Wa0tDa2dKaVlnSVhSaGNtZGxkQzVmYVhOVFpYUjBiR1ZRY205dGFYTmxjMUYxWlhWbFpDZ3BLU0I3WEc0Z0lDQWdJQ0FnSUdGemVXNWpMbWx1ZG05clpTaGNiaUFnSUNBZ0lDQWdJQ0FnSUhSaGNtZGxkQzVmYzJWMGRHeGxVSEp2YldselpVRjBVRzl6ZEZKbGMyOXNkWFJwYjI0c0lIUmhjbWRsZEN3Z1kyRnNiR0poWTJ0SmJtUmxlQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlISmxkRHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDl6WlhSMGJHVlFjbTl0YVhObFFYUlFiM04wVW1WemIyeDFkR2x2YmlBOUlHWjFibU4wYVc5dUlDaHBibVJsZUNrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TGw5cGMxSmxhbVZqZEdsdmJsVnVhR0Z1Wkd4bFpDZ3BLU0IwYUdsekxsOTFibk5sZEZKbGFtVmpkR2x2YmtselZXNW9ZVzVrYkdWa0tDazdYRzRnSUNBZ2RHaHBjeTVmYzJWMGRHeGxVSEp2YldselpVRjBLR2x1WkdWNEtUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXNaVzVuZEdnZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJKcGRFWnBaV3hrSUNZZ01UTXhNRGN4TzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDJselJtOXNiRzkzYVc1blQzSkdkV3htYVd4c1pXUlBjbEpsYW1WamRHVmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvZEdocGN5NWZZbWwwUm1sbGJHUWdKaUE1TXprMU1qUXdPVFlwSUQ0Z01EdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXBjMFp2Ykd4dmQybHVaeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXVYMkpwZEVacFpXeGtJQ1lnTlRNMk9EY3dPVEV5S1NBOVBUMGdOVE0yT0Rjd09URXlPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYM05sZEV4bGJtZDBhQ0E5SUdaMWJtTjBhVzl1SUNoc1pXNHBJSHRjYmlBZ0lDQjBhR2x6TGw5aWFYUkdhV1ZzWkNBOUlDaDBhR2x6TGw5aWFYUkdhV1ZzWkNBbUlDMHhNekV3TnpJcElIeGNiaUFnSUNBZ0lDQWdLR3hsYmlBbUlERXpNVEEzTVNrN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1ZmMyVjBSblZzWm1sc2JHVmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVYMkpwZEVacFpXeGtJRDBnZEdocGN5NWZZbWwwUm1sbGJHUWdmQ0F5TmpnME16VTBOVFk3WEc1OU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVmYzJWMFVtVnFaV04wWldRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkR2hwY3k1ZlltbDBSbWxsYkdRZ1BTQjBhR2x6TGw5aWFYUkdhV1ZzWkNCOElERXpOREl4TnpjeU9EdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXpaWFJHYjJ4c2IzZHBibWNnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RHaHBjeTVmWW1sMFJtbGxiR1FnUFNCMGFHbHpMbDlpYVhSR2FXVnNaQ0I4SURVek5qZzNNRGt4TWp0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5elpYUkpjMFpwYm1Gc0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVgySnBkRVpwWld4a0lEMGdkR2hwY3k1ZlltbDBSbWxsYkdRZ2ZDQXpNelUxTkRRek1qdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXBjMFpwYm1Gc0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1ZlltbDBSbWxsYkdRZ0ppQXpNelUxTkRRek1pa2dQaUF3TzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDJOaGJtTmxiR3hoWW14bElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1ZlltbDBSbWxsYkdRZ0ppQTJOekV3T0RnMk5Da2dQaUF3TzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDNObGRFTmhibU5sYkd4aFlteGxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVYMkpwZEVacFpXeGtJRDBnZEdocGN5NWZZbWwwUm1sbGJHUWdmQ0EyTnpFd09EZzJORHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDkxYm5ObGRFTmhibU5sYkd4aFlteGxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVYMkpwZEVacFpXeGtJRDBnZEdocGN5NWZZbWwwUm1sbGJHUWdKaUFvZmpZM01UQTRPRFkwS1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5elpYUkpjMDFwWjNKaGRHVmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVYMkpwZEVacFpXeGtJRDBnZEdocGN5NWZZbWwwUm1sbGJHUWdmQ0EwTVRrME16QTBPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYM1Z1YzJWMFNYTk5hV2R5WVhSbFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IwYUdsekxsOWlhWFJHYVdWc1pDQTlJSFJvYVhNdVgySnBkRVpwWld4a0lDWWdLSDQwTVRrME16QTBLVHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDlwYzAxcFozSmhkR1ZrSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTVmWW1sMFJtbGxiR1FnSmlBME1UazBNekEwS1NBK0lEQTdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWZjbVZqWldsMlpYSkJkQ0E5SUdaMWJtTjBhVzl1SUNocGJtUmxlQ2tnZTF4dUlDQWdJSFpoY2lCeVpYUWdQU0JwYm1SbGVDQTlQVDBnTUZ4dUlDQWdJQ0FnSUNBL0lIUm9hWE11WDNKbFkyVnBkbVZ5TUZ4dUlDQWdJQ0FnSUNBNklIUm9hWE5iWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibVJsZUNBcUlEVWdMU0ExSUNzZ05GMDdYRzRnSUNBZ2FXWWdLSEpsZENBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUhSb2FYTXVYMmx6UW05MWJtUW9LU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZZbTkxYm1SVWJ6dGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5d2NtOXRhWE5sUVhRZ1BTQm1kVzVqZEdsdmJpQW9hVzVrWlhncElIdGNiaUFnSUNCeVpYUjFjbTRnYVc1a1pYZ2dQVDA5SURCY2JpQWdJQ0FnSUNBZ1B5QjBhR2x6TGw5d2NtOXRhWE5sTUZ4dUlDQWdJQ0FnSUNBNklIUm9hWE5iYVc1a1pYZ2dLaUExSUMwZ05TQXJJRE5kTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDJaMWJHWnBiR3h0Wlc1MFNHRnVaR3hsY2tGMElEMGdablZ1WTNScGIyNGdLR2x1WkdWNEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdsdVpHVjRJRDA5UFNBd1hHNGdJQ0FnSUNBZ0lEOGdkR2hwY3k1ZlpuVnNabWxzYkcxbGJuUklZVzVrYkdWeU1GeHVJQ0FnSUNBZ0lDQTZJSFJvYVhOYmFXNWtaWGdnS2lBMUlDMGdOU0FySURCZE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgzSmxhbVZqZEdsdmJraGhibVJzWlhKQmRDQTlJR1oxYm1OMGFXOXVJQ2hwYm1SbGVDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCcGJtUmxlQ0E5UFQwZ01GeHVJQ0FnSUNBZ0lDQS9JSFJvYVhNdVgzSmxhbVZqZEdsdmJraGhibVJzWlhJd1hHNGdJQ0FnSUNBZ0lEb2dkR2hwYzF0cGJtUmxlQ0FxSURVZ0xTQTFJQ3NnTVYwN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1ZmJXbG5jbUYwWlVOaGJHeGlZV05yY3lBOUlHWjFibU4wYVc5dUlDaG1iMnhzYjNkbGNpd2dhVzVrWlhncElIdGNiaUFnSUNCMllYSWdablZzWm1sc2JDQTlJR1p2Ykd4dmQyVnlMbDltZFd4bWFXeHNiV1Z1ZEVoaGJtUnNaWEpCZENocGJtUmxlQ2s3WEc0Z0lDQWdkbUZ5SUhKbGFtVmpkQ0E5SUdadmJHeHZkMlZ5TGw5eVpXcGxZM1JwYjI1SVlXNWtiR1Z5UVhRb2FXNWtaWGdwTzF4dUlDQWdJSFpoY2lCd2NtOW5jbVZ6Y3lBOUlHWnZiR3h2ZDJWeUxsOXdjbTluY21WemMwaGhibVJzWlhKQmRDaHBibVJsZUNrN1hHNGdJQ0FnZG1GeUlIQnliMjFwYzJVZ1BTQm1iMnhzYjNkbGNpNWZjSEp2YldselpVRjBLR2x1WkdWNEtUdGNiaUFnSUNCMllYSWdjbVZqWldsMlpYSWdQU0JtYjJ4c2IzZGxjaTVmY21WalpXbDJaWEpCZENocGJtUmxlQ2s3WEc0Z0lDQWdhV1lnS0hCeWIyMXBjMlVnYVc1emRHRnVZMlZ2WmlCUWNtOXRhWE5sS1NCd2NtOXRhWE5sTGw5elpYUkpjMDFwWjNKaGRHVmtLQ2s3WEc0Z0lDQWdkR2hwY3k1ZllXUmtRMkZzYkdKaFkydHpLR1oxYkdacGJHd3NJSEpsYW1WamRDd2djSEp2WjNKbGMzTXNJSEJ5YjIxcGMyVXNJSEpsWTJWcGRtVnlMQ0J1ZFd4c0tUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOWhaR1JEWVd4c1ltRmphM01nUFNCbWRXNWpkR2x2YmlBb1hHNGdJQ0FnWm5Wc1ptbHNiQ3hjYmlBZ0lDQnlaV3BsWTNRc1hHNGdJQ0FnY0hKdlozSmxjM01zWEc0Z0lDQWdjSEp2YldselpTeGNiaUFnSUNCeVpXTmxhWFpsY2l4Y2JpQWdJQ0JrYjIxaGFXNWNiaWtnZTF4dUlDQWdJSFpoY2lCcGJtUmxlQ0E5SUhSb2FYTXVYMnhsYm1kMGFDZ3BPMXh1WEc0Z0lDQWdhV1lnS0dsdVpHVjRJRDQ5SURFek1UQTNNU0F0SURVcElIdGNiaUFnSUNBZ0lDQWdhVzVrWlhnZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXpaWFJNWlc1bmRHZ29NQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dsdVpHVjRJRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzQnliMjFwYzJVd0lEMGdjSEp2YldselpUdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbFkyVnBkbVZ5SUNFOVBTQjFibVJsWm1sdVpXUXBJSFJvYVhNdVgzSmxZMlZwZG1WeU1DQTlJSEpsWTJWcGRtVnlPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdaMWJHWnBiR3dnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlBaGRHaHBjeTVmYVhORFlYSnllV2x1WjFOMFlXTnJWSEpoWTJVb0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmWm5Wc1ptbHNiRzFsYm5SSVlXNWtiR1Z5TUNBOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHOXRZV2x1SUQwOVBTQnVkV3hzSUQ4Z1puVnNabWxzYkNBNklHUnZiV0ZwYmk1aWFXNWtLR1oxYkdacGJHd3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NtVnFaV04wSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgzSmxhbVZqZEdsdmJraGhibVJzWlhJd0lEMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMjFoYVc0Z1BUMDlJRzUxYkd3Z1B5QnlaV3BsWTNRZ09pQmtiMjFoYVc0dVltbHVaQ2h5WldwbFkzUXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NISnZaM0psYzNNZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZjSEp2WjNKbGMzTklZVzVrYkdWeU1DQTlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzl0WVdsdUlEMDlQU0J1ZFd4c0lEOGdjSEp2WjNKbGMzTWdPaUJrYjIxaGFXNHVZbWx1WkNod2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMllYSWdZbUZ6WlNBOUlHbHVaR1Y0SUNvZ05TQXRJRFU3WEc0Z0lDQWdJQ0FnSUhSb2FYTmJZbUZ6WlNBcklETmRJRDBnY0hKdmJXbHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGMxdGlZWE5sSUNzZ05GMGdQU0J5WldObGFYWmxjanRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCbWRXeG1hV3hzSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOYlltRnpaU0FySURCZElEMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMjFoYVc0Z1BUMDlJRzUxYkd3Z1B5Qm1kV3htYVd4c0lEb2daRzl0WVdsdUxtSnBibVFvWm5Wc1ptbHNiQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnlaV3BsWTNRZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdGlZWE5sSUNzZ01WMGdQVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1J2YldGcGJpQTlQVDBnYm5Wc2JDQS9JSEpsYW1WamRDQTZJR1J2YldGcGJpNWlhVzVrS0hKbGFtVmpkQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQndjbTluY21WemN5QTlQVDBnWENKbWRXNWpkR2x2Ymx3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMkpoYzJVZ0t5QXlYU0E5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkc5dFlXbHVJRDA5UFNCdWRXeHNJRDhnY0hKdlozSmxjM01nT2lCa2IyMWhhVzR1WW1sdVpDaHdjbTluY21WemN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVmYzJWMFRHVnVaM1JvS0dsdVpHVjRJQ3NnTVNrN1hHNGdJQ0FnY21WMGRYSnVJR2x1WkdWNE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgzTmxkRkJ5YjNoNVNHRnVaR3hsY25NZ1BTQm1kVzVqZEdsdmJpQW9jbVZqWldsMlpYSXNJSEJ5YjIxcGMyVlRiRzkwVm1Gc2RXVXBJSHRjYmlBZ0lDQjJZWElnYVc1a1pYZ2dQU0IwYUdsekxsOXNaVzVuZEdnb0tUdGNibHh1SUNBZ0lHbG1JQ2hwYm1SbGVDQStQU0F4TXpFd056RWdMU0ExS1NCN1hHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmMyVjBUR1Z1WjNSb0tEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9hVzVrWlhnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY0hKdmJXbHpaVEFnUFNCd2NtOXRhWE5sVTJ4dmRGWmhiSFZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl5WldObGFYWmxjakFnUFNCeVpXTmxhWFpsY2p0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1ltRnpaU0E5SUdsdVpHVjRJQ29nTlNBdElEVTdYRzRnSUNBZ0lDQWdJSFJvYVhOYlltRnpaU0FySUROZElEMGdjSEp2YldselpWTnNiM1JXWVd4MVpUdGNiaUFnSUNBZ0lDQWdkR2hwYzF0aVlYTmxJQ3NnTkYwZ1BTQnlaV05sYVhabGNqdGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NWZjMlYwVEdWdVozUm9LR2x1WkdWNElDc2dNU2s3WEc1OU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVmY0hKdmVIbFFjbTl0YVhObFFYSnlZWGtnUFNCbWRXNWpkR2x2YmlBb2NISnZiV2x6WlVGeWNtRjVMQ0JwYm1SbGVDa2dlMXh1SUNBZ0lIUm9hWE11WDNObGRGQnliM2g1U0dGdVpHeGxjbk1vY0hKdmJXbHpaVUZ5Y21GNUxDQnBibVJsZUNrN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1ZmNtVnpiMngyWlVOaGJHeGlZV05ySUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUhOb2IzVnNaRUpwYm1RcElIdGNiaUFnSUNCcFppQW9kR2hwY3k1ZmFYTkdiMnhzYjNkcGJtZFBja1oxYkdacGJHeGxaRTl5VW1WcVpXTjBaV1FvS1NrZ2NtVjBkWEp1TzF4dUlDQWdJR2xtSUNoMllXeDFaU0E5UFQwZ2RHaHBjeWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzSmxhbVZqZEVOaGJHeGlZV05yS0cxaGEyVlRaV3htVW1WemIyeDFkR2x2YmtWeWNtOXlLQ2tzSUdaaGJITmxMQ0IwY25WbEtUdGNiaUFnSUNCMllYSWdiV0Y1WW1WUWNtOXRhWE5sSUQwZ2RISjVRMjl1ZG1WeWRGUnZVSEp2YldselpTaDJZV3gxWlN3Z2RHaHBjeWs3WEc0Z0lDQWdhV1lnS0NFb2JXRjVZbVZRY205dGFYTmxJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaU2twSUhKbGRIVnliaUIwYUdsekxsOW1kV3htYVd4c0tIWmhiSFZsS1R0Y2JseHVJQ0FnSUhaaGNpQndjbTl3WVdkaGRHbHZia1pzWVdkeklEMGdNU0I4SUNoemFHOTFiR1JDYVc1a0lEOGdOQ0E2SURBcE8xeHVJQ0FnSUhSb2FYTXVYM0J5YjNCaFoyRjBaVVp5YjIwb2JXRjVZbVZRY205dGFYTmxMQ0J3Y205d1lXZGhkR2x2Ymtac1lXZHpLVHRjYmlBZ0lDQjJZWElnY0hKdmJXbHpaU0E5SUcxaGVXSmxVSEp2YldselpTNWZkR0Z5WjJWMEtDazdYRzRnSUNBZ2FXWWdLSEJ5YjIxcGMyVXVYMmx6VUdWdVpHbHVaeWdwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJzWlc0Z1BTQjBhR2x6TGw5c1pXNW5kR2dvS1R0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZiV2x6WlM1ZmJXbG5jbUYwWlVOaGJHeGlZV05yY3loMGFHbHpMQ0JwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5elpYUkdiMnhzYjNkcGJtY29LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjMlYwVEdWdVozUm9LREFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl6WlhSR2IyeHNiM2RsWlNod2NtOXRhWE5sS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hCeWIyMXBjMlV1WDJselJuVnNabWxzYkdWa0tDa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZablZzWm1sc2JGVnVZMmhsWTJ0bFpDaHdjbTl0YVhObExsOTJZV3gxWlNncEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl5WldwbFkzUlZibU5vWldOclpXUW9jSEp2YldselpTNWZjbVZoYzI5dUtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtOXRhWE5sTGw5blpYUkRZWEp5YVdWa1UzUmhZMnRVY21GalpTZ3BLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWZjbVZxWldOMFEyRnNiR0poWTJzZ1BWeHVablZ1WTNScGIyNG9jbVZoYzI5dUxDQnplVzVqYUhKdmJtOTFjeXdnYzJodmRXeGtUbTkwVFdGeWEwOXlhV2RwYm1GMGFXNW5Sbkp2YlZKbGFtVmpkR2x2YmlrZ2UxeHVJQ0FnSUdsbUlDZ2hjMmh2ZFd4a1RtOTBUV0Z5YTA5eWFXZHBibUYwYVc1blJuSnZiVkpsYW1WamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCMWRHbHNMbTFoY210QmMwOXlhV2RwYm1GMGFXNW5Sbkp2YlZKbGFtVmpkR2x2YmloeVpXRnpiMjRwTzF4dUlDQWdJSDFjYmlBZ0lDQjJZWElnZEhKaFkyVWdQU0IxZEdsc0xtVnVjM1Z5WlVWeWNtOXlUMkpxWldOMEtISmxZWE52YmlrN1hHNGdJQ0FnZG1GeUlHaGhjMU4wWVdOcklEMGdkSEpoWTJVZ1BUMDlJSEpsWVhOdmJqdGNiaUFnSUNCMGFHbHpMbDloZEhSaFkyaEZlSFJ5WVZSeVlXTmxLSFJ5WVdObExDQnplVzVqYUhKdmJtOTFjeUEvSUdoaGMxTjBZV05ySURvZ1ptRnNjMlVwTzF4dUlDQWdJSFJvYVhNdVgzSmxhbVZqZENoeVpXRnpiMjRzSUdoaGMxTjBZV05ySUQ4Z2RXNWtaV1pwYm1Wa0lEb2dkSEpoWTJVcE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVgzSmxjMjlzZG1WR2NtOXRVbVZ6YjJ4MlpYSWdQU0JtZFc1amRHbHZiaUFvY21WemIyeDJaWElwSUh0Y2JpQWdJQ0IyWVhJZ2NISnZiV2x6WlNBOUlIUm9hWE03WEc0Z0lDQWdkR2hwY3k1ZlkyRndkSFZ5WlZOMFlXTnJWSEpoWTJVb0tUdGNiaUFnSUNCMGFHbHpMbDl3ZFhOb1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUhaaGNpQnplVzVqYUhKdmJtOTFjeUE5SUhSeWRXVTdYRzRnSUNBZ2RtRnlJSElnUFNCMGNubERZWFJqYUNoeVpYTnZiSFpsY2lrb1puVnVZM1JwYjI0b2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YjIxcGMyVWdQVDA5SUc1MWJHd3BJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdjSEp2YldselpTNWZjbVZ6YjJ4MlpVTmhiR3hpWVdOcktIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2NISnZiV2x6WlNBOUlHNTFiR3c3WEc0Z0lDQWdmU3dnWm5WdVkzUnBiMjRnS0hKbFlYTnZiaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9jSEp2YldselpTQTlQVDBnYm5Wc2JDa2djbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQndjbTl0YVhObExsOXlaV3BsWTNSRFlXeHNZbUZqYXloeVpXRnpiMjRzSUhONWJtTm9jbTl1YjNWektUdGNiaUFnSUNBZ0lDQWdjSEp2YldselpTQTlJRzUxYkd3N1hHNGdJQ0FnZlNrN1hHNGdJQ0FnYzNsdVkyaHliMjV2ZFhNZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0IwYUdsekxsOXdiM0JEYjI1MFpYaDBLQ2s3WEc1Y2JpQWdJQ0JwWmlBb2NpQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlISWdQVDA5SUdWeWNtOXlUMkpxSUNZbUlIQnliMjFwYzJVZ0lUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdjSEp2YldselpTNWZjbVZxWldOMFEyRnNiR0poWTJzb2NpNWxMQ0IwY25WbExDQjBjblZsS1R0Y2JpQWdJQ0FnSUNBZ2NISnZiV2x6WlNBOUlHNTFiR3c3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYM05sZEhSc1pWQnliMjFwYzJWR2NtOXRTR0Z1Wkd4bGNpQTlJR1oxYm1OMGFXOXVJQ2hjYmlBZ0lDQm9ZVzVrYkdWeUxDQnlaV05sYVhabGNpd2dkbUZzZFdVc0lIQnliMjFwYzJWY2Jpa2dlMXh1SUNBZ0lHbG1JQ2h3Y205dGFYTmxMbDlwYzFKbGFtVmpkR1ZrS0NrcElISmxkSFZ5Ymp0Y2JpQWdJQ0J3Y205dGFYTmxMbDl3ZFhOb1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUhaaGNpQjRPMXh1SUNBZ0lHbG1JQ2h5WldObGFYWmxjaUE5UFQwZ1FWQlFURmtnSmlZZ0lYUm9hWE11WDJselVtVnFaV04wWldRb0tTa2dlMXh1SUNBZ0lDQWdJQ0I0SUQwZ2RISjVRMkYwWTJnb2FHRnVaR3hsY2lrdVlYQndiSGtvZEdocGN5NWZZbTkxYm1SVWJ5d2dkbUZzZFdVcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhnZ1BTQjBjbmxEWVhSamFDaG9ZVzVrYkdWeUtTNWpZV3hzS0hKbFkyVnBkbVZ5TENCMllXeDFaU2s3WEc0Z0lDQWdmVnh1SUNBZ0lIQnliMjFwYzJVdVgzQnZjRU52Ym5SbGVIUW9LVHRjYmx4dUlDQWdJR2xtSUNoNElEMDlQU0JsY25KdmNrOWlhaUI4ZkNCNElEMDlQU0J3Y205dGFYTmxJSHg4SUhnZ1BUMDlJRTVGV0ZSZlJrbE1WRVZTS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsY25JZ1BTQjRJRDA5UFNCd2NtOXRhWE5sSUQ4Z2JXRnJaVk5sYkdaU1pYTnZiSFYwYVc5dVJYSnliM0lvS1NBNklIZ3VaVHRjYmlBZ0lDQWdJQ0FnY0hKdmJXbHpaUzVmY21WcVpXTjBRMkZzYkdKaFkyc29aWEp5TENCbVlXeHpaU3dnZEhKMVpTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZiV2x6WlM1ZmNtVnpiMngyWlVOaGJHeGlZV05yS0hncE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5MFlYSm5aWFFnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdjbVYwSUQwZ2RHaHBjenRjYmlBZ0lDQjNhR2xzWlNBb2NtVjBMbDlwYzBadmJHeHZkMmx1WnlncEtTQnlaWFFnUFNCeVpYUXVYMlp2Ykd4dmQyVmxLQ2s3WEc0Z0lDQWdjbVYwZFhKdUlISmxkRHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDltYjJ4c2IzZGxaU0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXlaV3BsWTNScGIyNUlZVzVrYkdWeU1EdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXpaWFJHYjJ4c2IzZGxaU0E5SUdaMWJtTjBhVzl1S0hCeWIyMXBjMlVwSUh0Y2JpQWdJQ0IwYUdsekxsOXlaV3BsWTNScGIyNUlZVzVrYkdWeU1DQTlJSEJ5YjIxcGMyVTdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWZZMnhsWVc1V1lXeDFaWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdVgyTmhibU5sYkd4aFlteGxLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTJGdVkyVnNiR0YwYVc5dVVHRnlaVzUwSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUgxY2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5d2NtOXdZV2RoZEdWR2NtOXRJRDBnWm5WdVkzUnBiMjRnS0hCaGNtVnVkQ3dnWm14aFozTXBJSHRjYmlBZ0lDQnBaaUFvS0dac1lXZHpJQ1lnTVNrZ1BpQXdJQ1ltSUhCaGNtVnVkQzVmWTJGdVkyVnNiR0ZpYkdVb0tTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXpaWFJEWVc1alpXeHNZV0pzWlNncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5allXNWpaV3hzWVhScGIyNVFZWEpsYm5RZ1BTQndZWEpsYm5RN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNnb1pteGhaM01nSmlBMEtTQStJREFnSmlZZ2NHRnlaVzUwTGw5cGMwSnZkVzVrS0NrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmMyVjBRbTkxYm1SVWJ5aHdZWEpsYm5RdVgySnZkVzVrVkc4cE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5bWRXeG1hV3hzSUQwZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11WDJselJtOXNiRzkzYVc1blQzSkdkV3htYVd4c1pXUlBjbEpsYW1WamRHVmtLQ2twSUhKbGRIVnlianRjYmlBZ0lDQjBhR2x6TGw5bWRXeG1hV3hzVlc1amFHVmphMlZrS0haaGJIVmxLVHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDl5WldwbFkzUWdQU0JtZFc1amRHbHZiaUFvY21WaGMyOXVMQ0JqWVhKeWFXVmtVM1JoWTJ0VWNtRmpaU2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbDlwYzBadmJHeHZkMmx1WjA5eVJuVnNabWxzYkdWa1QzSlNaV3BsWTNSbFpDZ3BLU0J5WlhSMWNtNDdYRzRnSUNBZ2RHaHBjeTVmY21WcVpXTjBWVzVqYUdWamEyVmtLSEpsWVhOdmJpd2dZMkZ5Y21sbFpGTjBZV05yVkhKaFkyVXBPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYM05sZEhSc1pWQnliMjFwYzJWQmRDQTlJR1oxYm1OMGFXOXVJQ2hwYm1SbGVDa2dlMXh1SUNBZ0lIWmhjaUJ3Y205dGFYTmxJRDBnZEdocGN5NWZjSEp2YldselpVRjBLR2x1WkdWNEtUdGNiaUFnSUNCMllYSWdhWE5RY205dGFYTmxJRDBnY0hKdmJXbHpaU0JwYm5OMFlXNWpaVzltSUZCeWIyMXBjMlU3WEc1Y2JpQWdJQ0JwWmlBb2FYTlFjbTl0YVhObElDWW1JSEJ5YjIxcGMyVXVYMmx6VFdsbmNtRjBaV1FvS1NrZ2UxeHVJQ0FnSUNBZ0lDQndjbTl0YVhObExsOTFibk5sZEVselRXbG5jbUYwWldRb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRnplVzVqTG1sdWRtOXJaU2gwYUdsekxsOXpaWFIwYkdWUWNtOXRhWE5sUVhRc0lIUm9hWE1zSUdsdVpHVjRLVHRjYmlBZ0lDQjlYRzRnSUNBZ2RtRnlJR2hoYm1Sc1pYSWdQU0IwYUdsekxsOXBjMFoxYkdacGJHeGxaQ2dwWEc0Z0lDQWdJQ0FnSUQ4Z2RHaHBjeTVmWm5Wc1ptbHNiRzFsYm5SSVlXNWtiR1Z5UVhRb2FXNWtaWGdwWEc0Z0lDQWdJQ0FnSURvZ2RHaHBjeTVmY21WcVpXTjBhVzl1U0dGdVpHeGxja0YwS0dsdVpHVjRLVHRjYmx4dUlDQWdJSFpoY2lCallYSnlhV1ZrVTNSaFkydFVjbUZqWlNBOVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDJselEyRnljbmxwYm1kVGRHRmphMVJ5WVdObEtDa2dQeUIwYUdsekxsOW5aWFJEWVhKeWFXVmtVM1JoWTJ0VWNtRmpaU2dwSURvZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUhaaGNpQjJZV3gxWlNBOUlIUm9hWE11WDNObGRIUnNaV1JXWVd4MVpUdGNiaUFnSUNCMllYSWdjbVZqWldsMlpYSWdQU0IwYUdsekxsOXlaV05sYVhabGNrRjBLR2x1WkdWNEtUdGNibHh1WEc0Z0lDQWdkR2hwY3k1ZlkyeGxZWEpEWVd4c1ltRmphMFJoZEdGQmRFbHVaR1Y0S0dsdVpHVjRLVHRjYmx4dUlDQWdJR2xtSUNoMGVYQmxiMllnYUdGdVpHeGxjaUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hhWE5RY205dGFYTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9ZVzVrYkdWeUxtTmhiR3dvY21WalpXbDJaWElzSUhaaGJIVmxMQ0J3Y205dGFYTmxLVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNObGRIUnNaVkJ5YjIxcGMyVkdjbTl0U0dGdVpHeGxjaWhvWVc1a2JHVnlMQ0J5WldObGFYWmxjaXdnZG1Gc2RXVXNJSEJ5YjIxcGMyVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2h5WldObGFYWmxjaUJwYm5OMFlXNWpaVzltSUZCeWIyMXBjMlZCY25KaGVTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYSmxZMlZwZG1WeUxsOXBjMUpsYzI5c2RtVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbDlwYzBaMWJHWnBiR3hsWkNncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqWldsMlpYSXVYM0J5YjIxcGMyVkdkV3htYVd4c1pXUW9kbUZzZFdVc0lIQnliMjFwYzJVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpaV2wyWlhJdVgzQnliMjFwYzJWU1pXcGxZM1JsWkNoMllXeDFaU3dnY0hKdmJXbHpaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x6VUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1ZmFYTkdkV3htYVd4c1pXUW9LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjSEp2YldselpTNWZablZzWm1sc2JDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y205dGFYTmxMbDl5WldwbFkzUW9kbUZzZFdVc0lHTmhjbkpwWldSVGRHRmphMVJ5WVdObEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hwYm1SbGVDQStQU0EwSUNZbUlDaHBibVJsZUNBbUlETXhLU0E5UFQwZ05DbGNiaUFnSUNBZ0lDQWdZWE41Ym1NdWFXNTJiMnRsVEdGMFpYSW9kR2hwY3k1ZmMyVjBUR1Z1WjNSb0xDQjBhR2x6TENBd0tUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOWpiR1ZoY2tOaGJHeGlZV05yUkdGMFlVRjBTVzVrWlhnZ1BTQm1kVzVqZEdsdmJpaHBibVJsZUNrZ2UxeHVJQ0FnSUdsbUlDaHBibVJsZUNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdVgybHpRMkZ5Y25scGJtZFRkR0ZqYTFSeVlXTmxLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyWjFiR1pwYkd4dFpXNTBTR0Z1Wkd4bGNqQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY21WcVpXTjBhVzl1U0dGdVpHeGxjakFnUFZ4dUlDQWdJQ0FnSUNCMGFHbHpMbDl3Y205bmNtVnpjMGhoYm1Sc1pYSXdJRDFjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjbVZqWldsMlpYSXdJRDFjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjSEp2YldselpUQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdKaGMyVWdQU0JwYm1SbGVDQXFJRFVnTFNBMU8xeHVJQ0FnSUNBZ0lDQjBhR2x6VzJKaGMyVWdLeUF6WFNBOVhHNGdJQ0FnSUNBZ0lIUm9hWE5iWW1GelpTQXJJRFJkSUQxY2JpQWdJQ0FnSUNBZ2RHaHBjMXRpWVhObElDc2dNRjBnUFZ4dUlDQWdJQ0FnSUNCMGFHbHpXMkpoYzJVZ0t5QXhYU0E5WEc0Z0lDQWdJQ0FnSUhSb2FYTmJZbUZ6WlNBcklESmRJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJSDFjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDlwYzFObGRIUnNaVkJ5YjIxcGMyVnpVWFZsZFdWa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1ZlltbDBSbWxsYkdRZ0pseHVJQ0FnSUNBZ0lDQWdJQ0FnTFRFd056TTNOREU0TWpRcElEMDlQU0F0TVRBM016YzBNVGd5TkR0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5elpYUlRaWFIwYkdWUWNtOXRhWE5sYzFGMVpYVmxaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMGFHbHpMbDlpYVhSR2FXVnNaQ0E5SUhSb2FYTXVYMkpwZEVacFpXeGtJSHdnTFRFd056TTNOREU0TWpRN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1ZmRXNXpaWFJUWlhSMGJHVlFjbTl0YVhObGMxRjFaWFZsWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjBhR2x6TGw5aWFYUkdhV1ZzWkNBOUlIUm9hWE11WDJKcGRFWnBaV3hrSUNZZ0tINHRNVEEzTXpjME1UZ3lOQ2s3WEc1OU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVmY1hWbGRXVlRaWFIwYkdWUWNtOXRhWE5sY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lHRnplVzVqTG5ObGRIUnNaVkJ5YjIxcGMyVnpLSFJvYVhNcE8xeHVJQ0FnSUhSb2FYTXVYM05sZEZObGRIUnNaVkJ5YjIxcGMyVnpVWFZsZFdWa0tDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWZablZzWm1sc2JGVnVZMmhsWTJ0bFpDQTlJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNBZ0lHbG1JQ2gyWVd4MVpTQTlQVDBnZEdocGN5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pYSnlJRDBnYldGclpWTmxiR1pTWlhOdmJIVjBhVzl1UlhKeWIzSW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZWFIwWVdOb1JYaDBjbUZVY21GalpTaGxjbklwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZjbVZxWldOMFZXNWphR1ZqYTJWa0tHVnljaXdnZFc1a1pXWnBibVZrS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1ZmMyVjBSblZzWm1sc2JHVmtLQ2s3WEc0Z0lDQWdkR2hwY3k1ZmMyVjBkR3hsWkZaaGJIVmxJRDBnZG1Gc2RXVTdYRzRnSUNBZ2RHaHBjeTVmWTJ4bFlXNVdZV3gxWlhNb0tUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxsOXNaVzVuZEdnb0tTQStJREFwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY1hWbGRXVlRaWFIwYkdWUWNtOXRhWE5sY3lncE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5eVpXcGxZM1JWYm1Ob1pXTnJaV1JEYUdWamEwVnljbTl5SUQwZ1puVnVZM1JwYjI0Z0tISmxZWE52YmlrZ2UxeHVJQ0FnSUhaaGNpQjBjbUZqWlNBOUlIVjBhV3d1Wlc1emRYSmxSWEp5YjNKUFltcGxZM1FvY21WaGMyOXVLVHRjYmlBZ0lDQjBhR2x6TGw5eVpXcGxZM1JWYm1Ob1pXTnJaV1FvY21WaGMyOXVMQ0IwY21GalpTQTlQVDBnY21WaGMyOXVJRDhnZFc1a1pXWnBibVZrSURvZ2RISmhZMlVwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WDNKbGFtVmpkRlZ1WTJobFkydGxaQ0E5SUdaMWJtTjBhVzl1SUNoeVpXRnpiMjRzSUhSeVlXTmxLU0I3WEc0Z0lDQWdhV1lnS0hKbFlYTnZiaUE5UFQwZ2RHaHBjeWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdaWEp5SUQwZ2JXRnJaVk5sYkdaU1pYTnZiSFYwYVc5dVJYSnliM0lvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWVhSMFlXTm9SWGgwY21GVWNtRmpaU2hsY25JcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmY21WcVpXTjBWVzVqYUdWamEyVmtLR1Z5Y2lrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdVgzTmxkRkpsYW1WamRHVmtLQ2s3WEc0Z0lDQWdkR2hwY3k1ZmMyVjBkR3hsWkZaaGJIVmxJRDBnY21WaGMyOXVPMXh1SUNBZ0lIUm9hWE11WDJOc1pXRnVWbUZzZFdWektDazdYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NWZhWE5HYVc1aGJDZ3BLU0I3WEc0Z0lDQWdJQ0FnSUdGemVXNWpMblJvY205M1RHRjBaWElvWm5WdVkzUnBiMjRvWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGd2ljM1JoWTJ0Y0lpQnBiaUJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTjVibU11YVc1MmIydGxSbWx5YzNRb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRU5oY0hSMWNtVmtWSEpoWTJVdWRXNW9ZVzVrYkdWa1VtVnFaV04wYVc5dUxDQjFibVJsWm1sdVpXUXNJR1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnWlR0Y2JpQWdJQ0FnSUNBZ2ZTd2dkSEpoWTJVZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhKbFlYTnZiaUE2SUhSeVlXTmxLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwY21GalpTQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlIUnlZV05sSUNFOVBTQnlaV0Z6YjI0cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmMyVjBRMkZ5Y21sbFpGTjBZV05yVkhKaFkyVW9kSEpoWTJVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TGw5c1pXNW5kR2dvS1NBK0lEQXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjWFZsZFdWVFpYUjBiR1ZRY205dGFYTmxjeWdwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyVnVjM1Z5WlZCdmMzTnBZbXhsVW1WcVpXTjBhVzl1U0dGdVpHeGxaQ2dwTzF4dUlDQWdJSDFjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDl6WlhSMGJHVlFjbTl0YVhObGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IwYUdsekxsOTFibk5sZEZObGRIUnNaVkJ5YjIxcGMyVnpVWFZsZFdWa0tDazdYRzRnSUNBZ2RtRnlJR3hsYmlBOUlIUm9hWE11WDJ4bGJtZDBhQ2dwTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmYzJWMGRHeGxVSEp2YldselpVRjBLR2twTzF4dUlDQWdJSDFjYm4wN1hHNWNiblYwYVd3dWJtOTBSVzUxYldWeVlXSnNaVkJ5YjNBb1VISnZiV2x6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKZmJXRnJaVk5sYkdaU1pYTnZiSFYwYVc5dVJYSnliM0pjSWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldGclpWTmxiR1pTWlhOdmJIVjBhVzl1UlhKeWIzSXBPMXh1WEc1ZlpHVnlaWEZmS0Z3aUxpOXdjbTluY21WemN5NXFjMXdpS1NoUWNtOXRhWE5sTENCUWNtOXRhWE5sUVhKeVlYa3BPMXh1WDJSbGNtVnhYeWhjSWk0dmJXVjBhRzlrTG1welhDSXBLRkJ5YjIxcGMyVXNJRWxPVkVWU1RrRk1MQ0IwY25sRGIyNTJaWEowVkc5UWNtOXRhWE5sTENCaGNHbFNaV3BsWTNScGIyNHBPMXh1WDJSbGNtVnhYeWhjSWk0dlltbHVaQzVxYzF3aUtTaFFjbTl0YVhObExDQkpUbFJGVWs1QlRDd2dkSEo1UTI5dWRtVnlkRlJ2VUhKdmJXbHpaU2s3WEc1ZlpHVnlaWEZmS0Z3aUxpOW1hVzVoYkd4NUxtcHpYQ0lwS0ZCeWIyMXBjMlVzSUU1RldGUmZSa2xNVkVWU0xDQjBjbmxEYjI1MlpYSjBWRzlRY205dGFYTmxLVHRjYmw5a1pYSmxjVjhvWENJdUwyUnBjbVZqZEY5eVpYTnZiSFpsTG1welhDSXBLRkJ5YjIxcGMyVXBPMXh1WDJSbGNtVnhYeWhjSWk0dmMzbHVZMmh5YjI1dmRYTmZhVzV6Y0dWamRHbHZiaTVxYzF3aUtTaFFjbTl0YVhObEtUdGNibDlrWlhKbGNWOG9YQ0l1TDJwdmFXNHVhbk5jSWlrb1VISnZiV2x6WlN3Z1VISnZiV2x6WlVGeWNtRjVMQ0IwY25sRGIyNTJaWEowVkc5UWNtOXRhWE5sTENCSlRsUkZVazVCVENrN1hHNVFjbTl0YVhObExsQnliMjFwYzJVZ1BTQlFjbTl0YVhObE8xeHVYMlJsY21WeFh5Z25MaTl0WVhBdWFuTW5LU2hRY205dGFYTmxMQ0JRY205dGFYTmxRWEp5WVhrc0lHRndhVkpsYW1WamRHbHZiaXdnZEhKNVEyOXVkbVZ5ZEZSdlVISnZiV2x6WlN3Z1NVNVVSVkpPUVV3cE8xeHVYMlJsY21WeFh5Z25MaTlqWVc1alpXd3Vhbk1uS1NoUWNtOXRhWE5sS1R0Y2JsOWtaWEpsY1Y4b0p5NHZkWE5wYm1jdWFuTW5LU2hRY205dGFYTmxMQ0JoY0dsU1pXcGxZM1JwYjI0c0lIUnllVU52Ym5abGNuUlViMUJ5YjIxcGMyVXNJR055WldGMFpVTnZiblJsZUhRcE8xeHVYMlJsY21WeFh5Z25MaTluWlc1bGNtRjBiM0p6TG1wekp5a29VSEp2YldselpTd2dZWEJwVW1WcVpXTjBhVzl1TENCSlRsUkZVazVCVEN3Z2RISjVRMjl1ZG1WeWRGUnZVSEp2YldselpTazdYRzVmWkdWeVpYRmZLQ2N1TDI1dlpHVnBabmt1YW5NbktTaFFjbTl0YVhObEtUdGNibDlrWlhKbGNWOG9KeTR2WTJGc2JGOW5aWFF1YW5NbktTaFFjbTl0YVhObEtUdGNibDlrWlhKbGNWOG9KeTR2Y0hKdmNITXVhbk1uS1NoUWNtOXRhWE5sTENCUWNtOXRhWE5sUVhKeVlYa3NJSFJ5ZVVOdmJuWmxjblJVYjFCeWIyMXBjMlVzSUdGd2FWSmxhbVZqZEdsdmJpazdYRzVmWkdWeVpYRmZLQ2N1TDNKaFkyVXVhbk1uS1NoUWNtOXRhWE5sTENCSlRsUkZVazVCVEN3Z2RISjVRMjl1ZG1WeWRGUnZVSEp2YldselpTd2dZWEJwVW1WcVpXTjBhVzl1S1R0Y2JsOWtaWEpsY1Y4b0p5NHZjbVZrZFdObExtcHpKeWtvVUhKdmJXbHpaU3dnVUhKdmJXbHpaVUZ5Y21GNUxDQmhjR2xTWldwbFkzUnBiMjRzSUhSeWVVTnZiblpsY25SVWIxQnliMjFwYzJVc0lFbE9WRVZTVGtGTUtUdGNibDlrWlhKbGNWOG9KeTR2YzJWMGRHeGxMbXB6Snlrb1VISnZiV2x6WlN3Z1VISnZiV2x6WlVGeWNtRjVLVHRjYmw5a1pYSmxjVjhvSnk0dmMyOXRaUzVxY3ljcEtGQnliMjFwYzJVc0lGQnliMjFwYzJWQmNuSmhlU3dnWVhCcFVtVnFaV04wYVc5dUtUdGNibDlrWlhKbGNWOG9KeTR2Y0hKdmJXbHphV1o1TG1wekp5a29VSEp2YldselpTd2dTVTVVUlZKT1FVd3BPMXh1WDJSbGNtVnhYeWduTGk5aGJua3Vhbk1uS1NoUWNtOXRhWE5sS1R0Y2JsOWtaWEpsY1Y4b0p5NHZaV0ZqYUM1cWN5Y3BLRkJ5YjIxcGMyVXNJRWxPVkVWU1RrRk1LVHRjYmw5a1pYSmxjVjhvSnk0dmRHbHRaWEp6TG1wekp5a29VSEp2YldselpTd2dTVTVVUlZKT1FVd3BPMXh1WDJSbGNtVnhYeWduTGk5bWFXeDBaWEl1YW5NbktTaFFjbTl0YVhObExDQkpUbFJGVWs1QlRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0IxZEdsc0xuUnZSbUZ6ZEZCeWIzQmxjblJwWlhNb1VISnZiV2x6WlNrN0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdkWFJwYkM1MGIwWmhjM1JRY205d1pYSjBhV1Z6S0ZCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsS1RzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lHWjFibU4wYVc5dUlHWnBiR3hVZVhCbGN5aDJZV3gxWlNrZ2V5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdkbUZ5SUhBZ1BTQnVaWGNnVUhKdmJXbHpaU2hKVGxSRlVrNUJUQ2s3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIQXVYMloxYkdacGJHeHRaVzUwU0dGdVpHeGxjakFnUFNCMllXeDFaVHNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCd0xsOXlaV3BsWTNScGIyNUlZVzVrYkdWeU1DQTlJSFpoYkhWbE95QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnY0M1ZmNISnZaM0psYzNOSVlXNWtiR1Z5TUNBOUlIWmhiSFZsT3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEF1WDNCeWIyMXBjMlV3SUQwZ2RtRnNkV1U3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQndMbDl5WldObGFYWmxjakFnUFNCMllXeDFaVHNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2NDNWZjMlYwZEd4bFpGWmhiSFZsSUQwZ2RtRnNkV1U3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdmU0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDOHZJRU52YlhCc1pYUmxJSE5zWVdOcklIUnlZV05yYVc1bkxDQnZjSFFnYjNWMElHOW1JR1pwWld4a0xYUjVjR1VnZEhKaFkydHBibWNnWVc1a0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBdkx5QnpkR0ZpYVd4cGVtVWdiV0Z3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnWm1sc2JGUjVjR1Z6S0h0aE9pQXhmU2s3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJR1pwYkd4VWVYQmxjeWg3WWpvZ01uMHBPeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQm1hV3hzVkhsd1pYTW9lMk02SUROOUtUc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ1ptbHNiRlI1Y0dWektERXBPeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUdacGJHeFVlWEJsY3lobWRXNWpkR2x2YmlncGUzMHBPeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0JtYVd4c1ZIbHdaWE1vZFc1a1pXWnBibVZrS1RzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdabWxzYkZSNWNHVnpLR1poYkhObEtUc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lHWnBiR3hVZVhCbGN5aHVaWGNnVUhKdmJXbHpaU2hKVGxSRlVrNUJUQ2twT3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNCRFlYQjBkWEpsWkZSeVlXTmxMbk5sZEVKdmRXNWtjeWhoYzNsdVl5NW1hWEp6ZEV4cGJtVkZjbkp2Y2l3Z2RYUnBiQzVzWVhOMFRHbHVaVVZ5Y205eUtUc2dJQ0FnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJRkJ5YjIxcGMyVTdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dVhHNTlPMXh1WEc1OUxIdGNJaTR2WVc1NUxtcHpYQ0k2TVN4Y0lpNHZZWE41Ym1NdWFuTmNJam95TEZ3aUxpOWlhVzVrTG1welhDSTZNeXhjSWk0dlkyRnNiRjluWlhRdWFuTmNJam8xTEZ3aUxpOWpZVzVqWld3dWFuTmNJam8yTEZ3aUxpOWpZWEIwZFhKbFpGOTBjbUZqWlM1cWMxd2lPamNzWENJdUwyTmhkR05vWDJacGJIUmxjaTVxYzF3aU9qZ3NYQ0l1TDJOdmJuUmxlSFF1YW5OY0lqbzVMRndpTGk5a1pXSjFaMmRoWW1sc2FYUjVMbXB6WENJNk1UQXNYQ0l1TDJScGNtVmpkRjl5WlhOdmJIWmxMbXB6WENJNk1URXNYQ0l1TDJWaFkyZ3Vhbk5jSWpveE1peGNJaTR2WlhKeWIzSnpMbXB6WENJNk1UTXNYQ0l1TDJacGJIUmxjaTVxYzF3aU9qRTFMRndpTGk5bWFXNWhiR3g1TG1welhDSTZNVFlzWENJdUwyZGxibVZ5WVhSdmNuTXVhbk5jSWpveE55eGNJaTR2YW05cGJpNXFjMXdpT2pFNExGd2lMaTl0WVhBdWFuTmNJam94T1N4Y0lpNHZiV1YwYUc5a0xtcHpYQ0k2TWpBc1hDSXVMMjV2WkdWcFpua3Vhbk5jSWpveU1TeGNJaTR2Y0hKdlozSmxjM011YW5OY0lqb3lNaXhjSWk0dmNISnZiV2x6WlY5aGNuSmhlUzVxYzF3aU9qSTBMRndpTGk5d2NtOXRhWE5sWDNKbGMyOXNkbVZ5TG1welhDSTZNalVzWENJdUwzQnliMjFwYzJsbWVTNXFjMXdpT2pJMkxGd2lMaTl3Y205d2N5NXFjMXdpT2pJM0xGd2lMaTl5WVdObExtcHpYQ0k2TWprc1hDSXVMM0psWkhWalpTNXFjMXdpT2pNd0xGd2lMaTl6WlhSMGJHVXVhbk5jSWpvek1peGNJaTR2YzI5dFpTNXFjMXdpT2pNekxGd2lMaTl6ZVc1amFISnZibTkxYzE5cGJuTndaV04wYVc5dUxtcHpYQ0k2TXpRc1hDSXVMM1JvWlc1aFlteGxjeTVxYzF3aU9qTTFMRndpTGk5MGFXMWxjbk11YW5OY0lqb3pOaXhjSWk0dmRYTnBibWN1YW5OY0lqb3pOeXhjSWk0dmRYUnBiQzVxYzF3aU9qTTRmVjBzTWpRNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0ZCeWIyMXBjMlVzSUVsT1ZFVlNUa0ZNTENCMGNubERiMjUyWlhKMFZHOVFjbTl0YVhObExGeHVJQ0FnSUdGd2FWSmxhbVZqZEdsdmJpa2dlMXh1ZG1GeUlIVjBhV3dnUFNCZlpHVnlaWEZmS0Z3aUxpOTFkR2xzTG1welhDSXBPMXh1ZG1GeUlHbHpRWEp5WVhrZ1BTQjFkR2xzTG1selFYSnlZWGs3WEc1Y2JtWjFibU4wYVc5dUlIUnZVbVZ6YjJ4MWRHbHZibFpoYkhWbEtIWmhiQ2tnZTF4dUlDQWdJSE4zYVhSamFDaDJZV3dwSUh0Y2JpQWdJQ0JqWVhObElDMHlPaUJ5WlhSMWNtNGdXMTA3WEc0Z0lDQWdZMkZ6WlNBdE16b2djbVYwZFhKdUlIdDlPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1VISnZiV2x6WlVGeWNtRjVLSFpoYkhWbGN5a2dlMXh1SUNBZ0lIWmhjaUJ3Y205dGFYTmxJRDBnZEdocGN5NWZjSEp2YldselpTQTlJRzVsZHlCUWNtOXRhWE5sS0VsT1ZFVlNUa0ZNS1R0Y2JpQWdJQ0IyWVhJZ2NHRnlaVzUwTzF4dUlDQWdJR2xtSUNoMllXeDFaWE1nYVc1emRHRnVZMlZ2WmlCUWNtOXRhWE5sS1NCN1hHNGdJQ0FnSUNBZ0lIQmhjbVZ1ZENBOUlIWmhiSFZsY3p0Y2JpQWdJQ0FnSUNBZ2NISnZiV2x6WlM1ZmNISnZjR0ZuWVhSbFJuSnZiU2h3WVhKbGJuUXNJREVnZkNBMEtUdGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NWZkbUZzZFdWeklEMGdkbUZzZFdWek8xeHVJQ0FnSUhSb2FYTXVYMnhsYm1kMGFDQTlJREE3WEc0Z0lDQWdkR2hwY3k1ZmRHOTBZV3hTWlhOdmJIWmxaQ0E5SURBN1hHNGdJQ0FnZEdocGN5NWZhVzVwZENoMWJtUmxabWx1WldRc0lDMHlLVHRjYm4xY2JsQnliMjFwYzJWQmNuSmhlUzV3Y205MGIzUjVjR1V1YkdWdVozUm9JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXNaVzVuZEdnN1hHNTlPMXh1WEc1UWNtOXRhWE5sUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbkJ5YjIxcGMyVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzQnliMjFwYzJVN1hHNTlPMXh1WEc1UWNtOXRhWE5sUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbDlwYm1sMElEMGdablZ1WTNScGIyNGdhVzVwZENoZkxDQnlaWE52YkhabFZtRnNkV1ZKWmtWdGNIUjVLU0I3WEc0Z0lDQWdkbUZ5SUhaaGJIVmxjeUE5SUhSeWVVTnZiblpsY25SVWIxQnliMjFwYzJVb2RHaHBjeTVmZG1Gc2RXVnpMQ0IwYUdsekxsOXdjbTl0YVhObEtUdGNiaUFnSUNCcFppQW9kbUZzZFdWeklHbHVjM1JoYm1ObGIyWWdVSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0IyWVd4MVpYTWdQU0IyWVd4MVpYTXVYM1JoY21kbGRDZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOTJZV3gxWlhNZ1BTQjJZV3gxWlhNN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVYMmx6Um5Wc1ptbHNiR1ZrS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxjeUE5SUhaaGJIVmxjeTVmZG1Gc2RXVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doYVhOQmNuSmhlU2gyWVd4MVpYTXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHVnljaUE5SUc1bGR5QlFjbTl0YVhObExsUjVjR1ZGY25KdmNpaGNJbVY0Y0dWamRHbHVaeUJoYmlCaGNuSmhlU3dnWVNCd2NtOXRhWE5sSUc5eUlHRWdkR2hsYm1GaWJHVmNYSFV3TURCaFhGeDFNREF3WVNBZ0lDQlRaV1VnYUhSMGNEb3ZMMmR2Ynk1bmJDOXpPRTFOYUdOY1hIVXdNREJoWENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDE5b1lYSmtVbVZxWldOMFgxOG9aWEp5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZG1Gc2RXVnpMbDlwYzFCbGJtUnBibWNvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVnpMbDkwYUdWdUtGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVhWFFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZjbVZxWldOMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIVnVaR1ZtYVc1bFpDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVZXWVd4MVpVbG1SVzF3ZEhsY2JpQWdJQ0FnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgzSmxhbVZqZENoMllXeDFaWE11WDNKbFlYTnZiaWdwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JV2x6UVhKeVlYa29kbUZzZFdWektTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXdjbTl0YVhObExsOXlaV3BsWTNRb1lYQnBVbVZxWldOMGFXOXVLRndpWlhod1pXTjBhVzVuSUdGdUlHRnljbUY1TENCaElIQnliMjFwYzJVZ2IzSWdZU0IwYUdWdVlXSnNaVnhjZFRBd01HRmNYSFV3TURCaElDQWdJRk5sWlNCb2RIUndPaTh2WjI5dkxtZHNMM000VFUxb1kxeGNkVEF3TUdGY0lpa3VYM0psWVhOdmJpZ3BLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gyWVd4MVpYTXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h5WlhOdmJIWmxWbUZzZFdWSlprVnRjSFI1SUQwOVBTQXROU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmNtVnpiMngyWlVWdGNIUjVRWEp5WVhrb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM0psYzI5c2RtVW9kRzlTWlhOdmJIVjBhVzl1Vm1Gc2RXVW9jbVZ6YjJ4MlpWWmhiSFZsU1daRmJYQjBlU2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUd4bGJpQTlJSFJvYVhNdVoyVjBRV04wZFdGc1RHVnVaM1JvS0haaGJIVmxjeTVzWlc1bmRHZ3BPMXh1SUNBZ0lIUm9hWE11WDJ4bGJtZDBhQ0E5SUd4bGJqdGNiaUFnSUNCMGFHbHpMbDkyWVd4MVpYTWdQU0IwYUdsekxuTm9iM1ZzWkVOdmNIbFdZV3gxWlhNb0tTQS9JRzVsZHlCQmNuSmhlU2hzWlc0cElEb2dkR2hwY3k1ZmRtRnNkV1Z6TzF4dUlDQWdJSFpoY2lCd2NtOXRhWE5sSUQwZ2RHaHBjeTVmY0hKdmJXbHpaVHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYmpzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnBjMUpsYzI5c2RtVmtJRDBnZEdocGN5NWZhWE5TWlhOdmJIWmxaQ2dwTzF4dUlDQWdJQ0FnSUNCMllYSWdiV0Y1WW1WUWNtOXRhWE5sSUQwZ2RISjVRMjl1ZG1WeWRGUnZVSEp2YldselpTaDJZV3gxWlhOYmFWMHNJSEJ5YjIxcGMyVXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb2JXRjVZbVZRY205dGFYTmxJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Y1WW1WUWNtOXRhWE5sSUQwZ2JXRjVZbVZRY205dGFYTmxMbDkwWVhKblpYUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hwYzFKbGMyOXNkbVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JXRjVZbVZRY205dGFYTmxMbDlwWjI1dmNtVlNaV3BsWTNScGIyNXpLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLRzFoZVdKbFVISnZiV2x6WlM1ZmFYTlFaVzVrYVc1bktDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhsaVpWQnliMjFwYzJVdVgzQnliM2g1VUhKdmJXbHpaVUZ5Y21GNUtIUm9hWE1zSUdrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNodFlYbGlaVkJ5YjIxcGMyVXVYMmx6Um5Wc1ptbHNiR1ZrS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5d2NtOXRhWE5sUm5Wc1ptbHNiR1ZrS0cxaGVXSmxVSEp2YldselpTNWZkbUZzZFdVb0tTd2dhU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNCeWIyMXBjMlZTWldwbFkzUmxaQ2h0WVhsaVpWQnliMjFwYzJVdVgzSmxZWE52YmlncExDQnBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2doYVhOU1pYTnZiSFpsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZjSEp2YldselpVWjFiR1pwYkd4bFpDaHRZWGxpWlZCeWIyMXBjMlVzSUdrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYmx4dVVISnZiV2x6WlVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVmYVhOU1pYTnZiSFpsWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmZG1Gc2RXVnpJRDA5UFNCdWRXeHNPMXh1ZlR0Y2JseHVVSEp2YldselpVRnljbUY1TG5CeWIzUnZkSGx3WlM1ZmNtVnpiMngyWlNBOUlHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0FnSUhSb2FYTXVYM1poYkhWbGN5QTlJRzUxYkd3N1hHNGdJQ0FnZEdocGN5NWZjSEp2YldselpTNWZablZzWm1sc2JDaDJZV3gxWlNrN1hHNTlPMXh1WEc1UWNtOXRhWE5sUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbDlmYUdGeVpGSmxhbVZqZEY5ZklEMWNibEJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVgzSmxhbVZqZENBOUlHWjFibU4wYVc5dUlDaHlaV0Z6YjI0cElIdGNiaUFnSUNCMGFHbHpMbDkyWVd4MVpYTWdQU0J1ZFd4c08xeHVJQ0FnSUhSb2FYTXVYM0J5YjIxcGMyVXVYM0psYW1WamRFTmhiR3hpWVdOcktISmxZWE52Yml3Z1ptRnNjMlVzSUhSeWRXVXBPMXh1ZlR0Y2JseHVVSEp2YldselpVRnljbUY1TG5CeWIzUnZkSGx3WlM1ZmNISnZiV2x6WlZCeWIyZHlaWE56WldRZ1BTQm1kVzVqZEdsdmJpQW9jSEp2WjNKbGMzTldZV3gxWlN3Z2FXNWtaWGdwSUh0Y2JpQWdJQ0IwYUdsekxsOXdjbTl0YVhObExsOXdjbTluY21WemN5aDdYRzRnSUNBZ0lDQWdJR2x1WkdWNE9pQnBibVJsZUN4Y2JpQWdJQ0FnSUNBZ2RtRnNkV1U2SUhCeWIyZHlaWE56Vm1Gc2RXVmNiaUFnSUNCOUtUdGNibjA3WEc1Y2JseHVVSEp2YldselpVRnljbUY1TG5CeWIzUnZkSGx3WlM1ZmNISnZiV2x6WlVaMWJHWnBiR3hsWkNBOUlHWjFibU4wYVc5dUlDaDJZV3gxWlN3Z2FXNWtaWGdwSUh0Y2JpQWdJQ0IwYUdsekxsOTJZV3gxWlhOYmFXNWtaWGhkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdkbUZ5SUhSdmRHRnNVbVZ6YjJ4MlpXUWdQU0FySzNSb2FYTXVYM1J2ZEdGc1VtVnpiMngyWldRN1hHNGdJQ0FnYVdZZ0tIUnZkR0ZzVW1WemIyeDJaV1FnUGowZ2RHaHBjeTVmYkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0psYzI5c2RtVW9kR2hwY3k1ZmRtRnNkV1Z6S1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVRY205dGFYTmxRWEp5WVhrdWNISnZkRzkwZVhCbExsOXdjbTl0YVhObFVtVnFaV04wWldRZ1BTQm1kVzVqZEdsdmJpQW9jbVZoYzI5dUxDQnBibVJsZUNrZ2UxeHVJQ0FnSUhSb2FYTXVYM1J2ZEdGc1VtVnpiMngyWldRckt6dGNiaUFnSUNCMGFHbHpMbDl5WldwbFkzUW9jbVZoYzI5dUtUdGNibjA3WEc1Y2JsQnliMjFwYzJWQmNuSmhlUzV3Y205MGIzUjVjR1V1YzJodmRXeGtRMjl3ZVZaaGJIVmxjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNibjA3WEc1Y2JsQnliMjFwYzJWQmNuSmhlUzV3Y205MGIzUjVjR1V1WjJWMFFXTjBkV0ZzVEdWdVozUm9JRDBnWm5WdVkzUnBiMjRnS0d4bGJpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCc1pXNDdYRzU5TzF4dVhHNXlaWFIxY200Z1VISnZiV2x6WlVGeWNtRjVPMXh1ZlR0Y2JseHVmU3g3WENJdUwzVjBhV3d1YW5OY0lqb3pPSDFkTERJMU9sdG1kVzVqZEdsdmJpaGZaR1Z5WlhGZkxHMXZaSFZzWlN4bGVIQnZjblJ6S1h0Y2Jsd2lkWE5sSUhOMGNtbGpkRndpTzF4dWRtRnlJSFYwYVd3Z1BTQmZaR1Z5WlhGZktGd2lMaTkxZEdsc0xtcHpYQ0lwTzF4dWRtRnlJRzFoZVdKbFYzSmhjRUZ6UlhKeWIzSWdQU0IxZEdsc0xtMWhlV0psVjNKaGNFRnpSWEp5YjNJN1hHNTJZWElnWlhKeWIzSnpJRDBnWDJSbGNtVnhYeWhjSWk0dlpYSnliM0p6TG1welhDSXBPMXh1ZG1GeUlGUnBiV1Z2ZFhSRmNuSnZjaUE5SUdWeWNtOXljeTVVYVcxbGIzVjBSWEp5YjNJN1hHNTJZWElnVDNCbGNtRjBhVzl1WVd4RmNuSnZjaUE5SUdWeWNtOXljeTVQY0dWeVlYUnBiMjVoYkVWeWNtOXlPMXh1ZG1GeUlHaGhkbVZIWlhSMFpYSnpJRDBnZFhScGJDNW9ZWFpsUjJWMGRHVnljenRjYm5aaGNpQmxjelVnUFNCZlpHVnlaWEZmS0Z3aUxpOWxjelV1YW5OY0lpazdYRzVjYm1aMWJtTjBhVzl1SUdselZXNTBlWEJsWkVWeWNtOXlLRzlpYWlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ2WW1vZ2FXNXpkR0Z1WTJWdlppQkZjbkp2Y2lBbUpseHVJQ0FnSUNBZ0lDQmxjelV1WjJWMFVISnZkRzkwZVhCbFQyWW9iMkpxS1NBOVBUMGdSWEp5YjNJdWNISnZkRzkwZVhCbE8xeHVmVnh1WEc1MllYSWdja1Z5Y205eVMyVjVJRDBnTDE0b1B6cHVZVzFsZkcxbGMzTmhaMlY4YzNSaFkydDhZMkYxYzJVcEpDODdYRzVtZFc1amRHbHZiaUIzY21Gd1FYTlBjR1Z5WVhScGIyNWhiRVZ5Y205eUtHOWlhaWtnZTF4dUlDQWdJSFpoY2lCeVpYUTdYRzRnSUNBZ2FXWWdLR2x6Vlc1MGVYQmxaRVZ5Y205eUtHOWlhaWtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBJRDBnYm1WM0lFOXdaWEpoZEdsdmJtRnNSWEp5YjNJb2IySnFLVHRjYmlBZ0lDQWdJQ0FnY21WMExtNWhiV1VnUFNCdlltb3VibUZ0WlR0Y2JpQWdJQ0FnSUNBZ2NtVjBMbTFsYzNOaFoyVWdQU0J2WW1vdWJXVnpjMkZuWlR0Y2JpQWdJQ0FnSUNBZ2NtVjBMbk4wWVdOcklEMGdiMkpxTG5OMFlXTnJPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2EyVjVjeUE5SUdWek5TNXJaWGx6S0c5aWFpazdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYTJWNWN5NXNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUd0bGVTQTlJR3RsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWEpGY25KdmNrdGxlUzUwWlhOMEtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUmJhMlY1WFNBOUlHOWlhbHRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYUTdYRzRnSUNBZ2ZWeHVJQ0FnSUhWMGFXd3ViV0Z5YTBGelQzSnBaMmx1WVhScGJtZEdjbTl0VW1WcVpXTjBhVzl1S0c5aWFpazdYRzRnSUNBZ2NtVjBkWEp1SUc5aWFqdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JtOWtaV0poWTJ0R2IzSlFjbTl0YVhObEtIQnliMjFwYzJVcElIdGNiaUFnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWlhKeUxDQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmJXbHpaU0E5UFQwZ2JuVnNiQ2tnY21WMGRYSnVPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaGxjbklwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCM2NtRndjR1ZrSUQwZ2QzSmhjRUZ6VDNCbGNtRjBhVzl1WVd4RmNuSnZjaWh0WVhsaVpWZHlZWEJCYzBWeWNtOXlLR1Z5Y2lrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaUzVmWVhSMFlXTm9SWGgwY21GVWNtRmpaU2gzY21Gd2NHVmtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliMjFwYzJVdVgzSmxhbVZqZENoM2NtRndjR1ZrS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUNSZmJHVnVJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHQyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNna1gyeGxiaUF0SURFcE95Qm1iM0lvZG1GeUlDUmZhU0E5SURFN0lDUmZhU0E4SUNSZmJHVnVPeUFyS3lSZmFTa2dlMkZ5WjNOYkpGOXBJQzBnTVYwZ1BTQmhjbWQxYldWdWRITmJKRjlwWFR0OVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y205dGFYTmxMbDltZFd4bWFXeHNLR0Z5WjNNcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaUzVmWm5Wc1ptbHNiQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCd2NtOXRhWE5sSUQwZ2JuVnNiRHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWNiblpoY2lCUWNtOXRhWE5sVW1WemIyeDJaWEk3WEc1cFppQW9JV2hoZG1WSFpYUjBaWEp6S1NCN1hHNGdJQ0FnVUhKdmJXbHpaVkpsYzI5c2RtVnlJRDBnWm5WdVkzUnBiMjRnS0hCeWIyMXBjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3Y205dGFYTmxJRDBnY0hKdmJXbHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhjME5oYkd4aVlXTnJJRDBnYm05a1pXSmhZMnRHYjNKUWNtOXRhWE5sS0hCeWIyMXBjMlVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oYkd4aVlXTnJJRDBnZEdocGN5NWhjME5oYkd4aVlXTnJPMXh1SUNBZ0lIMDdYRzU5WEc1bGJITmxJSHRjYmlBZ0lDQlFjbTl0YVhObFVtVnpiMngyWlhJZ1BTQm1kVzVqZEdsdmJpQW9jSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnliMjFwYzJVZ1BTQndjbTl0YVhObE8xeHVJQ0FnSUgwN1hHNTlYRzVwWmlBb2FHRjJaVWRsZEhSbGNuTXBJSHRjYmlBZ0lDQjJZWElnY0hKdmNDQTlJSHRjYmlBZ0lDQWdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWIyUmxZbUZqYTBadmNsQnliMjFwYzJVb2RHaHBjeTV3Y205dGFYTmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdaWE0xTG1SbFptbHVaVkJ5YjNCbGNuUjVLRkJ5YjIxcGMyVlNaWE52YkhabGNpNXdjbTkwYjNSNWNHVXNJRndpWVhORFlXeHNZbUZqYTF3aUxDQndjbTl3S1R0Y2JpQWdJQ0JsY3pVdVpHVm1hVzVsVUhKdmNHVnlkSGtvVUhKdmJXbHpaVkpsYzI5c2RtVnlMbkJ5YjNSdmRIbHdaU3dnWENKallXeHNZbUZqYTF3aUxDQndjbTl3S1R0Y2JuMWNibHh1VUhKdmJXbHpaVkpsYzI5c2RtVnlMbDl1YjJSbFltRmphMFp2Y2xCeWIyMXBjMlVnUFNCdWIyUmxZbUZqYTBadmNsQnliMjFwYzJVN1hHNWNibEJ5YjIxcGMyVlNaWE52YkhabGNpNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJRndpVzI5aWFtVmpkQ0JRY205dGFYTmxVbVZ6YjJ4MlpYSmRYQ0k3WEc1OU8xeHVYRzVRY205dGFYTmxVbVZ6YjJ4MlpYSXVjSEp2ZEc5MGVYQmxMbkpsYzI5c2RtVWdQVnh1VUhKdmJXbHpaVkpsYzI5c2RtVnlMbkJ5YjNSdmRIbHdaUzVtZFd4bWFXeHNJRDBnWm5WdVkzUnBiMjRnS0haaGJIVmxLU0I3WEc0Z0lDQWdhV1lnS0NFb2RHaHBjeUJwYm5OMFlXNWpaVzltSUZCeWIyMXBjMlZTWlhOdmJIWmxjaWtwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa2xzYkdWbllXd2dhVzUyYjJOaGRHbHZiaXdnY21WemIyeDJaWElnY21WemIyeDJaUzl5WldwbFkzUWdiWFZ6ZENCaVpTQmpZV3hzWldRZ2QybDBhR2x1SUdFZ2NtVnpiMngyWlhJZ1kyOXVkR1Y0ZEM0Z1EyOXVjMmxrWlhJZ2RYTnBibWNnZEdobElIQnliMjFwYzJVZ1kyOXVjM1J5ZFdOMGIzSWdhVzV6ZEdWaFpDNWNYSFV3TURCaFhGeDFNREF3WVNBZ0lDQlRaV1VnYUhSMGNEb3ZMMmR2Ynk1bmJDOXpaR3RZVERsY1hIVXdNREJoWENJcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuQnliMjFwYzJVdVgzSmxjMjlzZG1WRFlXeHNZbUZqYXloMllXeDFaU2s3WEc1OU8xeHVYRzVRY205dGFYTmxVbVZ6YjJ4MlpYSXVjSEp2ZEc5MGVYQmxMbkpsYW1WamRDQTlJR1oxYm1OMGFXOXVJQ2h5WldGemIyNHBJSHRjYmlBZ0lDQnBaaUFvSVNoMGFHbHpJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaVkpsYzI5c2RtVnlLU2tnZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lTV3hzWldkaGJDQnBiblp2WTJGMGFXOXVMQ0J5WlhOdmJIWmxjaUJ5WlhOdmJIWmxMM0psYW1WamRDQnRkWE4wSUdKbElHTmhiR3hsWkNCM2FYUm9hVzRnWVNCeVpYTnZiSFpsY2lCamIyNTBaWGgwTGlCRGIyNXphV1JsY2lCMWMybHVaeUIwYUdVZ2NISnZiV2x6WlNCamIyNXpkSEoxWTNSdmNpQnBibk4wWldGa0xseGNkVEF3TUdGY1hIVXdNREJoSUNBZ0lGTmxaU0JvZEhSd09pOHZaMjl2TG1kc0wzTmthMWhNT1Z4Y2RUQXdNR0ZjSWlrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWNISnZiV2x6WlM1ZmNtVnFaV04wUTJGc2JHSmhZMnNvY21WaGMyOXVLVHRjYm4wN1hHNWNibEJ5YjIxcGMyVlNaWE52YkhabGNpNXdjbTkwYjNSNWNHVXVjSEp2WjNKbGMzTWdQU0JtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQnBaaUFvSVNoMGFHbHpJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaVkpsYzI5c2RtVnlLU2tnZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lTV3hzWldkaGJDQnBiblp2WTJGMGFXOXVMQ0J5WlhOdmJIWmxjaUJ5WlhOdmJIWmxMM0psYW1WamRDQnRkWE4wSUdKbElHTmhiR3hsWkNCM2FYUm9hVzRnWVNCeVpYTnZiSFpsY2lCamIyNTBaWGgwTGlCRGIyNXphV1JsY2lCMWMybHVaeUIwYUdVZ2NISnZiV2x6WlNCamIyNXpkSEoxWTNSdmNpQnBibk4wWldGa0xseGNkVEF3TUdGY1hIVXdNREJoSUNBZ0lGTmxaU0JvZEhSd09pOHZaMjl2TG1kc0wzTmthMWhNT1Z4Y2RUQXdNR0ZjSWlrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWNISnZiV2x6WlM1ZmNISnZaM0psYzNNb2RtRnNkV1VwTzF4dWZUdGNibHh1VUhKdmJXbHpaVkpsYzI5c2RtVnlMbkJ5YjNSdmRIbHdaUzVqWVc1alpXd2dQU0JtZFc1amRHbHZiaUFvWlhKeUtTQjdYRzRnSUNBZ2RHaHBjeTV3Y205dGFYTmxMbU5oYm1ObGJDaGxjbklwTzF4dWZUdGNibHh1VUhKdmJXbHpaVkpsYzI5c2RtVnlMbkJ5YjNSdmRIbHdaUzUwYVcxbGIzVjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZxWldOMEtHNWxkeUJVYVcxbGIzVjBSWEp5YjNJb1hDSjBhVzFsYjNWMFhDSXBLVHRjYm4wN1hHNWNibEJ5YjIxcGMyVlNaWE52YkhabGNpNXdjbTkwYjNSNWNHVXVhWE5TWlhOdmJIWmxaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdjbTl0YVhObExtbHpVbVZ6YjJ4MlpXUW9LVHRjYm4wN1hHNWNibEJ5YjIxcGMyVlNaWE52YkhabGNpNXdjbTkwYjNSNWNHVXVkRzlLVTA5T0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CeWIyMXBjMlV1ZEc5S1UwOU9LQ2s3WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRkJ5YjIxcGMyVlNaWE52YkhabGNqdGNibHh1ZlN4N1hDSXVMMlZ5Y205eWN5NXFjMXdpT2pFekxGd2lMaTlsY3pVdWFuTmNJam94TkN4Y0lpNHZkWFJwYkM1cWMxd2lPak00ZlYwc01qWTZXMloxYm1OMGFXOXVLRjlrWlhKbGNWOHNiVzlrZFd4bExHVjRjRzl5ZEhNcGUxeHVYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtGQnliMjFwYzJVc0lFbE9WRVZTVGtGTUtTQjdYRzUyWVhJZ1ZFaEpVeUE5SUh0OU8xeHVkbUZ5SUhWMGFXd2dQU0JmWkdWeVpYRmZLRndpTGk5MWRHbHNMbXB6WENJcE8xeHVkbUZ5SUc1dlpHVmlZV05yUm05eVVISnZiV2x6WlNBOUlGOWtaWEpsY1Y4b1hDSXVMM0J5YjIxcGMyVmZjbVZ6YjJ4MlpYSXVhbk5jSWlsY2JpQWdJQ0F1WDI1dlpHVmlZV05yUm05eVVISnZiV2x6WlR0Y2JuWmhjaUIzYVhSb1FYQndaVzVrWldRZ1BTQjFkR2xzTG5kcGRHaEJjSEJsYm1SbFpEdGNiblpoY2lCdFlYbGlaVmR5WVhCQmMwVnljbTl5SUQwZ2RYUnBiQzV0WVhsaVpWZHlZWEJCYzBWeWNtOXlPMXh1ZG1GeUlHTmhia1YyWVd4MVlYUmxJRDBnZFhScGJDNWpZVzVGZG1Gc2RXRjBaVHRjYm5aaGNpQlVlWEJsUlhKeWIzSWdQU0JmWkdWeVpYRmZLRndpTGk5bGNuSnZjbk5jSWlrdVZIbHdaVVZ5Y205eU8xeHVkbUZ5SUdSbFptRjFiSFJUZFdabWFYZ2dQU0JjSWtGemVXNWpYQ0k3WEc1MllYSWdaR1ZtWVhWc2RGQnliMjFwYzJsbWFXVmtJRDBnZTE5ZmFYTlFjbTl0YVhOcFptbGxaRjlmT2lCMGNuVmxmVHRjYm5aaGNpQnViME52Y0hsUWNtOXdjeUE5SUZ0Y2JpQWdJQ0JjSW1GeWFYUjVYQ0lzSUNBZ0lGd2liR1Z1WjNSb1hDSXNYRzRnSUNBZ1hDSnVZVzFsWENJc1hHNGdJQ0FnWENKaGNtZDFiV1Z1ZEhOY0lpeGNiaUFnSUNCY0ltTmhiR3hsY2x3aUxGeHVJQ0FnSUZ3aVkyRnNiR1ZsWENJc1hHNGdJQ0FnWENKd2NtOTBiM1I1Y0dWY0lpeGNiaUFnSUNCY0lsOWZhWE5RY205dGFYTnBabWxsWkY5ZlhDSmNibDA3WEc1MllYSWdibTlEYjNCNVVISnZjSE5RWVhSMFpYSnVJRDBnYm1WM0lGSmxaMFY0Y0NoY0lsNG9QenBjSWlBcklHNXZRMjl3ZVZCeWIzQnpMbXB2YVc0b1hDSjhYQ0lwSUNzZ1hDSXBKRndpS1R0Y2JseHVkbUZ5SUdSbFptRjFiSFJHYVd4MFpYSWdQU0JtZFc1amRHbHZiaWh1WVcxbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhWMGFXd3VhWE5KWkdWdWRHbG1hV1Z5S0c1aGJXVXBJQ1ltWEc0Z0lDQWdJQ0FnSUc1aGJXVXVZMmhoY2tGMEtEQXBJQ0U5UFNCY0lsOWNJaUFtSmx4dUlDQWdJQ0FnSUNCdVlXMWxJQ0U5UFNCY0ltTnZibk4wY25WamRHOXlYQ0k3WEc1OU8xeHVYRzVtZFc1amRHbHZiaUJ3Y205d2MwWnBiSFJsY2loclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z0lXNXZRMjl3ZVZCeWIzQnpVR0YwZEdWeWJpNTBaWE4wS0d0bGVTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHpVSEp2YldsemFXWnBaV1FvWm00cElIdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabTR1WDE5cGMxQnliMjFwYzJsbWFXVmtYMThnUFQwOUlIUnlkV1U3WEc0Z0lDQWdmVnh1SUNBZ0lHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR2hoYzFCeWIyMXBjMmxtYVdWa0tHOWlhaXdnYTJWNUxDQnpkV1ptYVhncElIdGNiaUFnSUNCMllYSWdkbUZzSUQwZ2RYUnBiQzVuWlhSRVlYUmhVSEp2Y0dWeWRIbFBja1JsWm1GMWJIUW9iMkpxTENCclpYa2dLeUJ6ZFdabWFYZ3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUlFjbTl0YVhOcFptbGxaQ2s3WEc0Z0lDQWdjbVYwZFhKdUlIWmhiQ0EvSUdselVISnZiV2x6YVdacFpXUW9kbUZzS1NBNklHWmhiSE5sTzF4dWZWeHVablZ1WTNScGIyNGdZMmhsWTJ0V1lXeHBaQ2h5WlhRc0lITjFabVpwZUN3Z2MzVm1abWw0VW1WblpYaHdLU0I3WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J5WlhRdWJHVnVaM1JvT3lCcElDczlJRElwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3RsZVNBOUlISmxkRnRwWFR0Y2JpQWdJQ0FnSUNBZ2FXWWdLSE4xWm1acGVGSmxaMlY0Y0M1MFpYTjBLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnJaWGxYYVhSb2IzVjBRWE41Ym1OVGRXWm1hWGdnUFNCclpYa3VjbVZ3YkdGalpTaHpkV1ptYVhoU1pXZGxlSEFzSUZ3aVhDSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FpQTlJREE3SUdvZ1BDQnlaWFF1YkdWdVozUm9PeUJxSUNzOUlESXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NtVjBXMnBkSUQwOVBTQnJaWGxYYVhSb2IzVjBRWE41Ym1OVGRXWm1hWGdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSWtOaGJtNXZkQ0J3Y205dGFYTnBabmtnWVc0Z1FWQkpJSFJvWVhRZ2FHRnpJRzV2Y20xaGJDQnRaWFJvYjJSeklIZHBkR2dnSnlWekp5MXpkV1ptYVhoY1hIVXdNREJoWEZ4MU1EQXdZU0FnSUNCVFpXVWdhSFIwY0RvdkwyZHZieTVuYkM5cFYzSmFZbmRjWEhVd01EQmhYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzV5WlhCc1lXTmxLRndpSlhOY0lpd2djM1ZtWm1sNEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCd2NtOXRhWE5wWm1saFlteGxUV1YwYUc5a2N5aHZZbW9zSUhOMVptWnBlQ3dnYzNWbVptbDRVbVZuWlhod0xDQm1hV3gwWlhJcElIdGNiaUFnSUNCMllYSWdhMlY1Y3lBOUlIVjBhV3d1YVc1b1pYSnBkR1ZrUkdGMFlVdGxlWE1vYjJKcUtUdGNiaUFnSUNCMllYSWdjbVYwSUQwZ1cxMDdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnJaWGx6TG14bGJtZDBhRHNnS3l0cEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCclpYa2dQU0JyWlhselcybGRPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RtRnNkV1VnUFNCdlltcGJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJoYzNObGMwUmxabUYxYkhSR2FXeDBaWElnUFNCbWFXeDBaWElnUFQwOUlHUmxabUYxYkhSR2FXeDBaWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lEOGdkSEoxWlNBNklHUmxabUYxYkhSR2FXeDBaWElvYTJWNUxDQjJZV3gxWlN3Z2IySnFLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQWhhWE5RY205dGFYTnBabWxsWkNoMllXeDFaU2tnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJQ0ZvWVhOUWNtOXRhWE5wWm1sbFpDaHZZbW9zSUd0bGVTd2djM1ZtWm1sNEtTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptbHNkR1Z5S0d0bGVTd2dkbUZzZFdVc0lHOWlhaXdnY0dGemMyVnpSR1ZtWVhWc2RFWnBiSFJsY2lrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRDNXdkWE5vS0d0bGVTd2dkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUdOb1pXTnJWbUZzYVdRb2NtVjBMQ0J6ZFdabWFYZ3NJSE4xWm1acGVGSmxaMlY0Y0NrN1hHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JuMWNibHh1ZG1GeUlHVnpZMkZ3WlVsa1pXNTBVbVZuWlhnZ1BTQm1kVzVqZEdsdmJpaHpkSElwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjM1J5TG5KbGNHeGhZMlVvTHloYkpGMHBMeXdnWENKY1hGeGNKRndpS1R0Y2JuMDdYRzVjYm5aaGNpQnRZV3RsVG05a1pWQnliMjFwYzJsbWFXVmtSWFpoYkR0Y2JtbG1JQ2doZEhKMVpTa2dlMXh1ZG1GeUlITjNhWFJqYUVOaGMyVkJjbWQxYldWdWRFOXlaR1Z5SUQwZ1puVnVZM1JwYjI0b2JHbHJaV3g1UVhKbmRXMWxiblJEYjNWdWRDa2dlMXh1SUNBZ0lIWmhjaUJ5WlhRZ1BTQmJiR2xyWld4NVFYSm5kVzFsYm5SRGIzVnVkRjA3WEc0Z0lDQWdkbUZ5SUcxcGJpQTlJRTFoZEdndWJXRjRLREFzSUd4cGEyVnNlVUZ5WjNWdFpXNTBRMjkxYm5RZ0xTQXhJQzBnTXlrN1hHNGdJQ0FnWm05eUtIWmhjaUJwSUQwZ2JHbHJaV3g1UVhKbmRXMWxiblJEYjNWdWRDQXRJREU3SUdrZ1BqMGdiV2x1T3lBdExXa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMExuQjFjMmdvYVNrN1hHNGdJQ0FnZlZ4dUlDQWdJR1p2Y2loMllYSWdhU0E5SUd4cGEyVnNlVUZ5WjNWdFpXNTBRMjkxYm5RZ0t5QXhPeUJwSUR3OUlETTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFF1Y0hWemFDaHBLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhKbGREdGNibjA3WEc1Y2JuWmhjaUJoY21kMWJXVnVkRk5sY1hWbGJtTmxJRDBnWm5WdVkzUnBiMjRvWVhKbmRXMWxiblJEYjNWdWRDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMWRHbHNMbVpwYkd4bFpGSmhibWRsS0dGeVozVnRaVzUwUTI5MWJuUXNJRndpWDJGeVoxd2lMQ0JjSWx3aUtUdGNibjA3WEc1Y2JuWmhjaUJ3WVhKaGJXVjBaWEpFWldOc1lYSmhkR2x2YmlBOUlHWjFibU4wYVc5dUtIQmhjbUZ0WlhSbGNrTnZkVzUwS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFYwYVd3dVptbHNiR1ZrVW1GdVoyVW9YRzRnSUNBZ0lDQWdJRTFoZEdndWJXRjRLSEJoY21GdFpYUmxja052ZFc1MExDQXpLU3dnWENKZllYSm5YQ0lzSUZ3aVhDSXBPMXh1ZlR0Y2JseHVkbUZ5SUhCaGNtRnRaWFJsY2tOdmRXNTBJRDBnWm5WdVkzUnBiMjRvWm00cElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHWnVMbXhsYm1kMGFDQTlQVDBnWENKdWRXMWlaWEpjSWlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1ptNHViR1Z1WjNSb0xDQXhNREl6SUNzZ01Ta3NJREFwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z01EdGNibjA3WEc1Y2JtMWhhMlZPYjJSbFVISnZiV2x6YVdacFpXUkZkbUZzSUQxY2JtWjFibU4wYVc5dUtHTmhiR3hpWVdOckxDQnlaV05sYVhabGNpd2diM0pwWjJsdVlXeE9ZVzFsTENCbWJpa2dlMXh1SUNBZ0lIWmhjaUJ1WlhkUVlYSmhiV1YwWlhKRGIzVnVkQ0E5SUUxaGRHZ3ViV0Y0S0RBc0lIQmhjbUZ0WlhSbGNrTnZkVzUwS0dadUtTQXRJREVwTzF4dUlDQWdJSFpoY2lCaGNtZDFiV1Z1ZEU5eVpHVnlJRDBnYzNkcGRHTm9RMkZ6WlVGeVozVnRaVzUwVDNKa1pYSW9ibVYzVUdGeVlXMWxkR1Z5UTI5MWJuUXBPMXh1SUNBZ0lIWmhjaUJ6YUc5MWJHUlFjbTk0ZVZSb2FYTWdQU0IwZVhCbGIyWWdZMkZzYkdKaFkyc2dQVDA5SUZ3aWMzUnlhVzVuWENJZ2ZId2djbVZqWldsMlpYSWdQVDA5SUZSSVNWTTdYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQm5aVzVsY21GMFpVTmhiR3hHYjNKQmNtZDFiV1Z1ZEVOdmRXNTBLR052ZFc1MEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCaGNtZHpJRDBnWVhKbmRXMWxiblJUWlhGMVpXNWpaU2hqYjNWdWRDa3VhbTlwYmloY0lpd2dYQ0lwTzF4dUlDQWdJQ0FnSUNCMllYSWdZMjl0YldFZ1BTQmpiM1Z1ZENBK0lEQWdQeUJjSWl3Z1hDSWdPaUJjSWx3aU8xeHVJQ0FnSUNBZ0lDQjJZWElnY21WME8xeHVJQ0FnSUNBZ0lDQnBaaUFvYzJodmRXeGtVSEp2ZUhsVWFHbHpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFFnUFNCY0luSmxkQ0E5SUdOaGJHeGlZV05yTG1OaGJHd29kR2hwY3l3Z2UzdGhjbWR6Zlgwc0lHNXZaR1ZpWVdOcktUc2dZbkpsWVdzN1hGeHVYQ0k3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFFnUFNCeVpXTmxhWFpsY2lBOVBUMGdkVzVrWldacGJtVmtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQeUJjSW5KbGRDQTlJR05oYkd4aVlXTnJLSHQ3WVhKbmMzMTlMQ0J1YjJSbFltRmpheWs3SUdKeVpXRnJPMXhjYmx3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ09pQmNJbkpsZENBOUlHTmhiR3hpWVdOckxtTmhiR3dvY21WalpXbDJaWElzSUh0N1lYSm5jMzE5TENCdWIyUmxZbUZqYXlrN0lHSnlaV0ZyTzF4Y2Jsd2lPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhRdWNtVndiR0ZqWlNoY0ludDdZWEpuYzMxOVhDSXNJR0Z5WjNNcExuSmxjR3hoWTJVb1hDSXNJRndpTENCamIyMXRZU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdablZ1WTNScGIyNGdaMlZ1WlhKaGRHVkJjbWQxYldWdWRGTjNhWFJqYUVOaGMyVW9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWFFnUFNCY0lsd2lPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdGeVozVnRaVzUwVDNKa1pYSXViR1Z1WjNSb095QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZENBclBTQmNJbU5oYzJVZ1hDSWdLeUJoY21kMWJXVnVkRTl5WkdWeVcybGRJQ3RjSWpwY0lpQXJYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaMlZ1WlhKaGRHVkRZV3hzUm05eVFYSm5kVzFsYm5SRGIzVnVkQ2hoY21kMWJXVnVkRTl5WkdWeVcybGRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkQ0FyUFNCY0lpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0JrWldaaGRXeDBPaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdGeVozTWdQU0J1WlhjZ1FYSnlZWGtvYkdWdUlDc2dNU2s3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHa2dQU0F3T3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dleUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhKbmMxdHBYU0E5SUdGeVozVnRaVzUwYzF0cFhUc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSm5jMXRwWFNBOUlHNXZaR1ZpWVdOck95QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdXME52WkdWR2IzSkRZV3hzWFNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0JjSWk1eVpYQnNZV05sS0Z3aVcwTnZaR1ZHYjNKRFlXeHNYVndpTENBb2MyaHZkV3hrVUhKdmVIbFVhR2x6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDhnWENKeVpYUWdQU0JqWVd4c1ltRmpheTVoY0hCc2VTaDBhR2x6TENCaGNtZHpLVHRjWEc1Y0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBNklGd2ljbVYwSUQwZ1kyRnNiR0poWTJzdVlYQndiSGtvY21WalpXbDJaWElzSUdGeVozTXBPMXhjYmx3aUtTazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWFE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUdkbGRFWjFibU4wYVc5dVEyOWtaU0E5SUhSNWNHVnZaaUJqWVd4c1ltRmpheUE5UFQwZ1hDSnpkSEpwYm1kY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lDaGNJblJvYVhNZ0lUMGdiblZzYkNBL0lIUm9hWE5iSjF3aUsyTmhiR3hpWVdOcksxd2lKMTBnT2lCbWJsd2lLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQTZJRndpWm01Y0lqdGNibHh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dSblZ1WTNScGIyNG9YQ0pRY205dGFYTmxYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW1adVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbkpsWTJWcGRtVnlYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW5kcGRHaEJjSEJsYm1SbFpGd2lMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0p0WVhsaVpWZHlZWEJCYzBWeWNtOXlYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW01dlpHVmlZV05yUm05eVVISnZiV2x6WlZ3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hDSjBjbmxEWVhSamFGd2lMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0psY25KdmNrOWlhbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKdWIzUkZiblZ0WlhKaFlteGxVSEp2Y0Z3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hDSkpUbFJGVWs1QlRGd2lMRndpSjNWelpTQnpkSEpwWTNRbk95QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNCMllYSWdjbVYwSUQwZ1puVnVZM1JwYjI0Z0tGQmhjbUZ0WlhSbGNuTXBJSHNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnSjNWelpTQnpkSEpwWTNRbk95QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR3hsYmlBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhCeWIyMXBjMlVnUFNCdVpYY2dVSEp2YldselpTaEpUbFJGVWs1QlRDazdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaUzVmWTJGd2RIVnlaVk4wWVdOclZISmhZMlVvS1RzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzV2WkdWaVlXTnJJRDBnYm05a1pXSmhZMnRHYjNKUWNtOXRhWE5sS0hCeWIyMXBjMlVwT3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbGREc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTmhiR3hpWVdOcklEMGdkSEo1UTJGMFkyZ29XMGRsZEVaMWJtTjBhVzl1UTI5a1pWMHBPeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzZHBkR05vS0d4bGJpa2dleUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ0RGIyUmxSbTl5VTNkcGRHTm9RMkZ6WlYwZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEpsZENBOVBUMGdaWEp5YjNKUFltb3BJSHNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyMXBjMlV1WDNKbGFtVmpkRU5oYkd4aVlXTnJLRzFoZVdKbFYzSmhjRUZ6UlhKeWIzSW9jbVYwTG1VcExDQjBjblZsTENCMGNuVmxLVHRjWEc1Y1hGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCeWIyMXBjMlU3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNCOU95QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEc1Y1hGeHVJQ0FnSUNBZ0lDQnViM1JGYm5WdFpYSmhZbXhsVUhKdmNDaHlaWFFzSUNkZlgybHpVSEp2YldsemFXWnBaV1JmWHljc0lIUnlkV1VwT3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hHNWNYRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVYwT3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRzVjWEZ4dUlDQWdJQ0FnSUNCY0lseHVJQ0FnSUNBZ0lDQXVjbVZ3YkdGalpTaGNJbEJoY21GdFpYUmxjbk5jSWl3Z2NHRnlZVzFsZEdWeVJHVmpiR0Z5WVhScGIyNG9ibVYzVUdGeVlXMWxkR1Z5UTI5MWJuUXBLVnh1SUNBZ0lDQWdJQ0F1Y21Wd2JHRmpaU2hjSWx0RGIyUmxSbTl5VTNkcGRHTm9RMkZ6WlYxY0lpd2daMlZ1WlhKaGRHVkJjbWQxYldWdWRGTjNhWFJqYUVOaGMyVW9LU2xjYmlBZ0lDQWdJQ0FnTG5KbGNHeGhZMlVvWENKYlIyVjBSblZ1WTNScGIyNURiMlJsWFZ3aUxDQm5aWFJHZFc1amRHbHZia052WkdVcEtTaGNiaUFnSUNBZ0lDQWdJQ0FnSUZCeWIyMXBjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMlZwZG1WeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsMGFFRndjR1Z1WkdWa0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGNVltVlhjbUZ3UVhORmNuSnZjaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1ZpWVdOclJtOXlVSEp2YldselpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWMGFXd3VkSEo1UTJGMFkyZ3NYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNMbVZ5Y205eVQySnFMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiQzV1YjNSRmJuVnRaWEpoWW14bFVISnZjQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFbE9WRVZTVGtGTVhHNGdJQ0FnSUNBZ0lDazdYRzU5TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ0WVd0bFRtOWtaVkJ5YjIxcGMybG1hV1ZrUTJ4dmMzVnlaU2hqWVd4c1ltRmpheXdnY21WalpXbDJaWElzSUY4c0lHWnVLU0I3WEc0Z0lDQWdkbUZ5SUdSbFptRjFiSFJVYUdseklEMGdLR1oxYm1OMGFXOXVLQ2tnZTNKbGRIVnliaUIwYUdsek8zMHBLQ2s3WEc0Z0lDQWdkbUZ5SUcxbGRHaHZaQ0E5SUdOaGJHeGlZV05yTzF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYldWMGFHOWtJRDA5UFNCY0luTjBjbWx1WjF3aUtTQjdYRzRnSUNBZ0lDQWdJR05oYkd4aVlXTnJJRDBnWm00N1hHNGdJQ0FnZlZ4dUlDQWdJR1oxYm1OMGFXOXVJSEJ5YjIxcGMybG1hV1ZrS0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWDNKbFkyVnBkbVZ5SUQwZ2NtVmpaV2wyWlhJN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h5WldObGFYWmxjaUE5UFQwZ1ZFaEpVeWtnWDNKbFkyVnBkbVZ5SUQwZ2RHaHBjenRjYmlBZ0lDQWdJQ0FnZG1GeUlIQnliMjFwYzJVZ1BTQnVaWGNnVUhKdmJXbHpaU2hKVGxSRlVrNUJUQ2s3WEc0Z0lDQWdJQ0FnSUhCeWIyMXBjMlV1WDJOaGNIUjFjbVZUZEdGamExUnlZV05sS0NrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqWWlBOUlIUjVjR1Z2WmlCdFpYUm9iMlFnUFQwOUlGd2ljM1J5YVc1blhDSWdKaVlnZEdocGN5QWhQVDBnWkdWbVlYVnNkRlJvYVhOY2JpQWdJQ0FnSUNBZ0lDQWdJRDhnZEdocGMxdHRaWFJvYjJSZElEb2dZMkZzYkdKaFkyczdYRzRnSUNBZ0lDQWdJSFpoY2lCbWJpQTlJRzV2WkdWaVlXTnJSbTl5VUhKdmJXbHpaU2h3Y205dGFYTmxLVHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaUxtRndjR3g1S0Y5eVpXTmxhWFpsY2l3Z2QybDBhRUZ3Y0dWdVpHVmtLR0Z5WjNWdFpXNTBjeXdnWm00cEtUdGNiaUFnSUNBZ0lDQWdmU0JqWVhSamFDaGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTl0YVhObExsOXlaV3BsWTNSRFlXeHNZbUZqYXlodFlYbGlaVmR5WVhCQmMwVnljbTl5S0dVcExDQjBjblZsTENCMGNuVmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0hKdmJXbHpaVHRjYmlBZ0lDQjlYRzRnSUNBZ2RYUnBiQzV1YjNSRmJuVnRaWEpoWW14bFVISnZjQ2h3Y205dGFYTnBabWxsWkN3Z1hDSmZYMmx6VUhKdmJXbHphV1pwWldSZlgxd2lMQ0IwY25WbEtUdGNiaUFnSUNCeVpYUjFjbTRnY0hKdmJXbHphV1pwWldRN1hHNTlYRzVjYm5aaGNpQnRZV3RsVG05a1pWQnliMjFwYzJsbWFXVmtJRDBnWTJGdVJYWmhiSFZoZEdWY2JpQWdJQ0EvSUcxaGEyVk9iMlJsVUhKdmJXbHphV1pwWldSRmRtRnNYRzRnSUNBZ09pQnRZV3RsVG05a1pWQnliMjFwYzJsbWFXVmtRMnh2YzNWeVpUdGNibHh1Wm5WdVkzUnBiMjRnY0hKdmJXbHphV1o1UVd4c0tHOWlhaXdnYzNWbVptbDRMQ0JtYVd4MFpYSXNJSEJ5YjIxcGMybG1hV1Z5S1NCN1hHNGdJQ0FnZG1GeUlITjFabVpwZUZKbFoyVjRjQ0E5SUc1bGR5QlNaV2RGZUhBb1pYTmpZWEJsU1dSbGJuUlNaV2RsZUNoemRXWm1hWGdwSUNzZ1hDSWtYQ0lwTzF4dUlDQWdJSFpoY2lCdFpYUm9iMlJ6SUQxY2JpQWdJQ0FnSUNBZ2NISnZiV2x6YVdacFlXSnNaVTFsZEdodlpITW9iMkpxTENCemRXWm1hWGdzSUhOMVptWnBlRkpsWjJWNGNDd2dabWxzZEdWeUtUdGNibHh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3TENCc1pXNGdQU0J0WlhSb2IyUnpMbXhsYm1kMGFEc2dhU0E4SUd4bGJqc2dhU3M5SURJcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUd0bGVTQTlJRzFsZEdodlpITmJhVjA3WEc0Z0lDQWdJQ0FnSUhaaGNpQm1iaUE5SUcxbGRHaHZaSE5iYVNzeFhUdGNiaUFnSUNBZ0lDQWdkbUZ5SUhCeWIyMXBjMmxtYVdWa1MyVjVJRDBnYTJWNUlDc2djM1ZtWm1sNE8xeHVJQ0FnSUNBZ0lDQnZZbXBiY0hKdmJXbHphV1pwWldSTFpYbGRJRDBnY0hKdmJXbHphV1pwWlhJZ1BUMDlJRzFoYTJWT2IyUmxVSEp2YldsemFXWnBaV1JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUcxaGEyVk9iMlJsVUhKdmJXbHphV1pwWldRb2EyVjVMQ0JVU0VsVExDQnJaWGtzSUdadUxDQnpkV1ptYVhncFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ09pQndjbTl0YVhOcFptbGxjaWhtYml3Z1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ0WVd0bFRtOWtaVkJ5YjIxcGMybG1hV1ZrS0d0bGVTd2dWRWhKVXl3Z2EyVjVMQ0JtYml3Z2MzVm1abWw0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNGdJQ0FnZFhScGJDNTBiMFpoYzNSUWNtOXdaWEowYVdWektHOWlhaWs3WEc0Z0lDQWdjbVYwZFhKdUlHOWlhanRjYm4xY2JseHVablZ1WTNScGIyNGdjSEp2YldsemFXWjVLR05oYkd4aVlXTnJMQ0J5WldObGFYWmxjaWtnZTF4dUlDQWdJSEpsZEhWeWJpQnRZV3RsVG05a1pWQnliMjFwYzJsbWFXVmtLR05oYkd4aVlXTnJMQ0J5WldObGFYWmxjaXdnZFc1a1pXWnBibVZrTENCallXeHNZbUZqYXlrN1hHNTlYRzVjYmxCeWIyMXBjMlV1Y0hKdmJXbHphV1o1SUQwZ1puVnVZM1JwYjI0Z0tHWnVMQ0J5WldObGFYWmxjaWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWm00Z0lUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRndpWm00Z2JYVnpkQ0JpWlNCaElHWjFibU4wYVc5dVhGeDFNREF3WVZ4Y2RUQXdNR0VnSUNBZ1UyVmxJR2gwZEhBNkx5OW5iMjh1WjJ3dk9URTJiRXBLWEZ4MU1EQXdZVndpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0dselVISnZiV2x6YVdacFpXUW9abTRwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbWJqdGNiaUFnSUNCOVhHNGdJQ0FnZG1GeUlISmxkQ0E5SUhCeWIyMXBjMmxtZVNobWJpd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQThJRElnUHlCVVNFbFRJRG9nY21WalpXbDJaWElwTzF4dUlDQWdJSFYwYVd3dVkyOXdlVVJsYzJOeWFYQjBiM0p6S0dadUxDQnlaWFFzSUhCeWIzQnpSbWxzZEdWeUtUdGNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOXRhWE5wWm5sQmJHd2dQU0JtZFc1amRHbHZiaUFvZEdGeVoyVjBMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIwWVhKblpYUWdJVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpQW1KaUIwZVhCbGIyWWdkR0Z5WjJWMElDRTlQU0JjSW05aWFtVmpkRndpS1NCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YQ0owYUdVZ2RHRnlaMlYwSUc5bUlIQnliMjFwYzJsbWVVRnNiQ0J0ZFhOMElHSmxJR0Z1SUc5aWFtVmpkQ0J2Y2lCaElHWjFibU4wYVc5dVhGeDFNREF3WVZ4Y2RUQXdNR0VnSUNBZ1UyVmxJR2gwZEhBNkx5OW5iMjh1WjJ3dk9VbFViRll3WEZ4MU1EQXdZVndpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdiM0IwYVc5dWN5QTlJRTlpYW1WamRDaHZjSFJwYjI1ektUdGNiaUFnSUNCMllYSWdjM1ZtWm1sNElEMGdiM0IwYVc5dWN5NXpkV1ptYVhnN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCemRXWm1hWGdnSVQwOUlGd2ljM1J5YVc1blhDSXBJSE4xWm1acGVDQTlJR1JsWm1GMWJIUlRkV1ptYVhnN1hHNGdJQ0FnZG1GeUlHWnBiSFJsY2lBOUlHOXdkR2x2Ym5NdVptbHNkR1Z5TzF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWm1sc2RHVnlJQ0U5UFNCY0ltWjFibU4wYVc5dVhDSXBJR1pwYkhSbGNpQTlJR1JsWm1GMWJIUkdhV3gwWlhJN1hHNGdJQ0FnZG1GeUlIQnliMjFwYzJsbWFXVnlJRDBnYjNCMGFXOXVjeTV3Y205dGFYTnBabWxsY2p0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhCeWIyMXBjMmxtYVdWeUlDRTlQU0JjSW1aMWJtTjBhVzl1WENJcElIQnliMjFwYzJsbWFXVnlJRDBnYldGclpVNXZaR1ZRY205dGFYTnBabWxsWkR0Y2JseHVJQ0FnSUdsbUlDZ2hkWFJwYkM1cGMwbGtaVzUwYVdacFpYSW9jM1ZtWm1sNEtTa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2loY0luTjFabVpwZUNCdGRYTjBJR0psSUdFZ2RtRnNhV1FnYVdSbGJuUnBabWxsY2x4Y2RUQXdNR0ZjWEhVd01EQmhJQ0FnSUZObFpTQm9kSFJ3T2k4dloyOXZMbWRzTHpoR1dtODFWbHhjZFRBd01HRmNJaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUd0bGVYTWdQU0IxZEdsc0xtbHVhR1Z5YVhSbFpFUmhkR0ZMWlhsektIUmhjbWRsZENrN1hHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCclpYbHpMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUIyWVd4MVpTQTlJSFJoY21kbGRGdHJaWGx6VzJsZFhUdGNiaUFnSUNBZ0lDQWdhV1lnS0d0bGVYTmJhVjBnSVQwOUlGd2lZMjl1YzNSeWRXTjBiM0pjSWlBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJDNXBjME5zWVhOektIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHphV1o1UVd4c0tIWmhiSFZsTG5CeWIzUnZkSGx3WlN3Z2MzVm1abWw0TENCbWFXeDBaWElzSUhCeWIyMXBjMmxtYVdWeUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeWIyMXBjMmxtZVVGc2JDaDJZV3gxWlN3Z2MzVm1abWw0TENCbWFXeDBaWElzSUhCeWIyMXBjMmxtYVdWeUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCd2NtOXRhWE5wWm5sQmJHd29kR0Z5WjJWMExDQnpkV1ptYVhnc0lHWnBiSFJsY2l3Z2NISnZiV2x6YVdacFpYSXBPMXh1ZlR0Y2JuMDdYRzVjYmx4dWZTeDdYQ0l1TDJWeWNtOXljMXdpT2pFekxGd2lMaTl3Y205dGFYTmxYM0psYzI5c2RtVnlMbXB6WENJNk1qVXNYQ0l1TDNWMGFXd3Vhbk5jSWpvek9IMWRMREkzT2x0bWRXNWpkR2x2YmloZlpHVnlaWEZmTEcxdlpIVnNaU3hsZUhCdmNuUnpLWHRjYmx3aWRYTmxJSE4wY21samRGd2lPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhjYmlBZ0lDQlFjbTl0YVhObExDQlFjbTl0YVhObFFYSnlZWGtzSUhSeWVVTnZiblpsY25SVWIxQnliMjFwYzJVc0lHRndhVkpsYW1WamRHbHZiaWtnZTF4dWRtRnlJSFYwYVd3Z1BTQmZaR1Z5WlhGZktGd2lMaTkxZEdsc0xtcHpYQ0lwTzF4dWRtRnlJR2x6VDJKcVpXTjBJRDBnZFhScGJDNXBjMDlpYW1WamREdGNiblpoY2lCbGN6VWdQU0JmWkdWeVpYRmZLRndpTGk5bGN6VXVhbk5jSWlrN1hHNWNibVoxYm1OMGFXOXVJRkJ5YjNCbGNuUnBaWE5RY205dGFYTmxRWEp5WVhrb2IySnFLU0I3WEc0Z0lDQWdkbUZ5SUd0bGVYTWdQU0JsY3pVdWEyVjVjeWh2WW1vcE8xeHVJQ0FnSUhaaGNpQnNaVzRnUFNCclpYbHpMbXhsYm1kMGFEdGNiaUFnSUNCMllYSWdkbUZzZFdWeklEMGdibVYzSUVGeWNtRjVLR3hsYmlBcUlESXBPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR1Z1T3lBcksya3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHdGxlU0E5SUd0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxjMXRwWFNBOUlHOWlhbHRyWlhsZE8xeHVJQ0FnSUNBZ0lDQjJZV3gxWlhOYmFTQXJJR3hsYmwwZ1BTQnJaWGs3WEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11WTI5dWMzUnlkV04wYjNJa0tIWmhiSFZsY3lrN1hHNTlYRzUxZEdsc0xtbHVhR1Z5YVhSektGQnliM0JsY25ScFpYTlFjbTl0YVhObFFYSnlZWGtzSUZCeWIyMXBjMlZCY25KaGVTazdYRzVjYmxCeWIzQmxjblJwWlhOUWNtOXRhWE5sUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbDlwYm1sMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVgybHVhWFFrS0hWdVpHVm1hVzVsWkN3Z0xUTXBJRHRjYm4wN1hHNWNibEJ5YjNCbGNuUnBaWE5RY205dGFYTmxRWEp5WVhrdWNISnZkRzkwZVhCbExsOXdjbTl0YVhObFJuVnNabWxzYkdWa0lEMGdablZ1WTNScGIyNGdLSFpoYkhWbExDQnBibVJsZUNrZ2UxeHVJQ0FnSUhSb2FYTXVYM1poYkhWbGMxdHBibVJsZUYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0IyWVhJZ2RHOTBZV3hTWlhOdmJIWmxaQ0E5SUNzcmRHaHBjeTVmZEc5MFlXeFNaWE52YkhabFpEdGNiaUFnSUNCcFppQW9kRzkwWVd4U1pYTnZiSFpsWkNBK1BTQjBhR2x6TGw5c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFpoYkNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2EyVjVUMlptYzJWMElEMGdkR2hwY3k1c1pXNW5kR2dvS1R0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUd4bGJpQTlJSFJvYVhNdWJHVnVaM1JvS0NrN0lHa2dQQ0JzWlc0N0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzVzNSb2FYTXVYM1poYkhWbGMxdHBJQ3NnYTJWNVQyWm1jMlYwWFYwZ1BTQjBhR2x6TGw5MllXeDFaWE5iYVYwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNtVnpiMngyWlNoMllXd3BPMXh1SUNBZ0lIMWNibjA3WEc1Y2JsQnliM0JsY25ScFpYTlFjbTl0YVhObFFYSnlZWGt1Y0hKdmRHOTBlWEJsTGw5d2NtOXRhWE5sVUhKdlozSmxjM05sWkNBOUlHWjFibU4wYVc5dUlDaDJZV3gxWlN3Z2FXNWtaWGdwSUh0Y2JpQWdJQ0IwYUdsekxsOXdjbTl0YVhObExsOXdjbTluY21WemN5aDdYRzRnSUNBZ0lDQWdJR3RsZVRvZ2RHaHBjeTVmZG1Gc2RXVnpXMmx1WkdWNElDc2dkR2hwY3k1c1pXNW5kR2dvS1Ywc1hHNGdJQ0FnSUNBZ0lIWmhiSFZsT2lCMllXeDFaVnh1SUNBZ0lIMHBPMXh1ZlR0Y2JseHVVSEp2Y0dWeWRHbGxjMUJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyaHZkV3hrUTI5d2VWWmhiSFZsY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc1OU8xeHVYRzVRY205d1pYSjBhV1Z6VUhKdmJXbHpaVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5aWFJCWTNSMVlXeE1aVzVuZEdnZ1BTQm1kVzVqZEdsdmJpQW9iR1Z1S1NCN1hHNGdJQ0FnY21WMGRYSnVJR3hsYmlBK1BpQXhPMXh1ZlR0Y2JseHVablZ1WTNScGIyNGdjSEp2Y0hNb2NISnZiV2x6WlhNcElIdGNiaUFnSUNCMllYSWdjbVYwTzF4dUlDQWdJSFpoY2lCallYTjBWbUZzZFdVZ1BTQjBjbmxEYjI1MlpYSjBWRzlRY205dGFYTmxLSEJ5YjIxcGMyVnpLVHRjYmx4dUlDQWdJR2xtSUNnaGFYTlBZbXBsWTNRb1kyRnpkRlpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWEJwVW1WcVpXTjBhVzl1S0Z3aVkyRnVibTkwSUdGM1lXbDBJSEJ5YjNCbGNuUnBaWE1nYjJZZ1lTQnViMjR0YjJKcVpXTjBYRngxTURBd1lWeGNkVEF3TUdFZ0lDQWdVMlZsSUdoMGRIQTZMeTluYjI4dVoyd3ZUM05HUzBNNFhGeDFNREF3WVZ3aUtUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHTmhjM1JXWVd4MVpTQnBibk4wWVc1alpXOW1JRkJ5YjIxcGMyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMElEMGdZMkZ6ZEZaaGJIVmxMbDkwYUdWdUtGeHVJQ0FnSUNBZ0lDQWdJQ0FnVUhKdmJXbHpaUzV3Y205d2N5d2dkVzVrWldacGJtVmtMQ0IxYm1SbFptbHVaV1FzSUhWdVpHVm1hVzVsWkN3Z2RXNWtaV1pwYm1Wa0tUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUWdQU0J1WlhjZ1VISnZjR1Z5ZEdsbGMxQnliMjFwYzJWQmNuSmhlU2hqWVhOMFZtRnNkV1VwTG5CeWIyMXBjMlVvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1kyRnpkRlpoYkhWbElHbHVjM1JoYm1ObGIyWWdVSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhRdVgzQnliM0JoWjJGMFpVWnliMjBvWTJGemRGWmhiSFZsTENBMEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JuMWNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1Y0hKdmNITWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEJ5YjNCektIUm9hWE1wTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205d2N5QTlJR1oxYm1OMGFXOXVJQ2h3Y205dGFYTmxjeWtnZTF4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3lod2NtOXRhWE5sY3lrN1hHNTlPMXh1ZlR0Y2JseHVmU3g3WENJdUwyVnpOUzVxYzF3aU9qRTBMRndpTGk5MWRHbHNMbXB6WENJNk16aDlYU3d5T0RwYlpuVnVZM1JwYjI0b1gyUmxjbVZ4WHl4dGIyUjFiR1VzWlhod2IzSjBjeWw3WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYm1aMWJtTjBhVzl1SUdGeWNtRjVUVzkyWlNoemNtTXNJSE55WTBsdVpHVjRMQ0JrYzNRc0lHUnpkRWx1WkdWNExDQnNaVzRwSUh0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJxSUQwZ01Ec2dhaUE4SUd4bGJqc2dLeXRxS1NCN1hHNGdJQ0FnSUNBZ0lHUnpkRnRxSUNzZ1pITjBTVzVrWlhoZElEMGdjM0pqVzJvZ0t5QnpjbU5KYm1SbGVGMDdYRzRnSUNBZ0lDQWdJSE55WTF0cUlDc2djM0pqU1c1a1pYaGRJRDBnZG05cFpDQXdPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1VYVmxkV1VvWTJGd1lXTnBkSGtwSUh0Y2JpQWdJQ0IwYUdsekxsOWpZWEJoWTJsMGVTQTlJR05oY0dGamFYUjVPMXh1SUNBZ0lIUm9hWE11WDJ4bGJtZDBhQ0E5SURBN1hHNGdJQ0FnZEdocGN5NWZabkp2Ym5RZ1BTQXdPMXh1ZlZ4dVhHNVJkV1YxWlM1d2NtOTBiM1I1Y0dVdVgzZHBiR3hDWlU5MlpYSkRZWEJoWTJsMGVTQTlJR1oxYm1OMGFXOXVJQ2h6YVhwbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMk5oY0dGamFYUjVJRHdnYzJsNlpUdGNibjA3WEc1Y2JsRjFaWFZsTG5CeWIzUnZkSGx3WlM1ZmNIVnphRTl1WlNBOUlHWjFibU4wYVc5dUlDaGhjbWNwSUh0Y2JpQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ2RHaHBjeTVzWlc1bmRHZ29LVHRjYmlBZ0lDQjBhR2x6TGw5amFHVmphME5oY0dGamFYUjVLR3hsYm1kMGFDQXJJREVwTzF4dUlDQWdJSFpoY2lCcElEMGdLSFJvYVhNdVgyWnliMjUwSUNzZ2JHVnVaM1JvS1NBbUlDaDBhR2x6TGw5allYQmhZMmwwZVNBdElERXBPMXh1SUNBZ0lIUm9hWE5iYVYwZ1BTQmhjbWM3WEc0Z0lDQWdkR2hwY3k1ZmJHVnVaM1JvSUQwZ2JHVnVaM1JvSUNzZ01UdGNibjA3WEc1Y2JsRjFaWFZsTG5CeWIzUnZkSGx3WlM1ZmRXNXphR2xtZEU5dVpTQTlJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdYRzRnSUNBZ2RtRnlJR05oY0dGamFYUjVJRDBnZEdocGN5NWZZMkZ3WVdOcGRIazdYRzRnSUNBZ2RHaHBjeTVmWTJobFkydERZWEJoWTJsMGVTaDBhR2x6TG14bGJtZDBhQ2dwSUNzZ01TazdYRzRnSUNBZ2RtRnlJR1p5YjI1MElEMGdkR2hwY3k1ZlpuSnZiblE3WEc0Z0lDQWdkbUZ5SUdrZ1BTQW9LQ2dvSUdaeWIyNTBJQzBnTVNBcElDWmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0NCallYQmhZMmwwZVNBdElERXBJQ2tnWGlCallYQmhZMmwwZVNBcElDMGdZMkZ3WVdOcGRIa2dLVHRjYmlBZ0lDQjBhR2x6VzJsZElEMGdkbUZzZFdVN1hHNGdJQ0FnZEdocGN5NWZabkp2Ym5RZ1BTQnBPMXh1SUNBZ0lIUm9hWE11WDJ4bGJtZDBhQ0E5SUhSb2FYTXViR1Z1WjNSb0tDa2dLeUF4TzF4dWZUdGNibHh1VVhWbGRXVXVjSEp2ZEc5MGVYQmxMblZ1YzJocFpuUWdQU0JtZFc1amRHbHZiaWhtYml3Z2NtVmpaV2wyWlhJc0lHRnlaeWtnZTF4dUlDQWdJSFJvYVhNdVgzVnVjMmhwWm5SUGJtVW9ZWEpuS1R0Y2JpQWdJQ0IwYUdsekxsOTFibk5vYVdaMFQyNWxLSEpsWTJWcGRtVnlLVHRjYmlBZ0lDQjBhR2x6TGw5MWJuTm9hV1owVDI1bEtHWnVLVHRjYm4wN1hHNWNibEYxWlhWbExuQnliM1J2ZEhsd1pTNXdkWE5vSUQwZ1puVnVZM1JwYjI0Z0tHWnVMQ0J5WldObGFYWmxjaXdnWVhKbktTQjdYRzRnSUNBZ2RtRnlJR3hsYm1kMGFDQTlJSFJvYVhNdWJHVnVaM1JvS0NrZ0t5QXpPMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOTNhV3hzUW1WUGRtVnlRMkZ3WVdOcGRIa29iR1Z1WjNSb0tTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXdkWE5vVDI1bEtHWnVLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjSFZ6YUU5dVpTaHlaV05sYVhabGNpazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzQjFjMmhQYm1Vb1lYSm5LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdhaUE5SUhSb2FYTXVYMlp5YjI1MElDc2diR1Z1WjNSb0lDMGdNenRjYmlBZ0lDQjBhR2x6TGw5amFHVmphME5oY0dGamFYUjVLR3hsYm1kMGFDazdYRzRnSUNBZ2RtRnlJSGR5WVhCTllYTnJJRDBnZEdocGN5NWZZMkZ3WVdOcGRIa2dMU0F4TzF4dUlDQWdJSFJvYVhOYktHb2dLeUF3S1NBbUlIZHlZWEJOWVhOclhTQTlJR1p1TzF4dUlDQWdJSFJvYVhOYktHb2dLeUF4S1NBbUlIZHlZWEJOWVhOclhTQTlJSEpsWTJWcGRtVnlPMXh1SUNBZ0lIUm9hWE5iS0dvZ0t5QXlLU0FtSUhkeVlYQk5ZWE5yWFNBOUlHRnlaenRjYmlBZ0lDQjBhR2x6TGw5c1pXNW5kR2dnUFNCc1pXNW5kR2c3WEc1OU8xeHVYRzVSZFdWMVpTNXdjbTkwYjNSNWNHVXVjMmhwWm5RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkbUZ5SUdaeWIyNTBJRDBnZEdocGN5NWZabkp2Ym5Rc1hHNGdJQ0FnSUNBZ0lISmxkQ0E5SUhSb2FYTmJabkp2Ym5SZE8xeHVYRzRnSUNBZ2RHaHBjMXRtY205dWRGMGdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdkR2hwY3k1ZlpuSnZiblFnUFNBb1puSnZiblFnS3lBeEtTQW1JQ2gwYUdsekxsOWpZWEJoWTJsMGVTQXRJREVwTzF4dUlDQWdJSFJvYVhNdVgyeGxibWQwYUMwdE8xeHVJQ0FnSUhKbGRIVnliaUJ5WlhRN1hHNTlPMXh1WEc1UmRXVjFaUzV3Y205MGIzUjVjR1V1YkdWdVozUm9JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXNaVzVuZEdnN1hHNTlPMXh1WEc1UmRXVjFaUzV3Y205MGIzUjVjR1V1WDJOb1pXTnJRMkZ3WVdOcGRIa2dQU0JtZFc1amRHbHZiaUFvYzJsNlpTa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOWpZWEJoWTJsMGVTQThJSE5wZW1VcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNtVnphWHBsVkc4b2RHaHBjeTVmWTJGd1lXTnBkSGtnUER3Z01TazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVVYVmxkV1V1Y0hKdmRHOTBlWEJsTGw5eVpYTnBlbVZVYnlBOUlHWjFibU4wYVc5dUlDaGpZWEJoWTJsMGVTa2dlMXh1SUNBZ0lIWmhjaUJ2YkdSRFlYQmhZMmwwZVNBOUlIUm9hWE11WDJOaGNHRmphWFI1TzF4dUlDQWdJSFJvYVhNdVgyTmhjR0ZqYVhSNUlEMGdZMkZ3WVdOcGRIazdYRzRnSUNBZ2RtRnlJR1p5YjI1MElEMGdkR2hwY3k1ZlpuSnZiblE3WEc0Z0lDQWdkbUZ5SUd4bGJtZDBhQ0E5SUhSb2FYTXVYMnhsYm1kMGFEdGNiaUFnSUNCMllYSWdiVzkyWlVsMFpXMXpRMjkxYm5RZ1BTQW9abkp2Ym5RZ0t5QnNaVzVuZEdncElDWWdLRzlzWkVOaGNHRmphWFI1SUMwZ01TazdYRzRnSUNBZ1lYSnlZWGxOYjNabEtIUm9hWE1zSURBc0lIUm9hWE1zSUc5c1pFTmhjR0ZqYVhSNUxDQnRiM1psU1hSbGJYTkRiM1Z1ZENrN1hHNTlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUZGMVpYVmxPMXh1WEc1OUxIdDlYU3d5T1RwYlpuVnVZM1JwYjI0b1gyUmxjbVZ4WHl4dGIyUjFiR1VzWlhod2IzSjBjeWw3WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvWEc0Z0lDQWdVSEp2YldselpTd2dTVTVVUlZKT1FVd3NJSFJ5ZVVOdmJuWmxjblJVYjFCeWIyMXBjMlVzSUdGd2FWSmxhbVZqZEdsdmJpa2dlMXh1ZG1GeUlHbHpRWEp5WVhrZ1BTQmZaR1Z5WlhGZktGd2lMaTkxZEdsc0xtcHpYQ0lwTG1selFYSnlZWGs3WEc1Y2JuWmhjaUJ5WVdObFRHRjBaWElnUFNCbWRXNWpkR2x2YmlBb2NISnZiV2x6WlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ3Y205dGFYTmxMblJvWlc0b1puVnVZM1JwYjI0b1lYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKaFkyVW9ZWEp5WVhrc0lIQnliMjFwYzJVcE8xeHVJQ0FnSUgwcE8xeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z2NtRmpaU2h3Y205dGFYTmxjeXdnY0dGeVpXNTBLU0I3WEc0Z0lDQWdkbUZ5SUcxaGVXSmxVSEp2YldselpTQTlJSFJ5ZVVOdmJuWmxjblJVYjFCeWIyMXBjMlVvY0hKdmJXbHpaWE1wTzF4dVhHNGdJQ0FnYVdZZ0tHMWhlV0psVUhKdmJXbHpaU0JwYm5OMFlXNWpaVzltSUZCeWIyMXBjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKaFkyVk1ZWFJsY2lodFlYbGlaVkJ5YjIxcGMyVXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JV2x6UVhKeVlYa29jSEp2YldselpYTXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoY0dsU1pXcGxZM1JwYjI0b1hDSmxlSEJsWTNScGJtY2dZVzRnWVhKeVlYa3NJR0VnY0hKdmJXbHpaU0J2Y2lCaElIUm9aVzVoWW14bFhGeDFNREF3WVZ4Y2RUQXdNR0VnSUNBZ1UyVmxJR2gwZEhBNkx5OW5iMjh1WjJ3dmN6aE5UV2hqWEZ4MU1EQXdZVndpS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ2NtVjBJRDBnYm1WM0lGQnliMjFwYzJVb1NVNVVSVkpPUVV3cE8xeHVJQ0FnSUdsbUlDaHdZWEpsYm5RZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUXVYM0J5YjNCaFoyRjBaVVp5YjIwb2NHRnlaVzUwTENBMElId2dNU2s3WEc0Z0lDQWdmVnh1SUNBZ0lIWmhjaUJtZFd4bWFXeHNJRDBnY21WMExsOW1kV3htYVd4c08xeHVJQ0FnSUhaaGNpQnlaV3BsWTNRZ1BTQnlaWFF1WDNKbGFtVmpkRHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTUN3Z2JHVnVJRDBnY0hKdmJXbHpaWE11YkdWdVozUm9PeUJwSUR3Z2JHVnVPeUFySzJrcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhaaGJDQTlJSEJ5YjIxcGMyVnpXMmxkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd3Z1BUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlBaEtHa2dhVzRnY0hKdmJXbHpaWE1wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MGFXNTFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lGQnliMjFwYzJVdVkyRnpkQ2gyWVd3cExsOTBhR1Z1S0daMWJHWnBiR3dzSUhKbGFtVmpkQ3dnZFc1a1pXWnBibVZrTENCeVpYUXNJRzUxYkd3cE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdjbVYwTzF4dWZWeHVYRzVRY205dGFYTmxMbkpoWTJVZ1BTQm1kVzVqZEdsdmJpQW9jSEp2YldselpYTXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NtRmpaU2h3Y205dGFYTmxjeXdnZFc1a1pXWnBibVZrS1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG5KaFkyVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEpoWTJVb2RHaHBjeXdnZFc1a1pXWnBibVZrS1R0Y2JuMDdYRzVjYm4wN1hHNWNibjBzZTF3aUxpOTFkR2xzTG1welhDSTZNemg5WFN3ek1EcGJablZ1WTNScGIyNG9YMlJsY21WeFh5eHRiMlIxYkdVc1pYaHdiM0owY3lsN1hHNWNJblZ6WlNCemRISnBZM1JjSWp0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b1VISnZiV2x6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1VISnZiV2x6WlVGeWNtRjVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoY0dsU1pXcGxZM1JwYjI0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnllVU52Ym5abGNuUlViMUJ5YjIxcGMyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRWxPVkVWU1RrRk1LU0I3WEc1MllYSWdZWE41Ym1NZ1BTQmZaR1Z5WlhGZktGd2lMaTloYzNsdVl5NXFjMXdpS1R0Y2JuWmhjaUIxZEdsc0lEMGdYMlJsY21WeFh5aGNJaTR2ZFhScGJDNXFjMXdpS1R0Y2JuWmhjaUIwY25sRFlYUmphQ0E5SUhWMGFXd3VkSEo1UTJGMFkyZzdYRzUyWVhJZ1pYSnliM0pQWW1vZ1BTQjFkR2xzTG1WeWNtOXlUMkpxTzF4dVpuVnVZM1JwYjI0Z1VtVmtkV04wYVc5dVVISnZiV2x6WlVGeWNtRjVLSEJ5YjIxcGMyVnpMQ0JtYml3Z1lXTmpkVzBzSUY5bFlXTm9LU0I3WEc0Z0lDQWdkR2hwY3k1amIyNXpkSEoxWTNSdmNpUW9jSEp2YldselpYTXBPMXh1SUNBZ0lIUm9hWE11WDNCeWIyMXBjMlV1WDJOaGNIUjFjbVZUZEdGamExUnlZV05sS0NrN1hHNGdJQ0FnZEdocGN5NWZjSEpsYzJWeWRtVmtWbUZzZFdWeklEMGdYMlZoWTJnZ1BUMDlJRWxPVkVWU1RrRk1JRDhnVzEwZ09pQnVkV3hzTzF4dUlDQWdJSFJvYVhNdVgzcGxjbTkwYUVselFXTmpkVzBnUFNBb1lXTmpkVzBnUFQwOUlIVnVaR1ZtYVc1bFpDazdYRzRnSUNBZ2RHaHBjeTVmWjI5MFFXTmpkVzBnUFNCbVlXeHpaVHRjYmlBZ0lDQjBhR2x6TGw5eVpXUjFZMmx1WjBsdVpHVjRJRDBnS0hSb2FYTXVYM3BsY205MGFFbHpRV05qZFcwZ1B5QXhJRG9nTUNrN1hHNGdJQ0FnZEdocGN5NWZkbUZzZFdWelVHaGhjMlVnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnZG1GeUlHMWhlV0psVUhKdmJXbHpaU0E5SUhSeWVVTnZiblpsY25SVWIxQnliMjFwYzJVb1lXTmpkVzBzSUhSb2FYTXVYM0J5YjIxcGMyVXBPMXh1SUNBZ0lIWmhjaUJ5WldwbFkzUmxaQ0E5SUdaaGJITmxPMXh1SUNBZ0lIWmhjaUJwYzFCeWIyMXBjMlVnUFNCdFlYbGlaVkJ5YjIxcGMyVWdhVzV6ZEdGdVkyVnZaaUJRY205dGFYTmxPMXh1SUNBZ0lHbG1JQ2hwYzFCeWIyMXBjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2JXRjVZbVZRY205dGFYTmxJRDBnYldGNVltVlFjbTl0YVhObExsOTBZWEpuWlhRb0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0cxaGVXSmxVSEp2YldselpTNWZhWE5RWlc1a2FXNW5LQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZVdKbFVISnZiV2x6WlM1ZmNISnZlSGxRY205dGFYTmxRWEp5WVhrb2RHaHBjeXdnTFRFcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLRzFoZVdKbFVISnZiV2x6WlM1ZmFYTkdkV3htYVd4c1pXUW9LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZV05qZFcwZ1BTQnRZWGxpWlZCeWIyMXBjMlV1WDNaaGJIVmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5bmIzUkJZMk4xYlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5eVpXcGxZM1FvYldGNVltVlFjbTl0YVhObExsOXlaV0Z6YjI0b0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXcGxZM1JsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0NFb2FYTlFjbTl0YVhObElIeDhJSFJvYVhNdVgzcGxjbTkwYUVselFXTmpkVzBwS1NCMGFHbHpMbDluYjNSQlkyTjFiU0E5SUhSeWRXVTdYRzRnSUNBZ2RHaHBjeTVmWTJGc2JHSmhZMnNnUFNCbWJqdGNiaUFnSUNCMGFHbHpMbDloWTJOMWJTQTlJR0ZqWTNWdE8xeHVJQ0FnSUdsbUlDZ2hjbVZxWldOMFpXUXBJR0Z6ZVc1akxtbHVkbTlyWlNocGJtbDBMQ0IwYUdsekxDQjFibVJsWm1sdVpXUXBPMXh1ZlZ4dVpuVnVZM1JwYjI0Z2FXNXBkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxsOXBibWwwSkNoMWJtUmxabWx1WldRc0lDMDFLVHRjYm4xY2JuVjBhV3d1YVc1b1pYSnBkSE1vVW1Wa2RXTjBhVzl1VUhKdmJXbHpaVUZ5Y21GNUxDQlFjbTl0YVhObFFYSnlZWGtwTzF4dVhHNVNaV1IxWTNScGIyNVFjbTl0YVhObFFYSnlZWGt1Y0hKdmRHOTBlWEJsTGw5cGJtbDBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UzMDdYRzVjYmxKbFpIVmpkR2x2YmxCeWIyMXBjMlZCY25KaGVTNXdjbTkwYjNSNWNHVXVYM0psYzI5c2RtVkZiWEIwZVVGeWNtRjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TGw5bmIzUkJZMk4xYlNCOGZDQjBhR2x6TGw5NlpYSnZkR2hKYzBGalkzVnRLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0psYzI5c2RtVW9kR2hwY3k1ZmNISmxjMlZ5ZG1Wa1ZtRnNkV1Z6SUNFOVBTQnVkV3hzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUZ0ZElEb2dkR2hwY3k1ZllXTmpkVzBwTzF4dUlDQWdJSDFjYm4wN1hHNWNibEpsWkhWamRHbHZibEJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVgzQnliMjFwYzJWR2RXeG1hV3hzWldRZ1BTQm1kVzVqZEdsdmJpQW9kbUZzZFdVc0lHbHVaR1Y0S1NCN1hHNGdJQ0FnZG1GeUlIWmhiSFZsY3lBOUlIUm9hWE11WDNaaGJIVmxjenRjYmlBZ0lDQjJZV3gxWlhOYmFXNWtaWGhkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdkbUZ5SUd4bGJtZDBhQ0E5SUhSb2FYTXViR1Z1WjNSb0tDazdYRzRnSUNBZ2RtRnlJSEJ5WlhObGNuWmxaRlpoYkhWbGN5QTlJSFJvYVhNdVgzQnlaWE5sY25abFpGWmhiSFZsY3p0Y2JpQWdJQ0IyWVhJZ2FYTkZZV05vSUQwZ2NISmxjMlZ5ZG1Wa1ZtRnNkV1Z6SUNFOVBTQnVkV3hzTzF4dUlDQWdJSFpoY2lCbmIzUkJZMk4xYlNBOUlIUm9hWE11WDJkdmRFRmpZM1Z0TzF4dUlDQWdJSFpoY2lCMllXeDFaWE5RYUdGelpTQTlJSFJvYVhNdVgzWmhiSFZsYzFCb1lYTmxPMXh1SUNBZ0lIWmhjaUIyWVd4MVpYTlFhR0Z6WlVsdVpHVjRPMXh1SUNBZ0lHbG1JQ2doZG1Gc2RXVnpVR2hoYzJVcElIdGNiaUFnSUNBZ0lDQWdkbUZzZFdWelVHaGhjMlVnUFNCMGFHbHpMbDkyWVd4MVpYTlFhR0Z6WlNBOUlHNWxkeUJCY25KaGVTaHNaVzVuZEdncE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGJIVmxjMUJvWVhObFNXNWtaWGc5TURzZ2RtRnNkV1Z6VUdoaGMyVkpibVJsZUR4c1pXNW5kR2c3SUNzcmRtRnNkV1Z6VUdoaGMyVkpibVJsZUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVnpVR2hoYzJWYmRtRnNkV1Z6VUdoaGMyVkpibVJsZUYwZ1BTQXdPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lIWmhiSFZsYzFCb1lYTmxTVzVrWlhnZ1BTQjJZV3gxWlhOUWFHRnpaVnRwYm1SbGVGMDdYRzVjYmlBZ0lDQnBaaUFvYVc1a1pYZ2dQVDA5SURBZ0ppWWdkR2hwY3k1ZmVtVnliM1JvU1hOQlkyTjFiU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDloWTJOMWJTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5bmIzUkJZMk4xYlNBOUlHZHZkRUZqWTNWdElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1Z6VUdoaGMyVmJhVzVrWlhoZElEMGdLQ2gyWVd4MVpYTlFhR0Z6WlVsdVpHVjRJRDA5UFNBd0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnUHlBeElEb2dNaWs3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hwYm1SbGVDQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZllXTmpkVzBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaMjkwUVdOamRXMGdQU0JuYjNSQlkyTjFiU0E5SUhSeWRXVTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGMxQm9ZWE5sU1c1a1pYZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxjMUJvWVhObFcybHVaR1Y0WFNBOUlERTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaWE5RYUdGelpWdHBibVJsZUYwZ1BTQXlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmWVdOamRXMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9JV2R2ZEVGalkzVnRLU0J5WlhSMWNtNDdYRzVjYmlBZ0lDQjJZWElnWTJGc2JHSmhZMnNnUFNCMGFHbHpMbDlqWVd4c1ltRmphenRjYmlBZ0lDQjJZWElnY21WalpXbDJaWElnUFNCMGFHbHpMbDl3Y205dGFYTmxMbDlpYjNWdVpGUnZPMXh1SUNBZ0lIWmhjaUJ5WlhRN1hHNWNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdkR2hwY3k1ZmNtVmtkV05wYm1kSmJtUmxlRHNnYVNBOElHeGxibWQwYURzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxjMUJvWVhObFNXNWtaWGdnUFNCMllXeDFaWE5RYUdGelpWdHBYVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsYzFCb1lYTmxTVzVrWlhnZ1BUMDlJRElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgzSmxaSFZqYVc1blNXNWtaWGdnUFNCcElDc2dNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJwYm5WbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE5RYUdGelpVbHVaR1Y0SUNFOVBTQXhLU0J5WlhSMWNtNDdYRzRnSUNBZ0lDQWdJSFpoYkhWbElEMGdkbUZzZFdWelcybGRPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXdjbTl0YVhObExsOXdkWE5vUTI5dWRHVjRkQ2dwTzF4dUlDQWdJQ0FnSUNCcFppQW9hWE5GWVdOb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtVnpaWEoyWldSV1lXeDFaWE11Y0hWemFDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhRZ1BTQjBjbmxEWVhSamFDaGpZV3hzWW1GamF5a3VZMkZzYkNoeVpXTmxhWFpsY2l3Z2RtRnNkV1VzSUdrc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhRZ1BTQjBjbmxEWVhSamFDaGpZV3hzWW1GamF5bGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVZMkZzYkNoeVpXTmxhWFpsY2l3Z2RHaHBjeTVmWVdOamRXMHNJSFpoYkhWbExDQnBMQ0JzWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0J5YjIxcGMyVXVYM0J2Y0VOdmJuUmxlSFFvS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvY21WMElEMDlQU0JsY25KdmNrOWlhaWtnY21WMGRYSnVJSFJvYVhNdVgzSmxhbVZqZENoeVpYUXVaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RtRnlJRzFoZVdKbFVISnZiV2x6WlNBOUlIUnllVU52Ym5abGNuUlViMUJ5YjIxcGMyVW9jbVYwTENCMGFHbHpMbDl3Y205dGFYTmxLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHMWhlV0psVUhKdmJXbHpaU0JwYm5OMFlXNWpaVzltSUZCeWIyMXBjMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZVdKbFVISnZiV2x6WlNBOUlHMWhlV0psVUhKdmJXbHpaUzVmZEdGeVoyVjBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldGNVltVlFjbTl0YVhObExsOXBjMUJsYm1ScGJtY29LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxjMUJvWVhObFcybGRJRDBnTkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYldGNVltVlFjbTl0YVhObExsOXdjbTk0ZVZCeWIyMXBjMlZCY25KaGVTaDBhR2x6TENCcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JXRjVZbVZRY205dGFYTmxMbDlwYzBaMWJHWnBiR3hsWkNncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwSUQwZ2JXRjVZbVZRY205dGFYTmxMbDkyWVd4MVpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZjbVZxWldOMEtHMWhlV0psVUhKdmJXbHpaUzVmY21WaGMyOXVLQ2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY21Wa2RXTnBibWRKYm1SbGVDQTlJR2tnS3lBeE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5aFkyTjFiU0E5SUhKbGREdGNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbDl5WlhOdmJIWmxLR2x6UldGamFDQS9JSEJ5WlhObGNuWmxaRlpoYkhWbGN5QTZJSFJvYVhNdVgyRmpZM1Z0S1R0Y2JuMDdYRzVjYm1aMWJtTjBhVzl1SUhKbFpIVmpaU2h3Y205dGFYTmxjeXdnWm00c0lHbHVhWFJwWVd4V1lXeDFaU3dnWDJWaFkyZ3BJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR1p1SUNFOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUhKbGRIVnliaUJoY0dsU1pXcGxZM1JwYjI0b1hDSm1iaUJ0ZFhOMElHSmxJR0VnWm5WdVkzUnBiMjVjWEhVd01EQmhYRngxTURBd1lTQWdJQ0JUWldVZ2FIUjBjRG92TDJkdmJ5NW5iQzg1TVRac1NrcGNYSFV3TURCaFhDSXBPMXh1SUNBZ0lIWmhjaUJoY25KaGVTQTlJRzVsZHlCU1pXUjFZM1JwYjI1UWNtOXRhWE5sUVhKeVlYa29jSEp2YldselpYTXNJR1p1TENCcGJtbDBhV0ZzVm1Gc2RXVXNJRjlsWVdOb0tUdGNiaUFnSUNCeVpYUjFjbTRnWVhKeVlYa3VjSEp2YldselpTZ3BPMXh1ZlZ4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXlaV1IxWTJVZ1BTQm1kVzVqZEdsdmJpQW9abTRzSUdsdWFYUnBZV3hXWVd4MVpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCeVpXUjFZMlVvZEdocGN5d2dabTRzSUdsdWFYUnBZV3hXWVd4MVpTd2diblZzYkNrN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5KbFpIVmpaU0E5SUdaMWJtTjBhVzl1SUNod2NtOXRhWE5sY3l3Z1ptNHNJR2x1YVhScFlXeFdZV3gxWlN3Z1gyVmhZMmdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjbVZrZFdObEtIQnliMjFwYzJWekxDQm1iaXdnYVc1cGRHbGhiRlpoYkhWbExDQmZaV0ZqYUNrN1hHNTlPMXh1ZlR0Y2JseHVmU3g3WENJdUwyRnplVzVqTG1welhDSTZNaXhjSWk0dmRYUnBiQzVxYzF3aU9qTTRmVjBzTXpFNlcyWjFibU4wYVc5dUtGOWtaWEpsY1Y4c2JXOWtkV3hsTEdWNGNHOXlkSE1wZTF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1MllYSWdjMk5vWldSMWJHVTdYRzUyWVhJZ2RYUnBiQ0E5SUY5a1pYSmxjVjhvWENJdUwzVjBhV3hjSWlrN1hHNTJZWElnYm05QmMzbHVZMU5qYUdWa2RXeGxjaUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSWs1dklHRnplVzVqSUhOamFHVmtkV3hsY2lCaGRtRnBiR0ZpYkdWY1hIVXdNREJoWEZ4MU1EQXdZU0FnSUNCVFpXVWdhSFIwY0RvdkwyZHZieTVuYkM5dE0wOVVXR3RjWEhVd01EQmhYQ0lwTzF4dWZUdGNibWxtSUNoMWRHbHNMbWx6VG05a1pTQW1KaUIwZVhCbGIyWWdUWFYwWVhScGIyNVBZbk5sY25abGNpQTlQVDBnWENKMWJtUmxabWx1WldSY0lpa2dlMXh1SUNBZ0lIWmhjaUJIYkc5aVlXeFRaWFJKYlcxbFpHbGhkR1VnUFNCbmJHOWlZV3d1YzJWMFNXMXRaV1JwWVhSbE8xeHVJQ0FnSUhaaGNpQlFjbTlqWlhOelRtVjRkRlJwWTJzZ1BTQndjbTlqWlhOekxtNWxlSFJVYVdOck8xeHVJQ0FnSUhOamFHVmtkV3hsSUQwZ2RYUnBiQzVwYzFKbFkyVnVkRTV2WkdWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lHWjFibU4wYVc5dUtHWnVLU0I3SUVkc2IySmhiRk5sZEVsdGJXVmthV0YwWlM1allXeHNLR2RzYjJKaGJDd2dabTRwT3lCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ09pQm1kVzVqZEdsdmJpaG1iaWtnZXlCUWNtOWpaWE56VG1WNGRGUnBZMnN1WTJGc2JDaHdjbTlqWlhOekxDQm1iaWs3SUgwN1hHNTlJR1ZzYzJVZ2FXWWdLQ2gwZVhCbGIyWWdUWFYwWVhScGIyNVBZbk5sY25abGNpQWhQVDBnWENKMWJtUmxabWx1WldSY0lpa2dKaVpjYmlBZ0lDQWdJQ0FnSUNBaEtIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJSGRwYm1SdmR5NXVZWFpwWjJGMGIzSWdKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1dVlYWnBaMkYwYjNJdWMzUmhibVJoYkc5dVpTa3BJSHRjYmlBZ0lDQnpZMmhsWkhWc1pTQTlJR1oxYm1OMGFXOXVLR1p1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrYVhZZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aVpHbDJYQ0lwTzF4dUlDQWdJQ0FnSUNCMllYSWdiMkp6WlhKMlpYSWdQU0J1WlhjZ1RYVjBZWFJwYjI1UFluTmxjblpsY2lobWJpazdYRzRnSUNBZ0lDQWdJRzlpYzJWeWRtVnlMbTlpYzJWeWRtVW9aR2wyTENCN1lYUjBjbWxpZFhSbGN6b2dkSEoxWlgwcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0b0tTQjdJR1JwZGk1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0Z3aVptOXZYQ0lwT3lCOU8xeHVJQ0FnSUgwN1hHNGdJQ0FnYzJOb1pXUjFiR1V1YVhOVGRHRjBhV01nUFNCMGNuVmxPMXh1ZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYzJWMFNXMXRaV1JwWVhSbElDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUtTQjdYRzRnSUNBZ2MyTm9aV1IxYkdVZ1BTQm1kVzVqZEdsdmJpQW9abTRwSUh0Y2JpQWdJQ0FnSUNBZ2MyVjBTVzF0WldScFlYUmxLR1p1S1R0Y2JpQWdJQ0I5TzF4dWZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2MyVjBWR2x0Wlc5MWRDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpa2dlMXh1SUNBZ0lITmphR1ZrZFd4bElEMGdablZ1WTNScGIyNGdLR1p1S1NCN1hHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9abTRzSURBcE8xeHVJQ0FnSUgwN1hHNTlJR1ZzYzJVZ2UxeHVJQ0FnSUhOamFHVmtkV3hsSUQwZ2JtOUJjM2x1WTFOamFHVmtkV3hsY2p0Y2JuMWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjMk5vWldSMWJHVTdYRzVjYm4wc2Uxd2lMaTkxZEdsc1hDSTZNemg5WFN3ek1qcGJablZ1WTNScGIyNG9YMlJsY21WeFh5eHRiMlIxYkdVc1pYaHdiM0owY3lsN1hHNWNJblZ6WlNCemRISnBZM1JjSWp0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQxY2JpQWdJQ0JtZFc1amRHbHZiaWhRY205dGFYTmxMQ0JRY205dGFYTmxRWEp5WVhrcElIdGNiblpoY2lCUWNtOXRhWE5sU1c1emNHVmpkR2x2YmlBOUlGQnliMjFwYzJVdVVISnZiV2x6WlVsdWMzQmxZM1JwYjI0N1hHNTJZWElnZFhScGJDQTlJRjlrWlhKbGNWOG9YQ0l1TDNWMGFXd3Vhbk5jSWlrN1hHNWNibVoxYm1OMGFXOXVJRk5sZEhSc1pXUlFjbTl0YVhObFFYSnlZWGtvZG1Gc2RXVnpLU0I3WEc0Z0lDQWdkR2hwY3k1amIyNXpkSEoxWTNSdmNpUW9kbUZzZFdWektUdGNibjFjYm5WMGFXd3VhVzVvWlhKcGRITW9VMlYwZEd4bFpGQnliMjFwYzJWQmNuSmhlU3dnVUhKdmJXbHpaVUZ5Y21GNUtUdGNibHh1VTJWMGRHeGxaRkJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVgzQnliMjFwYzJWU1pYTnZiSFpsWkNBOUlHWjFibU4wYVc5dUlDaHBibVJsZUN3Z2FXNXpjR1ZqZEdsdmJpa2dlMXh1SUNBZ0lIUm9hWE11WDNaaGJIVmxjMXRwYm1SbGVGMGdQU0JwYm5Od1pXTjBhVzl1TzF4dUlDQWdJSFpoY2lCMGIzUmhiRkpsYzI5c2RtVmtJRDBnS3l0MGFHbHpMbDkwYjNSaGJGSmxjMjlzZG1Wa08xeHVJQ0FnSUdsbUlDaDBiM1JoYkZKbGMyOXNkbVZrSUQ0OUlIUm9hWE11WDJ4bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl5WlhOdmJIWmxLSFJvYVhNdVgzWmhiSFZsY3lrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1VTJWMGRHeGxaRkJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVgzQnliMjFwYzJWR2RXeG1hV3hzWldRZ1BTQm1kVzVqZEdsdmJpQW9kbUZzZFdVc0lHbHVaR1Y0S1NCN1hHNGdJQ0FnZG1GeUlISmxkQ0E5SUc1bGR5QlFjbTl0YVhObFNXNXpjR1ZqZEdsdmJpZ3BPMXh1SUNBZ0lISmxkQzVmWW1sMFJtbGxiR1FnUFNBeU5qZzBNelUwTlRZN1hHNGdJQ0FnY21WMExsOXpaWFIwYkdWa1ZtRnNkV1VnUFNCMllXeDFaVHRjYmlBZ0lDQjBhR2x6TGw5d2NtOXRhWE5sVW1WemIyeDJaV1FvYVc1a1pYZ3NJSEpsZENrN1hHNTlPMXh1VTJWMGRHeGxaRkJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVgzQnliMjFwYzJWU1pXcGxZM1JsWkNBOUlHWjFibU4wYVc5dUlDaHlaV0Z6YjI0c0lHbHVaR1Y0S1NCN1hHNGdJQ0FnZG1GeUlISmxkQ0E5SUc1bGR5QlFjbTl0YVhObFNXNXpjR1ZqZEdsdmJpZ3BPMXh1SUNBZ0lISmxkQzVmWW1sMFJtbGxiR1FnUFNBeE16UXlNVGMzTWpnN1hHNGdJQ0FnY21WMExsOXpaWFIwYkdWa1ZtRnNkV1VnUFNCeVpXRnpiMjQ3WEc0Z0lDQWdkR2hwY3k1ZmNISnZiV2x6WlZKbGMyOXNkbVZrS0dsdVpHVjRMQ0J5WlhRcE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1elpYUjBiR1VnUFNCbWRXNWpkR2x2YmlBb2NISnZiV2x6WlhNcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGTmxkSFJzWldSUWNtOXRhWE5sUVhKeVlYa29jSEp2YldselpYTXBMbkJ5YjIxcGMyVW9LVHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbk5sZEhSc1pTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZObGRIUnNaV1JRY205dGFYTmxRWEp5WVhrb2RHaHBjeWt1Y0hKdmJXbHpaU2dwTzF4dWZUdGNibjA3WEc1Y2JuMHNlMXdpTGk5MWRHbHNMbXB6WENJNk16aDlYU3d6TXpwYlpuVnVZM1JwYjI0b1gyUmxjbVZ4WHl4dGIyUjFiR1VzWlhod2IzSjBjeWw3WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDFjYm1aMWJtTjBhVzl1S0ZCeWIyMXBjMlVzSUZCeWIyMXBjMlZCY25KaGVTd2dZWEJwVW1WcVpXTjBhVzl1S1NCN1hHNTJZWElnZFhScGJDQTlJRjlrWlhKbGNWOG9YQ0l1TDNWMGFXd3Vhbk5jSWlrN1hHNTJZWElnVW1GdVoyVkZjbkp2Y2lBOUlGOWtaWEpsY1Y4b1hDSXVMMlZ5Y205eWN5NXFjMXdpS1M1U1lXNW5aVVZ5Y205eU8xeHVkbUZ5SUVGblozSmxaMkYwWlVWeWNtOXlJRDBnWDJSbGNtVnhYeWhjSWk0dlpYSnliM0p6TG1welhDSXBMa0ZuWjNKbFoyRjBaVVZ5Y205eU8xeHVkbUZ5SUdselFYSnlZWGtnUFNCMWRHbHNMbWx6UVhKeVlYazdYRzVjYmx4dVpuVnVZM1JwYjI0Z1UyOXRaVkJ5YjIxcGMyVkJjbkpoZVNoMllXeDFaWE1wSUh0Y2JpQWdJQ0IwYUdsekxtTnZibk4wY25WamRHOXlKQ2gyWVd4MVpYTXBPMXh1SUNBZ0lIUm9hWE11WDJodmQwMWhibmtnUFNBd08xeHVJQ0FnSUhSb2FYTXVYM1Z1ZDNKaGNDQTlJR1poYkhObE8xeHVJQ0FnSUhSb2FYTXVYMmx1YVhScFlXeHBlbVZrSUQwZ1ptRnNjMlU3WEc1OVhHNTFkR2xzTG1sdWFHVnlhWFJ6S0ZOdmJXVlFjbTl0YVhObFFYSnlZWGtzSUZCeWIyMXBjMlZCY25KaGVTazdYRzVjYmxOdmJXVlFjbTl0YVhObFFYSnlZWGt1Y0hKdmRHOTBlWEJsTGw5cGJtbDBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1ZmFXNXBkR2xoYkdsNlpXUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1ZmFHOTNUV0Z1ZVNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl5WlhOdmJIWmxLRnRkS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TGw5cGJtbDBKQ2gxYm1SbFptbHVaV1FzSUMwMUtUdGNiaUFnSUNCMllYSWdhWE5CY25KaGVWSmxjMjlzZG1Wa0lEMGdhWE5CY25KaGVTaDBhR2x6TGw5MllXeDFaWE1wTzF4dUlDQWdJR2xtSUNnaGRHaHBjeTVmYVhOU1pYTnZiSFpsWkNncElDWW1YRzRnSUNBZ0lDQWdJR2x6UVhKeVlYbFNaWE52YkhabFpDQW1KbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOW9iM2ROWVc1NUlENGdkR2hwY3k1ZlkyRnVVRzl6YzJsaWJIbEdkV3htYVd4c0tDa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjbVZxWldOMEtIUm9hWE11WDJkbGRGSmhibWRsUlhKeWIzSW9kR2hwY3k1c1pXNW5kR2dvS1NrcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxOdmJXVlFjbTl0YVhObFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG1sdWFYUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEdocGN5NWZhVzVwZEdsaGJHbDZaV1FnUFNCMGNuVmxPMXh1SUNBZ0lIUm9hWE11WDJsdWFYUW9LVHRjYm4wN1hHNWNibE52YldWUWNtOXRhWE5sUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5sZEZWdWQzSmhjQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMGFHbHpMbDkxYm5keVlYQWdQU0IwY25WbE8xeHVmVHRjYmx4dVUyOXRaVkJ5YjIxcGMyVkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWFHOTNUV0Z1ZVNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYUc5M1RXRnVlVHRjYm4wN1hHNWNibE52YldWUWNtOXRhWE5sUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5sZEVodmQwMWhibmtnUFNCbWRXNWpkR2x2YmlBb1kyOTFiblFwSUh0Y2JpQWdJQ0IwYUdsekxsOW9iM2ROWVc1NUlEMGdZMjkxYm5RN1hHNTlPMXh1WEc1VGIyMWxVSEp2YldselpVRnljbUY1TG5CeWIzUnZkSGx3WlM1ZmNISnZiV2x6WlVaMWJHWnBiR3hsWkNBOUlHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0FnSUhSb2FYTXVYMkZrWkVaMWJHWnBiR3hsWkNoMllXeDFaU2s3WEc0Z0lDQWdhV1lnS0hSb2FYTXVYMloxYkdacGJHeGxaQ2dwSUQwOVBTQjBhR2x6TG1odmQwMWhibmtvS1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5MllXeDFaWE11YkdWdVozUm9JRDBnZEdocGN5NW9iM2ROWVc1NUtDazdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWh2ZDAxaGJua29LU0E5UFQwZ01TQW1KaUIwYUdsekxsOTFibmR5WVhBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM0psYzI5c2RtVW9kR2hwY3k1ZmRtRnNkV1Z6V3pCZEtUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM0psYzI5c2RtVW9kR2hwY3k1ZmRtRnNkV1Z6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVmVHRjYmxOdmJXVlFjbTl0YVhObFFYSnlZWGt1Y0hKdmRHOTBlWEJsTGw5d2NtOXRhWE5sVW1WcVpXTjBaV1FnUFNCbWRXNWpkR2x2YmlBb2NtVmhjMjl1S1NCN1hHNGdJQ0FnZEdocGN5NWZZV1JrVW1WcVpXTjBaV1FvY21WaGMyOXVLVHRjYmlBZ0lDQnBaaUFvZEdocGN5NW9iM2ROWVc1NUtDa2dQaUIwYUdsekxsOWpZVzVRYjNOemFXSnNlVVoxYkdacGJHd29LU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdaU0E5SUc1bGR5QkJaMmR5WldkaGRHVkZjbkp2Y2lncE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnZEdocGN5NXNaVzVuZEdnb0tUc2dhU0E4SUhSb2FYTXVYM1poYkhWbGN5NXNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaUzV3ZFhOb0tIUm9hWE11WDNaaGJIVmxjMXRwWFNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNtVnFaV04wS0dVcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxOdmJXVlFjbTl0YVhObFFYSnlZWGt1Y0hKdmRHOTBlWEJsTGw5bWRXeG1hV3hzWldRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDNSdmRHRnNVbVZ6YjJ4MlpXUTdYRzU5TzF4dVhHNVRiMjFsVUhKdmJXbHpaVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNWZjbVZxWldOMFpXUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzWmhiSFZsY3k1c1pXNW5kR2dnTFNCMGFHbHpMbXhsYm1kMGFDZ3BPMXh1ZlR0Y2JseHVVMjl0WlZCeWIyMXBjMlZCY25KaGVTNXdjbTkwYjNSNWNHVXVYMkZrWkZKbGFtVmpkR1ZrSUQwZ1puVnVZM1JwYjI0Z0tISmxZWE52YmlrZ2UxeHVJQ0FnSUhSb2FYTXVYM1poYkhWbGN5NXdkWE5vS0hKbFlYTnZiaWs3WEc1OU8xeHVYRzVUYjIxbFVISnZiV2x6WlVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVmWVdSa1JuVnNabWxzYkdWa0lEMGdablZ1WTNScGIyNGdLSFpoYkhWbEtTQjdYRzRnSUNBZ2RHaHBjeTVmZG1Gc2RXVnpXM1JvYVhNdVgzUnZkR0ZzVW1WemIyeDJaV1FySzEwZ1BTQjJZV3gxWlR0Y2JuMDdYRzVjYmxOdmJXVlFjbTl0YVhObFFYSnlZWGt1Y0hKdmRHOTBlWEJsTGw5allXNVFiM056YVdKc2VVWjFiR1pwYkd3Z1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11YkdWdVozUm9LQ2tnTFNCMGFHbHpMbDl5WldwbFkzUmxaQ2dwTzF4dWZUdGNibHh1VTI5dFpWQnliMjFwYzJWQmNuSmhlUzV3Y205MGIzUjVjR1V1WDJkbGRGSmhibWRsUlhKeWIzSWdQU0JtZFc1amRHbHZiaUFvWTI5MWJuUXBJSHRjYmlBZ0lDQjJZWElnYldWemMyRm5aU0E5SUZ3aVNXNXdkWFFnWVhKeVlYa2diWFZ6ZENCamIyNTBZV2x1SUdGMElHeGxZWE4wSUZ3aUlDdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMmh2ZDAxaGJua2dLeUJjSWlCcGRHVnRjeUJpZFhRZ1kyOXVkR0ZwYm5NZ2IyNXNlU0JjSWlBcklHTnZkVzUwSUNzZ1hDSWdhWFJsYlhOY0lqdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGSmhibWRsUlhKeWIzSW9iV1Z6YzJGblpTazdYRzU5TzF4dVhHNVRiMjFsVUhKdmJXbHpaVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNWZjbVZ6YjJ4MlpVVnRjSFI1UVhKeVlYa2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEdocGN5NWZjbVZxWldOMEtIUm9hWE11WDJkbGRGSmhibWRsUlhKeWIzSW9NQ2twTzF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnYzI5dFpTaHdjbTl0YVhObGN5d2dhRzkzVFdGdWVTa2dlMXh1SUNBZ0lHbG1JQ2dvYUc5M1RXRnVlU0I4SURBcElDRTlQU0JvYjNkTllXNTVJSHg4SUdodmQwMWhibmtnUENBd0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhjR2xTWldwbFkzUnBiMjRvWENKbGVIQmxZM1JwYm1jZ1lTQndiM05wZEdsMlpTQnBiblJsWjJWeVhGeDFNREF3WVZ4Y2RUQXdNR0VnSUNBZ1UyVmxJR2gwZEhBNkx5OW5iMjh1WjJ3dk1YZEJiVWg0WEZ4MU1EQXdZVndpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUhKbGRDQTlJRzVsZHlCVGIyMWxVSEp2YldselpVRnljbUY1S0hCeWIyMXBjMlZ6S1R0Y2JpQWdJQ0IyWVhJZ2NISnZiV2x6WlNBOUlISmxkQzV3Y205dGFYTmxLQ2s3WEc0Z0lDQWdjbVYwTG5ObGRFaHZkMDFoYm5rb2FHOTNUV0Z1ZVNrN1hHNGdJQ0FnY21WMExtbHVhWFFvS1R0Y2JpQWdJQ0J5WlhSMWNtNGdjSEp2YldselpUdGNibjFjYmx4dVVISnZiV2x6WlM1emIyMWxJRDBnWm5WdVkzUnBiMjRnS0hCeWIyMXBjMlZ6TENCb2IzZE5ZVzU1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSE52YldVb2NISnZiV2x6WlhNc0lHaHZkMDFoYm5rcE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWMyOXRaU0E5SUdaMWJtTjBhVzl1SUNob2IzZE5ZVzU1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSE52YldVb2RHaHBjeXdnYUc5M1RXRnVlU2s3WEc1OU8xeHVYRzVRY205dGFYTmxMbDlUYjIxbFVISnZiV2x6WlVGeWNtRjVJRDBnVTI5dFpWQnliMjFwYzJWQmNuSmhlVHRjYm4wN1hHNWNibjBzZTF3aUxpOWxjbkp2Y25NdWFuTmNJam94TXl4Y0lpNHZkWFJwYkM1cWMxd2lPak00ZlYwc016UTZXMloxYm1OMGFXOXVLRjlrWlhKbGNWOHNiVzlrZFd4bExHVjRjRzl5ZEhNcGUxeHVYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtGQnliMjFwYzJVcElIdGNibVoxYm1OMGFXOXVJRkJ5YjIxcGMyVkpibk53WldOMGFXOXVLSEJ5YjIxcGMyVXBJSHRjYmlBZ0lDQnBaaUFvY0hKdmJXbHpaU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJSEJ5YjIxcGMyVWdQU0J3Y205dGFYTmxMbDkwWVhKblpYUW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZbWwwUm1sbGJHUWdQU0J3Y205dGFYTmxMbDlpYVhSR2FXVnNaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjMlYwZEd4bFpGWmhiSFZsSUQwZ2NISnZiV2x6WlM1ZmMyVjBkR3hsWkZaaGJIVmxPMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZbWwwUm1sbGJHUWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl6WlhSMGJHVmtWbUZzZFdVZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2ZWeHVmVnh1WEc1UWNtOXRhWE5sU1c1emNHVmpkR2x2Ymk1d2NtOTBiM1I1Y0dVdWRtRnNkV1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtbHpSblZzWm1sc2JHVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJbU5oYm01dmRDQm5aWFFnWm5Wc1ptbHNiRzFsYm5RZ2RtRnNkV1VnYjJZZ1lTQnViMjR0Wm5Wc1ptbHNiR1ZrSUhCeWIyMXBjMlZjWEhVd01EQmhYRngxTURBd1lTQWdJQ0JUWldVZ2FIUjBjRG92TDJkdmJ5NW5iQzlvWXpGRVRHcGNYSFV3TURCaFhDSXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZjMlYwZEd4bFpGWmhiSFZsTzF4dWZUdGNibHh1VUhKdmJXbHpaVWx1YzNCbFkzUnBiMjR1Y0hKdmRHOTBlWEJsTG1WeWNtOXlJRDFjYmxCeWIyMXBjMlZKYm5Od1pXTjBhVzl1TG5CeWIzUnZkSGx3WlM1eVpXRnpiMjRnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtbHpVbVZxWldOMFpXUW9LU2tnZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lZMkZ1Ym05MElHZGxkQ0J5WldwbFkzUnBiMjRnY21WaGMyOXVJRzltSUdFZ2JtOXVMWEpsYW1WamRHVmtJSEJ5YjIxcGMyVmNYSFV3TURCaFhGeDFNREF3WVNBZ0lDQlRaV1VnYUhSMGNEb3ZMMmR2Ynk1bmJDOW9VSFZwZDBKY1hIVXdNREJoWENJcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmMyVjBkR3hsWkZaaGJIVmxPMXh1ZlR0Y2JseHVVSEp2YldselpVbHVjM0JsWTNScGIyNHVjSEp2ZEc5MGVYQmxMbWx6Um5Wc1ptbHNiR1ZrSUQxY2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXBjMFoxYkdacGJHeGxaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXVYMkpwZEVacFpXeGtJQ1lnTWpZNE5ETTFORFUyS1NBK0lEQTdYRzU5TzF4dVhHNVFjbTl0YVhObFNXNXpjR1ZqZEdsdmJpNXdjbTkwYjNSNWNHVXVhWE5TWldwbFkzUmxaQ0E5WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1ZmFYTlNaV3BsWTNSbFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdVgySnBkRVpwWld4a0lDWWdNVE0wTWpFM056STRLU0ErSURBN1hHNTlPMXh1WEc1UWNtOXRhWE5sU1c1emNHVmpkR2x2Ymk1d2NtOTBiM1I1Y0dVdWFYTlFaVzVrYVc1bklEMWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDlwYzFCbGJtUnBibWNnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbDlpYVhSR2FXVnNaQ0FtSURRd01qWTFNekU0TkNrZ1BUMDlJREE3WEc1OU8xeHVYRzVRY205dGFYTmxTVzV6Y0dWamRHbHZiaTV3Y205MGIzUjVjR1V1YVhOU1pYTnZiSFpsWkNBOVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWZhWE5TWlhOdmJIWmxaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXVYMkpwZEVacFpXeGtJQ1lnTkRBeU5qVXpNVGcwS1NBK0lEQTdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXBjMUJsYm1ScGJtY2dQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmRHRnlaMlYwS0NrdVgybHpVR1Z1WkdsdVp5Z3BPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVhWE5TWldwbFkzUmxaQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTBZWEpuWlhRb0tTNWZhWE5TWldwbFkzUmxaQ2dwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1YVhOR2RXeG1hV3hzWldRZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmZEdGeVoyVjBLQ2t1WDJselJuVnNabWxzYkdWa0tDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXBjMUpsYzI5c2RtVmtJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzUmhjbWRsZENncExsOXBjMUpsYzI5c2RtVmtLQ2s3WEc1OU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVmZG1Gc2RXVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmMyVjBkR3hsWkZaaGJIVmxPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYM0psWVhOdmJpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFJvYVhNdVgzVnVjMlYwVW1WcVpXTjBhVzl1U1hOVmJtaGhibVJzWldRb0tUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZjMlYwZEd4bFpGWmhiSFZsTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1ZG1Gc2RXVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0IyWVhJZ2RHRnlaMlYwSUQwZ2RHaHBjeTVmZEdGeVoyVjBLQ2s3WEc0Z0lDQWdhV1lnS0NGMFlYSm5aWFF1YVhOR2RXeG1hV3hzWldRb0tTa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z3aVkyRnVibTkwSUdkbGRDQm1kV3htYVd4c2JXVnVkQ0IyWVd4MVpTQnZaaUJoSUc1dmJpMW1kV3htYVd4c1pXUWdjSEp2YldselpWeGNkVEF3TUdGY1hIVXdNREJoSUNBZ0lGTmxaU0JvZEhSd09pOHZaMjl2TG1kc0wyaGpNVVJNYWx4Y2RUQXdNR0ZjSWlrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBZWEpuWlhRdVgzTmxkSFJzWldSV1lXeDFaVHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbkpsWVhOdmJpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCMFlYSm5aWFFnUFNCMGFHbHpMbDkwWVhKblpYUW9LVHRjYmlBZ0lDQnBaaUFvSVhSaGNtZGxkQzVwYzFKbGFtVmpkR1ZrS0NrcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSW1OaGJtNXZkQ0JuWlhRZ2NtVnFaV04wYVc5dUlISmxZWE52YmlCdlppQmhJRzV2YmkxeVpXcGxZM1JsWkNCd2NtOXRhWE5sWEZ4MU1EQXdZVnhjZFRBd01HRWdJQ0FnVTJWbElHaDBkSEE2THk5bmIyOHVaMnd2YUZCMWFYZENYRngxTURBd1lWd2lLVHRjYmlBZ0lDQjlYRzRnSUNBZ2RHRnlaMlYwTGw5MWJuTmxkRkpsYW1WamRHbHZia2x6Vlc1b1lXNWtiR1ZrS0NrN1hHNGdJQ0FnY21WMGRYSnVJSFJoY21kbGRDNWZjMlYwZEd4bFpGWmhiSFZsTzF4dWZUdGNibHh1WEc1UWNtOXRhWE5sTGxCeWIyMXBjMlZKYm5Od1pXTjBhVzl1SUQwZ1VISnZiV2x6WlVsdWMzQmxZM1JwYjI0N1hHNTlPMXh1WEc1OUxIdDlYU3d6TlRwYlpuVnVZM1JwYjI0b1gyUmxjbVZ4WHl4dGIyUjFiR1VzWlhod2IzSjBjeWw3WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvVUhKdmJXbHpaU3dnU1U1VVJWSk9RVXdwSUh0Y2JuWmhjaUIxZEdsc0lEMGdYMlJsY21WeFh5aGNJaTR2ZFhScGJDNXFjMXdpS1R0Y2JuWmhjaUJsY25KdmNrOWlhaUE5SUhWMGFXd3VaWEp5YjNKUFltbzdYRzUyWVhJZ2FYTlBZbXBsWTNRZ1BTQjFkR2xzTG1selQySnFaV04wTzF4dVhHNW1kVzVqZEdsdmJpQjBjbmxEYjI1MlpYSjBWRzlRY205dGFYTmxLRzlpYWl3Z1kyOXVkR1Y0ZENrZ2UxeHVJQ0FnSUdsbUlDaHBjMDlpYW1WamRDaHZZbW9wS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h2WW1vZ2FXNXpkR0Z1WTJWdlppQlFjbTl0YVhObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYjJKcU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLR2x6UVc1NVFteDFaV0pwY21SUWNtOXRhWE5sS0c5aWFpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ5WlhRZ1BTQnVaWGNnVUhKdmJXbHpaU2hKVGxSRlVrNUJUQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZZbW91WDNSb1pXNG9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwTGw5bWRXeG1hV3hzVlc1amFHVmphMlZrTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRDNWZjbVZxWldOMFZXNWphR1ZqYTJWa1EyaGxZMnRGY25KdmNpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFF1WDNCeWIyZHlaWE56Vlc1amFHVmphMlZrTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVkV3hzWEc0Z0lDQWdJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IyWVhJZ2RHaGxiaUE5SUhWMGFXd3VkSEo1UTJGMFkyZ29aMlYwVkdobGJpa29iMkpxS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvWlc0Z1BUMDlJR1Z5Y205eVQySnFLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTI5dWRHVjRkQ2tnWTI5dWRHVjRkQzVmY0hWemFFTnZiblJsZUhRb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnlaWFFnUFNCUWNtOXRhWE5sTG5KbGFtVmpkQ2gwYUdWdUxtVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR052Ym5SbGVIUXBJR052Ym5SbGVIUXVYM0J2Y0VOdmJuUmxlSFFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWFE3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhSb1pXNGdQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSdlZHaGxibUZpYkdVb2IySnFMQ0IwYUdWdUxDQmpiMjUwWlhoMEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnYjJKcU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCblpYUlVhR1Z1S0c5aWFpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdlltb3VkR2hsYmp0Y2JuMWNibHh1ZG1GeUlHaGhjMUJ5YjNBZ1BTQjdmUzVvWVhOUGQyNVFjbTl3WlhKMGVUdGNibVoxYm1OMGFXOXVJR2x6UVc1NVFteDFaV0pwY21SUWNtOXRhWE5sS0c5aWFpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCb1lYTlFjbTl3TG1OaGJHd29iMkpxTENCY0lsOXdjbTl0YVhObE1Gd2lLVHRjYm4xY2JseHVablZ1WTNScGIyNGdaRzlVYUdWdVlXSnNaU2g0TENCMGFHVnVMQ0JqYjI1MFpYaDBLU0I3WEc0Z0lDQWdkbUZ5SUhCeWIyMXBjMlVnUFNCdVpYY2dVSEp2YldselpTaEpUbFJGVWs1QlRDazdYRzRnSUNBZ2RtRnlJSEpsZENBOUlIQnliMjFwYzJVN1hHNGdJQ0FnYVdZZ0tHTnZiblJsZUhRcElHTnZiblJsZUhRdVgzQjFjMmhEYjI1MFpYaDBLQ2s3WEc0Z0lDQWdjSEp2YldselpTNWZZMkZ3ZEhWeVpWTjBZV05yVkhKaFkyVW9LVHRjYmlBZ0lDQnBaaUFvWTI5dWRHVjRkQ2tnWTI5dWRHVjRkQzVmY0c5d1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUhaaGNpQnplVzVqYUhKdmJtOTFjeUE5SUhSeWRXVTdYRzRnSUNBZ2RtRnlJSEpsYzNWc2RDQTlJSFYwYVd3dWRISjVRMkYwWTJnb2RHaGxiaWt1WTJGc2JDaDRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1WR2NtOXRWR2hsYm1GaWJHVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnFaV04wUm5KdmJWUm9aVzVoWW14bExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyZHlaWE56Um5KdmJWUm9aVzVoWW14bEtUdGNiaUFnSUNCemVXNWphSEp2Ym05MWN5QTlJR1poYkhObE8xeHVJQ0FnSUdsbUlDaHdjbTl0YVhObElDWW1JSEpsYzNWc2RDQTlQVDBnWlhKeWIzSlBZbW9wSUh0Y2JpQWdJQ0FnSUNBZ2NISnZiV2x6WlM1ZmNtVnFaV04wUTJGc2JHSmhZMnNvY21WemRXeDBMbVVzSUhSeWRXVXNJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQndjbTl0YVhObElEMGdiblZzYkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJ5WlhOdmJIWmxSbkp2YlZSb1pXNWhZbXhsS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hjSEp2YldselpTa2djbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQndjbTl0YVhObExsOXlaWE52YkhabFEyRnNiR0poWTJzb2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCd2NtOXRhWE5sSUQwZ2JuVnNiRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQnlaV3BsWTNSR2NtOXRWR2hsYm1GaWJHVW9jbVZoYzI5dUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGNISnZiV2x6WlNrZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNCd2NtOXRhWE5sTGw5eVpXcGxZM1JEWVd4c1ltRmpheWh5WldGemIyNHNJSE41Ym1Ob2NtOXViM1Z6TENCMGNuVmxLVHRjYmlBZ0lDQWdJQ0FnY0hKdmJXbHpaU0E5SUc1MWJHdzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z2NISnZaM0psYzNOR2NtOXRWR2hsYm1GaWJHVW9kbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGd2NtOXRhWE5sS1NCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NISnZiV2x6WlM1ZmNISnZaM0psYzNNZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaUzVmY0hKdlozSmxjM01vZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCeVpYUTdYRzU5WEc1Y2JuSmxkSFZ5YmlCMGNubERiMjUyWlhKMFZHOVFjbTl0YVhObE8xeHVmVHRjYmx4dWZTeDdYQ0l1TDNWMGFXd3Vhbk5jSWpvek9IMWRMRE0yT2x0bWRXNWpkR2x2YmloZlpHVnlaWEZmTEcxdlpIVnNaU3hsZUhCdmNuUnpLWHRjYmx3aWRYTmxJSE4wY21samRGd2lPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhRY205dGFYTmxMQ0JKVGxSRlVrNUJUQ2tnZTF4dWRtRnlJSFYwYVd3Z1BTQmZaR1Z5WlhGZktGd2lMaTkxZEdsc0xtcHpYQ0lwTzF4dWRtRnlJRlJwYldWdmRYUkZjbkp2Y2lBOUlGQnliMjFwYzJVdVZHbHRaVzkxZEVWeWNtOXlPMXh1WEc1MllYSWdZV1owWlhKVWFXMWxiM1YwSUQwZ1puVnVZM1JwYjI0Z0tIQnliMjFwYzJVc0lHMWxjM05oWjJVcElIdGNiaUFnSUNCcFppQW9JWEJ5YjIxcGMyVXVhWE5RWlc1a2FXNW5LQ2twSUhKbGRIVnlianRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JRzFsYzNOaFoyVWdJVDA5SUZ3aWMzUnlhVzVuWENJcElIdGNiaUFnSUNBZ0lDQWdiV1Z6YzJGblpTQTlJRndpYjNCbGNtRjBhVzl1SUhScGJXVmtJRzkxZEZ3aU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ1pYSnlJRDBnYm1WM0lGUnBiV1Z2ZFhSRmNuSnZjaWh0WlhOellXZGxLVHRjYmlBZ0lDQjFkR2xzTG0xaGNtdEJjMDl5YVdkcGJtRjBhVzVuUm5KdmJWSmxhbVZqZEdsdmJpaGxjbklwTzF4dUlDQWdJSEJ5YjIxcGMyVXVYMkYwZEdGamFFVjRkSEpoVkhKaFkyVW9aWEp5S1R0Y2JpQWdJQ0J3Y205dGFYTmxMbDlqWVc1alpXd29aWEp5S1R0Y2JuMDdYRzVjYm5aaGNpQmhablJsY2xaaGJIVmxJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHNnY21WMGRYSnVJR1JsYkdGNUtDdDBhR2x6S1M1MGFHVnVVbVYwZFhKdUtIWmhiSFZsS1RzZ2ZUdGNiblpoY2lCa1pXeGhlU0E5SUZCeWIyMXBjMlV1WkdWc1lYa2dQU0JtZFc1amRHbHZiaUFvZG1Gc2RXVXNJRzF6S1NCN1hHNGdJQ0FnYVdZZ0tHMXpJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdiWE1nUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWFFnUFNCdVpYY2dVSEp2YldselpTaEpUbFJGVWs1QlRDazdYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1NCN0lISmxkQzVmWm5Wc1ptbHNiQ2dwT3lCOUxDQnRjeWs3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhRN1hHNGdJQ0FnZlZ4dUlDQWdJRzF6SUQwZ0syMXpPMXh1SUNBZ0lISmxkSFZ5YmlCUWNtOXRhWE5sTG5KbGMyOXNkbVVvZG1Gc2RXVXBMbDkwYUdWdUtHRm1kR1Z5Vm1Gc2RXVXNJRzUxYkd3c0lHNTFiR3dzSUcxekxDQjFibVJsWm1sdVpXUXBPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVaR1ZzWVhrZ1BTQm1kVzVqZEdsdmJpQW9iWE1wSUh0Y2JpQWdJQ0J5WlhSMWNtNGdaR1ZzWVhrb2RHaHBjeXdnYlhNcE8xeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z2MzVmpZMlZ6YzBOc1pXRnlLSFpoYkhWbEtTQjdYRzRnSUNBZ2RtRnlJR2hoYm1Sc1pTQTlJSFJvYVhNN1hHNGdJQ0FnYVdZZ0tHaGhibVJzWlNCcGJuTjBZVzVqWlc5bUlFNTFiV0psY2lrZ2FHRnVaR3hsSUQwZ0syaGhibVJzWlR0Y2JpQWdJQ0JqYkdWaGNsUnBiV1Z2ZFhRb2FHRnVaR3hsS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkbUZzZFdVN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdaaGFXeDFjbVZEYkdWaGNpaHlaV0Z6YjI0cElIdGNiaUFnSUNCMllYSWdhR0Z1Wkd4bElEMGdkR2hwY3p0Y2JpQWdJQ0JwWmlBb2FHRnVaR3hsSUdsdWMzUmhibU5sYjJZZ1RuVnRZbVZ5S1NCb1lXNWtiR1VnUFNBcmFHRnVaR3hsTzF4dUlDQWdJR05zWldGeVZHbHRaVzkxZENob1lXNWtiR1VwTzF4dUlDQWdJSFJvY205M0lISmxZWE52Ymp0Y2JuMWNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1ZEdsdFpXOTFkQ0E5SUdaMWJtTjBhVzl1SUNodGN5d2diV1Z6YzJGblpTa2dlMXh1SUNBZ0lHMXpJRDBnSzIxek8xeHVJQ0FnSUhaaGNpQnlaWFFnUFNCMGFHbHpMblJvWlc0b0tTNWpZVzVqWld4c1lXSnNaU2dwTzF4dUlDQWdJSEpsZEM1ZlkyRnVZMlZzYkdGMGFXOXVVR0Z5Wlc1MElEMGdkR2hwY3p0Y2JpQWdJQ0IyWVhJZ2FHRnVaR3hsSUQwZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpQjBhVzFsYjNWMFZHbHRaVzkxZENncElIdGNiaUFnSUNBZ0lDQWdZV1owWlhKVWFXMWxiM1YwS0hKbGRDd2diV1Z6YzJGblpTazdYRzRnSUNBZ2ZTd2diWE1wTzF4dUlDQWdJSEpsZEhWeWJpQnlaWFF1WDNSb1pXNG9jM1ZqWTJWemMwTnNaV0Z5TENCbVlXbHNkWEpsUTJ4bFlYSXNJSFZ1WkdWbWFXNWxaQ3dnYUdGdVpHeGxMQ0IxYm1SbFptbHVaV1FwTzF4dWZUdGNibHh1ZlR0Y2JseHVmU3g3WENJdUwzVjBhV3d1YW5OY0lqb3pPSDFkTERNM09sdG1kVzVqZEdsdmJpaGZaR1Z5WlhGZkxHMXZaSFZzWlN4bGVIQnZjblJ6S1h0Y2Jsd2lkWE5sSUhOMGNtbGpkRndpTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlBb1VISnZiV2x6WlN3Z1lYQnBVbVZxWldOMGFXOXVMQ0IwY25sRGIyNTJaWEowVkc5UWNtOXRhWE5sTEZ4dUlDQWdJR055WldGMFpVTnZiblJsZUhRcElIdGNiaUFnSUNCMllYSWdWSGx3WlVWeWNtOXlJRDBnWDJSbGNtVnhYeWhjSWk0dlpYSnliM0p6TG1welhDSXBMbFI1Y0dWRmNuSnZjanRjYmlBZ0lDQjJZWElnYVc1b1pYSnBkSE1nUFNCZlpHVnlaWEZmS0Z3aUxpOTFkR2xzTG1welhDSXBMbWx1YUdWeWFYUnpPMXh1SUNBZ0lIWmhjaUJRY205dGFYTmxTVzV6Y0dWamRHbHZiaUE5SUZCeWIyMXBjMlV1VUhKdmJXbHpaVWx1YzNCbFkzUnBiMjQ3WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJwYm5Od1pXTjBhVzl1VFdGd2NHVnlLR2x1YzNCbFkzUnBiMjV6S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJzWlc0Z1BTQnBibk53WldOMGFXOXVjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdU95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCcGJuTndaV04wYVc5dUlEMGdhVzV6Y0dWamRHbHZibk5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FXNXpjR1ZqZEdsdmJpNXBjMUpsYW1WamRHVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVUhKdmJXbHpaUzV5WldwbFkzUW9hVzV6Y0dWamRHbHZiaTVsY25KdmNpZ3BLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsdWMzQmxZM1JwYjI1elcybGRJRDBnYVc1emNHVmpkR2x2Ymk1ZmMyVjBkR3hsWkZaaGJIVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJwYm5Od1pXTjBhVzl1Y3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUIwYUhKdmQyVnlLR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpZ3BlM1JvY205M0lHVTdmU3dnTUNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnWTJGemRGQnlaWE5sY25acGJtZEVhWE53YjNOaFlteGxLSFJvWlc1aFlteGxLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnRZWGxpWlZCeWIyMXBjMlVnUFNCMGNubERiMjUyWlhKMFZHOVFjbTl0YVhObEtIUm9aVzVoWW14bEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0cxaGVXSmxVSEp2YldselpTQWhQVDBnZEdobGJtRmliR1VnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dWdlppQjBhR1Z1WVdKc1pTNWZhWE5FYVhOd2IzTmhZbXhsSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dWdlppQjBhR1Z1WVdKc1pTNWZaMlYwUkdsemNHOXpaWElnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hsYm1GaWJHVXVYMmx6UkdsemNHOXpZV0pzWlNncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYbGlaVkJ5YjIxcGMyVXVYM05sZEVScGMzQnZjMkZpYkdVb2RHaGxibUZpYkdVdVgyZGxkRVJwYzNCdmMyVnlLQ2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdFlYbGlaVkJ5YjIxcGMyVTdYRzRnSUNBZ2ZWeHVJQ0FnSUdaMWJtTjBhVzl1SUdScGMzQnZjMlVvY21WemIzVnlZMlZ6TENCcGJuTndaV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCcElEMGdNRHRjYmlBZ0lDQWdJQ0FnZG1GeUlHeGxiaUE5SUhKbGMyOTFjbU5sY3k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWFFnUFNCUWNtOXRhWE5sTG1SbFptVnlLQ2s3WEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdsMFpYSmhkRzl5S0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHa2dQajBnYkdWdUtTQnlaWFIxY200Z2NtVjBMbkpsYzI5c2RtVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ0WVhsaVpWQnliMjFwYzJVZ1BTQmpZWE4wVUhKbGMyVnlkbWx1WjBScGMzQnZjMkZpYkdVb2NtVnpiM1Z5WTJWelcya3JLMTBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0cxaGVXSmxVSEp2YldselpTQnBibk4wWVc1alpXOW1JRkJ5YjIxcGMyVWdKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhsaVpWQnliMjFwYzJVdVgybHpSR2x6Y0c5ellXSnNaU2dwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JXRjVZbVZRY205dGFYTmxJRDBnZEhKNVEyOXVkbVZ5ZEZSdlVISnZiV2x6WlNoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUcxaGVXSmxVSEp2YldselpTNWZaMlYwUkdsemNHOXpaWElvS1M1MGNubEVhWE53YjNObEtHbHVjM0JsWTNScGIyNHBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjNWeVkyVnpMbkJ5YjIxcGMyVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9jbTkzWlhJb1pTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodFlYbGlaVkJ5YjIxcGMyVWdhVzV6ZEdGdVkyVnZaaUJRY205dGFYTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdFlYbGlaVkJ5YjIxcGMyVXVYM1JvWlc0b2FYUmxjbUYwYjNJc0lIUm9jbTkzWlhJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiblZzYkN3Z2JuVnNiQ3dnYm5Wc2JDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGNtRjBiM0lvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBkR1Z5WVhSdmNpZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVYwTG5CeWIyMXBjMlU3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdablZ1WTNScGIyNGdaR2x6Y0c5elpYSlRkV05qWlhOektIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwYm5Od1pXTjBhVzl1SUQwZ2JtVjNJRkJ5YjIxcGMyVkpibk53WldOMGFXOXVLQ2s3WEc0Z0lDQWdJQ0FnSUdsdWMzQmxZM1JwYjI0dVgzTmxkSFJzWldSV1lXeDFaU0E5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0JwYm5Od1pXTjBhVzl1TGw5aWFYUkdhV1ZzWkNBOUlESTJPRFF6TlRRMU5qdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUnBjM0J2YzJVb2RHaHBjeXdnYVc1emNHVmpkR2x2YmlrdWRHaGxibEpsZEhWeWJpaDJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnWkdsemNHOXpaWEpHWVdsc0tISmxZWE52YmlrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYVc1emNHVmpkR2x2YmlBOUlHNWxkeUJRY205dGFYTmxTVzV6Y0dWamRHbHZiaWdwTzF4dUlDQWdJQ0FnSUNCcGJuTndaV04wYVc5dUxsOXpaWFIwYkdWa1ZtRnNkV1VnUFNCeVpXRnpiMjQ3WEc0Z0lDQWdJQ0FnSUdsdWMzQmxZM1JwYjI0dVgySnBkRVpwWld4a0lEMGdNVE0wTWpFM056STRPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaR2x6Y0c5elpTaDBhR2x6TENCcGJuTndaV04wYVc5dUtTNTBhR1Z1VkdoeWIzY29jbVZoYzI5dUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCRWFYTndiM05sY2loa1lYUmhMQ0J3Y205dGFYTmxMQ0JqYjI1MFpYaDBLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlJoZEdFZ1BTQmtZWFJoTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl3Y205dGFYTmxJRDBnY0hKdmJXbHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZMjl1ZEdWNGRDQTlJR052Ym5SbGVIUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1JHbHpjRzl6WlhJdWNISnZkRzkwZVhCbExtUmhkR0VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5a1lYUmhPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQkVhWE53YjNObGNpNXdjbTkwYjNSNWNHVXVjSEp2YldselpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYM0J5YjIxcGMyVTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lFUnBjM0J2YzJWeUxuQnliM1J2ZEhsd1pTNXlaWE52ZFhKalpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNISnZiV2x6WlNncExtbHpSblZzWm1sc2JHVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5CeWIyMXBjMlVvS1M1MllXeDFaU2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQkVhWE53YjNObGNpNXdjbTkwYjNSNWNHVXVkSEo1UkdsemNHOXpaU0E5SUdaMWJtTjBhVzl1S0dsdWMzQmxZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhKbGMyOTFjbU5sSUQwZ2RHaHBjeTV5WlhOdmRYSmpaU2dwTzF4dUlDQWdJQ0FnSUNCMllYSWdZMjl1ZEdWNGRDQTlJSFJvYVhNdVgyTnZiblJsZUhRN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjI1MFpYaDBJQ0U5UFNCMWJtUmxabWx1WldRcElHTnZiblJsZUhRdVgzQjFjMmhEYjI1MFpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWFFnUFNCeVpYTnZkWEpqWlNBaFBUMGdiblZzYkZ4dUlDQWdJQ0FnSUNBZ0lDQWdQeUIwYUdsekxtUnZSR2x6Y0c5elpTaHlaWE52ZFhKalpTd2dhVzV6Y0dWamRHbHZiaWtnT2lCdWRXeHNPMXh1SUNBZ0lDQWdJQ0JwWmlBb1kyOXVkR1Y0ZENBaFBUMGdkVzVrWldacGJtVmtLU0JqYjI1MFpYaDBMbDl3YjNCRGIyNTBaWGgwS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNCeWIyMXBjMlV1WDNWdWMyVjBSR2x6Y0c5ellXSnNaU2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlrWVhSaElEMGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1JHbHpjRzl6WlhJdWFYTkVhWE53YjNObGNpQTlJR1oxYm1OMGFXOXVJQ2hrS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb1pDQWhQU0J1ZFd4c0lDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3Wlc5bUlHUXVjbVZ6YjNWeVkyVWdQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dWdlppQmtMblJ5ZVVScGMzQnZjMlVnUFQwOUlGd2lablZ1WTNScGIyNWNJaWs3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR1oxYm1OMGFXOXVJRVoxYm1OMGFXOXVSR2x6Y0c5elpYSW9abTRzSUhCeWIyMXBjMlVzSUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYjI1emRISjFZM1J2Y2lRb1ptNHNJSEJ5YjIxcGMyVXNJR052Ym5SbGVIUXBPMXh1SUNBZ0lIMWNiaUFnSUNCcGJtaGxjbWwwY3loR2RXNWpkR2x2YmtScGMzQnZjMlZ5TENCRWFYTndiM05sY2lrN1hHNWNiaUFnSUNCR2RXNWpkR2x2YmtScGMzQnZjMlZ5TG5CeWIzUnZkSGx3WlM1a2IwUnBjM0J2YzJVZ1BTQm1kVzVqZEdsdmJpQW9jbVZ6YjNWeVkyVXNJR2x1YzNCbFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1p1SUQwZ2RHaHBjeTVrWVhSaEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1iaTVqWVd4c0tISmxjMjkxY21ObExDQnlaWE52ZFhKalpTd2dhVzV6Y0dWamRHbHZiaWs3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR1oxYm1OMGFXOXVJRzFoZVdKbFZXNTNjbUZ3UkdsemNHOXpaWElvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tFUnBjM0J2YzJWeUxtbHpSR2x6Y0c5elpYSW9kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkpsYzI5MWNtTmxjMXQwYUdsekxtbHVaR1Y0WFM1ZmMyVjBSR2x6Y0c5ellXSnNaU2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZG1Gc2RXVXVjSEp2YldselpTZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCUWNtOXRhWE5sTG5WemFXNW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYkdWdUlEMGdZWEpuZFcxbGJuUnpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdhV1lnS0d4bGJpQThJRElwSUhKbGRIVnliaUJoY0dsU1pXcGxZM1JwYjI0b1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY0lubHZkU0J0ZFhOMElIQmhjM01nWVhRZ2JHVmhjM1FnTWlCaGNtZDFiV1Z1ZEhNZ2RHOGdVSEp2YldselpTNTFjMmx1WjF3aUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdadUlEMGdZWEpuZFcxbGJuUnpXMnhsYmlBdElERmRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdadUlDRTlQU0JjSW1aMWJtTjBhVzl1WENJcElISmxkSFZ5YmlCaGNHbFNaV3BsWTNScGIyNG9YQ0ptYmlCdGRYTjBJR0psSUdFZ1puVnVZM1JwYjI1Y1hIVXdNREJoWEZ4MU1EQXdZU0FnSUNCVFpXVWdhSFIwY0RvdkwyZHZieTVuYkM4NU1UWnNTa3BjWEhVd01EQmhYQ0lwTzF4dUlDQWdJQ0FnSUNCc1pXNHRMVHRjYmlBZ0lDQWdJQ0FnZG1GeUlISmxjMjkxY21ObGN5QTlJRzVsZHlCQmNuSmhlU2hzWlc0cE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYmpzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnY21WemIzVnlZMlVnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9SR2x6Y0c5elpYSXVhWE5FYVhOd2IzTmxjaWh5WlhOdmRYSmpaU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR2x6Y0c5elpYSWdQU0J5WlhOdmRYSmpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhOdmRYSmpaU0E5SUhKbGMyOTFjbU5sTG5CeWIyMXBjMlVvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZkWEpqWlM1ZmMyVjBSR2x6Y0c5ellXSnNaU2hrYVhOd2IzTmxjaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ0WVhsaVpWQnliMjFwYzJVZ1BTQjBjbmxEYjI1MlpYSjBWRzlRY205dGFYTmxLSEpsYzI5MWNtTmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjVZbVZRY205dGFYTmxJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52ZFhKalpTQTlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRZWGxpWlZCeWIyMXBjMlV1WDNSb1pXNG9iV0Y1WW1WVmJuZHlZWEJFYVhOd2IzTmxjaXdnYm5Wc2JDd2diblZzYkN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5MWNtTmxjem9nY21WemIzVnlZMlZ6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVaR1Y0T2lCcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzSUhWdVpHVm1hVzVsWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjNWeVkyVnpXMmxkSUQwZ2NtVnpiM1Z5WTJVN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IyWVhJZ2NISnZiV2x6WlNBOUlGQnliMjFwYzJVdWMyVjBkR3hsS0hKbGMyOTFjbU5sY3lsY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYUdWdUtHbHVjM0JsWTNScGIyNU5ZWEJ3WlhJcFhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEdobGJpaG1kVzVqZEdsdmJpaDJZV3h6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZiV2x6WlM1ZmNIVnphRU52Ym5SbGVIUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NtVjBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZENBOUlHWnVMbUZ3Y0d4NUtIVnVaR1ZtYVc1bFpDd2dkbUZzY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQm1hVzVoYkd4NUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaUzVmY0c5d1EyOXVkR1Y0ZENncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVjBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUM1ZmRHaGxiaWhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYVhOd2IzTmxjbE4xWTJObGMzTXNJR1JwYzNCdmMyVnlSbUZwYkN3Z2RXNWtaV1pwYm1Wa0xDQnlaWE52ZFhKalpYTXNJSFZ1WkdWbWFXNWxaQ2s3WEc0Z0lDQWdJQ0FnSUhKbGMyOTFjbU5sY3k1d2NtOXRhWE5sSUQwZ2NISnZiV2x6WlR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCeWIyMXBjMlU3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJRkJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbDl6WlhSRWFYTndiM05oWW14bElEMGdablZ1WTNScGIyNGdLR1JwYzNCdmMyVnlLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMkpwZEVacFpXeGtJRDBnZEdocGN5NWZZbWwwUm1sbGJHUWdmQ0F5TmpJeE5EUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyUnBjM0J2YzJWeUlEMGdaR2x6Y0c5elpYSTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lGQnliMjFwYzJVdWNISnZkRzkwZVhCbExsOXBjMFJwYzNCdmMyRmliR1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1ZlltbDBSbWxsYkdRZ0ppQXlOakl4TkRRcElENGdNRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdVSEp2YldselpTNXdjbTkwYjNSNWNHVXVYMmRsZEVScGMzQnZjMlZ5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZlpHbHpjRzl6WlhJN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUZCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTGw5MWJuTmxkRVJwYzNCdmMyRmliR1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgySnBkRVpwWld4a0lEMGdkR2hwY3k1ZlltbDBSbWxsYkdRZ0ppQW9makkyTWpFME5DazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyUnBjM0J2YzJWeUlEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQlFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWthWE53YjNObGNpQTlJR1oxYm1OMGFXOXVJQ2htYmlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JR1p1SUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnUm5WdVkzUnBiMjVFYVhOd2IzTmxjaWhtYml3Z2RHaHBjeXdnWTNKbFlYUmxRMjl1ZEdWNGRDZ3BLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDazdYRzRnSUNBZ2ZUdGNibHh1ZlR0Y2JseHVmU3g3WENJdUwyVnljbTl5Y3k1cWMxd2lPakV6TEZ3aUxpOTFkR2xzTG1welhDSTZNemg5WFN3ek9EcGJablZ1WTNScGIyNG9YMlJsY21WeFh5eHRiMlIxYkdVc1pYaHdiM0owY3lsN1hHNWNJblZ6WlNCemRISnBZM1JjSWp0Y2JuWmhjaUJsY3pVZ1BTQmZaR1Z5WlhGZktGd2lMaTlsY3pVdWFuTmNJaWs3WEc1MllYSWdZMkZ1UlhaaGJIVmhkR1VnUFNCMGVYQmxiMllnYm1GMmFXZGhkRzl5SUQwOUlGd2lkVzVrWldacGJtVmtYQ0k3WEc1MllYSWdhR0YyWlVkbGRIUmxjbk1nUFNBb1puVnVZM1JwYjI0b0tYdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2J5QTlJSHQ5TzF4dUlDQWdJQ0FnSUNCbGN6VXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2J5d2dYQ0ptWENJc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF6TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc4dVppQTlQVDBnTXp0Y2JpQWdJQ0I5WEc0Z0lDQWdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVmU2tvS1R0Y2JseHVkbUZ5SUdWeWNtOXlUMkpxSUQwZ2UyVTZJSHQ5ZlR0Y2JuWmhjaUIwY25sRFlYUmphRlJoY21kbGREdGNibVoxYm1OMGFXOXVJSFJ5ZVVOaGRHTm9aWElvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhSaGNtZGxkQ0E5SUhSeWVVTmhkR05vVkdGeVoyVjBPMXh1SUNBZ0lDQWdJQ0IwY25sRFlYUmphRlJoY21kbGRDQTlJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMFlYSm5aWFF1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNiaUFnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJR1Z5Y205eVQySnFMbVVnUFNCbE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1pYSnliM0pQWW1vN1hHNGdJQ0FnZlZ4dWZWeHVablZ1WTNScGIyNGdkSEo1UTJGMFkyZ29abTRwSUh0Y2JpQWdJQ0IwY25sRFlYUmphRlJoY21kbGRDQTlJR1p1TzF4dUlDQWdJSEpsZEhWeWJpQjBjbmxEWVhSamFHVnlPMXh1ZlZ4dVhHNTJZWElnYVc1b1pYSnBkSE1nUFNCbWRXNWpkR2x2YmloRGFHbHNaQ3dnVUdGeVpXNTBLU0I3WEc0Z0lDQWdkbUZ5SUdoaGMxQnliM0FnUFNCN2ZTNW9ZWE5QZDI1UWNtOXdaWEowZVR0Y2JseHVJQ0FnSUdaMWJtTjBhVzl1SUZRb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOXVjM1J5ZFdOMGIzSWdQU0JEYUdsc1pEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amIyNXpkSEoxWTNSdmNpUWdQU0JRWVhKbGJuUTdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJSEJ5YjNCbGNuUjVUbUZ0WlNCcGJpQlFZWEpsYm5RdWNISnZkRzkwZVhCbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VUhKdmNDNWpZV3hzS0ZCaGNtVnVkQzV3Y205MGIzUjVjR1VzSUhCeWIzQmxjblI1VG1GdFpTa2dKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d1pYSjBlVTVoYldVdVkyaGhja0YwS0hCeWIzQmxjblI1VG1GdFpTNXNaVzVuZEdndE1Ta2dJVDA5SUZ3aUpGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5iY0hKdmNHVnlkSGxPWVcxbElDc2dYQ0lrWENKZElEMGdVR0Z5Wlc1MExuQnliM1J2ZEhsd1pWdHdjbTl3WlhKMGVVNWhiV1ZkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lGUXVjSEp2ZEc5MGVYQmxJRDBnVUdGeVpXNTBMbkJ5YjNSdmRIbHdaVHRjYmlBZ0lDQkRhR2xzWkM1d2NtOTBiM1I1Y0dVZ1BTQnVaWGNnVkNncE8xeHVJQ0FnSUhKbGRIVnliaUJEYUdsc1pDNXdjbTkwYjNSNWNHVTdYRzU5TzF4dVhHNWNibVoxYm1OMGFXOXVJR2x6VUhKcGJXbDBhWFpsS0haaGJDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMllXd2dQVDBnYm5Wc2JDQjhmQ0IyWVd3Z1BUMDlJSFJ5ZFdVZ2ZId2dkbUZzSUQwOVBTQm1ZV3h6WlNCOGZGeHVJQ0FnSUNBZ0lDQjBlWEJsYjJZZ2RtRnNJRDA5UFNCY0luTjBjbWx1WjF3aUlIeDhJSFI1Y0dWdlppQjJZV3dnUFQwOUlGd2liblZ0WW1WeVhDSTdYRzVjYm4xY2JseHVablZ1WTNScGIyNGdhWE5QWW1wbFkzUW9kbUZzZFdVcElIdGNiaUFnSUNCeVpYUjFjbTRnSVdselVISnBiV2wwYVhabEtIWmhiSFZsS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYldGNVltVlhjbUZ3UVhORmNuSnZjaWh0WVhsaVpVVnljbTl5S1NCN1hHNGdJQ0FnYVdZZ0tDRnBjMUJ5YVcxcGRHbDJaU2h0WVhsaVpVVnljbTl5S1NrZ2NtVjBkWEp1SUcxaGVXSmxSWEp5YjNJN1hHNWNiaUFnSUNCeVpYUjFjbTRnYm1WM0lFVnljbTl5S0hOaFptVlViMU4wY21sdVp5aHRZWGxpWlVWeWNtOXlLU2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJSGRwZEdoQmNIQmxibVJsWkNoMFlYSm5aWFFzSUdGd2NHVnVaR1ZsS1NCN1hHNGdJQ0FnZG1GeUlHeGxiaUE5SUhSaGNtZGxkQzVzWlc1bmRHZzdYRzRnSUNBZ2RtRnlJSEpsZENBOUlHNWxkeUJCY25KaGVTaHNaVzRnS3lBeEtUdGNiaUFnSUNCMllYSWdhVHRjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JHVnVPeUFySzJrcElIdGNiaUFnSUNBZ0lDQWdjbVYwVzJsZElEMGdkR0Z5WjJWMFcybGRPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUmJhVjBnUFNCaGNIQmxibVJsWlR0Y2JpQWdJQ0J5WlhSMWNtNGdjbVYwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJuWlhSRVlYUmhVSEp2Y0dWeWRIbFBja1JsWm1GMWJIUW9iMkpxTENCclpYa3NJR1JsWm1GMWJIUldZV3gxWlNrZ2UxeHVJQ0FnSUdsbUlDaGxjelV1YVhORlV6VXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUmxjMk1nUFNCUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbEVaWE5qY21sd2RHOXlLRzlpYWl3Z2EyVjVLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9aR1Z6WXlBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaR1Z6WXk1blpYUWdQVDBnYm5Wc2JDQW1KaUJrWlhOakxuTmxkQ0E5UFNCdWRXeHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ4Z1pHVnpZeTUyWVd4MVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E2SUdSbFptRjFiSFJXWVd4MVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN2ZTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYWl3Z2EyVjVLU0EvSUc5aWFsdHJaWGxkSURvZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnYm05MFJXNTFiV1Z5WVdKc1pWQnliM0FvYjJKcUxDQnVZVzFsTENCMllXeDFaU2tnZTF4dUlDQWdJR2xtSUNocGMxQnlhVzFwZEdsMlpTaHZZbW9wS1NCeVpYUjFjbTRnYjJKcU8xeHVJQ0FnSUhaaGNpQmtaWE5qY21sd2RHOXlJRDBnZTF4dUlDQWdJQ0FnSUNCMllXeDFaVG9nZG1Gc2RXVXNYRzRnSUNBZ0lDQWdJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnWlc1MWJXVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhkeWFYUmhZbXhsT2lCMGNuVmxYRzRnSUNBZ2ZUdGNiaUFnSUNCbGN6VXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2IySnFMQ0J1WVcxbExDQmtaWE5qY21sd2RHOXlLVHRjYmlBZ0lDQnlaWFIxY200Z2IySnFPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjBhSEp2ZDJWeUtISXBJSHRjYmlBZ0lDQjBhSEp2ZHlCeU8xeHVmVnh1WEc1MllYSWdhVzVvWlhKcGRHVmtSR0YwWVV0bGVYTWdQU0FvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZG1GeUlHVjRZMngxWkdWa1VISnZkRzkwZVhCbGN5QTlJRnRjYmlBZ0lDQWdJQ0FnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMRnh1SUNBZ0lDQWdJQ0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMRnh1SUNBZ0lDQWdJQ0JHZFc1amRHbHZiaTV3Y205MGIzUjVjR1ZjYmlBZ0lDQmRPMXh1WEc0Z0lDQWdkbUZ5SUdselJYaGpiSFZrWldSUWNtOTBieUE5SUdaMWJtTjBhVzl1S0haaGJDa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdWNFkyeDFaR1ZrVUhKdmRHOTBlWEJsY3k1c1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1Y0WTJ4MVpHVmtVSEp2ZEc5MGVYQmxjMXRwWFNBOVBUMGdkbUZzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JwWmlBb1pYTTFMbWx6UlZNMUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCblpYUkxaWGx6SUQwZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVUbUZ0WlhNN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2Ymlodlltb3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ5WlhRZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIyYVhOcGRHVmtTMlY1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCM2FHbHNaU0FvYjJKcUlDRTlJRzUxYkd3Z0ppWWdJV2x6UlhoamJIVmtaV1JRY205MGJ5aHZZbW9wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR3RsZVhNN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2EyVjVjeUE5SUdkbGRFdGxlWE1vYjJKcUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYTJWNWN5NXNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYTJWNUlEMGdhMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWnBjMmwwWldSTFpYbHpXMnRsZVYwcElHTnZiblJwYm5WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyYVhOcGRHVmtTMlY1YzF0clpYbGRJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHUmxjMk1nUFNCUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbEVaWE5qY21sd2RHOXlLRzlpYWl3Z2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1JsYzJNZ0lUMGdiblZzYkNBbUppQmtaWE5qTG1kbGRDQTlQU0J1ZFd4c0lDWW1JR1JsYzJNdWMyVjBJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEM1d2RYTm9LR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJKcUlEMGdaWE0xTG1kbGRGQnliM1J2ZEhsd1pVOW1LRzlpYWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVjBPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCb1lYTlFjbTl3SUQwZ2UzMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2Ymlodlltb3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hwYzBWNFkyeDFaR1ZrVUhKdmRHOG9iMkpxS1NrZ2NtVjBkWEp1SUZ0ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlISmxkQ0E5SUZ0ZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkttcHphR2x1ZENCbWIzSnBianBtWVd4elpTQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXNTFiV1Z5WVhScGIyNDZJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnZZbW9wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VUhKdmNDNWpZV3hzS0c5aWFpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhRdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWlhoamJIVmtaV1JRY205MGIzUjVjR1Z6TG14bGJtZDBhRHNnS3l0cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVISnZjQzVqWVd4c0tHVjRZMngxWkdWa1VISnZkRzkwZVhCbGMxdHBYU3dnYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsSUdWdWRXMWxjbUYwYVc5dU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkQzV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYm4wcEtDazdYRzVjYm5aaGNpQjBhR2x6UVhOemFXZHViV1Z1ZEZCaGRIUmxjbTRnUFNBdmRHaHBjMXhjY3lwY1hDNWNYSE1xWEZ4VEsxeGNjeW85THp0Y2JtWjFibU4wYVc5dUlHbHpRMnhoYzNNb1ptNHBJSHRjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlHWnVJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJyWlhseklEMGdaWE0xTG01aGJXVnpLR1p1TG5CeWIzUnZkSGx3WlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQm9ZWE5OWlhSb2IyUnpJRDBnWlhNMUxtbHpSVk0xSUNZbUlHdGxlWE11YkdWdVozUm9JRDRnTVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCb1lYTk5aWFJvYjJSelQzUm9aWEpVYUdGdVEyOXVjM1J5ZFdOMGIzSWdQU0JyWlhsekxteGxibWQwYUNBK0lEQWdKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FoS0d0bGVYTXViR1Z1WjNSb0lEMDlQU0F4SUNZbUlHdGxlWE5iTUYwZ1BUMDlJRndpWTI5dWMzUnlkV04wYjNKY0lpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdhR0Z6VkdocGMwRnpjMmxuYm0xbGJuUkJibVJUZEdGMGFXTk5aWFJvYjJSeklEMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6UVhOemFXZHViV1Z1ZEZCaGRIUmxjbTR1ZEdWemRDaG1iaUFySUZ3aVhDSXBJQ1ltSUdWek5TNXVZVzFsY3lobWJpa3ViR1Z1WjNSb0lENGdNRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0doaGMwMWxkR2h2WkhNZ2ZId2dhR0Z6VFdWMGFHOWtjMDkwYUdWeVZHaGhia052Ym5OMGNuVmpkRzl5SUh4OFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpWR2hwYzBGemMybG5ibTFsYm5SQmJtUlRkR0YwYVdOTlpYUm9iMlJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z2RHOUdZWE4wVUhKdmNHVnlkR2xsY3lodlltb3BJSHRjYmlBZ0lDQXZLbXB6YUdsdWRDQXRWekF5Tnl3dFZ6QTFOU3d0VnpBek1Tb3ZYRzRnSUNBZ1puVnVZM1JwYjI0Z1ppZ3BJSHQ5WEc0Z0lDQWdaaTV3Y205MGIzUjVjR1VnUFNCdlltbzdYRzRnSUNBZ2RtRnlJR3dnUFNBNE8xeHVJQ0FnSUhkb2FXeGxJQ2hzTFMwcElHNWxkeUJtS0NrN1hHNGdJQ0FnY21WMGRYSnVJRzlpYWp0Y2JpQWdJQ0JsZG1Gc0tHOWlhaWs3WEc1OVhHNWNiblpoY2lCeWFXUmxiblFnUFNBdlhsdGhMWG9rWDExYllTMTZKRjh3TFRsZEtpUXZhVHRjYm1aMWJtTjBhVzl1SUdselNXUmxiblJwWm1sbGNpaHpkSElwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjbWxrWlc1MExuUmxjM1FvYzNSeUtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1ptbHNiR1ZrVW1GdVoyVW9ZMjkxYm5Rc0lIQnlaV1pwZUN3Z2MzVm1abWw0S1NCN1hHNGdJQ0FnZG1GeUlISmxkQ0E5SUc1bGR5QkJjbkpoZVNoamIzVnVkQ2s3WEc0Z0lDQWdabTl5S0haaGNpQnBJRDBnTURzZ2FTQThJR052ZFc1ME95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBXMmxkSUQwZ2NISmxabWw0SUNzZ2FTQXJJSE4xWm1acGVEdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJGbVpWUnZVM1J5YVc1bktHOWlhaWtnZTF4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdlltb2dLeUJjSWx3aU8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGd2lXMjV2SUhOMGNtbHVaeUJ5WlhCeVpYTmxiblJoZEdsdmJsMWNJanRjYmlBZ0lDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHMWhjbXRCYzA5eWFXZHBibUYwYVc1blJuSnZiVkpsYW1WamRHbHZiaWhsS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdibTkwUlc1MWJXVnlZV0pzWlZCeWIzQW9aU3dnWENKcGMwOXdaWEpoZEdsdmJtRnNYQ0lzSUhSeWRXVXBPMXh1SUNBZ0lIMWNiaUFnSUNCallYUmphQ2hwWjI1dmNtVXBJSHQ5WEc1OVhHNWNibVoxYm1OMGFXOXVJRzl5YVdkcGJtRjBaWE5HY205dFVtVnFaV04wYVc5dUtHVXBJSHRjYmlBZ0lDQnBaaUFvWlNBOVBTQnVkV3hzS1NCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2NtVjBkWEp1SUNnb1pTQnBibk4wWVc1alpXOW1JRVZ5Y205eVcxd2lYMTlDYkhWbFltbHlaRVZ5Y205eVZIbHdaWE5mWDF3aVhTNVBjR1Z5WVhScGIyNWhiRVZ5Y205eUtTQjhmRnh1SUNBZ0lDQWdJQ0JsVzF3aWFYTlBjR1Z5WVhScGIyNWhiRndpWFNBOVBUMGdkSEoxWlNrN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdOaGJrRjBkR0ZqYUZSeVlXTmxLRzlpYWlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ2WW1vZ2FXNXpkR0Z1WTJWdlppQkZjbkp2Y2lBbUppQmxjelV1Y0hKdmNHVnlkSGxKYzFkeWFYUmhZbXhsS0c5aWFpd2dYQ0p6ZEdGamExd2lLVHRjYm4xY2JseHVkbUZ5SUdWdWMzVnlaVVZ5Y205eVQySnFaV04wSUQwZ0tHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lHbG1JQ2doS0Z3aWMzUmhZMnRjSWlCcGJpQnVaWGNnUlhKeWIzSW9LU2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTJGdVFYUjBZV05vVkhKaFkyVW9kbUZzZFdVcEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbmtnZTNSb2NtOTNJRzVsZHlCRmNuSnZjaWh6WVdabFZHOVRkSEpwYm1jb2RtRnNkV1VwS1R0OVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhSamFDaGxjbklwSUh0eVpYUjFjbTRnWlhKeU8zMWNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0b2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoallXNUJkSFJoWTJoVWNtRmpaU2gyWVd4MVpTa3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnUlhKeWIzSW9jMkZtWlZSdlUzUnlhVzVuS0haaGJIVmxLU2s3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dWZTa29LVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGhjM05UZEhKcGJtY29iMkpxS1NCN1hHNGdJQ0FnY21WMGRYSnVJSHQ5TG5SdlUzUnlhVzVuTG1OaGJHd29iMkpxS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWTI5d2VVUmxjMk55YVhCMGIzSnpLR1p5YjIwc0lIUnZMQ0JtYVd4MFpYSXBJSHRjYmlBZ0lDQjJZWElnYTJWNWN5QTlJR1Z6TlM1dVlXMWxjeWhtY205dEtUdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHdGxlWE11YkdWdVozUm9PeUFySzJrcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUd0bGVTQTlJR3RsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJR2xtSUNobWFXeDBaWElvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsY3pVdVpHVm1hVzVsVUhKdmNHVnlkSGtvZEc4c0lHdGxlU3dnWlhNMUxtZGxkRVJsYzJOeWFYQjBiM0lvWm5KdmJTd2dhMlY1S1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hwWjI1dmNtVXBJSHQ5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OVhHNWNiblpoY2lCeVpYUWdQU0I3WEc0Z0lDQWdhWE5EYkdGemN6b2dhWE5EYkdGemN5eGNiaUFnSUNCcGMwbGtaVzUwYVdacFpYSTZJR2x6U1dSbGJuUnBabWxsY2l4Y2JpQWdJQ0JwYm1obGNtbDBaV1JFWVhSaFMyVjVjem9nYVc1b1pYSnBkR1ZrUkdGMFlVdGxlWE1zWEc0Z0lDQWdaMlYwUkdGMFlWQnliM0JsY25SNVQzSkVaV1poZFd4ME9pQm5aWFJFWVhSaFVISnZjR1Z5ZEhsUGNrUmxabUYxYkhRc1hHNGdJQ0FnZEdoeWIzZGxjam9nZEdoeWIzZGxjaXhjYmlBZ0lDQnBjMEZ5Y21GNU9pQmxjelV1YVhOQmNuSmhlU3hjYmlBZ0lDQm9ZWFpsUjJWMGRHVnljem9nYUdGMlpVZGxkSFJsY25Nc1hHNGdJQ0FnYm05MFJXNTFiV1Z5WVdKc1pWQnliM0E2SUc1dmRFVnVkVzFsY21GaWJHVlFjbTl3TEZ4dUlDQWdJR2x6VUhKcGJXbDBhWFpsT2lCcGMxQnlhVzFwZEdsMlpTeGNiaUFnSUNCcGMwOWlhbVZqZERvZ2FYTlBZbXBsWTNRc1hHNGdJQ0FnWTJGdVJYWmhiSFZoZEdVNklHTmhia1YyWVd4MVlYUmxMRnh1SUNBZ0lHVnljbTl5VDJKcU9pQmxjbkp2Y2s5aWFpeGNiaUFnSUNCMGNubERZWFJqYURvZ2RISjVRMkYwWTJnc1hHNGdJQ0FnYVc1b1pYSnBkSE02SUdsdWFHVnlhWFJ6TEZ4dUlDQWdJSGRwZEdoQmNIQmxibVJsWkRvZ2QybDBhRUZ3Y0dWdVpHVmtMRnh1SUNBZ0lHMWhlV0psVjNKaGNFRnpSWEp5YjNJNklHMWhlV0psVjNKaGNFRnpSWEp5YjNJc1hHNGdJQ0FnZEc5R1lYTjBVSEp2Y0dWeWRHbGxjem9nZEc5R1lYTjBVSEp2Y0dWeWRHbGxjeXhjYmlBZ0lDQm1hV3hzWldSU1lXNW5aVG9nWm1sc2JHVmtVbUZ1WjJVc1hHNGdJQ0FnZEc5VGRISnBibWM2SUhOaFptVlViMU4wY21sdVp5eGNiaUFnSUNCallXNUJkSFJoWTJoVWNtRmpaVG9nWTJGdVFYUjBZV05vVkhKaFkyVXNYRzRnSUNBZ1pXNXpkWEpsUlhKeWIzSlBZbXBsWTNRNklHVnVjM1Z5WlVWeWNtOXlUMkpxWldOMExGeHVJQ0FnSUc5eWFXZHBibUYwWlhOR2NtOXRVbVZxWldOMGFXOXVPaUJ2Y21sbmFXNWhkR1Z6Um5KdmJWSmxhbVZqZEdsdmJpeGNiaUFnSUNCdFlYSnJRWE5QY21sbmFXNWhkR2x1WjBaeWIyMVNaV3BsWTNScGIyNDZJRzFoY210QmMwOXlhV2RwYm1GMGFXNW5Sbkp2YlZKbGFtVmpkR2x2Yml4Y2JpQWdJQ0JqYkdGemMxTjBjbWx1WnpvZ1kyeGhjM05UZEhKcGJtY3NYRzRnSUNBZ1kyOXdlVVJsYzJOeWFYQjBiM0p6T2lCamIzQjVSR1Z6WTNKcGNIUnZjbk1zWEc0Z0lDQWdhR0Z6UkdWMlZHOXZiSE02SUhSNWNHVnZaaUJqYUhKdmJXVWdJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdKaVlnWTJoeWIyMWxJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVnZaaUJqYUhKdmJXVXViRzloWkZScGJXVnpJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXNYRzRnSUNBZ2FYTk9iMlJsT2lCMGVYQmxiMllnY0hKdlkyVnpjeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUFtSmx4dUlDQWdJQ0FnSUNCamJHRnpjMU4wY21sdVp5aHdjbTlqWlhOektTNTBiMHh2ZDJWeVEyRnpaU2dwSUQwOVBTQmNJbHR2WW1wbFkzUWdjSEp2WTJWemMxMWNJbHh1ZlR0Y2JuSmxkQzVwYzFKbFkyVnVkRTV2WkdVZ1BTQnlaWFF1YVhOT2IyUmxJQ1ltSUNobWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdkbVZ5YzJsdmJpQTlJSEJ5YjJObGMzTXVkbVZ5YzJsdmJuTXVibTlrWlM1emNHeHBkQ2hjSWk1Y0lpa3ViV0Z3S0U1MWJXSmxjaWs3WEc0Z0lDQWdjbVYwZFhKdUlDaDJaWEp6YVc5dVd6QmRJRDA5UFNBd0lDWW1JSFpsY25OcGIyNWJNVjBnUGlBeE1Da2dmSHdnS0habGNuTnBiMjViTUYwZ1BpQXdLVHRjYm4wcEtDazdYRzVjYm1sbUlDaHlaWFF1YVhOT2IyUmxLU0J5WlhRdWRHOUdZWE4wVUhKdmNHVnlkR2xsY3lod2NtOWpaWE56S1R0Y2JseHVkSEo1SUh0MGFISnZkeUJ1WlhjZ1JYSnliM0lvS1RzZ2ZTQmpZWFJqYUNBb1pTa2dlM0psZEM1c1lYTjBUR2x1WlVWeWNtOXlJRDBnWlR0OVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxkRHRjYmx4dWZTeDdYQ0l1TDJWek5TNXFjMXdpT2pFMGZWMTlMSHQ5TEZzMFhTa29OQ2xjYm4wcE95QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPMmxtSUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY2dJVDA5SUc1MWJHd3BJSHNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2QybHVaRzkzTGxBZ1BTQjNhVzVrYjNjdVVISnZiV2x6WlRzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhObGJHWWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSE5sYkdZZ0lUMDlJRzUxYkd3cElIc2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdVVDQTlJSE5sYkdZdVVISnZiV2x6WlRzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJbDE5IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50UXVldWU7XG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtpXSgpO1xuICAgICAgICB9XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbn1cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgcXVldWUucHVzaChmdW4pO1xuICAgIGlmICghZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xudmFyIGNodW5rQXJyYXkgPSByZXF1aXJlKCcuL2NodW5rQXJyYXknKTtcblxudmFyIGNodW5rID0gIGZ1bmN0aW9uIGNodW5rKGl0ZW1zLCBwcm9jZXNzLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICAgICAgY2h1bmtTaXplOiAxMCxcbiAgICAgICAgaW50ZXJ2YWw6IDEsXG4gICAgICAgIGNhbmNlbDogZmFsc2UsXG4gICAgICAgIHJlc3VsdExpbWl0OiBudWxsXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcblxuICAgIHZhciBpdGVtc1RvUHJvY2VzcyA9IGNodW5rQXJyYXkoaXRlbXMsIG9wdGlvbnMuY2h1bmtTaXplKTtcbiAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlLnBlbmRpbmcoKTtcbiAgICB2YXIgY2h1bmtJbmRleCA9IDA7XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuXG4gICAgdmFyIHByb2Nlc3NOZXh0Q2h1bmsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3MuY2FsbChjb250ZXh0LCBpdGVtc1RvUHJvY2Vzcy5zaGlmdCgpLCBjaHVua0luZGV4KyspKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5jb25jYXQocmVzdWx0cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNUb1Byb2Nlc3MubGVuZ3RoICYmICghb3B0aW9ucy5yZXN1bHRMaW1pdCB8fCBvdXRwdXQubGVuZ3RoIDwgb3B0aW9ucy5yZXN1bHRMaW1pdCkgJiYgIW9wdGlvbnMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocHJvY2Vzc05leHRDaHVuaywgb3B0aW9ucy5pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShvdXRwdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZXRUaW1lb3V0KHByb2Nlc3NOZXh0Q2h1bmssIG9wdGlvbnMuaW50ZXJ2YWwpO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNodW5rO1xuIiwidmFyIGNodW5rQXJyYXkgPSBmdW5jdGlvbiBjaHVua0FycmF5KGFyciwgY2h1bmtTaXplKSB7XG4gICAgdmFyIGRhdGFDaHVua3MgPSBbXTtcbiAgICB2YXIgZGF0YUNodW5rID0gW107XG5cbiAgICB2YXIgdGhyZXNob2xkID0gY2h1bmtTaXplIC0gMTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZGF0YUNodW5rLnB1c2goYXJyW2ldKTtcbiAgICAgICAgaWYgKGkgJSBjaHVua1NpemUgPT09IHRocmVzaG9sZCB8fCBpID09PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICBkYXRhQ2h1bmtzLnB1c2goZGF0YUNodW5rKTtcbiAgICAgICAgICAgIGRhdGFDaHVuayA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFDaHVua3M7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNodW5rQXJyYXk7XG4iLCJ2YXIgc3Rhc2ggPSByZXF1aXJlKCcuL3N0YXNoJyk7XG52YXIgY2h1bmsgPSByZXF1aXJlKCcuL2NodW5rJyk7XG52YXIgbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdGFzaDogc3Rhc2gsXG4gICAgY2h1bms6IGNodW5rLFxuICAgIGxvb3A6IGxvb3Bcbn07XG4iLCJ2YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5cbnZhciBsb29wID0gZnVuY3Rpb24oc3RhdGUsIGd1YXJkLCBvcGVyYXRpb24sIHBvc3RPcGVyYXRpb24pIHtcbiAgICByZXR1cm4gUHJvbWlzZS5tZXRob2QoZ3VhcmQuYmluZChzdGF0ZSkpKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oYWxsb3dlZCkge1xuICAgICAgICAgICAgaWYgKGFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5tZXRob2Qob3BlcmF0aW9uLmJpbmQoc3RhdGUpKSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHBvc3RPcGVyYXRpb24uYmluZChzdGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvb3Aoc3RhdGUsIGd1YXJkLCBvcGVyYXRpb24sIHBvc3RPcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbG9vcDtcbiIsInZhciBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcblxudmFyIHN0YXNoID0gZnVuY3Rpb24gKG1hcHMsIGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgIG1hcHNba2V5XSA9IG1hcDtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3Rhc2g7XG4iXX0=
