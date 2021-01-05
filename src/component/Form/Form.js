import { useState } from 'react';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);

    resetInput();
  };
  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Andrey Kovsh"
            />
          </label>
          <label>
            Phone number
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
              placeholder="817-18-41"
            />
          </label>
          <button type="submit">Add contact</button>
        </div>
      </form>
    </>
  );
}

export default Form;

// import React, { Component } from 'react';
// import PT from 'prop-types';
// import shortid from 'shortid';
// import './Form.css';

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form id="contact" onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Name
//           <input
//             className="input-field"
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//             placeholder="Andrey Kovsh"
//           />
//         </label>
//         <br />
//         <label htmlFor={this.numberInputId}>
//           Phone number
//           <input
//             className="input-field"
//             type="text"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             id={this.numberInputId}
//             placeholder="817-18-41"
//           />
//         </label>

//         <button type="submit" className="submit-button">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// Form.propTypes = {
//   onSubmit: PT.func.isRequired,
// };

// export default Form;
