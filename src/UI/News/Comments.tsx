import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { NewsI } from '../Type';
import CommentsItem from './CommentsItem';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Comments = ({ id }) => {
  const [comments, setComments] = useState<NewsI[]>([]);
  const addComents = (id: number): void => {
    axios.get(`https://api.hnpwa.com/v0/item/${id}.json`).then((response) => {
      if (response.data) {
        setComments(response.data.comments);
      }
    });
  };

  // @ts-ignore
  useEffect(() => {
    let flag = true;
    addComents(id);
    setInterval(() => {
      if (flag) addComents(id);
    }, 60000);
    return () => (flag = false);
  }, [id]);

  return (
    <div>
      {comments.length != null
        ? comments.map((comment) => {
            return (
              <CommentsItem
                key={comment.id}
                user={comment.user}
                content={comment.content}
                comments={comment.comments}
                comentCount={comment.comments_count}
                marginMother={0}
              />
            );
          })
        : null}
      <Button variant="outline-success" size="lg" type="button" onClick={() => addComents(id)}>
        Обновить
      </Button>{' '}
      <NavLink to={'/'}>
        <Button variant="outline-success" size="lg" type="button">
          Вернуться на главную
        </Button>{' '}
      </NavLink>
    </div>
  );
};

export default Comments;
