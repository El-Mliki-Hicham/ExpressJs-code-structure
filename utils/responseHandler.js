// utils/responseHandler.js

const successResponse = (res, data, message = "Success") => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res, error, message = "Server Error", statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error?.message || error || "Unknown error occurred",
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
