# my_react_course

#### Development Environment Setup

npm init

npm install react react-dom --save

npm install babel-loader babel-core babel-preset-es2015 babel-preset-react

touch index.html App.js main.js webpack.config.js

npm install babel webpack webpack-dev-server -g

If you have a permission issue with npm global install:
> mkdir ~/.npm-global
> npm config set prefix '~/.npm-global'
> touch ~/.profile
> export PATH=~/.npm-global/bin:$PATH
> source ~/.profile


