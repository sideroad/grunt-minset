# grunt-minset

> Set minify configure as uglify automatically

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-minset --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-minset');
```

## The "minset" task

### Overview
In your project's Gruntfile, add a section named `minset` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  minset: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.config
Type: `String`
Default value: `uglify`

A string value that is used to setting config.

#### options.from
Type: `RegExp`
Default value: `/\.unpack\.js$/`

Matched files in src pick up automatically.

#### options.to
Type: `String`
Default value: `.js`

Matched files by `options.from` replace to `options.to` into dest directory.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  minset: {
    options: {},
    files: {
      'tmp': ['test/fixtures/*.unpack.js'],
    },
  },

  uglify: {}
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  minset: {
    options: {
      from: /\.js$/,
      to: '.min.js',
      config: 'min'
    },
    files: {
      'tmp': ['path/to/js/directoy/*.js'],
    },
  },

  min: {}
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
