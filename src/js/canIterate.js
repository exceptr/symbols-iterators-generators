export default function canIterate(value) {
  if (!value) {
    return false;
  }
  return Boolean(value[Symbol.iterator]);
}
