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
  Mail,
  User,
  FileText,
  Network,
  BarChart3,
} from "lucide-react";

import "./RollHome.css";

// ---------------------------------------------------------------------------
// All copy, in both languages.
// ---------------------------------------------------------------------------

const COPY = {
  en: {
    nav: {
      features: "Features",
      how: "How it works",
      storage: "Storage",
      about: "About",
      privacy: "Privacy",
      contact: "Contact",
      login: "Log in",
      register: "Get 5GB free",
      registerMobile: "Register — get 5GB free"
    },

    hero: {
      eyebrow: "AI-powered photo storage",
      h1a: "Describe it. ",
      h1b: "Find it.",
      lede:
        "Ai Cloud keeps every photo you take and finds any of them the moment you describe what's in it. No folders, no filenames, no endless scrolling.",
      cta: "Get 5GB free",
      login: "Log in",
      fine:
        "No credit card. Cancel anytime. 5GB is yours forever.",
      searchDemo:
        "dog at the beach",
      badges: {
        upload: "Fast upload",
        aiSearch: "AI search",
        secure: "Secure storage",
        organize: "Smart organization",
        storage: "5GB free storage",
      },
    },


    features: {
      eyebrow: "Why Ai Cloud",
      h2: "Your photos, without the filing system",
      p:
        "Everything works quietly in the background so you never have to organize anything yourself.",

      cards: [
        {
          title: "Search by describing",
          text:
            "Type “dog running on the beach” and get the exact photo — even if you never labeled it."
        },
        {
          title: "5GB, free, forever",
          text:
            "Every account starts with 5GB of storage — thousands of photos — no card required."
        },
        {
          title: "Synced everywhere",
          text:
            "Take a photo on your phone, find it on your laptop seconds later. Always up to date."
        },
        {
          title: "Private by default",
          text:
            "Your photos are encrypted and only searchable by you. Nothing is ever shared without asking."
        },
        {
          title: "Search in any language",
          text:
            "Search in Arabic, Japanese, French, or any language you like Ai Cloud understands what you type, no translation needed."
        },
      ],
    },


    how: {
      eyebrow: "How it works",
      h2: "Three frames, that's it",
      p:
        "From upload to “found it” in seconds — no setup, no tagging by hand.",

      frames: [
        {
          n: "FRAME 01",
          title: "Upload",
          text:
            "Drag in photos from your phone or computer Ai Cloud takes it from there."
        },
        {
          n: "FRAME 02",
          title: "Ai Cloud reads them",
          text:
            "AI quietly studies every photo: objects, scenes, people, even text in the frame."
        },
        {
          n: "FRAME 03",
          title: "Describe & find",
          text:
            "Search in plain language, any time, and get the exact photo you were picturing."
        },
      ],
    },


    storage: {
      unit: "GB free",
      label: "Every account, no exceptions",
      desc:
        "That's thousands of photos, on the house. Need more room later? Upgrade in a click — your search never slows down either way."
    },


    about: {
      eyebrow: "About Me",

      title: "Zaki Tahraoui — Full-Stack Developer",

      text:
        "I am Zaki Tahraoui, a Full-Stack Developer based in Japan. I specialize in building modern web applications with a strong focus on frontend development, backend architecture, databases, cloud infrastructure, and AI-powered solutions.",

      skills:
        "My frontend skills include HTML, CSS, JavaScript, React.js, responsive UI design, and modern frontend libraries. On the backend side, I work with Node.js and Express.js to build secure and scalable APIs. I have experience designing and managing PostgreSQL databases, implementing authentication systems, handling file uploads, and building real-time features.",

      infrastructure:
        "I also work with Redis for caching and performance optimization, Docker for containerization, Nginx for reverse proxy and deployment management, Linux server environments, AWS services, and Git for version control and team collaboration.",

      project:
        "One of my main projects is an AI-powered cloud photo storage platform. I designed and developed the full system from frontend to backend. The application allows users to upload and manage their photos, search their memories using natural language, and organize content using AI technologies. I built the authentication system, storage management, database structure, API architecture, and deployment environment using React, Node.js, PostgreSQL, Redis, Docker, Nginx, and cloud infrastructure.",

      mission:
        "I enjoy solving technical problems, learning new technologies, and creating reliable products. My goal is to contribute as an engineer in a professional team while continuously improving my skills and delivering high-quality software."
    },


    privacy: {
      eyebrow: "Privacy Policy",

      title:
        "Your photos belong to you.",

      text:
        "Ai Cloud is designed with privacy as a priority. Your uploaded photos are stored securely and are only accessible through your account. We do not sell your personal information or share your photos with third parties without your permission.",

      points: [
        "Your photos are private.",
        "Your data is protected.",
        "You control your account."
      ]
    },


    contact: {
      eyebrow: "Contact Us",

      title:
        "We would love to hear from you.",

      text:
        "Have questions, feedback, or suggestions? Contact our team and we will get back to you.",

      email:
        "cloudaistoragejp@gmail.com"
    },


    finalCta: {
      h2:
        "Stop scrolling. Start describing.",

      p:
        "Your first 5GB is ready whenever you are.",

      cta:
        "Create your free account",
    },


    footer: {
      copy:
        "© 2026 Ai Cloud . All rights reserved."
    },


    langBtn:
      "日本語",
  },


  ja: {

    nav: {
      features: "機能",
      how: "使い方",
      storage: "ストレージ",
      about: "私たちについて",
      privacy: "プライバシー",
      contact: "お問い合わせ",
      login: "ログイン",
      register: "無料で5GB",
      registerMobile:
        "登録 — 無料で5GB"
    },


    hero: {
      eyebrow:
        "AI搭載の写真クラウドストレージ",

      h1a:
        "説明するだけ",

      h1b:
        "見つかる",

      lede:
        "Ai Cloud は撮影したすべての写真を保存し、内容を言葉で説明するだけで瞬時に見つけ出します。フォルダ整理やファイル名管理は必要ありません。",

      cta:
        "無料で5GB始める",

      login:
        "ログイン",

      fine:
        "クレジットカード不要。5GBは永久無料です。",

      searchDemo:
        "浜辺にいる犬",
      badges: {
        upload: "高速アップロード",
        aiSearch: "AI検索",
        secure: "安全な保存",
        organize: "スマート整理",
        storage: "無料5GBストレージ",
      },
    },


    features: {
      eyebrow: "Ai Cloud の理由",
      h2: "写真整理から解放される",
      p: "すべてが裏側で自動的に処理されるので、自分で整理する必要はありません。",

      cards: [
        {
          title: "説明するだけで検索",
          text:
            "「浜辺で走る犬」と入力するだけで、タグ付けしていなくても正確な写真が見つかります。"
        },
        {
          title: "永久無料の5GB",
          text:
            "すべてのアカウントに5GBのストレージ — 数千枚分の写真 — がクレジットカード不要で付属します。"
        },
        {
          title: "どこでも同期",
          text:
            "スマホで撮った写真が数秒後にはパソコンでも見つかります。常に最新の状態です。"
        },
        {
          title: "デフォルトで非公開",
          text:
            "写真は暗号化され、あなただけが検索できます。許可なく共有されることはありません。"
        },
        {
          title: "多言語で検索",
          text:
            "アラビア語、日本語、フランス語など、お好きな言語で検索できます。翻訳の必要はありません。"
        },
      ],
    },


    how: {
      eyebrow: "使い方",
      h2: "たった3ステップ",
      p: "アップロードから「見つかった」までわずか数秒 — 設定もタグ付けも不要です。",

      frames: [
        {
          n: "FRAME 01",
          title: "アップロード",
          text:
            "スマホやパソコンから写真をドラッグするだけ — あとは-Ai Cloud-にお任せください。"
        },
        {
          n: "FRAME 02",
          title: "Ai Cloud が読み取る",
          text:
            "AIがすべての写真を静かに解析します:物体、シーン、人物、写真内の文字まで。"
        },
        {
          n: "FRAME 03",
          title: "説明して検索",
          text:
            "いつでも自然な言葉で検索するだけで、思い描いていた写真が見つかります。"
        },
      ],
    },


    storage: {
      unit: "GB 無料",
      label: "すべてのアカウントに、例外なく",
      desc:
        "つまり数千枚分の写真が無料です。もっと容量が必要になったら、ワンクリックでアップグレード — どちらの場合も検索速度は変わりません。"
    },


    about: {
      eyebrow: "自己紹介",

      title: "Zakaria Tahraoui — フルスタックエンジニア",

      text:
        "私はZakaria Tahraoui、日本を拠点に活動するフルスタックエンジニアです。フロントエンド開発、バックエンドアーキテクチャ、データベース、クラウドインフラ、AIソリューションに強みを持ち、モダンなWebアプリケーションの構築を専門としています。",

      skills:
        "フロントエンドではHTML、CSS、JavaScript、React.js、レスポンシブUIデザイン、モダンなフロントエンドライブラリを扱います。バックエンドではNode.jsとExpress.jsを用いて安全でスケーラブルなAPIを構築します。PostgreSQLデータベースの設計・運用、認証システムの実装、ファイルアップロード処理、リアルタイム機能の構築にも携わってきました。",

      infrastructure:
        "また、キャッシュとパフォーマンス最適化のためのRedis、コンテナ化のためのDocker、リバースプロキシとデプロイ管理のためのNginx、Linuxサーバー環境、AWSサービス、チーム開発のためのGitも活用しています。",

      project:
        "代表的なプロジェクトの一つに、AIを活用したクラウド写真ストレージプラットフォームがあります。フロントエンドからバックエンドまでシステム全体を設計・開発しました。ユーザーは写真をアップロード・管理し、自然言語で思い出を検索し、AI技術でコンテンツを整理できます。React、Node.js、PostgreSQL、Redis、Docker、Nginx、クラウドインフラを用いて、認証システム、ストレージ管理、データベース構造、API設計、デプロイ環境を構築しました。",

      mission:
        "技術的な課題を解決すること、新しい技術を学ぶこと、信頼できるプロダクトを作ることにやりがいを感じています。エンジニアとしてプロフェッショナルなチームに貢献しながら、スキルを磨き続け、高品質なソフトウェアを届けることを目標にしています。"
    },


    privacy: {
      eyebrow:
        "プライバシーポリシー",

      title:
        "あなたの写真はあなたのものです。",

      text:
        "Ai Cloud ではプライバシーを最優先しています。アップロードされた写真は安全に保存され、あなたのアカウントからのみアクセスできます。",

      points:[
        "写真は非公開で管理されます。",
        "データは安全に保護されます。",
        "アカウント管理はあなたが行います。"
      ]
    },


    contact:{
      eyebrow:
        "お問い合わせ",

      title:
        "お気軽にお問い合わせください。",

      text:
        "質問、提案、フィードバックがございましたら、いつでもご連絡ください。",

      email:
        "cloudaistoragejp@gmail.com"
    },


    finalCta: {
      h2: "スクロールをやめて、説明を始めよう。",
      p: "最初の5GBはいつでも準備万端です。",
      cta: "無料アカウントを作成",
    },


    footer: {
      copy: "© 2026 Ai Cloud. 無断転載・無断使用を禁じます。"
    },


    langBtn:
      "English"
  }
};

