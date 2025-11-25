import React, { useState } from 'react';
import axios from 'axios';

const BookingPayment = () => {
    const [amount, setAmount] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePayment = async () => {
        // Add Daraja payment API logic here
        try {
            const response = await axios.post('/path/to/daraja/api', {
                amount,
                phoneNumber,
                // additional necessary parameters
            });
            console.log('Payment Response:', response.data);
        } catch (error) {
            console.error('Payment Error:', error);
        }
    };

    return (
        <div>
            <h2>Tour Payment</h2>
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default BookingPayment;