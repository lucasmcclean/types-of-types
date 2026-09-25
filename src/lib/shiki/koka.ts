import {
	bundledLanguages,
	type BundledLanguage,
	type DynamicImportLanguageRegistration,
	type LanguageRegistration
} from 'shiki';
import kokaGrammar from './koka.tmLanguage.json';

export const KOKA_LANGUAGE = 'koka' as BundledLanguage;

const loadKoka: DynamicImportLanguageRegistration = async () => ({
	default: [kokaGrammar as LanguageRegistration]
});

export function registerKoka(): BundledLanguage {
	bundledLanguages[KOKA_LANGUAGE] = loadKoka;
	return KOKA_LANGUAGE;
}
