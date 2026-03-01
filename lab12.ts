enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum RequestStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

type StatusOrDirection = Direction | RequestStatus;

function printStatusOrDirection(value: StatusOrDirection): void {
  console.log("Value:", value);
}

let dir: Direction = Direction.Right;
let stat: RequestStatus = RequestStatus.SUCCESS;

printStatusOrDirection(dir);
printStatusOrDirection(stat);
