import { postPolyanets } from "./postCalls.ts";

//wait fn to prevent 429

const crossDraw = async () => {
  // row o,1 and lenght-1, lenght-2 wont change
  // column o,1 and lenght-1, lenght-2 wont change
  const length = 11;
  //row
  for (let i = 2; i < length - 2; i++) {
    await postPolyanets(i, i);
    await postPolyanets(i, length - 1 - i);
  }
};

crossDraw();
