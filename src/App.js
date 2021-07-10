// // Faça um fetch (POST) para a API abaixo
// // Para a criação ser aceita é necessário enviar dodos de:
// // nome, email, senha, cep, rua, numero, bairro, cidade e estado

// // Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// // Mostre uma mensagem na tela, caso a resposta da API seja positiva

import React from 'react';
import Form from './Form';
import Button from './Button';
import { FormList } from './FormContext';
const App = () => {




  return (
    <FormList>
      <form>
        <Form id="nome" type="text" />
        <Form id="email" type="email" />
        <Form id="senha" type="password" />
        <Form id="cep" type="number" />
        <Form id="rua" type="text" />
        <Form id="numero" type="number" />
        <Form id="bairro" type="text" />
        <Form id="cidade" type="text" />
        <Form id="estado" type="text" />

      </form>
      <Button>Enviar</Button>
    </FormList>

  )
};

export default App;