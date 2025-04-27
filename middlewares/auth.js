const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
      return res.status(401).json({
          status: 'error',
          message: 'Authorization header missing'
      });
  }
  
  if (req.headers.authorization !== "secret") {
      return res.status(403).json({
          status: 'error',
          message: 'Invalid authorization token'
      });
  }
  
  next();
};

module.exports = {authMiddleware}