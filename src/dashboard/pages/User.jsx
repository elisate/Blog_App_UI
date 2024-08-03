import React from 'react';
import '../styl/user.scss';

function User() {
    const users = [
      {
        fullNames: "Dushimiyimana Elisa",
        userEmail: "dushimiyimanaelisa@gmail.com",
      },
      {
        fullNames: "Dushimiyimana Elisa",
        userEmail: "dushimiyimanaelisa@gmail.com",
      },
      {
        fullNames: "Dushimiyimana Elisa",
        userEmail: "dushimiyimanaelisa@gmail.com",
      },
    ];
  return (
    <div className='userContainer'>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Full Names</th>
              <th>Emails</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
            
                <td>{item.fullNames}</td>
                <td>{item.userEmail}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User