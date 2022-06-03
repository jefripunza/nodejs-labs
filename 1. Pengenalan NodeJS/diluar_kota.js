module.exports = (req, res, next) => {
  const { musibah } = req.query;
  if (parseInt(musibah) === 0) {
    return next();
  }
  return res.status(500).send("lagi dapet musibah nih...");
};
