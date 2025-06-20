# ngx-datatable

`ngx-datatable` is a Angular component for presenting large and complex data.  
It has all the features you would expect from any other table but in a light package
with _no external dependencies_. The table was designed to be extremely flexible and light;
it doesn't make any assumptions about your data or how you: filter, sort or page it.

It was originally built for modern browsers using _TypeScript, CSS3 and HTML5_ and Angular `>=4.0.0`.
This is the sister project of the [angular-data-table](https://github.com/swimlane/angular-data-table)
that is designed for Angular 1.x.

## In The News

### AngularAir Esp 76

{% youtube %}https://www.youtube.com/watch?v=Pj4orsvIp8c{% endyoutube %}

The project was featured on [AngularAir](https://angularair.com/) where [@amcdnl](https://github.com/amcdnl)
spoke about the project, challenges and whats to come.

## Development server

Run `yarn start` to serve the demo at `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running tests

- Run `yarn test` to execute the linter, prettier check, unit and end-to-end tests.

## Release

- Checkout master (`git checkout master`)
- Pull master (`git pull`)
- Refresh node modules (`yarn install --frozen-lockfile`)
- Run tests (`yarn test`)
- Examine log to determine next version (X.Y.Z)
- Run `git checkout -b release/X.Y.Z`
- Update version in `projects/swimlane/ngx-datatable/package.json`.
- Update changelog in `docs/CHANGELOG.md`
- Run `yarn package` to build the package
- Run `git commit -am "(release): X.Y.Z"`
- Run `git tag X.Y.Z`
- Run `git push origin HEAD --tags`
- Run `yarn publish`
- Submit PR
