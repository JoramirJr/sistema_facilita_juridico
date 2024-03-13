import { useState, useEffect } from "react";

import TableContainer from "./TableComponents/TableContainer";
import TableField from "./TableComponents/TableField";
import BtnIcon from "./BtnIcon";
import SearchInput from "./SearchInput";

import { toast } from 'react-toastify';

export default function ClientList() {
  const [clientes, setClientes] = useState(() => []);
  const [bestRoute, setBestRoute] = useState(() => []);

  useEffect(() => {
    async function getClientes(){
      const response = await fetch("http://localhost:3001/clientes");
      const bestRouteRes = await fetch("http://localhost:3001/clientes/optimalvisitroute");
      
      if(!response.ok) {
        toast("Erro na obtenção dos clientes", { type: "error", theme: "colored" });
      } else {
        const clientes = await response.json();
        setClientes(clientes);
      }

      if(!bestRouteRes.ok) {
        toast("Erro na obtenção da melhor rota", { type: "error", theme: "colored" });
      } else {
        const bestRoute = await bestRouteRes.json();
        setBestRoute(bestRoute);
      }
    }
    getClientes();
  }, []);

  const onSubmitSearch = async (query) => {
    const response = await fetch (`http://localhost:3001/clientes?search=${query || ""}`, {
      method: "GET",
      headers: new Headers({'content-type': 'application/json'}),
    });
    const filteredClientes = await response.json();
    setClientes(filteredClientes);
  };
  
  return (
    <div>
      <div className="flex justify-end items-center" >
        <SearchInput placeholder="buscar..." register={{}} onChange={onSubmitSearch} />
        <BtnIcon />
      </div>
      <div className="flex flex-col sm:flex-row justify-around" >
        <div className="px-2 md:w-[50vw]" >
          <h2>Clientes</h2>
          <TableContainer records={clientes}>
            <TableField field="nome" label="Nome"/>
            <TableField field="telefone" label="Telefone"/>
            <TableField field="email" label="Email"/>
            <TableField field="coordenadas" label="Coordenadas"/>
          </TableContainer>
        </div>
      <div className="px-2 md:w-[50vw]" >
        <h2>Melhor Rota</h2>
        <TableContainer records={bestRoute} >
            <TableField field="nome" label="Nome"/>
            <TableField field="coordenadas" label="Coordenadas"/>
        </TableContainer>
      </div>
      </div>
    </div>
  );
}

//();