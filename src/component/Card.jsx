import React from "react";

function Card({data}){
  console.log(data)
    return(
        <>
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.planName}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className={data.isUsers?"fas fa-check":"fas fa-times"}></i></span>{data.users}</li>
              <li><span className="fa-li"><i className={data.isStorage? "fas fa-check":"fas fa-times"}></i></span>{data.storage}GB Storage</li>
              <li><span className="fa-li"><i className={data.isPublicProject? "fas fa-check":"fas fa-times"}></i></span>{data.publicProject}</li>
              <li><span className="fa-li"><i className={data.isAcess? "fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
              <li className={data.isPrivateProject? "": "text-muted"}><span className="fa-li"><i className={data.isPrivateProject? "fas fa-check": "fas fa-times"}></i></span>{data.privateProject}</li>
              <li className={data.isSupport? "": "text-muted"}><span className="fa-li"><i className={data.isSupport? "fas fa-check": "fas fa-times"}></i></span>{data.support}</li>
              <li className={data.isDomain? "": "text-muted"}><span className="fa-li"><i className={data.isDomain? "fas fa-check": "fas fa-times"}></i></span>{data.domain}
              </li>
              <li className={data.isStatus? "": "text-muted"}><span className="fa-li"><i className={data.isStatus? "fas fa-check": "fas fa-times"}></i></span>{data.status}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
        
}

export default Card