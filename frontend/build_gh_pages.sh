npx ng build --output-path ../docs --base-href /biosense/
mv ../docs/browser/* ../docs/
rm -rf ../docs/browser
cp ../docs/index.html ../docs/404.html