import { Component } from 'react';

class Introduction extends Component {
  render() {
    const { name, designation, phone1, phone2, email } = this.props.introObject;
    return (
      <div className='introduction'>
        <h1>{name}</h1>
        <h3 className='designation'>{designation}</h3>
        <hr />
        <div className='personal-information'>
          <p>
            Phone: {phone1}, {phone2}
          </p>
          <p>Email: {email}</p>
        </div>
        <hr />
      </div>
    );
  }
}

export default Introduction;
