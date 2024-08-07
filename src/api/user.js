// src/api/user.js

import axios from 'axios';

const API_URL = 'https://whoscat.robolink.ai/users';
const API_KEY = 'Wat1rm11on.whoscat';

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (id) => {
  try {
    const response = await axios.post(API_URL, { id }, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
