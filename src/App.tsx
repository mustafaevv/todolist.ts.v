import { BrowserRouter} from 'react-router-dom'

import Header from "./components/Header";
import AllRouters from "./routes/AllRouters";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AllRouters/>
      </BrowserRouter>
    </div>
  );
};

export default App;
