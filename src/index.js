const format = (value) => {
  if (!value && value !== 0 || isNaN(Number(value))) {
    throw new Error('the value is invalid and it should be a number');
  }
  const [int, point] = value.toString().split('.');
  return int.replace(/(\d)(?=(\d{3})+(?!\d))/g, (d) => d + ',') + `.${point}`;
}
export default format;
