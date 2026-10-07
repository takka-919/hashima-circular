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
見た目のルールはすべて `DESIGN.md` にある（イノカ本体サイトとセトナギのトークンを awesome-design-md-jp 形式でまとめたもの）。UIを足す・直すときは必ず先に読み、トークンは `src/styles/global.css` の `:root` を使う。特に守ること：
- 書体は Zen Kaku Gothic New と Jost の2つだけ（@fontsource でセルフホスト）。明朝体は使わない
- 色は `#2B2B2B` / `#009BFF` / `#43BCC4` / `#EDFDFF` / 白。新しい色を足さない
- ボタンは左角・右丸（`border-radius: 0 20px 20px 0`）のアウトライン
- グラデーション、影、フェードイン演出、波線イラスト、濃色の全幅CTAは使わない
- 写真が無い場所は `Photo` コンポーネントのプレースホルダー（面＋キャプション）のまま。絵で埋めない

## 文章のトーン
- 子どもや保護者にも分かる、ですます調の短い文。抽象的な決め台詞（「〜を紡ぐ」等）は使わない
- 「心配を、事実にもとづく信頼へ」が軸。調査結果は断定せず、確認者・方法・出典を明記する
- 生きもの図鑑は専門家の同定・確認を経たものだけを draft: false にする。推測で種名を書かない

## お問い合わせフォーム
静的サイトなので外部フォームサービスを使う。Formspree（無料枠 月50件）などでフォームを作り、エンドポイントURLを `src/site.config.ts` の `formEndpoint` に入れると有効になる。

## 公開前チェックリスト
- [ ] 本物の写真・ロゴに差し替え（public/images/）
- [ ] パートナー紹介文を各社に確認
- [ ] プライバシーポリシーの運営主体・制定日を確定
- [ ] formEndpoint を設定
- [ ] 独自ドメインを使う場合は deploy.yml の SITE_URL / BASE_PATH と public/CNAME を設定
