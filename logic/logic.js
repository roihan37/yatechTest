function solution(a, m, k) {
    let count = 0;
    for (let i = 0; i <= a.length - m; i++) {
      let flag = false;
      for (let j = i; j < i + m; j++) {
        for (let l = j + 1; l < i + m; l++) {
          if (a[j] + a[l] === k) {
            flag = true;
            break;
          }
        }
        if (flag) break;
      }
      if (flag) count++;
    }
    return count;
  }

  let a = [2, 4,7,5, 3, 5, 8, 5, 1, 7]
  let m = 4
  let k = 10

  console.log(solution(a, m, k))