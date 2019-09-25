module.exports = function multiply(first, second) {
  let composition = 0;
  composition = BigInt(first) * BigInt(second);
  return(composition.toString());
}