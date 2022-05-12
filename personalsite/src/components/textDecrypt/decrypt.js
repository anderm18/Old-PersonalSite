import React, { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';

const dencryptCharsTitle = {
    chars: [
        "~","`","!","@","#","$","%","^","&","*","(",")","_",
        "-","+","=","{","}","[","]","|","'",";",":","<",">",
        "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z",
        "1","2","3","4","5","6","7","8","9","0"
    ],
    interval: 60,
};

const dencryptCharsText = {
    chars: [
        "~","`","!","@","#","$","%","^","&","*","(",")","_",
        "-","+","=","{","}","[","]","|","'",";",":","<",">",
        "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z",
        "1","2","3","4","5","6","7","8","9","0"
    ],
    interval: 30,
};

export const DecryptTitle = (someText) => {
    const { result, dencrypt } = useDencrypt(dencryptCharsTitle);

    React.useEffect(() => {
        const effectText = () => {
            dencrypt(someText.text || "");
        };

        const action = setTimeout(effectText, 0);

        return () => clearTimeout(action);

    }, [dencrypt, someText.text]);

    return (
        <p>
            {result}
        </p>
    );
};

export const DecryptText = (someText) => {
    const { result, dencrypt } = useDencrypt(dencryptCharsText);

    React.useEffect(() => {
        const effectText = () => {
            dencrypt(someText.text || "");
        };

        const action = setTimeout(effectText, 0);

        return () => clearTimeout(action);

    }, [dencrypt, someText.text]);

    return (
        <p>
            {result}
        </p>
    );

};