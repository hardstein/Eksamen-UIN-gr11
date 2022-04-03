import ReactDOM from 'react-dom'

// TODO: Kommenter ut om du ønsker å bruke .scss
import './styles/main.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
