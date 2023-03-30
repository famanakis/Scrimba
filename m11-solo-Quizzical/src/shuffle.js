//Fisher-Yates shuffle
export function shuffle(arr) {
    var i = arr.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random()*(i+1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr
    }
