import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Collections from '../components/Collections';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const menItems = [
  {
    id: 1, // Unique ID for each product
    image: '/images/mens_top.jpeg',
    alt: "Men's Shirt",
    title: "Stylish Shirts",
    description: "Comfortable shirts for every occasion.",
    price: 1299, // Price in Indian Rupees
  },
  {
    id: 2,
    image: '/images/mens_jackets.jpeg',
    alt: "Men's Jacket",
    title: "Outerwear",
    description: "Warm and stylish jackets.",
    price: 2999,
  },
  {
    id: 3,
    image: '/images/graphic_tee.jpeg',
    alt: "Graphic T-Shirt",
    title: "Graphic T-Shirts",
    description: "Express yourself with unique designs.",
    price: 799,
  },
  {
    id: 4,
    image: '/images/mens_hoodie.jpeg',
    alt: "Hoodies & Jackets",
    title: "Hoodies & Jackets",
    description: "Stylish and comfortable outerwear.",
    price: 1999,
  },
  {
    id: 5,
    image: '/images/pants.jpeg',
    alt: "Bottom Wear",
    title: "Bottom Wear",
    description: "Casual and formal bottoms.",
    price: 1499,
  },
  {
    id: 6,
    image: '/images/sleepwear.jpeg',
    alt: "Sleepwear",
    title: "Sleepwear",
    description: "Comfy sleepwear for a restful night.",
    price: 999,
  },
  {
    id: 7,
    image: '/images/sportswear.jpeg',
    alt: "Athleisure",
    title: "Athleisure",
    description: "Perfect blend of style and comfort.",
    price: 2499,
  },
];

const womenItems = [
  {
    id: 8,
    image: '/images/dress.jpeg',
    alt: "Women's Dress",
    title: "Elegant Dresses",
    description: "Chic designs for every occasion.",
    price: 1999,
  },
  {
    id: 9,
    image: '/images/wtop.jpeg',
    alt: "Women's Top",
    title: "Stylish Tops",
    description: "Fashionable and trendy tops.",
    price: 899,
  },
  {
    id: 10,
    image: '/images/wpants.jpeg',
    alt: "Bottom Wear",
    title: "Bottom Wear",
    description: "Comfortable and stylish bottoms.",
    price: 1499,
  },
  {
    id: 11,
    image: '/images/wsport.jpeg',
    alt: "Athleisure",
    title: "Athleisure",
    description: "For the active and fashionable woman.",
    price: 2499,
  },
  {
    id: 12,
    image: '/images/wundie.jpeg',
    alt: "Co-ords",
    title: "Innerwear",
    description: "Soft fabric for comfort.",
    price: 499,
  },
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