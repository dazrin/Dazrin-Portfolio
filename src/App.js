 import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/About' />
      <Route component={SinglePost} path='/Post/:slug' />
      <Route component={Post} path='/Post' />
      <Route component={Project} path='/Project' />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
