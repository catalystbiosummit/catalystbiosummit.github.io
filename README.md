# catalystbiosummit.github.io
Minimalist website for the Catalyst Collaborative Biosecurity Summit


### Starting a simple HTTP server
We're all using Python 3. Hopefully you're not using Python 2.

    python -m http.server

### Sass
We're committing compiled CSS to the repo. You can do so automatically with a git hook. Add the following to an
executable file `.git/hooks/pre-commit`:

    #!/usr/bin/env bash

    # Make sure that the 'sass' command exists
    # @see http://stackoverflow.com/a/677212/329911
    command -v sass >/dev/null 2>&1 || {
    echo >&2 "Sass does not appear to be available. Unable to re-compile stylesheets";
    exit 1;
    }

    # Define our paths and stylesheets
    sass assets/sass/main.scss assets/css/main.css --style compressed
    echo "Compiled main.scss -> main.css (compressed)"

    exit 0

Alternatively, you can run:

    sass assets/sass/main.scss assets/css/main.css

before committing.
