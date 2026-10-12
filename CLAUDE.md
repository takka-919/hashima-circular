# 羽島サーキュラーエコノミープロジェクト Webサイト

長谷虎紡績・イノカ・aiESGの3社連携プロジェクトの公式サイト。Astro製の静的サイトで、GitHub Pages に無料でホスティングする。

## コマンド
- `npm run dev` … 開発サーバー（http://localhost:4321）。draft: true の記事も表示される
- `npm run build` … 本番ビルド（dist/）。コミット前に必ず通ること
- main ブランチに push すると GitHub Actions が自動でビルド・公開する

## 構成
- `src/site.config.ts` … サイト名、ナビ、パートナー紹介文、フォーム送信先（formEndpoint）
- `src/content/news/*.md` … 活動報告。カテゴリは 調査 / 教育イベント / 地域連携 / お知らせ
- `src/content/events/*.md` … イベント。status は 準備中 / 募集中 / 受付終了 / 開催済み
- `src/content/species/*.md` … 生きもの図鑑。`_template.md` をコピーして使う（_始まりは公開されない）
- スキーマは `src/content.config.ts`。項目を足すときはここも直す
- 画像は `public/images/{news,events,species}/` に置き、frontmatter では `images/news/xxx.jpg` のように public からの相対パスで書く
- 写真が無い場合は自動で「写真準備中」の差し替え用プレースホルダーが出る（`src/components/Photo.astro`）
- デザイン仕様は `DESIGN.md`、実装トークンは `src/styles/global.css`

## リンクの書き方
GitHub Pages のサブパスに対応するため、内部リンクは必ず `url('news/')` のように `src/lib/utils.ts` の `url()` を通す。Markdown 内のリンクは相対パス（`../2026-06-09-agreement/`）で書く。

## デザイン（必読）
見た目のルールはすべて `DESIGN.md` にある（形・書体はイノカ本体サイトとセトナギ、色は長谷虎・田んぼ・淡水から。awesome-design-md-jp 形式）。UIを足す・直すときは必ず先に読み、トークンは `src/styles/global.css` の `:root` を使う。特に守ること：
- 書体は Zen Kaku Gothic New と Jost の2つだけ（@fontsource でセルフホスト）。明朝体は使わない
- 色は `#2B2B2B` / 長谷虎の藍 `#205377` / 田んぼの苗色 `#84A94C`（文字用 `#4E7230`）/ 水面 `#E4EEF0` / 白。新しい色を足さない
- ボタンは左角・右丸（`border-radius: 0 20px 20px 0`）のアウトライン
- グラデーション、影、フェードイン演出、波線イラスト、濃色の全幅CTAは使わない
- 写真が無い場所は `Photo` コンポーネントのプレースホルダー（面＋キャプション）のまま。絵で埋めない
- 生成AIの画像は `credit="イメージ（AI生成）"`（記事・イベントは `coverCredit`）を必ず付ける。フッターにもAI生成画像の注記あり
- フリー素材（Unsplash 等）を使うときは `credit="イメージ（撮影者 / Unsplash）"` を必ず付け、桑原川や羽島の実際の写真のように見せない。記事・イベントでは frontmatter の `coverCredit`
- 写真は長辺 1600〜2000px・JPEG 品質80程度に縮小してから public/images/ に置く

## 文章のトーン
- 子どもや保護者にも分かる、ですます調の短い文。抽象的な決め台詞（「〜を紡ぐ」等）は使わない
- 「心配を、事実にもとづく信頼へ」が軸。調査結果は断定せず、確認者・方法・出典を明記する
- 生きもの図鑑は専門家の同定・確認を経たものだけを draft: false にする。推測で種名を書かない

## お問い合わせフォーム
静的サイトなので外部フォームサービスを使う。Formspree（無料枠 月50件）などでフォームを作り、エンドポイントURLを `src/site.config.ts` の `formEndpoint` に入れると有効になる。

## 公開前チェックリスト
- [ ] フリー素材（「イメージ」表記のもの）を実際の写真に差し替え（public/images/）
- [ ] パートナー紹介文を各社に確認
- [ ] プライバシーポリシーの運営主体・制定日を確定
- [ ] formEndpoint を設定
- [x] 独自ドメイン hashima-circular.innoqua.jp（Route 53 の CNAME → takka-919.github.io、GitHub Pages の Custom domain 設定済み）
