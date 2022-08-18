function NumberOfPages(arr) {
  let div = Math.round(arr.length / 9);
  if (arr.length > 0 && arr.length < 9) {
    return 1;
  }
  console.log(arr.length);
  return div;
}

export default NumberOfPages;

export function cutData(start, end, arr) {
  console.log("cut data func : ", start, end, arr);
  return arr.slice(start, end);
}
