import Post from '../models/post_model';
import { getUser } from './user_controller';
import { getQuest } from './quest_controller';

// Create Post
export async function createPost(postFields) {
  const post = new Post();
  post.title = postFields.title;
  post.description = postFields.description;
  post.photoUrl = postFields.photoUrl;
  post.likes = 0;
  post.user = getUser(postFields.userId);
  post.quest = getQuest(postFields.questId);
  try {
    const savedpost = await post.save();
    return savedpost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
}

// Get All Posts
export async function getPosts() {
  try {
    const allPosts = await Post.find({}).sort([['date', -1]]);
    return allPosts;
  } catch (error) {
    throw new Error(`Get posts error: ${error}`);
  }
}

// Get one post with the given id
export async function getPost(id) {
  try {
    const returnPost = await Post.findById(id);
    return returnPost;
  } catch (error) {
    throw new Error(`Get post error: ${error}`);
  }
}

export async function getLikes(id) {
  try {
    const returnLikes = await Post.findById(id).likes;
    return returnLikes;
  } catch (error) {
    throw new Error(`Get post error: ${error}`);
  }
}

// Delete a post
export async function deletePost(id) {
  try {
    const removePost = await Post.deleteOne({ _id: id });
    return removePost.deletedCount;
  } catch (error) {
    throw new Error(`Remove post error: ${error}`);
  }
}

// Updateing a post
export async function updatePost(id, postFields) {
  try {
    const update = await Post.findByIdAndUpdate(id, postFields);
    return update;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
}
