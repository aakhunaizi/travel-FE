//Components
import { Helmet } from "react-helmet";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Helmet>
        <title>Travel Agency</title>
      </Helmet>
      <Routes />
    </>
  );
}

export default App;
