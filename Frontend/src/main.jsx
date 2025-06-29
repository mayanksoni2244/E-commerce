import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store/store.js'
import { AuthProvider } from './contest/AuthContest.jsx'
import { SearchProvider } from './searchbar/search.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AuthProvider>
                <SearchProvider>
                    <App />
                </SearchProvider>
            </AuthProvider>
        </PersistGate>
    </Provider>
)
