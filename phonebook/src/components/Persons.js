import phonebookService from '../services/phonebooks';

const Persons = ( {persons, setPersons } ) => {

    const handleDelete = (name, id) => {
        const result = window.confirm(` Delete ${name}?`);

        if ( result ) {
            phonebookService
                .deletePerson(id)
                .then( personeDelete => { 
                    const newPersons = persons.filter( p => p.id !== id );
                    setPersons(newPersons);
                });   
        } 
    }

    return (
        <div>
            {
                persons.map((p) => <div key={p.id}> {p.name} {p.number} <button onClick={ () => handleDelete(p.name, p.id) }> delete </button> </div>)
            }

        </div>

    )


}

export default Persons;