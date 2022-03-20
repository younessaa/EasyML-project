import * as api from '../api';

// Action Creators

export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs();

        dispatch({ type: 'FETCH_ALL_blogs', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const createBlog = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blog);

        dispatch({ type: 'CREATE_blog', payload: data })
    } catch (error) {
        console.log(error);
    }
}
