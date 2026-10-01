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
    { src: 'C:/Users/HP/.gemini/antigravity-ide/brain/024f6433-49cd-4cbf-85b5-30d6a9d98e37/dusk_charging_bg_1790776931121.jpg', dest: 'dusk-charging-bg.jpg' }
  ];

  filesToSync.forEach(({ src, dest }) => {
    const destPath = path.join(publicDir, dest);
    if (fs.existsSync(src)) fs.copyFileSync(src, destPath);
  });

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

