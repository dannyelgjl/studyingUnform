import React, { useRef } from 'react';
import { Form } from '@unform/web';

import Input from "./components/Input/";

function App() {
  const ref = useRef(null);

  const submit = (data: object) => {
    console.log(data);
  }

  return (
    <Form ref={ref} onSubmit={submit}>
      <Input name="nome" type="text" placeholder="nome" />
      <Input name="sobrenome" type="text" placeholder="sobrenome" />
      <Input name="idade" type="text" placeholder="idade" />
      <Input name="endereço" type="text" placeholder="endereço" />
      <Input name="rua" type="text" placeholder="rua" />

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default App;
