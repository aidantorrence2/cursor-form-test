const fs = require('fs');
const path = require('path');

// Images available for use
const availableImages = [
  '90bf57557798a89209d87897f1b5b4cb.jpg', // Image 1
  '8b886eacb18ee10b57c55eb1f5b9a473.jpg', // Image 2
  'e78bda5a986e8e9c154ecfa2a6f94f31.jpg', // Image 3
  '6687ae7bccd04746c00e038b3db23ac8.jpg', // Image 4
  '9db83d417dbeeb237a31a2a3a68751b2.jpg'  // Image 5
];

// Target image names required by the code
const targetImages = [
  'nz-mountains.jpg',      // Hero background image - Will use Image 1
  'nz-experience.jpg',     // Experience section image - Will use Image 2
  'nz-cta-bg.jpg',         // CTA background image - Will use Image 3
  'nz-gallery-1.jpg',      // Gallery image 1 - Will use Image 4
  'nz-gallery-2.jpg',      // Gallery image 2 - Will use Image 5
  'nz-gallery-3.jpg',      // Gallery image 3 - Will reuse Image 1
  'nz-gallery-4.jpg',      // Gallery image 4 - Will reuse Image 2
  'nz-gallery-5.jpg',      // Gallery image 5 - Will reuse Image 3
  'nz-gallery-6.jpg'       // Gallery image 6 - Will reuse Image 4
];

// Map the available images to the target filenames
const imageMapping = [
  { source: availableImages[0], target: targetImages[0] }, // Hero background
  { source: availableImages[1], target: targetImages[1] }, // Experience section
  { source: availableImages[2], target: targetImages[2] }, // CTA background
  { source: availableImages[3], target: targetImages[3] }, // Gallery 1
  { source: availableImages[4], target: targetImages[4] }, // Gallery 2
  { source: availableImages[0], target: targetImages[5] }, // Gallery 3 (reuse image 1)
  { source: availableImages[1], target: targetImages[6] }, // Gallery 4 (reuse image 2)
  { source: availableImages[2], target: targetImages[7] }, // Gallery 5 (reuse image 3)
  { source: availableImages[3], target: targetImages[8] }  // Gallery 6 (reuse image 4)
];

// Directory paths
const downloadsDir = path.join(process.env.HOME, 'Downloads');
const publicDir = path.join(__dirname, '..', 'public');
const originalImagesDir = path.join(publicDir, 'original-images');

// Ensure the original-images directory exists
if (!fs.existsSync(originalImagesDir)) {
  fs.mkdirSync(originalImagesDir, { recursive: true });
}

// Copy the original files to original-images directory for reference
console.log('Copying original images to public/original-images...');
availableImages.forEach(image => {
  const sourcePath = path.join(downloadsDir, image);
  const targetPath = path.join(originalImagesDir, image);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Copied ${image} to original-images`);
    } else {
      console.error(`❌ Source file not found: ${sourcePath}`);
    }
  } catch (error) {
    console.error(`❌ Error copying ${image}: ${error.message}`);
  }
});

// Copy and rename images according to mapping
console.log('\nCopying and renaming images for NZ photo shoot page...');
imageMapping.forEach(mapping => {
  const sourcePath = path.join(downloadsDir, mapping.source);
  const targetPath = path.join(publicDir, mapping.target);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Created ${mapping.target} from ${mapping.source}`);
      
      // Remove placeholder file if it exists
      const placeholderPath = `${targetPath}.placeholder.txt`;
      if (fs.existsSync(placeholderPath)) {
        fs.unlinkSync(placeholderPath);
        console.log(`   Removed placeholder for ${mapping.target}`);
      }
    } else {
      console.error(`❌ Source file not found: ${sourcePath}`);
    }
  } catch (error) {
    console.error(`❌ Error creating ${mapping.target}: ${error.message}`);
  }
});

console.log('\nImage setup complete! Your NZ photo shoot page should now display the proper images.');
console.log('Note: We reused some images for the gallery where needed.'); 