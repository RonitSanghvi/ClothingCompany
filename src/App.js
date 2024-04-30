import './App.css';
import Hero from './hero';
import Collections from './collections';
import Manufacturing from './manufacturing';
import Team from './team';
import Contact from './contact';
import Updates from './updates';

function App() {

  return (
    <div className='bg-slate-950'>
      <Hero />
      <Collections/>
      <Manufacturing />
      <div className='bg-gradient-to-tl from-blue-950 to-slate-950'>
        <Team />
        <Contact />
        <Updates />
      </div>
      
    </div>

  );
}

export default App;
