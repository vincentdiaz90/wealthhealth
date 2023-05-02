import React from 'react'
import './ModalCreateEmployee.css'

export default function ModalCreateEmployee({ showModal, closeModal, response}) {

  const modalParameter = {
    "backgroundColor": "#f1f1f1",
    "borderRadius": 10 + "px",
    "color": "#222",
    "fontSize": 22 + "px",
    "padding": "20px 50px",
}

  return (
    <>
        {
            showModal &&
            <div className="modal" style={modalParameter}>
                <div className="modal-content">
                    <span className="modal-close-icon" onClick={closeModal}>✖</span>
                    <span>{response}</span>
                </div>
            </div>
        }
    </>
  )
}
