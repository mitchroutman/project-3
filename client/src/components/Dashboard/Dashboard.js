import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  navigate('/home')

  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate('/path', { replace: true });
    }
    //    console.log(JSON.parse(user))
  };

  return <div>Dashboard</div>;
}

export default Dashboard;
