import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import { Header } from './Components/Header';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { CoinPage } from './Pages/CoinPage';
import {store} from './store/store';
import {Provider} from 'react-redux'
import { Exchanges } from './Pages/Exchanges';

function App() {
  const App = styled('div')({
      backgroundColor:'#14161a',
      color:"white",
      minHeight: '100vh'
  }
  )
  return (
    <BrowserRouter>
    <Provider store={store}>
        <App>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/coins/:id' element={<CoinPage/>}/>
            <Route path='exchanges' element={<Exchanges/>}/>
          </Routes>
        </App>
      </Provider>
    </BrowserRouter>
    
  );
}

export default App;
