import React, { useEffect } from 'react';
import razorPar from '../../assets/Razorpay_logo.png'


const RazorpayButton = ({ amount, onSuccess, onError }) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_ID, 
      amount: amount * 100, 
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo.jpg',
      handler: function (response) {
        onSuccess(response);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    // Clean up Razorpay script when component unmounts
    return () => {
      const script = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <button
      onClick={displayRazorpay}
      className="w-full bg-blue-300 flex gap-3 justify-center items-center font-bold text-blue-900 py-3 rounded hover:bg-blue-500 transition-colors"
    >
      Pay with {"  "}<img className='h-5' src={razorPar} alt="" />
    </button>
  );
};

export default RazorpayButton;
