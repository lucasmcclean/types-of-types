import {
	bundledLanguages,
	type BundledLanguage,
	type DynamicImportLanguageRegistration,
	type LanguageRegistration
} from 'shiki';
import dafnyGrammar from './dafny.tmLanguage.json';

export const DAFNY_LANGUAGE = 'dafny' as BundledLanguage;

const loadDafny: DynamicImportLanguageRegistration = async () => ({
	default: [dafnyGrammar as LanguageRegistration]
});

export function registerDafny(): BundledLanguage {
	bundledLanguages[DAFNY_LANGUAGE] = loadDafny;
	return DAFNY_LANGUAGE;
}
