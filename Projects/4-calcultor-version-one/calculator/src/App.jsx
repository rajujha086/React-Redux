import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonContainer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
