module.exports = {
  base64: (value, type) => {
    return Buffer.from(value, type).toString('base64');
  },
};
