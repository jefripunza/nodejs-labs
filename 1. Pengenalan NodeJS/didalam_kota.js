module.exports = (req, res, next) => {
  const { polisi } = req.query;
  if (parseInt(polisi) === 0) {
    return next();
  }
  return res.status(400).send("kena tilang bosque...");
};
