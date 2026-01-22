import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  'es': { nudgeContactButton: "Ver Nudge" },
  'fr': { nudgeContactButton: "Découvrir Nudge" },
  'de': { nudgeContactButton: "Nudge Ansehen" },
  'zh-cn': { nudgeContactButton: "查看 Nudge" },
  'zh-tw': { nudgeContactButton: "查看 Nudge" },
  'ja': { nudgeContactButton: "Nudge を確認" },
  'pt': { nudgeContactButton: "Ver Nudge" },
  'it': { nudgeContactButton: "Scopri Nudge" },
  'nl': { nudgeContactButton: "Bekijk Nudge" },
  'ko': { nudgeContactButton: "Nudge 확인" },
  'tr': { nudgeContactButton: "Nudge'u İncele" },
  'he': { nudgeContactButton: "בדוק את Nudge" }
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
    // Update the button text
    localeData.nudgeContactButton = translations[localeCode].nudgeContactButton;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(localeData, null, 2) + '\n', 'utf8');
    console.log(`✓ Updated ${localeCode}`);
  } else {
    console.log(`⚠ No translation found for ${localeCode}`);
  }
});

console.log('\n✅ Update complete!');
