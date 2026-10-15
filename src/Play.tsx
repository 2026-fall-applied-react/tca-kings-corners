import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import type React from "react";
import { useEffect, useState } from "react";

type PlayProps = {
    addNewGameResult:(result: GameResult) => void;
    setTitle: (title: string) => void;
    currentPlayers: string[];
}

export const Play: React.FC<PlayProps> = ({
    addNewGameResult,
    setTitle,
    currentPlayers
}) => {


    const [startTimeStamp] = useState(
        new Date().toISOString()
    )
    const nav = useNavigate();
    useEffect(
            () => setTitle("Play"),
            []
        )
    return (
        <div>
            {
                currentPlayers.map(
                    x => (
            <button
                    className="btn btn-soft btn-lg mt-3"
                    onClick={
                        () => {
                            addNewGameResult({
                                winner: x,
                                players: currentPlayers
                                ,
                                kingsPlayed: [
                                    "Bryson"
                                ],
                                start: startTimeStamp,
                                end: new Date().toISOString()
                            })
                            nav(-2);
                        }
                    }>
                        {x} Won!
                    </button>
                    )
                )
            }
        
        </div>
    );
};