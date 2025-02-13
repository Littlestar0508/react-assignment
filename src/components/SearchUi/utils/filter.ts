export function checkArrContainTrue(arr: string[], listFilter: string) {
  let check = false;

  arr.forEach((index) => {
    if (index.includes(listFilter)) check = true;
  });

  return check;
}

export function replaceBlankToNull(str: string) {
  return str.trim().replace(/\s/g, '');
}
