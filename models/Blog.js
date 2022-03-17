import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BlogSchema = new Schema({

    idExpert: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },

    content: {
        type: String,
        require: true
    },

    selectedFile: String,

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Blog = mongoose.model('blog', BlogSchema);

export default Blog;