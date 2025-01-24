import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay Key Secret
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const options = {
        amount: 999 * 100, // Static amount in paise (₹999 = 99900 paise)
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
      };

      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}