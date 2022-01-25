import React, {useContext} from 'react';
import loadingContext from "../context/loadingContext";

function ListItens () {
  const {departList, userList} = useContext(loadingContext);

  return (
    <div>
      <ol>
        {departList.map((item, id) => (
          <li key={id}>
            {item.name}
          </li>
        ))}
      </ol>
      <ol>
        {userList.map((item, id) => (
          <li key={id}>
            {`${item.first_name} ${item.last_name}`}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ListItens
