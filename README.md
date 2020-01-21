# GitSearch

This project is a web application where users can search for github users and their repositories.

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

Powered by [Github API](https://developer.github.com/v3/) REST API v3

## Codebeat Badge

[![codebeat badge](https://codebeat.co/badges/7bb6f8a2-afa6-4233-b0b9-f98910d474f6)](https://codebeat.co/projects/github-com-loisa-kitakaya-git-search-master)

## Deployment Link

<https://loisa-kitakaya.github.io/git-search/>

## Operating

The web-app is made up of two functional pages (user, and repo) where the user can search github users, and the latter, their repositories. It also includes a welcome page that loads on default once a user visits the site for the first time. The welcome page has a welcome message and links to the other pages.

The web application also has a navigation bar on the right side of the page, where the user can navigate to and from the user and repo pages. (Note: Once the user has navigated to either the user or repo pages, they cannot navigate back to the welcome page).

In the user and repo pages, other than the information (about the developer) that loads on default; at the top below the title, is a search box where the user may type in the username of a github account and; depending on the page the user is at, either information about the username searched will be displayed or repositories connected to the username searched. (Note: The user only needs to type in the username for the expected results to load).

## Issues

While loading the web-app for the firs time, the welcome page does not load properly.

To fix this, you would want to delete the last "forward-slash" in the static page url; then hit enter.

- like so: \*

`https://loisa-kitakaya.github.io/git-search/git-search/`

- you would want to delete the last "forward-slash", such that it looks like this: \*

`https://loisa-kitakaya.github.io/git-search/git-search`

- then hit enter \*

**More issues?**

Post them here:

`https://github.com/Loisa-Kitakaya/git-search/issues`

## License

Licence: MIT License

Copyright (c) 2019 Loisa Kitakaya

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
