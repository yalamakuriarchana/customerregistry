import { useState } from "react";
import API from "../services/api";

function CustomerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!name || !email) {
      alert("Please enter Name and Email");
      return;
    }

    try {
      await API.post("/customers", {
        name,
        email,
      });

      alert("Customer Added Successfully!");

      setName("");
      setEmail("");

      window.location.reload();
    } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);
  alert(JSON.stringify(error.response?.data));
}
  };

  return (
    <div>
      <h3>Add Customer</h3>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Add Customer
      </button>
    </div>
  );
}

export default CustomerForm;