import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import data from "./people.json";
import PersonCard from './person-card';

const Birthday = () => {
    const [people, setPeople] = useState(data);

    const deletePerson = (id) =>{
      const arr = people.filter((item)=> item.id !== id);
      /* gonderilen id den farkli olanlarin hepsini arr dizisine atadik */
      setPeople(arr);
    }


  return (
    <Container>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {people.length} kişi bulundu</p>

        {people.map( (item)=> 
        <PersonCard {...item} key={item.id} deletePerson={deletePerson}/>)}
        {/* nesnenin kendisine bagli id yi index olarak vermemiz daha verimli. {item index de her seferinde re-render yapiyor} */}
        <Button variant="danger" onClick={()=> setPeople([])}>Remove All</Button>
        {/* [] ile setpeople i sifir yapabildim. */}
        <Button variant="success" onClick={()=> setPeople(data)}>ReLoad Data</Button>
    </Container>
  )
}

export default Birthday