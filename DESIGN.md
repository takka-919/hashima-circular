# DESIGN.md — 羽島サーキュラーエコノミープロジェクト

> このファイルはAIエージェント（Claude Code 等）がこのサイトのUIを一貫して生成・修正するためのデザイン仕様書です。
> 形式は [awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) のテンプレートに従います。
> 値は **株式会社イノカのコーポレートサイト（corp.innoqua.jp）** と **瀬戸内渚フォーラム「セトナギ」（setouchi.nagisa.innoqua.jp）** の computed style（2026年10月取得）を基準にしています。
> 実装上のトークンは `src/styles/global.css` の `:root` にあり、このファイルと値を一致させること。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: イノカの「生き物が好きな研究者」の空気感をそのまま受け継ぐ。白い面に、墨に近いグレーの文字と、水を思わせる青を少しだけ置く。装飾ではなく写真と余白で見せる
- **密度**: ゆったりとしたメディア型。1画面に要素を詰めない
- **キーワード**: 澄んだ / 明るい / 研究所の清潔さ / 親しみ / 誠実
- **受け継ぐもの**
  - イノカ本体から：Zen Kaku Gothic New、`#2B2B2B` の文字色、`#009BFF` の青、字間 0.1em、片側だけ丸い（`0 20px 20px 0`）アウトラインボタン、`5px` 角丸の塗りタグ、`10px` 角丸のカード写真、楕円に切り抜いた大きな写真
  - セトナギから：ターコイズ `#43BCC4`、Futura 系の巨大な英字見出し＋縦書きの和文ラベル、`100px` のピル型ナビ、斜めストライプのカプセル
- **長谷虎紡績との関係**: 共同プロジェクトであることはロゴ並びと文章で示し、配色・書体はイノカ系に統一する（混ぜない）

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Innoqua Blue** (`#009BFF`): 英字アイキャッチ（What we do 等）、タグの塗り、アウトラインボタンの枠と文字、アクティブ状態
- **Blue Text** (`#0077C8`): 本文中のリンク。`#009BFF` は白地で 3.0:1 しかないため、14px 未満・本文中では使わない
- **Setonagi Teal** (`#43BCC4`): 巨大な英字見出し、ストライプのカプセル、ピル型ナビの枠と文字。白地で 2.2:1 なので **40px 以上の表示か装飾にだけ**使う
- **Teal Text** (`#1F8C94`): ターコイズ系で小さな文字を置く必要があるとき

### Neutral（ニュートラル）

- **Text Primary** (`#2B2B2B`): 見出し・本文。純黒 `#000` は使わない
- **Text Secondary** (`#5F6368`): 日付、補足、キャプション
- **Border** (`#D7E3E6`): 区切り線、入力欄の枠
- **Background** (`#FFFFFF`): ページ背景
- **Surface Aqua** (`#EDFDFF`): セクションの面色、写真のプレースホルダー。イノカのページ背景色
- **Surface White** (`#FDFFFF`): セトナギのピル・ラベル背景

### Semantic（図鑑の区分にだけ使う）

- **Native** (`#3D8B5A`): 在来
- **Domestic Alien** (`#B7791F`): 国内外来
- **Foreign Alien** (`#C2453A`): 国外外来

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Zen Kaku Gothic New（400 / 500 / 700）。`@fontsource/zen-kaku-gothic-new` でセルフホスト（外部CDNに依存しない）
- **明朝体**: 使わない

### 3.2 欧文フォント

- **ディスプレイ**: Jost（400 / 500、`@fontsource/jost` の latin サブセット）。セトナギの Futura の代替
- **本文中の欧文**: Zen Kaku Gothic New 内の欧文グリフをそのまま使う

### 3.3 font-family 指定

```css
/* 本文・見出し */
font-family: "Zen Kaku Gothic New", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;

/* 英字ディスプレイ（WHO WE ARE / NEWS 等の大見出し） */
font-family: "Jost", Futura, "Zen Kaku Gothic New", sans-serif;
```

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | Jost | clamp(56px, 9vw, 120px) | 500 | 1.1 | 0.02em | セトナギ由来。色は Teal |
| Hero Copy | Zen Kaku | clamp(22px, 3vw, 34px) | 700 | 1.9 | 0.1em | 黒い帯に白文字（イノカ由来） |
| Heading 1 | Zen Kaku | clamp(22px, 2.6vw, 27px) | 700 | 1.5 | 0.1em | セクション見出し |
| Eyebrow (EN) | Zen Kaku | 14px | 700 | 1.4 | 0.1em | Blue。見出しの直上 |
| Heading 3 | Zen Kaku | 16–18px | 700 | 1.7 | 0.1em | カード見出し |
| Body | Zen Kaku | 15px | 500 | 2.0 | 0.1em | |
| Caption | Zen Kaku | 12px | 500 | 1.8 | 0.1em | 日付、タグ |
| Vertical Label | Zen Kaku | 16–20px | 500 | 1.5 | 0.1em | `writing-mode: vertical-rl`、Teal Text |

### 3.5 行間・字間

- **本文の行間**: 2.0
- **見出しの行間**: 1.5
- **字間**: 本文・見出しとも **0.1em**（イノカの全要素が 0.1em）。英字ディスプレイのみ 0.02em
- イノカ本体と同じく、本文は 15px 前後と小さめ・字間広め。16px 以上に大きくしない

