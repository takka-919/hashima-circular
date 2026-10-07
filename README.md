# hashima-circular

羽島サーキュラーエコノミープロジェクトの Web サイト（Astro / GitHub Pages）。

```bash
npm install
npm run dev     # http://localhost:4321
npm run build
```

詳しい構成と運用ルールは [CLAUDE.md](./CLAUDE.md) を参照。

## GitHub Pages で公開する（初回のみ）
1. GitHub に `hashima-circular` リポジトリを作って push
2. リポジトリの Settings → Pages → Source を「GitHub Actions」にする
3. main に push するたびに自動で公開されます（`https://<ユーザー名>.github.io/hashima-circular/`）
