'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapper = require('./mapper');

var _mapper2 = _interopRequireDefault(_mapper);

var fromCCAtoFSA = undefined,
    fromFSAtoCCA = undefined;

fromCCAtoFSA = function () {
    return function (next) {
        return function (action) {
            next(_mapper2['default'].fromCCAtoFSA(action));
        };
    };
};

fromFSAtoCCA = function () {
    return function (next) {
        return function (action) {
            next(_mapper2['default'].fromFSAtoCCA(action));
        };
    };
};

exports['default'] = {
    fromCCAtoFSA: fromCCAtoFSA,
    fromFSAtoCCA: fromFSAtoCCA
};
module.exports = exports['default'];
//# sourceMappingURL=middleware.js.map