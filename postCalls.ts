import axios from "axios";

const candidateId = "f71d0e66-68ad-43f4-9d05-a008f197ab06";
const apiURL = "https://challenge.crossmint.com/api";

type Direction = "up" | "down" | "right" | "left";
type Color = "blue" | "red" | "white" | "purple";

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
export const postPolyanets = async (row: number, column: number) => {
  try {
    const response = await axios.post(
      `${apiURL}/polyanets`,
      {
        candidateId,
        row,
        column,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    await wait(1000);
  } catch (error) {
    console.error(error);
  }
};

export const postSoloons = async (
  row: number,
  column: number,
  color: Color
) => {
  try {
    const response = await axios.post(
      `${apiURL}/soloons `,
      {
        candidateId,
        row,
        column,
        color,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    await wait(1000);
  } catch (error) {
    console.error(error);
  }
};

export const postComeths = async (
  row: number,
  column: number,
  direction: Direction
) => {
  try {
    const response = await axios.post(
      `${apiURL}/comeths `,
      {
        candidateId,
        row,
        column,
        direction,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    await wait(1000);
  } catch (error) {
    console.error(error);
  }
};
