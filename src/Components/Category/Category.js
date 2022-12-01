import React from 'react';
import cateImg from '../../../src/image/category.PNG';
import './Category.css';
const Category = () => {
    return (
        <div className='category'>
            <div className="ctegoryImg my-5  ">
                <img className='d-block mx-auto' src={cateImg} alt="" />
            </div>

        </div>
    );
};

export default Category;