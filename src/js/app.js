export default function personage(level) {
  if (level.health > 50) {
    return 'healthy';
  } if (level.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
