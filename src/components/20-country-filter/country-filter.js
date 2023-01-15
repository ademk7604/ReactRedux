import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import data from "./countries.json";

const CountryFilter = () => {
  const [countries, setCountries] = useState(data);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    /* setSearchText değiştiği zaman  filtreleme ile setCountries'i(data) güncelle */
    const arr = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setCountries(arr);
  }, [searchText]);

  return (
    <div className="p-5">
      <Form.Control
        type="text"
        placeholder="Type something..."
        className="mb-3"
        onChange={(e) =>
          setSearchText(e.target.value)
        }
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Code</th>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item, index) => (
            <tr key={item.code}>{" "}
              <td>{index + 1}</td>
              <td>{item.code}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
/*/key olarak metin index'ini buraya baglamak performans açısından iyi olmuyor, 
index degişken oldugu için sürekli her numara değiştiğinde re-render olur ama item.code 
yaparsak her ülkenin key'i aynı olur değişmez */
/* Javascript onchange kullanımında bir form elemanında bir veriyi seçme veya 
veri girişi sağlanması durumunda onchange özelliği tetiklenmektedir. */

export default CountryFilter;
