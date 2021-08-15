import { makeAutoObservable } from 'mobx';
import { NewsI } from '../../UI/Type';
import axios from 'axios';

class News {
  newsList: NewsI[] = [];
  pagination = 1;
  constructor() {
    makeAutoObservable(this);
  }
  addNews = async () => {
    // eslint-disable-next-line no-console
    console.log('Я тут');
    this.newsList = [];
    for (let i = 1; i < 5; i++) {
      await axios.get<NewsI[]>(`https://api.hnpwa.com/v0/news/${i}.json`).then((response) => {
        this.newsList = this.newsList.concat(response.data).sort((a, b) => {
          return b.time - a.time;
        });
      });
    }
  };
  setPage = (): void => {
    if (document.location.href.split('/').includes('page'))
      this.pagination = Number(document.location.href.split('/').slice(-1));
  };
}
export default new News();
