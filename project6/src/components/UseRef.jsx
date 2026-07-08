import { useRef } from "React";
export const UseRef = () => {
  const ref = useRef(null);
  const inputHandler = () => {
    console.log(ref.current);
    ref.current.focus();
    ref.current.style.backgroundColor = "red";
    ref.current.style.color = "white";
    ref.current.placeholder = "Enter your name ";
    ref.current.value = "Ganesh Dutt ";
  };

  const inputHide = () => {
    if (ref.current.style.display !== "none") {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "inline";
    }
  };
  return (
    <div>
      <button onClick={inputHide}>Hide</button>
      <input type="text" ref={ref} />
      <button onClick={inputHandler}>Click me </button>
    </div>
  );
};
