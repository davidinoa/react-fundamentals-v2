import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form>
			<label htmlFor="username">Username</label>
			<input id="username" name="username" />
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
