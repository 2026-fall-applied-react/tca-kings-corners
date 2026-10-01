import { useNavigate } from "react-router";
import type { LeaderboardEntry } from "./GameResults";
import { useEffect } from "react";

export const APP_TITLE = "King's Corners Companion"

type HomeProps = {
    leaderboard: LeaderboardEntry[];
    setTitle: (title: string) => void;
};

export const Home: React.FC<HomeProps> = ({
    leaderboard,
    setTitle
}) => {

    //
    // react hooks
    //
    const nav = useNavigate();
    useEffect(
        () => setTitle(APP_TITLE),
        []
    )

    //
    // calculated or derived state
    //

    //
    // return jsx
    return (
        <div>
            <button
            className="btn btn-soft btn-lg mt-3 lg:w-64 w-full "
            onClick={
                () => nav('./setup')
            }>
                Setup A Game
            </button>
            <div className="card w-full bg-base-100 card-md shadow-lg my-5">
                <div className="card-body p-0">
                    <h2 className="card-title ml-3 mt-3">
                        Leaderboard
                    </h2>

                    <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Ratio</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                leaderboard.map(
                                    x => (
                                        <tr
                                            key={x.player}
                                            >
                                            <th>{x.player}</th>
                                            <td>{x.wins}</td>
                                            <td>{x.losses}</td>
                                            <td>{x.ratio.toFixed(3)}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                    </div>

                </div>
            </div>
        </div>
    );
};