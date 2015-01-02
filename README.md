# grunt-phpdoc v0.1.1 [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Create documentations for PHP code with phpDocumentor.


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phpdoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phpdoc');
```

## phpDocumentor

**You need to have `phpdoc` installed globally in order to use this plugin.** Please visit [phpdoc.org](http://phpdoc.org) for more information and installation instructions.

## The "phpdoc" task
*Run this task with the `grunt phpdoc` command.*

In your project's Gruntfile, add a section named `phpdoc` to the data object passed into `grunt.initConfig()`.
Task targets, files, and options may be specified according to the [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

```js
grunt.initConfig({
  phpdoc: {
    options: {
      // Task-specific options go here.
    },
    target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### Options

The available options for this task correspond to the options for `phpdoc`. For more details refer to the documentation at [phpdoc.org](http://phpdoc.org/docs/latest/references/commands/project_run.html).

#### template
Type: `String`  
Default: `'clean'`

Select the template for the generated documentation. Run `phpdoc template:list` to get a list of available templates.

#### verbose
Type: `Boolean`  
Default: `false`

Display the output of the `phpdoc` command.

### Usage Examples

In this example, a documentation is built for all PHP files in the *app/controllers* folder and for the file *app/util.php*. The result is stored in *doc/backend*. If no `dest` property is specified, a *doc* folder will be created automatically next to your Gruntfile.

```js
grunt.initConfig({
  phpdoc: {
    options: {
      verbose: true
    },
    src: [
      'app/controllers',
      'app/util.php'
    ],
    dest: 'doc/backend'
  }
});
```

You can also build multiple documentations simultaneously. The following configuration will create two separate documentations in the *doc* folder: *first* for the PHP files in *code/first* and *second* for the ones in *code/second*:

```js
grunt.initConfig({
  phpdoc: {
    files: {
      'doc/first': ['code/first'],
      'doc/second': ['code/second']
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* v0.1.0 (2015-01-01) Initial release
  * v0.1.1 (2015-01-02) Output stderr in case of a fatal error
