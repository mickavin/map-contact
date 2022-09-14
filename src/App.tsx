import './App.css';
import Map from 'components/Map';
import Sidebar from 'components/Sidebar';

function App() {

  return (
    <div className="App lg:flex lg:h-screen">
      <Map/>
      <Sidebar/>
    </div>
  );
}

export default App;
