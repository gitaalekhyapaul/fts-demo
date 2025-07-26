export const sort = (arr: number[]) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

export function search(arr: number[], query: number) {
  if (arr.length === 0) {
    return false;
  }
  const midIndex = Math.floor(arr.length / 2);
  const mid = arr[midIndex];
  if (mid < query) {
    return search(arr.slice(midIndex + 1), query);
  } else if (mid > query) {
    return search(arr.slice(0, midIndex), query);
  } else {
    return true;
  }
}
