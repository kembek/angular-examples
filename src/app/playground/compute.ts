export function compute(x: number): number {
  if (x < 0) {
    return 0;
  }

  return ++x;
}
