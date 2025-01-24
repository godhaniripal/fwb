import '../styles/globals.css'; // Ensure this line is present
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from '../context/CartContext'; // Import CartProvider

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ClerkProvider>
  );
}

export default MyApp;