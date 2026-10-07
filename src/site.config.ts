// サイト全体の設定。文言やリンクを変えたいときはまずここを見てください。
export const SITE = {
  name: '羽島サーキュラーエコノミープロジェクト',
  nameEn: 'HASHIMA CIRCULAR ECONOMY PROJECT',
  shortName: '羽島サーキュラー',
  description:
    '岐阜県羽島市・桑原川を舞台に、長谷虎紡績・イノカ・aiESGが連携して、自然と地域のものづくりがともに栄える未来を考えるプロジェクトです。',
  // お問い合わせフォームの送信先（Formspree などのエンドポイント）。
  // 空のままだとフォームは「準備中」表示になり、送信できません。
  // 例: 'https://formspree.io/f/xxxxxxxx'
  formEndpoint: '',
  // 運営者表記（プライバシーポリシー・フッターで使用）
  operator: '羽島サーキュラーエコノミープロジェクト事務局',
};

export const NAV = [
  { href: 'about/', label: 'プロジェクト' },
  { href: 'news/', label: '活動報告' },
  { href: 'events/', label: 'イベント' },
  { href: 'species/', label: '生きもの図鑑' },
  { href: 'partners/', label: '運営・連携' },
];

export const PARTNERS = [
  {
    id: 'hasetora',
    name: '長谷虎紡績株式会社',
    short: '長谷虎紡績',
    role: '地域のものづくりと、活動の現場',
    field: '産業の現場',
    url: 'https://hasetora.co.jp/',
    body: [
      '1887年（明治20年）、羽島市江吉良町で製糸工場として創業。紡績とカーペットを軸に、特殊糸や高機能素材をつくり続けてきました。「素材で世界を変える」を掲げ、「自分によし、相手によし、第三者によし」の三方よしを大切にしています。',
      'このプロジェクトでは、羽島市の平方工場とその周辺流域を活動の現場として開き、地域の皆さんとの対話を担います。',
    ],
  },
  {
    id: 'innoqua',
    name: '株式会社イノカ',
    short: 'イノカ',
    role: '自然を知る調査と、地域での学び',
    field: '生物科学',
    url: 'https://innoqua.jp/',
    body: [
      '水域の生態系を水槽の中に再現する「環境移送技術®」を持つ、東京大学発のスタートアップです。',
      '環境DNA調査などを通じて流域の生きものを可視化し、その知見を教育活動で地域の皆さんと共有します。',
    ],
  },
  {
    id: 'aiesg',
    name: '株式会社aiESG',
    short: 'aiESG',
    role: '自然の価値を、社会の視点から評価する',
    field: '社会科学',
    url: 'https://aiesg.co.jp/',
    body: [
      '九州大学の研究を基盤に、AIを用いてESGや自然資本の価値を評価するスタートアップです。',
      '地域の方々が自然や川に寄せる思い、科学的な情報が安心感にどうつながるかを調べ、数値として見えるようにします。',
    ],
  },
];
