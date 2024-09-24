import { postComeths, postPolyanets, postSoloons } from "./postCalls";

export const handleCellType = async (
  row: number,
  column: number,
  cellType: string
) => {
  switch (cellType) {
    case "SPACE":
      break;
    case "POLYANET":
      await postPolyanets(row, column);
      break;
    case "WHITE_SOLOON":
      await postSoloons(row, column, "white");

      break;
    case "BLUE_SOLOON":
      await postSoloons(row, column, "blue");

      break;
    case "RED_SOLOON":
      await postSoloons(row, column, "red");

      break;
    case "PURPLE_SOLOON":
      await postSoloons(row, column, "purple");

      break;
    case "RIGHT_COMETH":
      await postComeths(row, column, "right");

      break;
    case "LEFT_COMETH":
      await postComeths(row, column, "left");

      break;
    case "UP_COMETH":
      await postComeths(row, column, "up");

      break;
    case "DOWN_COMETH":
      await postComeths(row, column, "down");

      break;

    default:
      console.error(`Unknown cell type: ${cellType}`);
  }
};
