import { useState } from "react";

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
            setPersons(persons.concat(newNameObject));
            setNewName('');
            setNewNumber('');
        } else {
            alert(`${newName} is already added to phonebook`);
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