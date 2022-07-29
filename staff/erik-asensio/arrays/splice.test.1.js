describe("Splice", () => {

    test("se añade un elemento", () => {
        let array=[1, 2, 3, 4]
        const start = 2
        const element = 9
        const replacedQuant = 0

        removedElements = splice(array, start, element, replacedQuant)
        
        check(array[0], 1)
        check(array[1], 2)
        check(array[2], element)
        check(array[3], 3)
        check(array[4], 4)
        check(array.length, 5)
        check(removedElements.length, 0)
    })

    test("se elimina un elemento", () => {
        let array=[0, 1, 2, 3, 4, 5]
        const start = 2
        const element = 9
        const replacedQuant = 2
        
        removedElements = splice(array, start, element, replacedQuant)
       
        check(removedElements[0], 2)
        check(removedElements[1], 3)
        check(array[0], 0)
        check(array[1], 1)
        check(array[2], element)
        check(array[3], 4)
        check(array[4], 5)
        check(array.length, 5)
    })
})