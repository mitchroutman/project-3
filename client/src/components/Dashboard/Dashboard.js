import React from "react";
//import { useHistory } from "react-router-dom";

function Dashboard() {
  // //const history = useHistory();
  // //history('/dashboard')

  // React.useEffect(() => {
  //   getData();
  // }, []);
  // const getData = () => {
  //   const user = localStorage.getItem("user");
  //   if (!user) {
  //     //navigate('/path', { replace: true });
  //   }
  //   //    console.log(JSON.parse(user))
  // };

  return ( 
  <div>
    <div id='dashboard-header'>
      <h1>Dashboard</h1>
    </div>
    
    <div id='dashboard-main'>
        <h2>Your Projects</h2>
    </div>
  </div>
  );
}

export default Dashboard;
