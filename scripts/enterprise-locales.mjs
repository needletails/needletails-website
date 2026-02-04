import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Keys updated for enterprise copy (Server, Native, Web, Management, Consultation)
const ENTERPRISE_KEYS = [
  'backendSolutionsHeader',
  'backendSolutionsDescription',
  'backendCapabilitiesOverview',
  'scalability',
  'scalabilityDescription',
  'security',
  'securityDescription',
  'maintainability',
  'maintainabilityDescription',
  'testingAndQualityAssurance',
  'testingAndQualityAssuranceDescription',
  'monitoringAndLogging',
  'monitoringAndLoggingDescription',
  'nativeAppDevelopmentHeader',
  'nativeAppDevelopmentDescription',
  'nativeAppDevelopmentOverview',
  'designConsistency',
  'designConsistencyDescription',
  'deviceFragmentation',
  'deviceFragmentationDescription',
  'userExperienceUX',
  'userExperienceUXDescription',
  'distributionCompliance',
  'distributionComplianceDescription',
  'webDevelopmentExpertiseHeader',
  'webDevelopmentExpertiseDescription',
  'webDevelopmentOverview',
  'responsiveDesign',
  'responsiveDesignDescription',
  'crossBrowserCompatibility',
  'crossBrowserCompatibilityDescription',
  'webPerformanceOptimizationDescription',
  'userExperience',
  'userExperienceDescription',
  'securityPractices',
  'securityPracticesDescription',
  'seoBestPractices',
  'seoBestPracticesDescription',
  'productManagementExpertiseHeader',
  'productManagementExpertiseDescription',
  'productManagementOverview',
  'productManagementPoints',
  'requirementsGathering',
  'requirementsGatheringDescription',
  'marketResearch',
  'marketResearchDescription',
  'userExperienceDesign',
  'userExperienceDesignDescription',
  'productStrategy',
  'productStrategyDescription',
  'featurePrioritization',
  'featurePrioritizationDescription',
  'stakeholderManagement',
  'stakeholderManagementDescription',
  'projectManagementExpertiseHeader',
  'projectManagementExpertiseDescription',
  'projectManagementOverview',
  'projectManagementPoints',
  'projectPlanning',
  'projectPlanningDescription',
  'resourceManagement',
  'resourceManagementDescription',
  'riskManagement',
  'riskManagementDescription',
  'qualityAssurance',
  'qualityAssuranceDescription',
  'consultingTitle',
  'consultingOverview',
  'consultWithUs',
  'consultingWithUsMessage',
  'whatToConsultAbout',
  'architectureDesign',
  'architectureDesignDescription',
  'technologySelection',
  'technologySelectionDescription',
  'performanceOptimization',
  'performanceOptimizationDescription',
  'securityReview',
  'securityReviewDescription',
  'codeReview',
  'codeReviewDescription',
  'bestPractices',
  'bestPracticesDescription',
  'managementPageLabel',
  'managementPageTitle',
  'managementPageLead',
  'managementCtaLead',
  'consultationPageLabel',
  'consultationCtaLead',
  'nudgeTitle',
  'nudgeDescription',
  'nudgeFeature1Title',
  'nudgeFeature1Description',
  'nudgeFeature2Title',
  'nudgeFeature2Description',
  'nudgeFeature3Title',
  'nudgeFeature3Description',
  'nudgeFeature4Title',
  'nudgeFeature4Description',
  'costSavingsBadge',
  'costSavingsHeadline',
  'costSavingsIntro',
  'costSavingsWhyItMatters',
  'costSavingsSubhead',
  'costSavingsTableHowToRead',
  'costSavingsColRuntime',
  'costSavingsColMemory',
  'costSavingsColMemoryHelp',
  'costSavingsColThroughput',
  'costSavingsColThroughputHelp',
  'costSavingsColMonthlyCost',
  'costSavingsSwift',
  'costSavingsSwiftMemory',
  'costSavingsSwiftThroughput',
  'costSavingsSwiftCost',
  'costSavingsNode',
  'costSavingsNodeMemory',
  'costSavingsNodeThroughput',
  'costSavingsNodeCost',
  'costSavingsPython',
  'costSavingsPythonMemory',
  'costSavingsPythonThroughput',
  'costSavingsPythonCost',
  'costSavingsJava',
  'costSavingsJavaMemory',
  'costSavingsJavaThroughput',
  'costSavingsJavaCost',
  'costSavingsDisclaimer',
  'costSavingsCta',
  'costSavingsProductionHeadline',
  'costSavingsProductionIntro',
  'costSavingsProductionColWorkload',
  'costSavingsProductionColNeeds',
  'costSavingsProductionColWhy',
  'costSavingsProductionEnterprise',
  'costSavingsProductionEnterpriseNeeds',
  'costSavingsProductionEnterpriseWhy',
  'costSavingsProductionMessaging',
  'costSavingsProductionMessagingNeeds',
  'costSavingsProductionMessagingWhy',
  'costSavingsProductionVideo',
  'costSavingsProductionVideoNeeds',
  'costSavingsProductionVideoWhy',
  'costSavingsProductionSocial',
  'costSavingsProductionSocialNeeds',
  'costSavingsProductionSocialWhy',
];

const localesDir = path.join(__dirname, '../i18n/locales');
const enPath = path.join(localesDir, 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const localeFiles = fs
  .readdirSync(localesDir)
  .filter((f) => f.endsWith('.json') && f !== 'en.json');

localeFiles.forEach((file) => {
  const localeCode = file.replace('.json', '');
  const filePath = path.join(localesDir, file);
  const localeData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = 0;
  ENTERPRISE_KEYS.forEach((key) => {
    if (enData[key] !== undefined) {
      localeData[key] = enData[key];
      updated++;
    }
  });
  fs.writeFileSync(filePath, JSON.stringify(localeData, null, 2) + '\n', 'utf8');
  console.log(`✓ ${localeCode} (${updated} keys)`);
});

console.log('\n✅ Enterprise copy propagated to all locales (English source).');
console.log('   Add translations per locale when ready.');
