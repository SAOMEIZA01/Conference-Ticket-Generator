import React, { useState, useEffect } from "react";
const TicketForm = ({ onGenerateTicket }) => {
    const [fullName, setFullName] = useState(localStorage.getItem("fullName") || "");
    const[email, setEmail] = useState(localStorage.getItem("email") || "");
    const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
    const[error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("email", email);
        localStorage.setItem("avatar", avatar);
    }, [fullName, email, avatar]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!fullName || !email || !avatar) {
            setError("All fields are required!");
            return;
        }
        if(!email.includes("@")) {
            setError("Enter a valid email!");
            return;
        }
        setError("");
        onGenerateTicket({ fullName, email, avatar });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Conference Ticket Generator</h2>
            <input
             type="text"
             placeholder="Full Name"
             value={fullName}
             onChange={(e) => setFullName(e.target.value)}
            />
            <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input
             type="url"
             placeholder="Avatar Image URL"
             value={avatar}
             onChange={(e) => setAvatar(e.target.value)}
            />
            {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit">Generate Ticket</button>
        </form>
    );
};

export default TicketForm;
