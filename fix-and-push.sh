#!/bin/bash

echo "🚀 Starting Git Fix and Push Process..."
echo ""

# Step 1: Navigate to project directory
cd "C:/Users/PC/OneDrive/Desktop/aleenareact - Copy/aleena-portfolio" || exit

# Step 2: Check if videos folder exists and backup
if [ -d "public/videos" ]; then
  echo "✅ Backing up videos folder..."
  mv public/videos public/videos_backup
fi

# Step 3: Clean node_modules and package-lock
echo "🧹 Cleaning node_modules and package-lock.json..."
rm -rf node_modules
rm -f package-lock.json

# Step 4: Abort any ongoing rebase
echo "⛔ Aborting rebase..."
git rebase --abort 2>/dev/null || echo "No rebase in progress"

# Step 5: Check git status
echo "📊 Checking git status..."
git status

# Step 6: Restore videos folder
if [ -d "public/videos_backup" ]; then
  echo "✅ Restoring videos folder..."
  mv public/videos_backup public/videos
fi

# Step 7: Stage all files
echo "📦 Staging all files..."
git add .

# Step 8: Commit changes
echo "💾 Committing changes..."
git commit -m "Portfolio update: restored original design and fixed git issues"

# Step 9: Reinstall dependencies
echo "📥 Reinstalling npm dependencies..."
npm install

# Step 10: Check remote
echo "🔍 Checking remote repository..."
git remote -v

# Step 11: Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -f origin main

echo ""
echo "✨ Done! Your portfolio should now be on GitHub!"
