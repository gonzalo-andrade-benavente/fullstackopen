import { useState } from "react";
import Note from './components/Note';

const Notes = (props) => {

    const [ notes, setNotes] = useState(props.notes);
    const [ newNote, setNewNote] = useState('');
    const [ showAll, setShowAll] = useState(true);

    const addNote = (e) => {
        e.preventDefault();
        const noteObj = {
            content: newNote,
            date: new Date().toISOString,
            important: Math.random() < 0.5,
            id: notes.length + 1
        }
        setNotes(notes.concat( noteObj ));
        setNewNote('');
    }

    const handleNoteChanged = (e) => {
        setNewNote(e.target.value);
    }

    //const notesToShow = showAll ? notes : notes.filter( (n) => { return n.important === true} );

    const notesToShow = showAll ? notes : notes.filter( n => n.important );
    return (
        <>
            <h1>Notes</h1>
            <button onClick={ () => setShowAll( !showAll ) }>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {
                    notesToShow.map(n => <Note key={n.id} note={n.content} />)
                }
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChanged}/>
                <button type="submit">save</button>
            </form>

        </>
    )

}

export default Notes;