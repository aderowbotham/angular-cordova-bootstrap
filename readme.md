#Ultra basic AngularJS and Cordova boostrap example

This is a very simple example of how to load Cordova with an AngularJS app. It bootstraps Angular as usual and loads Cordova via a module.

I've also thrown in FastClick which improves perceived responsiveness in mobile apps based on web views.

### Install dependencies

    bower install


### If starting from scratch:


##### 1. Install Cordova Globally

Install from [NPM](https://www.npmjs.org/). (Install [node.js](http://nodejs.org/) if you don't have that)

    sudo npm install -g cordova
    
    // I had to do this first time:
    sudo chown -R ade /usr/local/lib/node_modules/cordova/
    
    // to update
    sudo npm update -g cordova
    
    // get version
    cordova -v
    
##### 2. Create a Cordova project and add iOS and Android

    cordova create NgCordova com.aderowbotham.ngcordova "Angular Cordova Bootstrap"
    cd AmazingApp/
    cordova platform add ios
    cordova platform add android
    
    // list platforms added to this project
    cordova platforms ls
    
##### 3. Prepare / build / run

    cordova serve        // run locally w/cordova API available
    cordova build ios    // alias for prepare + compile
    cordova run android    // run on attached device
