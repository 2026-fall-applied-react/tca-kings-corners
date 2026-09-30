import './App.css'
import {
  HashRouter,
  Routes,
  Route,
  Router
} from 'react-router'
import {Home} from './Home'
import {Setup} from './Setup'
import {Play} from './Play'
import type {GameResult} from './GameResults'  


const dummyGameResults: GameResult[] = [
    {
        winner: "John",
        players: [
            "Tom",
            "Suzie",
            "John"],
        // kingsPlayed: [
        //     "Bryson", // 1st played king
        //     "Bryson", // 2nd played king
        //     "John"    // 3rd played king
        // ]

    },
    {
        winner: "Bryson",
        players: [
            "Zach",
            "Bryson", 
            "Tom",],
        // kingsPlayed: [
        //     "Bryson",
        //     "Bryson",
        //     "John"
        // ]
    },
    {
        winner: "Bryson",
        players: [
            "Bryson", 
            "Tom",
            "Suzie",],
        // kingsPlayed: [
        //     "Bryson",
        //     "Bryson",
        //     "John"
        // ]
    },
    {
        winner: "Bryson",
        players: [
            "Bryson",
            "Suzie"],
        // kingsPlayed: [
        //     "Bryson",
        //     "Bryson",
        //     "John"
        // ]

    },
    
]



const App = () => {

  return (
        <div className='p-3'>
          <HashRouter>
            <Routes>
              <Route 
                path='/'
                element={
                  <Home />
                } />

              <Route 
                path='/setup'
                element={
                  <Setup />
                } />

              <Route 
                path='/play'
                element={
                  <Play />
                } />


            </Routes>
          </HashRouter>
        </div>

  )
}

export default App
