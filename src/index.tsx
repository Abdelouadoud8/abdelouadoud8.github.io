import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store'

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('root')
)
