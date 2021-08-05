import React from 'react';
import { NewsContainer, Text } from '../styledComponents';
import styled from 'styled-components';

import Comments from './Comments';

const TextHref = styled.h5`
  text-align: center;
  width: 100%;
  transition: 0.5s;

  :hover {
    box-shadow: 0 1px 3px 5px rgba(0, 0, 0, 0.6);
    border: 2px solid white;
    border-radius: 2px;
    transition: 0.5s;
  }
`;
const TitleText = styled(Text)`
  font-size: 24px;
`;
const ComentContainer = styled(NewsContainer)`
  display: block;
`;

const NewsContainerD = styled(NewsContainer)`
  justify-content: center;
`;

const Main = ({ news }) => {
  return (
    <div>
      <NewsContainerD>
        <a href={news != null ? news.url : '#'}>
          <TextHref> Я ссылка на новость, нажми меня </TextHref>
        </a>
      </NewsContainerD>
      <NewsContainerD>
        <TitleText>{`Автор: ${news ? news.user : ''}`}</TitleText>
        <TitleText>{`${news ? news.time_ago : ''}`}</TitleText>
      </NewsContainerD>
      <ComentContainer>
        <TitleText className="pt-3">Комментарии</TitleText>
        {news ? <Comments id={news.id} /> : <h3>Комментарив нет</h3>}
      </ComentContainer>
    </div>
  );
};
export default Main;
