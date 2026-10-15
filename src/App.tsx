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
import {getGeneralFacts, getLeaderboard, type GameResult} from './GameResults'  
import { useState } from 'react'


const dummyGameResults: GameResult[] = [
    {
        winner: "John",
        players: [
            "Tom",
            "Suzie",
            "John"],
        kingsPlayed: [
            "Bryson", // 1st played king
            "Bryson", // 2nd played king
            "John"    // 3rd played king
        ],
        start: "2026-10-11T23:45:37.161Z",
        end: "2026-10-11T23:55:52.161Z",
    },{
        winner: "Bryson",
        players: [
            "Zach",
            "Bryson", 
            "Tom",],
        kingsPlayed: [
            "Bryson",
            "Bryson",
            "John"
        ],
        start: "2026-10-11T23:45:37.161Z",
        end: "2026-10-11T23:55:52.161Z",
    },{
        winner: "Bryson",
        players: [
            "Bryson", 
            "Tom",
            "Suzie",],
        kingsPlayed: [
            "Bryson",
            "Bryson",
            "John"
        ],
        start: "2026-10-11T23:45:37.161Z",
        end: "2026-10-11T23:49:32.161Z",
    },{
        winner: "Bryson",
        players: [
            "Bryson",
            "Suzie"],
        kingsPlayed: [
            "Bryson",
            "Bryson",
            "John"
        ],
        start: "2026-10-11T23:45:37.161Z",
        end: "2026-10-11T23:55:52.161Z",
    },
];





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
                  }
                  generalFacts={getGeneralFacts(gameResults)}
                  />
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
