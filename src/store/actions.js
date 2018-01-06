import Vue from 'vue';

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const founds = data.founds;
        const stocksPortfolio = data.stocksPortfolio;

        const portfolio = {
          stocksPortfolio,
          founds
        };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    });
}