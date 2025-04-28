const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
      return res.status(401).json({
          status: 'error',
          message: 'Authorization header missing'
      });
  }
  next();
};

module.exports = {authMiddleware}