const compose = (...funcs) => {
  return function (comp) {
    return funcs.reduceRight(
      (wrapped, f) => {
        return f(wrapped)
      }, comp);
  };
};
export default compose;
