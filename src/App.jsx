import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/pages/HomePage";

function App() {
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
