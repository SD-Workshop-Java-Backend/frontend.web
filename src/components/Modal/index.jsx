import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({
  isOpen,
  onclickConfirm,
  infoTexte,
  Icon,
  type,
  AltText
}) {
  
  
  if (isOpen) {
    return ReactDOM.createPortal(
      <main className=" flex items-center justify-center absolute  top-0 w-screen h-screen  bg-black/[.7] backdrop-blur-sm ">
        <div  className=" flex flex-col items-center justify-around  w-96 h-2/5 bg-white rounded-md ">
          <header className="flex flex-col items-center justify-center w-full h-2/5 p-3 gap-2">
            <div className={`flex  ${type ? "" : " rounded-full border-4 border-lime-600 "}`}>{Icon}</div>
            <span className="flex font-semibold text-xl">{infoTexte}</span>
          </header>

            <span  className="w-3/4 text-sm from-neutral-400 font-light text-center">{AltText}</span>

          <button className={`w-2/3 h-10 text-white rounded-lg  ${type ? "bg-red-600":"bg-lime-600"}`} onClick={onclickConfirm}>Confirmar</button>
        </div>
      </main>,document.getElementById('modal')
    );
  }
}
