import React, { useContext } from "react";
import loadingContext from "../context/loadingContext";

import { getUsers } from "../services/api";


function Users () {
  const { showLoading, hideLoading } = useContext(loadingContext);
  
  const getUsers = async () => {
    showLoading("Carregando usuários...")
    
    const response = await getUsers().then((response) => {
      hideLoading()
      return response;
    });
    console.log({ response });
  };
    
  return (
    <>
      <button onClick={getUsers}>Buscar usuários</button>
    </>
  );
  
}

export default Users;
