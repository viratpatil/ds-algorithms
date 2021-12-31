export const  stringPrefix = (arr) => {

    let prefix = '';
    let maxStrLength = Math.min(arr.map(str => str.length));
    for (let i = 0; i < maxStrLength ; i++) {
        const char = arr[0][i];
        if (arr.every(str => str[i] === char)) {
            prefix +=char
        } else {
            break;
        }

    }
    return prefix;
}