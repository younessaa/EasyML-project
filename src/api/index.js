import axios from 'axios';

const url_experts = 'http://localhost:5000/experts';
const url_models = 'http://localhost:5000/models';
const API = axios.create({baseURL : 'http://localhost:5000'});
const url_blogs = 'http://localhost:5000/blogs';
const url_sendMail = 'http://localhost:5000/send-mail';
const url_user = 'http://localhost:5000/user';
const url_exploitables = 'http://localhost:5000/exploitables';

export const fetchBlogs = () => axios.get(url_blogs);
export const createBlog = (newBlog) => axios.post(url_blogs, newBlog);
export const deleteBlog = (id) => axios.delete(`${url_blogs}/${id}`);

export const sendMail = (newMail) => axios.post(url_sendMail, newMail);

export const fetchExperts = () => axios.get(url_experts);
export const fetchExpert = (id) => axios.get(`${url_experts}/${id}`);
export const createExpert = (newExpert) => axios.post(url_experts, newExpert);
export const updateExpert = (id, updatedExpert) => axios.patch(`${url_experts}/${id}`, updatedExpert);
export const deleteExpert = (id) => axios.delete(`${url_experts}/${id}`);

export const fetchModels = () => axios.get(url_models);
export const fetchModel = (id) => axios.get(`${url_models}/${id}`);
export const createModel = (newModel) => axios.post(url_models, newModel);
export const updateModel = (id, updatedModel) => axios.patch(`${url_models}/${id}`, updatedModel);
export const deleteModel = (id) => axios.delete(`${url_models}/${id}`);

export const signIn = (formData) => API.post('/user/signin' , formData);
export const signUp = (formData) => API.post('/user/signup' , formData);
export const createUser = (newUser) => axios.post(url_user, newUser);
export const fetchUsers = () => axios.get(url_user);
export const deleteUser = (id) => axios.delete(`${url_user}/${id}`);

export const fetchExploitables = () => axios.get(url_exploitables);
export const createExploitable = (newExploitable) => axios.post(url_exploitables, newExploitable);
export const deleteExploitable = (id) => axios.delete(`${url_exploitables}/${id}`);
