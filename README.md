# catalystbiosummit.github.io (archived)

Archive of [Catalyst](https://catalystbiosummit.com/), a one-day collaborative
biosecurity summit held in San Francisco on February 22, 2020. The site is no
longer updated.

It's plain static HTML served by GitHub Pages: `index.html`, `retrospective.html`
(the organizers' retrospective, originally posted to the
[EA Forum](https://forum.effectivealtruism.org/posts/zda3ewg65XZxxdkeA/retrospective-on-catalyst-a-100-person-biosecurity-summit)),
and one stylesheet. There is no build step and no JavaScript; `.nojekyll` tells
Pages to serve the files as-is. The original Sass/jQuery version is in git history.

To preview locally:

    python3 -m http.server

(GitHub Pages serves `/retrospective` from `retrospective.html`; the simple
Python server needs the `.html` suffix.)

Design adapted from Paradigm Shift by [HTML5 UP](https://html5up.net), used under
the CCA 3.0 license (see `LICENSE.txt`).
