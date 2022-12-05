import React from 'react';
// import './Profile.css';
import top1 from '../../../src/image/top1_badge.png';
import top2 from '../../../src/image/top2_badge.png';
import top3 from '../../../src/image/top3_badge.png';
import user from '../../../src/image/user.PNG';
import usreInfo from '../../../src/image/userinfo.PNG';
const Profile = () => {
    return (
        <div>
            {/* for user 1 */}
            <div className='profileContainer  ' >
                <div className="row">
                    <div className=" col-md-3  left">
                        <div className="rank">
                            <img src={top1} alt="" />
                        </div>
                        <div className="flagCon">
                            <img src='https://clipart.world/wp-content/uploads/2022/01/National-Flag-of-India-clipart-download.png' alt="" />
                        </div>

                        <div className="  userPhoto ">
                            <img className='' src={user} alt="" />
                        </div>
                    </div>



                    <div className="col-md-4 userInfo">
                        <div className="userInfoImg">

                            <img src={usreInfo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3  col-sm-3 hivesContainer  ">
                        <h1>HIVES</h1>
                        <div className="hiveBtns ">
                            <h2>1620212</h2>
                        </div>

                    </div>

                </div>

            </div>
            {/* for user 2 */}
            <div className='profileContainer  ' >
                <div className="row">
                    <div className=" col-md-3  left">
                        <div className="rank">
                            <img src={top2} alt="" />
                        </div>
                        <div className="flagCon">
                            <img src='https://clipart.world/wp-content/uploads/2022/01/National-Flag-of-India-clipart-download.png' alt="" />
                        </div>

                        <div className="  userPhoto ">
                            <img className='' src={user} alt="" />
                        </div>
                    </div>



                    <div className="col-md-4 userInfo">
                        <div className="userInfoImg">

                            <img src={usreInfo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3  col-sm-3 hivesContainer  ">
                        <h1>HIVES</h1>
                        <div className="hiveBtns ">
                            <h2>1620212</h2>
                        </div>

                    </div>

                </div>

            </div>

            {/* for user 3 */}
            <div className='profileContainer  ' >
                <div className="row">
                    <div className=" col-md-3  left">
                        <div className="rank">
                            <img src={top3} alt="" />
                        </div>
                        <div className="flagCon">
                            <img src='https://clipart.world/wp-content/uploads/2022/01/National-Flag-of-India-clipart-download.png' alt="" />
                        </div>

                        <div className="  userPhoto ">
                            <img className='' src={user} alt="" />
                        </div>
                    </div>



                    <div className="col-md-4 userInfo">
                        <div className="userInfoImg">

                            <img src={usreInfo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3  col-sm-3 hivesContainer  ">
                        <h1>HIVES</h1>
                        <div className="hiveBtns ">
                            <h2>1620212</h2>
                        </div>

                    </div>

                </div>

            </div>
            {/* user 4  */}
            <div className='profileContainer  ' >
                <div className="row">
                    <div className=" col-md-3  left">
                        <div className="rank">
                            <img src={top1} alt="" />
                        </div>
                        <div className="flagCon">
                            <img src='https://clipart.world/wp-content/uploads/2022/01/National-Flag-of-India-clipart-download.png' alt="" />
                        </div>

                        <div className="  userPhoto ">
                            <img className='' src={user} alt="" />
                        </div>
                    </div>



                    <div className="col-md-4 userInfo">
                        <div className="userInfoImg">

                            <img src={usreInfo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3  col-sm-3 hivesContainer  ">
                        <h1>HIVES</h1>
                        <div className="hiveBtns ">
                            <h2>1620212</h2>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    );
};

export default Profile;