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
      <div className="shuttle-grid">
        {shuttles.map(shuttle => (
          <div
            key={shuttle.shuttle_ip}
            className={`shuttle-card ${shuttle.shuttle_state === 'up' ? 'shuttle-up' : 'shuttle-down'}`}
          >
            <h3>{shuttle.shuttle_name}</h3>
            <p>{shuttle.shuttle_ip}</p>
            <p>{shuttle.shuttle_state}</p>
            <p>{shuttle.state_timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShuttleStatus;
