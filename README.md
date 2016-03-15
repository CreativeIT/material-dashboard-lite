#Material Dashboard Lite

Welcome to first dark dashboard on the Material Design Lite!

![dashboard-avatar](https://trello-attachments.s3.amazonaws.com/56af74f7f1b5b81a201453c4/2000x1105/796e1dae05e88ba87162dd8bbf188e65/Darkboard_Showcase_1_3.png)

Its much more fun with the [demo](http://creativeit.github.io/material-dashboard-lite/index.html).

Material admin template is absolutely free for commercial usage theme, that uses google's implementation of material design -- [Material Design Lite](http://www.getmdl.io) library. It doesn’t rely on any JavaScript frameworks and aims to be responsive and optimized for cross-device usage. All components are created with CSS (scss), JavaScript (es6), and HTML5.

>**Important**: We are still working on the project and there will be much more awesome, check out our [issues](https://github.com/CreativeIT/material-dashboard-lite/issues) to see what features are coming soon.

#SETUP and USAGE
The steps bellow will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone our repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork a repo](https://help.github.com/articles/fork-a-repo/) articles. 
  
  ```
    git clone https://github.com/CreativeIT/material-dashboard-lite.git
  ```

2. Open your copied repo folder in terminal and install [npm](https://www.npmjs.com/) components with command:
  
  ```
    cd material-dashboard-lite
    npm install
  ```

3. Install [bower](http://bower.io/) components with command:
  
  ```
    bower install
  ```

4. Now you are able to build project with [gulp](http://gulpjs.com/):
  
  ```
    gulp build
  ```

5. To see the result use command:
  
  ```
    gulp serve
  ```

##Additional

Since the project uses [BEM](http://getbem.com) structure with sass, it can be customized in easy way by editing `src/variables.scss` file. To take effect you must run `gulp build` in terminal again. Also you may want to use `gulp watch`, that will run default command every time you modify any file in source folder. You can use `gulp default`if you don't want to minify js-files.

Google hasn't implemented select element yet ([see why here](http://37.media.tumblr.com/6a9fcffde2da977266b0ea99b15d5803/tumblr_n42cjjsriB1smcbm7o1_400.gif)), that is why the project depends on [getmdl-select plugin](https://github.com/CreativeIT/getmdl-select). Also project uses [d3](https://d3js.org/) and [nvd3](http://nvd3.org/) to build charts and chart components.


#FEATURES

*  [Material Design](http://www.google.com/design/spec/material-design/introduction.html) via [Material Design Lite](http://getmdl.io)

*  Ecmascript 6 (with [babel](https://babeljs.io/))

*  Responsive dark material design. DARK, Carl!

*  User experience focused

*  [Sass](http://sass-lang.com/)

*  [Gulp](http://gulpjs.com/) build

*  [D3](https://d3js.org/) and [NVD3](http://nvd3.org/)

*  MIT License

#Credits

UI components built with [Material Design Lite](http://www.getmdl.io).

Designed with passion and coffee by CreativeIT

#Support the project

* Star the repo

* Create issue report or feature request

* [Tweet about it](https://twitter.com/intent/tweet?text=Wow!%20New%20%23free%20dark%20%23dashboard%20on%20%23MaterialDesignLite!%0Ahttp://creativeit.github.io/material-dashboard-lite/index.html%0A&via=CreativeITeam&hashtags=materialDesign,responsive,UI,JS)

* Follow [us on Twitter](https://twitter.com/intent/follow?screen_name=CreativeITeam)