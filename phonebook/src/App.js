import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
        .then( response => {
          setPersons(response.data);
        })
  }, []);

  

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
