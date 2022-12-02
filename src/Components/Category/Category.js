import React from 'react';
import cateImg from '../../../src/image/category.PNG';
import './Category.css';
const Category = () => {
    return (
        <div className='category'>
            <div className="ctegoryImg mb-3 mx-1  ">
                <img className='d-block mx-auto' src={cateImg} alt="" />
            </div>

        </div>
    );
};

export default Category;