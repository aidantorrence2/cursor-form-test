const fs = require('fs');
const path = require('path');

// Create the scripts directory if it doesn't exist
if (!fs.existsSync('scripts')) {
  fs.mkdirSync('scripts');
}

// Get the absolute path to the public directory
const publicDir = path.join(__dirname, '..', 'public');

// Array of image files needed for the NZ Photo Shoot page with descriptions
const imageFiles = [
  {
    name: 'nz-mountains.jpg',
    description: 'Hero background image showing epic New Zealand South Island mountains with a breathtaking, awe-inspiring quality. This should be a dramatic landscape that makes the viewer feel small against nature\'s grandeur.'
  },
  {
    name: 'nz-experience.jpg',
    description: 'Image showing a model in an epic New Zealand landscape, ideally capturing the feel of an elevated, artistic photo shoot experience.'
  },
  {
    name: 'nz-cta-bg.jpg',
    description: 'Background image for the call-to-action section, featuring another breathtaking New Zealand landscape that inspires viewers to take action.'
  },
  {
    name: 'nz-gallery-1.jpg',
    description: 'Gallery image showcasing a model in an ethereal setting across New Zealand\'s South Island. Should demonstrate the high-end nature of the photo experience.'
  },
  {
    name: 'nz-gallery-2.jpg',
    description: 'Gallery image showcasing a model in an ethereal setting across New Zealand\'s South Island. Should demonstrate the high-end nature of the photo experience.'
  },
  {
    name: 'nz-gallery-3.jpg',
    description: 'Gallery image showcasing a model in an ethereal setting across New Zealand\'s South Island. Should demonstrate the high-end nature of the photo experience.'
  },
  {
    name: 'nz-gallery-4.jpg',
    description: 'Gallery image showcasing a model in an ethereal setting across New Zealand\'s South Island. Should demonstrate the high-end nature of the photo experience.'
  },
  {
    name: 'nz-gallery-5.jpg',
    description: 'Gallery image showcasing a model in an ethereal setting across New Zealand\'s South Island. Should demonstrate the high-end nature of the photo experience.'
  },
  {
    name: 'nz-gallery-6.jpg',
    description: 'Gallery image showcasing a model in an ethereal setting across New Zealand\'s South Island. Should demonstrate the high-end nature of the photo experience.'
  },
];

// Create placeholder .txt files for each image
imageFiles.forEach(imageFile => {
  const placeholderPath = path.join(publicDir, `${imageFile.name}.placeholder.txt`);
  
  // Create a placeholder message
  const placeholderContent = 
`This is a placeholder for the image file: ${imageFile.name}

Description: ${imageFile.description}

Please replace this placeholder with an actual image file.

Recommended image specifications:
- High resolution (at least 1920px wide)
- Professional quality
- Dramatic lighting (dawn/dusk with golden hour warmth or moody atmospheric conditions)
- Elegant aesthetic (models posed to suggest power, grace, and harmony with nature)
- Epic scale (wide, sweeping landscapes showcasing the grandeur of New Zealand)
- Rich colors (deep blues, emerald greens, and golden tones)
- Strong visual contrast between the model and the environment`;

  // Write the placeholder file
  fs.writeFileSync(placeholderPath, placeholderContent);
  
  console.log(`Created placeholder for: ${imageFile.name}`);
});

console.log('\nPlaceholder files created in the public directory.');
console.log('Please replace these placeholder files with actual high-quality images that match the descriptions.'); 