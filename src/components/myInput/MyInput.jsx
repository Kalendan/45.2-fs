


export default function MyInput({ name, type = "text", placeholder = "", label }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
    <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
    />
  </div>
);
}