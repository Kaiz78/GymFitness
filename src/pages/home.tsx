import { Button } from '../assets/components/ui/button';

import ContactUs from '../components/contactUs';
import Testimonials from '../components/testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#E5E1EE]">
      <main>
      <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold">Transformez Votre Corps</h2>
            <p className="mt-4 text-xl">Rejoignez-nous pour atteindre vos objectifs de remise en forme.</p>
            <a href="#services" className="mt-6 inline-block">
              <Button type="submit" className="bg-yellow-500  py-4 px-8 text-xl text-white rounded">Voir nos services</Button>
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">À propos de nous</h2>
          <p className="mt-4 text-gray-600">Chez GymFitness, nous sommes dédiés à vous aider à atteindre vos objectifs de remise en forme. Notre équipe d'experts est là pour vous soutenir à chaque étape de votre parcours.</p>
          <img src="https://placehold.co/600x400" alt="Image de l'équipe de GymFitness en train de s'entraîner" className="mx-auto mt-8" />
        </div>
      </section>
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Nos Services</h2>
          <div className="mt-8 flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <img src="https://placehold.co/300x200" alt="Salle de sport moderne avec équipement" className="w-full h-48 object-cover rounded" />
                <h3 className="text-2xl font-bold mt-4">Salle de sport</h3>
                <p className="mt-2 text-gray-600">Équipement de pointe pour tous vos besoins d'entraînement.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <img src="https://placehold.co/300x200" alt="Entraînement personnel avec un coach" className="w-full h-48 object-cover rounded" />
                <h3 className="text-2xl font-bold mt-4">Coaching Personnel</h3>
                <p className="mt-2 text-gray-600">Programmes personnalisés pour atteindre vos objectifs.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <img src="https://placehold.co/300x200" alt="Cours de groupe avec participants motivés" className="w-full h-48 object-cover rounded" />
                <h3 className="text-2xl font-bold mt-4">Cours de Groupe</h3>
                <p className="mt-2 text-gray-600">Sessions dynamiques pour tous les niveaux.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
     
        <ContactUs />
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; 2024 Gym Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