### 3.6 禁則処理・改行ルール

```css
line-break: strict;
overflow-wrap: anywhere;
word-break: normal;
```

- 見出しは `<br>` で意味の切れ目で改行する。`word-break: keep-all` は使わない（日本語で効かない環境がある）

### 3.7 OpenType 機能

- `palt` は**使わない**。0.1em の字間設計と両立しない（イノカ本体も未使用）

### 3.8 縦書き

```css
writing-mode: vertical-rl;
text-orientation: upright;
```

- 英字ディスプレイ見出しの左に添える和文ラベル（例：縦に「活動について」＋横に「ABOUT」）にだけ使う

---

## 4. Component Stylings

### Buttons

**Outline（基本）** — イノカの「Projects & Services」ボタン
- Background: `#FFFFFF`
- Text / Border: `#009BFF`、1px solid
- Height: 40px、Padding: 0 40px
- Border Radius: `0 20px 20px 0`（**左は角、右だけ丸い**。これがイノカの形）
- Font: 12–13px / 700 / 0.1em
- Hover: 背景 `#009BFF`、文字 `#FFFFFF`

**Outline on dark/photo**
- Text / Border: `#FFFFFF`、背景 transparent。形は同じ

**Pill Nav** — セトナギのナビ
- Background: `rgba(253,255,255,.9)`、Text / Border: `#43BCC4`（小さい文字なので Text は `#1F8C94`）
- Padding: 10px 22px、Border Radius: 100px、Font: 13px / 500

### Tags

- Background: `#009BFF`、Text: `#FFFFFF`
- Padding: 0 10px、Height: 20px、Border Radius: 5px、Font: 12px / 500 / 0.1em

### Section Label（セトナギの「課題背景」）

- Border: 1px solid `#43BCC4`、Background: `#FDFFFF`、Text: `#1F8C94`
- Padding: 2px 30px、Border Radius: 64px、Font: 20–24px / 500

### Inputs

- Background: `#FFFFFF`、Border: 1px solid `#D7E3E6`、Focus: `#009BFF`
- Border Radius: 5px、Padding: 14px 16px、Font: 16px（iOS のズーム防止）

### Cards（活動報告・図鑑）

- 枠線・影なし。写真＋テキストだけ
- 写真: Border Radius 10px、比率 324:175（約 1.85:1）
- 写真の下に タグ → 日付 → タイトル（14px / 700）→ 要約

### Feature Photo（大きな写真）

- Border Radius: `28.9% / 50%`（横長の楕円カプセル。イノカの「What we do」の写真）

### Stripe Capsule（区切り装飾）

- セトナギのロゴ帯。`#43BCC4` のカプセルに白い斜線（約 60°）
- ページ内で**1〜2回まで**。セクション区切りの主役にしない

### Photo Placeholder

- 写真が無いときは `#EDFDFF` の面に 12px の灰色キャプション（「写真準備中｜〇〇」）だけ
- グラデーション、波線イラスト、架空の風景を描かない

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 40px |
| XL | 80px |
| XXL | 140px（セクション上下） |

### Container

- Max Width: 1000px（イノカ本体の本文幅に近い）。巨大英字見出しとヒーローだけ全幅
- Padding (horizontal): 24px（モバイル 16px）

### Grid

- カード: 3カラム、Gutter 24px（イノカのニュースカードと同じ）
- テキスト＋写真: 左テキスト 1 : 右写真 2 の非対称

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべて。影は使わない |

- 面の区別は `#EDFDFF` の面色と余白で行う

---

## 7. Do's and Don'ts

### Do（推奨）

- 書体は Zen Kaku Gothic New と Jost の2つだけ
- 字間は 0.1em で統一する
- ボタンは左角・右丸の `0 20px 20px 0` のアウトライン
- 英字アイキャッチは `#009BFF` 14px 700、その下に和文見出し
- 写真は大きく、角丸 10px または楕円カプセルで切り抜く
- 文章は短く、子どもや保護者にも分かる言葉で。ですます調
- 実際の写真が入ることを前提に、写真の位置と比率を先に決める

### Don't（禁止）

- 明朝体を使わない
- グラデーション、ドロップシャドウ、ガラス風（blur）背景を使わない
- 写真の代わりにイラストや抽象的な波の SVG を描かない
- 「01 / 02 / 03」の番号付き3カラムを何度も繰り返さない（1ページ1回まで）
- 全セクションに英字アイキャッチを付けない（主要セクションのみ）
- 全幅の濃色背景（黒・紺）の CTA を置かない。白か `#EDFDFF` で
- スクロールで要素がフェードインする演出を付けない
- `#009BFF` / `#43BCC4` を小さな本文テキストの色に使わない（コントラスト不足）
- 「〜をつなぐ」「未来を紡ぐ」のような抽象的な決め台詞を見出しに多用しない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 640px | 1カラム、ハンバーガー |
| Tablet | ≤ 960px | カード2カラム、ナビはハンバーガー |
| Desktop | ≥ 1280px | 右上にピル型ナビを縦に固定表示（本文幅1000pxの右余白に収まる幅のときだけ） |

### タッチターゲット

- 最小 44px × 44px

### フォントサイズの調整

- 英字ディスプレイは `clamp()` で 56px まで縮める
- 本文 15px はモバイルでも変えない
