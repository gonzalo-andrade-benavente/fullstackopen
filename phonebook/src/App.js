import { useState } from "react";

function App() {

  const initalPersons = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]

  const [persons, setPersons] = useState(initalPersons);

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

  const handleFilter = (e) => {
    const inputFilter = e.target.value;
    const personsFilter = persons.find( p => p.name.includes(inputFilter) );
    console.log(personsFilter);
    //setPersons(personsFilter);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilter} />
      </div>
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
      <h2>Numbers</h2>

      {
        persons.map((p) => <p key={p.name}> {p.name} {p.number} </p>)
      }




    </div>
  );
}

export default App;
