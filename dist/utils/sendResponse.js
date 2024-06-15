"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    let message = '';
    let statusCode = 0;
    let success;
    // if the data is not found or exist ?
    if (Array.isArray(data === null || data === void 0 ? void 0 : data.data) && !(data === null || data === void 0 ? void 0 : data.data.length)) {
        message = 'No data found',
            statusCode = 404;
        success = false;
    }
    else if (typeof data.data === 'object' && !Object.keys(data === null || data === void 0 ? void 0 : data.data).length) {
        message = 'No data found',
            statusCode = 404;
        success = false;
    }
    else if (!(data === null || data === void 0 ? void 0 : data.data)) {
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
