import { ApiError } from '../utils/ApiError.js';

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors || [],
      data: err.data || null,
    });
  }

  // Default error response for unhandled errors
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

export default errorHandlerMiddleware;
