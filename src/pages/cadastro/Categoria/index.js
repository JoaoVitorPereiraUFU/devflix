import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {


  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [values, setValues] = useState(valoresIniciais);  
  const [categorias, setCategorias] = useState([]);  

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  };

  const handleChange = (e) => setValue(e.target.getAttribute('name'), e.target.value);
  

  return (

    <PageDefault>
      <h1>Cadastro de Categoria : {values.nome}</h1>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais)
        }}
      >
        <FormField 
          name="nome"
          label="Nome da categoria:"
          value={values.nome}
          onChange={handleChange}
          type="text"
        />

        <FormField 
          name="descricao"
          label="Descrição:"
          value={values.descricao}
          onChange={handleChange}
          type="text"
        />

        <FormField 
          name="cor"
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
          type="color"
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
      </ul>    

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;