import React from 'react';

export default (props)=>(
  <div style={{overflow: 'scroll', border: '5px solid black', height: '500px'}}>
    {
      props.children
    }
  </div>
)