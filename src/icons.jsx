import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Icons(props)
{
   return(
    <div className="container-fluid  d-flex gap-3 flex-row">
      <FontAwesomeIcon icon={props.icon} style={{ color: "white",padding:'4px',fontSize: "2rem" }} />
      <div>
      <p className=" fw-bold fs-6 mb-0">{props.heading}</p>
      <p className="" style={{color: '#808080'}}>{props.subHeading}</p>
      </div>
      
    </div>
   ); 
}

export default Icons;