import type React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type SetUpProps = {
    setTitle: (title: string) => void;
    previousPlayers: string[];
    setCurrentPlayers: (players: string[]) => void;
};







export const Setup: React.FC<SetUpProps> = ({
    setTitle,
    previousPlayers,
    setCurrentPlayers,
}) => {

    const [availabePlayers, setAvailablePlayers] = useState(
        previousPlayers.map(
            x => (
                {
                    name: x,
                    checked: false,
                }
            )
        )
    )


    useEffect(
                () => setTitle("Setup"),
                []
            )

    const nav = useNavigate();

    return (
        <div>
            <button
            className="btn btn-soft btn-lg mt-3 lg:w-64 w-full"
            onClick={
                () => {
                    setCurrentPlayers(
                        availabePlayers.filter(
                            x => x.checked
                        ).map(
                            x => x.name
                        )
                    )
                    nav('../play')
                }
            }>
                Play the game
            </button>
            {
                availabePlayers.map(
                    x => (
                        <p
                        key={x.name}>
                        <label className="text-lg">
                            <input onChange={(e) => setAvailablePlayers(
                                players => players.map(
                                    player => player.name === x.name
                                    ? {...player,
                                        checked: e.target.checked
                                    }
                                    : player 
                                )
                            )} checked={x.checked} type="checkbox" className="checkbox checkbox-lg mr-2"  />
                            {x.name}
                        </label>
                        </p>
                    )
                )
            }
        </div>
    );
};