import test from 'node:test';
import assert from 'node:assert/strict';
import { createGame, flap, stepGame, WORLD } from '../src/game/flappy.ts';

function advance(game, steps) {
  for (let i = 0; i < steps; i++) {
    if (game.y > 235 && game.velocity > 0) flap(game);
    stepGame(game, 1 / 120, () => .5);
  }
}

test('idle, paused, and lost games do not advance', () => {
  for (const phase of ['ready', 'paused', 'lost']) {
    const game = createGame(); game.phase = phase;
    const before = structuredClone(game);
    flap(game); stepGame(game, 10);
    assert.deepEqual(game, before);
  }
});
test('no input hits the ground and never earns a reward', () => {
  const game = createGame(); game.phase = 'playing';
  for (let i = 0; i < 600; i++) stepGame(game, 1 / 120, () => .5);
  assert.equal(game.phase, 'lost'); assert.equal(game.score, 0); assert.equal(game.rewardEarned, false);
});
test('surviving five seconds does not unlock a reward', () => {
  const game = createGame(); game.phase = 'playing'; advance(game, 600);
  assert.equal(game.phase, 'playing'); assert.equal(game.score, 1); assert.equal(game.rewardEarned, false);
});
test('a fully cleared pipe pair scores once, not once per frame or per half', () => {
  const game = createGame(); game.phase = 'playing';
  game.pipes = [{ x: WORLD.x - WORLD.radius - WORLD.pipeWidth - 3 + 1, center: 230, passed: false }];
  stepGame(game, 1 / 120, () => .5); assert.equal(game.score, 0);
  stepGame(game, 1 / 120, () => .5); assert.equal(game.score, 1);
  advance(game, 30); assert.equal(game.score, 1);
});
test('10 pipes unlock the reward; play continues beyond 30 pipes with bounded obstacles', () => {
  const game = createGame(); game.phase = 'playing';
  let unlocks = 0;
  for (let i = 0; i < 9000; i++) {
    const earned = game.rewardEarned;
    advance(game, 1);
    assert.equal(game.phase, 'playing');
    assert.ok(game.pipes.length <= 4);
    if (game.score < 10) assert.equal(game.rewardEarned, false);
    if (game.score >= 10) assert.equal(game.rewardEarned, true);
    if (!earned && game.rewardEarned) { unlocks++; assert.equal(game.score, 10); }
  }
  assert.equal(unlocks, 1); assert.ok(game.score > 30); assert.ok(game.elapsed > 60);
});
test('collision before the tenth point gives no reward; restart resets the run', () => {
  const game = createGame(); game.phase = 'playing'; game.score = 9; game.y = WORLD.floor;
  game.pipes = [{ x: 5, center: 230, passed: false }]; stepGame(game, 1 / 120);
  assert.equal(game.phase, 'lost'); assert.equal(game.score, 9); assert.equal(game.rewardEarned, false);
  const fresh = createGame(); assert.equal(fresh.score, 0); assert.equal(fresh.rewardEarned, false);
});
test('pipe and ceiling collisions still end the run after reward unlock', () => {
  for (const y of [10, 100, 350]) {
    const game = createGame(); game.phase = 'playing'; game.y = y; game.score = 12; game.rewardEarned = true;
    game.pipes = [{ x: WORLD.x, center: 230, passed: false }];
    stepGame(game, 1 / 120);
    assert.equal(game.phase, 'lost'); assert.equal(game.rewardEarned, true);
  }
});
