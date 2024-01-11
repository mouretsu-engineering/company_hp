import { WebClient } from "@slack/web-api";
import type { NextApiRequest, NextApiResponse } from 'next'

const token = process.env.NEXT_PUBLIC_SLACK_TOKEN;
const channelName = process.env.NEXT_PUBLIC_SLACK_CHANNEL_NAME ?? "";
const web = new WebClient(token);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const msgBlocks = [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `<!channel>`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *氏名* ： ${data.lastName} ${data.firstName}`
      },
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *会社名* ： ${data.company}`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *部署* ： ${data.department}`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *役職* ： ${data.post}`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *メアド* ： ${data.email}`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *電話番号* ： ${data.tell}`
      },
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *お問い合わせ目的* ： ${data.purpose}`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ` *お問い合わせ詳細* ：\n${data.detail}`
      }
    }
  ];

  try {
    const response = await web.chat.postMessage({
      channel: channelName,
      blocks: msgBlocks,
    });

    res.status(200).json({ ts: response.ts });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}