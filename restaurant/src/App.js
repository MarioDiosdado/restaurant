import './App.css';
import NavBar from "./components/Nav";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";


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
          <NavBar />
          <Jumbo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
