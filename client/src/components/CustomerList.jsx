import { useEffect, useState } from "react";
import API from "../services/api";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await API.get("/customers");
      setCustomers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Customer List</h3>

      {customers.length === 0 ? (
        <p>No customers available</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>
              <strong>{customer.name}</strong> - {customer.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomerList;