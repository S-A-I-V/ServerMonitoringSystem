import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShuttleStatus.css';  // Make sure to import the CSS file

const ShuttleStatus = () => {
  const [shuttles, setShuttles] = useState([]);

  useEffect(() => {
    const fetchShuttleStatus = async () => {
      try {
        const response = await axios.get('http://localhost:3001/shuttles');
        setShuttles(response.data);
      } catch (error) {
        console.error('Error fetching shuttle status:', error);
      }
    };

    // Fetch data initially
    fetchShuttleStatus();

    // Set interval to fetch data every 30 seconds
    const intervalId = setInterval(fetchShuttleStatus, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Shuttle Status</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>IP Address</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {shuttles.map(shuttle => (
            <tr
              key={shuttle.shuttle_ip}
              className={`shuttle-row ${shuttle.shuttle_state === 'up' ? 'shuttle-up' : 'shuttle-down'}`}
            >
              <td>{shuttle.shuttle_name}</td>
              <td>{shuttle.shuttle_ip}</td>
              <td>{shuttle.shuttle_state}</td>
              <td>{shuttle.state_timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShuttleStatus;
