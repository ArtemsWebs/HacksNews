import React from 'react';
import './App.css';
import Title from './UI/Main/Title';
import Main from './UI/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewsItem from './UI/News/NewsItem';
import News from './BLL/store/News';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const get = () => {
    let mas: any[] = [];
    for (let i = 1; i < 5; i++) {
      mas.push(
        <Route
          key={i}
          path={`/page/${i}`}
          render={() => (
            <div className="App">
              <Main />
            </div>
          )}
        />,
      );
    }
    return mas;
  };
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <div className="App">
            <Title title={() => 'HackerNews'}></Title>
            <Main />
          </div>
        )}
      />
      <Route
        path="/page"
        render={() => (
          <div className="App">
            <Title title={() => 'HackerNews'}></Title>
          </div>
        )}
      />
      <Switch>{get()}</Switch>
      <Route path="/news" render={() => <NewsItem />} />
    </BrowserRouter>
  );
});

export default App;
