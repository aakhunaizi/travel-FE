//Components
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Helmet>
        <title>Travel Agency</title>
      </Helmet>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
