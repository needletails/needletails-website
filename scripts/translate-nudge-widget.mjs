import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  'es': {
    nudgeWidgetTitle: "Seguro con Nudge",
    nudgeWidgetCTA: "Más Información",
    nudgeWidgetLogoAlt: "Logo de Nudge"
  },
  'fr': {
    nudgeWidgetTitle: "Sécurisé avec Nudge",
    nudgeWidgetCTA: "En Savoir Plus",
    nudgeWidgetLogoAlt: "Logo Nudge"
  },
  'de': {
    nudgeWidgetTitle: "Sicher mit Nudge",
    nudgeWidgetCTA: "Mehr Erfahren",
    nudgeWidgetLogoAlt: "Nudge Logo"
  },
  'zh-cn': {
    nudgeWidgetTitle: "使用 Nudge 保护",
    nudgeWidgetCTA: "了解更多",
    nudgeWidgetLogoAlt: "Nudge 标志"
  },
  'zh-tw': {
    nudgeWidgetTitle: "使用 Nudge 保護",
    nudgeWidgetCTA: "了解更多",
    nudgeWidgetLogoAlt: "Nudge 標誌"
  },
  'ja': {
    nudgeWidgetTitle: "Nudge で安全に",
    nudgeWidgetCTA: "詳細を見る",
    nudgeWidgetLogoAlt: "Nudge ロゴ"
  },
  'pt': {
    nudgeWidgetTitle: "Seguro com Nudge",
    nudgeWidgetCTA: "Saiba Mais",
    nudgeWidgetLogoAlt: "Logo do Nudge"
  },
  'it': {
    nudgeWidgetTitle: "Sicuro con Nudge",
    nudgeWidgetCTA: "Scopri di Più",
    nudgeWidgetLogoAlt: "Logo Nudge"
  },
  'nl': {
    nudgeWidgetTitle: "Veilig met Nudge",
    nudgeWidgetCTA: "Meer Informatie",
    nudgeWidgetLogoAlt: "Nudge Logo"
  },
  'ko': {
    nudgeWidgetTitle: "Nudge로 안전하게",
    nudgeWidgetCTA: "자세히 보기",
    nudgeWidgetLogoAlt: "Nudge 로고"
  },
  'tr': {
    nudgeWidgetTitle: "Nudge ile Güvenli",
    nudgeWidgetCTA: "Daha Fazla Bilgi",
    nudgeWidgetLogoAlt: "Nudge Logosu"
  },
  'he': {
    nudgeWidgetTitle: "מאובטח עם Nudge",
    nudgeWidgetCTA: "מידע נוסף",
    nudgeWidgetLogoAlt: "לוגו Nudge"
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
    // Update the widget keys
    Object.keys(translations[localeCode]).forEach(key => {
      localeData[key] = translations[localeCode][key];
    });
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(localeData, null, 2) + '\n', 'utf8');
    console.log(`✓ Translated ${localeCode}`);
  } else {
    console.log(`⚠ No translations found for ${localeCode}`);
  }
});

console.log('\n✅ Translation complete!');
