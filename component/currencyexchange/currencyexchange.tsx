'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ConversionResponse {
  result: number;
}

const CurrencyExchange = () => {
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [amount, setAmount] = useState<number>(1); // Default amount to convert
  const [fromCurrency, setFromCurrency] = useState<string>('USD'); // Default from currency
  const [toCurrency, setToCurrency] = useState<string>('NPR'); // Default to currency
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get<ConversionResponse>('https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert', {
          params: {
            from: fromCurrency,
            to: toCurrency,
            amount: amount
          },
          headers: {
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
            'X-RapidAPI-Key': '4072bac47bmsh0c12ac58a5f681fp12b399jsn08dd165c22a7', // Replace with your actual API key
          }
        });
        setConversionRate(response.data.result);
        setError(null); // Clear any previous error
      } catch {
        setError("Error fetching currency data");
        setConversionRate(null);
      }
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency, amount]); // Re-fetch when amount, fromCurrency, or toCurrency change

  return (
    <div className="currency-exchange-container p-6 bg-white rounded-xl shadow-lg border-2 border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Currency Exchange</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label htmlFor="from-currency" className="text-gray-700 mb-2">From Currency</label>
          <select
            id="from-currency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="to-currency" className="text-gray-700 mb-2">To Currency</label>
          <select
            id="to-currency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="NPR">NPR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="amount" className="text-gray-700 mb-2">Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {conversionRate !== null ? (
        <div className="mt-4 bg-green-100 text-green-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold">
            {amount} {fromCurrency} = {conversionRate.toFixed(2)} {toCurrency}
          </p>
        </div>
      ) : (
        <p className="mt-4 text-gray-500">Loading conversion...</p>
      )}
    </div>
  );
};

export default CurrencyExchange;
