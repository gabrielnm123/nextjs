'use client';
import { useState } from 'react';

export function Button() {
  const [name, setName] = useState('Lucas');

  const hendleHandleChangeName = () => {
    setName('Lucas Almeida');
  };

  return (
    <div>
      <button onClick={hendleHandleChangeName}>Alterar nome</button> <br />
      <h3>Nome: {name}</h3>
    </div>
  );
}