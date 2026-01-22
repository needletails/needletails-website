import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  'es': {
    nudgeFeature1Title: "Cifrado de Extremo a Extremo",
    nudgeFeature1Description: "Todos los mensajes cifrados por defecto con protección completa de privacidad.",
    nudgeFeature2Title: "Datos Automonitoreados",
    nudgeFeature2Description: "Control completo sobre sus datos sin persistencia de datos externa.",
    nudgeFeature3Title: "Comunicación Segura",
    nudgeFeature3Description: "Canales de mensajería privados con seguridad de nivel empresarial.",
    nudgeFeature4Title: "Alcance Global",
    nudgeFeature4Description: "Expanda su alcance globalmente sin riesgos de persistencia de datos.",
    nudgeContactButton: "Contáctenos",
    nudgeMetaTitle: "Nudge - Mensajería Segura con Cifrado de Extremo a Extremo | NeedleTails",
    nudgeMetaDescription: "Aplicación de mensajería con cifrado de extremo a extremo y datos automonitoreados con control completo de datos. Comunicación segura sin riesgos de persistencia de datos.",
    nudgeOgDescription: "Mensajería con cifrado de extremo a extremo y datos automonitoreados con control completo de datos y seguridad de nivel empresarial."
  },
  'fr': {
    nudgeFeature1Title: "Chiffrement de Bout en Bout",
    nudgeFeature1Description: "Tous les messages chiffrés par défaut avec une protection complète de la vie privée.",
    nudgeFeature2Title: "Données Autosurveillées",
    nudgeFeature2Description: "Contrôle complet sur vos données sans persistance de données externe.",
    nudgeFeature3Title: "Communication Sécurisée",
    nudgeFeature3Description: "Canaux de messagerie privés avec sécurité de niveau entreprise.",
    nudgeFeature4Title: "Portée Mondiale",
    nudgeFeature4Description: "Étendez votre portée mondialement sans risques de persistance des données.",
    nudgeContactButton: "Nous Contacter",
    nudgeMetaTitle: "Nudge - Messagerie Sécurisée avec Chiffrement de Bout en Bout | NeedleTails",
    nudgeMetaDescription: "Application de messagerie avec chiffrement de bout en bout et données autosurveillées avec contrôle complet des données. Communication sécurisée sans risques de persistance des données.",
    nudgeOgDescription: "Messagerie avec chiffrement de bout en bout et données autosurveillées avec contrôle complet des données et sécurité de niveau entreprise."
  },
  'de': {
    nudgeFeature1Title: "Ende-zu-Ende-Verschlüsselung",
    nudgeFeature1Description: "Alle Nachrichten standardmäßig verschlüsselt mit vollständigem Privatsphärenschutz.",
    nudgeFeature2Title: "Selbstüberwachte Daten",
    nudgeFeature2Description: "Vollständige Kontrolle über Ihre Daten ohne externe Datenpersistenz.",
    nudgeFeature3Title: "Sichere Kommunikation",
    nudgeFeature3Description: "Private Messaging-Kanäle mit Sicherheit auf Unternehmensebene.",
    nudgeFeature4Title: "Globale Reichweite",
    nudgeFeature4Description: "Erweitern Sie Ihre Reichweite global ohne Risiken der Datenpersistenz.",
    nudgeContactButton: "Kontaktieren Sie Uns",
    nudgeMetaTitle: "Nudge - Sichere Ende-zu-Ende-verschlüsselte Messaging | NeedleTails",
    nudgeMetaDescription: "Messaging-Anwendung mit Ende-zu-Ende-Verschlüsselung und selbstüberwachten Daten mit vollständiger Datenkontrolle. Sichere Kommunikation ohne Risiken der Datenpersistenz.",
    nudgeOgDescription: "Ende-zu-Ende-verschlüsseltes Messaging mit selbstüberwachten Daten, vollständiger Datenkontrolle und Sicherheit auf Unternehmensebene."
  },
  'zh-cn': {
    nudgeFeature1Title: "端到端加密",
    nudgeFeature1Description: "所有消息默认加密，提供完整的隐私保护。",
    nudgeFeature2Title: "自监控数据",
    nudgeFeature2Description: "完全控制您的数据，无外部数据持久化。",
    nudgeFeature3Title: "安全通信",
    nudgeFeature3Description: "具有企业级安全性的私有消息通道。",
    nudgeFeature4Title: "全球覆盖",
    nudgeFeature4Description: "在全球范围内扩展您的覆盖范围，无数据持久化风险。",
    nudgeContactButton: "联系我们",
    nudgeMetaTitle: "Nudge - 安全端到端加密消息 | NeedleTails",
    nudgeMetaDescription: "具有完整数据控制的自监控端到端加密消息应用程序。安全通信，无数据持久化风险。",
    nudgeOgDescription: "具有完整数据控制和企业级安全性的自监控端到端加密消息。"
  },
  'zh-tw': {
    nudgeFeature1Title: "端到端加密",
    nudgeFeature1Description: "所有訊息預設加密，提供完整的隱私保護。",
    nudgeFeature2Title: "自監控數據",
    nudgeFeature2Description: "完全控制您的數據，無外部數據持久化。",
    nudgeFeature3Title: "安全通訊",
    nudgeFeature3Description: "具有企業級安全性的私有訊息通道。",
    nudgeFeature4Title: "全球覆蓋",
    nudgeFeature4Description: "在全球範圍內擴展您的覆蓋範圍，無數據持久化風險。",
    nudgeContactButton: "聯繫我們",
    nudgeMetaTitle: "Nudge - 安全端到端加密訊息 | NeedleTails",
    nudgeMetaDescription: "具有完整數據控制的自監控端到端加密訊息應用程式。安全通訊，無數據持久化風險。",
    nudgeOgDescription: "具有完整數據控制和企業級安全性的自監控端到端加密訊息。"
  },
  'ja': {
    nudgeFeature1Title: "エンドツーエンド暗号化",
    nudgeFeature1Description: "すべてのメッセージがデフォルトで暗号化され、完全なプライバシー保護を提供。",
    nudgeFeature2Title: "自己監視データ",
    nudgeFeature2Description: "外部データ永続化なしでデータを完全に制御。",
    nudgeFeature3Title: "安全な通信",
    nudgeFeature3Description: "エンタープライズレベルのセキュリティを備えたプライベートメッセージングチャネル。",
    nudgeFeature4Title: "グローバルリーチ",
    nudgeFeature4Description: "データ永続化のリスクなしでグローバルにリーチを拡大。",
    nudgeContactButton: "お問い合わせ",
    nudgeMetaTitle: "Nudge - 安全なエンドツーエンド暗号化メッセージング | NeedleTails",
    nudgeMetaDescription: "完全なデータ制御を備えた自己監視エンドツーエンド暗号化メッセージングアプリケーション。データ永続化のリスクなしで安全な通信。",
    nudgeOgDescription: "完全なデータ制御とエンタープライズレベルのセキュリティを備えた自己監視エンドツーエンド暗号化メッセージング。"
  },
  'pt': {
    nudgeFeature1Title: "Criptografia de Ponta a Ponta",
    nudgeFeature1Description: "Todas as mensagens criptografadas por padrão com proteção completa de privacidade.",
    nudgeFeature2Title: "Dados Automonitorados",
    nudgeFeature2Description: "Controle completo sobre seus dados sem persistência de dados externa.",
    nudgeFeature3Title: "Comunicação Segura",
    nudgeFeature3Description: "Canais de mensagens privados com segurança de nível empresarial.",
    nudgeFeature4Title: "Alcance Global",
    nudgeFeature4Description: "Expanda seu alcance globalmente sem riscos de persistência de dados.",
    nudgeContactButton: "Entre em Contato",
    nudgeMetaTitle: "Nudge - Mensagens Seguras com Criptografia de Ponta a Ponta | NeedleTails",
    nudgeMetaDescription: "Aplicativo de mensagens com criptografia de ponta a ponta e dados automonitorados com controle completo de dados. Comunicação segura sem riscos de persistência de dados.",
    nudgeOgDescription: "Mensagens com criptografia de ponta a ponta e dados automonitorados com controle completo de dados e segurança de nível empresarial."
  },
  'it': {
    nudgeFeature1Title: "Crittografia End-to-End",
    nudgeFeature1Description: "Tutti i messaggi crittografati di default con protezione completa della privacy.",
    nudgeFeature2Title: "Dati Automonitorati",
    nudgeFeature2Description: "Controllo completo sui tuoi dati senza persistenza di dati esterna.",
    nudgeFeature3Title: "Comunicazione Sicura",
    nudgeFeature3Description: "Canali di messaggistica privati con sicurezza di livello aziendale.",
    nudgeFeature4Title: "Portata Globale",
    nudgeFeature4Description: "Espandi la tua portata globalmente senza rischi di persistenza dei dati.",
    nudgeContactButton: "Contattaci",
    nudgeMetaTitle: "Nudge - Messaggistica Sicura con Crittografia End-to-End | NeedleTails",
    nudgeMetaDescription: "Applicazione di messaggistica con crittografia end-to-end e dati automonitorati con controllo completo dei dati. Comunicazione sicura senza rischi di persistenza dei dati.",
    nudgeOgDescription: "Messaggistica con crittografia end-to-end e dati automonitorati con controllo completo dei dati e sicurezza di livello aziendale."
  },
  'nl': {
    nudgeFeature1Title: "End-to-End Versleuteling",
    nudgeFeature1Description: "Alle berichten standaard versleuteld met volledige privacybescherming.",
    nudgeFeature2Title: "Zelfgemonitorde Gegevens",
    nudgeFeature2Description: "Volledige controle over uw gegevens zonder externe gegevenspersistentie.",
    nudgeFeature3Title: "Veilige Communicatie",
    nudgeFeature3Description: "Privé berichtenkanalen met beveiliging op bedrijfsniveau.",
    nudgeFeature4Title: "Wereldwijde Bereik",
    nudgeFeature4Description: "Breid uw bereik wereldwijd uit zonder risico's op gegevenspersistentie.",
    nudgeContactButton: "Neem Contact Op",
    nudgeMetaTitle: "Nudge - Veilige End-to-End Versleutelde Berichten | NeedleTails",
    nudgeMetaDescription: "Berichtenapplicatie met end-to-end versleuteling en zelfgemonitorde gegevens met volledige gegevenscontrole. Veilige communicatie zonder risico's op gegevenspersistentie.",
    nudgeOgDescription: "End-to-end versleutelde berichten met zelfgemonitorde gegevens, volledige gegevenscontrole en beveiliging op bedrijfsniveau."
  },
  'ko': {
    nudgeFeature1Title: "엔드투엔드 암호화",
    nudgeFeature1Description: "모든 메시지가 기본적으로 암호화되어 완전한 개인정보 보호를 제공합니다.",
    nudgeFeature2Title: "자체 모니터링 데이터",
    nudgeFeature2Description: "외부 데이터 지속성 없이 데이터를 완전히 제어합니다.",
    nudgeFeature3Title: "안전한 통신",
    nudgeFeature3Description: "엔터프라이즈급 보안을 갖춘 개인 메시징 채널.",
    nudgeFeature4Title: "글로벌 리치",
    nudgeFeature4Description: "데이터 지속성 위험 없이 전 세계적으로 리치를 확장합니다.",
    nudgeContactButton: "문의하기",
    nudgeMetaTitle: "Nudge - 안전한 엔드투엔드 암호화 메시징 | NeedleTails",
    nudgeMetaDescription: "완전한 데이터 제어를 갖춘 자체 모니터링 엔드투엔드 암호화 메시징 애플리케이션. 데이터 지속성 위험 없이 안전한 통신.",
    nudgeOgDescription: "완전한 데이터 제어와 엔터프라이즈급 보안을 갖춘 자체 모니터링 엔드투엔드 암호화 메시징."
  },
  'tr': {
    nudgeFeature1Title: "Uçtan Uca Şifreleme",
    nudgeFeature1Description: "Tüm mesajlar varsayılan olarak tam gizlilik koruması ile şifrelenir.",
    nudgeFeature2Title: "Kendi Kendini İzleyen Veriler",
    nudgeFeature2Description: "Harici veri kalıcılığı olmadan verileriniz üzerinde tam kontrol.",
    nudgeFeature3Title: "Güvenli İletişim",
    nudgeFeature3Description: "Kurumsal düzeyde güvenlik ile özel mesajlaşma kanalları.",
    nudgeFeature4Title: "Küresel Erişim",
    nudgeFeature4Description: "Veri kalıcılığı riski olmadan küresel olarak erişiminizi genişletin.",
    nudgeContactButton: "Bize Ulaşın",
    nudgeMetaTitle: "Nudge - Güvenli Uçtan Uca Şifreli Mesajlaşma | NeedleTails",
    nudgeMetaDescription: "Tam veri kontrolü ile kendi kendini izleyen, uçtan uca şifreli mesajlaşma uygulaması. Veri kalıcılığı riski olmadan güvenli iletişim.",
    nudgeOgDescription: "Tam veri kontrolü ve kurumsal düzeyde güvenlik ile kendi kendini izleyen, uçtan uca şifreli mesajlaşma."
  },
  'he': {
    nudgeFeature1Title: "הצפנה מקצה לקצה",
    nudgeFeature1Description: "כל ההודעות מוצפנות כברירת מחדל עם הגנת פרטיות מלאה.",
    nudgeFeature2Title: "נתונים מנוטרים עצמית",
    nudgeFeature2Description: "שליטה מלאה על הנתונים שלכם ללא הישארות נתונים חיצונית.",
    nudgeFeature3Title: "תקשורת מאובטחת",
    nudgeFeature3Description: "ערוצי הודעות פרטיים עם אבטחה ברמת ארגון.",
    nudgeFeature4Title: "הישג גלובלי",
    nudgeFeature4Description: "הרחיבו את ההישג שלכם באופן גלובלי ללא סיכוני הישארות נתונים.",
    nudgeContactButton: "צרו קשר",
    nudgeMetaTitle: "Nudge - הודעות מאובטחות מוצפנות מקצה לקצה | NeedleTails",
    nudgeMetaDescription: "אפליקציית הודעות מוצפנת מקצה לקצה עם נתונים מנוטרים עצמית עם שליטה מלאה בנתונים. תקשורת מאובטחת ללא סיכוני הישארות נתונים.",
    nudgeOgDescription: "הודעות מוצפנות מקצה לקצה עם נתונים מנוטרים עצמית, שליטה מלאה בנתונים ואבטחה ברמת ארגון."
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
    // Merge translations
    Object.assign(localeData, translations[localeCode]);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(localeData, null, 2) + '\n', 'utf8');
    console.log(`✓ Translated ${localeCode}`);
  } else {
    console.log(`⚠ No translations found for ${localeCode}`);
  }
});

console.log('\n✅ Translation complete!');
