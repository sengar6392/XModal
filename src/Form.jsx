import { useState } from "react";

/* eslint-disable react/prop-types */
const Form = ({ setShowForm }) => {
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    let date = new Date(dob);
    if (date > new Date()) {
      alert("njvbkds");
    } else {
      e.target.reset();
      setDob("");
      setPhone("");
    }
  };
  return (
    <div
      onClick={() => setShowForm(false)}
      className="modal"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="modal-content">
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
          style={{
            height: "20rem",
            position: "absolute",
            left: "50%",
            bottom: 10,
            transform: "translate(-50%)",
            backgroundColor: "#e4e0e0",
            padding: "1rem 2rem",
          }}
        >
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" required />
          <br />
          <label htmlFor="email">Email Address:</label>
          <br />
          <input type="email" id="email" title="hello" required />
          <br />
          <label htmlFor="phone">Phone Number:</label>
          <br />
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="dob">Date of Birth:</label>
          <br />
          <input
            type="date"
            id="dob"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br />
        </form>
          <button
            className="submit-button"
            type="submit"
            style={{ marginBlock: "2rem" }}
          >
            Submit
          </button>
      </div>
    </div>
  );
};

export default Form;