// Scattered "photo" cards floating over the cloud in the hero visual.
// One entry (isHero: true) is rendered larger, like the focal photo in the reference shot.
const SCATTER_CARDS = [
  { icon: Dog, hue: "34 70% 55%", top: "20%", left: "8%", size: 64, rotate: -8 },
  { icon: Cake, hue: "350 65% 58%", top: "10%", left: "23%", size: 54, rotate: 6 },
  { icon: Flower2, hue: "330 50% 60%", top: "14%", left: "46%", size: 48, rotate: -5 },
  { icon: PartyPopper, hue: "280 45% 55%", top: "10%", left: "68%", size: 52, rotate: 8 },
  { icon: Mountain, hue: "205 40% 45%", top: "30%", left: "36%", size: 60, rotate: -4 },
  { icon: Sun, hue: "18 80% 55%", top: "32%", left: "58%", size: 148, rotate: 0, isHero: true },
  { icon: Dog, hue: "28 55% 48%", top: "44%", left: "16%", size: 62, rotate: 5 },
  { icon: Cat, hue: "40 30% 50%", top: "54%", left: "32%", size: 54, rotate: -6 },
  { icon: Baby, hue: "10 60% 65%", top: "66%", left: "44%", size: 52, rotate: -3 },
  { icon: UtensilsCrossed, hue: "95 30% 40%", top: "68%", left: "60%", size: 56, rotate: 6 },
  { icon: Building2, hue: "220 30% 35%", top: "70%", left: "14%", size: 56, rotate: 4 },
  { icon: Snowflake, hue: "200 25% 55%", top: "74%", left: "76%", size: 52, rotate: 3 },
];

