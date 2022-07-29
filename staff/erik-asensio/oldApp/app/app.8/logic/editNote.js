function editNote(userId, noteId, text, callback){
    const user = users.find(user => {
       return user.id === id
    })

    if(!user){
        alert(new Error("User with" + userId + " not found"))
        return
    }

    const note = notes.find(note => {
        return noteId = note.id
    })

    if(!note){
        alert(new Error("Note with" + noteId + " not found"))
        return
    }
    if(note.user !== userId){
        alert(new Error("note with id" + noteId + "does not belong to user with id" + userId))
    }
    note.text = text

    callback(null)
}