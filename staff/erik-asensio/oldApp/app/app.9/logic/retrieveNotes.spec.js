describe("retrieveNotes", () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it("id match with a user", () => {

        const ErikAsensio = {
            name: "Erik Asensio",
            mail: "erikasensioperez@gmail.com",
            password: "123123123",
            id: "user-1"
        }

        const PepitoGrillo = {
            name: "Pepito Grillo",
            mail: "pepito@grillo.com",
            password: "123123123",
            id: "user-2"
        }

        const PeterPan = {
            name: "Peter Pan",
            mail: "peter@pan.com",
            password: "123123123",
            id: "user-3"
        }

        const CaptainHook = {
            name: "Captain Hook",
            mail: "captain@hook.com",
            password: "123123123",
            id: "user-4"
        }

        users.push(ErikAsensio, PepitoGrillo, PeterPan, CaptainHook)

        notes.push({
            id: 'note-1',
            text: 'Hola, Mundo!',
            user: 'user-1'
        })
    
        notes.push({
            id: 'note-3',
            text: 'Ciao, Mondo!',
            user: 'user-1'
        })
        
        notes.push({
            id: 'note-5',
            text: 'one day i will catch you, peter...',
            user: 'user-4'
        })

        retrieveNotes(ErikAsensio.id, (error, notes) => {
            expect(notes.length).toBe(2)
            expect(error).toBeNull()
            expect(notes).toBeInstanceOf(Array)
        })
    })
})