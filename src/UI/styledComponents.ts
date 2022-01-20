import styled from 'styled-components';
import { Navbar } from './Main/Title';

export const NewsContainer = styled(Navbar)`
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
  text-align: center;
`;
export const Text = styled.div`
  font-family: Gowun Dodum;
  font-size: 16px;
  margin-left: 20px;
`;
export const Raiting = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  align-items: center;
  height: 20px;
  margin-left: 20px;
  border-radius: 20px;
`;

export const Author = styled.p`
  font-weight: 600;
  text-align: start;
  margin-left: 20px;
  margin-bottom: 5px;
`;

export const CommentText = styled(Author)`
  font-weight: 200;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
`;
