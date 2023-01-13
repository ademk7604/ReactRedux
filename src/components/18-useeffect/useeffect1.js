import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
const UseEffect1 = ({id}) => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    console.log("Bu satır render ve re-render durumlarında ve alttaki return kısmı render edilmeden önce çalıştırılır");

    useEffect( ()=> {
        console.log(`
            MOUNTING: Bu satır sadece render durumunda çalışır.
            Ancak re-render larda çalışmaz.
        `)
        /* api isteklerimizi ozellukle buraya yazmamiz lazim. burdan state de gonderirriz. 
        bu sekilde her defasin Api den data cekme maliyetinden kurtulmus oluruz.component 
        ilk yuklendiginde bir kere calissin sonraki re-render larda calismasin
        [] dizi depencesy mounting oldugu anlasiliyor.*/
    }, []);

    useEffect( ()=> {
        console.log(`
            
        `)
        return ()=>{
            console.log(`UNMOUNTING: Bu bolum component hafizadan atilmadan hemen once calistirilir`)
            /* {false $$ <UseEffect/>} bu sekilde, diye app e yazdik calistirdik
            unmointing ile temizlik yapilir. component hafizadan atildiginda clear yapmamiz lazim bu sekilde bestpractic degildir */
        }
    }, []);

    useEffect( ()=> {
        console.log(`
        UPDATING: Bu bölümdeki kodlar render ve re-render durumlarında ve 
        alttaki return kısmı render edildikten sonra çalıştırılır
        Bu useEffect özellikle alttaki elementlere useRef ile erişmek için kullanılır
        `);
    });


    useEffect( ()=> {
        console.log(`
        UPDATING: Bu bölümdeki kodlar alt taraftaki yazılan dependency lerin (message, id)
         değişmesi durumunda çalışır.
        `)
        /* message in degeri degistiginde calisir bu sekilde dependesy olarak bir komut verebiliyoruz*/

    }, [message, id]); /* sonradan id ekledik veya oldu ya message daya id degisirse calissin */


    /* useEffect ler return render edildiklten sonra calisir o yuzden useEffectlreden return un icine ulasilabiliyor. */



  return (
    <div>
        <div>{message} - {error}</div>
        <Button variant="info" onClick={()=>setMessage("Hello")}>Set Message</Button>
        <Button variant="danger" onClick={()=>setError("Some errors")}>Throw Error</Button>
    </div>
  )
}
export default UseEffect1