## ブランチ戦略
* ブランチはmainから作成してください。
* ブランチはプルリクと1:1で対応させてください。
  * プルリクが通ったブランチは使いまわさないでください。）
* 必ず以下のタスクにある各クエスト1つにつき1ブランチを切ってください。
  * 複数のタスクや機能をまとめて1つのブランチで開発してはいけません。

## Git操作
* 新しくブランチを作るとき
  ```bash
  sh ./checkout.sh
  ```
  * ブランチ作成する場合には、`タスクID`の入力をお願いします。

* メインブランチの変更を取り込むとき
  ```bash
  sh ./fetch_merge.sh
  ```

* プッシュするとき
  ```bash
  sh ./push.sh
  ```

  * プッシュする前にかならず./fetch_merge.shを実行し、コンフリクトが起こっていないかチェックしてください

* PRを送りたいとき
  ```bash
  sh ./pr.sh
  ```

  * `./pr.sh`を実行後、「PRタイトルを入力」する際に、notionのタスク名の記述してください
  * PRする前にかならず`./fetch_merge.sh`を実行し、コンフリクトが起こっていないかチェックしてください

* 手元のブランチがリモートブランチと違いが無いかチェックしたいとき
  かならずfetch_mergeしてから実行してください。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
