export function getTrianglePosition(progress: number, width: number, height: number) {
  const mobile = width <= 600;

  const waypointsMobile: [number, number, number][] = [
    [0.0, 5, 72],
    [0.06, 25, 55],
    [0.12, 55, 38],
    [0.18, 75, 62],
    [0.22, 88, 42],
    [0.28, 65, 58],
    [0.33, 30, 72],
    [0.38, 12, 48],
    [0.43, 45, 32],
    [0.48, 72, 62],
    [0.52, 85, 38],
    [0.57, 60, 52],
    [0.62, 28, 68],
    [0.67, 52, 42],
    [0.72, 78, 58],
    [0.77, 48, 38],
    [0.82, 18, 62],
    [0.87, 42, 52],
    [0.92, 62, 42],
    [0.97, 78, 62],
    [1.0, 88, 72],
  ];

  const waypointsDesktop: [number, number, number][] = [
    [0.0, -5, 70],
    [0.06, 20, 55],
    [0.12, 42, 35],
    [0.18, 68, 60],
    [0.22, 85, 40],
    [0.28, 60, 55],
    [0.33, 35, 70],
    [0.38, 15, 45],
    [0.43, 40, 30],
    [0.48, 70, 60],
    [0.52, 88, 35],
    [0.57, 65, 50],
    [0.62, 30, 65],
    [0.67, 55, 40],
    [0.72, 80, 55],
    [0.77, 50, 35],
    [0.82, 20, 60],
    [0.87, 45, 50],
    [0.92, 65, 40],
    [0.97, 80, 60],
    [1.0, 92, 70],
  ];

  const waypoints = mobile ? waypointsMobile : waypointsDesktop;

  let lower = waypoints[0];
  let upper = waypoints[waypoints.length - 1];

  for (let index = 0; index < waypoints.length - 1; index += 1) {
    const current = waypoints[index];
    const next = waypoints[index + 1];
    if (progress >= current[0] && progress <= next[0]) {
      lower = current;
      upper = next;
      break;
    }
  }

  const t = lower[0] === upper[0] ? 0 : (progress - lower[0]) / (upper[0] - lower[0]);
  const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const x = ((lower[1] + (upper[1] - lower[1]) * ease) / 100) * width;
  const y = ((lower[2] + (upper[2] - lower[2]) * ease) / 100) * height;

  return { x, y };
}
