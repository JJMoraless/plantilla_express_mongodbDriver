export const wrapError = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((err) => next(err));
  };
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorResponse = {
    ok: false,
    message: err.message,
  };

  if (statusCode === 500) {
    errorResponse.location = err.stack.split("\n")[1].trim();
  }

  res.status(statusCode).json(errorResponse);
};
