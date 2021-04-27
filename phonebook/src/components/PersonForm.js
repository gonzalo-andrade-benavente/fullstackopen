import { useState } from "react";
import phonebookService from '../services/phonebooks';

const PersonForm = ({ persons, setPersons } ) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const changeName = (e) => {
        setNewName(e.target.value);
    };

    const changeNumber = (e) => {
        setNewNumber(e.target.value);
    }

    const handleNote = (e) => {
        e.preventDefault();

        //if ( newName === "" ) return 1;

        const newNameObject = {
            name: newName,
            number: newNumber
        };

        const exists = persons.filter(p => p.name === newName);

        if (exists.length === 0) {

            phonebookService
                .create(newNameObject)
                .then( newPerson => {
                    setPersons(persons.concat(newPerson));
                    setNewName('');
                    setNewNumber('');
                });

        } else {
            // alert(`${newName} is already added to phonebook`);
            const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
        
            if ( result ) {
                const person = persons.find(p => p.name === newName);
                const personChange = { ...person, number: newNumber };
                
                phonebookService
                    .update(person.id, personChange)
                    .then( updatePerson => {
                        setPersons( persons.map( p => p.id === person.id ? updatePerson : p) );
                    });
            } 
        }

    }
    return (

        <div>
            <form>
                <div>
                    name: <input value={newName} onChange={changeName} />
                </div>

                <div>
                    number: <input value={newNumber} onChange={changeNumber} />
                </div>

                <div>
                    <button type="submit" onClick={handleNote} >add</button>
                </div>
            </form>
        </div>


    )


}

export default PersonForm;