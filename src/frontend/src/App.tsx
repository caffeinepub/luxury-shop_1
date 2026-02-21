import Hero from './components/Hero';
import ShoeGallery from './components/ShoeGallery';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="flex-1">
        <ShoeGallery />
      </main>
      <ContactInfo />
    </div>
  );
}

export default App;
