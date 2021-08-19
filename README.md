# Crypto APP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version `11.2.10`.

Node `v14.15.1` and NPM `6.14.8` on MacOS BigSur `11.4`.

## Ark Tools
- Husky
- ESLint
- StyleLint
- LintStaged
- CommitLint

## Stack
- Angular (Typescript)
- Styles (SCSS)
- Templates (HTML)
- Angular Material (web components)
- Jasmine (unit testing)
- Cypress (E2E testing)

## Extras
- GitFlow & Version Tags
- Changelog Generator
- Version Expose
- Normalize CSS
- fontawesome
- i18n
- Images from pixabay api
- Exchange usd-eur from exchangeratesapi api
- Node Express Backend Server
- ngx-charts

### Frontend

To run Crypto App in `localhost:4200`, follow next steps:
- `npm i`
- `npm start`

### Backend

To retrieve data from API's is mandatory to run Express Node Server in `/backend` folder at `localhost:3000`.
- Open other shell
- `cd backend`
- `npm i`
- `npm start`

This server avoid CORS problems in Frontend app. It works with next API's:
- DATA API: [docs.coincap.io](https://docs.coincap.io/)
- IMAGES API: [pixabay.com](https://pixabay.com/api/docs/)
- EXCHANGE API: [exchangeratesapi.io](https://exchangeratesapi.io/documentation/)
