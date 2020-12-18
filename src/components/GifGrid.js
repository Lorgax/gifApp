import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h4>{category}</h4>

            { loading && <p>Loading...</p> }

            <div className='cardGrid'>
                {
                    images.map( image => {
                        return <GifGridItem key={image.id} {...image} />;
                    })
                }
            </div>
        </>
    );
};
