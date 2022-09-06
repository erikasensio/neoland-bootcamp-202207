import Loggito from "../utils/Loggito"

function List({view, onDeleteNote, notes, onUpdateNote}) {
    const logger = new Loggito("List")


    return <section className="noteBlog">
        <ul className={`${view === "menu" && "list-active"||view === "settings" && "list-activeSettings"||"list"}`}>
            {notes && notes.map(note => <li className="list__item" key={note.id}>
                <button className="list__item-delete-button" onClick={() => onDeleteNote(note.id)}>x</button>

                <p contentEditable="true" suppressContentEditableWarning="true" className="list__item-text" onKeyUp={event => {
                    if (window.updateNoteTimeoutId)
                        clearTimeout(window.updateNoteTimeoutId)

                    window.updateNoteTimeoutId = setTimeout(() => {
                        const text = event.target.innerText

                        onUpdateNote(note.id, text)
                    }, 500)
                }}>{note.text}</p>
            </li>)}
    </ul>
    </section >
}

export default List