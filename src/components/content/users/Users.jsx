import React from "react";
import css from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => <span onClick={(e) => props.onPageChanged(p)}
                                      className={`${props.currentPage === p && css.selectedPage} ${css.page}`}>{p} </span>)}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                           <NavLink to={'/profile/' + u.id}>
                            <img
                                src={u.photos.small !== null
                                    ? u.photos.small
                                    : "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"}
                                className={css.img}/>
                           </NavLink>
                       </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "fe52348c-f41b-4b44-b975-acc1674896f2"
                                        }
                                    }).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "fe52348c-f41b-4b44-b975-acc1674896f2"
                                        }
                                    }).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;