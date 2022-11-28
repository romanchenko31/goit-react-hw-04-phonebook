import { useState, useEffect } from 'react';
import Form from './Form/Form.jsx';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter.jsx';
import ContactList from './ContactList/ContactList.jsx';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        { id: 'id-5', name: 'Her Kne', number: '443-89-12' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onRemove = e => {
    setContacts(contacts.filter(value => value.name !== e.currentTarget.name));
  };

  const addTodo = (name, number) => {
    const todo = {
      id: nanoid(),
      name,
      number,
    };

    const repeatNames = contacts.find(value => {
      if (value.name === todo.name) {
        return value;
      }
      return !value;
    });

    if (repeatNames) {
      alert(`${todo.name} уже есть телефонной книге`);
      setContacts(contacts);
    } else {
      setContacts([todo, ...contacts]);
    }
  };

  const filterTodo = contacts.filter(value =>
    value.name.toUpperCase().includes(filter.toUpperCase())
  );
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
      <Form onSubmit={addTodo} />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <p style={{ margin: 0, textAlign: 'center' }}>Search contact</p>
      <Filter onChange={onChangeFilter} value={filter} />
      <ContactList onRemove={onRemove} filterTodo={filterTodo} />
    </>
  );
};

export default App;
