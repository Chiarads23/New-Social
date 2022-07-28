import Button from "../Button";
import './index.css';

const Modal = ({modalTextContent, onModalConfirm, setModalVisibility}) => {
    const onConfirmBtn =() => {
        onModalConfirm();
        setModalVisibility(false);
    }

    const onCancelBtn = () => {
        setModalVisibility(false);
    }
    return (
        <div className="Modal">
            <p>{ modalTextContent }</p>
            <div className="Modal__btns">
                <Button onHandleClick={onCancelBtn} btnTextContent="Annulla" color= "rgb(189, 99, 126)" type="button"></Button>
                <Button onHandleClick={onConfirmBtn} btnTextContent="Conferma" color= "lightseagreen" type="button"></Button>
            </div>
        </div>
    )
}

export default Modal;