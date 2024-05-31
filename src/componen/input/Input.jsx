import React from "react";

export const Input = ({
    className,
    type,
    value,
    onChange,
    name,
    placeholder,
    style,
})=>{
    return(
        <input
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        className={className} 
        onChange={onChange} 
        style={style}
        />
    )
}