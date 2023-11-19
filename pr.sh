./push.sh

# 現在の git ブランチ名を取得する
branch=$(git rev-parse --abbrev-ref HEAD)

# ブランチ名から feature/**** の部分を抽出する
default_value=${branch#feature/}

read -p "PRタイトルを入力: " msg_title
gh pr create \
    --base main \
    --body "【Quest Done】" \
    --title "[${default_value}] ${msg_title}"