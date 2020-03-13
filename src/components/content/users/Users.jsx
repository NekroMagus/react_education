import React from "react";
import css from "./Users.module.css";

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
                            <img
                                src={u.photos.small !== null
                                    ? u.photos.small
                                    : "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"}
                                className={css.img}/>
                       </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
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