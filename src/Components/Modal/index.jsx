import React, { useState } from "react";
import nft from "./nft.jpg";
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
        <img src={nft} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p>{data.title}</p>
          </div>
          {counter != 2 ? (
            <div className="btnContainer">
              <button
                className="btnPrimary"
                onClick={() => setCounter(counter + 1)}
              >
                <span className="bold">YES</span>, I love NFT's
              </button>
              <button
                className="btnOutline"
                onClick={() => setCounter(counter - 1)}
              >
                <span className="bold">NO</span>, thanks
              </button>
            </div>
          ) : (
            <div className="btnContainer">
              <button
                className="btnOutline"
                onClick={() => setCounter(counter - 1)}
              >
                <span className="bold">NO</span>, thanks
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
