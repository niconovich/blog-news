import React from 'react'
import './Input.scss'

type InputProps = {
    label?: string
    type?: string
    className?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    error?: boolean
    value?: string
    errorText?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
    label,
    type,
    className,
    placeholder,
    disabled,
    error,
    value,
    errorText = 'Invalid text',
    onChange = () => {},
}: InputProps) => {

    return (
        <fieldset className={`${className}`}>
            <label>{label}
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                />
            </label>
            {error && <span>{errorText}</span>}
        </fieldset>
    )
}
