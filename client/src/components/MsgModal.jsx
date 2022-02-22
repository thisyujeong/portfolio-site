import React from 'react';
import { MsgModalContainer } from './MsgModal.style';
import { MdError } from 'react-icons/md';

function MsgModal(props) {
  let {
    heading = 'alert',
    message = '메세지가 설정되지 않았습니다.',
    submit = '확인',
    onModalHandler,
    onConfirmHandler,
  } = props;

  const onClose = () => {
    onModalHandler(false);
  };

  const onConfirm = () => {
    onConfirmHandler && onConfirmHandler(true);
    onClose();
  };

  const StateIcon = () => {
    if (props.success) {
      return <MdError className="success" />;
    } else if (props.warning) {
      return <MdError className="warning" />;
    } else if (props.error) {
      return <MdError className="error" />;
    }
    return <MdError className="success" />;
  };

  const ButtonType = () => {
    if (typeof submit == 'object') {
      const [cancel, confirm] = submit;
      return (
        <>
          <button className="default" onClick={onClose}>
            {cancel}
          </button>
          <button className="primary" onClick={onConfirm}>
            {confirm}
          </button>
        </>
      );
    } else if (typeof submit == 'string') {
      return (
        <>
          <button className="primary" onClick={onClose}>
            {submit}
          </button>
        </>
      );
    }
  };

  return (
    <MsgModalContainer className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <span className="state-icon">
            <StateIcon />
          </span>
          <span className="heading">{heading}</span>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <ButtonType />
        </div>
      </div>
      <div className="mask" onClick={onClose}></div>
    </MsgModalContainer>
  );
}

export default MsgModal;
