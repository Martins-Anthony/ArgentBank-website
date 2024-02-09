import { Provider } from 'react-redux'
import AppRouter from './AppRouter'
import { store } from './store'
import '../../styles/index.css'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
