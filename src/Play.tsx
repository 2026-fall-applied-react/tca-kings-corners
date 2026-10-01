import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import type React from "react";
import { useEffect } from "react";

type PlayProps = {
    addNewGameResult:(result: GameResult) => void;
    setTitle: (title: string) => void;
}

export const Play: React.FC<PlayProps> = ({
    addNewGameResult,
    setTitle
}) => {

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
                        ]
                    })
                    nav(-2);
                }
            }>
                Game Over
            </button>
        </div>
    );
};