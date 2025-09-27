import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './features/auth/context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';
import MSALProviderFile from './features/auth/MSALProvider.jsx'

createRoot(document.getElementById('root')).render(
	<>
	  <Toaster position="top-center" reverseOrder={false} />
		<BrowserRouter>
			<MSALProviderFile>
				<AuthProvider>
					<App></App>
				</AuthProvider>
			</MSALProviderFile>
		</BrowserRouter>
	</>
);
