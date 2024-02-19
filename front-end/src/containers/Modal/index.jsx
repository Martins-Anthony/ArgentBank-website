import React from 'react'
import './styleModal.css'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <div className="modal-content-message">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
