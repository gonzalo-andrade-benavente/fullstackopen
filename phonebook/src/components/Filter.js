
const Filter = ( { persons, setPersons } ) => {
 
    const handleFilter = (e) => {
        const inputFilter = e.target.value;
        const personsFilter = persons.filter( p => p.name.includes(inputFilter) );
        setPersons(personsFilter);
    }

    return(
     <div>
        filter shown with <input onChange={handleFilter} />
      </div>
    )

}

export default Filter;