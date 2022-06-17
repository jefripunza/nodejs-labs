const userRepository = require("../repository/userRepository");

module.exports = async (phone, password) => {
  try {
    // cek apakah user dengan nomor dan password tervalidasi?
    const isLogin = await userRepository.isLogin(phone, password);
    if (isLogin) {
      return {
        code: 200,
        message: "anda telah login",
        token: "abcde",
      };
    }
    return {
      code: 400,
      message: "nomor atau password salah!",
    };
  } catch (error) {
    return {
      code: 500,
      message: "terjadi kesalahan pada server",
    };
  }
};
