import logo from './logo.svg';
import './App.css';
import RouteConfig from './Routes/RouteConfig';
import '../src/assets/scss/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
/** remove if nopt using rsuite tables */
import 'rsuite/dist/rsuite.min.css';

function App(props) {
  return (
    <>
      <div className='App'>
        <RouteConfig />
      </div>

    </>
  );
}

export default App;
