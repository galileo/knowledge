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

@todo Verify what exact packages we do require to make this work more information can be found here https://github.com/galileo/knowledge/issues/1
