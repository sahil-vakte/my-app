import React from 'react'
import "../Partner/partner.css"
import p1 from "../../assets/Images/westside.png";
import p2 from "../../assets/Images/Nilkamal.png";
import p3 from "../../assets/Images/sony.png";
import p4 from "../../assets/Images/tresemme.png";
import p5 from "../../assets/Images/itc.png";
import p6 from "../../assets/Images/duroflex.jpg";


const Partner = () => {
  return (
    <div className='Sort'>
        {<img src={p1} className="partnerlogo" alt="logo" />}
        {<img src={p2} className="partnerlogo" alt="logo" />}
        {<img src={p3} className="partnerlogo" alt="logo" />}
        {<img src={p4} className="partnerlogo" alt="logo" />}
        {<img src={p5} className="partnerlogo" alt="logo" />}
        {<img src={p6} className="partnerlogo" alt="logo" />}
    </div>
  )
}

export default Partner