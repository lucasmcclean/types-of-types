import {
	bundledLanguages,
	type BundledLanguage,
	type DynamicImportLanguageRegistration,
	type LanguageRegistration
} from 'shiki';
import flixGrammar from './flix.tmLanguage.json';

export const FLIX_LANGUAGE = 'flix' as BundledLanguage;

const loadFlix: DynamicImportLanguageRegistration = async () => ({
	default: [flixGrammar as LanguageRegistration]
});

export function registerFlix(): BundledLanguage {
	bundledLanguages[FLIX_LANGUAGE] = loadFlix;
	return FLIX_LANGUAGE;
}
