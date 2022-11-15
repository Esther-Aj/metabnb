import React from 'react'
import { Button } from 'react-bootstrap'

const Modal = ({setIsOpen}) => {
    
  return (
    <div onClick={()=> setIsOpen(false)} className="overlay">
    <div className='modal__container'>
<div className="modal-heading">
    <h3>Connect Wallet</h3>
  <Button className="btn btn-x" onClick={()=> setIsOpen(false)}><img src="images/x.svg" alt="" /></Button>
</div>
<div className="line"></div>
<div className="wallet-wrap">
<p>Choose your preferred wallet:</p>
<a className="wallet_link" href="">
    <div className="wallets">
        <img src="images/icon2.svg" alt="" />
        <h4>Metamask</h4>
        <img src="images/icon1.svg" alt="" />
    </div>
</a>
<a className="wallet_link" href="">
    <div className="wallets">
        <img src="images/icon3.svg" alt="" />
        <h4>WalletConnect</h4>
        <img src="images/icon1.svg" alt="" />
    </div>
</a>
</div>
    </div>
    </div>
  )
}

export default Modal