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
import {getLeaderboard, type GameResult} from './GameResults'  
import { useState } from 'react'


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
            "Tom"],
        // kingsPlayed: [
        //     "Bryson",
        //     "Bryson",
        //     "John"
        // ]

    },
        {
        winner: "Tom",
        players: [
            "Suzie",
            "Tom",
            "John"],
        // kingsPlayed: [
        //     "Bryson",
        //     "Bryson",
        //     "John"
        // ]

    },
    
]



const App = () => {

  //
  // React Hooks, useState, useEffect, use*
  //

  
  // const [gameResults, setGameResults] = useState<GameResult[]>([]);
  const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);


  //
  // Derived or calculated and helper funcs
  //
  const addNewGameResult = (newGameResult: GameResult) => setGameResults(
    [
      ...gameResults,
      newGameResult
    ]
  );



  //
  // Return JSX
  //
  return (
        <div className='p-3'>
          <HashRouter>
            <Routes>
              <Route 
                path='/'
                element={
                  <Home 
                  leaderboard={
                    getLeaderboard(gameResults)
                  }/>
                } />

              <Route 
                path='/setup'
                element={
                  <Setup />
                } />

              <Route 
                path='/play'
                element={
                  <Play
                  addNewGameResult={
                    addNewGameResult
                  } />
                } />


            </Routes>
          </HashRouter>
        </div>

  )
}

export default App
