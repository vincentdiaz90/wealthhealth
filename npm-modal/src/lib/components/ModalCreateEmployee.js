import React from 'react'
import './ModalCreateEmployee.css'

export default function ModalCreateEmployee({ showModal, closeModal, response}) {

  const modalParameter = {
    "backgroundColor": "#EEEEEE",
    "borderRadius": 10,
    "boxShadow": "0 0 5px #1B1919",
    "color": "#1B1919",
    "fontSize": 18,
    "height": "fit-content",
    "padding": "20px 50px",
    "width": "fit-content"
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
