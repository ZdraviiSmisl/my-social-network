// created array here based on two values: start and end

export const range = (start = 1, end = 2) => {
  if (end > 0) {
    return Array(end - start).fill(0).map((_, i) => i + start);
  }
  return [];
}
