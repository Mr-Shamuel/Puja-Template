import React from 'react';
import './userProfile.css'
import top1 from '../../../src/image/top1_badge.png';
import top2 from '../../../src/image/top2_badge.png';
import top3 from '../../../src/image/top3_badge.png';
import user from '../../../src/image/user.PNG';
import usreInfo from '../../../src/image/userinfo.PNG';

import './Responsive.css'
const UserProfile = () => {
    return (
        <div div className='userProfile  mx-1 my-4 row p-3' >

            <div className="col-4 p-0  row">
                <div className="rankBase col-4">
                    <div className="rank">
                        <img src={top1} alt="" />
                    </div>
                    <div className="flag ">
                        {/* <img style={{ width: '20px', margin: '2px', display: 'block', margin: 'auto', paddingTop: '5px' }} src='https://clipart.world/wp-content/uploads/2022/01/National-Flag-of-India-clipart-download.png' alt="" /> */}
                        <img src='https://clipart.world/wp-content/uploads/2022/01/National-Flag-of-India-clipart-download.png' alt="" />
                    </div>
                </div>
                <div className=" col-7   ">
                    <div className="userPhoto">
                        <img className=' ' src={user} alt="" />
                    </div>
                </div>

            </div>


            <div className="col-6    userInfo">
                <div className="userInfoImg">
                    <img src={usreInfo} alt="" />
                </div>
            </div>


            <div className="col-2 hivesContainer">

                <h1>HIVES</h1>
                <div className="hiveBtns ">
                    <h2>1620212</h2>
                </div>
            </div>



        </div >
    );
};

export default UserProfile;