import React from 'react';

const DynamicForm = ({ fields }) => {
  return (
    <div className="w3-container">
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea name={field.name} />
            ) : (
              <input type={field.type} name={field.name} />
            )}
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DynamicForm;
