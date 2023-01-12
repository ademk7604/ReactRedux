 import React from "react";
  import "./profile-card.scss";
  import Stat from "./stat";

  const ProfileCard = (props) => {
    const { avatar, name, location, shot, followers, following } = props;
    const image = require(`../../assets/img/${avatar}`);
     /* require ozelligi kod okundugunda url adresi veriyor */
    const profileBg = { backgroundImage: `url(${image})`};
    
    return (
      <div className="profile-card">
        <div className="header" style={profileBg}></div>
        <div className="content">
          <div className="avatar" style={profileBg}></div>
          <h2>{name}</h2>
          <h4>{location}</h4>
          <div className="stats">
            <Stat name="Shot" value={shot} />
            <Stat name="Followers" value={followers} />
            <Stat name="Following" value={following} />
          </div>
        </div>
      </div>
    );
  };

  /* 
10-header'ı oluşturduk
11-content'i oluşturduk
13,14 prop'lardan gelen ifadeleri çekiyoruz
15-shot, followers, following'leri flex yapmak için bunları taşıyacak olan stats div'ini açtık ve bunları da ayrı component'te yapıyoruz
Stat componenti'ne gidiyoruz
15- 3 tane Stat componenti çağırıp name ve value olarak propları gönderiyoruz 16,17,18'de
16-name=Shot , value={shot} value'deki shot 5'deki prop'dan geliyor(5'deki component'e gelen shot degerini 16'daki value'ye gönderiyoruz)
normalde avatar props'u 12'deki avatar'a dışardan dosya olarak gelir ve 12'de oraya dışardan gelen adresi yerleştiririz, burda assets'den çekiyoruz
7-resmin yolunu koyuyoruz, ama profileBg avatar'dan gelecek avatar'ı da backtick olarak alıyoruz(6) ama onda da require kullanmam lazım
cunku kullanmazsam dosyayı public'de zanneder, require kullanıyorsak src'de oluşturururz img dosyasını
6-require'i burda kullanıyoruz ve burdaki image'i 7'de profileBg'de kullanıyoruz
10-profileBg'yi stil olarak header'a atıyoruz ve arka planı oluşturmus oluyoruz
 aynı zamanda avatar'da da aynı resmi kullanacağımız için oraya da atıyoruz profileBg'yi
App'e gidip orda props değerlerini göndermemiz gerekli
*/

  export default ProfileCard;