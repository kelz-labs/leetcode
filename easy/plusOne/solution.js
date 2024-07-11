var plusOne = function (digits) {
  return (Number(digits.join("")) + 1)
    .toString()
    .split("")
    .map((item) => Number(item));
};
