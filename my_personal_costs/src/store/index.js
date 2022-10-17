import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costsList: [],
    categoryList: [],
    categoryListLength: 6,
    page: 1,
    pagesCount: 1,
  },
  getters: {
    getCostsList: ({costsList, page}) => (`page${page}` in costsList) ? costsList[`page${page}`] : costsList,
    getCategoryList: ({categoryList}) => categoryList,
    getPage: ({page}) => page,
    getPageCount: ({pagesCount}) => pagesCount,
  },
  mutations: {
    setCostsList: (state, payload) => {
      state.costsList = payload;
      state.pagesCount = Object.keys(payload).length;
    },
    addCostsList: (state, payload) => {
      let lastPage = Object.keys(state.costsList).slice(-1);
      let newCost = Object.assign({id: ++state.categoryListLength }, payload);

      if (state.costsList[lastPage].length < 3) {
        state.costsList[lastPage].push(newCost);
      } else {
        state.pagesCount++;
        state.costsList[`page${state.pagesCount}`] = [newCost];
      }
    },
    setSearchString: (state, payload) => state.searchString = payload,
    setCategoryList: (state, payload) => state.categoryList = payload,
    addNewCategory: (state, payload) => state.categoryList.push(payload),
    setPage: (state, payload) => state.page = payload,
  },
  actions: {
    featchData({commit}) {
      return new Promise((resolve, reject)=> {
        if (Object.keys(this.state.costsList).length) return;

        setTimeout(() => {
          resolve({
            "page1": [
              {"id": 1, "date": "12.09.2022", "category": "Еда", "value": 1582},
              {"id": 2, "date": "15.09.2022", "category": "Транспорт", "value": 245},
              {"id": 3, "date": "20.09.2022", "category": "Здоровье", "value": 780},
            ],
            "page2": [
              {"id": 4, "date": "20.09.2022", "category": "Здоровье", "value": 780},
              {"id": 5, "date": "20.09.2022", "category": "Здоровье", "value": 780},
              {"id": 6, "date": "20.09.2022", "category": "Здоровье", "value": 780},
            ]
          })
        }, 1000)
      })
      .then((list) => commit('setCostsList', list));
    },
    loadCategory({commit}) {
      return new Promise((resolve, reject)=> {
        if (this.state.categoryList.length) return;

        setTimeout(() => {
          resolve([
            'Еда',
            'Транспорт',
            'Обучение',
            'Здоровье'
          ])
        }, 1000)
      })
      .then((list) => commit('setCategoryList', list));
    }
  },
})
