import React from "react";
import "./Ticket.css"

const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">
            <h2>Conference Ticket</h2>
            <img src={ticket.avatar} alt="Avatar"/>
            <p><strong>Name:</strong> {ticket.fullName}</p>
            <p><strong>Email:</strong> {ticket.email}</p>
        </div>
    );
};

export default Ticket;
