const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const photoDir = './public/photo';

async function compressImages() {
  console.log('🖼️  Memulai kompresi gambar...\n');

  // Compress og-preview.png to jpg
  const ogPreviewPath = path.join(photoDir, 'og-preview.png');
  const ogPreviewJpgPath = path.join(photoDir, 'og-preview.jpg');
  
  if (fs.existsSync(ogPreviewPath)) {
    const originalSize = fs.statSync(ogPreviewPath).size;
    
    await sharp(ogPreviewPath)
      .jpeg({ quality: 85 })
      .toFile(ogPreviewJpgPath);
    
    const newSize = fs.statSync(ogPreviewJpgPath).size;
    const saved = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ og-preview.png → og-preview.jpg`);
    console.log(`   ${(originalSize/1024).toFixed(0)} KB → ${(newSize/1024).toFixed(0)} KB (hemat ${saved}%)\n`);
  }

  // Compress other large jpeg files
  const files = fs.readdirSync(photoDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
  
  for (const file of files) {
    if (file === 'og-preview.jpg') continue;
    
    const filePath = path.join(photoDir, file);
    const originalSize = fs.statSync(filePath).size;
    
    // Only compress if > 100KB
    if (originalSize > 100 * 1024) {
      const tempPath = path.join(photoDir, `temp_${file}`);
      
      await sharp(filePath)
        .jpeg({ quality: 80 })
        .toFile(tempPath);
      
      const newSize = fs.statSync(tempPath).size;
      
      // Only replace if smaller
      if (newSize < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        const saved = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        console.log(`✅ ${file}: ${(originalSize/1024).toFixed(0)} KB → ${(newSize/1024).toFixed(0)} KB (hemat ${saved}%)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`⏭️  ${file}: sudah optimal`);
      }
    }
  }

  console.log('\n🎉 Kompresi selesai!');
}

compressImages().catch(console.error);
