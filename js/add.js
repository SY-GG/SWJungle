function add(n) {
  // n이 주어져 있을 때,
  // 더한 결과를 저장할 수 있는 변수를 만들고
  let sum = 0;
  // 이 변수에 1, 2, 3, ..., n까지 순서대로 더한다.
  for(i = 0; i <= n ; i++) {
    sum += i;
  }
  // 결과 변수를 돌려준다.
  return sum;
  }
  
  console.log(add(10))