import axios from "axios";

const candidateId = "f71d0e66-68ad-43f4-9d05-a008f197ab06";
const apiURL = "https://challenge.crossmint.com/api";

export const getGoalMap = async () => {
  try {
    const response = await axios.get(`${apiURL}/map/${candidateId}/goal`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
