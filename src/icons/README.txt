Icon pack "icones" (52 ikon, pixel art, latar transparan)
- 16px/  : ukuran asli (pixel-perfect)
- 32px/ 64px/ 128px/ : diperbesar 2x/4x/8x (nearest-neighbor, tetap tajam)
- spritesheet_16px.png / spritesheet_32px.png : grid 8 kolom, urut kiri-kanan atas-bawah

HTML:
<img src="icons/64px/icon_01.png" width="32" height="32" class="pixel">

CSS (wajib agar pixel art tidak blur):
.pixel { image-rendering: pixelated; }
