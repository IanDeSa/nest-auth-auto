export type UserPayload = {
  sub: string;
  email: string;
  username: string;
  permission?: string;
  iat?: number;
  exp?: number;
};
