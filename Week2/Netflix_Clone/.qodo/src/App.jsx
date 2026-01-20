import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
    </>
  );
}

export default App;
