import{useEffect as e,useState as t}from"react";import{Fragment as n,jsxDEV as r}from"react/jsx-dev-runtime";var i=`/assets/Screenshot_2026-10-25_193143-2-BU52K5n4.png`,a=`/assets/Screenshot_2026-10-25_193337-2-D8gMLGLi.png`,o=`/workspaces/default/code/src/App.tsx`;function s({name:e,size:t=20}){let i={arrow:r(n,{children:[r(`path`,{d:`M5 12h14`},void 0,!1,{fileName:o,lineNumber:11,columnNumber:9},this),r(`path`,{d:`m13 6 6 6-6 6`},void 0,!1,{fileName:o,lineNumber:12,columnNumber:9},this)]},void 0,!0),code:r(n,{children:[r(`path`,{d:`m8 9-4 3 4 3`},void 0,!1,{fileName:o,lineNumber:17,columnNumber:9},this),r(`path`,{d:`m16 9 4 3-4 3`},void 0,!1,{fileName:o,lineNumber:18,columnNumber:9},this),r(`path`,{d:`m14 5-4 14`},void 0,!1,{fileName:o,lineNumber:19,columnNumber:9},this)]},void 0,!0),database:r(n,{children:[r(`ellipse`,{cx:`12`,cy:`5`,rx:`8`,ry:`3`},void 0,!1,{fileName:o,lineNumber:24,columnNumber:9},this),r(`path`,{d:`M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5`},void 0,!1,{fileName:o,lineNumber:25,columnNumber:9},this),r(`path`,{d:`M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6`},void 0,!1,{fileName:o,lineNumber:26,columnNumber:9},this)]},void 0,!0),external:r(n,{children:[r(`path`,{d:`M15 4h5v5`},void 0,!1,{fileName:o,lineNumber:31,columnNumber:9},this),r(`path`,{d:`m10 14 10-10`},void 0,!1,{fileName:o,lineNumber:32,columnNumber:9},this),r(`path`,{d:`M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6`},void 0,!1,{fileName:o,lineNumber:33,columnNumber:9},this)]},void 0,!0),layers:r(n,{children:[r(`path`,{d:`m12 2 9 5-9 5-9-5 9-5Z`},void 0,!1,{fileName:o,lineNumber:38,columnNumber:9},this),r(`path`,{d:`m3 12 9 5 9-5`},void 0,!1,{fileName:o,lineNumber:39,columnNumber:9},this),r(`path`,{d:`m3 17 9 5 9-5`},void 0,!1,{fileName:o,lineNumber:40,columnNumber:9},this)]},void 0,!0),linkedin:r(n,{children:[r(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z`},void 0,!1,{fileName:o,lineNumber:45,columnNumber:9},this),r(`path`,{d:`M2 9h4v12H2z`},void 0,!1,{fileName:o,lineNumber:46,columnNumber:9},this),r(`path`,{d:`M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z`},void 0,!1,{fileName:o,lineNumber:47,columnNumber:9},this)]},void 0,!0),mail:r(n,{children:[r(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2`},void 0,!1,{fileName:o,lineNumber:52,columnNumber:9},this),r(`path`,{d:`m3 7 9 6 9-6`},void 0,!1,{fileName:o,lineNumber:53,columnNumber:9},this)]},void 0,!0),map:r(n,{children:[r(`path`,{d:`M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z`},void 0,!1,{fileName:o,lineNumber:58,columnNumber:9},this),r(`circle`,{cx:`12`,cy:`10`,r:`2.5`},void 0,!1,{fileName:o,lineNumber:59,columnNumber:9},this)]},void 0,!0),menu:r(n,{children:[r(`path`,{d:`M4 7h16`},void 0,!1,{fileName:o,lineNumber:64,columnNumber:9},this),r(`path`,{d:`M4 12h16`},void 0,!1,{fileName:o,lineNumber:65,columnNumber:9},this),r(`path`,{d:`M4 17h16`},void 0,!1,{fileName:o,lineNumber:66,columnNumber:9},this)]},void 0,!0),phone:r(`path`,{d:`M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z`},void 0,!1,{fileName:o,lineNumber:70,columnNumber:7},this),server:r(n,{children:[r(`rect`,{x:`3`,y:`4`,width:`18`,height:`6`,rx:`2`},void 0,!1,{fileName:o,lineNumber:74,columnNumber:9},this),r(`rect`,{x:`3`,y:`14`,width:`18`,height:`6`,rx:`2`},void 0,!1,{fileName:o,lineNumber:75,columnNumber:9},this),r(`path`,{d:`M7 7h.01M7 17h.01`},void 0,!1,{fileName:o,lineNumber:76,columnNumber:9},this)]},void 0,!0),spark:r(`path`,{d:`m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3ZM5 15l-.7 2.3L2 18l2.3.7L5 21l.7-2.3L8 18l-2.3-.7L5 15ZM19 14l-.7 1.3-1.3.7 1.3.7L19 18l.7-1.3 1.3-.7-1.3-.7L19 14Z`},void 0,!1,{fileName:o,lineNumber:80,columnNumber:7},this),x:r(n,{children:[r(`path`,{d:`M18 6 6 18`},void 0,!1,{fileName:o,lineNumber:84,columnNumber:9},this),r(`path`,{d:`m6 6 12 12`},void 0,!1,{fileName:o,lineNumber:85,columnNumber:9},this)]},void 0,!0)};return r(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:i[e]},void 0,!1,{fileName:o,lineNumber:90,columnNumber:5},this)}var c=[{title:`CMS & Development`,icon:`layers`,items:[`WordPress`,`Custom Themes`,`Custom Post Types`,`Elementor`,`Hooks & Filters`,`WPBakery`,`WP-CLI`]},{title:`E-Commerce`,icon:`spark`,items:[`WooCommerce`,`Checkout Customization`,`Payment Gateways`,`Product Management`,`Inventory Management`]},{title:`Backend & Database`,icon:`database`,items:[`Core PHP`,`MySQL`,`ACF`,`Custom Plugins`,`Database Optimization`,`REST APIs`]},{title:`Frontend`,icon:`code`,items:[`HTML5`,`CSS3`,`JavaScript`,`jQuery`,`Bootstrap`,`Responsive Design`,`Cross-Browser Compatibility`]},{title:`Integrations`,icon:`server`,items:[`Zoho CRM`,`Tesseract OCR`,`Webhooks`,`JSON`,`Third-Party APIs`,`Postman`]},{title:`Performance & Tools`,icon:`spark`,items:[`Site Speed`,`Security Hardening`,`Git/GitHub`,`WP Rocket`,`Yoast SEO`,`Wordfence`,`cPanel`]}],l=[{title:`Benity Care`,category:`WordPress`,label:`Healthcare`,description:`A digital presence for an Australian registered NDIS provider offering disability assistance, personal care, accommodation support, and community participation.`,url:`https://benitycare.com.au/`,accent:`violet`},{title:`Zoho Helpdesk Sync`,category:`Integrations`,label:`API Integration`,description:`A customized Zoho Desk setup synchronizing real-time user data with a WordPress CMS backend.`,accent:`blue`},{title:`Dynamic Event Platform`,category:`Integrations`,label:`Data Automation`,description:`An event listing platform using automated database scraping to compile localized event schedules.`,url:`https://deluxebartendingservice.com/`,accent:`pink`},{title:`Signature Smile Studio`,category:`WordPress`,label:`Healthcare`,description:`A responsive, patient-focused website designed and developed for an Australian dental clinic.`,url:`https://www.signaturesmilestudio.com.au/`,accent:`violet`},{title:`Jodha Logistics`,category:`WordPress`,label:`Corporate`,description:`A professional corporate web presence for an Australian international transport and logistics operation.`,url:`https://jodhalogistics.com.au/`,accent:`blue`},{title:`Scaling Up`,category:`E-Commerce`,label:`WooCommerce / AWS`,description:`A maintained WooCommerce storefront supporting multi-region sales of books, digital downloads, and training materials.`,url:`https://scalingup.com/`,accent:`pink`}],u=[{role:`Full Stack Developer`,company:`IP Websoft`,date:`Jan 2026 — Present`,points:[`Deliver responsive web projects that streamline online shopping experiences.`,`Design user-centric WordPress solutions with dynamic content and optimized performance.`,`Improve backend performance and UI/UX through focused troubleshooting and optimization.`,`Support e-commerce development, deployment, and third-party API integration.`]},{role:`Full Stack Developer`,company:`Walstar Technologies Pvt. Ltd.`,date:`Jan 2023 — Jan 2026`,points:[`Developed PHP web applications and increased page load speed by 20%.`,`Built custom WordPress themes and plugins with a focus on UX and SEO.`,`Automated data scraping and integration workflows for dynamic website content.`,`Delivered e-commerce, educational, and corporate websites end-to-end.`,`Integrated Zoho CRM, OCR services, and other third-party REST APIs.`]}],d=[{school:`KIT's College of Engineering`,degree:`B.Tech in Computer Science`,date:`2019 — 2023`},{school:`S.M. Lohiya Jr. College`,degree:`HSC in Science`,date:`2017 — 2019`},{school:`Private English School`,degree:`SSC`,date:`2016 — 2017`}];function f(){let[n,f]=t(!1),[p,m]=t(`home`),[h,g]=t(`All`);e(()=>{let e=document.querySelectorAll(`main section[id]`),t=new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting&&m(e.target.id)),{rootMargin:`-25% 0px -65% 0px`});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[]);let _=[`About`,`Experience`,`Skills`,`Projects`],v=h===`All`?l:l.filter(e=>e.category===h),y=()=>f(!1);return r(`div`,{className:`app-shell`,children:[r(`header`,{className:`site-header`,children:[r(`a`,{href:`#home`,className:`brand`,onClick:y,"aria-label":`Anushka Raut, home`,children:[r(`span`,{children:`AR`},void 0,!1,{fileName:o,lineNumber:314,columnNumber:11},this),r(`strong`,{children:`Anushka Raut`},void 0,!1,{fileName:o,lineNumber:315,columnNumber:11},this)]},void 0,!0,{fileName:o,lineNumber:308,columnNumber:9},this),r(`nav`,{className:n?`nav-links is-open`:`nav-links`,"aria-label":`Main navigation`,children:[_.map(e=>r(`a`,{href:`#${e.toLowerCase()}`,className:p===e.toLowerCase()?`active`:``,onClick:y,children:e},e,!1,{fileName:o,lineNumber:322,columnNumber:13},this)),r(`a`,{className:`nav-contact`,href:`#contact`,onClick:y,children:[`Let's talk `,r(s,{name:`arrow`,size:16},void 0,!1,{fileName:o,lineNumber:332,columnNumber:29},this)]},void 0,!0,{fileName:o,lineNumber:331,columnNumber:11},this)]},void 0,!0,{fileName:o,lineNumber:317,columnNumber:9},this),r(`button`,{className:`menu-button`,onClick:()=>f(!n),"aria-label":n?`Close menu`:`Open menu`,"aria-expanded":n,children:r(s,{name:n?`x`:`menu`},void 0,!1,{fileName:o,lineNumber:341,columnNumber:11},this)},void 0,!1,{fileName:o,lineNumber:335,columnNumber:9},this)]},void 0,!0,{fileName:o,lineNumber:307,columnNumber:7},this),r(`main`,{children:[r(`section`,{id:`home`,className:`hero section-wrap`,children:[r(`div`,{className:`hero-glow glow-one`},void 0,!1,{fileName:o,lineNumber:347,columnNumber:11},this),r(`div`,{className:`hero-glow glow-two`},void 0,!1,{fileName:o,lineNumber:348,columnNumber:11},this),r(`div`,{className:`hero-content reveal`,children:[r(`p`,{className:`eyebrow`,children:[r(`span`,{className:`eyebrow-dot`},void 0,!1,{fileName:o,lineNumber:351,columnNumber:15},this),` Hello, I'm Anushka Raut`]},void 0,!0,{fileName:o,lineNumber:350,columnNumber:13},this),r(`h1`,{children:[`I build thoughtful web experiences that `,r(`em`,{children:`perform.`},void 0,!1,{fileName:o,lineNumber:354,columnNumber:55},this)]},void 0,!0,{fileName:o,lineNumber:353,columnNumber:13},this),r(`p`,{className:`hero-copy`,children:`A Full Stack Developer and WordPress & PHP specialist from Pune, creating fast, reliable digital products for real business needs.`},void 0,!1,{fileName:o,lineNumber:356,columnNumber:13},this),r(`div`,{className:`hero-actions`,children:[r(`a`,{href:`#projects`,className:`button button-primary`,children:[`Explore my work `,r(s,{name:`arrow`,size:18},void 0,!1,{fileName:o,lineNumber:363,columnNumber:33},this)]},void 0,!0,{fileName:o,lineNumber:362,columnNumber:15},this),r(`a`,{href:`mailto:Anushkaraut2105@gmail.com`,className:`button button-secondary`,children:[r(s,{name:`mail`,size:18},void 0,!1,{fileName:o,lineNumber:369,columnNumber:17},this),` Email me`]},void 0,!0,{fileName:o,lineNumber:365,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:361,columnNumber:13},this),r(`div`,{className:`hero-proof`,children:[r(`div`,{children:[r(`strong`,{children:`3`},void 0,!1,{fileName:o,lineNumber:374,columnNumber:17},this),r(`span`,{children:[`Years of`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:377,columnNumber:19},this),`experience`]},void 0,!0,{fileName:o,lineNumber:375,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:373,columnNumber:15},this),r(`div`,{children:[r(`strong`,{children:`20%`},void 0,!1,{fileName:o,lineNumber:382,columnNumber:17},this),r(`span`,{children:[`Page speed`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:385,columnNumber:19},this),`improvement`]},void 0,!0,{fileName:o,lineNumber:383,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:381,columnNumber:15},this),r(`div`,{children:[r(`strong`,{children:`7`},void 0,!1,{fileName:o,lineNumber:390,columnNumber:17},this),r(`span`,{children:[`Selected`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:393,columnNumber:19},this),`projects`]},void 0,!0,{fileName:o,lineNumber:391,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:389,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:372,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:349,columnNumber:11},this),r(`div`,{className:`hero-visual`,"aria-hidden":`true`,children:[r(`div`,{className:`orbit orbit-one`},void 0,!1,{fileName:o,lineNumber:400,columnNumber:13},this),r(`div`,{className:`orbit orbit-two`},void 0,!1,{fileName:o,lineNumber:401,columnNumber:13},this),r(`div`,{className:`portrait-mark`,children:[r(`span`,{className:`mark-shine`},void 0,!1,{fileName:o,lineNumber:403,columnNumber:15},this),r(`span`,{className:`portrait-scan`},void 0,!1,{fileName:o,lineNumber:404,columnNumber:15},this),r(`img`,{src:`/anushka-raut-portrait.jpg`,alt:`Anushka Raut`,className:`absolute inset-0 h-full w-full object-cover object-top`},void 0,!1,{fileName:o,lineNumber:405,columnNumber:15},this),r(`small`,{children:[r(`span`,{children:`Based in Pune`},void 0,!1,{fileName:o,lineNumber:411,columnNumber:17},this),`WordPress & PHP Specialist`]},void 0,!0,{fileName:o,lineNumber:410,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:402,columnNumber:13},this),r(`div`,{className:`floating-card card-code`,children:[r(s,{name:`code`},void 0,!1,{fileName:o,lineNumber:415,columnNumber:15},this),r(`span`,{children:`Clean code`},void 0,!1,{fileName:o,lineNumber:416,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:414,columnNumber:13},this),r(`div`,{className:`floating-card card-speed`,children:[r(`strong`,{children:`+20%`},void 0,!1,{fileName:o,lineNumber:419,columnNumber:15},this),r(`span`,{children:`Faster`},void 0,!1,{fileName:o,lineNumber:420,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:418,columnNumber:13},this),r(`div`,{className:`code-pill pill-one`,children:`<WordPress />`},void 0,!1,{fileName:o,lineNumber:422,columnNumber:13},this),r(`div`,{className:`code-pill pill-two`,children:`PHP · MySQL`},void 0,!1,{fileName:o,lineNumber:423,columnNumber:13},this),r(`span`,{className:`portrait-spark spark-one`,children:r(s,{name:`spark`,size:18},void 0,!1,{fileName:o,lineNumber:425,columnNumber:15},this)},void 0,!1,{fileName:o,lineNumber:424,columnNumber:13},this),r(`span`,{className:`portrait-spark spark-two`,children:r(s,{name:`spark`,size:14},void 0,!1,{fileName:o,lineNumber:428,columnNumber:15},this)},void 0,!1,{fileName:o,lineNumber:427,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:399,columnNumber:11},this)]},void 0,!0,{fileName:o,lineNumber:346,columnNumber:9},this),r(`section`,{id:`about`,className:`about section-wrap`,children:[r(`div`,{className:`section-heading`,children:[r(`p`,{className:`section-kicker`,children:`About me`},void 0,!1,{fileName:o,lineNumber:435,columnNumber:13},this),r(`h2`,{children:[`Development with purpose,`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:438,columnNumber:15},this),r(`span`,{children:`built around people.`},void 0,!1,{fileName:o,lineNumber:439,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:436,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:434,columnNumber:11},this),r(`div`,{className:`about-grid`,children:[r(`div`,{className:`about-copy`,children:[r(`p`,{className:`lead`,children:`I create reliable digital experiences where thoughtful design meets robust development.`},void 0,!1,{fileName:o,lineNumber:444,columnNumber:15},this),r(`p`,{children:`With 3 years of full-stack experience, I specialize in cross-browser web development, e-commerce integration, performance optimization, and custom WordPress solutions.`},void 0,!1,{fileName:o,lineNumber:448,columnNumber:15},this),r(`p`,{children:`From building custom themes and plugins to connecting business-critical APIs, I focus on work that is responsive, maintainable, and tailored to real user needs.`},void 0,!1,{fileName:o,lineNumber:453,columnNumber:15},this),r(`div`,{className:`language-row`,children:[r(`span`,{children:`Languages`},void 0,!1,{fileName:o,lineNumber:459,columnNumber:17},this),r(`strong`,{children:`English`},void 0,!1,{fileName:o,lineNumber:460,columnNumber:17},this),r(`strong`,{children:`German`},void 0,!1,{fileName:o,lineNumber:461,columnNumber:17},this),r(`strong`,{children:`Hindi`},void 0,!1,{fileName:o,lineNumber:462,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:458,columnNumber:15},this),r(`div`,{className:`about-actions`,children:[r(`a`,{href:`#experience`,className:`text-link`,children:[`See my experience `,r(s,{name:`arrow`,size:17},void 0,!1,{fileName:o,lineNumber:466,columnNumber:37},this)]},void 0,!0,{fileName:o,lineNumber:465,columnNumber:17},this),r(`a`,{href:`#contact`,className:`text-link muted-link`,children:`Start a conversation`},void 0,!1,{fileName:o,lineNumber:468,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:464,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:443,columnNumber:13},this),r(`div`,{className:`focus-grid`,children:[r(`article`,{style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='190' viewBox='0 0 260 190'%3E%3Cg opacity='.42' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M72 40h136a16 16 0 0 1 16 16v91a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16Z' fill='%23f4f0ff' stroke='%23cbbcf1' stroke-width='2'/%3E%3Cpath d='M57 68h166' stroke='%23cbbcf1' stroke-width='2'/%3E%3Ccircle cx='75' cy='54' r='4' fill='%23e96862'/%3E%3Ccircle cx='89' cy='54' r='4' fill='%23f2b45f'/%3E%3Ccircle cx='103' cy='54' r='4' fill='%23128c87'/%3E%3Crect x='75' y='85' width='54' height='57' rx='8' fill='%23ffffff' stroke='%23ded7e9'/%3E%3Cpath d='M89 102h25M89 113h18M89 124h22' stroke='%237652d6' stroke-width='4' opacity='.45'/%3E%3Crect x='143' y='85' width='62' height='22' rx='6' fill='%23e9e1ff'/%3E%3Crect x='143' y='117' width='28' height='25' rx='6' fill='%23d9f3f0'/%3E%3Crect x='177' y='117' width='28' height='25' rx='6' fill='%23ffe8e5'/%3E%3Ccircle cx='211' cy='145' r='28' fill='%237652d6' stroke='%23ffffff' stroke-width='5'/%3E%3Cpath d='m196 134 7 22 8-15 7 15 7-22' stroke='%23ffffff' stroke-width='4'/%3E%3Cpath d='M40 94 24 105l16 11M232 80l12-8 10 10' stroke='%237652d6' stroke-width='4' opacity='.5'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(145deg, rgba(255,255,255,.97), rgba(244,240,255,.92))`,backgroundPosition:`right -10px bottom -8px, center`,backgroundRepeat:`no-repeat`,backgroundSize:`245px auto, cover`},children:[r(`span`,{children:`01`},void 0,!1,{fileName:o,lineNumber:483,columnNumber:17},this),r(s,{name:`layers`},void 0,!1,{fileName:o,lineNumber:484,columnNumber:17},this),r(`h3`,{children:`Custom WordPress`},void 0,!1,{fileName:o,lineNumber:485,columnNumber:17},this),r(`p`,{children:`Themes, plugins, CMS architecture, and content experiences built to fit.`},void 0,!1,{fileName:o,lineNumber:486,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:474,columnNumber:15},this),r(`article`,{style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='270' height='190' viewBox='0 0 270 190'%3E%3Cg opacity='.4' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M78 43h137a15 15 0 0 1 15 15v91a15 15 0 0 1-15 15H78a15 15 0 0 1-15-15V58a15 15 0 0 1 15-15Z' fill='%23fff7f5' stroke='%23f0c5c1' stroke-width='2'/%3E%3Cpath d='M64 70h165' stroke='%23f0c5c1' stroke-width='2'/%3E%3Ccircle cx='82' cy='56' r='4' fill='%23e96862'/%3E%3Ccircle cx='96' cy='56' r='4' fill='%23f2b45f'/%3E%3Ccircle cx='110' cy='56' r='4' fill='%23128c87'/%3E%3Crect x='79' y='84' width='47' height='57' rx='8' fill='%23ffffff' stroke='%23efd8d5'/%3E%3Cpath d='M90 96h25l-3 20H93Z' fill='%23ffe1dd' stroke='%23e96862' stroke-width='2'/%3E%3Cpath d='M96 96a6 6 0 0 1 12 0' stroke='%23e96862' stroke-width='2'/%3E%3Cpath d='M91 128h22' stroke='%23e96862' stroke-width='4' opacity='.45'/%3E%3Crect x='138' y='84' width='71' height='21' rx='6' fill='%23ffe5e2'/%3E%3Cpath d='M150 94h31' stroke='%23e96862' stroke-width='3' opacity='.6'/%3E%3Crect x='138' y='115' width='71' height='26' rx='7' fill='%23ffffff' stroke='%23efd8d5'/%3E%3Cpath d='M150 124h22M150 132h34' stroke='%23c89f9b' stroke-width='3'/%3E%3Ccircle cx='216' cy='146' r='28' fill='%23e96862' stroke='%23ffffff' stroke-width='5'/%3E%3Cpath d='M203 137h4l3 12h14l4-9h-18M213 155h.1M222 155h.1' stroke='%23ffffff' stroke-width='3'/%3E%3Cpath d='m44 96 10-8 8 10M241 82l9 7-8 9' stroke='%23e96862' stroke-width='4' opacity='.5'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(145deg, rgba(255,255,255,.97), rgba(255,244,242,.92))`,backgroundPosition:`right -14px bottom -8px, center`,backgroundRepeat:`no-repeat`,backgroundSize:`250px auto, cover`},children:[r(`span`,{children:`02`},void 0,!1,{fileName:o,lineNumber:500,columnNumber:17},this),r(s,{name:`spark`},void 0,!1,{fileName:o,lineNumber:501,columnNumber:17},this),r(`h3`,{children:`E-Commerce`},void 0,!1,{fileName:o,lineNumber:502,columnNumber:17},this),r(`p`,{children:`WooCommerce stores, checkout flows, payments, and inventory workflows.`},void 0,!1,{fileName:o,lineNumber:503,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:491,columnNumber:15},this),r(`article`,{style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='270' height='190' viewBox='0 0 270 190'%3E%3Cg opacity='.42' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M84 39h126a16 16 0 0 1 16 16v94a16 16 0 0 1-16 16H84a16 16 0 0 1-16-16V55a16 16 0 0 1 16-16Z' fill='%23f1fbfa' stroke='%23b7dedb' stroke-width='2'/%3E%3Cpath d='M69 67h156' stroke='%23b7dedb' stroke-width='2'/%3E%3Ccircle cx='86' cy='53' r='4' fill='%23e96862'/%3E%3Ccircle cx='100' cy='53' r='4' fill='%23f2b45f'/%3E%3Ccircle cx='114' cy='53' r='4' fill='%23128c87'/%3E%3Crect x='86' y='82' width='43' height='28' rx='7' fill='%23ffffff' stroke='%239bceca'/%3E%3Cpath d='M96 92h23M96 100h16' stroke='%23128c87' stroke-width='3' opacity='.55'/%3E%3Crect x='166' y='82' width='43' height='28' rx='7' fill='%23ffffff' stroke='%239bceca'/%3E%3Cpath d='M176 92h23M176 100h15' stroke='%23128c87' stroke-width='3' opacity='.55'/%3E%3Cpath d='M130 96h35m-8-7 8 7-8 7' stroke='%23128c87' stroke-width='3'/%3E%3Ccircle cx='147' cy='133' r='22' fill='%23128c87' stroke='%23ffffff' stroke-width='5'/%3E%3Cpath d='M136 132h22M141 124l-7 8 7 8M153 124l7 8-7 8' stroke='%23ffffff' stroke-width='3'/%3E%3Cpath d='M108 111v13c0 5 4 9 9 9h7M187 111v13c0 5-4 9-9 9h-8' stroke='%23128c87' stroke-width='2' stroke-dasharray='4 5'/%3E%3Ccircle cx='108' cy='111' r='3' fill='%23128c87'/%3E%3Ccircle cx='187' cy='111' r='3' fill='%23128c87'/%3E%3Cpath d='m45 100 11-9 8 10M233 83l10 8-9 10' stroke='%23128c87' stroke-width='4' opacity='.48'/%3E%3Ccircle cx='49' cy='139' r='5' fill='%23d9f3f0' stroke='%23128c87'/%3E%3Cpath d='M54 139h20' stroke='%23128c87' stroke-width='2' stroke-dasharray='3 4'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(145deg, rgba(255,255,255,.97), rgba(239,250,249,.92))`,backgroundPosition:`right -14px bottom -8px, center`,backgroundRepeat:`no-repeat`,backgroundSize:`250px auto, cover`},children:[r(`span`,{children:`03`},void 0,!1,{fileName:o,lineNumber:517,columnNumber:17},this),r(s,{name:`server`},void 0,!1,{fileName:o,lineNumber:518,columnNumber:17},this),r(`h3`,{children:`API Integration`},void 0,!1,{fileName:o,lineNumber:519,columnNumber:17},this),r(`p`,{children:`REST APIs, Zoho CRM, OCR services, webhooks, and data automation.`},void 0,!1,{fileName:o,lineNumber:520,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:508,columnNumber:15},this),r(`article`,{style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='270' height='190' viewBox='0 0 270 190'%3E%3Cg opacity='.42' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M82 40h130a16 16 0 0 1 16 16v92a16 16 0 0 1-16 16H82a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16Z' fill='%23f3f7ff' stroke='%23bed0f2' stroke-width='2'/%3E%3Cpath d='M67 68h160' stroke='%23bed0f2' stroke-width='2'/%3E%3Ccircle cx='84' cy='54' r='4' fill='%23e96862'/%3E%3Ccircle cx='98' cy='54' r='4' fill='%23f2b45f'/%3E%3Ccircle cx='112' cy='54' r='4' fill='%23128c87'/%3E%3Cpath d='M87 119a31 31 0 0 1 62 0' fill='%23ffffff' stroke='%239bb6e5' stroke-width='3'/%3E%3Cpath d='M118 119 137 94' stroke='%234b72c9' stroke-width='4'/%3E%3Ccircle cx='118' cy='119' r='6' fill='%234b72c9' stroke='%23ffffff' stroke-width='3'/%3E%3Cpath d='M93 111l-7-2M101 98l-5-6M118 91v-8M135 98l5-6M143 111l7-2' stroke='%234b72c9' stroke-width='3' opacity='.6'/%3E%3Crect x='89' y='133' width='58' height='12' rx='6' fill='%23dfe9fb'/%3E%3Cpath d='M91 139h43' stroke='%234b72c9' stroke-width='5'/%3E%3Cpath d='M179 83l22 8v17c0 15-9 25-22 31-13-6-22-16-22-31V91Z' fill='%234b72c9' stroke='%23ffffff' stroke-width='5'/%3E%3Cpath d='m168 108 8 8 15-18' stroke='%23ffffff' stroke-width='4'/%3E%3Cpath d='M166 149h41M172 157h29' stroke='%239bb6e5' stroke-width='3'/%3E%3Cpath d='m43 98 11-9 8 10M235 84l10 8-9 10' stroke='%234b72c9' stroke-width='4' opacity='.48'/%3E%3Ccircle cx='47' cy='139' r='5' fill='%23dfe9fb' stroke='%234b72c9'/%3E%3Cpath d='M52 139h20' stroke='%234b72c9' stroke-width='2' stroke-dasharray='3 4'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(145deg, rgba(255,255,255,.97), rgba(241,246,255,.92))`,backgroundPosition:`right -14px bottom -8px, center`,backgroundRepeat:`no-repeat`,backgroundSize:`250px auto, cover`},children:[r(`span`,{children:`04`},void 0,!1,{fileName:o,lineNumber:534,columnNumber:17},this),r(s,{name:`code`},void 0,!1,{fileName:o,lineNumber:535,columnNumber:17},this),r(`h3`,{children:`Performance`},void 0,!1,{fileName:o,lineNumber:536,columnNumber:17},this),r(`p`,{children:`Speed optimization, secure delivery, and cross-browser quality.`},void 0,!1,{fileName:o,lineNumber:537,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:525,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:473,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:442,columnNumber:11},this)]},void 0,!0,{fileName:o,lineNumber:433,columnNumber:9},this),r(`section`,{id:`experience`,className:`experience`,children:r(`div`,{className:`section-wrap experience-stage`,children:[r(`style`,{children:`
              .experience-stage {
                position: relative;
                margin-top: -120px;
                margin-bottom: -120px;
                padding-top: 50px;
                padding-bottom: 50px;
                color: #f7f4ff;
                background:
                  radial-gradient(circle at 82% 12%, rgba(118, 82, 214, .2), transparent 28%),
                  radial-gradient(circle at 8% 88%, rgba(18, 140, 135, .12), transparent 24%),
                  #15121c;
                box-shadow: 0 0 0 100vmax #15121c;
                clip-path: inset(0 -100vmax);
                font-family: "Manrope", sans-serif;
              }

              .experience-stage .section-kicker {
                color: #67d8d1;
                font-size: 11px;
                font-weight: 800;
                letter-spacing: .18em;
                text-transform: uppercase;
              }

              .experience-stage .section-heading h2 {
                color: #f7f4ff;
                font-weight: 600;
                letter-spacing: -.055em;
              }

              .experience-stage .section-heading h2 span {
                color: #aa8bff;
                font-family: Georgia, serif;
                font-style: italic;
                font-weight: 400;
              }

              .experience-stage .split-heading > p {
                color: #aaa3b7;
                font-family: "DM Sans", sans-serif;
              }

              .experience-stage .timeline::before {
                background: rgba(170, 139, 255, .22);
              }

              .experience-stage .timeline-item {
                isolation: isolate;
                border-color: rgba(170, 139, 255, .16);
                transition: border-color .35s ease;
              }

              .experience-stage .timeline-item::before {
                content: "";
                position: absolute;
                z-index: -1;
                inset: 8px 0;
                border: 1px solid rgba(170, 139, 255, .18);
                border-radius: 18px;
                background: linear-gradient(100deg, rgba(118, 82, 214, .2), rgba(18, 140, 135, .08));
                box-shadow: 0 18px 50px rgba(0, 0, 0, .2);
                opacity: 0;
                transform: scaleX(.04);
                transform-origin: left center;
                transition: transform .5s cubic-bezier(.22, 1, .36, 1), opacity .25s ease;
              }

              .experience-stage .job-meta,
              .experience-stage .job-details {
                position: relative;
                z-index: 1;
                transition: transform .5s cubic-bezier(.22, 1, .36, 1);
              }

              .experience-stage .timeline-item:hover::before {
                opacity: 1;
                transform: scaleX(1);
              }

              .experience-stage .timeline-item:hover .job-meta,
              .experience-stage .timeline-item:hover .job-details {
                transform: translateX(14px);
              }

              .experience-stage .timeline-marker {
                border-color: #15121c;
                background: linear-gradient(135deg, #8f6af0, #5e38bd);
                box-shadow: 0 0 0 1px rgba(170, 139, 255, .32), 0 8px 24px rgba(94, 56, 189, .4);
              }

              .experience-stage .job-meta p {
                color: #67d8d1;
                letter-spacing: .12em;
              }

              .experience-stage .job-meta strong {
                color: #dcd6e8;
                font-weight: 600;
              }

              .experience-stage .job-details h3 {
                color: #f7f4ff;
                font-size: 25px;
                font-weight: 600;
              }

              .experience-stage .job-details li {
                color: #aaa3b7;
                font-family: "DM Sans", sans-serif;
              }

              .experience-stage .job-details li::before {
                background: #aa8bff;
                box-shadow: 0 0 10px rgba(170, 139, 255, .7);
              }

              @media (max-width: 760px) {
                .experience-stage {
                  margin-top: -85px;
                  margin-bottom: -85px;
                  padding-top: 50px;
                  padding-bottom: 50px;
                }

                .experience-stage .timeline-item:hover .job-meta,
                .experience-stage .timeline-item:hover .job-details {
                  transform: translateX(6px);
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .experience-stage .timeline-item::before,
                .experience-stage .job-meta,
                .experience-stage .job-details {
                  transition: none;
                }
              }
            `},void 0,!1,{fileName:o,lineNumber:548,columnNumber:13},this),r(`div`,{className:`section-heading split-heading`,children:[r(`div`,{children:[r(`p`,{className:`section-kicker`,children:`Experience`},void 0,!1,{fileName:o,lineNumber:689,columnNumber:17},this),r(`h2`,{children:[`Where I've made`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:692,columnNumber:19},this),r(`span`,{children:`an impact.`},void 0,!1,{fileName:o,lineNumber:693,columnNumber:19},this)]},void 0,!0,{fileName:o,lineNumber:690,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:688,columnNumber:15},this),r(`p`,{children:`Full-cycle web development across e-commerce, corporate, educational, and custom platform projects.`},void 0,!1,{fileName:o,lineNumber:696,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:687,columnNumber:13},this),r(`div`,{className:`timeline`,children:u.map((e,t)=>r(`article`,{className:`timeline-item`,children:[r(`div`,{className:`timeline-marker`,children:r(`span`,{children:String(t+1).padStart(2,`0`)},void 0,!1,{fileName:o,lineNumber:705,columnNumber:21},this)},void 0,!1,{fileName:o,lineNumber:704,columnNumber:19},this),r(`div`,{className:`job-meta`,children:[r(`p`,{children:e.date},void 0,!1,{fileName:o,lineNumber:708,columnNumber:21},this),r(`strong`,{children:e.company},void 0,!1,{fileName:o,lineNumber:709,columnNumber:21},this)]},void 0,!0,{fileName:o,lineNumber:707,columnNumber:19},this),r(`div`,{className:`job-details`,children:[r(`h3`,{children:e.role},void 0,!1,{fileName:o,lineNumber:712,columnNumber:21},this),r(`ul`,{children:e.points.map(e=>r(`li`,{children:e},e,!1,{fileName:o,lineNumber:715,columnNumber:25},this))},void 0,!1,{fileName:o,lineNumber:713,columnNumber:21},this)]},void 0,!0,{fileName:o,lineNumber:711,columnNumber:19},this)]},e.company,!0,{fileName:o,lineNumber:703,columnNumber:17},this))},void 0,!1,{fileName:o,lineNumber:701,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:547,columnNumber:11},this)},void 0,!1,{fileName:o,lineNumber:546,columnNumber:9},this),r(`section`,{id:`skills`,className:`skills section-wrap skills-showcase`,children:[r(`style`,{children:`
            .skills-showcase {
              --skill-accent: var(--purple);
              isolation: isolate;
              padding-top: 50px;
              padding-bottom: 50px;
            }

            .skills-showcase::before {
              content: "";
              position: absolute;
              z-index: -1;
              top: 5%;
              left: 50%;
              width: 70%;
              height: 42%;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(118, 82, 214, .1), transparent 68%);
              transform: translateX(-50%);
              filter: blur(24px);
              pointer-events: none;
            }

            .skills-showcase .skills-heading {
              display: grid;
              grid-template-columns: 1fr auto;
              align-items: end;
              gap: 48px;
              margin-bottom: 52px;
              text-align: left;
            }

            .skills-showcase .section-kicker {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              color: var(--purple-dark);
              font-size: 11px;
              font-weight: 800;
              letter-spacing: .16em;
              text-transform: uppercase;
            }

            .skills-showcase .section-kicker::before {
              content: "";
              width: 28px;
              height: 2px;
              border-radius: 2px;
              background: linear-gradient(90deg, var(--coral), var(--purple));
            }

            .skills-showcase .section-heading h2 {
              max-width: 690px;
            }

            .skills-showcase .section-heading h2 span {
              color: var(--purple);
              font-family: Georgia, serif;
              font-style: italic;
              font-weight: 400;
            }

            .skills-showcase .skills-summary {
              min-width: 150px;
              padding: 18px 20px;
              border: 1px solid rgba(118, 82, 214, .16);
              border-radius: 18px;
              background: rgba(255, 255, 255, .72);
              box-shadow: 0 16px 40px rgba(55, 36, 83, .08);
              backdrop-filter: blur(12px);
            }

            .skills-showcase .skills-summary strong,
            .skills-showcase .skills-summary span {
              display: block;
            }

            .skills-showcase .skills-summary strong {
              color: var(--purple);
              font: 800 34px/1 "Manrope", sans-serif;
              letter-spacing: -.06em;
            }

            .skills-showcase .skills-summary span {
              margin-top: 7px;
              color: var(--muted);
              font-size: 10px;
              font-weight: 700;
              letter-spacing: .08em;
              text-transform: uppercase;
            }

            .skills-showcase .skills-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
              grid-auto-flow: dense;
              gap: 16px;
            }

            .skills-showcase .skill-card {
              --card-accent: var(--purple);
              min-height: 245px;
              padding: 26px;
              border-color: color-mix(in srgb, var(--card-accent) 18%, white);
              border-radius: 22px;
              background:
                linear-gradient(145deg, rgba(255,255,255,.98), color-mix(in srgb, var(--card-accent) 6%, white));
              box-shadow: 0 14px 40px rgba(55, 36, 83, .07);
              transition: transform .35s cubic-bezier(.22, 1, .36, 1), box-shadow .35s ease, border-color .35s ease;
            }

            .skills-showcase .skill-card:nth-child(2),
            .skills-showcase .skill-card:nth-child(5) {
              --card-accent: var(--coral);
            }

            .skills-showcase .skill-card:nth-child(3),
            .skills-showcase .skill-card:nth-child(6) {
              --card-accent: var(--teal);
            }

            .skills-showcase .skill-card:nth-child(1),
            .skills-showcase .skill-card:nth-child(6) {
              grid-column: span 2;
            }

            .skills-showcase .skill-card::before {
              top: auto;
              right: 22px;
              bottom: 0;
              left: 22px;
              width: auto;
              height: 3px;
              border-radius: 3px 3px 0 0;
              background: linear-gradient(90deg, transparent, var(--card-accent), transparent);
              opacity: .7;
            }

            .skills-showcase .skill-card::after {
              content: attr(data-index);
              position: absolute;
              right: 18px;
              bottom: -18px;
              color: color-mix(in srgb, var(--card-accent) 9%, transparent);
              font: 800 104px/1 "Manrope", sans-serif;
              letter-spacing: -.1em;
              pointer-events: none;
            }

            .skills-showcase .skill-card:hover {
              transform: translateY(-8px);
              border-color: color-mix(in srgb, var(--card-accent) 34%, white);
              box-shadow: 0 24px 55px color-mix(in srgb, var(--card-accent) 14%, transparent);
            }

            .skills-showcase .skill-card-top {
              position: relative;
              z-index: 1;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .skills-showcase .skill-icon {
              color: var(--card-accent);
              background: color-mix(in srgb, var(--card-accent) 11%, white);
              box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--card-accent) 13%, transparent);
            }

            .skills-showcase .skill-card-index {
              color: color-mix(in srgb, var(--card-accent) 68%, var(--muted));
              font: 700 10px "Manrope", sans-serif;
              letter-spacing: .12em;
            }

            .skills-showcase .skill-card h3 {
              position: relative;
              z-index: 1;
              margin: 24px 0 18px;
              color: var(--ink);
              font-size: 18px;
              letter-spacing: -.025em;
            }

            .skills-showcase .skill-tags {
              position: relative;
              z-index: 1;
            }

            .skills-showcase .skill-tags span {
              border: 1px solid color-mix(in srgb, var(--card-accent) 12%, transparent);
              color: #625b6d;
              background: rgba(255, 255, 255, .72);
              backdrop-filter: blur(5px);
              transition: color .2s ease, border-color .2s ease, background .2s ease;
            }

            .skills-showcase .skill-card:hover .skill-tags span {
              border-color: color-mix(in srgb, var(--card-accent) 23%, transparent);
              color: color-mix(in srgb, var(--card-accent) 64%, var(--ink));
              background: rgba(255, 255, 255, .92);
            }

            @media (max-width: 980px) {
              .skills-showcase .skills-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }

            @media (max-width: 760px) {
              .skills-showcase .skills-heading {
                grid-template-columns: 1fr;
                gap: 24px;
                margin-bottom: 36px;
              }

              .skills-showcase .skills-summary {
                display: flex;
                min-width: 0;
                align-items: center;
                gap: 12px;
                width: fit-content;
              }

              .skills-showcase .skills-summary span {
                margin-top: 0;
              }

              .skills-showcase .skills-grid {
                grid-template-columns: 1fr;
              }

              .skills-showcase .skill-card:nth-child(1),
              .skills-showcase .skill-card:nth-child(6) {
                grid-column: span 1;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .skills-showcase .skill-card,
              .skills-showcase .skill-tags span {
                transition: none;
              }
            }
          `},void 0,!1,{fileName:o,lineNumber:726,columnNumber:11},this),r(`div`,{className:`section-heading skills-heading`,children:[r(`div`,{children:[r(`p`,{className:`section-kicker`,children:`Technical toolkit`},void 0,!1,{fileName:o,lineNumber:972,columnNumber:15},this),r(`h2`,{children:[`Tools I use to turn`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:975,columnNumber:17},this),r(`span`,{children:`ideas into reality.`},void 0,!1,{fileName:o,lineNumber:976,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:973,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:971,columnNumber:13},this),r(`div`,{className:`skills-summary`,"aria-label":`Six core skill groups`,children:[r(`strong`,{children:`06`},void 0,!1,{fileName:o,lineNumber:980,columnNumber:15},this),r(`span`,{children:`Core skill groups`},void 0,!1,{fileName:o,lineNumber:981,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:979,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:970,columnNumber:11},this),r(`div`,{className:`skills-grid`,children:c.map((e,t)=>r(`article`,{className:`skill-card`,"data-index":String(t+1).padStart(2,`0`),children:[r(`div`,{className:`skill-card-top`,children:[r(`div`,{className:`skill-icon`,children:r(s,{name:e.icon},void 0,!1,{fileName:o,lineNumber:993,columnNumber:21},this)},void 0,!1,{fileName:o,lineNumber:992,columnNumber:19},this),r(`span`,{className:`skill-card-index`,children:String(t+1).padStart(2,`0`)},void 0,!1,{fileName:o,lineNumber:995,columnNumber:19},this)]},void 0,!0,{fileName:o,lineNumber:991,columnNumber:17},this),r(`h3`,{children:e.title},void 0,!1,{fileName:o,lineNumber:999,columnNumber:17},this),r(`div`,{className:`skill-tags`,children:e.items.map(e=>r(`span`,{children:e},e,!1,{fileName:o,lineNumber:1002,columnNumber:21},this))},void 0,!1,{fileName:o,lineNumber:1e3,columnNumber:17},this)]},e.title,!0,{fileName:o,lineNumber:986,columnNumber:15},this))},void 0,!1,{fileName:o,lineNumber:984,columnNumber:11},this)]},void 0,!0,{fileName:o,lineNumber:725,columnNumber:9},this),r(`section`,{id:`projects`,className:`projects`,children:r(`div`,{className:`section-wrap`,children:[r(`div`,{className:`section-heading split-heading project-heading`,children:[r(`div`,{children:[r(`p`,{className:`section-kicker`,children:`Selected projects`},void 0,!1,{fileName:o,lineNumber:1014,columnNumber:17},this),r(`h2`,{children:[`Work that solves`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:1017,columnNumber:19},this),r(`span`,{children:`real problems.`},void 0,!1,{fileName:o,lineNumber:1018,columnNumber:19},this)]},void 0,!0,{fileName:o,lineNumber:1015,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:1013,columnNumber:15},this),r(`div`,{className:`filters`,"aria-label":`Filter projects`,children:[`All`,`WordPress`,`E-Commerce`,`Integrations`].map(e=>r(`button`,{className:h===e?`active`:``,onClick:()=>g(e),children:e},e,!1,{fileName:o,lineNumber:1024,columnNumber:21},this))},void 0,!1,{fileName:o,lineNumber:1021,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:1012,columnNumber:13},this),r(`div`,{className:`projects-grid`,children:v.map((e,t)=>r(`article`,{className:`project-card accent-${e.accent}`,children:[r(`div`,{className:`project-top`,children:[r(`span`,{className:`project-number`,children:String(t+1).padStart(2,`0`)},void 0,!1,{fileName:o,lineNumber:1042,columnNumber:21},this),r(`span`,{className:`project-label`,children:e.label},void 0,!1,{fileName:o,lineNumber:1045,columnNumber:21},this)]},void 0,!0,{fileName:o,lineNumber:1041,columnNumber:19},this),r(`div`,{className:`project-symbol`,"aria-hidden":`true`,children:e.title===`Benity Care`?r(`img`,{src:`/benity-care-project.jpg`,alt:``,className:`h-full w-full object-cover`},void 0,!1,{fileName:o,lineNumber:1049,columnNumber:23},this):e.title===`Zoho Helpdesk Sync`?r(`img`,{src:`/zoho-project-logo.png`,alt:``,className:`h-[140px] w-[360px] max-h-full max-w-full bg-white object-contain p-3`},void 0,!1,{fileName:o,lineNumber:1055,columnNumber:23},this):e.title===`Dynamic Event Platform`?r(`img`,{src:`/dynamic-event-project.jpg`,alt:``,className:`h-[140px] w-[360px] max-h-full max-w-full object-cover`},void 0,!1,{fileName:o,lineNumber:1061,columnNumber:23},this):e.title===`Signature Smile Studio`?r(`img`,{src:`/signature-smile-project.jpg`,alt:``,className:`h-[140px] w-[360px] max-h-full max-w-full object-cover`},void 0,!1,{fileName:o,lineNumber:1067,columnNumber:23},this):e.title===`Jodha Logistics`?r(`img`,{src:i,alt:``,className:`h-[140px] w-[360px] max-h-full max-w-full object-cover`},void 0,!1,{fileName:o,lineNumber:1073,columnNumber:23},this):e.title===`Scaling Up`?r(`img`,{src:a,alt:``,className:`h-[140px] w-[360px] max-h-full max-w-full object-cover`},void 0,!1,{fileName:o,lineNumber:1079,columnNumber:23},this):r(`span`,{children:e.title.slice(0,2).toUpperCase()},void 0,!1,{fileName:o,lineNumber:1085,columnNumber:23},this)},void 0,!1,{fileName:o,lineNumber:1047,columnNumber:19},this),r(`div`,{className:`project-content`,children:[r(`h3`,{children:e.title},void 0,!1,{fileName:o,lineNumber:1089,columnNumber:21},this),r(`p`,{children:e.description},void 0,!1,{fileName:o,lineNumber:1090,columnNumber:21},this),e.url?r(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,children:[`View live project `,r(s,{name:`external`,size:16},void 0,!1,{fileName:o,lineNumber:1093,columnNumber:43},this)]},void 0,!0,{fileName:o,lineNumber:1092,columnNumber:23},this):r(`span`,{className:`case-label`,children:`Integration project`},void 0,!1,{fileName:o,lineNumber:1096,columnNumber:23},this)]},void 0,!0,{fileName:o,lineNumber:1088,columnNumber:19},this)]},e.title,!0,{fileName:o,lineNumber:1037,columnNumber:17},this))},void 0,!1,{fileName:o,lineNumber:1035,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:1011,columnNumber:11},this)},void 0,!1,{fileName:o,lineNumber:1010,columnNumber:9},this),r(`section`,{id:`education`,className:`education section-wrap education-showcase`,children:[r(`style`,{children:`
            .education-showcase {
              position: relative;
              isolation: isolate;
              padding-top: 50px;
              padding-bottom: 50px;
              border: none;
            }

            .education-showcase::before {
              content: "";
              position: absolute;
              z-index: -2;
              inset: 0 -34px;
              border-radius: 34px;
              background:
                radial-gradient(circle at 8% 18%, rgba(118, 82, 214, .14), transparent 29%),
                radial-gradient(circle at 92% 82%, rgba(18, 140, 135, .1), transparent 27%),
                linear-gradient(135deg, rgba(247, 243, 255, .95), rgba(255, 255, 255, .92));
              box-shadow: inset 0 0 0 1px rgba(118, 82, 214, .08);
            }

            .education-showcase::after {
              content: "ED";
              position: absolute;
              z-index: -1;
              top: -38px;
              left: -6px;
              color: rgba(118, 82, 214, .045);
              font: 800 180px/1 "Manrope", sans-serif;
              letter-spacing: -.12em;
              pointer-events: none;
            }

            .education-showcase .education-intro {
              position: sticky;
              top: 120px;
            }

            .education-showcase .section-heading {
              margin-bottom: 28px;
            }

            .education-showcase .section-kicker {
              display: flex;
              align-items: center;
              gap: 10px;
            }

            .education-showcase .section-kicker::before {
              content: "";
              width: 30px;
              height: 2px;
              border-radius: 2px;
              background: linear-gradient(90deg, var(--coral), var(--purple));
            }

            .education-showcase .education-note {
              max-width: 330px;
              margin: 0;
              color: var(--muted);
              font-size: 14px;
              line-height: 1.75;
            }

            .education-showcase .education-count {
              display: inline-flex;
              margin-top: 26px;
              align-items: center;
              gap: 9px;
              color: var(--teal);
              font-size: 11px;
              font-weight: 800;
              letter-spacing: .08em;
              text-transform: uppercase;
            }

            .education-showcase .education-count::before {
              content: "03";
              display: grid;
              width: 38px;
              height: 38px;
              place-items: center;
              border-radius: 50%;
              color: var(--white);
              background: var(--teal);
              box-shadow: 0 8px 20px rgba(18, 140, 135, .22);
            }

            .education-showcase .education-list {
              position: relative;
              display: grid;
              gap: 12px;
            }

            .education-showcase .education-list::before {
              content: "";
              position: absolute;
              top: 38px;
              bottom: 38px;
              left: 26px;
              width: 1px;
              background: linear-gradient(var(--purple), var(--coral), var(--teal));
              opacity: .25;
            }

            .education-showcase .education-list article {
              position: relative;
              grid-template-columns: 54px 1fr auto;
              min-height: 118px;
              gap: 20px;
              padding: 24px 26px;
              overflow: hidden;
              border: 1px solid rgba(118, 82, 214, .1);
              border-radius: 20px;
              background: rgba(255, 255, 255, .82);
              box-shadow: 0 12px 34px rgba(55, 36, 83, .07);
              backdrop-filter: blur(10px);
              transition: transform .25s, box-shadow .25s, border-color .25s;
            }

            .education-showcase .education-list article::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              width: 5px;
              height: 100%;
              background: var(--purple);
              opacity: .72;
              transition: width .25s, opacity .25s;
            }

            .education-showcase .education-list article:nth-child(2)::after {
              background: var(--coral);
            }

            .education-showcase .education-list article:nth-child(3)::after {
              background: var(--teal);
            }

            .education-showcase .education-list article:hover {
              transform: translateX(-7px);
              border-color: rgba(118, 82, 214, .24);
              box-shadow: 0 20px 42px rgba(55, 36, 83, .12);
            }

            .education-showcase .education-list article:hover::after {
              width: 8px;
              opacity: 1;
            }

            .education-showcase .education-list article > span {
              z-index: 1;
              width: 40px;
              height: 40px;
              border: 0;
              border-radius: 50%;
              color: var(--white);
              background: var(--purple);
              box-shadow: 0 8px 18px rgba(118, 82, 214, .24);
              font-size: 10px;
            }

            .education-showcase .education-list article:nth-child(2) > span {
              background: var(--coral);
              box-shadow: 0 8px 18px rgba(233, 104, 98, .22);
            }

            .education-showcase .education-list article:nth-child(3) > span {
              background: var(--teal);
              box-shadow: 0 8px 18px rgba(18, 140, 135, .22);
            }

            .education-showcase .education-list h3 {
              margin-bottom: 8px;
              font-size: 18px;
              letter-spacing: -.025em;
            }

            .education-showcase .education-list time {
              padding: 8px 11px;
              border-radius: 999px;
              background: var(--purple-pale);
              white-space: nowrap;
            }

            @media (max-width: 980px) {
              .education-showcase .education-intro {
                position: static;
              }
            }

            @media (max-width: 760px) {
              .education-showcase::before {
                inset: 0 -16px;
                border-radius: 24px;
              }

              .education-showcase::after {
                font-size: 120px;
              }

              .education-showcase .education-list article {
                grid-template-columns: 46px 1fr;
                min-height: 0;
                padding: 21px 18px;
              }

              .education-showcase .education-list time {
                grid-column: 2;
                width: max-content;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .education-showcase .education-list article,
              .education-showcase .education-list article::after {
                transition: none;
              }
            }
          `},void 0,!1,{fileName:o,lineNumber:1109,columnNumber:11},this),r(`div`,{className:`education-intro`,children:[r(`div`,{className:`section-heading`,children:[r(`p`,{className:`section-kicker`,children:`Education`},void 0,!1,{fileName:o,lineNumber:1333,columnNumber:15},this),r(`h2`,{children:[`A foundation in`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:1336,columnNumber:17},this),r(`span`,{children:`computer science.`},void 0,!1,{fileName:o,lineNumber:1337,columnNumber:17},this)]},void 0,!0,{fileName:o,lineNumber:1334,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:1332,columnNumber:13},this),r(`p`,{className:`education-note`,children:`A continuous academic journey from secondary education through a B.Tech in Computer Science.`},void 0,!1,{fileName:o,lineNumber:1340,columnNumber:13},this),r(`span`,{className:`education-count`,children:`Academic milestones`},void 0,!1,{fileName:o,lineNumber:1344,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:1331,columnNumber:11},this),r(`div`,{className:`education-list`,children:d.map((e,t)=>r(`article`,{children:[r(`span`,{children:String(t+1).padStart(2,`0`)},void 0,!1,{fileName:o,lineNumber:1349,columnNumber:17},this),r(`div`,{children:[r(`h3`,{children:e.school},void 0,!1,{fileName:o,lineNumber:1351,columnNumber:19},this),r(`p`,{children:e.degree},void 0,!1,{fileName:o,lineNumber:1352,columnNumber:19},this)]},void 0,!0,{fileName:o,lineNumber:1350,columnNumber:17},this),r(`time`,{children:e.date},void 0,!1,{fileName:o,lineNumber:1354,columnNumber:17},this)]},e.school,!0,{fileName:o,lineNumber:1348,columnNumber:15},this))},void 0,!1,{fileName:o,lineNumber:1346,columnNumber:11},this)]},void 0,!0,{fileName:o,lineNumber:1105,columnNumber:9},this),r(`section`,{id:`contact`,className:`contact section-wrap`,style:{paddingTop:50,paddingBottom:50},children:r(`div`,{className:`contact-card`,children:[r(`div`,{className:`contact-glow`},void 0,!1,{fileName:o,lineNumber:1366,columnNumber:13},this),r(`p`,{className:`section-kicker light`,children:`Get in touch`},void 0,!1,{fileName:o,lineNumber:1367,columnNumber:13},this),r(`h2`,{children:[`Have a project in mind?`,r(`br`,{},void 0,!1,{fileName:o,lineNumber:1370,columnNumber:15},this),r(`span`,{children:`Let's build it well.`},void 0,!1,{fileName:o,lineNumber:1371,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:1368,columnNumber:13},this),r(`p`,{children:`For project discussions and professional opportunities, reach out by email or connect with me on LinkedIn.`},void 0,!1,{fileName:o,lineNumber:1373,columnNumber:13},this),r(`div`,{className:`contact-actions`,children:[r(`a`,{href:`mailto:Anushkaraut2105@gmail.com`,className:`button button-light`,children:[r(s,{name:`mail`},void 0,!1,{fileName:o,lineNumber:1382,columnNumber:17},this),` Anushkaraut2105@gmail.com`]},void 0,!0,{fileName:o,lineNumber:1378,columnNumber:15},this),r(`a`,{href:`https://linkedin.com/in/anushka-raut-87b657196`,target:`_blank`,rel:`noreferrer`,className:`button button-outline`,children:[r(s,{name:`linkedin`},void 0,!1,{fileName:o,lineNumber:1390,columnNumber:17},this),` LinkedIn`]},void 0,!0,{fileName:o,lineNumber:1384,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:1377,columnNumber:13},this),r(`div`,{className:`contact-details`,children:[r(`a`,{href:`tel:+918080231219`,children:[r(s,{name:`phone`,size:17},void 0,!1,{fileName:o,lineNumber:1395,columnNumber:17},this),` +91 8080231219`]},void 0,!0,{fileName:o,lineNumber:1394,columnNumber:15},this),r(`span`,{children:[r(s,{name:`map`,size:17},void 0,!1,{fileName:o,lineNumber:1398,columnNumber:17},this),` Pune, Maharashtra`]},void 0,!0,{fileName:o,lineNumber:1397,columnNumber:15},this)]},void 0,!0,{fileName:o,lineNumber:1393,columnNumber:13},this)]},void 0,!0,{fileName:o,lineNumber:1365,columnNumber:11},this)},void 0,!1,{fileName:o,lineNumber:1360,columnNumber:9},this)]},void 0,!0,{fileName:o,lineNumber:345,columnNumber:7},this),r(`footer`,{className:`site-footer`,style:{paddingBottom:0},children:[r(`a`,{href:`#home`,className:`brand`,children:[r(`span`,{children:`AR`},void 0,!1,{fileName:o,lineNumber:1407,columnNumber:11},this),r(`strong`,{children:`Anushka Raut`},void 0,!1,{fileName:o,lineNumber:1408,columnNumber:11},this)]},void 0,!0,{fileName:o,lineNumber:1406,columnNumber:9},this),r(`p`,{children:`Full Stack Developer · WordPress & PHP Specialist`},void 0,!1,{fileName:o,lineNumber:1410,columnNumber:9},this),r(`a`,{href:`#home`,children:`Back to top ↑`},void 0,!1,{fileName:o,lineNumber:1411,columnNumber:9},this)]},void 0,!0,{fileName:o,lineNumber:1405,columnNumber:7},this)]},void 0,!0,{fileName:o,lineNumber:306,columnNumber:5},this)}export{f as default};