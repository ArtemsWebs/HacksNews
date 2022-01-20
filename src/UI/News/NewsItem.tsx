import React, { useCallback, useEffect, useState } from 'react';
import Title from '../Main/Title';
import { observer } from 'mobx-react-lite';
import News from '../../BLL/store/News';
import Main from './Main';

import { NewsI } from '../Type';

const NewsItem = observer(() => {
  const [id, setId] = useState(Number(window.location.href.split('/').slice(-1)));

  useEffect(() => {
    if (!News.newsList.length) {
      News.addNews();
    }
  }, []);
  const getNews = useCallback((id: number): NewsI | null => {
    return News.newsList.filter((news) => news.id === id)[0] === undefined
      ? null
      : News.newsList.filter((news) => news.id === id)[0];
  }, []);

  const getTitle = useCallback((id: number): string => {
    return News.newsList.filter((news) => news.id === id)[0] === undefined
      ? ''
      : News.newsList.filter((news) => news.id === id)[0].title;
  }, []);
  return (
    <div>
      <Title title={() => getTitle(id)} />
      <Main news={getNews(id)} />
    </div>
  );
});

export default NewsItem;
