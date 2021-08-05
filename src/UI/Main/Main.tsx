import React, { useEffect } from 'react';
import NewsComponent from './NewsList';
import Button from 'react-bootstrap/Button';

import News from '../../BLL/store/News';
import { observer } from 'mobx-react-lite';

const Main = observer(() => {
  //Local state
  //useEffect запускаеться при монтировании компоненты,
  //отвечает за обновление News раз в минуту
  useEffect(() => {
    News.addNews();
    let timer = setInterval(() => {
      News.addNews();
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className={'NewsContainer'}>
        {News.newsList.map((news, idx) => {
          return (
            <NewsComponent
              id={news.id}
              title={news.title}
              position={idx}
              raiting={news.points}
              author={news.user}
              date={news.time_ago}
              key={news.id}
            />
          );
        })}
      </div>
      <Button variant="outline-success" size="lg" type="button" onClick={() => News.addNews()}>
        Обновить
      </Button>{' '}
    </div>
  );
});

export default Main;
