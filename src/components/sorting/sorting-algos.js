export const BubbleSort = (arrayToSort) => {
    const stringArraytoSort = ["Virat", "Ankit", "Rafiq", "Preet",
     "Ronak", "Aniket", "Hemant", "Saumik", "Anthony"]
    const bubbleSortFn = (arr) => {
        let swap;
        do {
            swap = false;
            for(let i = 0; i< arr.length -1 ; i++) {
                if (arr[i] > arr[i+1]) {
                        const temp = arr[i];
                        arr[i] = arr[i+1];
                        arr[i+1] = temp;
                        swap = true;
                }
            }
        }while(swap)
    }

    bubbleSortFn(arrayToSort);
    return <h6>Bubble Sorted</h6>
}

// Time Complexity - O(n^2)
export const InsertionSort = (arrayToSort) => {
    let key; 
    let j;

    for (let i = 1; i < arrayToSort.length; i++) {
        j = i - 1;
        key = arrayToSort[i];

        while (j >=0 && arrayToSort[j] > key) {
            arrayToSort[j+1] = arrayToSort[j];
            j = j - 1;
        }
        arrayToSort[j+1] = key;
    }
}

// Time Complexity - O(n^2)
export const SelectionSort = (arrayToSort) => {
        let min_indx;    
        for (let i = 0; i < arrayToSort.length ; i++) {
            min_indx = i;
            for (let j = 1; j < arrayToSort.length; j++) {
                if (arrayToSort[j] < arrayToSort[i]) {
                    min_indx = j
                }
            }
            swapSelectionSort(arrayToSort, min_indx, i);
        }
}

function swapSelectionSort(arr, xp, yp) {
    const temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}


/// Time Complexity - O(logn)

export const MergeSort = (arrayToSort) => {
    mergeS(arrayToSort, 0, arrayToSort.length -1)
    console.log(arrayToSort);
}

const mergeS = (arr, l, r) => {
    if(l>=r){
        return;//returns recursively
    }
    const mid = Math.floor((l+r)/2);
    mergeS(arr,l,mid);
    mergeS(arr,mid+1,r);
    merge(arr,l,r,mid);
}

const merge = (arr, l, r, mid) => {
    // create temp arrays
    const L = [];
    const R = [];

    const n1 = mid - l + 1;
    const n2 = r - mid;

    for(let i = 0; i < n1; i++) {
        L[i] = arr[l+i];
    }

    for(let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 +j];
    }

    // merge temp arrays
    var i = 0;
    var j = 0;
    let k = l; 
    
    while(i<n1 && j<n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while(i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while(i < n1) {
        arr[k] = R[j];
        j++;
        k++;
    }
}