function scatterCardStyle(card) {
  return {
    top: card.top,
    left: card.left,
    width: card.size,
    height: card.size,
    background: `hsl(${card.hue})`,
    transform: `rotate(${card.rotate}deg)`,
  };
}

function CloudScene({ t }) {
  const badges = [
    { icon: UploadCloud, label: t.hero.badges.upload, style: { top: "4%", left: "2%" } },
    { icon: Sparkles, label: t.hero.badges.aiSearch, style: { top: "-2%", left: "34%" } },
    { icon: ShieldCheck, label: t.hero.badges.secure, style: { bottom: "6%", left: "0%" } },
    { icon: Network, label: t.hero.badges.organize, style: { bottom: "-4%", left: "38%" } },
    { icon: BarChart3, label: t.hero.badges.storage, style: { bottom: "2%", right: "0%" } },
  ];

  return (
    <div className="cloud-scene">

      <svg
        className="cloud-shape"
        viewBox="0 0 900 460"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cloudFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dceefb" />
          </linearGradient>
        </defs>
        <path
          fill="url(#cloudFill)"
          d="M110,320 Q100,230 190,225 Q195,140 285,145 Q325,75 410,105
             Q490,55 570,105 Q660,85 695,165 Q775,165 780,240
             Q840,265 815,330 Q835,390 770,400 L160,400
             Q90,390 110,320 Z"
        />
      </svg>

      {SCATTER_CARDS.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={i}
            className={`scatter-card${card.isHero ? " hero-card" : ""}`}
            style={scatterCardStyle(card)}
          >
            <Icon size={card.isHero ? 56 : Math.round(card.size * 0.4)} />
          </div>
        );
      })}

      {badges.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <div className="badge-chip" key={i} style={badge.style}>
            <span className="badge-icon">
              <Icon size={14} />
            </span>
            {badge.label}
          </div>
        );
      })}

      <div className="search-pill-floating">
        <Search size={14} />
        {t.hero.searchDemo}
      </div>

      <span className="accent-dot" style={{ top: "18%", left: "3%" }} />
      <span className="accent-dot" style={{ bottom: "20%", right: "10%" }} />
      <span className="accent-square" style={{ top: "8%", right: "20%" }} />
      <span className="accent-square" style={{ bottom: "12%", left: "24%" }} />
      <span className="accent-ring" style={{ top: "40%", right: "6%" }} />
      <span className="accent-triangle" style={{ bottom: "30%", left: "6%" }} />

    </div>
  );
}


