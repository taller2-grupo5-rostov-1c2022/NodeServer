const api_keys_middleware = (req, res, next) => {
  if (req.headers.api_key !== process.env.API_KEY) return res.sendStatus(401);
  next();
};

export default api_keys_middleware;
