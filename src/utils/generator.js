const reservedStatus = [true, false];

const generateRandomReversedStatus = () => reservedStatus[
  Math.floor(Math.random() * reservedStatus.length)];

export default generateRandomReversedStatus;
