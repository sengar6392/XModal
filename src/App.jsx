import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className="modal" style={{minHeight:"100vh"}}>
      <h1>User Details Modal</h1>
      <button onClick={()=>setShowForm(true)}>Open Form</button>
      {showForm && <Form setShowForm={setShowForm}/>}
    </div>
  );
}

export default App;
