import { useNavigate } from "react-router";
import type { LeaderboardEntry } from "./GameResults";

type HomeProps = {
    leaderboard: LeaderboardEntry[];
};

export const Home: React.FC<HomeProps> = ({
    leaderboard
}) => {

    console.log(leaderboard)

    const nav = useNavigate();

    return (
        <div>
            <h1>
                Home
            </h1>

            <button
            className="btn btn-soft btn-lg mt-3"
            onClick={
                () => nav('./setup')
            }>
                Setup A Game
            </button>
        </div>
    );
};