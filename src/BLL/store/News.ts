import { makeAutoObservable } from 'mobx';
import { NewsI } from '../../UI/Interface';
import axios from 'axios';

class News {
  newsList: NewsI[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNews = async () => {
    this.newsList = [];
    for (let i = 1; i < 5; i++) {
      await axios.get<NewsI[]>(`https://api.hnpwa.com/v0/news/${i}.json`).then((response) => {
        if (i === 4) {
          this.newsList = this.newsList
            .concat(response.data)
            .sort((a, b) => {
              return b.time - a.time;
            })
            .slice(0, 100);
        } else
          this.newsList = this.newsList.concat(response.data).sort((a, b) => {
            return b.time - a.time;
          });
      });
    }
  };
}
export default new News();
