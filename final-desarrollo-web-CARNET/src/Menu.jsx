import React from 'react';

const Menu = ({ setComponent }) => {
  return (
    <div className="w3-container">
      <ul>
        <li>
          <button onClick={() => setComponent('TablaSencilla')}>TablaSencilla</button>
        </li>
        <li>
          <button onClick={() => setComponent('Gallery')}>Gallery</button>
        </li>
        <li>
          <button onClick={() => setComponent('DynamicForm')}>DynamicForm</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
