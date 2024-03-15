import { Link } from 'react-router-dom'; // Import the Link component


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
        </p>
        <p>
        <Link to="/login">Login</Link> {/* Add this line for the sign-up link */}
        or
        <Link to = "/signup">Sign Up</Link>
      </p>
      </header>
    </div>
  );
}

export default App;
