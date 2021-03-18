//Components
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
// import 'mdb-ui-kit/css/mdb.min.css';
function App() {
  return (
    <>
      <Helmet>
        <title>Final Destination</title>
      </Helmet>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
