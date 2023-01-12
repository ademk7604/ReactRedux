import React from 'react'
import norherLights from "../../../src/assets/img/image1.jpg"
const Image = () => {
  return (
    <div>
        {/* externel url veya CDN  yontem (ayri sunucularda tutulabiliyor) harici
         Api lerde boyle uzun uzn img url si gonderiyorlar. bu tam yolu bu sekidle ekliyoruz. Backend de n sadece bu yol kullanilir */}
        <img src="https://images.unsplash.com/photo-1672572305595-c0a319dc09f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

        {/* satatik yontemde goruntuler PUBLIC klasoru icinde aranir */}
         <img src="assets/img/car.jpg" alt="" width="300" />

        {/* import ve require yonteminde dosyalar SRC icinde olmalidir.
        bu yontemde import var dusunun json veya backend den geliyor resim bize
          require daha faydali. require de ayni zamanda kod calistiginda path de verir
        */}
         <img src="{norherLights}" alt="" width="300"/>

          <img src={require("../../assets/img/image2.jpg")} alt="" width="300"/>
         
          </div>
        /* kullanici acisindan public src farkliligi yok development asamasinda onem arz ediyor */
  )
}

export default Image