const FEATURE_ICONS = [
  Search,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  Languages
];


const FRAME_ICONS = [
  UploadCloud,
  Sparkles,
  Search
];



function SprocketStrip() {

  const holes = Array.from({ length: 24 });

  return (
    <div className="sprocket-strip" aria-hidden="true">

      {
        holes.map((_, i) => (
          <span
            key={i}
            className="sprocket-hole"
          />
        ))
      }

    </div>
  );
}




export default function RollHome() {

  const [lang, setLang] = useState("en");

  const [page, setPage] = useState("home");

  const t = COPY[lang];

  const isJa = lang === "ja";

  const goTo = (targetPage, anchorId) => {

    if (targetPage === "home") {

      const wasElsewhere = page !== "home";

      setPage("home");

      if (anchorId) {

        setTimeout(() => {
          const el = document.getElementById(anchorId);
          if (el) el.scrollIntoView({ behavior: wasElsewhere ? "auto" : "smooth" });
        }, wasElsewhere ? 60 : 0);

      } else if (wasElsewhere) {

        window.scrollTo(0, 0);

      }

    } else {

      setPage(targetPage);

      window.scrollTo(0, 0);

    }

  };



  return (

    <div className={`page ${isJa ? "lang-ja" : ""}`}>


      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-checkbox"
      />



      <nav className="nav">


        <div className="nav-inner">


          <div className="logo" onClick={() => goTo("home")} style={{cursor:"pointer"}}>

            <img
              style={{width:"50%"}}
              src="/Ai-brain.gif"
            />

          </div>



          <div className="nav-links">

            <a href="#features" onClick={(e) => { e.preventDefault(); goTo("home", "features"); }}>
              {t.nav.features}
            </a>


            <a href="#how" onClick={(e) => { e.preventDefault(); goTo("home", "how"); }}>
              {t.nav.how}
            </a>


            <a href="#about" onClick={(e) => { e.preventDefault(); goTo("about"); }}>
              {t.nav.about}
            </a>


            <a href="#privacy" onClick={(e) => { e.preventDefault(); goTo("privacy"); }}>
              {t.nav.privacy}
            </a>


            <a href="#contact" onClick={(e) => { e.preventDefault(); goTo("home", "contact"); }}>
              {t.nav.contact}
            </a>


          </div>



          <div className="nav-actions">


            <button
              className="lang-toggle"
              onClick={() =>
                setLang(isJa ? "en" : "ja")
              }
            >

              <Languages size={15}/>

              {t.langBtn}

            </button>



            <a
              href="/login"
              className="btn btn-ghost"
            >

              {t.nav.login}

            </a>



            <a
              href="/register"
              className="btn btn-solid"
            >

              {t.nav.register}

            </a>


          </div>



        </div>


      </nav>





      {page === "home" && (
      <>

      <SprocketStrip />



      <header className="hero">


        <div className="wrap">


          <div className="hero-grid">


            <span className="eyebrow">
              {t.hero.eyebrow}
            </span>


            <h1>

              {t.hero.h1a}

              <em>
                {t.hero.h1b}
              </em>

            </h1>


            <p className="lede">
              {t.hero.lede}
            </p>



            <div className="hero-cta">


              <a
                href="/register"
                className="btn btn-solid btn-lg"
              >

                {t.hero.cta}

                <ChevronRight size={16}/>

              </a>



              <a
                href="/login"
                className="btn btn-ghost btn-lg"
              >

                {t.hero.login}

              </a>


            </div>


            <p className="fineprint">
              {t.hero.fine}
            </p>


          </div>



          <div className="hero-visual-wrap">

            <CloudScene t={t} />

          </div>


        </div>


      </header>






      <section
        id="features"
        className="section-pad"
      >

        <div className="wrap">


          <div className="section-head">

            <h2>
              {t.features.h2}
            </h2>

            <p>
              {t.features.p}
            </p>

          </div>



          <div className="features">


          {
            t.features.cards.map((f,i)=>{

              const Icon=FEATURE_ICONS[i];


              return (

                <div
                  className="feature-card"
                  key={f.title}
                >

                  <div className="feature-icon">

                    <Icon size={20}/>

                  </div>


                  <h3>
                    {f.title}
                  </h3>


                  <p>
                    {f.text}
                  </p>


                </div>

              )


            })
          }


          </div>


        </div>

      </section>






      <section id="how" className="section-pad">

        <div className="wrap">


          <div className="frames">


          {
            t.how.frames.map((f,i)=>{

              const Icon=FRAME_ICONS[i];


              return (

                <div className="frame" key={f.title}>


                  <Icon/>


                  <h3>
                    {f.title}
                  </h3>


                  <p>
                    {f.text}
                  </p>


                </div>

              )


            })
          }


          </div>


        </div>

      </section>


      <section id="storage" className="section-pad">

        <div className="wrap">

          <div className="storage-banner">

            <div>
              <span className="storage-number">5</span>
              <span style={{fontSize:20, fontWeight:600, marginLeft:8, color:"#fff"}}>
                {t.storage.unit}
              </span>
            </div>

            <div style={{maxWidth:360, textAlign:"right"}}>
              <p style={{fontWeight:700, color:"#fff", margin:"0 0 6px"}}>
                {t.storage.label}
              </p>
              <p style={{fontSize:14, color:"rgba(255,255,255,.9)", margin:0}}>
                {t.storage.desc}
              </p>
            </div>

          </div>

        </div>

      </section>

      </>
      )}



      {page === "about" && (
      <section className="page-section section-pad">

        <div className="wrap">

          <button className="back-link" onClick={() => goTo("home")}>
            <ChevronRight size={16} style={{transform:"rotate(180deg)"}}/>
            {isJa ? "ホームに戻る" : "Back to Home"}
          </button>

          <div className="section-head">

            <span className="eyebrow">
              {t.about.eyebrow}
            </span>


            <h2>
              {t.about.title}
            </h2>


            <p>
              {t.about.text}
            </p>


            <p>
              {t.about.skills}
            </p>


            <p>
              {t.about.infrastructure}
            </p>


            <p>
              {t.about.project}
            </p>


            <p>
              {t.about.mission}
            </p>


          </div>

        </div>

      </section>
      )}



      {page === "privacy" && (
      <section className="page-section section-pad">

        <div className="wrap">

          <button className="back-link" onClick={() => goTo("home")}>
            <ChevronRight size={16} style={{transform:"rotate(180deg)"}}/>
            {isJa ? "ホームに戻る" : "Back to Home"}
          </button>

          <div className="section-head">


            <span className="eyebrow">
              {t.privacy.eyebrow}
            </span>


            <h2>
              {t.privacy.title}
            </h2>


            <p>
              {t.privacy.text}
            </p>


            <ul className="privacy-points">

              {
                t.privacy.points.map((point, i) => (
                  <li key={i}>
                    <ShieldCheck size={16}/>
                    <span>{point}</span>
                  </li>
                ))
              }

            </ul>


          </div>


        </div>


      </section>
      )}



      {page === "home" && (
      <>

      <section id="contact" className="section-pad">


        <div className="wrap">


          <div className="section-head">


            <span className="eyebrow">
              {t.contact.eyebrow}
            </span>


            <h2>
              {t.contact.title}
            </h2>


            <p>
              {t.contact.text}
            </p>


            <a
              href={`mailto:${t.contact.email}`}
              className="contact-email"
            >

              <Mail size={18}/>

              {t.contact.email}

            </a>


          </div>


        </div>


      </section>







      <section className="final-cta">


        <div className="wrap">


          <h2>
            {t.finalCta.h2}
          </h2>


          <p>
            {t.finalCta.p}
          </p>


          <a
            href="/register"
            className="btn btn-solid btn-lg"
          >

            {t.finalCta.cta}

          </a>


        </div>



      </section>

      </>
      )}





      <footer>


        <div className="wrap footer-inner">


          <div className="footer-links">


            <a href="#about" onClick={(e) => { e.preventDefault(); goTo("about"); }}>
              {t.nav.about}
            </a>


            <a href="#privacy" onClick={(e) => { e.preventDefault(); goTo("privacy"); }}>
              {t.nav.privacy}
            </a>


            <a href="#contact" onClick={(e) => { e.preventDefault(); goTo("home", "contact"); }}>
              {t.nav.contact}
            </a>


          </div>



          <div>

            {t.footer.copy}

          </div>



        </div>


      </footer>



    </div>

  );

}
