import { useState } from 'react';
import { QrScannerComponent } from './QrComponent';
import { Button } from './style';

export const CameraPage = () => {
    const [qrCode, setQrCode] = useState(false);
    const handleCamera = (valor) => {
        setQrCode(valor)
    }
  return(<>
    <Button onClick={() => handleCamera(true)}>Deseja adicionar uma câmera?</Button>
    {
        qrCode ? <QrScannerComponent/> : <></>
    }
  </>)
};


