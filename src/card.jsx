
import React from 'react';

function Cards(props) {
  return (
    <div>
      <div className="card hover" style={{ width: '13rem' }}>
        <img src={props.src} class="card-img-top" style={{ height: '16.2rem' }} />
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center p-1">
        <h5 className=" text-centre" style={{ fontFamily: 'math', fontWeight: 'revert' }}>{props.cupName}</h5>
        <p className=" text-centre text-decoration-underline text-danger" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'normal', fontSize: '0.9rem' }}>{props.price}</p>
        <p className=" text-centre text-decoration-line-through line-through" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'normal', fontSize: '0.7rem', color: '#6e6868' }}>{props.oldPrice}</p>
      </div>
    </div>

  );
}

export default Cards;