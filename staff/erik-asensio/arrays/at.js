function at(array, ubi) {
    return array[ubi]
}

console.log(at(['cat', 'dog', 'elephant'], 2))
// expected output 'elephant'

console.log(at(['Adiós', 1, 'Mundo'], 0))
// expected output 'Adiós'