import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h2>This is page dashboard</h2>
    </div>
  );
};

export default Dashboard;

/*
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>This is page dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Go to Counter Page</Link>
          </li>
          <li>
            <Link to="/profile">Go to Profile Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
*/
