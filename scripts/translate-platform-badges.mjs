import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  'es': {
    badgeMobile: "Móvil",
    badgeWeb: "Web",
    badgeServer: "Servidor"
  },
  'fr': {
    badgeMobile: "Mobile",
    badgeWeb: "Web",
    badgeServer: "Serveur"
  },
  'de': {
    badgeMobile: "Mobil",
    badgeWeb: "Web",
    badgeServer: "Server"
  },
  'zh-cn': {
    badgeMobile: "移动",
    badgeWeb: "Web",
    badgeServer: "服务器"
  },
  'zh-tw': {
    badgeMobile: "行動",
    badgeWeb: "Web",
    badgeServer: "伺服器"
  },
  'ja': {
    badgeMobile: "モバイル",
    badgeWeb: "Web",
    badgeServer: "サーバー"
  },
  'pt': {
    badgeMobile: "Mobile",
    badgeWeb: "Web",
    badgeServer: "Servidor"
  },
  'it': {
    badgeMobile: "Mobile",
    badgeWeb: "Web",
    badgeServer: "Server"
  },
  'nl': {
    badgeMobile: "Mobiel",
    badgeWeb: "Web",
    badgeServer: "Server"
  },
  'ko': {
    badgeMobile: "모바일",
    badgeWeb: "웹",
    badgeServer: "서버"
  },
  'tr': {
    badgeMobile: "Mobil",
    badgeWeb: "Web",
    badgeServer: "Sunucu"
  },
  'he': {
    badgeMobile: "נייד",
    badgeWeb: "אינטרנט",
    badgeServer: "שרת"
  }
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
    // Add the badge translations after businessOverviewTitle
    const keys = Object.keys(localeData);
    const titleIndex = keys.indexOf('businessOverviewTitle');
    
    if (titleIndex !== -1) {
      // Insert the new keys after businessOverviewTitle
      const newData = {};
      let inserted = false;
      
      for (const key of keys) {
        newData[key] = localeData[key];
        if (key === 'businessOverviewTitle' && !inserted) {
          newData.badgeMobile = translations[localeCode].badgeMobile;
          newData.badgeWeb = translations[localeCode].badgeWeb;
          newData.badgeServer = translations[localeCode].badgeServer;
          inserted = true;
        }
      }
      
      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(newData, null, 2) + '\n', 'utf8');
      console.log(`✓ Translated ${localeCode}`);
    } else {
      // Fallback: just add the keys
      Object.assign(localeData, translations[localeCode]);
      fs.writeFileSync(filePath, JSON.stringify(localeData, null, 2) + '\n', 'utf8');
      console.log(`✓ Translated ${localeCode} (fallback)`);
    }
  } else {
    console.log(`⚠ No translations found for ${localeCode}`);
  }
});

console.log('\n✅ Translation complete!');
