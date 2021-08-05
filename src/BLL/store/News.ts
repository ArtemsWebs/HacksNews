import { makeAutoObservable } from 'mobx';
import { NewsI } from '../../UI/Interface';
import axios from 'axios';

class News {
  newsList: NewsI[] = [];
  pagination = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addNews = async () => {
    this.newsList = [];
    for (let i = 1; i < 5; i++) {
      await axios.get<NewsI[]>(`https://api.hnpwa.com/v0/news/${i}.json`).then((response) => {
        this.newsList = this.newsList.concat(response.data).sort((a, b) => {
          return b.time - a.time;
        });
      });
    }
  };
  changePagination(newPag) {
    this.pagination = newPag;
  }
}
export default new News();
