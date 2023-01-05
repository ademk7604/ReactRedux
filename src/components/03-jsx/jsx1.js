//rafce component kısaltma

import React from 'react'
import HelloWorld from '../01-hello-world/hello-world'

const Jsx1 = () => {
//bu kısma js ile ilgili kodları yazabilirsin

  const message = "Class isimleri className içinde verilir ve attribute'ler camelCase olarak yazılır"




  return (
    
    /* Tüm elementler tek bir root içinde olmalı,
        2 div varsa onları da bir div içine alman lazım mesela
        Class isimleri className içinde verilir ve attribute'ler camelCase olarak yazılır
        / burda mesela header yazsa dom'da görünür, ama ben alttaki div'lerin parent'i oluşmasın istersem React.Fragment kullanırım.
    kullanılma sebebi tasarımla alakalı <> içi boş da bıraksan aynı işlem olur*/
  
    <React.Fragment> 
    <ul>
    <li>Tüm elementler tek bir root içinde olmalı</li>
    <li className='title'>{message}</li>
    </ul>

    </React.Fragment>
  )
}

export default Jsx1