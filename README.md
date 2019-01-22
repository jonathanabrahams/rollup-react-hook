# React Hooks

# References
[Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- React v16.8.0-alpha.1
- `useState`
- [React 16.x (~Q1 2019): The One with Hooks](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html#react-16x-q1-2019-the-one-with-hooks)

[Video introduction](https://www.youtube.com/watch?time_continue=4&v=dpw9EHDh2bM)
- React Conf 2018 (Sophie Alpert, Dan Abramove examples, Ryan Florence cleaner)
    - `useContext` -  eg theme/locale
    - `useEffect` -  hooks into componentDidMount / componentDidUpdate / componentWillUnmount
    - `useCUSTOM` - custom hooks starts with `use` convention
    - `useReducer` - state/dispatch/reducer (Redux like)
    - `useRef` - references 

Motivation
- It's hard to reuse stateful logic between components
    -  Patterns [Render Props](https://reactjs.org/docs/render-props.html), [HOC](https://reactjs.org/docs/higher-order-components.html) try to solve "attach" reusable behaviour

    - *Hooks allow you to reuse stateful logic without changing your component hierarchy*
    
    - [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

- Complex components become hard to understand
    - Example
        ```
        componentDidMount - fetching data/logic/event listeners
        componentDidUpdate - fetching data/logic/event listeners
        componentWillUnmount - clean-up
        ```

    - stateful logic everywhere, hence state management library Redux ( too much abstraction )

    -  *Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)*

    - [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns)

- Classes confuse both people and machines
    - `this` and `bind` React and classes
    - issues with optimisation / minify / etc
    -  [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

# Install
Installation process
```
yarn 
yarn start
```

# Step-By-Step
 Get the latest version of react:
 ```
 yarn info react dist-tags.next
 16.8.0-alpha.1

 yarn add react@next react-dom@next
 ```

 Add Typescript support
 Builds `build/App.js` from `src/App.tsx` uses `tsconfig.json`
 ```
 yarn add -D typescript @types/react @types/react-dom
 ```

Add Rollup
Bundles `public/main.js` from `build/App.js` uses `rollup.config.js`
```
yarn add -D rollup
```

 Add serve
 Serves `public/index.html`
 ```
 yarn add -D serve
 ```

 Add Concurrently
For developing serve, watch and bundle see `package.json`
 ```
 yarn add -D concurrently
 ```

 React/React-Dom as external dependencies
 Using `rollup` to bundle `App.tsx` with `React`  and `ReactDOM` loaded from cdn see `public/index.html`
 ```
<script crossorigin src="https://unpkg.com/react@16.8.0-alpha.1/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16.8.0-alpha.1/umd/react-dom.production.min.js"></script>
 ```

 changes to `rollup.config.js`
 ```
 external: ['react', 'react-dom'],
 globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
},
 ```

Add LiveReload
VSCode `Ctrl+P` or `Cmd+P` 
```
ext install livereload
```
Browser extension [LiveReload Extension](http://livereload.com/extensions/)

