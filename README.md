#GetMDL-Dashboard
Welcome to the GetMDL-Dashboard source code -- first dark dashboard on the [Material Design Lite](http://getmdl.io)!
![dashboard-avatar](https://trello-attachments.s3.amazonaws.com/56af74f7f1b5b81a201453c4/2000x1105/ffd8daf8f13fc6f43534dde1abd374c8/Darkboard_Showcase_1_1.3.png)

GetMDL-Dashboard is absolutely free for commecial usage theme, that uses google's implementation of material design -- [Material Design Lite](http://www.getmdl.io) library. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use. All components are created with CSS (scss), JavaScript (es6), and HTML5.

![dashboard-screen](https://trello-attachments.s3.amazonaws.com/565f11556ec187bcfb20a005/1900x1532/a4efd86591061713e56c3cc33d5e567a/Dashboard_1_6_jan.png)

Check out the [example](http://creativeit.github.io/getmdl-dashboard/dist/index.html).

>**Important**: The project is still under development, so some features or elements may not work properly. Also maps page doesn't ready for now.

#SETUP and USAGE
The steps bellow will take you through clonning your own fork, installing dependencies and building:

1. Fork and/or clone our repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork a repo](https://help.github.com/articles/fork-a-repo/) articles. 
`git clone https://github.com/CreativeIT/getmdl-dashboard.git`
If you'd prefer not to use Git, you can get the source with the 'Download ZIP' button on the right.

2. Open your copied repo folder in terminal and install bower components with command:
`bower install`

3. Install npm components with command:
`npm install`

4. Now you are able to build project with gulp:
`gulp build`

5. Open page dist/index.html in your favorite browser.

#Additional

Since the project uses [BEM](http://getbem.com) structure with sass, it can be customized in easy way by editing `src/variables.scss` file. To take affect you must run `gulp build` in terminal again, or you can use `gulp default`if you don't want to minify js-files. Also you may want to use `gulp watch`, that will run default command every time you modify any file in source folder.

Google hasn't implemented select element yet ([see why here](http://37.media.tumblr.com/6a9fcffde2da977266b0ea99b15d5803/tumblr_n42cjjsriB1smcbm7o1_400.gif)), that is why project depends on [getmdl-select plugin](https://github.com/CreativeIT/getmdl-select). Also project uses [d3 and nvd3](http://nvd3.org/) to build charts and chart components.

#License

```
The MIT License (MIT)

Copyright (c) 2016 CreativeIT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
