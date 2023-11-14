#!/bin/bash
echo "================="
echo "auto git by Junxu"
echo "======= 🤪  ====="

echo -e "\n▶ \033[33;1mgit add .\033[0m"
git add .

git status

# Prompt for a commit message
echo -e "\n▶ \033[33;1mEnter commit message (Press Enter to auto-generate):\033[37;1m"
read -r msg

# Use the entered commit message or generate one if none entered
if [[ -z "$msg" ]]; then
    # Get list of staged files
    files=$(git diff --cached --name-only)
    if [[ -z "$files" ]]; then
        echo "No files to commit."
        exit 1
    fi
    msg="Updated files: $files"
fi

echo -e "\n▶ \033[33;1mCommitting changes...\033[0m"
git commit -m "$msg"

echo -e "\n▶ \033[33;1mgit push\033[0m"
echo -e "\033[37;1mstart pushing ...\033[0m\n"
git push origin master
echo -e "\n\033[37;1mAll Done\033[0m"
