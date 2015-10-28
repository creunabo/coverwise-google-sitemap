# json2google-sitemap

> a little tool that takes a json file with any key named url and makes google sitemap

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install json2google-sitemap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('json2google-sitemap');
```

## The "json2google-sitemap" task

### Overview
In your project's Gruntfile, add a section named `json2google-sitemap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    json2google_sitemap: {
      default_options: {
        options: {
          rootDomain: 'https://your.domain',
          urlProperty: 'url'
        },
        files: {
          'tmp/sitemap.xml': ['test/fixtures/navigation.json']
        }
      }
    }
});
```

### Options

#### options.rootDomain
Type: `String`
Default value: `'https://your.domain'`

A string value that sets the domain.

#### options.urlProperty
Type: `String`
Default value: `'url'`

A string value that sets the json property to search for in your json file.

