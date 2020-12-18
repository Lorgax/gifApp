import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    // const categories = ['Queen Gambit', 'Peaky Blinders', 'Modern Family'];
    const [categories, setCategories] = useState(["Queen's Gambit"])

    const handleAdd = () => {
        setCategories([...categories, '']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <button onClick={handleAdd}>Add</button>
            <ol>
                {
                categories.map(category => {
                    return <li className="animate__animated animate__backInDown animate__slow" key={category}>
                                <GifGrid category={category}/>
                            </li>;
                })
                }
            </ol>
        </>
    );
}
