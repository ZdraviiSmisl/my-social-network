// created array here based on two values: start and end

export const range = (start, end) => {
  if (end > 0) {
    return Array(end - start).fill(0).map((_, i) => i + start);
  }
  return [];
}
