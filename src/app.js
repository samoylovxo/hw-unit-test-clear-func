'use strict';

export default function checkingLife(player) {
  // if (player.health == 0 || player.health < 0) {
  //   return 'dead';
  // }

  if (player.health > 50) {
    return 'healthy';
  }

  if (player.health <= 50 && player.health >= 15) {
    return 'wounded';
  }

  if (player.health < 15) {
    return 'critical';
  }
}
