import Container from "./components/Container";
import Heading from "./components/Heading";

function App() {

  return (
    <div className="flex flex-col gap-4 justify-center items-center sm:gap-8">
      <Heading />
      <Container />
    </div>
  )
}

export default App;
