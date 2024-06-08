import React, { useState } from 'react';
import DataList from './data';
import './OwnCrud.css';

function OwnCrud() {
  const [initialData, setInitialData] = useState(DataList);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id, name) => {
    setEditingId(id);
    setInputValue(name);
  };

  const handleSave = () => {
    let editingArr = initialData.map((item) =>
      item.id === editingId ? { ...item, name: inputValue } : item
    );
    setEditingId(null);
    setInitialData(editingArr);
  };

  const handleInputbox = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>My Own Crud</h2>
      <div className="list-wrapper">
        {initialData.map((x) => {
          return (
            <div key={x.id}>
              {editingId !== x.id ? (
                <span className="list-name">{x.name}</span>
              ) : (
                <input onChange={handleInputbox} value={inputValue} />
              )}

              <button onClick={() => handleEdit(x.id, x.name)}>EDIT</button>
              <button onClick={handleSave}>SAVE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default OwnCrud;
