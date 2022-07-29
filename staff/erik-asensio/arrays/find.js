// array = [1, 2, 10, 18, 23]
// function masDiez(element) {

//     return element > 10
// }

function find(array, callback){

    // let result = 0
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])) {
            return array[i]
            // result = array[i]
            // break;
        }
    }
    return undefined
}
