import './App.css';
import NavBar from "./components/Nav";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";

const styles = {
  container: {
      backgroundImage: 'url("https://www.teahub.io/photos/full/1-10089_free-download-red-wallpaper-id-hd-plain-red.jpg")'
  }
}
function App() {
  return (
    <div  style = {styles.container}>
      <div className="container">
        <NavBar />
        <Jumbo />
        
        </div>
        <Footer />
      </div>
  );
}

export default App;
