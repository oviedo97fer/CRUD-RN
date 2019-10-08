import {GET_BLOGS , DELETE_BLOG} from '../actions'
export function getBlogs(state=[], action){
    switch (action.type) {
        case GET_BLOGS:
            return action.blogs
        default:
            return state
    }
}