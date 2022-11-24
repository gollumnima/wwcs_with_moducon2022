import { PropsWithChildren, useRef } from 'react';
import ReactPortal from './ReactPortal';
import styles from './modal.module.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const { modalContainer, modalContent, modalDim } = styles;

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<Props>) => {
  const modalRef = useRef(null);
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div ref={modalRef} className={modalContainer}>
        <div className={`${modalContent} border-solid rounded-md px-4 mx-4 bg-slate-800`}>
          <div className="flex flex-col">
            <span className="text-white items-center my-9">{children}</span>
            <button type="button" className="btn btn-accent mt-4" onClick={onClose}>닫기</button>
          </div>
        </div>
        <div
          className={modalDim}
          onClick={onClose}
          onKeyDown={onClose}
          role="button"
          tabIndex={0}
          aria-label="close modal"
        />
      </div>
    </ReactPortal>
  );
};
