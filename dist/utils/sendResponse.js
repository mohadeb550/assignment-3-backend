"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    var _a;
    let message = '';
    let statusCode = 0;
    let success;
    // if the data is not found or exist ?
    if (!data.data || !((_a = data.data) === null || _a === void 0 ? void 0 : _a.length)) {
        message = 'No data found',
            statusCode = 404;
        success = false;
    }
    else {
        message = data === null || data === void 0 ? void 0 : data.message;
        statusCode = data === null || data === void 0 ? void 0 : data.statusCode;
        success = data === null || data === void 0 ? void 0 : data.success;
    }
    res.status(statusCode).json({
        success,
        statusCode,
        message,
        data: data.data,
    });
};
exports.default = sendResponse;
