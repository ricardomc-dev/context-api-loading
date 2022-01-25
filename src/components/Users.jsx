import React, { useContext } from "react";
import loadingContext from "../context/loadingContext";

import { getUsers } from "../services/api";


function Users () {
  const { showLoading, hideLoading, setUserList, setDepartList } = useContext(loadingContext);
  
  const handleUsers = async () => {
    showLoading("Carregando usuários...")
    setDepartList([])
    
    const response = await getUsers().then((response) => {
      hideLoading()
      return response;
    });
    setUserList(response)
  };
    
  return (
      <button onClick={handleUsers}>Buscar usuários</button>
  );
  
}

export default Users;
