exports.register = async (req, res) => {
  const { name, phone, password } = req.body;
  const { code, message } = await require("../services/register")(
    name,
    phone,
    password
  );
  console.log({ code, message });
  return res.status(code).send(message);
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;
  const { code, message } = await require("../services/login")(phone, password);
  return res.status(code).send(message);
};
