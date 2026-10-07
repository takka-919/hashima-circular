// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 用の設定。
// - プロジェクトページ（https://<user>.github.io/hashima-circular/）の場合は BASE_PATH=/hashima-circular
// - 独自ドメインの場合は BASE_PATH を空にし、SITE_URL を独自ドメインに
// .github/workflows/deploy.yml から環境変数で渡します。
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
