import React, { useState } from "react";
import TicketForm from "./TicketForm";
import Ticket from "./Ticket";
import "./App.css";

function App() {
  const [ticket, setTicket] = useState(null);

  return (
    <div className="App">
        <TicketForm onGenerateTicket={setTicket} />
        {ticket && <Ticket ticket={ticket} />}
    </div>
  );
}

export default App;
