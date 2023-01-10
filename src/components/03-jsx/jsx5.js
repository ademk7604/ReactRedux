import React from 'react'

const Jsx5 = () => {
  /* bu bolumde Js disinda bir set kullanamayiz. nacak `const a= `<b></b>` bu sekilde yazilabilir tabi` */
    const names = [ "Ali", "Veli", "Ayse", "Fatma"]
    const cities =["istanbul","izmir","London","Paris"]
    
  return (
    /* turnery ve short Circuit e imkan veriyor, if ve diger yapilara burda izin vermiyor */
    <div>


        <ul>
        {
            names.map((x,i)=> <li key={i}>{x}</li>)
            /* iteration yaparken JsX ozelligi olarak map in olusturdugu 
            dizi elemanina i index degeri 0 dan basla x degerdir. siralamayi karistirma */
        }

        </ul>
        <select>
          {cities.map((city,i)=> <option key={i}>{city}</option>)}
          {/* key vermezsek consol da her cocuk mutlaka bir key sahip olmali diyor */}
          </select>
    </div>
  )
}

export default Jsx5