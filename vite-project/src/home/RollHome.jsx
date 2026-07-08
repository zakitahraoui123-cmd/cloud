import { useState } from "react";
import {
  Search,
  Dog,
  Cake,
  Mountain,
  Sun,
  PartyPopper,
  Cat,
  Building2,
  Baby,
  UtensilsCrossed,
  Flower2,
  Snowflake,
  UploadCloud,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  ChevronRight,
  Menu,
  Languages,
} from "lucide-react";

// ---------------------------------------------------------------------------
// All copy, in both languages. The toggle button just swaps which key is read.
// ---------------------------------------------------------------------------
const COPY = {
  en: {
    nav: { features: "Features", how: "How it works", storage: "Storage", login: "Log in", register: "Get 5GB free", registerMobile: "Register — get 5GB free" },
    hero: {
      eyebrow: "AI-powered photo storage",
      h1a: "Describe it. ",
      h1b: "Find it.",
      lede: "Roll keeps every photo you take and finds any of them the moment you describe what's in it. No folders, no filenames, no endless scrolling.",
      cta: "Get 5GB free",
      login: "Log in",
      fine: "No credit card. Cancel anytime. 5GB is yours forever.",
      searchDemo: "dog at the beach",
    },
    features: {
      eyebrow: "Why Roll",
      h2: "Your photos, without the filing system",
      p: "Everything works quietly in the background so you never have to organize anything yourself.",
      cards: [
        { title: "Search by describing", text: "Type “dog running on the beach” and get the exact photo — even if you never labeled it." },
        { title: "5GB, free, forever", text: "Every account starts with 5GB of storage — thousands of photos — no card required." },
        { title: "Synced everywhere", text: "Take a photo on your phone, find it on your laptop seconds later. Always up to date." },
        { title: "Private by default", text: "Your photos are encrypted and only searchable by you. Nothing is ever shared without asking." },
      ],
    },
    how: {
      eyebrow: "How it works",
      h2: "Three frames, that's it",
      p: "From upload to “found it” in seconds — no setup, no tagging by hand.",
      frames: [
        { n: "FRAME 01", title: "Upload", text: "Drag in photos from your phone or computer — Roll takes it from there." },
        { n: "FRAME 02", title: "Roll reads them", text: "AI quietly studies every photo: objects, scenes, people, even text in the frame." },
        { n: "FRAME 03", title: "Describe & find", text: "Search in plain language, any time, and get the exact photo you were picturing." },
      ],
    },
    storage: {
      unit: "GB free",
      label: "Every account, no exceptions",
      desc: "That's thousands of photos, on the house. Need more room later? Upgrade in a click — your search never slows down either way.",
    },
    finalCta: {
      h2: "Stop scrolling. Start describing.",
      p: "Your first 5GB is ready whenever you are.",
      cta: "Create your free account",
    },
    footer: { copy: "© 2026 Roll" },
    langBtn: "日本語",
  },
  ja: {
    nav: { features: "機能", how: "使い方", storage: "ストレージ", login: "ログイン", register: "無料で5GB始める", registerMobile: "登録 — 無料で5GB" },
    hero: {
      eyebrow: "AI搭載の写真クラウドストレージ",
      h1a: "説明するだけ。",
      h1b: "見つかる。",
      lede: "Rollはあなたが撮ったすべての写真を保存し、内容を言葉で説明するだけで瞬時に見つけ出します。フォルダも、ファイル名も、延々としたスクロールも必要ありません。",
      cta: "無料で5GB始める",
      login: "ログイン",
      fine: "クレジットカード不要。いつでも解約可能。5GBは永久に無料です。",
      searchDemo: "浜辺にいる犬",
    },
    features: {
      eyebrow: "Rollを選ぶ理由",
      h2: "ファイル整理から解放された写真管理",
      p: "すべてバックグラウンドで自動的に処理されるので、自分で整理する必要はありません。",
      cards: [
        { title: "説明して検索", text: "「浜辺を走る犬」と入力するだけで、タグ付けしていなくても正確な写真が見つかります。" },
        { title: "5GB、永久無料", text: "すべてのアカウントに5GBのストレージ付き — 写真数千枚分 — カード登録は不要です。" },
        { title: "どこでも同期", text: "スマートフォンで撮った写真を、数秒後にはパソコンで確認。常に最新の状態を保ちます。" },
        { title: "デフォルトで非公開", text: "写真は暗号化され、検索できるのはあなただけ。許可なく共有されることはありません。" },
      ],
    },
    how: {
      eyebrow: "使い方",
      h2: "たった3ステップ",
      p: "アップロードから「見つかった」まで数秒 — 設定もタグ付けも不要です。",
      frames: [
        { n: "フレーム 01", title: "アップロード", text: "スマートフォンやパソコンから写真をドラッグするだけ。あとはRollにお任せください。" },
        { n: "フレーム 02", title: "Rollが解析", text: "AIがすべての写真を静かに解析します。物体、シーン、人物、写っている文字まで。" },
        { n: "フレーム 03", title: "説明して見つける", text: "いつでも普段の言葉で検索するだけで、思い描いていた写真がすぐに見つかります。" },
      ],
    },
    storage: {
      unit: "GB 無料",
      label: "すべてのアカウントに、例外なく",
      desc: "写真数千枚分が無料で使えます。もっと容量が必要になったら、ワンクリックでアップグレード。検索速度はどちらの場合も変わりません。",
    },
    finalCta: {
      h2: "スクロールをやめて、言葉で探そう。",
      p: "あなたの最初の5GBは、いつでも準備万端です。",
      cta: "無料アカウントを作成",
    },
    footer: { copy: "© 2026 Roll" },
    langBtn: "English",
  },
};

