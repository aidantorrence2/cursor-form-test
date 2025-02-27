const fs = require('fs');
const path = require('path');

// Images to use for the gallery - only the 3 highlighted images
const galleryImages = [
  'DSC01969.jpg', // Already in public directory
  'DSC02652.jpg', // In Downloads folder
  'DSC02848.jpg'  // Already in public directory
];

console.log('Updating gallery images for NZ photo shoot page...');

// Directory paths
const downloadsDir = path.join(process.env.HOME, 'Downloads');
const publicDir = path.join(__dirname, '..', 'public');

// Make sure we have copies of all images in the public directory
galleryImages.forEach(image => {
  const targetPath = path.join(publicDir, image);
  
  // If the image doesn't exist in public, copy it from Downloads
  if (!fs.existsSync(targetPath)) {
    const sourcePath = path.join(downloadsDir, image);
    
    try {
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✅ Copied ${image} to public directory`);
      } else {
        console.error(`❌ Source file not found: ${sourcePath}`);
      }
    } catch (error) {
      console.error(`❌ Error copying ${image}: ${error.message}`);
    }
  } else {
    console.log(`✅ ${image} already exists in public directory`);
  }
});

// Map the images to gallery file names - only 3 images with no repeats
const galleryMapping = [
  { source: 'DSC01969.jpg', target: 'nz-gallery-1.jpg' },
  { source: 'DSC02652.jpg', target: 'nz-gallery-2.jpg' },
  { source: 'DSC02848.jpg', target: 'nz-gallery-3.jpg' }
];

// Create the gallery images
console.log('\nCreating gallery images...');
galleryMapping.forEach(mapping => {
  const sourcePath = path.join(publicDir, mapping.source);
  const targetPath = path.join(publicDir, mapping.target);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Created ${mapping.target} from ${mapping.source}`);
    } else {
      console.error(`❌ Source file not found: ${sourcePath}`);
    }
  } catch (error) {
    console.error(`❌ Error creating ${mapping.target}: ${error.message}`);
  }
});

// Remove any old gallery images that aren't needed anymore
for (let i = 4; i <= 6; i++) {
  const oldFile = path.join(publicDir, `nz-gallery-${i}.jpg`);
  if (fs.existsSync(oldFile)) {
    try {
      fs.unlinkSync(oldFile);
      console.log(`✅ Removed old gallery image: nz-gallery-${i}.jpg`);
    } catch (error) {
      console.error(`❌ Error removing old gallery image: ${error.message}`);
    }
  }
}

console.log('\nGallery images updated successfully!'); 