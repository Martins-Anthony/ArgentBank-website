import React from 'react'
import './modal.css'

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
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
