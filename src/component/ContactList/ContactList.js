import React from 'react';
function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <b>{name} </b>

            <em>{number}</em>
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

// import PT from 'prop-types';
// import './ContactList.css';

// function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ul className="contact-list">
//       {contacts.map(({ id, name, number }) => (
//         <li key={id}>
//           <p>
//             {name}: {number}
//           </p>
//           <button type="button" onClick={() => onDeleteContact(id)}>
//             delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   contacts: PT.arrayOf(
//     PT.shape({
//       id: PT.string.isRequired,
//       name: PT.string.isRequired,
//       number: PT.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PT.func.isRequired,
// };

// export default ContactList;
