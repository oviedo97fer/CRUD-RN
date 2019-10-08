export const GET_BLOGS = 'GET_BLOGS';
export const DELETE_BLOG = 'DELETE_BLOG'
export function getBlogs(blogs){
    return{
        type: GET_BLOGS,
        blogs
    }
}
export function deleteBlog(blog){
    return{
        type: DELETE_BLOG,
        blog
    }
}