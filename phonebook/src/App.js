import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {

  const initalPersons = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]

  const [persons, setPersons] = useState(initalPersons);

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter persons={persons} setPersons={setPersons} />

      <h3>Add a <b>new</b></h3>

      <PersonForm persons={persons} setPersons={setPersons} />
      
      <h2>Numbers</h2>

      <Persons persons={persons} />

    </div>
  );
}

export default App;
