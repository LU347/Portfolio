import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

//TODO: Change to router
function App() {
  const mainStyles = {
    height: '100vh', 
    margin: '0',
    padding: '0',
  };

  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/projects":
      component = <Projects />
      break
    default:
      component = <Home />
      break
  }
  return (
   <>
    <main style={mainStyles}>
      <Navbar />
      {component}
    </main>
   </>
  );
}

export default App;
