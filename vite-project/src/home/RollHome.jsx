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
} from "lucide-react";


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
      register: "無料で5GB始める",
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

      title: "Zaki Tahraoui — フルスタックエンジニア",

      text:
        "私はZaki Tahraoui、日本を拠点に活動するフルスタックエンジニアです。フロントエンド開発、バックエンドアーキテクチャ、データベース、クラウドインフラ、AIソリューションに強みを持ち、モダンなWebアプリケーションの構築を専門としています。",

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
        "zakitahraoui123@gmail.com"
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

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,560;0,9..144,680;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;600;700&display=swap');


        :root {

          --ink:#5a3658;

          --ink-dim:#020201;

          --ink-faint:#000;

          --base:
          linear-gradient(
            to right,
            #CC86D1,
            #DCFFBD
          );

          --base-2:#82b176;

          --panel:#ad5493;

          --paper:#ffffff;

          --safelight:#171c1d;

          --sand:#d9c8a9;


          --radius-lg:22px;

          --radius-md:14px;


          --font-display:'Fraunces',serif;

          --font-body:'Inter',sans-serif;

          --font-mono:'JetBrains Mono',monospace;

        }



        *{
          box-sizing:border-box;
        }



        .page{

          background:var(--base);

          color:var(--ink);

          font-family:var(--font-body);

          min-height:100vh;

          overflow-x:hidden;

          position:relative;

          line-height:1.5;

        }



        .page.lang-ja{

          font-family:'Noto Sans JP',var(--font-body);

        }



        .page.lang-ja h1,
        .page.lang-ja h2,
        .page.lang-ja h3{

          font-family:'Noto Sans JP',var(--font-display);

          letter-spacing:0;

        }



        .wrap{

          max-width:1180px;

          margin:0 auto;

          padding:0 32px;

          position:relative;

          z-index:1;

        }



        a{

          color:inherit;

          text-decoration:none;

        }



        button{

          font-family:inherit;

          cursor:pointer;

        }



        /* sprocket */


        .sprocket-strip{

          display:flex;

          justify-content:space-between;

          padding:0 32px;

          position:relative;

          z-index:1;

        }


        .sprocket-hole{

          width:8px;

          height:8px;

          border-radius:2px;

          background:var(--base-2);

          border:1px solid rgba(245,239,226,.06);

        }



        /* NAV */


        .nav{

          position:sticky;

          top:0;

          z-index:40;

          background:
          rgba(148,100,142,.86);

          backdrop-filter:blur(10px);

          border-bottom:
          1px solid rgba(245,239,226,.08);

        }



        .nav-inner{

          display:flex;

          align-items:center;

          justify-content:space-between;

          padding:18px 32px;

          max-width:1180px;

          margin:auto;

        }



        .logo{

          font-family:var(--font-display);

          font-weight:680;

          font-size:22px;

          display:flex;

          align-items:center;

          gap:8px;

        }



        .nav-links{

          display:flex;

          align-items:center;

          gap:32px;

        }



        .nav-links a{

          font-size:14.5px;

          color:var(--ink-dim);

        }



        .nav-actions{

          display:flex;

          align-items:center;

          gap:10px;

        }



        .btn{

          font-size:14.5px;

          font-weight:600;

          padding:10px 20px;

          border-radius:999px;

          border:1px solid transparent;

          display:inline-flex;

          align-items:center;

          gap:6px;

          white-space:nowrap;

        }



        .btn-solid{

          color:#f5f5f5;

          background:var(--safelight);

        }



        .btn-ghost{

          border-color:
          rgba(245,239,226,.18);

        }



        .btn-lg{

          padding:14px 26px;
            margin:10px;
          font-size:15.5px;

        }



        .lang-toggle{

          display:inline-flex;

          align-items:center;

          gap:6px;

          padding:13px 16px;

          border-radius:999px;

          border:1px solid rgba(218, 193, 189, 0.35);

          background:rgb(190, 212, 172);

          font-size:13.5px;

          font-weight:600;
          color:rgb(0, 0, 0);
          font-family:'Inter','Noto Sans JP',sans-serif;

          line-height:1;

          white-space:nowrap;

          transition:background .15s ease;

        }


        .lang-toggle:hover{

          background:rgba(232,73,45,.16);

        }



        .menu-checkbox{

          display:none;

        }


        .menu-label{

          display:none;

        }



        .mobile-panel{

          display:none;

        }



        /* HERO */


        .hero{

          padding:84px 0 56px;

        }



        .hero-grid{

          display:grid;

          gap:20px;

          text-align:center;

          max-width:760px;

          margin:auto;

        }



        .eyebrow{

          font-family:var(--font-mono);

          font-size:12.5px;

          letter-spacing:.14em;

          text-transform:uppercase;

          color:var(--safelight);

        }



        .hero h1{

          font-family:var(--font-display);

          font-weight:560;

          font-size:clamp(30px,6.4vw,50px);

          line-height:1.15;

          margin:6px 0;

        }



        .hero h1 em{

          font-style:italic;
         font-size:clamp(30px,6.4vw,50px);
           color:black;

        }



        .hero p.lede{

          font-size:18px;

          color:var(--ink-dim);

          max-width:560px;

          margin:auto;

        }



        .hero-cta{

          display:flex;

          justify-content:center;

          gap:14px;

          margin-top:10px;

          flex-wrap:wrap;

        }



        .fineprint{

          font-size:12px;

          margin-top:5px;

        }

        .demo {

          margin:56px auto 0;

          max-width:880px;

          background:
          linear-gradient(180deg,var(--panel),#7bc1ce);

          border-radius:var(--radius-lg);

          padding:22px;

        }



        .demo-search{

          display:flex;

          align-items:center;

          gap:10px;

          background:var(--base-2);

          border-radius:999px;

          padding:13px 20px;

          margin-bottom:18px;

        }



        .demo-search-text{

          color:white;

          font-family:var(--font-mono);

        }



        .contact-grid{

          display:grid;

          grid-template-columns:repeat(6,1fr);

          gap:10px;

        }



        .tile{

          aspect-ratio:1;

          border-radius:10px;

          display:flex;

          justify-content:center;

          align-items:center;

          opacity:.35;

        }



        .tile svg{

          color:white;

        }



        section{

          position:relative;

        }



        .section-pad{

          padding:96px 0;

        }



        .section-head{

          text-align:center;

          max-width:560px;

          margin:0 auto 52px;

        }



        .section-head h2{

          font-family:var(--font-display);

          font-size:42px;

        }


        #about .section-head{

          max-width:720px;

          text-align:left;

        }


        #about .section-head .eyebrow{

          display:block;

        }


        #about .section-head h2{

          font-size:34px;

          margin:8px 0 18px;

        }


        #about .section-head p{

          font-size:16px;

          line-height:1.85;

          color:var(--ink-dim);

          margin:0 0 16px;

        }


        .privacy-points{

          list-style:none;

          margin:24px 0 0;

          padding:0;

          display:grid;

          gap:12px;

          text-align:left;

          max-width:420px;

          margin-left:auto;

          margin-right:auto;

        }


        .privacy-points li{

          display:flex;

          align-items:center;

          gap:10px;

          background:var(--panel);

          border-radius:var(--radius-md);

          padding:14px 18px;

          font-size:14.5px;

        }


        .privacy-points li svg{

          flex-shrink:0;

          color:var(--sand);

        }


        .contact-email{

          display:inline-flex;

          align-items:center;

          gap:8px;

          margin-top:20px;

          font-size:16px;

          font-weight:600;

          padding:12px 22px;

          border-radius:999px;

          background:var(--safelight);

          color:#f5f5f5;

        }



        .page-section{

          min-height:70vh;

          padding-top:56px;

        }


        .back-link{

          display:inline-flex;

          align-items:center;

          gap:6px;

          background:none;

          border:none;

          color:var(--ink-dim);

          font-size:14px;

          font-weight:600;

          font-family:inherit;

          padding:8px 0;

          margin-bottom:36px;

        }


        .back-link:hover{

          text-decoration:underline;

        }



        .features{

          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

          gap:18px;

        }



        .feature-card{

          background:var(--panel);

          border-radius:var(--radius-md);

          padding:26px 22px;

        }



        .feature-icon{

          width:40px;

          height:40px;

          display:flex;

          align-items:center;

          justify-content:center;

          border-radius:10px;

        }



        .frames{

          display:grid;

          grid-template-columns:repeat(3,1fr);

          background:var(--base-2);

          border-radius:var(--radius-lg);

          overflow:hidden;

        }



        .frame{

          padding:40px 30px;

        }



        .storage-banner{

          background:

          linear-gradient(135deg,#b2e9a7,#88bfcf);

          border-radius:var(--radius-lg);

          padding:56px 48px;

          display:flex;

          justify-content:space-between;

          align-items:center;

        }



        .storage-number{

          font-size:88px;

          font-family:var(--font-display);

          color:white;

        }



        .final-cta{

          text-align:center;

          padding:100px 0;

        }



        footer{

          border-top:1px solid rgba(0,0,0,.1);

          padding:40px 0;

        }



        .footer-inner{

          display:flex;

          justify-content:space-between;

          align-items:center;

          flex-wrap:wrap;

        }



        .footer-links{

          display:flex;

          gap:24px;

        }



        @media(max-width:880px){

          .features{

            grid-template-columns:repeat(2,1fr);

          }


          .frames{

            grid-template-columns:1fr;

          }


          .contact-grid{

            grid-template-columns:repeat(4,1fr);

          }

        }



        @media(max-width:620px){


          .nav-links{

            display:none;

          }


          .features{

            grid-template-columns:1fr;

          }


          .storage-banner{

            flex-direction:column;

            text-align:center;

          }


          #about .section-head,

          #privacy .section-head,

          #contact .section-head{

            text-align:center;

          }


        }


        @media(max-width:620px){

          .page.lang-ja .hero h1{

            font-size:clamp(30px,9vw,48px);

            line-height:1.3;

          }


          .page.lang-ja .hero p.lede{

            font-size:16px;

          }


          .page.lang-ja .section-head h2{

            font-size:26px;

            line-height:1.5;

          }


          .page.lang-ja #about .section-head h2{

            font-size:24px;

          }


          .page.lang-ja .section-head p,

          .page.lang-ja #about .section-head p{

            font-size:15px;

            line-height:1.9;

          }


          .page.lang-ja .feature-card h3,

          .page.lang-ja .frame h3{

            font-size:16px;

            line-height:1.5;

          }


          .page.lang-ja .feature-card p,

          .page.lang-ja .frame p{

            font-size:14px;

            line-height:1.8;

          }


          .page.lang-ja .contact-email{

            font-size:15px;

            padding:12px 18px;

            word-break:break-all;

          }

        }


      `}</style>




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
              src="/dots.gif"
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



          </div>





          <div className="demo">


            <div className="demo-search">

              <Search size={18}/>

              <span className="demo-search-text">

                {t.hero.searchDemo}

              </span>


            </div>




            <div className="contact-grid">


              {
                TILES.map(tile=>{

                  const Icon=tile.icon;


                  return (

                    <div

                      key={tile.id}

                      className="tile"

                      style={{
                        background:
                        `hsl(${tile.hue})`
                      }}

                    >

                      <Icon/>

                    </div>

                  )

                })

              }


            </div>


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