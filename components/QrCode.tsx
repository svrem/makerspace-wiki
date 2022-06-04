// import QRCode from "react-qr-code";
// import createQr from "../utils/create_qr";
import { Backdrop } from "@mui/material";
import { useEffect } from "react";
// @ts-ignore
import qr from "qr.js";

type Props = {
  url: string;
  setQrOpen: React.Dispatch<React.SetStateAction<boolean>>;
  qrOpen: boolean;
  label: string;
};

const width = 300;
const height = 300;
const padding = 50;

const QrCode = ({ url, setQrOpen, qrOpen, label }: Props) => {
  useEffect(() => {
    const canvas = document.getElementById("qr-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const qrcode = qr(url);
      const cells = qrcode.modules;

      const tileW = (width - padding) / cells.length;
      const tileH = (height - padding) / cells.length;

      for (let r = 0; r < cells.length; ++r) {
        const row = cells[r];
        for (let c = 0; c < row.length; ++c) {
          ctx.fillStyle = row[c] ? "#000" : "#fff";
          const w = Math.ceil((c + 1) * tileW) - Math.floor(c * tileW);
          const h = Math.ceil((r + 1) * tileH) - Math.floor(r * tileH);
          ctx.fillRect(
            Math.round(c * tileW) + padding / 2,
            Math.round(r * tileH) + padding / 2,
            w,
            h
          );
        }
      }

      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(label, width / 2, height - 2);
    }
  }, []);

  return (
    <>
      <style jsx>
        {`
          .container {
            padding: 1%;
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
          <canvas
            onClick={(e) => {
              // download as image
              const canvas = document.getElementById(
                "qr-canvas"
              ) as HTMLCanvasElement;
              const link = document.createElement("a");
              link.download = "qr.png";
              link.href = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
              link.click();
            }}
            className="qrcode"
            id="qr-canvas"
            width={width}
            height={height}
          />
        </div>
      </Backdrop>
    </>
  );
};

export default QrCode;
