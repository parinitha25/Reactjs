import React from 'react';

const Contacts =({list,lista}) => {
  return (
    <div>
        
      <center><h1>Contact List</h1></center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{list.login}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{list.id}</h6>
            <p className="card-text">{list.url}</p>
            <p className="card-text">{list.type}</p>
            <p className="card-text">{list.name}</p>
          </div>
          </div>
          <center><h1>Contact List</h1></center>
          <div className="card">
          <div className="card-body">
            <h5 className="card-title">{lista.userId}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{lista.id}</h6>
            <p className="card-text">{lista.title}</p>
            <p className="card-text">{lista.body}</p>
         
          </div>
        </div>
      
    </div>
  )
};

export default Contacts;
