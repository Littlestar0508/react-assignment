// tags의 배열을 순회하고 true값이 하나라도 반환된다면 true를 반환하도록 하는 함수
export function checkArrContainTrue(arr: string[], listFilter: string) {
  let check = false;

  arr.forEach((index) => {
    if (index.includes(listFilter)) check = true;
  });

  return check;
}

// 받아온 모든 문자열의 공백을 제거
export function replaceBlankToNull(str: string) {
  return str.trim().replace(/\s/g, '');
}
