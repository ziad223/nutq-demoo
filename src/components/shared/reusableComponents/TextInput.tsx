// components/study-case-form/TextInput.tsx
import React from 'react';

interface TextInputProps {
    label?: string;
    name: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string;
    type?: string; // ← اختياري لتحديد نوع الإدخال (مثل "email" أو "password")
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // ← دالة تغيير اختيارية
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    defaultValue = '',
    disabled = false,
    placeholder = '',
    type = 'text', // ← النوع الافتراضي هو text
    onChange,
}) => {
    return (
        <div className="col-span-1">
            {label && (
                <label className="block text-sm font-bold mb-1 text-black">{label}</label>
            )}
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                disabled={disabled}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full p-2 border rounded text-black outline-none text-sm"
            />
        </div>
    );
};

export default TextInput;
