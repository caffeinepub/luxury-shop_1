import Hero from './components/Hero';
import ShoeGallery from './components/ShoeGallery';
import Reviews from './components/Reviews';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="flex-1">
        <ShoeGallery />
        <Reviews />
      </main>
      <ContactInfo />
    </div>
  );
}

export default App;
