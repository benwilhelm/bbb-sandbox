// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["../vendor/jam/require.config", "main"],

  paths: {
    
    // Javascript Folders
    libs: "../vendor/js/libs",
    plugins: "../vendor/js/plugins",
    modules: "modules",
    
    // Libraries
    jquery: "../vendor/jam/jquery/dist/jquery.min",
    underscore: "../vendor/jam/underscore/underscore",
    backbone: "../vendor/jam/backbone/backbone"
  },

  shim: {
    use: "../vendor/js/plugins/"
  },
  
  use: {
    "underscore": {
      attach: "_"
    },
    
    "backbone": {
      deps: ["use!underscore","jquery"],
      attach: function(_, $) {
        return Backbone;
      }
    }
  }

});
