Collectibles icon pack (162 ikon, pixel art, latar transparan)
- 32px/  : ukuran asli (kanvas 32x32, pixel-perfect)
- 64px/ 128px/ 256px/ : diperbesar 2x/4x/8x (nearest-neighbor, tetap tajam)
- spritesheet_32px.png / spritesheet_64px.png : grid 13 kolom, urut kiri-kanan atas-bawah

HTML:
<img src="icons/64px/collectible_001.png" width="32" height="32" class="pixel">

CSS (wajib agar pixel art tidak blur):
.pixel { image-rendering: pixelated; }
