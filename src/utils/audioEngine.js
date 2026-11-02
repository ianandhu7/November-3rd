/**
 * Audio Engine with Web Audio API Romantic Synthesizer Fallback
 * Provides warm romantic acoustic piano & celesta chords if local MP3 is unavailable.
 */

class RomanticAudioEngine {
  constructor() {
    this.audioContext = null;
    this.isPlaying = false;
    this.audioElement = null;
    this.timerId = null;
    this.volume = 0.7;
    this.isSynth = false;
  }

  initContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  // Plays a gentle, warm romantic chord with exponential release
  playChord(frequencies, duration = 3.5) {
    if (!this.audioContext) return;
    const now = this.audioContext.currentTime;

    frequencies.forEach((freq, index) => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      // Soft sine + triangle warm acoustic blend
      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.08); // Slight arpeggiation

      // Warm attack & gentle natural decay
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12 * this.volume, now + 0.1 + index * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + duration);
    });
  }

  startSynthLoop(progression = null) {
    this.initContext();
    this.isSynth = true;
    this.isPlaying = true;

    // Romantic waltz chord progression (C -> Am -> F -> G)
    const chords = progression || [
      [261.63, 329.63, 392.00, 523.25], // C major
      [220.00, 261.63, 329.63, 440.00], // A minor
      [174.61, 220.00, 261.63, 349.23], // F major
      [196.00, 246.94, 293.66, 392.00]  // G major
    ];

    let step = 0;
    const tick = () => {
      if (!this.isPlaying) return;
      this.playChord(chords[step % chords.length], 4.2);
      step++;
      this.timerId = setTimeout(tick, 3600);
    };

    tick();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  playTrack(src, chords = null, onEnd = null) {
    this.stop();
    this.initContext();

    if (src) {
      if (!this.audioElement) {
        this.audioElement = new Audio();
      }
      this.audioElement.src = src;
      this.audioElement.volume = this.volume;

      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
            this.isSynth = false;
            if (onEnd) {
              this.audioElement.onended = onEnd;
            }
          })
          .catch(() => {
            // Audio file was missing or blocked: fallback smoothly to romantic synthesizer!
            this.startSynthLoop(chords);
          });
        return;
      }
    }

    this.startSynthLoop(chords);
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }
}

export const romanticAudio = new RomanticAudioEngine();
