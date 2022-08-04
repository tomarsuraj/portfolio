import sty from './App.module.css';
import Header from './components/Header';
import Aboutme from './Sections/Aboutme';
import Info from './Sections/Info';
import Main from './Sections/Main';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';

function App() {
  return (
    <div className={sty.App}>
      <Header />
      <Main />
      <Info />
      <Aboutme />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
