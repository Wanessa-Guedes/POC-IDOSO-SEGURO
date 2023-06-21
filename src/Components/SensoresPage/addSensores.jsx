import { useState } from 'react';
import { QrScannerComponent } from '../QrScanner/QrComponent';
import { Button } from './style';

export const SensoresController = () => {
    const [qrCode, setQrCode] = useState(false);
    const handleCamera = (valor) => {
        setQrCode(valor)
    }
  return(<>
    <Button onClick={() => handleCamera(true)}>Deseja adicionar um sensor de movimento?</Button>
    {
        qrCode ? <QrScannerComponent/> : <></>
    }
  </>)
};