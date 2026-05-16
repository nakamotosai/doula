import heroImage from '../assets/doula/hero-family-doula.png'
import providerMaya from '../assets/doula/provider-maya-chen.png'
import providerIsabella from '../assets/doula/provider-isabella-rivera.png'
import providerAisha from '../assets/doula/provider-aisha-thompson.png'
import providerLeah from '../assets/doula/provider-leah-kim.png'
import careBirth from '../assets/doula/care-birth-doula.png'
import carePostpartum from '../assets/doula/care-postpartum-doula.png'
import careNewborn from '../assets/doula/care-newborn-care.png'
import careNight from '../assets/doula/care-night-nanny.png'
import careCultural from '../assets/doula/care-cultural-care.png'
import ctaFamily from '../assets/doula/cta-family.png'

const sharedImages = {
  heroImage,
  providerMaya,
  providerIsabella,
  providerAisha,
  providerLeah,
  careBirth,
  carePostpartum,
  careNewborn,
  careNight,
  careCultural,
  ctaFamily,
}

export const localeOptions = [
  { code: 'en', label: 'EN', ariaLabel: 'Switch to English', htmlLang: 'en' },
  { code: 'zh', label: '繁中', ariaLabel: '切換至繁體中文', htmlLang: 'zh-Hant' },
  { code: 'ja', label: '日本語', ariaLabel: '日本語に切り替え', htmlLang: 'ja' },
] as const

export type Locale = (typeof localeOptions)[number]['code']

const providerImages = [
  sharedImages.providerMaya,
  sharedImages.providerIsabella,
  sharedImages.providerAisha,
  sharedImages.providerLeah,
]

