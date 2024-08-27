import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm.tsx';
import PlayerPairs from './components/PlayerPairs.tsx';
import './styles/styles.css';

interface Player {
    first_name: string;
    last_name: string;
    h_in: string;
}

const App: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [targetHeight, setTargetHeight] = useState<string>('');
    const [pairs, setPairs] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://mach-eight.uc.r.appspot.com/')
            .then(response => response.json())
            .then(data => setPlayers(data.values))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const findPairs = () => {
        const target = parseInt(targetHeight, 10);
        const result: string[] = [];
        const map = new Map<number, Player>();

        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            const height = parseInt(player.h_in, 10);
            const complement = target - height;

            if (map.has(complement)) {
                const complementPlayer = map.get(complement)!;
                result.push(`${player.first_name} ${player.last_name} - ${complementPlayer.first_name} ${complementPlayer.last_name}`);
            }

            map.set(height, player);
        }

        setPairs(result.length > 0 ? result : ['No matches found']);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>NBA Player Height Finder</h1>
            <InputForm
                targetHeight={targetHeight}
                setTargetHeight={setTargetHeight}
                findPairs={findPairs}
            />
            <PlayerPairs pairs={pairs} />
        </div>
    );
};

export default App;
