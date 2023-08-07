const rateLimiter = require('express-rate-limit');

module.exports = rateLimiter({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Your limit exceeded',
});
