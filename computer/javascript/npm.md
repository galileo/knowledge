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
Credits to @joshwnj

### Some issues

In docker container you need to ensure that you have all additional elements
installed, like git, ssh, and etc.

To be able to install packages from github repository on `alpine` you need to install two packages `git` and `openssh`

```
RUN apk update \
  && apk add git openssh
```
