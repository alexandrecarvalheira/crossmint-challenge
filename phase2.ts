import { getGoalMap } from "./getCalls";
import { handleCellType } from "./handleCellType";

const { goal: goalMap } = await getGoalMap();

const logoDraw = async () => {
  const length = goalMap.length;
  //row;
  for (let i = 0; i <= length - 1; i++) {
    //column
    for (let j = 0; j <= length - 1; j++) {
      await handleCellType(i, j, goalMap[i][j]);
    }
  }
};

logoDraw();
