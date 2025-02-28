import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { PopperProps } from '../Popper/Popper.styles';

export interface TooltipProps extends PopperProps {
	label: any;
	opened?: boolean;
	openDelay?: number;
	closeDelay?: number;
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
	disabled?: boolean;
	arrowSize?: number;
	width?: number | 'auto';
	wrapLines?: boolean;
	allowPointerEvents?: boolean;
	tooltipRef?: HTMLElement | any;
	tooltipId?: string;
}

interface TooltipStyleParams {
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
}

export default createStyles((theme, { color, radius }: TooltipStyleParams) => {
	return {
		root: {
			display: 'inline-block'
		},

		body: {
			[`${theme.dark} &`]: {
				bc: theme.fn.themeColor(color, 3),
				color: theme.fn.themeColor('dark', 9)
			},
			backgroundColor: theme.fn.themeColor(color, 9),
			lineHeight: theme.lineHeights.md,
			fontSize: theme.fontSizes.sm,
			borderRadius: theme.radii[radius].value,
			padding: `${+theme.space.xs.value / 2}px ${theme.space.xs.value}px`,
			color: 'white',
			position: 'relative',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},

		arrow: {
			[`${theme.dark} &`]: {
				bg: theme.fn.themeColor(color, 3)
			},
			background: theme.fn.themeColor(color, 9),
			zIndex: 0
		}
	};
});
