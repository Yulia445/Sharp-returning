const sharp = require('sharp');

const inputImagePath = 'paket.jpg';
const outputImagePath = 'output.jpg';
const outputImagePath1 = 'output1.jpg';
const outputImagePath2 = 'output2.jpg';

sharp(inputImagePath)
  .rotate(90)
  .background
  .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error('Error saving image:', err);
      return;
    }
    console.log('Image saved:', info);
  })
  .rotate(180)
  .toFile(outputImagePath1, (err, info) => {
    if (err) {
      console.error('Error saving image:', err);
      return;
    }
    console.log('Image saved:', info);
  })
  .rotate(270)
  .toFile(outputImagePath2, (err, info) => {
    if (err) {
      console.error('Error saving image:', err);
      return;
    }
    console.log('Image saved:', info);
  });
  
  
