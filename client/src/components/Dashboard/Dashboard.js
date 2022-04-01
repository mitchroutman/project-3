import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      history.push("/");
    }
    //    console.log(JSON.parse(user))
  };

  return <div>Dashboard</div>;
}

export default Dashboard;
