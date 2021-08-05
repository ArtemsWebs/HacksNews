import React, { useEffect, useState } from 'react';
import NewsComponent from './NewsList';
import Button from 'react-bootstrap/Button';
import { ButtonContainer } from '../styledComponents';
import { ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import News from '../../BLL/store/News';
import { observer } from 'mobx-react-lite';
import { Position } from '../Type';

const Main = observer((props) => {
  //Local state
  //useEffect запускаеться при монтировании компоненты,
  //отвечает за обновление News раз в минуту
  const positionMas: Position[] = [
    { start: 0, end: 30 },
    { start: 30, end: 60 },
    { start: 60, end: 90 },
    { start: 90, end: 120 },
  ];
  let [flag, setFlag] = useState(0);

  const pagination = (id: number) => {
    return News.newsList
      .filter((news, idx) => idx > positionMas[id - 1].start && idx < positionMas[id - 1].end)
      .map((news, idx) => {
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
      });
  };
  useEffect(() => {
    News.addNews();
    let timer = setInterval(() => {
      News.addNews();
    }, 60000);
    return () => clearInterval(timer);
  }, [flag]);

  return (
    <div>
      <div>{pagination(News.pagination)}</div>

      <ButtonContainer>
        <ButtonGroup aria-label="Basic example">
          <NavLink to={`/page/${News.pagination}`} onMouseDown={() => News.changePagination(1)}>
            <Button variant="secondary">1</Button>
          </NavLink>
          <NavLink to={`/page/${News.pagination}`} onMouseDown={() => News.changePagination(2)}>
            <Button variant="secondary">2</Button>
          </NavLink>
          <NavLink to={`/page/${News.pagination}`} onMouseDown={() => News.changePagination(3)}>
            <Button variant="secondary">3</Button>
          </NavLink>
          <NavLink to={`/page/${News.pagination}`} onMouseDown={() => News.changePagination(4)}>
            <Button variant="secondary">4</Button>
          </NavLink>
        </ButtonGroup>
      </ButtonContainer>

      <ButtonContainer>
        <Button variant="outline-success" size="lg" type="button" onClick={() => setFlag((prevState) => prevState + 1)}>
          Обновить
        </Button>{' '}
      </ButtonContainer>
    </div>
  );
});

export default Main;
