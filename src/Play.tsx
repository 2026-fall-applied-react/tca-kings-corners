import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import type React from "react";
import { useEffect, useState } from "react";

type PlayProps = {
    addNewGameResult: (result: GameResult) => void;
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
    );
    const [turnNumber, setTurnNumber] = useState(1);

    const nav = useNavigate();
    useEffect(
        () => setTitle("Play"),
        []
    )
    return (
        <div>
            <div
                className="text-lg font-bold"
            >
                Turn {turnNumber}
                <div className="join join-horizontal ml-3">
                    <button className="btn join-item"
                        // onClick={
                        //     () => turnNumber > 1 
                        //         ? setTurnNumber(turnNumber - 1)
                        //         : turnNumber
                        // }

                        onClick = {
                            () => turnNumber > 1 && setTurnNumber(turnNumber - 1)
                        }
                    >
                        -
                    </button>
                    <button 
                        className="btn join-item"
                        onClick={() => setTurnNumber(turnNumber + 1)}
                    >+</button>
                </div>
            </div>
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
                                        end: new Date().toISOString(),
                                        turnCount: turnNumber,
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