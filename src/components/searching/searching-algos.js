export const LinearSearch = (arrayToSearch, value) => {
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i] === value) {
            return i;
        }
    }

    return -1;
}

export const BinarySearchAlgo = (arrayToSearch, value) => {
    return binarySearch(arrayToSearch.sort((a,b)=> a-b), value, 0, arrayToSearch.length);
}

const binarySearch = (arr, val, start, end) => {
    console.log(arr);
    if (end >= start) {
        let mid = Math.floor((end + start)/2);

        if (arr[mid] === val) {
            return mid;
        }

        if (arr[mid] > val) {
            return binarySearch(arr,val,start, mid - 1);
        } 
        
        return binarySearch(arr,val,mid + 1, end);

    }

    return -1;
}

