import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MSALProvider from './features/auth/msalProvider.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<MSALProvider>
			<App></App>
		</MSALProvider>
	</StrictMode>
);
