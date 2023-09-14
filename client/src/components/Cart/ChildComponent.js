import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const data = this.props.data; // Access the passed array

    return (
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChildComponent;
