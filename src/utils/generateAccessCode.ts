export function generateAccessToken(length: number = 6): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let accessToken = '';

  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);

    accessToken += characters.charAt(randomIndex);
  }

  return accessToken;
}
