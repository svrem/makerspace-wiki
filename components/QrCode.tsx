// import QRCode from "react-qr-code";
import createQr from "../utils/create_qr";
import { Backdrop } from "@mui/material";

type Props = {
  url: string;
  setQrOpen: React.Dispatch<React.SetStateAction<boolean>>;
  qrOpen: boolean;
};

const QrCode = ({ url, setQrOpen, qrOpen }: Props) => {
  return (
    <>
      <style jsx>
        {`
          .container {
            padding: 50px;
            border-radius: 25px;
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
            aspect-ratio: 1;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .qrcode {
            width: 100%;
            aspect-ratio: 1;
          }
        `}
      </style>
      <Backdrop
        open={qrOpen}
        onClick={(e) => setQrOpen(false)}
        sx={{
          zIndex: 10,
        }}
      >
        <div className="container">
          <img alt="Qr Code" src={createQr(url)} className="qrcode" />
        </div>
      </Backdrop>
    </>
  );
};

export default QrCode;
