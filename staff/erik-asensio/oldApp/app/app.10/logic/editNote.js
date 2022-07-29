function editNote(noteId, userId, callback) {
    // TODO validate inputs

    const user = users.find(user => {
        return user.id === userId
    })

    if (!user) {
        callback(new Error(`user with id ${userId} not found`))

        return
    }

    const noteIndex = notes.findIndex(note => {
        return note.id === noteId
    })

    const note = notes[noteIndex]

    if (!note) {
        callback(new Error(`note with id ${noteId} not found`))

        return
    }

    if (note.user !== userId) {
        callback(new Error(`note with id ${noteId} does not belong to user with id ${userId}`))

        return
    }
    
    const editedNote = {
        id: note,
        text: note.text,
        user: userId
    }

    notes.splice(noteIndex, 1, editedNote)
    callback(null, editedNote)

    return editedNote
}