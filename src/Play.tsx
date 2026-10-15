import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import type React from "react";
import { useEffect, useState } from "react";

type PlayProps = {
    addNewGameResult:(result: GameResult) => void;
    setTitle: (title: string) => void;
}

export const Play: React.FC<PlayProps> = ({
    addNewGameResult,
    setTitle
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
            <button
            className="btn btn-soft btn-lg mt-3"
            onClick={
                () => {
                    addNewGameResult({
                        winner: "Hermione",
                        players: [
                            "Hermione",
                            "Harry",
                            "Ron"
                        ],
                        kingsPlayed: [
                            "Hermione",
                            "Hermione",
                            "Harry"
                        ],
                        start: startTimeStamp,
                        end: new Date().toISOString()
                    })
                    nav(-2);
                }
            }>
                Game Over
            </button>
        </div>
    );
};