import React from 'react';
import './App.css';
import Title from './UI/Main/Title';
import Main from './UI/Main/Main';
import {BrowserRouter, Route} from 'react-router-dom';
import NewsItem from './UI/News/NewsItem';

function App() {
  return (
      <BrowserRouter>
          <Route exact path="/" render={() =>
              <div className="App">
                  <Title title={()=>'HackerNews'}></Title>
                  <Main/>
              </div>
          }/>
          <Route path="/news" render={()=><NewsItem/>}/>
      </BrowserRouter>
  );
}

export default App;