const TILES = [
  { id: 1, icon: Dog, hue: "34 70% 55%" },
  { id: 2, icon: Cake, hue: "350 65% 58%" },
  { id: 3, icon: Mountain, hue: "205 40% 45%" },
  { id: 4, icon: Dog, hue: "28 55% 48%" },
  { id: 5, icon: Sun, hue: "18 80% 55%" },
  { id: 6, icon: PartyPopper, hue: "280 45% 55%" },
  { id: 7, icon: Cat, hue: "40 30% 50%" },
  { id: 8, icon: Building2, hue: "220 30% 35%" },
  { id: 9, icon: Baby, hue: "10 60% 65%" },
  { id: 10, icon: UtensilsCrossed, hue: "95 30% 40%" },
  { id: 11, icon: Flower2, hue: "330 50% 60%" },
  { id: 12, icon: Snowflake, hue: "200 25% 55%" },
];

const FEATURE_ICONS = [Search, Sparkles, RefreshCw, ShieldCheck];
const FRAME_ICONS = [UploadCloud, Sparkles, Search];

function SprocketStrip() {
  const holes = Array.from({ length: 24 });
  return (
    <div className="sprocket-strip" aria-hidden="true">
      {holes.map((_, i) => (
        <span key={i} className="sprocket-hole" />
      ))}
    </div>
  );
}

