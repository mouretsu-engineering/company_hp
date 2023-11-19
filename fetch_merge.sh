set -eu

# Colorize output only if stdout referers to terminal
if [ -t 1 ]; then
    textred="\033[1;31m"
    textgreen="\033[1;32m"
    textyellow="\033[1;33m"
    textblue="\033[1;34m"
    textreset="\033[0m"
fi
error() { echo -e $textred$@$textreset > /dev/stderr; exit 1; }


b=$(git rev-parse --abbrev-ref @)

if [[ "$b$" == *main* ]]; then
    error "[Error] mainブランチもしくはそれに関連したブランチにcheckoutしています。git checkout <自分の開発ブランチ> で適切なブランチに切り替えてください。"
fi


git fetch origin main
git merge origin/main
git remote prune origin