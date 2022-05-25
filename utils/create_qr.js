import qr from "qr.js";
import { createCanvas } from "canvas";

const createQr = (url) => {
  const qrcode = qr(url);

  const width = 200;
  const height = 200;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  const cells = qrcode.modules;

  const tileW = width / cells.length;
  const tileH = height / cells.length;

  for (let r = 0; r < cells.length; ++r) {
    const row = cells[r];
    for (let c = 0; c < row.length; ++c) {
      ctx.fillStyle = row[c] ? "#000" : "#fff";
      const w = Math.ceil((c + 1) * tileW) - Math.floor(c * tileW);
      const h = Math.ceil((r + 1) * tileH) - Math.floor(r * tileH);
      ctx.fillRect(Math.round(c * tileW), Math.round(r * tileH), w, h);
    }
  }

  return canvas.toDataURL("image/png");
};

export default createQr;
