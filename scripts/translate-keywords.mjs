import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  'es': {
    nudgeMetaKeywords: "Nudge, mensajería segura, cifrado de extremo a extremo, aplicación de mensajería cifrada, mensajería opcionalmente automonitoreada, mensajería privada, comunicación segura, privacidad de datos, seguridad de mensajería, chat cifrado, aplicación de chat segura, mensajería centrada en la privacidad",
    brewhubMetaKeywords: "BrewHub, cursos de desarrollo de software, cursos de programación, capacitación para desarrolladores, educación en software, cursos de codificación, tutoriales de desarrollo, capacitación técnica, plataforma de aprendizaje de software, tutoriales de programación, cursos de desarrollo web, cursos de desarrollo móvil, capacitación en desarrollo backend",
    needletailKitMetaKeywords: "NeedleTailKit, SDK Swift, cifrado de extremo a extremo, mensajería segura, SDK iOS, SDK macOS, SDK Android, criptografía post-cuántica"
  },
  'fr': {
    nudgeMetaKeywords: "Nudge, messagerie sécurisée, chiffrement de bout en bout, application de messagerie chiffrée, messagerie optionnellement autosurveillée, messagerie privée, communication sécurisée, confidentialité des données, sécurité de la messagerie, chat chiffré, application de chat sécurisée, messagerie axée sur la confidentialité",
    brewhubMetaKeywords: "BrewHub, cours de développement logiciel, cours de programmation, formation de développeurs, éducation logicielle, cours de codage, tutoriels de développement, formation technique, plateforme d'apprentissage logiciel, tutoriels de programmation, cours de développement web, cours de développement mobile, formation en développement backend",
    needletailKitMetaKeywords: "NeedleTailKit, SDK Swift, chiffrement de bout en bout, messagerie sécurisée, SDK iOS, SDK macOS, SDK Android, cryptographie post-quantique"
  },
  'de': {
    nudgeMetaKeywords: "Nudge, sichere Messaging, Ende-zu-Ende-Verschlüsselung, verschlüsselte Messaging-App, optional selbstüberwachte Messaging, private Messaging, sichere Kommunikation, Datenschutz, Messaging-Sicherheit, verschlüsselter Chat, sichere Chat-App, datenschutzorientierte Messaging",
    brewhubMetaKeywords: "BrewHub, Softwareentwicklungskurse, Programmierkurse, Entwicklerschulung, Softwareausbildung, Programmierkurse, Entwicklungstutorials, technische Schulung, Software-Lernplattform, Programmiertutorials, Webentwicklungskurse, Mobile-Entwicklungskurse, Backend-Entwicklungsschulung",
    needletailKitMetaKeywords: "NeedleTailKit, Swift SDK, Ende-zu-Ende-Verschlüsselung, sichere Messaging, iOS SDK, macOS SDK, Android SDK, Post-Quanten-Kryptographie"
  },
  'zh-cn': {
    nudgeMetaKeywords: "Nudge, 安全消息, 端到端加密, 加密消息应用, 可选自监控消息, 私人消息, 安全通信, 数据隐私, 消息安全, 加密聊天, 安全聊天应用, 注重隐私的消息",
    brewhubMetaKeywords: "BrewHub, 软件开发课程, 编程课程, 开发者培训, 软件教育, 编码课程, 开发教程, 技术培训, 软件学习平台, 编程教程, Web开发课程, 移动开发课程, 后端开发培训",
    needletailKitMetaKeywords: "NeedleTailKit, Swift SDK, 端到端加密, 安全消息, iOS SDK, macOS SDK, Android SDK, 后量子密码学"
  },
  'zh-tw': {
    nudgeMetaKeywords: "Nudge, 安全訊息, 端到端加密, 加密訊息應用程式, 可選自監控訊息, 私人訊息, 安全通訊, 數據隱私, 訊息安全, 加密聊天, 安全聊天應用程式, 注重隱私的訊息",
    brewhubMetaKeywords: "BrewHub, 軟體開發課程, 程式設計課程, 開發者培訓, 軟體教育, 編碼課程, 開發教程, 技術培訓, 軟體學習平台, 程式設計教程, Web開發課程, 行動開發課程, 後端開發培訓",
    needletailKitMetaKeywords: "NeedleTailKit, Swift SDK, 端到端加密, 安全訊息, iOS SDK, macOS SDK, Android SDK, 後量子密碼學"
  },
  'ja': {
    nudgeMetaKeywords: "Nudge, 安全なメッセージング, エンドツーエンド暗号化, 暗号化メッセージングアプリ, オプションで自己監視可能なメッセージング, プライベートメッセージング, 安全な通信, データプライバシー, メッセージングセキュリティ, 暗号化チャット, 安全なチャットアプリ, プライバシー重視のメッセージング",
    brewhubMetaKeywords: "BrewHub, ソフトウェア開発コース, プログラミングコース, 開発者トレーニング, ソフトウェア教育, コーディングコース, 開発チュートリアル, 技術トレーニング, ソフトウェア学習プラットフォーム, プログラミングチュートリアル, Web開発コース, モバイル開発コース, バックエンド開発トレーニング",
    needletailKitMetaKeywords: "NeedleTailKit, Swift SDK, エンドツーエンド暗号化, 安全なメッセージング, iOS SDK, macOS SDK, Android SDK, ポスト量子暗号"
  },
  'pt': {
    nudgeMetaKeywords: "Nudge, mensagens seguras, criptografia de ponta a ponta, aplicativo de mensagens criptografadas, mensagens opcionalmente automonitoradas, mensagens privadas, comunicação segura, privacidade de dados, segurança de mensagens, chat criptografado, aplicativo de chat seguro, mensagens focadas em privacidade",
    brewhubMetaKeywords: "BrewHub, cursos de desenvolvimento de software, cursos de programação, treinamento de desenvolvedores, educação em software, cursos de codificação, tutoriais de desenvolvimento, treinamento técnico, plataforma de aprendizado de software, tutoriais de programação, cursos de desenvolvimento web, cursos de desenvolvimento móvel, treinamento em desenvolvimento backend",
    needletailKitMetaKeywords: "NeedleTailKit, SDK Swift, criptografia de ponta a ponta, mensagens seguras, SDK iOS, SDK macOS, SDK Android, criptografia pós-quântica"
  },
  'it': {
    nudgeMetaKeywords: "Nudge, messaggistica sicura, crittografia end-to-end, app di messaggistica crittografata, messaggistica opzionalmente automonitorata, messaggistica privata, comunicazione sicura, privacy dei dati, sicurezza della messaggistica, chat crittografata, app di chat sicura, messaggistica orientata alla privacy",
    brewhubMetaKeywords: "BrewHub, corsi di sviluppo software, corsi di programmazione, formazione per sviluppatori, educazione software, corsi di codifica, tutorial di sviluppo, formazione tecnica, piattaforma di apprendimento software, tutorial di programmazione, corsi di sviluppo web, corsi di sviluppo mobile, formazione in sviluppo backend",
    needletailKitMetaKeywords: "NeedleTailKit, SDK Swift, crittografia end-to-end, messaggistica sicura, SDK iOS, SDK macOS, SDK Android, crittografia post-quantistica"
  },
  'nl': {
    nudgeMetaKeywords: "Nudge, veilige berichten, end-to-end versleuteling, versleutelde berichtenapp, optioneel zelfgemonitorde berichten, privéberichten, veilige communicatie, gegevensprivacy, berichtenbeveiliging, versleutelde chat, veilige chat-app, privacygerichte berichten",
    brewhubMetaKeywords: "BrewHub, softwareontwikkelingscursussen, programmeercursussen, ontwikkelaarstraining, software-educatie, codeercursussen, ontwikkelingshandleidingen, technische training, software-leerplatform, programmeerhandleidingen, webontwikkelingscursussen, mobiele ontwikkelingscursussen, backend-ontwikkelingsopleiding",
    needletailKitMetaKeywords: "NeedleTailKit, Swift SDK, end-to-end versleuteling, veilige berichten, iOS SDK, macOS SDK, Android SDK, post-quantum cryptografie"
  },
  'ko': {
    nudgeMetaKeywords: "Nudge, 안전한 메시징, 엔드투엔드 암호화, 암호화된 메시징 앱, 선택적으로 자체 모니터링되는 메시징, 개인 메시징, 안전한 통신, 데이터 개인정보 보호, 메시징 보안, 암호화된 채팅, 안전한 채팅 앱, 개인정보 중심 메시징",
    brewhubMetaKeywords: "BrewHub, 소프트웨어 개발 과정, 프로그래밍 과정, 개발자 교육, 소프트웨어 교육, 코딩 과정, 개발 튜토리얼, 기술 교육, 소프트웨어 학습 플랫폼, 프로그래밍 튜토리얼, 웹 개발 과정, 모바일 개발 과정, 백엔드 개발 교육",
    needletailKitMetaKeywords: "NeedleTailKit, Swift SDK, 엔드투엔드 암호화, 안전한 메시징, iOS SDK, macOS SDK, Android SDK, 후양자 암호학"
  },
  'tr': {
    nudgeMetaKeywords: "Nudge, güvenli mesajlaşma, uçtan uca şifreleme, şifreli mesajlaşma uygulaması, isteğe bağlı kendi kendini izleyen mesajlaşma, özel mesajlaşma, güvenli iletişim, veri gizliliği, mesajlaşma güvenliği, şifreli sohbet, güvenli sohbet uygulaması, gizlilik odaklı mesajlaşma",
    brewhubMetaKeywords: "BrewHub, yazılım geliştirme kursları, programlama kursları, geliştirici eğitimi, yazılım eğitimi, kodlama kursları, geliştirme eğitimleri, teknik eğitim, yazılım öğrenme platformu, programlama eğitimleri, web geliştirme kursları, mobil geliştirme kursları, backend geliştirme eğitimi",
    needletailKitMetaKeywords: "NeedleTailKit, Swift SDK, uçtan uca şifreleme, güvenli mesajlaşma, iOS SDK, macOS SDK, Android SDK, kuantum sonrası kriptografi"
  },
  'he': {
    nudgeMetaKeywords: "Nudge, הודעות מאובטחות, הצפנה מקצה לקצה, אפליקציית הודעות מוצפנת, הודעות מנוטרות עצמית באופן אופציונלי, הודעות פרטיות, תקשורת מאובטחת, פרטיות נתונים, אבטחת הודעות, צ'אט מוצפן, אפליקציית צ'אט מאובטחת, הודעות ממוקדות פרטיות",
    brewhubMetaKeywords: "BrewHub, קורסי פיתוח תוכנה, קורסי תכנות, הכשרת מפתחים, חינוך תוכנה, קורסי קוד, מדריכי פיתוח, הכשרה טכנית, פלטפורמת למידת תוכנה, מדריכי תכנות, קורסי פיתוח אינטרנט, קורסי פיתוח נייד, הכשרה בפיתוח backend",
    needletailKitMetaKeywords: "NeedleTailKit, SDK Swift, הצפנה מקצה לקצה, הודעות מאובטחות, SDK iOS, SDK macOS, SDK Android, קריפטוגרפיה פוסט-קוונטית"
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
    // Update the keyword translations
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
