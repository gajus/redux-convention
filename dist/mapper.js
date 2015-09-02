"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fromCCAtoFSA = undefined,
    fromFSAtoCCA = undefined;

fromCCAtoFSA = function (CCAction) {
    var FSAction = undefined;

    FSAction = {};

    if (CCAction.name) {
        FSAction.type = CCAction.name;
    }

    if (CCAction.data) {
        FSAction.payload = CCAction.data;
    }

    if (CCAction.metadata) {
        FSAction.meta = CCAction.metadata;
    }

    if (CCAction.error) {
        FSAction.payload = CCAction.error;
        FSAction.error = true;
    }

    return FSAction;
};

fromFSAtoCCA = function (FSAction) {
    var CCAction = undefined;

    CCAction = {};

    if (FSAction.type) {
        CCAction.name = FSAction.type;
    }

    if (FSAction.payload) {
        CCAction.data = FSAction.payload;
    }

    if (FSAction.meta) {
        CCAction.metadata = FSAction.meta;
    }

    if (FSAction.error) {
        CCAction.error = FSAction.payload;
    }

    return CCAction;
};

exports["default"] = {
    fromCCAtoFSA: fromCCAtoFSA,
    fromFSAtoCCA: fromFSAtoCCA
};
module.exports = exports["default"];
//# sourceMappingURL=mapper.js.map