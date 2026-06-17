import "./App.css";
import File from "./components/File1";
import Heading from "./components/Heading";

function App() {
  let data =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eaque sunt quam numquam repellendus culpa veniam dolor sit maiores possimus, doloribus quo? Quos, amet voluptates! Quos doloribus sint pariatur aliquid!";
  return (
    <>
      <Heading title="DUCAT" data={data} />
      <File logoName="GD" />
      <File logoName="DUCAT" />
    </>
  );
}

export default App;
