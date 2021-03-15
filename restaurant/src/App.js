import './App.css';
import NavBar from "./components/Nav";
import Main from "./components/Main";
import Menu from "./pages/Menu/Menu";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';


const styles = {
  container: {
    maxWidth: 1500,
    margin: "auto"
  }
}
function App() {
  return (
    <div style={{  
      backgroundImage: "url(https://www.teahub.io/photos/full/1-10089_free-download-red-wallpaper-id-hd-plain-red.jpg)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={styles.container}>
        <div className="container-fluid">
          <Router>
            <NavBar />
              <Route exact path = "/" component={Main} />
              <Route exact path = "/menu" component={Menu} />
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
