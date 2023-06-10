import { useState } from 'react';
import QrScanner from 'react-qr-scanner';

export const QrScannerComponent = () => {
  const [qrCodeContent, setQrCodeContent] = useState('');

  const handleQrCodeScan = (data) => {
    if (data) {
      setQrCodeContent(data.text);
    }
  };

  const handleQrCodeError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <h1>Simulação de Acesso a Câmera de Segurança</h1>

      <QrScanner
        onScan={handleQrCodeScan}
        onError={handleQrCodeError}
        style={{ width: '100%' }}
      />

      <p>Conteúdo do QR Code: {qrCodeContent}</p>
    </div>
  );
};


