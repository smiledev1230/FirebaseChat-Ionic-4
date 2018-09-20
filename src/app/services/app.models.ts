export interface User {
  email: string;
  name: string;
  dateCreted: string;
  avatar: string;
  userId: string;
}

export interface Chat {
  message: string;
  date: string;
  sender: string;
  type: number;
}