import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <h1>Please Work, Thanks</h1>
    // <ApolloProvider client={client}> 
    //   <Router>
    //     <Routes>
    //         {/* <Route 
    //           path="/login"
    //           element={<Login />}>
    //         </Route>

    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route> */}

    //       {/* <Route path="*">
    //         <Link>
    //           <h1>Not found</h1>
    //         </Link>
    //       </Route> */}

    //     </Routes>
    //   </Router>
    // </ApolloProvider>
  );
}

export default App;
