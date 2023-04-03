"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  //   why useCallback function
//   const handleClose = useCallback(() => {
//     if (disabled) {
//       return;
//     }
  
//     setShowModal(false);
//     setTimeout(() => {
//       onClose();
//     }, 300)
//   }, [onClose, disabled]);

  const handleClose = () => {
    if (disabled) {
        return;
      }
    
      setShowModal(false);
    //   wait the animation finished
      setTimeout(() => {
        onClose();
      }, 300)
  }

  const handleSubmit = () => {
    if (disabled) return;
    onSubmit();
  };

  const handlerSecondaryAction = () => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70

        w-full
        h-full
    "
    >
        {/* inner box */}
      <div
        className={`
            relative
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            h-full 
            lg:h-auto
            md:h-auto
            mx-auto
            bg-white
            shadow-lg
            outline-none
            rounded-lg

            translate
            duration-300
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* header */}
        <div
          className='
          translate
            p-6
            font-semibold
            text-lg
            text-center
            border-b-[2px]
            border-neutral-200
          '
        >
            <button onClick={handleClose} className="
                absolute
                left-4
                p-2
                rounded-full
                cursor-pointer
                hover:bg-neutral-200
            ">
                <IoMdClose size={18} />
            </button>
            {title}
        </div>
        {/* body */}
        <div className="
            relative
            p-6
        ">
            {body}
        </div>
        {/* footer */}
        <div className="
            flex
            flex-col
            p-6
            gap-2
        ">
            <div>
                {secondaryAction && secondaryActionLabel && (
                    <Button disabled={disabled} label={secondaryActionLabel} onClick={handlerSecondaryAction}  outline={true} />
                )}
                <Button disabled={disabled} onClick={handleSubmit} label={actionLabel} />
            </div>
            {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
