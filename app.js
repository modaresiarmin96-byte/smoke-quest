* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-deep: #080d18;
  --panel: rgba(18, 26, 42, 0.95);
  --panel-strong: #121d31;
  --panel-alt: #0d1728;
  --card: rgba(13, 22, 34, 0.9);
  --border: rgba(141, 166, 201, 0.22);
  --text: #ecf3ff;
  --muted: #a8bad6;
  --cyan: #59d3ff;
  --green: #53d98d;
  --gold: #f7d36a;
  --orange: #ffb15c;
  --red: #ff6f8f;
  --purple: #af8cff;
  --shadow: rgba(0, 0, 0, 0.3);
  --success: #73ffb5;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Tahoma", "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top, rgba(88, 122, 255, 0.22), transparent 26%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-deep) 100%);
  color: var(--text);
  direction: rtl;
  text-align: right;
}

button,
input {
  font: inherit;
}

button {
  border: none;
  cursor: pointer;
}

.app-shell {
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px 14px 40px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-badge {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--orange), var(--red));
  box-shadow: 0 18px 28px rgba(255, 109, 75, 0.3);
  font-size: 1.6rem;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}

h1 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2.3rem);
}

.countdown-card {
  min-width: 150px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(18, 26, 42, 0.9);
  border: 1px solid var(--border);
  box-shadow: var(--shadow) 0 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
}

.countdown-card span {
  font-size: 0.7rem;
  color: var(--muted);
}

.countdown-card strong {
  font-size: 1rem;
  color: var(--gold);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.dashboard-grid,
.main-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.stat-card,
.panel {
  border-radius: 20px;
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(18, 26, 42, 0.96), rgba(10, 17, 28, 0.96));
  box-shadow: 0 18px 28px rgba(0, 0, 0, 0.18);
}

.stat-card {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 104px;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.8rem;
}

.stat-card strong {
  font-size: clamp(1.4rem, 3vw, 2.4rem);
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(85, 83, 255, 0.26), rgba(17, 35, 60, 0.96));
}

.panel {
  padding: 18px 16px;
}

.campaign-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: linear-gradient(135deg, rgba(41, 82, 122, 0.3), rgba(13, 20, 31, 0.92));
}

.phase-badge,
.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

.campaign-hero h2 {
  margin: 12px 0 8px;
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.campaign-hero p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.progress-track {
  width: min(100%, 220px);
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
  position: relative;
}

.progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 0%;
  background: linear-gradient(90deg, var(--green), var(--cyan));
  border-radius: inherit;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.pill.success { background: rgba(83, 217, 141, 0.14); color: var(--success); }
.pill.neutral { background: rgba(151, 169, 198, 0.12); color: var(--muted); }
.pill.danger { background: rgba(255, 111, 143, 0.12); color: #ffb1c1; }

.mission-title {
  margin: 0 0 18px;
  color: var(--text);
  line-height: 1.9;
  min-height: 84px;
}

.primary-btn,
.secondary-btn,
.danger-btn,
.ghost-btn {
  width: 100%;
  border-radius: 14px;
  padding: 12px 14px;
  font-weight: 700;
  transition: transform 0.18s ease, opacity 0.2s ease;
}

.primary-btn:hover,
.secondary-btn:hover,
.danger-btn:hover,
.ghost-btn:hover {
  transform: translateY(-1px);
}

.primary-btn {
  background: linear-gradient(135deg, var(--cyan), #4ea7ff);
  color: #051725;
}

.secondary-btn {
  background: rgba(89, 211, 255, 0.12);
  color: var(--text);
  border: 1px solid rgba(89, 211, 255, 0.28);
}

.danger-btn {
  background: linear-gradient(135deg, var(--red), #ff7d56);
  color: #fff;
}

.ghost-btn {
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
}

label {
  display: block;
  color: var(--muted);
  margin: 14px 0 8px;
  font-size: 0.86rem;
}

input[type="number"],
input[type="text"] {
  width: 100%;
  background: rgba(5, 10, 17, 0.8);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 12px;
  color: var(--text);
}

input[type="range"] {
  width: 100%;
  accent-color: var(--purple);
}

.range-values {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.8rem;
  margin: 8px 0 12px;
}

.trigger-list,
.record-list,
.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.trigger-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.trigger-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.trigger-meta strong {
  font-size: 0.95rem;
}

.trigger-meta span {
  color: var(--muted);
  font-size: 0.72rem;
}

.trigger-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.trigger-btn {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.trigger-score {
  min-width: 36px;
  text-align: center;
  font-size: 0.9rem;
  color: var(--gold);
}

.boss-health {
  height: 14px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
  margin: 14px 0 10px;
}

#bossHealthBar {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--red), var(--orange), var(--gold));
  border-radius: inherit;
  transition: width 0.25s ease;
}

.boss-note {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.8;
}

.record-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.record-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: var(--muted);
}

.record-list li:last-child {
  border-bottom: none;
}

.record-list strong {
  color: var(--text);
}

.achievement-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.achievement-item {
  padding: 12px 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.achievement-item.active {
  background: rgba(83, 217, 141, 0.1);
  border-color: rgba(83, 217, 141, 0.28);
  color: var(--text);
}

.chart-panel canvas {
  width: 100%;
  max-width: 100%;
  background: rgba(8, 14, 23, 0.88);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.footer-bar {
  display: flex;
  justify-content: center;
  margin-top: 18px;
}

.footer-bar .ghost-btn {
  max-width: 250px;
}

@media (max-width: 640px) {
  .app-shell {
    padding: 12px 10px 32px;
  }

  .topbar,
  .campaign-hero {
    flex-direction: column;
    align-items: stretch;
  }

  .brand-block {
    align-items: center;
  }

  .countdown-card {
    width: 100%;
  }

  .dashboard-grid,
  .main-grid,
  .achievement-list {
    grid-template-columns: 1fr;
  }

  .panel-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .trigger-item {
    padding: 12px 8px;
  }
}
