![Continuous Deployment](https://github.com/frictionlessdata/website-v2/workflows/Continuous%20Deployment/badge.svg)

This is the new FrictionlessData.io website to be released in 2020. It reflects the recent updates made to Frictionless Data project setup and brand.

### Development

```console
$ npm install
$ npm start
```

### Deployment

New commits into the master branch will be automatically deployed to GitHub Pages by a [workflow](.github/workflows/main.yml).

### Notebooks

Use `notebooks.yml` for the notebooks management:
- `target` property allows to choose a target directory for generated markdowns
- `source` property is a key-value pair of a notebook's id and a colab url

To generate markdowns from the notebooks:

```
$ npm run notebooks
```
