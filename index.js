import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_LWWGwQLommkTFKCIDJXGbB60GAaqtaedNBkhgau1');

export async function convertCurrency(fromCurrency, toCurrency, amount) {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
  });

  const rate = response.data[toCurrency];
  return amount * rate;
}


