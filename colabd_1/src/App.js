import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Networking from './pages/Networking';
import Planos from './pages/Planos';
import SobreNos from './pages/SobreNos';
import Contatos from './pages/Contatos';
import logoColabd from './imagens/logoColabd.png';

const pages = {
  Home,
  Networking,
  Planos,
  SobreNos,
  Contatos,
};

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [menuVisible, setMenuVisible] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuVisible(false);
  };

  const renderPage = () => {
    const PageComponent = pages[currentPage];
    return <PageComponent />;
  };

  return (
    <div>
      <header>
      <div className="logo">
    <a href="#" onClick={() => handleNavClick('Home')}>
      <img src={logoColabd} alt="Logo COLABD" />
    </a>
  </div>
        <button
          onClick={() => setMenuVisible((prevMenuVisible) => !prevMenuVisible)}
          className={`hamburger ${menuVisible ? 'active' : ''}`}
          aria-controls="menu"
          aria-expanded={menuVisible}
        >
          &#9776;
        </button>
      </header>

      <nav className={`navigation ${menuVisible ? 'visible' : ''}`}>
        {Object.keys(pages).map((page) => (
          <button key={page} onClick={() => handleNavClick(page)}>
            {page}
          </button>
        ))}
      </nav>

      <div className="menu">{renderPage()}</div>

      <footer>
        <p>Rua Espanha, 150, Nações, Fazenda Rio Grande-PR</p>
        <p>Renata (41) 9 9659 6463 / Bruno (43) 9 9164 4607</p>
        <p>E-mail: colabdfrg2023@gmail.com</p>
        <p>COworking COLABD</p>
      </footer>
    </div>
  );
}

export default App;
