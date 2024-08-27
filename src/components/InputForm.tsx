import React, { FC } from 'react';

interface InputFormProps {
    targetHeight: string;
    setTargetHeight: React.Dispatch<React.SetStateAction<string>>;
    findPairs: () => void;
}

const InputForm: FC<InputFormProps> = ({ targetHeight, setTargetHeight, findPairs }) => {
    return (
        <div className="input-form">
            <input
                type="number"
                value={targetHeight}
                onChange={(e) => setTargetHeight(e.target.value)}
                placeholder="Enter target height"
            />
            <button onClick={findPairs}>Find Pairs</button>
        </div>
    );
};

export default InputForm;
