# Aggiunte Fork
## Posizione della paginazione
È stata aggiunta la possibilità di visualizzare alternativamente la paginazione sopra e/o sotto alla tabella.\
Sono stati aggiunti due flag di input per `ngx-datatable`:
- `topPaging`: visualizza il componente per la paginazione sopra alla tabella (default: `false`).
- `bottomPaging`: visualizza il componente per la paginazione sotto alla tabella (default: `true`).

*esempio*:
```
<ngx-datatable
  [topPaging]="true"
  [bottomPaging]="false"
  [rows]="rows"
  [headerHeight]="50"
  [footerHeight]="50"
  rowHeight="auto"
  [externalPaging]="true"
  [count]="page.totalElements"
  [offset]="page.pageNumber"
  [limit]="page.size"
  (page)="setPage($event)">
...
</ngx-datatable>
```

## Selettore dimensioni pagina
È ora possibile aggiungere un selettore per modificare la dimensione delle pagine.\
- `pageSizeSelector`: input per `ngx-datatable` per visualizzare, su ciascun componente di paginazione, il selettore di dimensione delle pagine (default `false`).
- `pageSizeOption`: per definire le opzioni di scelta delle dimensioni delle pagine (default: `[5, 10, 20, 50, 100]`).

*esempio*:
```
<ngx-datatable
  [pageSizeSelector]="true"
  [pageSizeOptions]="[10,20,30]"
  [pageSizeOption
  [rows]="rows"
  [headerHeight]="50"
  [footerHeight]="50"
  rowHeight="auto"
  [externalPaging]="true"
  [count]="page.totalElements"
  [offset]="page.pageNumber"
  [limit]="page.size"
  (page)="setPage($event)">
...
</ngx-datatable>
```

## Collapse responsivo delle colonne
È prevista la possibilità di collapse delle colonne in maniera responsiva.
Ponendo la direttiva `*responsiveColumn` su `<ngx-datatable-column>` si possono definire due breakpoint per quella colonna:
- `hideBelow`
- `hideAbove`
  
Entrambi accettano valori tra: `[xs, sm, md, lg, xl]`
Le colonne nascoste in questo modo saranno visualizzabili in un dettaglio posto nella prima colonna della `ngx-datatable`

*esempio*:
```
<ngx-datatable-column
  [name]="'Gender'"
  [resizeable]="false"
  *responsiveColumn="{ hideBelow: 'lg' }"
  prop="gender">
...
</ngx-datatable-column>
```
# ngx-datatable

[![Join the chat at https://gitter.im/swimlane/ngx-datatable](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/swimlane/ngx-datatable?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Code Climate](https://codeclimate.com/github/swimlane/ngx-datatable/badges/gpa.svg)](https://codeclimate.com/github/swimlane/ngx-datatable)
[![Test Coverage](https://codeclimate.com/github/swimlane/ngx-datatable/badges/coverage.svg)](https://codeclimate.com/github/swimlane/ngx-datatable/coverage)
[![npm version](https://badge.fury.io/js/%40swimlane%2Fngx-datatable.svg)](https://badge.fury.io/js/%40swimlane%2Fngx-datatable)
[![npm downloads](https://img.shields.io/npm/dm/@swimlane/ngx-datatable.svg)](https://npmjs.org/@swimlane/ngx-datatable)

`ngx-datatable` is an Angular component for presenting large and complex data. It has all the features you would expect from any other table but in a light package with _no external dependencies_. The table was designed to be extremely flexible and light; it doesn't make any assumptions about your data or how you: filter, sort or page it.

Check out the [documentation](https://swimlane.gitbook.io/ngx-datatable/) & [demos](http://swimlane.github.io/ngx-datatable/) for more information!

See the [changelog](https://github.com/swimlane/ngx-datatable/blob/master/docs/changelog.md) for recent changes.

## Features

- Handle large data sets ( Virtual DOM )
- Expressive Header and Cell Templates
- Horizontal & Vertical Scrolling
- Column Reordering & Resizing
- Client/Server side Pagination & Sorting
- Intelligent Column Width Algorithms ( Force-fill & Flex-grow )
- Integrated Pager
- Cell & Row Selection ( Single, Multi, Keyboard, Checkbox )
- Fixed AND Fluid height
- Left and Right Column Pinning
- Row Detail View
- Decoupled theme'ing with included Google Material theme
- Light codebase / No external dependencies
- AoT Compilation Support
- Universal Support

## Installation

To use ngx-datatable in your project install it via [npm](https://www.npmjs.com/package/@swimlane/ngx-datatable):

```
npm i @swimlane/ngx-datatable --save
```

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

## Credits

`ngx-datatable` is a [Swimlane](http://swimlane.com) open-source project; we believe in giving back to the open-source community by sharing some of the projects we build for our application. Swimlane is an automated cyber security operations and incident response platform that enables cyber security teams to leverage threat intelligence, speed up incident response and automate security operations.
