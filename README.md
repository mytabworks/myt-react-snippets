# myt-react-snippets
This is a module which is build from the ground up to solve the problems in animation, transition, scrollpossitions, etc... it has no extra dependencies which can be a little less. 

- [Installation](#installation)
- [How To Use](#how-to-use)
    - [Importing](#import-to-your-project)
    - [Animation Usage](#animation-usage)
    - [Tranistion Usage](#transition-usage)
    - [useScrollPosition Usage](#usescrollposition-usage) 
- [Animation and Transition Properties](#animation-and-transition-property) 
- [useScrollPosition Properties](#usescrollposition-property)
- [License](#license)

# installation
```
npm i myt-react-snippets
```
or
```
yarn add myt-react-snippets
```
# How to use

## import to your project
```js
import { Animation, Transition, useScrollPosition } from 'myt-react-snippets'
```

## Animation Usage
`Animation` is use when the className is animate by css property animation and keyframe.<br/><br/>
[![Edit myt-react-snippets-animation](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mystifying-flower-buswx?fontsize=14&hidenavigation=1&theme=dark)
```css
/*css*/
.fade-in {
    animation: fade-in 1s ease-in;
}

.fade-out {
    animation: fade-out 1s ease-out;
}

@keyframes fade-out {
    0% {
        opacity: 1;
    } 

    100% {
        opacity: 0; 
    }

}

@keyframes fade-in {
    0% {
        opacity: 0;
    } 

    100%{
        opacity: 1; 
    }
}
```
```js
const [show, setShow] = React.useState(false)
const [btn, setBtn] = React.useState(true)
const clickHandler = e => {
    setShow(!show)
}
```
```html
return (
    <>
        { btn && <button type="button" onClick={clickHandler}>Show</button>}
        <Animation in={show} className="fade" onEnter={() => setBtn(false)} onExited={() => setBtn(true)}>
            <div style={padding:"20px", backgroundColor: "crimson"}>
                Hello I've Shown. click this -> <span onClick={clickHandler}>Close</span>
            </div>
        </Animation>
    </>
)
```

## Transition Usage
`Transition` is use when the className is animated by css property transition.<br/><br/>
[![Edit myt-react-snippets-transition](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/naughty-villani-c3m7c?fontsize=14&hidenavigation=1&theme=dark)
```css
/*css*/
.fade-in {
    opacity: 1;
    transition: opacity 1s ease-in
}

.fade-out {
    opacity: 0;
    transition: opacity 1s ease-out;
}
```
```js
const [show, setShow] = React.useState(false)
const [btn, setBtn] = React.useState(true)
const clickHandler = e => {
    setShow(!show)
}
```
```html
return (
    <>
        { btn && <button type="button" onClick={clickHandler}>Show</button>}
        <Transition in={show} className="fade" onEnter={() => setBtn(false)} onExited={() => setBtn(true)}>
            <div style={padding: "20px", backgroundColor: "crimson"}>
                Hello I've Shown, click this -> <span onClick={clickHandler}>Close</span>
            </div>
        </Transition>
    </>
)
```


# Animation and Transition Property
`Animation` is use when the className is animate by css property animation and keyframe.<br/>
`Transition` is use when the className is animated by css property transition.<br/>
The datatypes with "*" means it is required.

|PROPERTY   |DATATYPES    |DEFAULT    |DESCRIPTION|
|-------------|---------------|-------------|-------------|
| in          | boolean*      | &nbsp;      | it indicates if the children will enter or exit |
| children    | element\|component * | &nbsp;  | it is the element you want to animate. to make this work in components, it is required that the component will be assigned as children has a property className that is assignable |
| className   | string *        | &nbsp;    | it is the class name the will be assigned to the children component or element|
| timing      | number|millsecond| 1000     | it is the timing of the animation length |
| prefix      | {<br/> &nbsp;&nbsp; enter: string*,<br/>&nbsp;&nbsp; exit: string*<br/>} | {<br/> &nbsp;&nbsp; enter: 'in',<br/> &nbsp;&nbsp; exit: 'out' <br/>}    | it is the prefix for className. basically if the className assigned is `fade` then the when entering it will assign a className `fade-in` in the children, same way in exit. and for additional idea. prefix can be use when the enter and exit className are not uniformed like `fade-in` and `slide-out`. just don't assign anything in className and assign the class names in prefix `{enter:"fade-in", exit:"slide-out"}` |
| mounted      | boolean | true     | it is determined whether the component or element will be unmounted from DOM when `in` is `false`, or just stayed mounted and use `display` `block` and `none` from entering and exiting |
| onEnter      | function | &nbsp;     | it is invoke when the animation is started to enter |
| onEntering   | function | &nbsp;     | it is invoke when the animation is entering |
| onEntered    | function | &nbsp;     | it is invoke when the animation is fully entered |
| onExit       | function | &nbsp;     | it is invoke when the animation is started to exit |
| onExiting    | function | &nbsp;     | it is invoke when the animation is exiting |
| onExited     | function | &nbsp;     | it is invoke when the animation is fully exited |
<br/>


## useScrollPosition Usage
It is use to determine the scroll position specially when spying elements.<br/>
[![Edit myt-react-snippets-usescrollposition](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-shtern-mwbxr?fontsize=14&hidenavigation=1&theme=dark)
<br/>

# useScrollPossition Arguments
It is use to determine the scroll position specially when spying elements.<br/>
The datatypes with "*" means it is required.

|PARAMETER   |DATATYPES    |DEFAULT    |DESCRIPTION|
|-------------|---------------|-------------|-------------|
| 1st parameter| function*      | &nbsp;     | it is the one the will update the current location |
| 2nd parameter| string\|element | window     | it is the element to be assigned onscroll   |

## 1st parameter arguments
|ARGUMENT   |DATATYPES    | VALUE    |DESCRIPTION|
|-------------|---------------|-------------|-------------|
| 1st argument | object      | {<br/>&nbsp;&nbsp;current: { x: number, y: number }<br/>&nbsp;&nbsp;previous: { x: number, y: number }<br/>}     | current position and previous position, previous is one step behind |
| 2nd argument | object | {<br/>&nbsp;&nbsp;isInitial, <br/>&nbsp;&nbsp;isScrollDown, <br/>&nbsp;&nbsp;isScollUp, <br/>&nbsp;&nbsp;screen,<br/>&nbsp;&nbsp; main, <br/>&nbsp;&nbsp;defaultSpy<br/>} | it contain the additional utilities that will be helpful |


## License
MIT Licensed. Copyright (c) fernando tabamo jr(Mytabworks) 2020. 
