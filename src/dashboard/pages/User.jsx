import React from "react";
import "../styl/user.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getprogram = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/auth/getAllUsers"
        );
        console.log(response.data);
        setUser(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getprogram();
  }, []);
  return (
    <div className="userContainer">
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Full Names</th>
              <th>Emails</th>
              <th>UserRole</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index}>
                <td>{item.fullNames}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
