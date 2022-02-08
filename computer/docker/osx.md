## Osx issues for docker

### Exposing ports

With `docker for mac` things are now a little bit easier but still there are some issues. For example when you want to do some debugging stuff like x-debug for php. Or for example hot reload in your javascript project. You need to remeber that each of this elements that you want to connect back to the container from your host should point on the `0.0.0.0` instead of `127.0.0.1` or `localhost`

Examples:

```javascript
var hmr = require('browserify-hmr');

browserify().plugin(hmr, {
  hostname: '0.0.0.0'
})
```


### 2022 February

The docker for mac was hanging on **starting** status. If that is what is happening for you. You can try to remove all the data taht were configured before:

```
rm -rf ~/Library/Group\ Containers/group.com.docker
rm -rf ~/Library/Containers/com.docker.docker
rm -rf ~/.docker
```
