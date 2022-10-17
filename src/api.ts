const BASE_URL = `https://api.coinpaprika.com/v1`;

/** 코인 리스트 */
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

/** 코인 정보 */
export function fetchCoinInfo(coinId: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

/** 코인 가격 */
export function fetchCoinTickers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

/** */
export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
