module.exports = function toReadable (number) {
  const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const digitsUpperTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero'
  }
  if (number < 10) {
    return digits[number - 1];
  } else if (number < 20) {
    return digitsUpperTen[number % 10]
  } else if (number < 100) {
      if (number % 10 === 0) {
    return b[number / 10 - 2]
      } else if (number % 10 != 0) {
    return b[Math.floor(number / 10) - 2] + ' ' + digits[number % 10 - 1]
      }
  } else {
      if (number % 100 === 0) {
          return digits[number / 100 - 1] + ' hundred'
      } else if (number % 100 != 0) {
        if (number % 100 < 10) {
          return digits[Math.floor(number / 100) - 1] + ' hundred ' + digits[number % 10 - 1]
        } else if (number % 100 < 20) {
          return digits[Math.floor(number / 100) - 1] + ' hundred ' + digitsUpperTen[number % 10]
        } else {
          if (number % 10 === 0) {
            return digits[Math.floor(number / 100) - 1] + ' hundred ' + b[Math.floor(number % 100 / 10) - 2]
          } else {
            return digits[Math.floor(number / 100) - 1] + ' hundred ' + b[Math.floor(number % 100 / 10) - 2] + ' ' + digits[number % 10 - 1]
          }
        }
      }
  } 
  
}

