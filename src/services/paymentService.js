import axios from 'axios';

const BASE_URL = 'https://api.paymentprovider.com';

/**
 * Initiates an STK push to a user.
 * @param {string} phoneNumber - The phone number to initiate the push to.
 * @param {number} amount - The amount to be pushed.
 * @returns {Promise} - The response from the payment provider API.
 */
export const initiateSTKPush = async (phoneNumber, amount) => {
    try {
        const response = await axios.post(`${BASE_URL}/stk-push`, { phoneNumber, amount });
        return response.data;
    } catch (error) {
        console.error('Error initiating STK push:', error);
        throw error;
    }
};

/**
 * Checks the status of a payment.
 * @param {string} transactionId - The ID of the transaction to check.
 * @returns {Promise} - The response from the payment provider API.
 */
export const checkPaymentStatus = async (transactionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/payment-status/${transactionId}`);
        return response.data;
    } catch (error) {
        console.error('Error checking payment status:', error);
        throw error;
    }
};