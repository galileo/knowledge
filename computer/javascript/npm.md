# Information about node

## Install repository as an node package

```
 {
   "dependencies": {
     // after # you can provide you branch name
     "knowledge": "git@github.com:galileo/knowledge.git#master"
   }
 }
```

> Dont use git@github.com:galileo/knowledge.git#master
> Use git://github.com:galileo/knowledge.git#master

Credits to @joshwnj

### Some issues

> I you will use the notation with `git://...` this wont be needed

In docker container you need to ensure that you have all additional elements
installed, like git, ssh, and etc.

To be able to install packages from github repository on `alpine` you need to install two packages `git` and `openssh`

```
RUN apk update \
  && apk add git openssh
```
### Running multiple tasks

```javascritp
"scripts": {
  "start": "npm-run-all --parallel lint start:debug start:server",
  "lint": "eslint . --ext .js",
  "start:debug": "node-debug server.js",
  "start:server": "nodemon server.js"
}
```
