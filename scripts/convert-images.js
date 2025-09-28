import sharp from 'sharp';
import path from 'path';

const images = [
  'hero-mobile@1x.jpg',
  'hero-mobile@2x.jpg',
  'hero-desktop@1x.jpg',
  'hero-desktop@2x.jpg',
  'promo-desktop@1x.jpg',
  'promo-desktop@2x.jpg',
];

const inputDir = './public/images';
const outputDir = './public/images';

images.forEach(async (image) => {
  const inputPath = path.join(inputDir, image);
  const outputPath = path.join(outputDir, image.replace('.jpg', '.webp'));

  await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);

  console.log(`Converted ${image} to WebP`);
});
