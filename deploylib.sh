set -e
npm run build:lib:prod
cd dist/swimlane/ngx-datatable && npm publish --registry=http://verdaccio.elbuild.com:4873/
