import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
    input: './build/index.js',
    context: 'this',
    external: ['react', 'react-dom'],
    output: {
        file: 'public/main.js',
        format: 'iife',
        name: 'App',
        compact: true,
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
    },
    plugins: [
        resolve({
            browser: true
        }),
        postcss({
            output: './css/styles.css'
        })
    ]
};