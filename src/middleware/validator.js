// middlewares/validate.js
import { validationResult } from 'express-validator';
import { ApiError } from '../utils/apiError.js';

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0]; // return first error for user simplicity
    throw new ApiError(400, firstError.msg);
  }
  next();
}

export { validate };