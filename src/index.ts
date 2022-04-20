export const range = (end: number, start = 0, step = 1) => {
  function* generateRange() {
    let gap = start - step;
    while (gap < end - step) yield (gap += step);
  }
  return {
    [Symbol.iterator]: generateRange,
  };
};
