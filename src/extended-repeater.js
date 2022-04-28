/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options?.repeatTimes || 1;
  const separator = options?.separator || '+';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options?.additionRepeatTimes || 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';

  let resAddition = '';
  if(addition) {
    resAddition = new Array(additionRepeatTimes).fill(addition);
    resAddition = resAddition.join(additionSeparator);
  }

  let res = new Array(repeatTimes).fill(`${str}${resAddition}`)
  return res.join(separator);
}

module.exports = {
  repeater
};
