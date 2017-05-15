## Material UI

**Q. What for do we need the muiName property on component**

This is responsible if we want to build own Component which wrapps in any way an Material ui compoment so for, we need to add in our new component information for material-ui what kind of component we created.

```javascript
<AppBar
  iconElementRight={<FlatButton label="Hello" />}
/>
```

If you want to extract this into own component and use it even if you component will simple have the <FlatButton> rendered like this:

```javascript
const CustomComponent = () => <FlatButton label="Hello" />
export default CustomComponent
```

You still need to tell the material-ui that this is the FlatButton component. So before export you need to add this as an property.

```
const CustomComponent = () => <FlatButton label="Hello" />

CustomComponent.muiName = 'FlatButton'

export default CustomComponent
```

As class approach:
```
class CustomComponent extends Component {
  static muiName = 'FlatButton'
  render () {
    return <FlatButton label="Hello" />
  }
}
```

Todo:

Watch Ryan's x-crash-course https://www.youtube.com/watch?v=TSkNIYpQ-hQ
