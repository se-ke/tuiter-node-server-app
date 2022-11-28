import {Schema} from 'mongoose';
const schema = new Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    image: String,
    handle: String,
    time: String,
    username: String,
    replies: Number,
    retuits: Number,
    disliked: Boolean,
    dislikes: Number
}, {collection: 'tuits'});
export default schema;