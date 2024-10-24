import { createRoot } from 'react-dom/client'

export function Box({
	style = {},
	className = '',
	children,
	...rest
}: React.ComponentProps<'div'>) {
	return (
		<div
			style={{ fontStyle: 'italic', ...style }}
			className={`box ${className}`}
			{...rest}
		>
			{children}
		</div>
	)
}

// 🐨 update all of these to use the <Box> component with the appropriate props.
const smallBox = (
	<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
		small lightblue box
	</Box>
)
const mediumBox = (
	<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
		medium pink box
	</Box>
)
const largeBox = (
	<Box className="box--large" style={{ backgroundColor: 'orange' }}>
		large orange box
	</Box>
)
const sizelessColorlessBox = <Box>sizeless colorless box</Box>

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
