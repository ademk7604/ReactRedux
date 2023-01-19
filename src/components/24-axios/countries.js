import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Country from "./country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadData = async () => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      const arr = resp.data.map((item) => ({
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        capital: item.capital?.join("-"),/* birden fazla kapital oldugunda - ile birlestirir */
        currencies: item.currencies ? Object.keys(item.currencies).map( cur=> item.currencies[cur].name ).join("-") : ""
      }));/* ilk kisim nesneleri aliyor icinde 2 farkli nesne var onlarinda currencies in name i ver . bu sekilde value aldik */
      setCountries(arr);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Curency</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((item) => (
          <Country {...item} key={item.name} />
        ))}
      </tbody>
    </Table>
  );
};
export default Countries;