export const WORLD = { width: 360, height: 480, floor: 452, x: 90, radius: 17, gap: 176, pipeWidth: 58, rewardScore: 10 };
export type Phase = "ready" | "playing" | "paused" | "lost";
export type Game = { phase: Phase; y: number; velocity: number; elapsed: number; score: number; rewardEarned: boolean; pipes: { x: number; center: number; passed: boolean }[] };

export function createGame(): Game {
  return { phase: "ready", y: 220, velocity: 0, elapsed: 0, score: 0, rewardEarned: false, pipes: [{ x: 430, center: 230, passed: false }] };
}

export function flap(game: Game) {
  if (game.phase === "playing") game.velocity = -285;
}

// The renderer supplies fixed 1/120-second steps: identical physics on 60/120 Hz screens.
export function stepGame(game: Game, dt: number, random = Math.random) {
  if (game.phase !== "playing" || dt <= 0) return;
  game.velocity += 820 * dt;
  game.y += game.velocity * dt;
  for (const pipe of game.pipes) pipe.x -= 110 * dt;
  const last = game.pipes[game.pipes.length - 1];
  if (last.x < WORLD.width - 130) game.pipes.push({ x: last.x + 215, center: 175 + random() * 100, passed: false });
  game.pipes = game.pipes.filter(pipe => pipe.x + WORLD.pipeWidth > 0);
  const hit = game.y - WORLD.radius <= 0 || game.y + WORLD.radius >= WORLD.floor || game.pipes.some(pipe =>
    WORLD.x + WORLD.radius > pipe.x && WORLD.x - WORLD.radius < pipe.x + WORLD.pipeWidth &&
    (game.y - WORLD.radius < pipe.center - WORLD.gap / 2 || game.y + WORLD.radius > pipe.center + WORLD.gap / 2)
  );
  // Check collisions before awarding a point. The entire bird must clear a pipe pair.
  if (hit) { game.phase = "lost"; return; }
  game.elapsed += dt;
  for (const pipe of game.pipes) {
    if (!pipe.passed && pipe.x + WORLD.pipeWidth + 3 < WORLD.x - WORLD.radius) {
      pipe.passed = true;
      game.score += 1;
    }
  }
  // Unlock once per run, without changing the playing phase or capping the score.
  if (game.score >= WORLD.rewardScore) game.rewardEarned = true;
}
