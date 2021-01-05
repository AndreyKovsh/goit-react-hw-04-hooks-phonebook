import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import Form from './component/Form/Form.js';
import Filter from './component/Filter/Filter.js';
import ContactList from './component/ContactList/ContactList.js';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast(` ${name} is already in use.`);
    } else if (contacts.find(contact => contact.number === number)) {
      toast(` ${number} is already in use.`);
    } else if (name.trim() === '' || number.trim() === '') {
      toast.info(" Enter the contact's name and  phone number!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      toast.error(' Enter the correct  phone number(check format)!');
    } else {
      setContacts(prevContacts =>
        [contact, ...prevContacts].sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        }),
      );
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
      <ToastContainer autoClose={3700} />
    </>
  );
}

export default App;
// import { Component } from 'react';
// import shortid from 'shortid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Form from './component/Form/Form.js';
// import Filter from './component/Filter/Filter.js';
// import ContactList from './component/ContactList/ContactList.js';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     const { contacts } = this.state;

//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       )
//     ) {
//       toast(`${name} is already in use`);
//     } else if (contacts.find(contact => contact.number === number)) {
//       toast(`${number} is already in use`);
//     } else if (name.trim() === '' || number.trim() === '') {
//       toast("Enter the contact's name and phone number!");
//     } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
//       toast('Enter the correct phone number');
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const visibleContacts = this.getContacts();
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         {contacts.length > 1 && (
//           <Filter value={filter} onChange={this.changeFilter} />
//         )}
//         {contacts.length > 0 ? (
//           <ContactList
//             contacts={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         ) : (
//           <p>Your phonebook is empty. Please add contact.</p>
//         )}
//         <ToastContainer></ToastContainer>
//       </>
//     );
//   }
// }

// export default App;
