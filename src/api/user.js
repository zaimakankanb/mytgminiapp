// src/api/user.js

import axios from 'axios';

const API_URL = 'https://whoscat.robolink.ai/users'; // 确保与后端的URL一致

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // 用户不存在时返回 null
      return null;
    }
    throw error;
  }
};

export const createUser = async (id) => {
  try {
    const response = await axios.post(API_URL, { id });
    return response.data;
  } catch (error) {
    throw error;
  }
};
