// Original synthesized arcade music and effects; no downloads or autoplay on page load.
export class GameAudio {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private sources = new Set<AudioScheduledSourceNode>();
  private timer: ReturnType<typeof setInterval> | null = null;
  private nextBeat = 0;
  private beat = 0;
  private muted = false;
  private playing = false;
  private disposed = false;

  private unlock() {
    if (this.disposed || this.muted) return;
    try {
      if (!this.context) {
        const Audio = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Audio) return;
        this.context = new Audio();
        this.master = this.context.createGain();
        this.master.gain.value = .35;
        this.master.connect(this.context.destination);
      }
      if (this.context.state === "suspended") void this.context.resume().catch(() => {});
    } catch { /* Unsupported/blocked audio must never interrupt gameplay. */ }
  }

  private tone(frequency: number, at: number, duration: number, volume: number, type: OscillatorType = "triangle", endFrequency?: number) {
    if (!this.context || !this.master || this.muted || this.disposed) return;
    const oscillator = this.context.createOscillator();
    const envelope = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, at);
    if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, at + duration);
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(volume, at + .012);
    envelope.gain.exponentialRampToValueAtTime(.0001, at + duration);
    oscillator.connect(envelope); envelope.connect(this.master);
    this.sources.add(oscillator);
    oscillator.onended = () => { this.sources.delete(oscillator); oscillator.disconnect(); envelope.disconnect(); };
    oscillator.start(at); oscillator.stop(at + duration + .02);
  }

  private scheduleMusic = () => {
    if (!this.context || this.context.state !== "running" || !this.playing || this.muted) return;
    // Keep a short scheduling horizon so pause/mute can silence everything immediately.
    this.nextBeat = Math.max(this.nextBeat, this.context.currentTime);
    const melody = [72, 76, 79, 76, 74, 77, 81, 77, 71, 74, 79, 74, 72, 76, 79, 83];
    const roots = [48, 53, 55, 48];
    while (this.nextBeat < this.context.currentTime + .22) {
      const note = melody[this.beat % melody.length];
      const frequency = (midi: number) => 440 * 2 ** ((midi - 69) / 12);
      this.tone(frequency(note), this.nextBeat, .18, .12);
      if (this.beat % 2 === 0) this.tone(frequency(roots[Math.floor(this.beat / 4) % 4]), this.nextBeat, .3, .16, "sine");
      this.nextBeat += .22; this.beat += 1;
    }
  };

  private silence() {
    if (this.timer !== null) clearInterval(this.timer);
    this.timer = null;
    for (const source of this.sources) { try { source.stop(); } catch { /* Already ended. */ } }
    this.sources.clear();
  }

  setPlaying(playing: boolean) {
    this.playing = playing;
    if (!playing || this.muted || this.disposed) { this.silence(); return; }
    this.unlock();
    if (!this.context || this.timer !== null) return;
    this.nextBeat = this.context.currentTime;
    this.scheduleMusic();
    this.timer = setInterval(this.scheduleMusic, 100);
  }

  setMuted(muted: boolean) {
    this.muted = muted;
    if (this.master && this.context) this.master.gain.setValueAtTime(muted ? 0 : .35, this.context.currentTime);
    this.setPlaying(this.playing);
  }

  flap() {
    if (!this.context || !this.playing || this.muted) return;
    this.tone(520, this.context.currentTime, .11, .32, "sine", 1050);
  }

  celebrate() {
    if (!this.context || this.muted || !this.playing) return;
    const now = this.context.currentTime;
    // Ascending fanfare followed by three bright major chords and sparkling accents.
    [523.25, 659.25, 783.99, 1046.5].forEach((note, i) => this.tone(note, now + i * .14, .3, .3));
    for (let chord = 0; chord < 3; chord++) {
      [523.25, 659.25, 783.99, 1046.5].forEach(note => this.tone(note, now + .65 + chord * .48, .45, .14));
      this.tone(1800, now + .72 + chord * .48, .32, .13, "sine", 650);
    }
  }

  dispose() {
    this.disposed = true; this.playing = false; this.silence();
    if (this.context) void this.context.close().catch(() => {});
    this.context = null; this.master = null;
  }
}
