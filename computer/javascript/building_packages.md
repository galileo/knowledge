# Building packages

## Monobrow

Great library can be found here https://github.com/joshwnj/monobrow

### Browserify

There is issue where you need to include packages that you want
to prebuild in the same packages, if you split them they will not
register correctly and you can end up with elements that will not
work. Like for example `react-tap-event-plugin` which requires to be
builded with the same vendor scope as `react` itself.
