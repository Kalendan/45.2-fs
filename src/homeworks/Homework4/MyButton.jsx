import './myButton.css';

export function MyButton({ onClick, children }) {
    return <button className="my-button" onClick={onClick}>{children}</button>;
}
