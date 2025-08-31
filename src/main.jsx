import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import MSALProvider from './features/auth/msalProvider.jsx';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './features/auth/context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
	<>
	  <Toaster position="top-center" reverseOrder={false} />
		<BrowserRouter>
			<MSALProvider>
				<AuthProvider>
					<App></App>
				</AuthProvider>
			</MSALProvider>
		</BrowserRouter>
	</>
);
