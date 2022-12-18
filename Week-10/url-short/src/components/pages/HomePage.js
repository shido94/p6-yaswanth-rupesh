import React from 'react'
import { useState } from 'react';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

export default function HomePage() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="container">
          <InputShortener setInputValue={setInputValue} />
          <LinkResult inputValue={inputValue} />
        </div>
      );
}
