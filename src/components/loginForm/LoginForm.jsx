import React, { useState } from 'react';
import MyInput from './MyInput';  
import MyButton from './MyButton';

const LoginForm = () => {
  const [formData, setFormData] = useState([
    { name: 'login', value: '', placeholder: 'Enter your login', type: 'text' },
    { name: 'email', value: '', placeholder: 'Enter your email', type: 'email' },
    { name: 'password', value: '', placeholder: 'Enter your password', type: 'password' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = formData.map((field) =>
      field.name === name ? { ...field, value } : field
    );
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Логика отправки данных
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((field) => (
        <MyInput
          key={field.name}
          name={field.name}
          type={field.type}
          value={field.value}
          onChange={handleChange}
          placeholder={field.placeholder}
        />
      ))}
         
          <MyButton type="submit">Submit</MyButton>
      </form>
      
  );
};

export default LoginForm;
