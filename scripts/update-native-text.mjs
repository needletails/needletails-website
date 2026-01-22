import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  'es': { swiftNative: "Nativo" },
  'fr': { swiftNative: "Natif" },
  'de': { swiftNative: "Native" },
  'zh-cn': { swiftNative: "原生" },
  'zh-tw': { swiftNative: "原生" },
  'ja': { swiftNative: "ネイティブ" },
  'pt': { swiftNative: "Nativo" },
  'it': { swiftNative: "Native" },
  'nl': { swiftNative: "Native" },
  'ko': { swiftNative: "네이티브" },
  'tr': { swiftNative: "Native" },
  'he': { swiftNative: "Native" }
};

const localesDir = path.join(__dirname, '../i18n/locales');

// Get all locale files
const localeFiles = fs.readdirSync(localesDir).filter(file => file.endsWith('.json') && file !== 'en.json');

// Process each locale file
localeFiles.forEach(file => {
  const localeCode = file.replace('.json', '');
  const filePath = path.join(localesDir, file);
  const localeData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (translations[localeCode]) {
    // Update the swiftNative key
    localeData.swiftNative = translations[localeCode].swiftNative;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(localeData, null, 2) + '\n', 'utf8');
    console.log(`✓ Updated ${localeCode}`);
  } else {
    console.log(`⚠ No translation found for ${localeCode}`);
  }
});

console.log('\n✅ Update complete!');
