import { useState } from 'react';
import React from 'react';

interface FormData {
  name: string;
  email: string;
}
// export default function FormComponent({
//   name,
//   email
// }:FormData){
export default function FormComponent() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { //quando input digitado, atualiza o estado do form
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => { //quando input enviado, mostra popup
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`); //popup mostrando os dados do form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
// };
} 
