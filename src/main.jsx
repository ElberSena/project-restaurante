
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './index.css'


const root = createRoot(document.getElementById('root')).render(<App />)
