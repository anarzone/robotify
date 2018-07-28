import React from 'react';

export default ({id, name,email}) =>(
  <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${name}?size=200x200`} alt={`friendly robot ${name}`}/>
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  </div>
)
