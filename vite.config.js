import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

// Auto-sync hero background, logo & network section images if available
try {
  const brainDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258';
  const publicDir = path.resolve(__dirname, 'public');

  const newLogoPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/a18d06ec-0127-4cfa-bbea-bca8124b1054/.user_uploaded/media_1790826967932.png';
  const newFooterLogoPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/a18d06ec-0127-4cfa-bbea-bca8124b1054/.user_uploaded/media_1790849005757.png';
  const newFranchiseChargerPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/a18d06ec-0127-4cfa-bbea-bca8124b1054/.user_uploaded/media_1790829427017.jpg';

  const filesToSync = [
    { src: newFooterLogoPath, dest: 'evoltek-footer-logo.png' },
    { src: newLogoPath, dest: 'evoltek-logo.png' },
    { src: newLogoPath, dest: 'evoltek-logo.jpg' },
    { src: newFranchiseChargerPath, dest: 'franchise-opportunity-charger.jpg' },
    { src: newFranchiseChargerPath, dest: 'franchise-daylight.jpg' },
    { src: `${brainDir}/ev_hero_bg_1790747123258.jpg`, dest: 'hero-bg.jpg' },
    { src: `${brainDir}/.user_uploaded/media_1790748000064.png`, dest: 'network-ref.png' },
    { src: `${brainDir}/.user_uploaded/media_1790749323514.png`, dest: 'network-carousel.png' },
    { src: `${brainDir}/.user_uploaded/media_1790758765631.jpg`, dest: 'daylight-hero-bg.jpg' },
    { src: `${brainDir}/.user_uploaded/media_1790758765631.jpg`, dest: 'hero-bg.jpg' },
    { src: `${brainDir}/.user_uploaded/media_1790749810205.jpg`, dest: 'daylight-ui-ref.jpg' },
    { src: `${brainDir}/.user_uploaded/media_1790750686533.png`, dest: 'cards-reference.png' },
    { src: `${brainDir}/.user_uploaded/media_1790752650011.png`, dest: 'hero-cards-detail.png' },
    { src: `${brainDir}/.user_uploaded/media_1790752922801.jpg`, dest: 'dc-fast-charger.jpg' },
    { src: `${brainDir}/.user_uploaded/media_1790752870969.png`, dest: 'stations-hubs-ref.png' },
    { src: `${brainDir}/.user_uploaded/media_1790754401270.png`, dest: 'highway-experience.png' },
    { src: `${brainDir}/.user_uploaded/media_1790755227223.png`, dest: 'highway-hub-panoramic.png' },
    { src: `${brainDir}/.user_uploaded/media_1790760569771.png`, dest: 'investment-models-ref.png' },
    { src: `${brainDir}/.user_uploaded/media_1790764379968.png`, dest: 'booking-cards.png' },
    { src: `${brainDir}/.user_uploaded/media_1790771966234.jpg`, dest: 'franchise-opportunity-bg.jpg' },
    { src: `${brainDir}/.user_uploaded/media_1790774097668.png`, dest: 'app-showcase-bg.png' },
    { src: `${brainDir}/.user_uploaded/media_1790774612845.png`, dest: 'phone-crop.png' },
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/.user_uploaded/media_1790777270198.png', dest: 'phone-app-mockup.png' },
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/highway_lounge_hub_1790777850223.jpg', dest: 'highway-lounge-hub.jpg' },
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/.user_uploaded/media_1790777339730.png', dest: 'highway-experience-exact.png' },
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/.user_uploaded/media_1790776057502.png', dest: 'ready-to-power-exact.png' },
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/suitable_charging_bg_1790776895877.jpg', dest: 'suitable-charging-bg.jpg' },
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/dusk_charging_bg_1790776931121.jpg', dest: 'dusk-charging-bg.jpg' },
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/68378a9f-5dce-4b6a-bb55-821b6310ce1b/.user_uploaded/media_1791011636430.png', dest: 'booking-launch-composite.png' }
  ];

  filesToSync.forEach(({ src, dest }) => {
    const destPath = path.join(publicDir, dest);
    if (fs.existsSync(src)) fs.copyFileSync(src, destPath);
  });

  // Pure Node PNG decoder/cropper/encoder to split the 4 process steps
  const uploadedBookingImg = 'C:/Users/HP/.gemini/antigravity-ide/brain/68378a9f-5dce-4b6a-bb55-821b6310ce1b/.user_uploaded/media_1791011636430.png';
  if (fs.existsSync(uploadedBookingImg)) {
    const srcBuf = fs.readFileSync(uploadedBookingImg);
    const crcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
      crcTable[n] = c;
    }
    const calcCrc = (buf) => {
      let c = 0xffffffff;
      for (let i = 0; i < buf.length; i++) {
        c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
      }
      return (c ^ 0xffffffff) >>> 0;
    };
    const makeChunk = (type, data) => {
      const len = Buffer.alloc(4);
      len.writeUInt32BE(data.length, 0);
      const typeBuf = Buffer.from(type, 'ascii');
      const crcBuf = Buffer.alloc(4);
      crcBuf.writeUInt32BE(calcCrc(Buffer.concat([typeBuf, data])), 0);
      return Buffer.concat([len, typeBuf, data, crcBuf]);
    };

    // Reusable pure Node PNG decoder
    const decodePNG = (buf) => {
      let offset = 8;
      let width = 0, height = 0, colorType = 6;
      let plteChunk = null;
      const idatParts = [];
      while (offset < buf.length) {
        const len = buf.readUInt32BE(offset);
        const type = buf.toString('ascii', offset + 4, offset + 8);
        const data = buf.subarray(offset + 8, offset + 8 + len);
        offset += 12 + len;
        if (type === 'IHDR') {
          width = data.readUInt32BE(0);
          height = data.readUInt32BE(4);
          colorType = data[9];
        } else if (type === 'PLTE') {
          plteChunk = data;
        } else if (type === 'IDAT') {
          idatParts.push(data);
        } else if (type === 'IEND') {
          break;
        }
      }

      if (width === 0 || height === 0 || idatParts.length === 0) return null;
      const inflated = zlib.inflateSync(Buffer.concat(idatParts));
      const bpp = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 3 ? 1 : 4;
      const scanlineLen = 1 + width * bpp;
      const rawRGBA = Buffer.alloc(width * height * 4);
      let prevScanline = Buffer.alloc(width * bpp);

      for (let y = 0; y < height; y++) {
        const filterType = inflated[y * scanlineLen];
        const currentLine = Buffer.alloc(width * bpp);
        for (let x = 0; x < width * bpp; x++) {
          const rawByte = inflated[y * scanlineLen + 1 + x];
          const a = x >= bpp ? currentLine[x - bpp] : 0;
          const b = prevScanline[x];
          const c = x >= bpp ? prevScanline[x - bpp] : 0;
          let val = 0;
          if (filterType === 0) val = rawByte;
          else if (filterType === 1) val = (rawByte + a) & 0xff;
          else if (filterType === 2) val = (rawByte + b) & 0xff;
          else if (filterType === 3) val = (rawByte + Math.floor((a + b) / 2)) & 0xff;
          else if (filterType === 4) {
            const p = a + b - c;
            const pa = Math.abs(p - a);
            const pb = Math.abs(p - b);
            const pc = Math.abs(p - c);
            const pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
            val = (rawByte + pr) & 0xff;
          }
          currentLine[x] = val;
        }
        prevScanline = currentLine;

        for (let x = 0; x < width; x++) {
          const dstIdx = (y * width + x) * 4;
          if (colorType === 6) {
            rawRGBA[dstIdx] = currentLine[x * 4];
            rawRGBA[dstIdx + 1] = currentLine[x * 4 + 1];
            rawRGBA[dstIdx + 2] = currentLine[x * 4 + 2];
            rawRGBA[dstIdx + 3] = currentLine[x * 4 + 3];
          } else if (colorType === 2) {
            rawRGBA[dstIdx] = currentLine[x * 3];
            rawRGBA[dstIdx + 1] = currentLine[x * 3 + 1];
            rawRGBA[dstIdx + 2] = currentLine[x * 3 + 2];
            rawRGBA[dstIdx + 3] = 255;
          } else if (colorType === 3 && plteChunk) {
            const palIdx = currentLine[x] * 3;
            rawRGBA[dstIdx] = plteChunk[palIdx];
            rawRGBA[dstIdx + 1] = plteChunk[palIdx + 1];
            rawRGBA[dstIdx + 2] = plteChunk[palIdx + 2];
            rawRGBA[dstIdx + 3] = 255;
          }
        }
      }
      return { width, height, data: rawRGBA };
    };

    const decodedSrc = decodePNG(srcBuf);
    if (decodedSrc) {
      const { width, height, data: rawRGBA } = decodedSrc;

      const encodePNG = (subRGBA, w, h) => {
        const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
        const ihdr = Buffer.alloc(13);
        ihdr.writeUInt32BE(w, 0);
        ihdr.writeUInt32BE(h, 4);
        ihdr[8] = 8;
        ihdr[9] = 6;
        const ihdrChunk = makeChunk('IHDR', ihdr);
        const scanlines = Buffer.alloc(h * (1 + w * 4));
        for (let y = 0; y < h; y++) {
          scanlines[y * (1 + w * 4)] = 0;
          subRGBA.copy(scanlines, y * (1 + w * 4) + 1, y * w * 4, (y + 1) * w * 4);
        }
        const idatChunk = makeChunk('IDAT', zlib.deflateSync(scanlines));
        const iendChunk = makeChunk('IEND', Buffer.alloc(0));
        return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
      };

      const cropWithCondition = (minXBound, maxXBound, minYBound, maxYBound, pixelFilter, outFilename) => {
        let minX = maxXBound, maxX = minXBound, minY = maxYBound, maxY = minYBound;
        let found = false;
        for (let y = minYBound; y < maxYBound; y++) {
          for (let x = minXBound; x < maxXBound; x++) {
            const idx = (y * width + x) * 4;
            const r = rawRGBA[idx];
            const g = rawRGBA[idx + 1];
            const b = rawRGBA[idx + 2];
            const a = rawRGBA[idx + 3];
            const isContent = a > 20 && !(r > 248 && g > 248 && b > 248);
            if (isContent && pixelFilter(x, y)) {
              found = true;
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        if (!found) {
          minX = minXBound; maxX = maxXBound; minY = minYBound; maxY = maxYBound;
        }
        const pad = 6;
        const cx = Math.max(0, minX - pad);
        const cy = Math.max(0, minY - pad);
        const cw = Math.min(width - cx, (maxX - minX) + pad * 2);
        const ch = Math.min(height - cy, (maxY - minY) + pad * 2);

        const sub = Buffer.alloc(cw * ch * 4);
        for (let row = 0; row < ch; row++) {
          const sy = cy + row;
          if (sy < 0 || sy >= height) continue;
          for (let col = 0; col < cw; col++) {
            const sx = cx + col;
            const dstOffset = (row * cw + col) * 4;
            if (sx < minXBound || sx >= maxXBound || sy < minYBound || sy >= maxYBound || !pixelFilter(sx, sy)) {
              // Transparent
              sub[dstOffset] = 0;
              sub[dstOffset + 1] = 0;
              sub[dstOffset + 2] = 0;
              sub[dstOffset + 3] = 0;
            } else {
              const srcOffset = (sy * width + sx) * 4;
              sub[dstOffset] = rawRGBA[srcOffset];
              sub[dstOffset + 1] = rawRGBA[srcOffset + 1];
              sub[dstOffset + 2] = rawRGBA[srcOffset + 2];
              sub[dstOffset + 3] = rawRGBA[srcOffset + 3];
            }
          }
        }

        if (outFilename === 'booking-step-03.png') {
          // Replace generic logo + "EVOLTEK" text on pump station with the official EVOLTEK circular logo mark
          // 1. Erase all remnants of generic icon and text "EVOLTEK" with seamless 3px edge feathering
          const pMinX = 124, pMaxX = 188;
          const pMinY = 48, pMaxY = 117;

          for (let y = pMinY; y <= pMaxY; y++) {
            const leftIdx = (y * cw + pMinX - 2) * 4;
            const rightIdx = (y * cw + pMaxX + 2) * 4;
            const lr = sub[leftIdx], lg = sub[leftIdx + 1], lb = sub[leftIdx + 2];
            const rr = sub[rightIdx], rg = sub[rightIdx + 1], rb = sub[rightIdx + 2];

            for (let x = pMinX; x <= pMaxX; x++) {
              const fx = (x - pMinX) / (pMaxX - pMinX || 1);
              const edgeDistX = Math.min(x - pMinX, pMaxX - x);
              const edgeDistY = Math.min(y - pMinY, pMaxY - y);
              const edgeDist = Math.min(edgeDistX, edgeDistY);
              const blendAlpha = Math.min(1, edgeDist / 3.5);

              const targetR = Math.round(lr * (1 - fx) + rr * fx);
              const targetG = Math.round(lg * (1 - fx) + rg * fx);
              const targetB = Math.round(lb * (1 - fx) + rb * fx);

              const idx = (y * cw + x) * 4;
              sub[idx] = Math.round(targetR * blendAlpha + sub[idx] * (1 - blendAlpha));
              sub[idx + 1] = Math.round(targetG * blendAlpha + sub[idx + 1] * (1 - blendAlpha));
              sub[idx + 2] = Math.round(targetB * blendAlpha + sub[idx + 2] * (1 - blendAlpha));
              sub[idx + 3] = 255;
            }
          }

          // 2. Extract official EVOLTEK circular logo emblem (leaf + "E" bolt + plug) and composite onto panel
          const logoPath = path.join(publicDir, 'evoltek-logo.png');
          if (fs.existsSync(logoPath)) {
            const decodedLogo = decodePNG(fs.readFileSync(logoPath));
            if (decodedLogo) {
              const lw = decodedLogo.width, lh = decodedLogo.height, ldata = decodedLogo.data;

              // Find horizontal gap separating circular emblem from text "EVOLTEK"
              let emblemBottomY = Math.round(lh * 0.65);
              for (let y = Math.round(lh * 0.45); y < Math.round(lh * 0.75); y++) {
                let rowContent = 0;
                for (let x = 0; x < lw; x++) {
                  const lidx = (y * lw + x) * 4;
                  const lr = ldata[lidx], lg = ldata[lidx + 1], lb = ldata[lidx + 2], la = ldata[lidx + 3];
                  if (la > 50 && !(lr > 240 && lg > 240 && lb > 240)) rowContent++;
                }
                if (rowContent <= 2) {
                  emblemBottomY = y;
                  break;
                }
              }

              // Bounding box of emblem
              let eMinX = lw, eMaxX = 0, eMinY = lh, eMaxY = 0;
              for (let y = 0; y < emblemBottomY; y++) {
                for (let x = 0; x < lw; x++) {
                  const lidx = (y * lw + x) * 4;
                  const lr = ldata[lidx], lg = ldata[lidx + 1], lb = ldata[lidx + 2], la = ldata[lidx + 3];
                  if (la > 50 && !(lr > 240 && lg > 240 && lb > 240)) {
                    if (x < eMinX) eMinX = x;
                    if (x > eMaxX) eMaxX = x;
                    if (y < eMinY) eMinY = y;
                    if (y > eMaxY) eMaxY = y;
                  }
                }
              }

              if (eMaxX > eMinX && eMaxY > eMinY) {
                const ew = eMaxX - eMinX + 1;
                const eh = eMaxY - eMinY + 1;

                const targetW = 42;
                const targetH = Math.round(targetW * (eh / ew));
                const destX = Math.round(156 - targetW / 2);
                const destY = Math.round(82 - targetH / 2);

                for (let dy = 0; dy < targetH; dy++) {
                  const destRow = destY + dy;
                  if (destRow < 0 || destRow >= ch) continue;
                  const sy = eMinY + (dy / targetH) * eh;
                  const sy0 = Math.floor(sy);
                  const sy1 = Math.min(lh - 1, sy0 + 1);
                  const fy = sy - sy0;

                  for (let dx = 0; dx < targetW; dx++) {
                    const destCol = destX + dx;
                    if (destCol < 0 || destCol >= cw) continue;
                    const sx = eMinX + (dx / targetW) * ew;
                    const sx0 = Math.floor(sx);
                    const sx1 = Math.min(lw - 1, sx0 + 1);
                    const fx = sx - sx0;

                    const idx00 = (sy0 * lw + sx0) * 4;
                    const idx01 = (sy0 * lw + sx1) * 4;
                    const idx10 = (sy1 * lw + sx0) * 4;
                    const idx11 = (sy1 * lw + sx1) * 4;

                    const getAlpha = (i) => {
                      const lr = ldata[i], lg = ldata[i + 1], lb = ldata[i + 2], la = ldata[i + 3];
                      if (la < 20) return 0;
                      const lum = (lr + lg + lb) / 3;
                      if (lum > 242) return 0;
                      return Math.min(la / 255, Math.max(0, (245 - lum) / 160));
                    };

                    const a00 = getAlpha(idx00);
                    const a01 = getAlpha(idx01);
                    const a10 = getAlpha(idx10);
                    const a11 = getAlpha(idx11);

                    const alpha = (a00 * (1 - fx) + a01 * fx) * (1 - fy) + (a10 * (1 - fx) + a11 * fx) * fy;
                    if (alpha < 0.04) continue;

                    const r = ((ldata[idx00] * (1 - fx) + ldata[idx01] * fx) * (1 - fy) +
                               (ldata[idx10] * (1 - fx) + ldata[idx11] * fx) * fy);
                    const g = ((ldata[idx00 + 1] * (1 - fx) + ldata[idx01 + 1] * fx) * (1 - fy) +
                               (ldata[idx10 + 1] * (1 - fx) + ldata[idx11 + 1] * fx) * fy);
                    const b = ((ldata[idx00 + 2] * (1 - fx) + ldata[idx01 + 2] * fx) * (1 - fy) +
                               (ldata[idx10 + 2] * (1 - fx) + ldata[idx11 + 2] * fx) * fy);

                    const dIdx = (destRow * cw + destCol) * 4;
                    sub[dIdx] = Math.round(r * alpha + sub[dIdx] * (1 - alpha));
                    sub[dIdx + 1] = Math.round(g * alpha + sub[dIdx + 1] * (1 - alpha));
                    sub[dIdx + 2] = Math.round(b * alpha + sub[dIdx + 2] * (1 - alpha));
                    sub[dIdx + 3] = 255;
                  }
                }
              }
            }
          }
        }

        const pngBuf = encodePNG(sub, cw, ch);
        fs.writeFileSync(path.join(publicDir, outFilename), pngBuf);
      };

      // Step 1: Dedicated Full High-Res Booking Phone Image
      const dedicatedStep1Img = 'C:/Users/HP/.gemini/antigravity-ide/brain/68378a9f-5dce-4b6a-bb55-821b6310ce1b/.user_uploaded/media_1791013163523.png';
      if (fs.existsSync(dedicatedStep1Img)) {
        fs.copyFileSync(dedicatedStep1Img, path.join(publicDir, 'booking-step-01.png'));
      } else {
        cropWithCondition(
          146, 445, 0, 350,
          (x, y) => !(x < 220 && y > 315),
          'booking-step-01.png'
        );
      }

      // Step 2: Top-Right (Agreement clipboard)
      cropWithCondition(
        540, 1024, 0, 335,
        (x, y) => true,
        'booking-step-02.png'
      );

      // Step 3: Bottom-Left (Charger & EV car)
      // Charger roof bevel is x <= 195 for y < 348. Phone is at x >= 195 & y < 348, and x >= 222 & y < 400
      cropWithCondition(
        0, 540, 315, 682,
        (x, y) => !(x >= 195 && y < 348) && !(x >= 222 && y < 400),
        'booking-step-03.png'
      );

      // Step 4: Bottom-Right (Track phone in hand)
      cropWithCondition(
        540, 1024, 335, 682,
        (x, y) => !(x < 665 && y < 355),
        'booking-step-04.png'
      );
    }
  }
} catch (e) {
  // Ignore sync error
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-hero-bg',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/franchise-opportunity-charger.jpg' || req.url?.startsWith('/franchise-opportunity-charger.jpg') || req.url === '/franchise-daylight.jpg' || req.url?.startsWith('/franchise-daylight.jpg')) {
            const uploadedCharger = 'C:/Users/HP/.gemini/antigravity-ide/brain/a18d06ec-0127-4cfa-bbea-bca8124b1054/.user_uploaded/media_1790829427017.jpg';
            if (fs.existsSync(uploadedCharger)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(uploadedCharger).pipe(res);
              return;
            }
          }
          if (req.url === '/evoltek-footer-logo.png' || req.url?.startsWith('/evoltek-footer-logo.png')) {
            const uploadedFooterLogo = 'C:/Users/HP/.gemini/antigravity-ide/brain/a18d06ec-0127-4cfa-bbea-bca8124b1054/.user_uploaded/media_1790849005757.png';
            if (fs.existsSync(uploadedFooterLogo)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(uploadedFooterLogo).pipe(res);
              return;
            }
          }
          if (req.url === '/evoltek-logo.png' || req.url?.startsWith('/evoltek-logo.png') || req.url === '/evoltek-logo.jpg' || req.url?.startsWith('/evoltek-logo.jpg')) {
            const uploadedLogo = 'C:/Users/HP/.gemini/antigravity-ide/brain/a18d06ec-0127-4cfa-bbea-bca8124b1054/.user_uploaded/media_1790826967932.png';
            if (fs.existsSync(uploadedLogo)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(uploadedLogo).pipe(res);
              return;
            }
          }
          if (req.url === '/daylight-hero-bg.jpg' || req.url?.startsWith('/daylight-hero-bg.jpg')) {
            const newHeroBg = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790758765631.jpg';
            if (fs.existsSync(newHeroBg)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(newHeroBg).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/daylight-hero-bg.jpg');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/hero-bg.jpg' || req.url?.startsWith('/hero-bg.jpg')) {
            const newHeroBg = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790758765631.jpg';
            if (fs.existsSync(newHeroBg)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(newHeroBg).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/hero-bg.jpg');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/highway-hub-panoramic.png' || req.url?.startsWith('/highway-hub-panoramic.png')) {
            const publicFile = path.resolve(__dirname, 'public/highway-hub-panoramic.png');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
            const fallback = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790755227223.png';
            if (fs.existsSync(fallback)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(fallback).pipe(res);
              return;
            }
          }
          if (req.url === '/investment-models-ref.png' || req.url?.startsWith('/investment-models-ref.png')) {
            const publicFile = path.resolve(__dirname, 'public/investment-models-ref.png');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
            const fallback = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790760569771.png';
            if (fs.existsSync(fallback)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(fallback).pipe(res);
              return;
            }
          }
          if (req.url === '/booking-cards.png' || req.url?.startsWith('/booking-cards.png')) {
            const publicFile = path.resolve(__dirname, 'public/booking-cards.png');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
            const fallback = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790764379968.png';
            if (fs.existsSync(fallback)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(fallback).pipe(res);
              return;
            }
          }
          if (req.url === '/franchise-opportunity-bg.jpg' || req.url?.startsWith('/franchise-opportunity-bg.jpg')) {
            const uploadedFile = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790771966234.jpg';
            if (fs.existsSync(uploadedFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(uploadedFile).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/franchise-opportunity-bg.jpg');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/franchise-daylight.jpg' || req.url?.startsWith('/franchise-daylight.jpg')) {
            const uploadedFile = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790772813095.jpg';
            if (fs.existsSync(uploadedFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(uploadedFile).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/franchise-daylight.jpg');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/app-showcase-bg.png' || req.url?.startsWith('/app-showcase-bg.png')) {
            const uploadedFile = 'C:/Users/HP/.gemini/antigravity-ide/brain/f96c1a1c-e7f1-4a25-9f04-4a081dd79258/.user_uploaded/media_1790774097668.png';
            if (fs.existsSync(uploadedFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(uploadedFile).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/app-showcase-bg.png');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/phone-app-mockup.png' || req.url?.startsWith('/phone-app-mockup.png')) {
            const uploadedFile = 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/.user_uploaded/media_1790777270198.png';
            if (fs.existsSync(uploadedFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(uploadedFile).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/phone-app-mockup.png');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/highway-lounge-hub.jpg' || req.url?.startsWith('/highway-lounge-hub.jpg')) {
            const brainImg = 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/highway_lounge_hub_1790777850223.jpg';
            if (fs.existsSync(brainImg)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(brainImg).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/highway-lounge-hub.jpg');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/highway-experience-exact.png' || req.url?.startsWith('/highway-experience-exact.png')) {
            const uploadedFile = 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/.user_uploaded/media_1790777339730.png';
            if (fs.existsSync(uploadedFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(uploadedFile).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/highway-experience-exact.png');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/ready-to-power-exact.png' || req.url?.startsWith('/ready-to-power-exact.png')) {
            const uploadedFile = 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/.user_uploaded/media_1790776057502.png';
            if (fs.existsSync(uploadedFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(uploadedFile).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/ready-to-power-exact.png');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/suitable-charging-bg.jpg' || req.url?.startsWith('/suitable-charging-bg.jpg')) {
            const brainImg = 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/suitable_charging_bg_1790776895877.jpg';
            if (fs.existsSync(brainImg)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(brainImg).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/suitable-charging-bg.jpg');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          if (req.url === '/dusk-charging-bg.jpg' || req.url?.startsWith('/dusk-charging-bg.jpg')) {
            const brainImg = 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/dusk_charging_bg_1790776931121.jpg';
            if (fs.existsSync(brainImg)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(brainImg).pipe(res);
              return;
            }
            const publicFile = path.resolve(__dirname, 'public/dusk-charging-bg.jpg');
            if (fs.existsSync(publicFile)) {
              res.setHeader('Content-Type', 'image/jpeg');
              fs.createReadStream(publicFile).pipe(res);
              return;
            }
          }
          next();
        });
      }
    }
  ],
});

