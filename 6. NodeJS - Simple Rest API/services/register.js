const userRepository = require("../repository/userRepository");

module.exports = async (name, phone, password) => {
  try {
    // validasi apakah user sudah terdaftar
    const isUserRegistered = await userRepository.isUserRegistered(phone);
    if (isUserRegistered) {
      return {
        code: 400,
        message: "user sudah terdaftar",
      };
    }

    // jika tidak terdaftar, maka daftarkan
    await userRepository.insertNewUser({ name, phone, password });

    // render
    return {
      code: 200,
      message: "anda berhasil mendaftar",
    };
  } catch (error) {
    return {
      code: 500,
      message: "terjadi kesalahan pada server",
    };
  }
};
