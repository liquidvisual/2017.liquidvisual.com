---
layout: child_layout/tutorials_item
date: 2015-02-03
title: Install NPM and Jekyll Locally Without Sudo
categories: Development
author: Mitch Warren
hero: /assets/img/content/hero/swirl-5.png
theme: theme-light
logo: /assets/img/content/branding/logo-type--white-transparent.svg
breadcrumbs: true
comments: true
---

<p class="lead dropcap">Because responsive design is hard, first and foremost. These offshore businesses are dealing with hundreds of clients and the developers aren't being paid enough, so you end up with a dodgy end-product and a lame user experience.</p>

{% assign settings = site.data.settings %}

<!-- This project is built with [Jekyll v{{ settings.jekyll_version }}](http://jekyllrb.com){:target="_blank"} - a popular static site generator endorsed by the good folks at Github. For package management we use [Bower](http://bower.io){:target="_blank"}, and [Grunt.js](http://gruntjs.com){:target="_blank"} - a JavaScript task runner. -->

This project is built with <a target="_blank" href="http://jekyllrb.com">Jekyll v{{ settings.jekyll_version }}</a> - a popular static site generator endorsed by the good folks at Github. For package management we use <a target="_blank" href="http://bower.io">Bower</a>, and <a target="_blank" href="http://gruntjs.com">Grunt.js</a> - a JavaScript task runner.

<!-- <div class="spacer mb-4"></div> -->

## Requirements

You'll need the following to run the build process and leverage all its features.

* [Git](https://git-scm.com){:target="_blank"}
* [Ruby](https://www.ruby-lang.org/en/){:target="_blank"} (1.9.3 or above)
* [NodeJS](https://nodejs.org/){:target="_blank"}
* [Python](https://www.python.org/downloads/){:target="_blank"} (optional)
* MacOS 10.10 or higher
* Command Line Tools (CLT) for Xcode

<div class="spacer mb-3"></div>

### 1. Install Command Line Tools for Xcode

```shell
xcode-select --install
```

```js
//-----------------------------------------------------------------
// PIXEL GRADIENT
//-----------------------------------------------------------------

function pixelGradient() {
    $("h1.subheader, h2.subheader, h3.subheader, .pixel-grad").pxgradient({
        step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
        colors: ["#F12D66","#20B5C3"],
        dir: "x"
    });
}
```

[Source](https://apple.stackexchange.com/questions/254380/macos-sierra-invalid-active-developer-path)

<div class="spacer mb-3"></div>

### 2. Install Homebrew

[Homebrew](http://brew.sh){:target="_blank"} is a package manager for MacOS. We'll use it to install Command Line Tools for [Git](https://git-scm.com){:target="_blank"} now, and later [NodeJS](https://nodejs.org/){:target="_blank"} and [Python](https://www.python.org){:target="_blank"} (Python optional). Pull up Terminal and paste the following:

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Since we just installed Homebrew, we could have skipped brew update, but it's a good habit to run it before installing anything with Homebrew because Homebrew is updated regularly. [Source](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/)

Next, add the Homebrew location to your ```$PATH```. We'll create a __.bash_profile__ or edit an existing one.

```shell
touch ~/.bash_profile; open ~/.bash_profile
```

Then add the following to your file and save. This will allow us to run future commands without giving Administrator access.

```shell
export PATH="/usr/local/bin:$PATH"
```

### 3. Ruby

Ruby typically comes installed with MacOS, although it's always good to have the latest version. We recommend installing *or updating* Ruby through [RVM](https://rvm.io){:target="_blank"}.

```shell
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

To start using RVM you need to run

```source /Users/liquidvisual/.rvm/scripts/rvm```

in all your open shell windows, in rare cases you need to reopen all shell windows. ??

add this to path:

```shell
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
```

Next, **reboot the terminal window**. If successful you should be able to see the new version number.

```shell
ruby -v
```

MacOS will have RubyGems installed by default, but we'll grab the latest version.

```shell
gem update --system
```

To test your RubyGems install, you can now use it to grab [Bundler](http://bundler.io). We use Bundler to install Ruby dependencies such as [Jekyll](https://jekyllrb.com){:target="_blank"}.

```shell
gem install bundler
```

### 4. NodeJS

Next, install Node with Homebrew. Please be patient, as this can take some time.

```shell
brew install -v node
```

```shell
 npm -g update npm
 ```

To update when npm refuses to update [source](https://stackoverflow.com/questions/49661521/how-to-update-npm-on-macos)

 ```shell
 npm install -g npm@latest
 ```

To test your Node install, try installing [Grunt](http://gruntjs.com/){:target="_blank"} which will be used to run the build process.

```shell
npm install -g grunt-cli
```

Next install [Bower](http://bower.io){:target="_blank"}. We use Bower to retrieve front-end dependencies such as Bootstrap, JQuery and others.

```shell
npm install -g bower
```

### 5. Python

MacOS will have Python installed by default, but we'll grab the latest version. In this case __Python is optional__. We use it in our Grunt File to create an ad-hoc local server to immediately serve the contents of our processed build.

If successful, you should be able to see the version.

```shell
python
```

<div class="spacer mb-3"></div>

## Start the Server

Once everything is installed, you can clone the codebase or [download]({{ github_repo_path }}){:target="_blank"} the contents from our Github repo.

```shell
git clone git@github.com:liquidvisual/{{ github_repo_name }}.git
```

Now that you have the project, we can download its dependencies.

```shell
cd {{ github_repo_name }}
bower install     # => for front-end dependencies (Eg. Bootstrap, JQuery etc)
bundle install    # => for Ruby dependencies (Eg. Jekyll)
npm install       # => for Node dependencies (Eg. Grunt)
```

Next we'll create a local server by running the Grunt task ```grunt serve```. Any changes to the files (eg. SCSS, JS etc) will trigger a page refresh in the browser.

```shell
grunt serve
```

If successful, your favorite browser should launch with [http://localhost:9000](http://localhost:9000).

<div class="spacer mb-3"></div>

### For Production

The following task ```grunt build``` will compile everything into the final end-product. Files will concatenate and minify, assets will be compressed to produce a __/dist__ folder, which can then be uploaded directly to a server.

```shell
grunt build    # => to concat and minify etc
```

To view the contents of the compiled build in the browser, you can run the following task. This will run ```grunt build``` followed by creating an ad-hoc local server with Python.

```shell
grunt host    # => Now browse to http://localhost:8000
```

If successful, your favorite browser should launch with [http://localhost:8000](http://localhost:8000).
Please note the change from port 9000 to _8000_.

<div class="spacer mb-3"></div>

## Deploy on Github Pages

You will need the git command line tools installed to utilise the ```grunt deploy``` task, which runs a ```grunt build``` and pushes the contents to the __github-pages__ branch in your Github repo. You'll need to configure your repo's path in the __Gruntfile.js__ however.

<div class="spacer mb-3"></div>

## Summary of Grunt Tasks

1. ```grunt serve``` for **development**, serves in browser

2. ```grunt build``` for **production**, creates output folder

3. ```grunt host``` runs build then serves in browser

4. ```grunt deploy``` pushes build to __github-pages__ branch

<div class="spacer mb-3"></div>

## Troubleshooting

### Node Sass failure

```shell
Node Sass does not yet support your current environment
```

 try:

 ```npm rebuild node-sass```

[https://github.com/sass/node-sass/issues/1764](link)

### MacOS Sierra - invalid active developer path

try:

```xcode-select --install```

[https://apple.stackexchange.com/questions/254380/macos-sierra-invalid-active-developer-path](link)

<h2>On Windows <i class="fa fa-windows"></i></h2>

Installation is relatively straight forward on Mac or Linux. On Windows however, it will require a few different steps. Unfortunately we don't yet offer a Windows walkthrough, but these resources should help:

* [Jekyll Docs on Windows](http://jekyllrb.com/docs/windows/#installation)
* [Step by Step Guide](http://jekyll-windows.juthilo.com)