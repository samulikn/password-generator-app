import Container from "./components/Container";
import Heading from "./components/Heading";

function App() {

  return (
    <main className="flex flex-col gap-4 items-center mt-16 sm:mt-34 sm:gap-8">
      <Heading />
      <Container />
    </main>
  )
}

export default App;
