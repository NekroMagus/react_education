import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "fe52348c-f41b-4b44-b975-acc1674896f2"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data);
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(res => res.data);
    }
};

