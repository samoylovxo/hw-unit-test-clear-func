/* eslint-disable linebreak-style */
// eslint-disable-next-line consistent-return
export default function checkingLife(player) {
  if (player.health > 50) {
    return 'healthy';
  }

  if (player.health <= 50 && player.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
