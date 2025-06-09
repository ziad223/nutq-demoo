// components/study-case-form/TextInput.tsx
import React from 'react';

interface TextInputProps {
    label?: string;
    name: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string; // ← أضف هذا السطر
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    defaultValue = '',
    disabled = false,
    placeholder = '' 
}) => {
    return (
        <div className="col-span-1">
            <label className="block text-sm font-bold mb-1 text-black">{label}</label>
            <input
                type="text"
                name={name}
                defaultValue={defaultValue}
                disabled={disabled}
                placeholder={placeholder} // ← أضف هذا السطر
                className="w-full p-2 border rounded text-black outline-none text-sm"
            />
        </div>
    );
};

export default TextInput;
