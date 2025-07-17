
import mount from '../assets/mount.jpg';

const Home = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${mount})` }}
    >
      <h1 className="text-4xl font-bold text-white text-center px-4">
        FASHIONABLE, QUALITY, DURABLE AND BEST SHOES FOR EVERYONE
      </h1>
    </section>
  );
};

export default Home;
