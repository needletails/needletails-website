import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  'es': {
    nudgeTitle: "Su Aplicación de Mensajería con Cifrado de Extremo a Extremo y Datos Opcionalmente Automonitoreados",
    nudgeDescription: "¿Le preocupa la seguridad en el panorama digital actual? ¿Desea un canal de comunicación seguro pero se siente inseguro sobre quién tiene acceso a sus datos? Incluso con cifrado de extremo a extremo, las preocupaciones sobre el almacenamiento de datos pueden persistir. Nudge está aquí para proporcionar la solución que necesita. Con Nudge, tiene control completo sobre sus datos, permitiéndole opcionalmente gestionarlos de forma segura o expandir su alcance globalmente sin el riesgo de persistencia de datos. ¡Contáctenos hoy para obtener más información sobre cómo puede configurar su propia instancia y disfrutar de la tranquilidad con comunicación segura!",
    nudgeWidgetDescription: "Opcionalmente automonitoreado, mensajería con cifrado de extremo a extremo con control completo de datos.",
    nudgeFeature2Title: "Datos Opcionalmente Automonitoreados",
    nudgeFeature2Description: "Control completo sobre sus datos con automonitoreo opcional y sin persistencia de datos externa.",
    nudgeMetaDescription: "Aplicación de mensajería con cifrado de extremo a extremo y datos opcionalmente automonitoreados con control completo de datos. Comunicación segura sin riesgos de persistencia de datos.",
    nudgeOgDescription: "Mensajería con cifrado de extremo a extremo y datos opcionalmente automonitoreados con control completo de datos y seguridad de nivel empresarial."
  },
  'fr': {
    nudgeTitle: "Votre Application de Messagerie avec Chiffrement de Bout en Bout et Données Optionnellement Autosurveillées",
    nudgeDescription: "Vous vous inquiétez de la sécurité dans le paysage numérique d'aujourd'hui ? Vous voulez un canal de communication sécurisé mais vous vous sentez incertain quant à qui a accès à vos données ? Même avec le chiffrement de bout en bout, les préoccupations concernant le stockage des données peuvent persister. Nudge est là pour fournir la solution dont vous avez besoin. Avec Nudge, vous avez un contrôle complet sur vos données, vous permettant de les gérer de manière sécurisée de manière optionnelle ou d'étendre votre portée mondialement sans le risque de persistance des données. Contactez-nous aujourd'hui pour en savoir plus sur la façon dont vous pouvez configurer votre propre instance et profiter de la tranquillité d'esprit avec une communication sécurisée !",
    nudgeWidgetDescription: "Opcionalmente autosurveillé, messagerie avec chiffrement de bout en bout avec contrôle complet des données.",
    nudgeFeature2Title: "Données Optionnellement Autosurveillées",
    nudgeFeature2Description: "Contrôle complet sur vos données avec autosurveillance optionnelle et sans persistance de données externe.",
    nudgeMetaDescription: "Application de messagerie avec chiffrement de bout en bout et données optionnellement autosurveillées avec contrôle complet des données. Communication sécurisée sans risques de persistance des données.",
    nudgeOgDescription: "Messagerie avec chiffrement de bout en bout et données optionnellement autosurveillées avec contrôle complet des données et sécurité de niveau entreprise."
  },
  'de': {
    nudgeTitle: "Ihre Optionell Selbstüberwachte Daten End-zu-Ende-verschlüsselte Messaging-Anwendung",
    nudgeDescription: "Sind Sie besorgt über die Sicherheit in der heutigen digitalen Landschaft? Möchten Sie einen sicheren Kommunikationskanal, sind sich aber unsicher, wer Zugriff auf Ihre Daten hat? Selbst bei End-zu-Ende-Verschlüsselung können Bedenken hinsichtlich der Datenspeicherung bestehen bleiben. Nudge ist hier, um die Lösung zu bieten, die Sie benötigen. Mit Nudge haben Sie vollständige Kontrolle über Ihre Daten und können sie optional sicher verwalten oder Ihre Reichweite global erweitern, ohne das Risiko der Datenpersistenz. Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie Sie Ihre eigene Instanz einrichten und mit sicherer Kommunikation Seelenfrieden genießen können!",
    nudgeWidgetDescription: "Optionell selbstüberwacht, End-zu-Ende-verschlüsseltes Messaging mit vollständiger Datenkontrolle.",
    nudgeFeature2Title: "Optionell Selbstüberwachte Daten",
    nudgeFeature2Description: "Vollständige Kontrolle über Ihre Daten mit optionaler Selbstüberwachung und ohne externe Datenpersistenz.",
    nudgeMetaDescription: "Optionell selbstüberwachte, End-zu-Ende-verschlüsselte Messaging-Anwendung mit vollständiger Datenkontrolle. Sichere Kommunikation ohne Risiken der Datenpersistenz.",
    nudgeOgDescription: "Optionell selbstüberwachtes, End-zu-Ende-verschlüsseltes Messaging mit vollständiger Datenkontrolle und Sicherheit auf Unternehmensebene."
  },
  'zh-cn': {
    nudgeTitle: "您的可选自监控数据端到端加密消息应用程序",
    nudgeDescription: "您是否担心当今数字环境中的安全性？您想要一个安全的通信渠道，但对谁可以访问您的数据感到不确定？即使使用端到端加密，对数据存储的担忧也可能持续存在。Nudge 在这里为您提供所需的解决方案。使用 Nudge，您可以完全控制您的数据，允许您选择性地安全管理它，或在全球范围内扩展您的覆盖范围，而无需承担数据持久化的风险。立即联系我们，了解更多关于如何设置您自己的实例并通过安全通信享受内心平静的信息！",
    nudgeWidgetDescription: "可选自监控，端到端加密消息，具有完整的数据控制。",
    nudgeFeature2Title: "可选自监控数据",
    nudgeFeature2Description: "完全控制您的数据，具有可选的自监控功能，无外部数据持久化。",
    nudgeMetaDescription: "可选自监控、端到端加密消息应用程序，具有完整的数据控制。安全通信，无数据持久化风险。",
    nudgeOgDescription: "可选自监控、端到端加密消息，具有完整的数据控制和企业级安全性。"
  },
  'zh-tw': {
    nudgeTitle: "您的可選自監控數據端到端加密訊息應用程式",
    nudgeDescription: "您是否擔心當今數位環境中的安全性？您想要一個安全的通訊渠道，但對誰可以訪問您的數據感到不確定？即使使用端到端加密，對數據存儲的擔憂也可能持續存在。Nudge 在這裡為您提供所需的解決方案。使用 Nudge，您可以完全控制您的數據，允許您選擇性地安全管理它，或在全球範圍內擴展您的覆蓋範圍，而無需承擔數據持久化的風險。立即聯繫我們，了解更多關於如何設置您自己的實例並通過安全通訊享受內心平靜的資訊！",
    nudgeWidgetDescription: "可選自監控，端到端加密訊息，具有完整的數據控制。",
    nudgeFeature2Title: "可選自監控數據",
    nudgeFeature2Description: "完全控制您的數據，具有可選的自監控功能，無外部數據持久化。",
    nudgeMetaDescription: "可選自監控、端到端加密訊息應用程式，具有完整的數據控制。安全通訊，無數據持久化風險。",
    nudgeOgDescription: "可選自監控、端到端加密訊息，具有完整的數據控制和企業級安全性。"
  },
  'ja': {
    nudgeTitle: "オプションで自己監視可能なデータのエンドツーエンド暗号化メッセージングアプリケーション",
    nudgeDescription: "今日のデジタル環境におけるセキュリティを心配していますか？安全な通信チャネルが欲しいが、誰がデータにアクセスできるか不確実に感じていますか？エンドツーエンド暗号化があっても、データストレージに関する懸念は残る可能性があります。Nudgeは、必要なソリューションを提供するためにここにあります。Nudgeを使用すると、データを完全に制御でき、オプションで安全に管理したり、データ永続化のリスクなしでグローバルにリーチを拡大したりできます。独自のインスタンスをセットアップし、安全な通信で安心を楽しむ方法について、今すぐお問い合わせください！",
    nudgeWidgetDescription: "オプションで自己監視可能、エンドツーエンド暗号化メッセージング、完全なデータ制御。",
    nudgeFeature2Title: "オプションで自己監視可能なデータ",
    nudgeFeature2Description: "オプションの自己監視機能と外部データ永続化なしで、データを完全に制御。",
    nudgeMetaDescription: "オプションで自己監視可能、エンドツーエンド暗号化メッセージングアプリケーション、完全なデータ制御。データ永続化のリスクなしで安全な通信。",
    nudgeOgDescription: "オプションで自己監視可能、エンドツーエンド暗号化メッセージング、完全なデータ制御とエンタープライズレベルのセキュリティ。"
  },
  'pt': {
    nudgeTitle: "Sua Aplicação de Mensagens com Criptografia de Ponta a Ponta e Dados Opcionalmente Automonitorados",
    nudgeDescription: "Você está preocupado com a segurança no cenário digital de hoje? Você quer um canal de comunicação seguro, mas se sente incerto sobre quem tem acesso aos seus dados? Mesmo com criptografia de ponta a ponta, preocupações sobre armazenamento de dados podem persistir. O Nudge está aqui para fornecer a solução que você precisa. Com o Nudge, você tem controle completo sobre seus dados, permitindo que você opcionalmente os gerencie com segurança ou expanda seu alcance globalmente sem o risco de persistência de dados. Entre em contato conosco hoje para saber mais sobre como você pode configurar sua própria instância e desfrutar de tranquilidade com comunicação segura!",
    nudgeWidgetDescription: "Opcionalmente automonitorado, mensagens com criptografia de ponta a ponta com controle completo de dados.",
    nudgeFeature2Title: "Dados Opcionalmente Automonitorados",
    nudgeFeature2Description: "Controle completo sobre seus dados com automonitoramento opcional e sem persistência de dados externa.",
    nudgeMetaDescription: "Aplicativo de mensagens com criptografia de ponta a ponta e dados opcionalmente automonitorados com controle completo de dados. Comunicação segura sem riscos de persistência de dados.",
    nudgeOgDescription: "Mensagens com criptografia de ponta a ponta e dados opcionalmente automonitorados com controle completo de dados e segurança de nível empresarial."
  },
  'it': {
    nudgeTitle: "La Tua Applicazione di Messaggistica con Crittografia End-to-End e Dati Opzionalmente Automonitorati",
    nudgeDescription: "Sei preoccupato per la sicurezza nel panorama digitale di oggi? Vuoi un canale di comunicazione sicuro ma ti senti incerto su chi ha accesso ai tuoi dati? Anche con la crittografia end-to-end, le preoccupazioni sull'archiviazione dei dati possono persistere. Nudge è qui per fornire la soluzione di cui hai bisogno. Con Nudge, hai il controllo completo sui tuoi dati, permettendoti di gestirli in modo sicuro opzionalmente o di espandere la tua portata globalmente senza il rischio di persistenza dei dati. Contattaci oggi per saperne di più su come puoi configurare la tua istanza e goderti la tranquillità con una comunicazione sicura!",
    nudgeWidgetDescription: "Opcionalmente automonitorato, messaggistica con crittografia end-to-end con controllo completo dei dati.",
    nudgeFeature2Title: "Dati Opzionalmente Automonitorati",
    nudgeFeature2Description: "Controllo completo sui tuoi dati con automonitoraggio opzionale e senza persistenza di dati esterna.",
    nudgeMetaDescription: "Applicazione di messaggistica con crittografia end-to-end e dati opzionalmente automonitorati con controllo completo dei dati. Comunicazione sicura senza rischi di persistenza dei dati.",
    nudgeOgDescription: "Messaggistica con crittografia end-to-end e dati opzionalmente automonitorati con controllo completo dei dati e sicurezza di livello aziendale."
  },
  'nl': {
    nudgeTitle: "Uw Optioneel Zelfgemonitorde Gegevens End-to-End Versleutelde Berichtenapplicatie",
    nudgeDescription: "Maakt u zich zorgen over beveiliging in het digitale landschap van vandaag? Wilt u een veilig communicatiekanaal maar voelt u zich onzeker over wie toegang heeft tot uw gegevens? Zelfs met end-to-end versleuteling kunnen zorgen over gegevensopslag blijven bestaan. Nudge is er om de oplossing te bieden die u nodig heeft. Met Nudge heeft u volledige controle over uw gegevens, waardoor u ze optioneel veilig kunt beheren of uw bereik wereldwijd kunt uitbreiden zonder het risico van gegevenspersistentie. Neem vandaag nog contact met ons op om meer te weten te komen over hoe u uw eigen instantie kunt instellen en geniet van gemoedsrust met veilige communicatie!",
    nudgeWidgetDescription: "Optioneel zelfgemonitord, end-to-end versleutelde berichten met volledige gegevenscontrole.",
    nudgeFeature2Title: "Optioneel Zelfgemonitorde Gegevens",
    nudgeFeature2Description: "Volledige controle over uw gegevens met optionele zelfmonitoring en zonder externe gegevenspersistentie.",
    nudgeMetaDescription: "Optioneel zelfgemonitorde, end-to-end versleutelde berichtenapplicatie met volledige gegevenscontrole. Veilige communicatie zonder risico's op gegevenspersistentie.",
    nudgeOgDescription: "Optioneel zelfgemonitorde, end-to-end versleutelde berichten met volledige gegevenscontrole en beveiliging op bedrijfsniveau."
  },
  'ko': {
    nudgeTitle: "선택적으로 자체 모니터링되는 데이터 엔드투엔드 암호화 메시징 애플리케이션",
    nudgeDescription: "오늘날의 디지털 환경에서 보안에 대해 걱정하고 계신가요? 안전한 통신 채널을 원하지만 누가 데이터에 액세스할 수 있는지 불확실하게 느끼시나요? 엔드투엔드 암호화가 있어도 데이터 저장에 대한 우려는 계속될 수 있습니다. Nudge는 필요한 솔루션을 제공하기 위해 여기에 있습니다. Nudge를 사용하면 데이터를 완전히 제어할 수 있어 선택적으로 안전하게 관리하거나 데이터 지속성 위험 없이 전 세계적으로 리치를 확장할 수 있습니다. 오늘 저희에게 연락하여 자체 인스턴스를 설정하고 안전한 통신으로 마음의 평화를 즐기는 방법에 대해 자세히 알아보세요!",
    nudgeWidgetDescription: "선택적으로 자체 모니터링, 엔드투엔드 암호화 메시징, 완전한 데이터 제어.",
    nudgeFeature2Title: "선택적으로 자체 모니터링되는 데이터",
    nudgeFeature2Description: "선택적 자체 모니터링 및 외부 데이터 지속성 없이 데이터를 완전히 제어합니다.",
    nudgeMetaDescription: "선택적으로 자체 모니터링되는 엔드투엔드 암호화 메시징 애플리케이션, 완전한 데이터 제어. 데이터 지속성 위험 없이 안전한 통신.",
    nudgeOgDescription: "선택적으로 자체 모니터링되는 엔드투엔드 암호화 메시징, 완전한 데이터 제어 및 엔터프라이즈급 보안."
  },
  'tr': {
    nudgeTitle: "İsteğe Bağlı Kendi Kendini İzleyen Veriler Uçtan Uca Şifreli Mesajlaşma Uygulamanız",
    nudgeDescription: "Günümüzün dijital ortamında güvenlik konusunda endişeleniyor musunuz? Güvenli bir iletişim kanalı istiyorsunuz ancak verilerinize kimin erişebileceği konusunda belirsiz mi hissediyorsunuz? Uçtan uca şifreleme olsa bile, veri depolama konusundaki endişeler devam edebilir. Nudge, ihtiyacınız olan çözümü sunmak için burada. Nudge ile verileriniz üzerinde tam kontrol sahibi olursunuz, isteğe bağlı olarak güvenli bir şekilde yönetmenize veya veri kalıcılığı riski olmadan küresel olarak erişiminizi genişletmenize olanak tanır. Kendi örneğinizi nasıl kurabileceğiniz ve güvenli iletişimle huzur içinde nasıl keyif alabileceğiniz hakkında daha fazla bilgi edinmek için bugün bizimle iletişime geçin!",
    nudgeWidgetDescription: "İsteğe bağlı kendi kendini izleyen, uçtan uca şifreli mesajlaşma, tam veri kontrolü.",
    nudgeFeature2Title: "İsteğe Bağlı Kendi Kendini İzleyen Veriler",
    nudgeFeature2Description: "İsteğe bağlı kendi kendini izleme ve harici veri kalıcılığı olmadan verileriniz üzerinde tam kontrol.",
    nudgeMetaDescription: "İsteğe bağlı kendi kendini izleyen, uçtan uca şifreli mesajlaşma uygulaması, tam veri kontrolü. Veri kalıcılığı riski olmadan güvenli iletişim.",
    nudgeOgDescription: "İsteğe bağlı kendi kendini izleyen, uçtan uca şifreli mesajlaşma, tam veri kontrolü ve kurumsal düzeyde güvenlik."
  },
  'he': {
    nudgeTitle: "אפליקציית ההודעות המוצפנת מקצה לקצה עם נתונים מנוטרים עצמית אופציונלית",
    nudgeDescription: "האם אתם מודאגים מהאבטחה בנוף הדיגיטלי של היום? האם אתם רוצים ערוץ תקשורת מאובטח אך מרגישים לא בטוחים לגבי מי יש לו גישה לנתונים שלכם? גם עם הצפנה מקצה לקצה, חששות לגבי אחסון נתונים יכולים להישאר. Nudge כאן כדי לספק את הפתרון שאתם צריכים. עם Nudge, יש לכם שליטה מלאה על הנתונים שלכם, ומאפשרים לכם לניהול אותם בצורה מאובטחת באופן אופציונלי או להרחיב את ההישג שלכם באופן גלובלי ללא סיכון של הישארות נתונים. צרו קשר איתנו היום כדי ללמוד עוד על איך אתם יכולים להגדיר את המופע שלכם וליהנות משקט נפשי עם תקשורת מאובטחת!",
    nudgeWidgetDescription: "מנוטר עצמית באופן אופציונלי, הודעות מוצפנות מקצה לקצה עם שליטה מלאה בנתונים.",
    nudgeFeature2Title: "נתונים מנוטרים עצמית באופן אופציונלי",
    nudgeFeature2Description: "שליטה מלאה על הנתונים שלכם עם ניטור עצמי אופציונלי וללא הישארות נתונים חיצונית.",
    nudgeMetaDescription: "אפליקציית הודעות מוצפנת מקצה לקצה עם נתונים מנוטרים עצמית באופן אופציונלי עם שליטה מלאה בנתונים. תקשורת מאובטחת ללא סיכוני הישארות נתונים.",
    nudgeOgDescription: "הודעות מוצפנות מקצה לקצה עם נתונים מנוטרים עצמית באופן אופציונלי, שליטה מלאה בנתונים ואבטחה ברמת ארגון."
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
    // Update all the keys
    Object.keys(translations[localeCode]).forEach(key => {
      localeData[key] = translations[localeCode][key];
    });
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(localeData, null, 2) + '\n', 'utf8');
    console.log(`✓ Updated ${localeCode}`);
  } else {
    console.log(`⚠ No translations found for ${localeCode}`);
  }
});

console.log('\n✅ Update complete!');
