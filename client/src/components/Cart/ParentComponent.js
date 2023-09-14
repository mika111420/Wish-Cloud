import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    const myArray = window.myArray;
    return (
      <div>
        <ChildComponent data={myArray} />
      </div>
    );
  }
}

export default ParentComponent;
