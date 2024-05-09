import Banner from './componentes/Banner/Index';
import CampoTexto from './componentes/CampoTexto/Index';


function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label='Nome' placeholder="Digite o seu nome"/>
      <CampoTexto label='Cargo' placeholder="Digite o seu Cargo"/>
      <CampoTexto label='Imagem' placeholder="Digite o endereço da sua imagem"/>
    </div>
  );
}

export default App;
