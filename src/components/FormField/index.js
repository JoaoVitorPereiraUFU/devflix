import React from 'react';

// import { Container } from './styles';

function FormField( { name,label,value, onChange,type } ) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
}

export default FormField;