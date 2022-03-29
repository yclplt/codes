const printerError = (string) => {
  let count = 0;
  for (let i = 0; i < string?.length; i++) {
    if (string[i] > "m") {
      count++;
    }
  }
  return `${count}/${string?.length}`;
};

module.exports = printerError;
