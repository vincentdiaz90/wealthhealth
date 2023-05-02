import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import RouterPath from './Components/RouterPath/RouterPath'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<RouterPath />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
