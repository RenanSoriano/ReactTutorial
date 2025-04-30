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
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });//array com objeto formData e função pra alterar formData, state typado 
  //pra usar interface FormData e inicializado com um objeto vazio com as propriedades name e email

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { //param e do typado para gerenciar mudanças de evento no html input
    //função fica escutndo para mudanças no input e mantém atualizado o estado do form de acordo com input do usuario
    const { name, value } = e.target;//pega o nome e valor do input que foi alterado
    setFormData({ ...formData, [name]: value });//passa o nome e valor do input alterado para o formData
  };

  const handleSubmit = () => { //quando input enviado, mostra popup
    // e.preventDefault(); tirei isso aqui pra que o form resete quando enviado
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
