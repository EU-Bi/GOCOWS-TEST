import './App.scss';
import { Header } from '../Header/header';
import {Main} from '../Main/main'
import {Form} from '../Form/form'
import {PreFotter} from '../PreFotter/index'
import {ButtonLoadMore} from '../ButtonLoadMore/buttonLoadMore'
import { Footer } from '../Fotter/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Form/>
      <PreFotter/>
      <ButtonLoadMore/>
      <Footer/>
    </div>
  );
}

export default App;
