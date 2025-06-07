// components/study-case-form/TextInput.tsx
import React from 'react';

interface TextInputProps {
    label: string;
    name: string;
    defaultValue?: string;
    disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    defaultValue = '',
    disabled = false
}) => {
    return (
        <div className="col-span-1">
            <label className="block text-sm font-bold mb-1 text-black">{label}</label>
            <input
                type="text"
                name={name}
                defaultValue={defaultValue}
                disabled={disabled}
                className="w-full p-2 border rounded text-black outline-none text-sm"
            />
        </div>
    );
};

export default TextInput;