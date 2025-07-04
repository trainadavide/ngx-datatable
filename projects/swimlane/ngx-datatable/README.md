# Aggiunte Fork

## Posizione della paginazione

È stata aggiunta la possibilità di visualizzare alternativamente la paginazione sopra e/o sotto alla tabella.\
Sono stati aggiunti due flag di input per `ngx-datatable`:

- `topPaging`: visualizza il componente per la paginazione sopra alla tabella (default: `false`).
- `bottomPaging`: visualizza il componente per la paginazione sotto alla tabella (default: `true`).

_esempio_:

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

_esempio_:

```
<ngx-datatable
  [pageSizeSelector]="true"
  [pageSizeOptions]="[10,20,30]"
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

_esempio_:

```
<ngx-datatable-column
  [name]="'Gender'"
  [resizeable]="false"
  *responsiveColumn="{ hideBelow: 'lg' }"
  prop="gender">
...
</ngx-datatable-column>
```
