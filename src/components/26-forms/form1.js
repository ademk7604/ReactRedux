import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form1 = () => {
    const [name, setName] = useState(""); /* buraya defoul olarak galip girsem value={name}/> ile kapatirim  */
/* form grup taptiginfda satir satir yapiyor */


  return (
    <Container className='mt-5'>
            <Form>
                
                <Form.Control type='text' placeholder='Enter your name' 
                onChange={(event)=>setName(event.target.value)}></Form.Control>
                <h1>Merhaba {name}</h1>
            {/* her degisiklik yaptigimda onchanc degiisyor oda gidip state degisiyor state degisince return render ediliyor.
            kullanicini girdigi deger name den returda isleniyor  */}
            </Form>
    </Container>
  )
}

export default Form1