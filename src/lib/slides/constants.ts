import type { MagicMoveDifferOptions, MagicMoveRenderOptions } from '@shikijs/magic-move/types';

export const THEME = 'poimandres';

export const CODE_OPTIONS: MagicMoveRenderOptions & MagicMoveDifferOptions = {
	duration: 400,
	stagger: 10,
	easing: 'var(--ease, ease)',
	lineNumbers: true,
	containerStyle: false
};
