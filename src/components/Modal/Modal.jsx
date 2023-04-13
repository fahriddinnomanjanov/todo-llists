import React from 'react'

const Modal = ({onClose, children}) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)"}}>      
        <div styles={{position: "relative", maxWidth: "600px", maxHeight: "600px"}}>
            <span style={{ position: 'absolute', top: "15px", right: "10px", cursor: "pointer", fontWeight: "bold"}} onClick={onClose}>&#215;</span>
            {children}
        </div>
    </div>
  )
}

export default Modal