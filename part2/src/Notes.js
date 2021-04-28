import { useEffect, useState } from "react";

import Note from './components/Note';
import noteService from './services/notes';
import './index.css';
import Notification from './components/Notificacion';

const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    return(
        <div style={ footerStyle }>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
        </div>
    )
}


const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const hookEffect = () => {
        
        // axios
        //     .get('http://localhost:3001/notes')
        //     .then(response => {
        //         console.log('promise fulfilled')
        //         setNotes(response.data)
        //     });


        noteService
            .getAll()
            .then(initialState => {
                setNotes( initialState )
            });
    };

    useEffect(hookEffect, []);

    const addNote = (e) => {
        e.preventDefault();
        const noteObj = {
            content: newNote,
            date: new Date().toISOString,
            important: Math.random() < 0.5,
            id: notes.length + 1
        }


       /*  axios.post('http://localhost:3001/notes', noteObj)
            .then(response => {
                setNotes(notes.concat(response.data));
                setNewNote('');
            }); */

            noteService
                .create(noteObj)
                .then( noteCreate => {
                    setNotes(notes.concat( noteCreate ));
                    setNewNote('');
                });

    };

    const handleNoteChanged = (e) => {
        setNewNote(e.target.value);
    }

    //const notesToShow = showAll ? notes : notes.filter( (n) => { return n.important === true} );

    const notesToShow = showAll ? notes : notes.filter(n => n.important);

    const toggleImportant = (id) => {
        const note = notes.find( (n) => n.id === id );
        const changedNote = { ...note, important: !note.important }
/* 
        axios.put(`http://localhost:3001/notes/${id}`, changedNote)
             .then( response => {
                setNotes( notes.map( note => note.id === id ? response.data : note ) )
             }); */
        
             noteService
                .update(id, changedNote)
                .then( noteUpdate => {
                    setNotes( notes.map( note => note.id === id ? noteUpdate : note ) )
                 });
        
    }

    return (
        <>
            <h1>Notes</h1>
            <Notification message={ errorMessage }/>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {
                    notesToShow.map(n => <Note key={n.id} note={n} toggleImportant={() => toggleImportant(n.id) }/>)
                }
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChanged} />
                <button type="submit">save</button>
            </form>

            <Footer />
        </>
    )

}

export default Notes;