export default function RollHome() {
  const [lang, setLang] = useState("en");
  const t = COPY[lang];
  const isJa = lang === "ja";

  return (
    <div className={`page ${isJa ? "lang-ja" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,560;0,9..144,680;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;600;700&display=swap');

        :root {
          --ink: #5a3658;
          --ink-dim: #020201;
          --ink-faint: #000000;
          --base:-webkit-linear-gradient(to right, #CC86D1, #DCFFBD); 
          --base:linear-gradient(to right, #CC86D1, #DCFFBD);
          --base-2: #82b176;
          --panel: #ad5493;
          --paper: #ffffff;
          --safelight: #171c1d;
          --sand: #d9c8a9;
          --radius-lg: 22px;
          --radius-md: 14px;
          --font-display: 'Fraunces', serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        * { box-sizing: border-box; }

        .page {
          background: var(--base);
          color: var(--ink);
          font-family: var(--font-body);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
          line-height: 1.5;
        }
        .page.lang-ja { font-family: 'Noto Sans JP', var(--font-body); }
        .page.lang-ja h1, .page.lang-ja h2, .page.lang-ja h3 { font-family: 'Noto Sans JP', var(--font-display); letter-spacing: 0; }

        .page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.5;
          z-index: 0;
          background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 3px 3px;
          mix-blend-mode: overlay;
        }

        .wrap { max-width: 1180px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; cursor: pointer; }

        .sprocket-strip { display: flex; justify-content: space-between; padding: 0 32px; position: relative; z-index: 1; }
        .sprocket-hole { width: 8px; height: 8px; border-radius: 2px; background: var(--base-2); border: 1px solid rgba(245,239,226,0.06); }

        .nav {
          position: sticky; top: 0; z-index: 40;
          background: rgba(148, 100, 142, 0.86);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(245,239,226,0.08);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 18px 32px; max-width: 1180px; margin: 0 auto; }
        .logo { font-family: var(--font-display); font-weight: 680; font-size: 22px; display: flex; align-items: center; gap: 8px; }
        .logo-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--safelight); box-shadow: 0 0 10px 2px rgba(232,73,45,0.6); }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a { font-size: 14.5px; color: var(--ink-dim); transition: color 0.2s ease; }
        .nav-links a:hover { color: var(--ink); }
        .nav-actions { display: flex; align-items: center; gap: 10px; }

        .btn {
          font-size: 14.5px; font-weight: 600; padding: 10px 20px; border-radius: 999px;
          border: 1px solid transparent;
          transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
          display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;
        }
        .btn:active { transform: scale(0.97); }
        .btn-ghost { color: var(--ink); border-color: rgba(245,239,226,0.18); background: transparent; }
        .btn-ghost:hover { border-color: rgba(245,239,226,0.4); background: rgba(245,239,226,0.05); }
        .btn-solid { color: #f5f5f5; background: var(--safelight); box-shadow: 0 8px 20px -8px rgba(209, 235, 235, 0.7); }
        .btn-solid:hover { background: #3b3938;}
        .btn-lg { padding: 14px 26px; font-size: 15.5px; }

        .lang-toggle {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 16px; border-radius: 999px;
          border: 1px solid rgba(232,73,45,0.35);
          background: rgba(232,73,45,0.08);
          color: var(--sand);
          font-size: 13.5px; font-weight: 600;
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
        }
        .lang-toggle:hover { background: rgba(221, 49, 129, 0.16); border-color: rgba(232,73,45,0.6); }
        .lang-toggle:active { transform: scale(0.96); }
        .lang-toggle svg { color: var(--safelight); }

        .menu-checkbox { display: none; }
        .menu-label { display: none; }
        .mobile-panel { display: none; flex-direction: column; gap: 2px; padding: 10px 32px 18px; border-bottom: 1px solid rgba(245,239,226,0.08); }
        .mobile-panel a { padding: 12px 0; font-size: 15px; color: var(--ink-dim); border-bottom: 1px solid rgba(245,239,226,0.06); }
        .mobile-panel button.lang-toggle { margin-top: 8px; align-self: flex-start; }

        .hero { padding: 84px 0 56px; position: relative; z-index: 1; }
        .hero-grid { display: grid; gap: 20px; text-align: center; max-width: 760px; margin: 0 auto; }
        .eyebrow {
          font-family: var(--font-mono); font-size: 12.5px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--safelight); display: inline-flex; align-items: center; gap: 8px; justify-content: center;
        }
        .lang-ja .eyebrow { font-family: 'Noto Sans JP', var(--font-mono); letter-spacing: 0.04em; text-transform: none; }
        .eyebrow::before, .eyebrow::after { content: ""; width: 22px; height: 1px; background: rgba(232,73,45,0.5); }
        .hero h1 { font-family: var(--font-display); font-weight: 560; font-size: clamp(38px, 6.4vw, 74px); line-height: 1.15; margin: 6px 0 4px; letter-spacing: -0.01em; }
        .hero h1 em { font-style: italic; font-weight: 500; color: var(--sand); }
        .lang-ja .hero h1 em { font-style: normal; }
        .hero p.lede { font-size: 18px; color: var(--ink-dim); max-width: 560px; margin: 0 auto; }
        .hero-cta { display: flex; gap: 14px; justify-content: center; margin-top: 10px; flex-wrap: wrap; }
        .fineprint { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); margin-top: 2px; }
        .lang-ja .fineprint { font-family: 'Noto Sans JP', var(--font-mono); }

        .demo {
          margin: 56px auto 0; max-width: 880px;
          background: linear-gradient(180deg, var(--panel), #7bc1ce);
          border: 1px solid rgba(73, 175, 26, 0.08); border-radius: var(--radius-lg);
          padding: 22px;
        }
        .demo-search {
          display: flex; align-items: center; gap: 10px;
          background: var(--base-2); border: 1px solid rgba(245,239,226,0.1);
          border-radius: 999px; padding: 13px 20px; margin-bottom: 18px; overflow: hidden;
        }
        .demo-search svg { color: var(--ink-faint); flex-shrink: 0; }
        .demo-search-text {
          font-family: var(--font-mono); font-size: 15px; color: var(--paper);
          white-space: nowrap; overflow: hidden; border-right: 2px solid var(--safelight);
          animation: type 3.5s steps(20, end) infinite, blink 0.8s step-start infinite;
        }
        .lang-ja .demo-search-text { font-family: 'Noto Sans JP', var(--font-mono); }
        @keyframes type { 0%, 8% { width: 0; } 45%, 65% { width: 12ch; } 95%, 100% { width: 0; } }
        @keyframes blink { 50% { border-color: transparent; } }

        .contact-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
        .tile {
          aspect-ratio: 1; border-radius: 10px; display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(0,0,0,0.3); opacity: 0.35; filter: saturate(0.5); animation: glow 6s ease-in-out infinite;
        }
        .tile svg { width: 30%; height: 30%; color: rgba(255,255,255,0.85); }
        .tile:nth-child(1) { animation-delay: 0s; }
        .tile:nth-child(2) { animation-delay: 0.3s; }
        .tile:nth-child(3) { animation-delay: 3.4s; }
        .tile:nth-child(4) { animation-delay: 0.6s; }
        .tile:nth-child(5) { animation-delay: 1.6s; }
        .tile:nth-child(6) { animation-delay: 4.2s; }
        .tile:nth-child(7) { animation-delay: 2.1s; }
        .tile:nth-child(8) { animation-delay: 5s; }
        .tile:nth-child(9) { animation-delay: 2.8s; }
        .tile:nth-child(10) { animation-delay: 1.1s; }
        .tile:nth-child(11) { animation-delay: 4.8s; }
        .tile:nth-child(12) { animation-delay: 3.9s; }
        @keyframes glow {
          0%, 92%, 100% { opacity: 0.35; filter: saturate(0.5); transform: scale(1); box-shadow: none; }
          4%, 10% { opacity: 1; filter: saturate(1); transform: scale(1.05); box-shadow: 0 0 0 2px var(--safelight), 0 10px 20px -6px rgba(232,73,45,0.5); }
        }

        section { position: relative; z-index: 1; }
        .section-pad { padding: 96px 0; }
        .section-head { max-width: 560px; margin: 0 auto 52px; text-align: center; }
        .section-head .eyebrow { margin-bottom: 14px; }
        .section-head h2 { font-family: var(--font-display); font-weight: 560; font-size: clamp(28px, 4vw, 42px); margin: 0 0 12px; letter-spacing: -0.01em; }
        .section-head p { color: var(--ink-dim); font-size: 16.5px; }

        .features { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .feature-card {
          background: var(--panel); border: 1px solid rgba(235, 167, 22, 0.08); border-radius: var(--radius-md);
          padding: 26px 22px; transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .feature-card:hover { transform: translateY(-4px); border-color: rgba(24, 134, 29, 0.4); background: #ea86ee; }
        .feature-icon {
          width: 40px; height: 40px; border-radius: 10px; background: rgba(45, 232, 192, 0.14); color: var(--safelight);
          display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
        }
        .feature-card h3 { font-family: var(--font-display); font-weight: 600; font-size: 18.5px; margin: 0 0 8px; }
        .feature-card p { color: var(--ink-dim); font-size: 14.5px; margin: 0; }

        .frames {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(226, 245, 240, 0.1); border-radius: var(--radius-lg); overflow: hidden; background: var(--base-2);
        }
        .frame { padding: 40px 30px; border-right: 1px dashed rgba(245,239,226,0.12); }
        .frame:last-child { border-right: none; }
        .frame-number { font-family: var(--font-mono); font-size: 12.5px; color: var(--safelight); letter-spacing: 0.1em; margin-bottom: 18px; display: block; }
        .lang-ja .frame-number { font-family: 'Noto Sans JP', var(--font-mono); letter-spacing: 0.02em; }
        .frame-icon {
          width: 46px; height: 46px; border-radius: 50%; border: 1px solid rgba(245,239,226,0.16);
          display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: var(--sand);
        }
        .frame h3 { font-family: var(--font-display); font-size: 19px; font-weight: 600; margin: 0 0 8px; }
        .frame p { color: var(--ink-dim); font-size: 14.5px; margin: 0; }

        .storage-banner {
          background: linear-gradient(135deg, #b2e9a7, #88bfcf 60%);
          border: 1px solid rgba(232,73,45,0.25); border-radius: var(--radius-lg);
          padding: 56px 48px; display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
        }
        .storage-number { font-family: var(--font-display); font-weight: 680; font-size: 88px; line-height: 0.9; color: var(--paper); display: flex; align-items: baseline; gap: 6px; }
        .storage-number span.unit { font-size: 26px; color: var(--safelight); font-weight: 600; font-family: var(--font-body); }
        .lang-ja .storage-number span.unit { font-family: 'Noto Sans JP', var(--font-body); }
        .storage-copy p.label { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-faint); margin: 0 0 6px; }
        .lang-ja .storage-copy p.label { font-family: 'Noto Sans JP', var(--font-mono); text-transform: none; }
        .storage-copy p.desc { color: var(--ink-dim); font-size: 15.5px; max-width: 340px; margin: 0; }

        .final-cta { text-align: center; padding: 100px 0 110px; }
        .final-cta h2 { font-family: var(--font-display); font-weight: 560; font-size: clamp(30px, 5vw, 52px); margin: 0 0 18px; letter-spacing: -0.01em; }
        .final-cta p { color: var(--ink-dim); font-size: 17px; margin-bottom: 30px; }

        footer { border-top: 1px solid rgba(245,239,226,0.08); padding: 40px 0; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { color: var(--ink-faint); font-size: 13.5px; }
        .footer-links a:hover { color: var(--ink-dim); }
        .footer-copy { color: var(--ink-faint); font-size: 13px; font-family: var(--font-mono); }
        .lang-ja .footer-copy { font-family: 'Noto Sans JP', var(--font-mono); }

        .fade-up { opacity: 0; transform: translateY(18px); animation: fadeUp 0.8s ease forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.35s; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up { opacity: 1; transform: none; animation: none; }
          .tile { animation: none; opacity: 0.9; filter: none; }
          .demo-search-text { animation: none; width: 12ch; border-right-color: transparent; }
        }

        @media (max-width: 880px) {
          .features { grid-template-columns: repeat(2, 1fr); }
          .frames { grid-template-columns: 1fr; }
          .frame { border-right: none; border-bottom: 1px dashed rgba(245,239,226,0.12); }
          .frame:last-child { border-bottom: none; }
          .contact-grid { grid-template-columns: repeat(4, 1fr); }
          .storage-banner { padding: 40px 28px; }
          .storage-number { font-size: 64px; }
        }
        @media (max-width: 620px) {
          .wrap { padding: 0 20px; }
          .nav-inner { padding: 16px 20px; }
          .nav-links { display: none; }
          .menu-label {
            display: inline-flex; align-items: center; justify-content: center;
            width: 38px; height: 38px; border-radius: 999px; border: 1px solid rgba(245,239,226,0.18); color: var(--ink);
          }
          .nav-actions .btn-ghost, .nav-actions > .btn-solid, .nav-actions > .lang-toggle { display: none; }
          .menu-checkbox:checked ~ .mobile-panel { display: flex; }
          .features { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: repeat(4, 1fr); }
          .hero { padding: 56px 0 40px; }
          .btn-lg { width: 100%; justify-content: center; }
          .hero-cta { flex-direction: column; }
          .demo { padding: 16px; }
          .storage-banner { flex-direction: column; text-align: center; }
          .storage-copy p.desc { max-width: none; }
        }
      `}</style>

      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            <img style={{width:'50%'}} src="/dots.gif" />
          </div>

          <div className="nav-links">
            <a href="#features">{t.nav.features}</a>
            <a href="#how">{t.nav.how}</a>
            <a href="#storage">{t.nav.storage}</a>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="lang-toggle"
              onClick={() => setLang(isJa ? "en" : "ja")}
              aria-label="Switch language"
            >
              <Languages size={15} />
              {t.langBtn}
            </button>
            <a href="/login" className="btn btn-ghost">{t.nav.login}</a>
            <a href="/register" className="btn btn-solid">{t.nav.register}</a>
            <label htmlFor="menu-toggle" className="menu-label">
              <Menu size={18} />
            </label>
          </div>
        </div>

        <div className="mobile-panel">
          <a href="#features">{t.nav.features}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#storage">{t.nav.storage}</a>
          <a href="/login">{t.nav.login}</a>
          <a href="/register">{t.nav.registerMobile}</a>
          <button type="button" className="lang-toggle" onClick={() => setLang(isJa ? "en" : "ja")}>
            <Languages size={15} />
            {t.langBtn}
          </button>
        </div>
      </nav>

      <SprocketStrip />

      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="fade-up d1">
              <span className="eyebrow">{t.hero.eyebrow}</span>
              <h1>{t.hero.h1a}<em>{t.hero.h1b}</em></h1>
              <p className="lede">{t.hero.lede}</p>
            </div>

            <div className="fade-up d2">
              <div className="hero-cta">
                <a href="/register" className="btn btn-solid btn-lg">
                  {t.hero.cta} <ChevronRight size={16} />
                </a>
                <a href="/login" className="btn btn-ghost btn-lg">{t.hero.login}</a>
              </div>
              <p className="fineprint">{t.hero.fine}</p>
            </div>
          </div>

          <div className="demo fade-up d3">
            <div className="demo-search">
              <Search size={18} />
              <span className="demo-search-text">{t.hero.searchDemo}</span>
            </div>
            <div className="contact-grid">
              {TILES.map((tile) => {
                const Icon = tile.icon;
                return (
                  <div
                    key={tile.id}
                    className="tile"
                    style={{ background: `linear-gradient(135deg, hsl(${tile.hue}), hsl(${tile.hue} / 0.6))` }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <SprocketStrip />

      <section id="features" className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.features.eyebrow}</span>
            <h2>{t.features.h2}</h2>
            <p>{t.features.p}</p>
          </div>

          <div className="features">
            {t.features.cards.map((f, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <div className="feature-card" key={f.title}>
                  <div className="feature-icon"><Icon size={20} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how" className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.how.eyebrow}</span>
            <h2>{t.how.h2}</h2>
            <p>{t.how.p}</p>
          </div>

          <div className="frames">
            {t.how.frames.map((f, i) => {
              const Icon = FRAME_ICONS[i];
              return (
                <div className="frame" key={f.title}>
                  <span className="frame-number">{f.n}</span>
                  <div className="frame-icon"><Icon size={20} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="storage" className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="storage-banner">
            <div className="storage-number">5<span className="unit">{t.storage.unit}</span></div>
            <div className="storage-copy">
              <p className="label">{t.storage.label}</p>
              <p className="desc">{t.storage.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <SprocketStrip />

      <section className="final-cta">
        <div className="wrap">
          <h2>{t.finalCta.h2}</h2>
          <p>{t.finalCta.p}</p>
          <a href="/register" className="btn btn-solid btn-lg">
            {t.finalCta.cta} <ChevronRight size={16} />
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="logo" style={{ fontSize: 18 }}>
            <img style={{width:'50%'}} src="/dots.gif" />
          </div>
          <div className="footer-links">
            <a href="#features">{t.nav.features}</a>
            <a href="#how">{t.nav.how}</a>
            <a href="/login">{t.nav.login}</a>
            <a href="/register">{t.nav.register}</a>
          </div>
          <div className="footer-copy">{t.footer.copy}</div>
        </div>
      </footer>
    </div>
  );
}
