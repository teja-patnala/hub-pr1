import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Bookshelves from './components/Bookshelves'
import NotFound from './components/NotFound'
import BookData from './components/BookData'
import Cart from './components/Cart'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/bookshelves" component={Bookshelves} />
          <ProtectedRoute exact path="/books/:id" component={BookData} />
          <ProtectedRoute exact path="/favourites" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App
