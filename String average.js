function averageString(str) {
    const numMap = {
      'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
      'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    };
  
    const words = str.split(' ');
    let sum = 0;
  
    for (let word of words) {
      if (numMap.hasOwnProperty(word)) {
        sum += numMap[word];
      } else {
        return 'n/a'; // If any word is not a valid number, return 'n/a'.
      }
    }
  
    const average = Math.floor(sum / words.length);
    
    const averageWords = Object.keys(numMap).find(key => numMap[key] === average);
    
    return averageWords;
  }  