export default (blogs = [], action) => {
    switch (action.type) {
        case 'CREATE_blog':
            return [...blogs, action.payload];
        case 'FETCH_ALL_blogs':
            return action.payload;
    
        default:
            return blogs;
    }
}