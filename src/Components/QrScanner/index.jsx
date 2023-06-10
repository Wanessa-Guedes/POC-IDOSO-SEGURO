import { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { QrScannerComponent } from './QrComponent';

export const CameraPage = () => {
    const [qrCode, setQrCode] = useState(false);
    const handleCamera = (valor) => {
        setQrCode(valor)
    }
  return(<>
    <button onClick={() => handleCamera(true)}>Deseja adicionar uma câmera?</button>
    {
        qrCode ? <QrScannerComponent/> : <></>
    }
  </>)
};


