const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (expression) => {
  try {
    const [IXX, VGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    const joinArray = [...IXX, ...VGC]
    return joinArray?.filter(value => value.hasil === expression)?.length || 0
  } catch (error) {
    console.log("there was an error: " + error);
  }
}

module.exports = {
  promiseOutput,
};
