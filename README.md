[![github](https://img.shields.io/badge/-github-gray?style=for-the-badge&logo=github)](https://github.com/mytabworks/myt-react-snippets#readme)
[![npm](https://img.shields.io/npm/v/myt-react-snippets?color=crimson&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/myt-react-snippets)
[![yarn](https://img.shields.io/npm/v/myt-react-snippets?color=blue&label=yarn&style=for-the-badge&logo=yarn)](https://classic.yarnpkg.com/en/package/myt-react-snippets)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/myt-react-snippets?color=%2371bba4&logo=bundlephobia&style=for-the-badge)](https://bundlephobia.com/result?p=myt-react-snippets)


# myt-react-snippets
This is a module which is build from the ground up to solve the problems in animation, transition, transition in group, scrollpossitions, etc... it has no extra dependencies which can be a little less. 

- [Installation](#installation)
- [How To Use](#how-to-use)
    - [Importing](#import-to-your-project)
    - [Animation Usage](#animation-usage)
    - [Tranistion Usage](#transition-usage)
    - [TranistionGroup Usage](#transitiongroup-usage)
- [Animation and Transition Properties](#animation-and-transition-property) 
    - [useScrollPosition Usage](#usescrollposition-usage) 
- [useScrollPosition Properties](#usescrollposition-arguments)
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
import { Animation, Transition, useScrollPosition, TransitionGroup } from 'myt-react-snippets'
```

## Animation Usage
`Animation` is use when the className is animate by css property animation and keyframe.<br/>
It can even use [animate.css](https://daneden.github.io/animate.css/) for cool animations.<br/><br/>
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
    const [showMessage, setShowMessage] = React.useState(false);
    const [showButton, setShowButton] = React.useState(true);
    const clickHandler = e => {
        setShowMessage(!showMessage);
    };
    return (
        <>
        {showButton && (
            <button type="button" onClick={clickHandler}>
            Show
            </button>
        )}
        <Animation
            in={showMessage}
            className="fade"
            onEnter={() => setShowButton(false)}
            onExited={() => setShowButton(true)}
        >
            <div className="banner">
                Hello There
                <button style={{ float: "right" }} onClick={clickHandler}>
                    Close
                </button>
            </div>
        </Animation>
        </>
    );
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
    const [showMessage, setShowMessage] = React.useState(false);
    const [showButton, setShowButton] = React.useState(true);
    const clickHandler = e => {
        setShowMessage(!showMessage);
    };
    return (
        <>
        {showButton && (
            <button type="button" onClick={clickHandler}>
            Show
            </button>
        )}
        <Transition
            in={showMessage}
            className="fade"
            onEnter={() => setShowButton(false)}
            onExited={() => setShowButton(true)}
        >
            <div className="banner">
                Hello There
                <button style={{ float: "right" }} onClick={clickHandler}>
                    Close
                </button>
            </div>
        </Transition>
        </>
    );
```

## TransitionGroup Usage
`TransitionGroup` is a managing container tool for `Transition` when items is mounting and unmounting dynamically.<br/><br/>
[![Edit myt-react-snippets-transition-group](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/pensive-galileo-wn1mg?fontsize=14&hidenavigation=1&theme=dark)

```js
    const [items, setItem] = React.useState([
        { id: ++unique, text: "list-1" },
        { id: ++unique, text: "list-2" },
        { id: ++unique, text: "list-3" }
    ]);

    return (
        <> 
        <div className="list-group">
            <TransitionGroup>
            {items.map(item => (
                <Transition key={item.id} className="fade">
                <div className="list">
                    <button
                    type="button"
                    onClick={e =>
                        setItem(state => state.filter(it => it.id !== item.id))
                    }
                    >
                    &times;
                    </button>
                    {` ${item.text}`}
                </div>
                </Transition>
            ))}
            </TransitionGroup>
        </div>
        <p>
            <input id="todo" className="inpt"/>
            <button
            className="btn"
            onClick={() =>
                setItem(prev => [...prev, { id: ++unique, text: document.getElementById('todo').value || `list-${unique}` }])
            }
            >
            Add List
            </button>
        </p>
        </>
    );
```


# Animation and Transition Property
`Animation` is use when the className is animate by css property animation and keyframe.<br/>
`Transition` is use when the className is animated by css property transition.<br/>
The datatypes with "*" means it is required.

|PROPERTY   |DATATYPES    |DEFAULT    |DESCRIPTION|
|-------------|---------------|-------------|-------------|
| in          | boolean*      | &nbsp;      | it indicates whether the children will enter or exit |
| children    | element\|component * | &nbsp;  | it is the element you want to animate. to make this work in components, it is required that the component has a property assignable to `className` for toggling animation and if `stayMountedWhenExited` is `true` it required assignable property `style` to use display  |
| className   | string        | &nbsp;    | it is the class name that will be assigned to the children component or element|
| timing      | number\|millsecond| 1000     | it is the timing of the animation will be transitioned |
| suffix      | {<br/> &nbsp;&nbsp; enter: string*,<br/>&nbsp;&nbsp; exit: string*<br/>} | {<br/> &nbsp;&nbsp; enter: '-in',<br/> &nbsp;&nbsp; exit: '-out' <br/>}    | it is the suffix for className. basically if the className assigned is `fade` then when the component or element entering in. it will assign a className `fade-in` in the children, same way in exit. and for additional idea. suffix can be use when the enter and exit className are not uniformed ex. `fade-in` and `slide-out`. To make it happen just don't assign anything in className and assign the class names in suffix ex. `{ enter:"fade-in", exit:"slide-out" }` |
| stayMountedWhenExited      | boolean | false     | it is determined whether the component or element will stay mounted or unmounted from DOM when animation is exited. if it is `true` it will use `display` `block` and `none` from entering and exiting of the element|
| allowRef     | boolean | false     | if true it will pass the animated/children node element on any event below, if the animated/children is component make sure it is `React.forwardRef` component. so it can get the node|
| onEnter      | function | &nbsp;     | it is invoke when the animation is started to enter |
| onEntering   | function | &nbsp;     | it is invoke when the animation is entering |
| onEntered    | function | &nbsp;     | it is invoke when the animation is fully entered |
| onExit       | function | &nbsp;     | it is invoke when the animation is started to exit |
| onExiting    | function | &nbsp;     | it is invoke when the animation is exiting |
| onExited     | function | &nbsp;     | it is invoke when the animation is fully exited |
| onMounted     | function | &nbsp;     | it is invoke when the component is mounted |
<br/>


## useScrollPosition Usage
It is use to determine the scroll position specially when spying elements.<br/>
[![Edit myt-react-snippets-usescrollposition](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-shtern-mwbxr?fontsize=14&hidenavigation=1&theme=dark)
<br/>

```js
function Callback({ current, previous}, { isScrollDown, isScrollUp, isInitial, main, screen, defaultSpy}) {
    // make your own algorithm using the provided 
    ...
}
```
 or use `defaultSpy` for "ready to use" algorithm
```js
function Callback(positions, {defaultSpy, ...provided} ) {

    const initial = {
        target: document.getElementById("target"), // or you can use hooks like React.useRef() to get the element
        extra_top: 100, // the added extra_top to enter the target scrolltop early
        onEntered: () => {
            ...Do something when entered the target scroll top
        },
        onExited: () => {
            ...Do something when exited the target scroll top
        }
    }

    defaultSpy(initial, positions, provided)

}
```
```js
useScrollPossition(Callback, scrolled)
```



# useScrollPossition Parameters
|PROPERTY   |DATATYPES    |DEFAULT    |DESCRIPTION|
|-------------|---------------|-------------|-------------|
| Callback    | function      | &nbsp; | it is the current position of the scroll top |
| scrolled   | element\|string| window | it is the element to be assigned onscroll, you can assign css styled selector ex. `#section-scroll`|

## Callback First Argument Properties
|PROPERTY   |DATATYPES    |PROVIDE    |DESCRIPTION|
|-------------|---------------|-------------|-------------|
| current     | object      |{ x: number, y: number} | it is the current position of the scroll top |
| previous    | object      |{ x: number, y: number} | it is the previous position of the scroll top |

## Callback Second Argument Properties
|PROPERTY   |DATATYPES    |PROVIDE    |DESCRIPTION|
|-------------|---------------|-------------|-------------|
| isScrollDown   | boolean    | true\|false | it is to determine if the user is scrolling downward |
| isScrollUp   | boolean      | true\|false | it is to determine if the user is scrolling upward |
| isInitial   | boolean       | true\|false | it is the initial state when the user is not scrolling yet |
| main | element  | element                 | it is the element being scrolled |
| screen | object  | { innerHeight, innerWidth} |it is the dimension of the screen 
| defaultSpy | function  | function        | it is a "ready to use" algorithm which is provided for spying the target elements, it is up to you if you want to use this algorithm or make your own |


## License
MIT Licensed. Copyright (c) fernando tabamo jr(Mytabworks) 2020. 
