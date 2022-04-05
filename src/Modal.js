const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <>
            <div className="overlay" onClick={onClose} />
            <div className="modal">
                <button onClick={onClose}>close button</button>
            </div>
        </>
    );
}

export default Modal;