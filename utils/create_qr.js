import qr from "qr.js";
import { createCanvas } from "canvas";

const createQr = (url, label) => {
  const qrcode = qr(url);

  const width = 300;
  const height = 300;
  const padding = 50

  const qr_canvas = createCanvas(width-padding, height-padding);
  const qr_ctx = qr_canvas.getContext("2d");

  const cells = qrcode.modules;

  const tileW = (width-padding) / cells.length;
  const tileH = (height-padding) / cells.length;

  for (let r = 0; r < cells.length; ++r) {
    const row = cells[r];
    for (let c = 0; c < row.length; ++c) {
      qr_ctx.fillStyle = row[c] ? "#000" : "#fff";
      const w = Math.ceil((c + 1) * tileW) - Math.floor(c * tileW);
      const h = Math.ceil((r + 1) * tileH) - Math.floor(r * tileH);
      qr_ctx.fillRect(Math.round(c * tileW), Math.round(r * tileH), w, h);
    }
  }

  const final_canvas = createCanvas(width, height);
  const final_ctx = final_canvas.getContext("2d");

  final_ctx.fillStyle = "#fff";
  final_ctx.fillRect(0, 0, width, height);

  final_ctx.drawImage(qr_canvas, padding/2, padding/2, width-padding, height-padding);
  final_ctx.font = "bold 20px Arial";
  final_ctx.fillStyle = "#000";
  final_ctx.textAlign = "center";
  final_ctx.fillText(label, width/2,height-2  );

  // return qr_canvas.toDataURL("image/png");
  return final_canvas.toDataURL("image/png"); 
};

export default createQr;
