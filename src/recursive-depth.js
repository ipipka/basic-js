/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.depthCounter = 1;
  }

  calculateDepth(arr, newTest = 1) {
    if(newTest) {
      this.depth = 1;
      this.depthCounter = 1;
    }

    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        console.log('calculateDepth', arr)
        this.depthCounter += 1;
        this.calculateDepth(arr[i], 0)
      }
    }

    this.depth = Math.max(this.depth, this.depthCounter);
    this.depthCounter = 1;
    return this.depth;
  }
}

module.exports = {
  DepthCalculator
};
