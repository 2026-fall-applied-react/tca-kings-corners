//
// Type Definitions
//
export type GameResult = {
    winner: string;
    players: string[];
    // kingsPlayed: string[]; // First, Second, Third, Fourth (If played). Can be 0 played
};

export type LeaderboardEntry = {
    player: string;
    wins: number;
    losses: number;
    ratio: number;
}

//
// Public Fxns
//
export const getLeaderboard = (games: GameResult[]): LeaderboardEntry[] => 
    getPreviousPlayers(games).map(
        x => ({
            ...getLeaderboardEntry(
                games,
                x,
            )
        })
    ).sort(
        (a,b) => (
            a.ratio === b.ratio
            ? a.wins === 0 && b.wins === 0
                ? (a.wins + a.losses) - (b.wins + b.losses) // 0 wins, more losses, lower on the leaderboard
                : (b.wins + b.losses) - (a.wins + a.losses) // more games with a win, means higher on the leaderboard
            : b.ratio - a.ratio
        )
    );



//
// Helper Fxns
//
const getLeaderboardEntry = (
    games: GameResult[],
    player: string,
    ):LeaderboardEntry => {

        const numberOfPlayerGames = games.filter(
            x => x.players.some(
                y => y === player
            )
        ).length;
        const numberOfPlayerWins = games.filter(
            x => x.winner === player
        ).length;

        return {
            player: player,
            wins: numberOfPlayerWins,
            losses: numberOfPlayerGames - numberOfPlayerWins,
            ratio: numberOfPlayerGames > 0
            ? numberOfPlayerWins/numberOfPlayerGames
            : 0
        };
}


const getPreviousPlayers = (games: GameResult[]): string[] =>    
    games.flatMap(
        x => x.players
    ).filter(
        (x, i, a) => i === a.findIndex(
            y => y === x
        )
    ).sort(
        (a, b) => a.localeCompare(b)
    )
