import { durationFormatter } from "human-readable"

const formatGameDuration = durationFormatter<string>();

const formatLastPlayed = durationFormatter<string>(
    {
        allowMultiples: [
            "y",
            "mo",
            "d",
        ]
    }
)

//
// Type Definitions
//
export type GameResult = {
    winner: string;
    players: string[];
    kingsPlayed: string[]; // First, Second, Third, Fourth (If played). Can be 0 played
    start: string;
    end: string;
    turnCount: number;
};

export type LeaderboardEntry = {
    player: string;
    wins: number;
    losses: number;
    ratio: number;
    kingsPlayed: number;
}

export type GeneralFacts = {
    lastPlayed: string;
    totalGames: number;
    // totalKingsPlayed: number;
    shortestGame: string;
    longestGame: string;
    avgTurns: string;
};

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


export const getGeneralFacts  = (games: GameResult[]):GeneralFacts => {
    
    if (
        games.length === 0
    ) {
        return (
        {
            lastPlayed: "N/A",
            totalGames: 0,
            shortestGame: "N/A",
            longestGame: "N/A",
            avgTurns: "N/A",
        }
        );
    }

    const nowForCalc = Date.now();


    const gamesLastPlayedInMs = games.map(
        x => nowForCalc - Date.parse(x.end)
    );

    const mostRecentGameInMs = Math.min(
        ...gamesLastPlayedInMs);

    const gameDurationsInMS =games.map(
        x => Date.parse(x.end) - Date.parse(x.start)
    );

    const sumOfTurnCounts = games
        .map(
            x => x.turnCount,
        )
        .reduce(
            (acc, cur) => acc + cur,
            0,
        )
    ;


    return (
        {
            lastPlayed: `${formatLastPlayed(mostRecentGameInMs)} days ago `,
            totalGames: games.length,
            shortestGame: formatGameDuration(Math.min(...gameDurationsInMS)),
            longestGame: formatGameDuration(Math.max(...gameDurationsInMS)),
            avgTurns: (sumOfTurnCounts / games.length).toFixed(2),
        }
        );
}

export const getPreviousPlayers = (games: GameResult[]): string[] =>    
    games.flatMap(
        x => x.players
    ).filter(
        (x, i, a) => i === a.findIndex(
            y => y === x
        )
    ).sort(
        (a, b) => a.localeCompare(b)
    )

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

        const totalNumberOfKingsPlayed = games.reduce(
            (sum, game) => {
                const kingsThisGame = game.kingsPlayed.filter( p => p === player).length;

                return sum + kingsThisGame;
            }, 0
        )

        return {
            player: player,
            wins: numberOfPlayerWins,
            losses: numberOfPlayerGames - numberOfPlayerWins,
            ratio: numberOfPlayerGames > 0
            ? numberOfPlayerWins/numberOfPlayerGames
            : 0,
            kingsPlayed: totalNumberOfKingsPlayed
        };
}


