# 変数の定義
git_status=$(git status --porcelain)

# # git statusの結果によって処理を分岐する
# if [[ -n "$git_status" ]]; then
#   echo "Error: 現在の作業ブランチでまだaddもしくはcommitされていないファイルがあります。"
#   echo $git_status
#   exit 1
# fi

read -p "Task IDを入力: " b

./fetch_merge.sh
git checkout main
git pull
git branch --merged | egrep -v "\*|main|dev" | xargs git branch -D
git checkout -b feature/ENG-$b