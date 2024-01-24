import HeaderComponent from "./Components/Header/HeaderComponent";
import MainComponents from "./Components/Main/MainComponents";
import FooterComponents from "./Components/Footer/FooterComponents";
import ModalComponents from "./Components/Modal/ModalComponents";

function App() {
  return (
    <div className="App">
      <ModalComponents />
      <HeaderComponent />
      <MainComponents />
      <FooterComponents />
    </div>
  );
}

export default App;