export const homeByLocale = {
  en: {
    brand: {
      name: 'Doula',
      line: ['Compassionate support.', 'Thoughtful matching.', 'Stronger starts.'],
    },
    nav: {
      primary: ['Find Support', 'How It Works', 'For Providers', 'Resources', 'About Us'],
      login: 'Log in',
      cta: 'Get Started',
      languageLabel: 'Language',
      openMenu: 'Open menu',
    },
    hero: {
      image: sharedImages.heroImage,
      headline: 'Trusted support for birth, recovery, and the first nights home.',
      copy:
        'Tell us what your family needs. We will help you compare vetted doulas and newborn care providers.',
      primaryCta: 'Start Matching',
      secondaryCta: 'View Providers',
    },
    matchPanel: {
      fields: [
        { label: 'I need', value: 'Postpartum + nights' },
        { label: 'Timing', value: 'Within 2 weeks' },
        { label: 'Location', value: 'New York, NY' },
        { label: 'Languages', value: 'English + Mandarin' },
        { label: 'Care schedule', value: '3 nights / week' },
      ],
      cta: 'Find My Match',
      note: 'Non-medical support. Credentials, references, and scope are reviewed before introductions.',
    },
    providerLabels: {
      area: 'Area',
      languages: 'Languages',
      response: 'Response',
      rate: 'Rate',
      nextOpening: 'Next opening',
      save: 'Save',
      requestIntro: 'Request Intro',
    },
    providers: {
      eyebrow: 'Curated Providers',
      title: 'Caregivers families love',
      link: 'View all providers',
      items: [
        {
          name: 'Maya Chen',
          role: 'Postpartum Doula',
          tags: ['Birth + Feeding Support', 'Night Care'],
          languages: 'English / Mandarin',
          location: 'Brooklyn, NY',
          rating: '4.9',
          reviews: '82 reviews',
          rate: '$48/hr',
          availability: 'Available May',
          response: 'Replies within 2 hours',
          credentials: ['DONA trained', 'Infant CPR', 'Lactation informed'],
          quote: 'Gentle, practical, and calm during the hardest first week.',
          image: providerImages[0],
        },
        {
          name: 'Isabella Rivera',
          role: 'Birth Doula',
          tags: ['Labor Support', 'C-Section Support'],
          languages: 'English / Spanish',
          location: 'Los Angeles, CA',
          rating: '5.0',
          reviews: '61 reviews',
          rate: '$1,650 package',
          availability: 'Available Jun',
          response: 'Replies same day',
          credentials: ['DONA trained', 'VBAC support', 'Bilingual care'],
          quote: 'She helped us feel prepared, respected, and steady.',
          image: providerImages[1],
        },
        {
          name: 'Aisha Thompson',
          role: 'Newborn Care Specialist',
          tags: ['Night Care', 'Newborn Care'],
          languages: 'English',
          location: 'Chicago, IL',
          rating: '4.8',
          reviews: '74 reviews',
          rate: '$52/hr',
          availability: 'Available May',
          response: 'Replies within 4 hours',
          credentials: ['NCS certified', 'Infant CPR', 'Twin experience'],
          quote: 'Our nights became predictable without feeling rigid.',
          image: providerImages[2],
        },
        {
          name: 'Leah Kim',
          role: 'Night Nanny',
          tags: ['Overnight Care', 'Infant Sleep'],
          languages: 'English / Korean',
          location: 'Seattle, WA',
          rating: '4.9',
          reviews: '57 reviews',
          rate: '$46/hr',
          availability: 'Available May',
          response: 'Replies within 3 hours',
          credentials: ['Background checked', 'Infant CPR', 'Sleep foundations'],
          quote: 'Warm, reliable, and wonderful with our newborn.',
          image: providerImages[3],
        },
      ],
    },
    trust: {
      eyebrow: 'Why families choose Doula',
      title: 'Trusted by families. Built on care.',
      stats: [
        { value: '48 hr', label: 'typical intro window' },
        { value: '4.9', label: 'average family rating' },
        { value: '12+', label: 'languages represented' },
      ],
      items: [
        {
          title: 'Carefully vetted',
          copy: 'Credentials, references, checks, and care scope are reviewed first.',
        },
        {
          title: 'Family-first match',
          copy: 'Schedule, location, language, and care style shape each shortlist.',
        },
        {
          title: 'Concierge support',
          copy: 'A coordinator helps you compare, interview, and adjust your plan.',
        },
        {
          title: 'Private by default',
          copy: 'Family details stay private until you choose to connect.',
        },
      ],
    },
    care: {
      title: 'Find the right kind of support',
      link: 'Learn more',
      items: [
        {
          title: 'Birth Doula',
          copy: 'Labor, birth, and immediate postpartum support.',
          detail: 'Planning, advocacy, comfort measures',
          image: sharedImages.careBirth,
        },
        {
          title: 'Postpartum Doula',
          copy: 'Emotional and physical support during recovery.',
          detail: 'Recovery, feeding, routines',
          image: sharedImages.carePostpartum,
        },
        {
          title: 'Newborn Care Specialist',
          copy: 'Expert newborn care and developmental support.',
          detail: 'Newborn routines, twins, gentle guidance',
          image: sharedImages.careNewborn,
        },
        {
          title: 'Night Nanny',
          copy: 'Overnight care so your family can rest.',
          detail: 'Night feeds, settling, sleep support',
          image: sharedImages.careNight,
        },
        {
          title: 'Cultural Postpartum Care',
          copy: 'Culturally fluent care that honors your traditions.',
          detail: 'Language, foodways, family rituals',
          image: sharedImages.careCultural,
        },
      ],
    },
    howItWorks: {
      title: 'How matching works',
      steps: [
        {
          number: '01',
          title: 'Tell us your needs',
          copy: 'Share needs, timing, and preferences.',
        },
        {
          number: '02',
          title: 'Find matches',
          copy: 'We match you with vetted providers.',
        },
        {
          number: '03',
          title: 'Compare & connect',
          copy: 'Review, message, and interview.',
        },
        {
          number: '04',
          title: 'Stay supported',
          copy: 'Concierge support stays with you.',
        },
      ],
    },
    paths: {
      title: 'Choose your path',
      divider: 'or',
      family: {
        title: 'For Families',
        copy: 'Build a shortlist of vetted providers matched to your timing, care style, language, and budget.',
        cta: 'Start Matching',
        image: sharedImages.ctaFamily,
      },
      provider: {
        title: 'For Providers',
        copy: 'Meet families who value thoughtful care, clear scope, and professional postpartum support.',
        cta: 'Apply to Join',
        image: providerImages[1],
      },
    },
    faq: {
      title: 'Common questions',
      link: 'View all FAQs',
      items: [
        {
          question: 'What is Doula?',
          answer:
            'Doula is a matching platform for non-medical birth, postpartum, overnight, and newborn care support.',
        },
        {
          question: 'How does matching work?',
          answer:
            'Share your timing, location, budget, languages, and care goals. We return a shortlist and help you compare providers.',
        },
        {
          question: 'How are providers vetted?',
          answer:
            'We review identity, references, credentials, care scope, and relevant background checks before introductions.',
        },
        {
          question: 'What does it cost?',
          answer:
            'Provider rates vary by role, city, and schedule. Each profile shows rate guidance before you request an introduction.',
        },
      ],
    },
    footer: {
      socialLabels: ['Community stories', 'Provider network', 'Newsletter'],
      columns: [
        {
          title: 'For Families',
          links: ['Find Support', 'How It Works', 'Resources', 'Concierge Support'],
        },
        {
          title: 'For Providers',
          links: ['Join Our Community', 'Provider Resources', 'Events', 'Log in'],
        },
        {
          title: 'Company',
          links: ['About Us', 'Careers', 'Press', 'Contact'],
        },
      ],
      newsletter: {
        title: 'Stay in touch',
        copy: 'Tips, resources, and updates for your journey.',
        placeholder: 'Email address',
        cta: 'Subscribe',
      },
      copyright: '© 2026 Doula, Inc. All rights reserved.',
      legal: ['Privacy Policy', 'Terms of Service'],
    },
  },
  zh: {
    brand: {
      name: 'Doula',
      line: ['溫柔陪伴。', '精準配對。', '安心起步。'],
    },
    nav: {
      primary: ['尋找照護', '配對流程', '給服務者', '資源', '關於我們'],
      login: '登入',
      cta: '開始配對',
      languageLabel: '語言',
      openMenu: '開啟選單',
    },
    hero: {
      image: sharedImages.heroImage,
      headline: '為分娩、產後恢復與返家初夜找到可信照護。',
      copy: '告訴我們家庭需求。我們會協助你比較已審核的 doula 與新生兒照護服務者。',
      primaryCta: '開始配對',
      secondaryCta: '查看服務者',
    },
    matchPanel: {
      fields: [
        { label: '我需要', value: '產後＋夜間' },
        { label: '時間', value: '兩週內' },
        { label: '地點', value: '紐約, NY' },
        { label: '語言', value: '英語＋中文' },
        { label: '照護時段', value: '每週 3 晚' },
      ],
      cta: '尋找配對',
      note: '非醫療照護。介紹前會審核資歷、推薦人與服務範圍。',
    },
    providerLabels: {
      area: '地區',
      languages: '語言',
      response: '回覆',
      rate: '費用',
      nextOpening: '下一檔期',
      save: '收藏',
      requestIntro: '洽詢介紹',
    },
    providers: {
      eyebrow: '精選服務者',
      title: '深受家庭信任的照護者',
      link: '查看全部服務者',
      items: [
        {
          name: 'Maya Chen',
          role: '產後 Doula',
          tags: ['分娩＋哺餵支持', '夜間照護'],
          languages: '英語 / 中文',
          location: '布魯克林, NY',
          rating: '4.9',
          reviews: '82 則評價',
          rate: '$48/小時',
          availability: '5 月可接案',
          response: '2 小時內回覆',
          credentials: ['DONA 訓練', '嬰兒 CPR', '哺乳支持'],
          quote: '溫柔、實用，也讓最艱難的第一週穩定下來。',
          image: providerImages[0],
        },
        {
          name: 'Isabella Rivera',
          role: '分娩 Doula',
          tags: ['產程支持', '剖腹產支持'],
          languages: '英語 / 西語',
          location: '洛杉磯, CA',
          rating: '5.0',
          reviews: '61 則評價',
          rate: '$1,650 套餐',
          availability: '6 月可接案',
          response: '當日回覆',
          credentials: ['DONA 訓練', 'VBAC 支持', '雙語照護'],
          quote: '她讓我們感到準備充分、被尊重，也更安心。',
          image: providerImages[1],
        },
        {
          name: 'Aisha Thompson',
          role: '新生兒照護師',
          tags: ['夜間照護', '新生兒照護'],
          languages: '英語',
          location: '芝加哥, IL',
          rating: '4.8',
          reviews: '74 則評價',
          rate: '$52/小時',
          availability: '5 月可接案',
          response: '4 小時內回覆',
          credentials: ['NCS 認證', '嬰兒 CPR', '雙胞胎經驗'],
          quote: '夜晚變得有節奏，但不會讓人覺得僵硬。',
          image: providerImages[2],
        },
        {
          name: 'Leah Kim',
          role: '夜間保母',
          tags: ['過夜照護', '嬰兒睡眠'],
          languages: '英語 / 韓語',
          location: '西雅圖, WA',
          rating: '4.9',
          reviews: '57 則評價',
          rate: '$46/小時',
          availability: '5 月可接案',
          response: '3 小時內回覆',
          credentials: ['背景審核', '嬰兒 CPR', '睡眠基礎'],
          quote: '溫暖可靠，和我們的新生兒相處得非常好。',
          image: providerImages[3],
        },
      ],
    },
    trust: {
      eyebrow: '家庭為何選擇 Doula',
      title: '以照護為本，值得家庭信賴。',
      stats: [
        { value: '48 小時', label: '常見介紹時間' },
        { value: '4.9', label: '家庭平均評分' },
        { value: '12+', label: '支援語言' },
      ],
      items: [
        {
          title: '細心審核',
          copy: '介紹前先檢視資歷、推薦人與服務範圍。',
        },
        {
          title: '以家庭為先',
          copy: '時間、地點、語言與照護風格會形塑名單。',
        },
        {
          title: '真人協助',
          copy: '專人協助比較、面談與調整計畫。',
        },
        {
          title: '重視隱私',
          copy: '你選擇連結前，家庭資訊保持私密。',
        },
      ],
    },
    care: {
      title: '找到合適的照護類型',
      link: '了解更多',
      items: [
        {
          title: '分娩 Doula',
          copy: '產程、分娩與產後初期支持。',
          detail: '計畫、倡議、舒緩技巧',
          image: sharedImages.careBirth,
        },
        {
          title: '產後 Doula',
          copy: '恢復期間的情緒與生活支持。',
          detail: '恢復、哺餵、日常節奏',
          image: sharedImages.carePostpartum,
        },
        {
          title: '新生兒照護師',
          copy: '專業新生兒照護與發展支持。',
          detail: '新生兒作息、雙胞胎、溫和指引',
          image: sharedImages.careNewborn,
        },
        {
          title: '夜間保母',
          copy: '夜間照護，讓家人可以休息。',
          detail: '夜奶、安撫、睡眠支持',
          image: sharedImages.careNight,
        },
        {
          title: '文化產後照護',
          copy: '尊重語言、飲食與家庭傳統。',
          detail: '語言、飲食、家庭儀式',
          image: sharedImages.careCultural,
        },
      ],
    },
    howItWorks: {
      title: '配對如何進行',
      steps: [
        { number: '01', title: '告訴我們需求', copy: '分享需求、時間與偏好。' },
        { number: '02', title: '我們尋找配對', copy: '篩選已審核服務者。' },
        { number: '03', title: '比較並聯繫', copy: '查看、溝通並面談。' },
        { number: '04', title: '持續支持', copy: '照護全程有人陪伴。' },
      ],
    },
    paths: {
      title: '選擇你的路徑',
      divider: '或',
      family: {
        title: '給家庭',
        copy: '依時間、照護風格、語言與預算，建立已審核服務者候選名單。',
        cta: '開始配對',
        image: sharedImages.ctaFamily,
      },
      provider: {
        title: '給服務者',
        copy: '認識重視細緻照護、清楚範圍與專業產後支持的家庭。',
        cta: '申請加入',
        image: providerImages[1],
      },
    },
    faq: {
      title: '常見問題',
      link: '查看全部 FAQ',
      items: [
        {
          question: 'Doula 是什麼？',
          answer: 'Doula 是協助家庭尋找非醫療分娩、產後、夜間與新生兒照護支持的配對平台。',
        },
        {
          question: '配對如何進行？',
          answer: '分享時間、地點、預算、語言與照護目標後，我們會整理候選名單並協助比較。',
        },
        {
          question: '服務者如何審核？',
          answer: '介紹前會檢視身份、推薦人、資歷、照護範圍與相關背景審核。',
        },
        {
          question: '費用如何計算？',
          answer: '費用會依角色、城市與時段不同。每張服務者卡片都會先顯示費用參考。',
        },
      ],
    },
    footer: {
      socialLabels: ['家庭故事', '服務者網絡', '電子報'],
      columns: [
        { title: '給家庭', links: ['尋找照護', '配對流程', '資源', '專人協助'] },
        { title: '給服務者', links: ['加入社群', '服務者資源', '活動', '登入'] },
        { title: '公司', links: ['關於我們', '職缺', '媒體', '聯絡'] },
      ],
      newsletter: {
        title: '保持聯繫',
        copy: '為你的照護旅程提供實用資源與更新。',
        placeholder: '電子郵件',
        cta: '訂閱',
      },
      copyright: '© 2026 Doula, Inc. 保留所有權利。',
      legal: ['隱私權政策', '服務條款'],
    },
  },
  ja: {
    brand: {
      name: 'Doula',
      line: ['寄り添うケア。', '丁寧なマッチング。', '安心のはじまり。'],
    },
    nav: {
      primary: ['サポートを探す', '流れ', '提供者向け', 'リソース', '私たちについて'],
      login: 'ログイン',
      cta: 'はじめる',
      languageLabel: '言語',
      openMenu: 'メニューを開く',
    },
    hero: {
      image: sharedImages.heroImage,
      headline: '出産、回復、帰宅後の夜に信頼できる支えを。',
      copy: 'ご家族の希望を教えてください。審査済みの doula と新生児ケア提供者を比較できます。',
      primaryCta: 'マッチ開始',
      secondaryCta: '提供者を見る',
    },
    matchPanel: {
      fields: [
        { label: '必要なケア', value: '産後＋夜間' },
        { label: '時期', value: '2週間以内' },
        { label: '場所', value: 'New York, NY' },
        { label: '言語', value: '英語＋中国語' },
        { label: '予定', value: '週3夜' },
      ],
      cta: 'マッチを探す',
      note: '医療行為ではありません。紹介前に資格、推薦、対応範囲を確認します。',
    },
    providerLabels: {
      area: '地域',
      languages: '言語',
      response: '返信',
      rate: '料金',
      nextOpening: '次の空き',
      save: '保存',
      requestIntro: '紹介を依頼',
    },
    providers: {
      eyebrow: '厳選された提供者',
      title: '家族に選ばれるケア提供者',
      link: 'すべて見る',
      items: [
        {
          name: 'Maya Chen',
          role: '産後 Doula',
          tags: ['出産＋授乳サポート', '夜間ケア'],
          languages: '英語 / 中国語',
          location: 'Brooklyn, NY',
          rating: '4.9',
          reviews: '82件の評価',
          rate: '$48/時',
          availability: '5月空きあり',
          response: '2時間以内に返信',
          credentials: ['DONA 研修', '乳児 CPR', '授乳理解'],
          quote: '最初の大変な一週間を穏やかに支えてくれました。',
          image: providerImages[0],
        },
        {
          name: 'Isabella Rivera',
          role: '出産 Doula',
          tags: ['陣痛サポート', '帝王切開サポート'],
          languages: '英語 / スペイン語',
          location: 'Los Angeles, CA',
          rating: '5.0',
          reviews: '61件の評価',
          rate: '$1,650 パッケージ',
          availability: '6月空きあり',
          response: '当日返信',
          credentials: ['DONA 研修', 'VBAC サポート', 'バイリンガル'],
          quote: '準備が整い、尊重され、安心できました。',
          image: providerImages[1],
        },
        {
          name: 'Aisha Thompson',
          role: '新生児ケア専門家',
          tags: ['夜間ケア', '新生児ケア'],
          languages: '英語',
          location: 'Chicago, IL',
          rating: '4.8',
          reviews: '74件の評価',
          rate: '$52/時',
          availability: '5月空きあり',
          response: '4時間以内に返信',
          credentials: ['NCS 認定', '乳児 CPR', '双子経験'],
          quote: '夜の流れが整い、無理なく過ごせました。',
          image: providerImages[2],
        },
        {
          name: 'Leah Kim',
          role: '夜間ナニー',
          tags: ['泊まりケア', '乳児睡眠'],
          languages: '英語 / 韓国語',
          location: 'Seattle, WA',
          rating: '4.9',
          reviews: '57件の評価',
          rate: '$46/時',
          availability: '5月空きあり',
          response: '3時間以内に返信',
          credentials: ['身元確認済み', '乳児 CPR', '睡眠基礎'],
          quote: '温かく信頼でき、新生児にもよく寄り添ってくれました。',
          image: providerImages[3],
        },
      ],
    },
    trust: {
      eyebrow: 'Doula が選ばれる理由',
      title: '家族に信頼される、ケア中心の仕組み。',
      stats: [
        { value: '48時間', label: '標準的な紹介目安' },
        { value: '4.9', label: '家族の平均評価' },
        { value: '12+', label: '対応言語' },
      ],
      items: [
        {
          title: '丁寧な審査',
          copy: '紹介前に資格、推薦、対応範囲を確認します。',
        },
        {
          title: '家族優先のマッチ',
          copy: '予定、地域、言語、ケアの相性を反映します。',
        },
        {
          title: '継続的な伴走',
          copy: '比較、面談、計画調整まで支えます。',
        },
        {
          title: 'プライバシー保護',
          copy: 'つながるまで家族情報は守られます。',
        },
      ],
    },
    care: {
      title: '必要なサポートを見つける',
      link: '詳しく見る',
      items: [
        {
          title: '出産 Doula',
          copy: '陣痛、出産、産後すぐのサポート。',
          detail: '計画、伴走、痛みの緩和',
          image: sharedImages.careBirth,
        },
        {
          title: '産後 Doula',
          copy: '回復期の心身と暮らしを支えます。',
          detail: '回復、授乳、生活リズム',
          image: sharedImages.carePostpartum,
        },
        {
          title: '新生児ケア専門家',
          copy: '新生児ケアと発達に寄り添う支援。',
          detail: '新生児の流れ、双子、穏やかな案内',
          image: sharedImages.careNewborn,
        },
        {
          title: '夜間ナニー',
          copy: '夜間ケアで家族の休息を支えます。',
          detail: '夜間授乳、寝かしつけ、睡眠支援',
          image: sharedImages.careNight,
        },
        {
          title: '文化に寄り添う産後ケア',
          copy: '言語、食文化、家庭の慣習を尊重します。',
          detail: '言語、食事、家族の習慣',
          image: sharedImages.careCultural,
        },
      ],
    },
    howItWorks: {
      title: 'マッチングの流れ',
      steps: [
        { number: '01', title: '希望を伝える', copy: '希望、時期、条件を共有。' },
        { number: '02', title: '候補を探す', copy: '審査済みの候補を選定。' },
        { number: '03', title: '比較してつながる', copy: '確認、連絡、面談へ。' },
        { number: '04', title: '継続して支える', copy: 'ケア中も伴走します。' },
      ],
    },
    paths: {
      title: '目的を選ぶ',
      divider: 'または',
      family: {
        title: 'ご家族向け',
        copy: '時期、ケアの相性、言語、予算に合う審査済み提供者を選べます。',
        cta: 'マッチ開始',
        image: sharedImages.ctaFamily,
      },
      provider: {
        title: '提供者向け',
        copy: '丁寧なケア、明確な範囲、専門的な産後支援を大切にする家族と出会えます。',
        cta: '応募する',
        image: providerImages[1],
      },
    },
    faq: {
      title: 'よくある質問',
      link: 'FAQ を見る',
      items: [
        {
          question: 'Doula とは？',
          answer: 'Doula は出産、産後、夜間、新生児ケアの非医療サポートを探せるマッチング平台です。',
        },
        {
          question: 'マッチングの流れは？',
          answer: '時期、地域、予算、言語、希望するケアを共有すると、候補を提案して比較を支援します。',
        },
        {
          question: '提供者の審査方法は？',
          answer: '紹介前に本人確認、推薦、資格、対応範囲、関連する身元確認を確認します。',
        },
        {
          question: '料金は？',
          answer: '料金は役割、都市、スケジュールで変わります。各プロフィールで目安を確認できます。',
        },
      ],
    },
    footer: {
      socialLabels: ['家族のストーリー', '提供者ネットワーク', 'ニュースレター'],
      columns: [
        { title: 'ご家族向け', links: ['サポートを探す', '流れ', 'リソース', '相談サポート'] },
        { title: '提供者向け', links: ['コミュニティ参加', '提供者リソース', 'イベント', 'ログイン'] },
        { title: '会社', links: ['私たちについて', '採用', 'プレス', '連絡'] },
      ],
      newsletter: {
        title: '最新情報を受け取る',
        copy: 'ケアの旅に役立つ情報と更新をお届けします。',
        placeholder: 'メールアドレス',
        cta: '登録',
      },
      copyright: '© 2026 Doula, Inc. All rights reserved.',
      legal: ['プライバシー', '利用規約'],
    },
  },
} as const

export type HomeContent = (typeof homeByLocale)[Locale]
export const home = homeByLocale.en
