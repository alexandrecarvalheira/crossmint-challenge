import axios from "axios";

const candidateId = "f71d0e66-68ad-43f4-9d05-a008f197ab06";
const apiURL = "https://challenge.crossmint.com/api";

//wait fn to prevent 429
const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const postPolyanets = async (row: number, column: number) => {
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
  } catch (error) {
    console.error(error);
  }
};

const crossDraw = async () => {
  // row o,1 and lenght-1, lenght-2 wont change
  // column o,1 and lenght-1, lenght-2 wont change
  const length = 11;
  //row
  for (let i = 2; i < length - 2; i++) {
    await postPolyanets(i, i);
    await postPolyanets(i, length - 1 - i);
    wait(3000);
  }
};

crossDraw();
