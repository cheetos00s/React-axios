import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginComponent from './LoginComponent';

const FacturasComponent = () => {
  
  const [facturas, setFacturas] = useState([]);

  
  const fetchData = async () => {
    try {
      const response = await axios.get('/items/facturas', {auth: {
        username: 'ben',
        password: 'benspassword',
      },
    });
      console.log('Datos de facturas recibidos:', response.data);
      setFacturas(response.data);
    } catch (error) {
      console.error('Error al obtener facturas:', error);
    }
  };

 /* useEffect(()=>{
    fetchData();
  }, [])
  */
  return (
    <div>
      <h2>Lista de Facturas</h2>
      <button onClick={fetchData}>Search</button>
    </div>
  );
};

export default FacturasComponent;