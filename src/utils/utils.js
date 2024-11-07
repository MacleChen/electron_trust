// 打乱数组顺序，并返回新的数组
export function shuffleArray(originArray) {
    // 使用Fisher-Yates算法来打乱数组
    let array = originArray.slice();
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }