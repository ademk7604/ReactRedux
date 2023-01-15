import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'

const UseRef = () => {

   /*  const val = "Example@example.com"

    const setFocus = () => {
        const txtEmail = document.getElementById("txtEmail");
        txtEmail.focus();  react diyorki dom dan boyle secip getirme problem olabilir . asagiya ref methodu ekleyerek
    } */
    /* //bir kullanıcı hareketi olsun ondan sonra bir şeyler gelsin istersek useRef
      //sanal DOM aracılığıyla DOM'u değiştirmek için kullanılan yapı */
    const emailRef = useRef(null);
    const btnRef = useRef(null);

    const setFocus = () => { 
        console.log(emailRef);
        console.log(btnRef);
        emailRef.current.focus();
        emailRef.current.style.backgroundColor = "red";
     }


  return (
    <Container className="mt-5">
        <input type="text" placeholder="Enter your email" ref={emailRef} />
        <button onClick={setFocus} ref={btnRef}>Set Focus</button>

    </Container>
  )
}

export default UseRef