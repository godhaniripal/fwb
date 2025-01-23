import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Collections from '../components/Collections';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const menItems = [
  { image: '/images/mens_top.jpeg', alt: "Men's Shirt", title: "Stylish Shirts", description: "Comfortable shirts for every occasion." },
  { image: '/images/mens_jackets.jpeg', alt: "Men's Jacket", title: "Outerwear", description: "Warm and stylish jackets." },
  { image: '/images/graphic_tee.jpeg', alt: "Graphic T-Shirt", title: "Graphic T-Shirts", description: "Express yourself with unique designs." },
  { image: '/images/mens_hoodie.jpeg', alt: "Hoodies & Jackets", title: "Hoodies & Jackets", description: "Stylish and comfortable outerwear." },
  { image: '/images/pants.jpeg', alt: "Bottom Wear", title: "Bottom Wear", description: "Casual and formal bottoms." },
  { image: '/images/sleepwear.jpeg', alt: "Sleepwear", title: "Sleepwear", description: "Comfy sleepwear for a restful night." },
  { image: '/images/sportswear.jpeg', alt: "Athleisure", title: "Athleisure", description: "Perfect blend of style and comfort." },
];

const womenItems = [
  { image: '/images/dress.jpeg', alt: "Women's Dress", title: "Elegant Dresses", description: "Chic designs for every occasion." },
  { image: '/images/wtop.jpeg', alt: "Women's Top", title: "Stylish Tops", description: "Fashionable and trendy tops." },
  { image: '/images/wpants.jpeg', alt: "Bottom Wear", title: "Bottom Wear", description: "Comfortable and stylish bottoms." },
  { image: '/images/wsport.jpeg', alt: "Athleisure", title: "Athleisure", description: "For the active and fashionable woman." },
  { image: '/images/wundie.jpeg', alt: "Co-ords", title: "Innerwear", description: "Soft fabric for comfort." },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category id="men" title="Men's Collection" items={menItems} />
      <Category id="women" title="Women's Collection" items={womenItems} />
      <Collections />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}