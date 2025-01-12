
export default function MyButton({ func, text, type = "button" }) {
  return <button onClick={func} type={type}>{text}</button>;
}
