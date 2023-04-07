function sliceStringRange(e:any) {
  if (e !== '10' && e.length > 1) return e.slice(1);
  return e;
}
export default sliceStringRange;
