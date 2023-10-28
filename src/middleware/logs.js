const logRequest = (req, res, next) => {
  console.log("LOG: request ke path ", req.path);
  next();
};

module.exports = logRequest;
