import './App.css'
import {
  HashRouter,
  Routes,
  Route,
  Router
} from 'react-router'
import {APP_TITLE, Home} from './Home'
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

  const [title, setTitle] = useState("King's Corner Companion123");

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
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="font-bold text-xl">{title}</a>
      </div>    

    
        <div className='p-3'>
          <HashRouter>
            <Routes>
              <Route 
                path='/'
                element={
                  <Home 
                  leaderboard={
                    getLeaderboard(gameResults)
                  }
                  setTitle={
                    setTitle
                  }/>
                } />

              <Route 
                path='/setup'
                element={
                  <Setup 
                  setTitle={
                    setTitle
                  }/>
                } />

              <Route 
                path='/play'
                element={
                  <Play
                  addNewGameResult={
                    addNewGameResult
                  } 
                  setTitle={
                    setTitle
                  }/>
                } />


            </Routes>
          </HashRouter>
        </div>
    </>

  )
}

export default App
