import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
const Form5 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();/* htmml default ozellıklerını ıptal edıyor */
    try {
      if(!formData.firstName) throw new Error("Adınızı giriniz");
      if(!formData.lastName) throw new Error("Soyadınızı giriniz");
      if(!formData.email) throw new Error("Epostanızı giriniz");
      if(!formData.phone) throw new Error("Telefonunuzu giriniz");
      
      setTimeout( ()=> {
        alert("Bilgileriniz gönderildi");
        setFormData({/* 1 sanıye sonra kendıı sıfırlıyor form */
          firstName: "",
          lastName: "",
          email: "",
          phone: ""
        })
      }, 1000);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    
    
    
  }
  return (
    <Container className="mt-5">
      <Form method="post" onSubmit={handleSubmit} noValidate >
        <Form.Group className="mb-3">
          <Form.Label>İsim</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.firstName}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Soyisim</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.lastName}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Epostanızı giriniz"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Button variant="info" type="submit">Kaydet</Button>
      </Form>
    </Container>
  );
};
export default Form5;

/* form methodu yazilmazsa butun datayi get ile brawsor da gonderir. method="post"
burdaki Formmethod="post" clasik yapilar biz api ya bir sey pot edeceksek axios uzerinde yapacagiz.
submit butununa tikaldiignda o bilgileri bir yerelere godnermeye calsiir. suanlik submit in defaultunu kaldirip 
formlari kontrol edelim, 
 form lara ozel onSubmit methodu var.
 e.preventDefault() methodu ile defaul davranisini kestik. submit yaptigimizda formu gondermiyor.
 simdi if() ile kontrollere baslayabilriz return koymamizin nedeni adim adim gider. adini girmemisse once onu girsin diye uyarir
 aler ve returnden ziyade istenileni girmezse throw new error diye uyarilabilir
 try catch ile kontrolleri bu sekilde verdik.
 Email i yanlis giridigimizde html5 in getirdigi email ozelligi var onu da devre disi birakmamiz var
 Form un icinde noValidae dedigimzde form un defaulu tamamen elinize almis oluyrosunuz.
 bu sekilde kendimiz kontrol mekanizmasini elimize almis oluyoeuz. dikkat react camelcase noValidae bus ekilde olmasa kabul etmiyor.
 1.Dersin SON 5 dakikada tekrar anlatiyor. 
 tel, credicarti gibi backend e girilen degerlerin standart bir sekilde girilmesi ve gonderilmesi cok onemli.
 setTimeout calsiinda aler de de iffade edildigi gibi form backend e gonderiliyor.
 formu temizlemek icin setFormData nin icinde variable ri bos atayarak yaptik. 
 */