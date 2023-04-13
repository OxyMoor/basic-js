const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options = {separator: '+', additionSeparator: '|'}) {
  let rt = 'repeatTimes' in options && typeof options.repeatTimes === 'number' ? options.repeatTimes : 1;
  let s = 'separator' in options ? String(options.separator) : '+';
  let ad = 'addition' in options ? String(options.addition) : '';
  let adrt = 'additionRepeatTimes' in options && typeof options.additionRepeatTimes === 'number'? options.additionRepeatTimes : 1;
  let ads = 'additionSeparator' in options ? String(options.additionSeparator) : '|';

  let addString = (ad + ads).repeat(adrt);
  let string = (str + addString.slice(0, addString.lastIndexOf(ads)) + s).repeat(rt)

  return string.slice(0, string.lastIndexOf(s));
}

module.exports = {
  repeater
};
