import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Set Shift Assignment
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Set Shift Assignment</h2>
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Shift
            <span class="caret"></span></button>
            <div>
            <select>
              <option value="fruit">MedSurg 1: 8:00:00PM - 12:00:00AM (LPN)</option>
              <option value="vegetable">ICU 1: 10:00:00PM - 12:00:00AM (CNA)</option>
            </select>
          </div>
          </div>
          <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Nurse
            <span class="caret"></span></button>
            <div>
            <select>
              <option value="fruit">Tarra Burcher, LPN</option>
              <option value="vegetable">Reuben Cornelisse , CNA</option>
            </select>
            </div>
          </div>
            <button className="close-modal" onClick={toggleModal}></button>
            <button className="close-modal" onClick={toggleModal}>
              Save Assignment
            </button>
          </div>
        </div>
      )}
    </>
  );
}