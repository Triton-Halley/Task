function NumberOfPages(arr) {
  const div = Math.round(arr.length / 9);
  return div;
}

export default NumberOfPages;

export function cutData(start, end, arr) {
  console.log("cut data func : ", start, end, arr);
  return arr.slice(start, end);
}
