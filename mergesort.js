const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
  
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return merge(left, right);
  };
  
  const merge = (leftArr, rightArr) => {
    const mergedArr = [];
  
    while (leftArr.length > 0 && rightArr.length > 0) {
      const sortedArr = leftArr[0] < rightArr[0] ? leftArr : rightArr;
      const mergeItem = sortedArr.shift();
      mergedArr.push(mergeItem);
    }
  
    return mergedArr.concat(leftArr, rightArr);
  }