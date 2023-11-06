## 📚 Introduction

Trying to load a fresh installed package and got the error `cannot use import statement outside a module`? This packaged is the sollution for your problems.

I've created it after Googling a lot trying to find a sollution on how to import an ESM package in a big and consolidated CommonJS project... Migrate whole project to ESM architecture just to use a single package was not an option.

## 🧰 Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```sh
npm install commonjs-esm-loader
# or
yarn add commonjs-esm-loader
```

## 💡 Usage

OBS: I'll use [`pdfreader`](https://www.npmjs.com/package/pdfreader) package as example as this was the package that makes me create this project, but it works with any ESM package you want to load.

```sh
import { importEsmModule } from 'commonjs-esm-loader'
import type PdfReaderType from 'pdfreader'

async function loadPdf() {
  const { PdfReader } = await importEsmModule<typeof PdfReaderType>( 'pdfreader' )
  # your package is loaded, typed and ready to use :)
  new PdfReader( ... )
}
```
If you're using Typescript, it's important to import add `import type PackageType from 'mypackage'` so that intellisense will continue to work. 

## 👷 Built With

- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript

## 📚 Author

- **Luiz Carlos Ferreira** - [nonam4](https://github.com/nonam4)
