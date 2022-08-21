import React, { useState } from "react";
import "./index.css";
import modalData from "../../Constants/modalData";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  const [counter, setCounter] = useState(0);
  let data = modalData[counter];
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={data.image} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p>{data.title}</p>
          </div>
          {counter != 3 && counter != 0 ? (
            <div className="btnContainer">
              <button
                className="btnPrimary"
                onClick={() => setCounter(counter + 1)}
              >
                <span className="bold">{data.button1}</span>
              </button>
              <button className="btnOutline" onClick={onClose}>
                <span className="bold">{data.button2}</span>
              </button>
            </div>
          ) : counter == 3 ? (
            <div className="btnContainer">
              <button className="btnPrimary" onClick={onClose}>
                <span className="bold">Hehehe</span>
              </button>
            </div>
          ) : (
            <div className="btnContainer">
              <button
                className="btnPrimary"
                onClick={() => setCounter(counter + 1)}
              >
                <span className="bold">{data.button1}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
