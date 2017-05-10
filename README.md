# smint.no
Gives an overview of the services used internally at the Student Media in Trondheim (Studentmediene i Trondheim).

## Installation
This is just a static web page. The contents of the `app/` folder is the web root for `www.smint.no`.

To preview locally, with Python3 installed, while inside the `app/` folder:

```sh
python3 -m http.server
```

Anyone on the same network as you may also access the preview, enabling you to test it on your mobile phone.

When you deploy the application, make sure you enable caching of the resources (with revalidation), as well as GZIP
compression of the CSS and HTML files, to reduce load times and network usage, making up for the fact that the CSS and
HTML are not minified and packed together.

## Dependencies

[Skeleton](http://getskeleton.com) is a dependency of this project; however, it is included as a part of the
repository. For licensing information, see the copyright notices in the Skeleton files.
