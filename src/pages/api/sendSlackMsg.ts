// pages/api/sendMessage.ts
import { WebClient } from "@slack/web-api";
import type { NextApiRequest, NextApiResponse } from 'next'

const token = process.env.NEXT_PUBLIC_SLACK_TOKEN;
const channelName = process.env.NEXT_PUBLIC_SLACK_CHANNEL_NAME ?? "";
const web = new WebClient(token);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const msgText = `
  <!channel>
  名前：${data.lastName} ${data.firstName}
  会社名：${data.company}
  部署：${data.department}
  役職：${data.post}
  メアド：${data.email}
  電話番号：${data.tell}
  お問い合わせ目的：${data.purpose}
  お問い合わせ詳細：${data.detail}
  `;

  try {
    const response = await web.chat.postMessage({
      channel: channelName,
      text: msgText,
    });

    res.status(200).json({ ts: response.ts });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}