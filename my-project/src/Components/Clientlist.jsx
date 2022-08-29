import React from 'react'


function Clientlist({clients}) {

return (
  
    <div>
        
    
        {clients.map((client) => (
        <div className="col-sm-3" key={client.mobil_no}>
          {/* <p>{client.name}</p> */}
          <p className="card-name">{client.name}</p>
          <p>{client.nationality}</p>
          <p>{client.passport_no}</p>
          <p>{client.emirates_id_no}</p>
          <p>{client.mobil_no}</p>
          <p>{client.email}</p>
        </div>
      ))}
    </div>
);
}

export default Clientlist;