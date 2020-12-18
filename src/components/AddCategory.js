import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(ctgs => [inputValue, ...ctgs]);
            setInputValue('');
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Category</h3>
            <input name="categ" id="categ" type="text" value={inputValue} onChange={handleInputValue} />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};



