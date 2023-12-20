/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from "./Card.module.scss";

const Card = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, image, name, location, status } = x;
      
      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}>
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
              {(() => {
                if (status === "Dead") {
                  return (
                    <div className={` position-absolu te badge bg-danger ${styles.badge}`}>
                      {status}
                    </div>
                  );
                } else if (status === "Alive") {
                  return (
                    <div className={`position-absolute badge bg-success ${styles.badge}`}>
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div className={`position-absolute badge bg-secondary ${styles.badge}`}>
                      {status}
                    </div>
                  );
                }
                })()}
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No hay caracteres :/";
  }
  return (
    <div className="row">
      {display}
    </div>
  );
};

export default Card;
