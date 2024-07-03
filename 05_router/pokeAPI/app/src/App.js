import SearchPoketmon from './pages/poketmon';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AllPoket from './pages/Allpoket';
import SelectOne from './pages/SelectOne';

function Index() {
  return(
    <>
    <Button variant="success" className='mt-5 ms-5' as={Link} to={'/list'}>전체 포켓몬 리스트</Button>
    <Button variant="primary" className='mt-5 ms-5' as={Link} to={'/search'}>검색으로 포켓몬 찾기</Button>
    </>
  )
}


function App() {
 

  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route index element={<Index/>}/>
      <Route path='/search' element={<SearchPoketmon/>}/>
      <Route path='/list' element={<AllPoket/>}/>
      <Route path='/select'>
        <Route path=':name' element={<SelectOne/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;