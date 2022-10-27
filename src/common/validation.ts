import profile from '../../database/profile.json';

export const isExistingUser = (username: string): boolean => {
  const userExist = profile.find(p => p.username === username);
  return !!userExist;
};

export const isPasswordInvalid = (password: string, confirmPass: string): boolean => {
  return password !== confirmPass;
}
