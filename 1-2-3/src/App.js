import logo from './logo.svg';
import './App.css';
import ComponentA from './components/pure/component_a';

function App() {
    const defaultContact = {
      firstName: "John",
      lastName: "Smith",
      eMail: "john@smith.com",
      isConnected: false,
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ComponentA contact={defaultContact}/>
        </header>
      </div>
    );

}

export default App;
