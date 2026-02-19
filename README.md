# UVA Web Developer Practicum

## About
Author: Christopher Cox

This is a two-part practicum, the first being to convert a transcript from .docx to .html. The page is hosted at `/uva-practicum/transcripts`, and the raw html version of the file can be found at `/src/transcript/transcript.html`.

The second part was to build out a web page from a provided .psd file. This is hosted at `/uva-practicum/numbers`.

## Tooling
- Vite (deployment)
- React (framework)
- Material UI (styling and some components)
- MUI X (charting)
- Motion (animation)
- React-Router (page routing)

## Notes:

For the Transcript portion of the assignment, I was unsure how many liberties to take with the quotes. 3 articles were provided with examples of the final format of a transcript, so I referenced a number of things from those articles to come to the solution I did:
- Styling (font family, spacing, text color, etc.)
- Grammar and Syntax (how do the articles break up multi-sentence quotes? How do they introduce new voices?)

I also double-checked the grammar and spelling in the original transcript in case of typos, though I believe I only found one, a comma where there should have been a period.

Going in, I was very familiar with most of the tooling. The only exception is Motion, which I have not used before. Much of my effort (and enjoyment) with the project came as a result of learning how to utilize it for animation. I particularly enjoyed figuring out how to make a 'typewriter' style effect for the quotes at the bottom of the '2024 By The Numbers' Page.

If I could go back and change anything, I think I would investigate a different charting library. I settled on MUI X without considering alternatives because of compatibility and familiarity with the parent Material UI library, but I found it a little cumbersome to deal with. I also would try to leverage React better - most of what I did ended up being mostly Motion-enhanced HTML. I think this is mostly because of my unfamiliarity with Motion leading me to stick to relatively basic implementations. In the future I want to investigate some of its state hooks and other React-specific capabilities to see how that can improve the animation and feel of a site.

## Follow-on Tasks
Now that the design has been made responsive for small mobile devices, the last remaining major group of devices is tablets, which fall in the space between the current media queries I have set up (990px and below for phones, then 2200px and below for average-sized computer monitors).

Another task I want to do is to fix up the root page. This is mostly a relic of having to use `HashRouter` instead of `BrowserRouter` since I'm hosting on github pages (which doesn't accept the underlying tech that makes `BrowserRouter` work), but I don't like how the buttons and the title are just hovering at the top. I want to put them in a side menu that is opened with a button, perhaps a sticky one that follows the screen as you scroll.

Finally, I would like to clean up the dark mode a little bit. The main thing holding it back are the images for the graduate degree groups. Since they are all UVA Blue, I can't make the background color for dark mode as dark as I'd like it to be otherwise they become very difficult to find in the screen. I'd need to use Photoshop or another tool to change the color of those images to white so they can still pop against the background in dark mode.