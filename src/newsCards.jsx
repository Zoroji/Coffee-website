import React from 'react';

function NewsCard(props) {
    return (
        <div className="p-3 hover bg-white  d-flex align-items-start flex-column gap-3" style={{ width: '20rem', height: '30rem', boxSizing: 'border-box' }}>
            <img src={props.img} className=' img-fluid rounded ' style={{ width: '100%', height: '13rem'}} />
            <p className="fs-5 fw-semibold lh-base mb-0">{props.heading}</p>
            <p className=' text-body-secondary'> {props.subHeading}</p>
            <p className=' text-start text-body-tertiary '>{props.date}</p>
        </div>
    );
}

export default NewsCard;
