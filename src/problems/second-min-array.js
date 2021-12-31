// Find the smallest and second smallest elements in an array

export const findFirstSecondMin = (arr) => {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second && arr[i] !== first) {
            second = arr[i]
        }
    }

    return [first, second];
}