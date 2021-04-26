import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import phonebookService from './services/phonebooks';

function App() {

  const [persons, setPersons] = useState([]);

  useEffect(() => {

    phonebookService
      .getAll()
      .then( initialState => { setPersons( initialState ) });

  }, []);

  

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter persons={persons} setPersons={setPersons} />

      <h3>Add a <b>new</b></h3>

      <PersonForm persons={persons} setPersons={setPersons} />
      
      <h2>Numbers</h2>

      <Persons persons={persons} setPersons={setPersons} />

    </div>
  );
}

export default App;
