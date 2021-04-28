import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import './index.css';
import Notification from "./components/Notificacion";

import phonebookService from './services/phonebooks';

function App() {

  const [persons, setPersons] = useState([]);
  const [success, setSuccess] = useState(null);

  useEffect(() => {

    phonebookService
      .getAll()
      .then( initialState => { setPersons( initialState ) });

  }, []);

  

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notification message={success}/>

      <Filter persons={persons} setPersons={setPersons} />

      <h3>Add a <b>new</b></h3>

      <PersonForm persons={persons} setPersons={setPersons} setSuccess={setSuccess}/>
      
      <h2>Numbers</h2>

      <Persons persons={persons} setPersons={setPersons} />

    </div>
  );
}

export default App;
