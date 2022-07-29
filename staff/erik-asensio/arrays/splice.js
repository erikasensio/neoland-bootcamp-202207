function splice(array, start, replacedQuant, element) {
    const removedElements = []
    const tempArr = []
    if (element) {
        for (let i = array.length - 1; i >= start; i--) {
            array[i + 1] = array[i]
        }

        array[start] = element
    }


    if (replacedQuant > 0 && !element) {
        for (let j = start + replacedQuant; j < array.length; j++) {
            tempArr[tempArr.length] = array[j]
        }
        array.length = array.length - tempArr.length

        for (let k = start + 1; k < array.length; k++) {
            removedElements[removedElements.length] = array[k]
        }
        array.length = array.length - removedElements.length
        for (let l = 0; l < tempArr.length; l++) {
            array[array.length] = tempArr[l]
        }
        
    } else if (replacedQuant > 0 && element) {
        for (let j = start + replacedQuant + 1; j < array.length; j++) {
            tempArr[tempArr.length] = array[j]
        }
        array.length = array.length - tempArr.length

        for (let k = start + 1; k < array.length; k++) {
            removedElements[removedElements.length] = array[k]
        }
        array.length = array.length - removedElements.length
        for (let l = 0; l < tempArr.length; l++) {
            array[array.length] = tempArr[l]
        }

        return removedElements
    }
}