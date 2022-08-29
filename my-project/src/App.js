import React, {useState} from 'react';
import Navbar from "./Components/Navbar";
import Individualinfo from "./Components/Individualinfo";
// import Clientinfo from "./Components/Clientinfo";
import Clientlist from "./Components/Clientlist";
import {Route, Routes } from "react-router-dom";




const App = () => {

  const[clients, updateClients] = useState([]);

  const addClient = (client) => {
    updateClients([...clients, client])
  };

  console.log(clients)


  return(
    <div className="App">
    <Navbar />
    
    <Routes>
      <Route exact path="/individualinfo" element={<Individualinfo addClient={addClient}  />} />
      {/* <Route exact path="/clientinfo" element={<Clientinfo  />} /> */}
      <Route exact path="/clientlist" element={<Clientlist clients={clients} />} />
      {/* <Clientlist clients={clients} /> */}

 
    </Routes>
    </div>
  );
}

export default App;

