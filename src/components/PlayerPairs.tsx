import React, { FC } from 'react';

interface PlayerPairsProps {
    pairs: string[];
}

const PlayerPairs: FC<PlayerPairsProps> = ({ pairs }) => {
    return (
        <div className="player-pairs">
            {pairs.map((pair, index) => (
                <p key={index}>{pair}</p>
            ))}
        </div>
    );
};

export default PlayerPairs;
