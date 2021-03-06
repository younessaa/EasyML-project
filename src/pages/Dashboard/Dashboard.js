import React from 'react';
import styles from './Dashboard.module.css';
import './Dashboard.css';
import { BsFillGearFill as IconDashboard } from "react-icons/bs";
import { HiUsers as IconUsers } from "react-icons/hi";
import { FaUserGraduate as IconExperts } from "react-icons/fa";
import { FaPython as IconModels } from "react-icons/fa";
import { SiBlogger as IconBlogs } from "react-icons/si";
import TabContentUsers from '../../components/TabContentUsers/TabContentUsers';
import TabContentExperts from '../../components/TabContentExperts/TabContentExperts';
import TabContentModels from '../../components/TabContentModels/TabContentModels';
import TabContentBlogs from '../../components/TabContentBlogs/TabContentBlogs';
import { Link } from 'react-router-dom';



function Dashboard() {
    
  return (
      <>
        <div className='container-fluid'>
            <div className='container-md'>
                <div className='row'>
                    <div className='col-sm-2 p-2 pb-3 pt-3'>
                        <Link className={styles.easyMLLink} to="/">
                            <div className={styles.easyML}>
                                {"<EasyML>"}
                            </div>
                        </Link>
                    </div>
                    <div className={styles.dashTitleBg + ' col-sm-10 p-2 pb-3 pt-3'}>
                        <div className={styles.dashTitle + " pl-5 pl-5"}>
                            <span className='mr-2 ml-2'><IconDashboard /></span> ADMIN DASHBOARD 
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-md'>
                <div className='row'>
                    <div className='col-2 pt-2 pb-2 pl-4 pr-5'>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-users" role="tab" aria-controls="v-pills-users" aria-selected="true"><span className={styles.navPill}><span className='mr-2'><IconUsers /></span>Users</span></a>
                            <a className="nav-link " id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-experts" role="tab" aria-controls="v-pills-experts" aria-selected="false"><span className='mr-2'><IconExperts /></span>Experts</a>
                            <a className="nav-link " id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-models" role="tab" aria-controls="v-pills-models" aria-selected="false"><span className='mr-2'><IconModels /></span>Models</a>
                            <a className="nav-link " id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-blogs" role="tab" aria-controls="v-pills-blogs" aria-selected="false"><span className='mr-2'><IconBlogs /></span>Blogs</a>
                        </div>
                    </div>
                    <div className={styles.tabContent + ' col-10'}>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-users" role="tabpanel" aria-labelledby="v-pills-users-tab">
                                <TabContentUsers />
                            </div>
                            <div className="tab-pane fade" id="v-pills-experts" role="tabpanel" aria-labelledby="v-pills-experts-tab">
                                <TabContentExperts />
                            </div>
                            <div className="tab-pane fade" id="v-pills-models" role="tabpanel" aria-labelledby="v-pills-models-tab">
                                <TabContentModels />
                            </div>
                            <div className="tab-pane fade" id="v-pills-blogs" role="tabpanel" aria-labelledby="v-pills-blogs-tab">
                                <TabContentBlogs />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-md'>
                <div className='row'>
                    <div className='col-sm-2 p-2 pb-5 pt-5'>
                        <div className={styles.easyML}>
                            {"<EasyML/>"}
                        </div>
                    </div>
                    <div className={styles.dashTitleBg + ' col-sm-10 p-2 pb-5 pt-5'}>
                        
                    </div>
                </div>
            </div>
        </div>
      </>         
  )
}

export default Dashboard;
