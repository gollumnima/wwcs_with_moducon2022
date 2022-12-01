export interface Users {
  username: string;
  content: string;
}

export interface Prints extends Users {
  timestamp: number;
}
