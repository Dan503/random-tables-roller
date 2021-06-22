import React, {
	CSSProperties,
	FC,
	ReactNode,
	useLayoutEffect,
	useState,
} from 'react'
import './FlexGap.css'

const toPx = (value?: string | number): string | undefined => {
	return typeof value === 'number' ? `${value}px` : value
}

let isSupported: boolean

// https://ishadeed.com/article/flexbox-gap/
function checkFlexGapSupport() {
	if (isSupported !== undefined) {
		return isSupported
	}
	// create flex container with row-gap set
	const flex = document.createElement('div')
	flex.style.display = 'flex'
	flex.style.flexDirection = 'column'
	flex.style.rowGap = '1px'
	flex.style.position = 'fixed'
	flex.style.minHeight = '0'

	// create two, elements inside it
	flex.appendChild(document.createElement('div'))
	flex.appendChild(document.createElement('div'))

	// append to the DOM (needed to obtain scrollHeight)
	document.body.appendChild(flex)
	isSupported = flex.scrollHeight === 1 // flex container should be 1px high from the row-gap
	flex.parentNode?.removeChild(flex)

	return isSupported
}

type flexGapComponent = FC<{
	/** Define what the root element for FlexGap is */
	Elem?: 'div' | 'ul' | 'ol' | 'article' | 'section' | 'span' | 'p'
	/** Define what the element for FlexGap__polyfillWrapper is */
	PolyfillElem?: 'div' | 'span'
	/** Set to `true` to have the children fill up any empty remaining space */
	grow?: boolean
	/** Set to `false` to prevent children from wrapping to the next line */
	wrap?: boolean
	/**
	 * Set to `false` to prevent `FlexGap` from creating child wrapper elements.
	 *
	 * **WARNING:** If set to `false`, it can break the polyfill.
	 * Test that the polyfill still works by adding the `forcePolyfill` prop
	 */
	nestChildren?: boolean
	style?: CSSProperties
	/** Modify the distance between flex items in both dimensions */
	gap?: number | string
	/** Modify the **vertical** distance between flex items */
	vGap?: number | string
	/** Modify the **horizontal** distance between flex items */
	hGap?: number | string
	/** Vertical alignment setting */
	align?: 'center' | 'top' | 'bottom' | 'stretch'
	/** Horizontal alignment setting */
	justify?:
		| 'center'
		| 'flex-end'
		| 'flex-start'
		| 'space-evenly'
		| 'space-between'
	/** Determine which direction elements stack in */
	direction?:
		| 'vertical'
		| 'vertical-reverse'
		| 'horizontal'
		| 'horizontal-reverse'
	/** Holds the React child components */
	children?: Array<ReactNode>
	/** Set to `true` to force browsers that support flex-gap to display the polyfill version instead */
	forcePolyfill?: boolean
	/** Needed for internal use */
	gapSupport?: boolean
}>

/** Flex-gap with a built in polyfill for Safari */
const FlexGap: flexGapComponent = ({
	Elem = 'div',
	direction = 'horizontal',
	align = 'stretch',
	justify,
	grow,
	nestChildren = true,
	wrap = direction === 'horizontal',
	style,
	gap,
	vGap = gap,
	hGap = gap,
	gapSupport = true,
	children,
}) => {
	const pxGap_v = toPx(vGap)
	const pxGap_h = toPx(hGap)
	const isList = ['ul', 'ol'].includes(Elem)

	const cssDirection = {
		vertical: 'column',
		'vertical-reverse': 'column-reverse',
		horizontal: undefined,
		'horizontal-reverse': 'row-reverse',
	}
	const cssAlign = {
		center: 'center',
		top: 'flex-start',
		bottom: 'flex-end',
		stretch: undefined,
	}

	return (
		<Elem
			// Extra classes are intentionally not allowed because custom styles can break the polyfill
			className="FlexGap"
			data-grow={grow}
			data-wrap={wrap}
			data-nested-children={nestChildren}
			data-flex-gap-support={gapSupport}
			style={
				{
					'--gap-v': pxGap_v,
					'--gap-h': pxGap_h,
					flexDirection: cssDirection[direction],
					justifyContent: justify,
					alignItems: cssAlign[align],
					...(style as CSSProperties),
				} as CSSProperties
			}
		>
			{!nestChildren && children}
			{nestChildren &&
				children?.filter(Boolean).map((child, i) => {
					const Child = isList ? 'li' : 'div'
					return (
						<Child className={'C-FlexGap__child'} key={i}>
							{child}
						</Child>
					)
				})}
		</Elem>
	)
}

const PolyfilledFlexGap: flexGapComponent = ({
	forcePolyfill,
	PolyfillElem = 'div',
	...restProps
}) => {
	const [gapSupport, setGapSupport] = useState(true)

	useLayoutEffect(() => {
		setGapSupport(forcePolyfill ? false : checkFlexGapSupport())
	}, [forcePolyfill])

	if (!gapSupport) {
		return (
			<PolyfillElem className={'C-FlexGap__polyfillWrapper'}>
				<FlexGap gapSupport={gapSupport} {...restProps} />
			</PolyfillElem>
		)
	}
	return <FlexGap gapSupport={gapSupport} {...restProps} />
}

export { PolyfilledFlexGap as FlexGap }
