// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar/Navbar'
import QRCode from 'qrcode.react';
import './Qr.css'

const Qr = () => {
  return (
    <>
    <Navbar />
    <div className="qr-container">
        <h2>Scan QR Code to Pay</h2>
        {/* Generate QR code for payment */}
        <QRCode value="Your payment details here" />
        <p>Scan the QR code to proceed with payment.</p>
        <hr></hr>
        <p>If u want to leave the slot click here </p>
        <button>Release</button>
      </div>

    </>
  )
}

export default Qr
