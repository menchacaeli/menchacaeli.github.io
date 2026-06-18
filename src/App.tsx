import { Nav } from './components/ui/Nav';
import { Hero } from './components/hero/Hero';
import { Work } from './components/sections/Work';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}
