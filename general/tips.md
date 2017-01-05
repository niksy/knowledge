# Tips

Development and design tips for modern web and responsive (RWD) designs I’ve found and collected along the way.

---

[Even Faster Images using HTTP2 and Progressive JPEGs](http://calendar.perfplanet.com/2016/even-faster-images-using-http2-and-progressive-jpegs/)

Multiple progressive or interlaced images render faster on HTTP2 thanks to Multiplexing

---

[RWD Bloat](https://speakerdeck.com/davatron5000/rwd-bloat)

* Throttling is super important since most of the world doesn’t have Google Fiber
* Designers, your job is not done until the site ships
* Performance is everyone’s job. Not just developers

---

[Breaking news at 1000ms](https://speakerdeck.com/patrickhamann/breaking-news-at-1000ms-front-trends-2014)

* 3000 surveyed users rated "speed" as 2nd most important key product driver (out of 17), only after "easy to find content"
* Core content should be delivered first and should render within 1000ms, and then extras should be progressively enhanced
* Everyone must be involved by baking performance into your workflow from day one
* Set a performance budget; measure, optimise and repeat
* Performance is a requirement; not a feature

---

https://timkadlec.com/2014/01/fast-enough/#comment-1200946500

Paul Irish:

> My answer to how fast is fast enough? A Speed Index of under 1000.

> And for professionals that get there, they should shoot for delivering the critical-path view (above the fold) in the first 14kb of the page. That way you are guaranteed to be serving the initial view of the site within the first RTT.

---

https://docs.google.com/presentation/d/1MtDBNTH1g7CZzhwlJ1raEJagA8qM3uoV7ta6i66bO2M/present?slide=id.g3eb97ca8f_1194

Measuring performance by the KB is like measuring effectiveness of your diet by the pound. Measuring performance by number of requests is like measuring your diet by number of things you ate - in both cases, who cares about what you actually ate, right?

* not all requests are made equal: some are blocking / critical, some are more expensive depending on when they're made
* not all nutrients are made equal: some release energy faster, some slower, some are better for you than others
* not all bytes are made equal: the first 14KB are extremely important, bytes of different content-types have different impact on performance, etc.

Aggresive, but good goals:

* Deliver a fast mobile web page load
	* Show the above-the-fold content in under 1 second
	* Serve above-the-fold content, including critical path CSS, in first 14kB of response
* Maximum of 200ms server response time
* SpeedIndex under 1000

---

[10 things I learned making the fastest site in the world](https://hackernoon.com/10-things-i-learned-making-the-fastest-site-in-the-world-18a0e1cdf4a7#.yuo24gqhm)

Writing a fast website is like raising a puppy, it requires constancy and consistency (both over time and from everyone involved). You can do a great job keeping everything lean and mean, but if you get sloppy and use an 11 KB library to format a date and let the puppy shit in the bed just one time, you’ve undone a lot of hard work and have some cleaning up to do.

---

https://jakearchibald.com/2016/fun-hacks-faster-content/

---

https://mobile.twitter.com/StuRobson/status/798623606615998464

> Flexible box layout for components; Grid for layouts

---

https://mobile.twitter.com/jaffathecake/status/794456959625887744

> Test a site you work on in Chrome Devtools, 3g, with 5x CPU slowdown. Does it take over 3s for the primary content to be usable?

---

[How the Web Became Unreadable](https://backchannel.com/how-the-web-became-unreadable-a781ddc711b6#.xq0e4kt41)

To arbitrarily throw away contrast based on a fashion that “looks good on my perfect screen in my perfectly lit office” is abdicating designers’ responsibilities to the very people for whom they are designing.

---

[Chasing Tools](https://timkadlec.com/2016/10/chasing-tools/)

---

[You Might Need JavaScript](http://hugogiraudel.com/2016/10/13/you-might-need-javascript/)

[…] JavaScript is necessary for interactive modules to be fully accessible for people using assistive technologies (such as a screen reader for instance).

---

https://mobile.twitter.com/davatron5000/status/771416405317005312

> How we doing today, fam? Is your website usable on low-end 3G devices in under 3s? No? That's okay, but let's get there.

---

[Ethical Web Development](https://ethicalweb.org/)

As web developers, we are responsible for shaping the experiences of user's online lives. By making choices that are ethical and user-centered, we create a better web for everyone.

---

[Development best practices](https://github.com/timoxley/best-practices)

Tidbits of developer best practices from around the web.

---

[Unfolding Critical CSS](https://medium.com/@jpdevries/unfolding-critical-css-91619401b4e#.ye7xsxy15)

Critical CSS focuses so much on optimizing web pages it looses focus of optimizing websites. If we can agree a website is a series of web pages, we can agree optimizing for a single page does not translate to optimizing for a site. Web pages are not websites, so decide before you start optimizing be sure and decide which one to target.

---

[A faster FT.com](http://engineroom.ft.com/2016/04/04/a-faster-ft-com/)

The speed of the site negatively impacts a user’s session depth, no matter how small the delay.

Slow sites also have a detrimental effect on the number of articles people read.

Largely, the slower the site, the greater the effect.

This trend is borne out over time and typically worsens with continued delays.

---

[Custom UI Elements Are Bad For Accessibility. Here’s Why](http://www.customerservant.com/custom-ui-elements-are-bad-for-accessibility-heres-why/)

For one thing, you’re reinventing a wheel that’s worked well now for a very long time. For another, you’re creating more work for yourself. And finally, it’s bad for accessibility, which effects a lot of users, and I don’t just mean blind ones.

---

[Maybe we could tone down the JavaScript](https://eev.ee/blog/2016/03/06/maybe-we-could-tone-down-the-javascript/)

---

[Performance is a feature](https://peterchamberlin.com/fast.php)

Performance is not a technical problem.

Performance isn’t a technical niggle that "we should get around to fixing". It is an opportunity to grow your audience, to grow your business, to convert more sales (or whatever it is eCommerce people do).

Performance is an opportunity, and a risk, the same way that a redesigned template is. Or a new logo. Or a change to the colour of a button CTA.

---

[ROCA](http://roca-style.org/)

A collection of simple recommendations for decent Web application frontends.

---

[Why I hate your Single Page App](https://medium.com/@stilkov/why-i-hate-your-single-page-app-f08bb4ff9134#.ayuw2ljje)

[…]  think about what makes the web the web. The single most important feature of the web is that you can link to individual things.

---

[Enduring CSS presentation](http://ecss.io/slides1/#/25)

Two years ago I wrote a book where I was preaching DRY code, but after working on enduring projects (BBC News and theguardian.com responsive sites), it's "decoupling" that became more important to me. — Kaelig Deloumeau-Prigent

---

[Helping VIPs Care About Performance](https://24ways.org/2015/helping-vips-care-about-performance/)

---

[Page Weight Doesn't Matter](https://www.nateberkopec.com/2015/11/05/page-weight-doesnt-matter.html)

The total size of a webpage, measured in bytes, has little to do with its load time. Instead, increase network utilization: make your site preloader-friendly, minimize parser blocking, and start downloading resources ASAP with Resource Hints.

---

[Tweet: @scottjehl](https://twitter.com/scottjehl/status/598858314894725120)

> Test if your site is too slow:

> 1. Open http://webpagetest.org 
> 2. Add your url, Moto E, 3G
> 3. Start

> Speed Index > 3k?
> Your site is too slow.

---

[Fixing Performance in the Web Stack](http://ponyfoo.com/articles/fixing-web-performance)

---

[More Weight Doesn't Mean More Wait](http://www.filamentgroup.com/lab/weight-wait.html)

---

[Progressive Enhancement is not about JavaScript availability.](http://christianheilmann.com/2015/02/18/progressive-enhancement-is-not-about-javascript-availability/)

This is what progressive enhancement protects us and our users from. Instead of creating a solution and hoping things work out, we create solutions that have a safety-belt. Things can not break horribly, because we planned for them.

Why don’t we do that? Because it is more work in the first place. However, this is just intelligent design. You measure twice, and cut once. You plan for a door to be wide enough for a wheelchair and a person. You have a set of stairs to reach the next floor when the lift is broken. Or – even better – you have an escalator, that, when broken, just becomes a set of stairs.

Of course I want us to build beautiful, interactive and exciting experiences. However, a lot of the criticism of progressive enhancement doesn’t take into consideration that nothing stops you from doing that. You just have to think more about the journey to reach the final product. And that means more work for the developer. But it is very important work, and every time I did this, I ended up with a smaller, more robust and more beautiful end product.

---

[Performance Budget Metrics](http://timkadlec.com/2014/11/performance-budget-metrics/)

Use rule based metrics to make sure you haven’t overlooked simple optimizations.

Use quantity based metrics as guides to help designers and developers make better decisions about what goes onto a page.

But always back those up with a strictly enforced budget using a metric (like SpeedIndex) that is more directly related to the overall experience to ensure that the result feels fast. After all, that’s why you’ve decided to use a performance budget in the first place.

---

[Does a print CSS file slow your site down?](https://www.nccgroup.com/en/blog/2014/10/does-a-print-css-file-slow-your-site-down/)

However, if you absolutely have to have a print CSS file, these tests show that a) it’s still going to affect render time in some browsers and b) some visitors to your site will enjoy a better experience if you put it at the end of the end of the HTML document. Better still, use JavaScript to add a link to the print stylesheet after the onload event.

---

[How we make RWD sites load fast as heck](http://filamentgroup.com/lab/performance-rwd.html)

---

[Progressive enhancement is still important](http://jakearchibald.com/2013/progressive-enhancement-still-important/)

---

["RWD Is Bad for Performance" Is Good for Performance](http://timkadlec.com/2014/07/rwd-is-bad-for-performance-is-good-for-performance/)

---

[Font Size Idea: px at the Root, rem for Components, em for Text Elements](http://css-tricks.com/rems-ems/)

---

[The Three Unsexy Pillars™ Of Web Dev](http://aerotwist.com/blog/web-components-and-three-unsexy-pillars/)

I have this idea that there are three underpinning concerns every developer should have when they build their projects: **accessibility**, **security** and **performance**. You can immediately see how one could affect the others, but their relationship is nuanced. They’re not sexy, though, because you’re never going to persuade the people paying for your project (unless they’re savvy) that these unseen aspects are critical. Security is probably the easiest, I’d wager, but typically only FUD powers their inclusion.

There are two further things I notice about them:

* **They’re only a problem when they’re missing.** Ship something which lacks one or more of the Three Unsexy Pillars™ and you’re going to have a bad time.
* **They’re not unit tests.** Try and retrofit any of them to your project and you’re going to have a bad time.

They’re basic building blocks of building well and they’re more a mindset every good developer should have than anything else.

---

Form tips

* https://twitter.com/lukew/status/439115858778943488
* https://twitter.com/lukew/status/439118619704717312
* https://twitter.com/StuRobson/status/576023704716623872

---

[So, You’re Writing A Responsive Images Script](http://filamentgroup.com/lab/respimg_scripts/)

What happens when JavaScript breaks? […]

So what’s the optimal approach? The best answer we’ve been able to come up with is: “It depends.”

On a very JavaScript-heavy site with multiple third-party scripts, advertisements, and so on—also known as “multiple potential points of failure”—it may be worth incurring the extra overhead of a wasted request. In this case, you’ll want to take tremendous care to ensure that your images are as compressed as possible, to mitigate the damage to whatever context will receive the wasted request.

On a site that uses very little JavaScript, it may be best to use JavaScript to alter an `src`-less `img`, or generate the `img` completely from scratch. In the latter case, you’ll want to provide a fallback `img` with a real `src` in a `noscript` tag; the contents of `noscript` aren’t subject to prefetching, and it provides a fallback for that non-zero number of users with JavaScript disabled with minimal effort.

---

[Why You Should Focus on Speed](http://cantina.co/2013/09/10/why-you-should-focus-on-speed/)

There’s an idea in web development called the “Golden Second,” also known as the “1000 ms time to glass challenge.” It’s the idea that websites should be served and rendered within a second. After that first second, customers begin bouncing from a site.

[…]

Building sites for mobile or desktop isn’t the question that we should be asking. Instead, we should ask ourselves if whatever it is that we’re adding to page helps us serve or render that page within a second.

The answers is simple: everything we build should now strive for the Golden Second.

---

[Lesson's learnt building the Guardian](https://gist.github.com/phamann/5844442)

Answering the question: what have you learnt starting from scratch and building a mobile-first next generation web platform for the Guardian?

---

[Avoiding Unnecessary Paints](http://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/)

The last thing I want is to have to do this paint work unnecessarily, and especially so during a scroll when there's other work to be done! So how can we stop this from happening? As it happens the fix is pretty simple to implement. The trick here is to attach a `scroll` handler that will disable hover effects and set a timer for enabling them again. That means we are guaranteeing that when you scroll we won't need to perform any expensive interaction paints. When you've stopped for long enough we figure it's safe to switch them back on again.

---

[Tweet: @jaffathecake](https://twitter.com/jaffathecake/status/343038226136698880)

Don't split articles onto multiple pages for mobile. If my radio is active, and has made a connection, use it, give me the lot. It's faster.

---

[Designing for Breakpoints](http://alistapart.com/article/designing-for-breakpoints)

When thinking about major breakpoints, remember to think about device classes. If you’re thinking about smartphones, tablets, laptops/desktops, TVs, and game consoles, for example, you’re heading in the right direction. If you’re thinking in terms of brand names and specific operating systems, you’re on the wrong track. The idea is to think in terms of general device classifications and, sometimes, device capabilities.

Minor breakpoints are conditions that, when met, trigger small changes in your design. An example would be moving form labels from above text fields to the left of those fields, while the rest of the design remains the same.

---

[Using HTML5 prerendering to speed up a multi-page registration process](http://www.holovaty.com/writing/prerendering/)

A multi-page form, as in a registration process, is a great use-case for prerendering. When you sign up for a Soundslice account, for example, first you get a form where you specify your username and password. Then, when you submit that, you get a form where you optionally upload an avatar and enter a profile. Then, when you submit that, you get the welcome/tutorial page. This is a very linear thing, where there's a very high probability that a user is visiting those pages directly in succession.

---

[Providing The Best Mobile User Experience Possible](http://mobile.smashingmagazine.com/2013/05/14/providing-the-best-mobile-user-experience-possible/)

Purely client-side approaches such as RWD and PE can make Web pages accessible on smartphones. For companies and organizations, this means that supporting mobile devices could be cheaper now than it was a couple of years back. Yet, these savings come at the cost of sacrificing certain aspects of a full-fledged cross-channel Web offering.

Large organizations may still want to adopt server-side device detection in some form to deliver a great UX to everyone who accesses their websites. While RWD and PE strategies can (and should) be adopted by companies, a hybrid client- and server-side approach is the most likely to deliver a great service to desktop, tablet and mobile users alike.

---

[How Should Your Mobile and Desktop Sites Differ?](http://baymard.com/blog/content-on-mobile-vs-desktop)

So to answer the question we started out with – “When defining, designing and structuring your mobile commerce site; should you slim down content and features, or try to stuff it all in the mobile version as well?” – we can say that all content (products and pages) should be in the mobile site but the articulation and formatting of the content may be different, and the site’s feature set should be different where it makes sense.

---

[Behavioral Breakpoints: Beyond Media Queries](http://blog.cloudfour.com/behavioral-breakpoints/)

[…]“the points where certain aspects of a website or web application change depending on specified conditions.”

[…]where the breakpoint is the state of the trigger button. Yes, the state changes at 40em as a result of a CSS media query, but it’s the state we care about, not the media query (or window width) that did it.

---

[One less JPG](http://fourkitchens.com/blog/2013/04/24/one-less-jpg)

Before you go worrying about how to minify every last library or shave tests out of Modernizr, try and see if you can remove just one photo from your design. It will make a bigger difference.

---

[Tweet: @fchimero](https://twitter.com/fchimero/status/325613014264983557)

Hey responsive web! Don’t forget to reduce your line-height on smaller viewports. Smaller horizontal measure requires less vertical space.

---

[Responsive Maps](http://trentwalton.com/2013/04/11/responsive-maps/)

[…]users can get stuck if the embedded map happens to fill a viewport at any given time. If there’s no piece of the actual page in site, there’ll be nothing to touch or swipe from.

To avoid this, I’ll usually set the container closer to 90%. This provides rails on the right and left sides that ensure there’s always part of the page to swipe.

---

[It’s not a web app. It’s an app you install from the web.](http://blog.forecast.io/its-not-a-web-app-its-an-app-you-install-from-the-web/)

If you can’t find a way to do something that doesn’t feel choppy or awkward, then just don’t do it. Design your interface around the technology you have, not the technology you wish you had.

---

[Deploying JavaScript Applications](http://alexsexton.com/blog/2013/03/deploying-javascript-applications/)

[…] the idea is if that if you loaded one less jpeg on your site, you could fit in quite a bit of unshaved JavaScript in its place. Consider this the next time you are sacrificing readability or compatibility for file size.

For these [image] files, I’d suggest using a mechanism to lazy load these media files. Make sure you’re doing smart things with scroll event handlers (hint: throttling the hell out of them), but you don’t want to load 50 avatars if the user is 1000px away from that part of your app.

---

[Responsive web design: the war has not yet been won](http://elliotjaystocks.com/blog/responsive-web-design-the-war-has-not-yet-been-won/)

RWD is about making your site adaptable to any scenario, without worrying about specific devices and their proprietary dimensions.

RWD doesn’t need to take more time and therefore doesn’t need to cost your clients more money. At least not after you’ve rethought your approach to web design, anyway.

However, there may still be some of you out there who are still asking the simple question, ‘but is it worth it?’[…]  
The answer, as always, is: ‘it depends.’  
Some desktop-optimised designs work fine just as they are on tablets, which was one of GoCardless’ main points, and probably the main reason they saw RWD as simply designing for mobile. But aside from just telling you that responsive sites are far more likely to be future-proof as the plethora of computing devices grows, it’s worth looking at some actual statistics.

---

[An Event Apart: Responsive and Responsible](http://www.lukew.com/ff/entry.asp?1684)

Being responsive from a layout perspective doesn’t preclude being responsive from a performance perspective.

Most of poor performance is our fault: the average page in 2012 weighs over a megabyte. Much of this weight comes form blocking assets like Javascript and CSS that prevent the page from being displayed.

CSS is a blocking element: browsers wait until it is all loaded before displaying a page. This prevents un-styled content from showing up.

Images don’t block page rendering but they can negatively impact page size and data plans.

Javascript is the second largest part of our pages and it blocks page rendering until loaded.

Start by loading the smallest amount of Javascript you can. Use it to determine what to load next. Initial Javascript: load feature tests, essential polyfills, asset loader, and a script loader.

---

[Tweakpoints](http://adactio.com/journal/6044/)

There are the points at which the layout needs to change drastically in order for the content not to look like crap—those media queries can legitimately be called breakpoints.[…]

[…]smaller adjustments to margins, font sizes …the kind of changes that came about from testing on phones and tablet[…] It feels a bit odd to call them breakpoints, as though the layout would “break” without them. Those media queries are there to tweak the layout. They’re not breakpoints; they’re tweakpoints.

---

Chris Coyier summarizing [article by Tim Kadlec on performance budget](http://timkadlec.com/2013/01/setting-a-performance-budget/)

If you are going to take performance seriously (instead of just paying lip service to it or chipping away at it) set hard limits that your site will not cross. Say something like 300k total page weight, 25 requests, and 100ms response time. Nothing may exceed that. If something does, it's all-hands-on deck to fix it. Treat it like a major bug or downtime. If discussing something new that would cross the line, something else needs to be optimized or removed, or it's not added.

---

[An Event Apart: Rolling Up Our Responsive Sleeves](http://www.lukew.com/ff/entry.asp?1494)

Simplify before you suppress content. Simply hiding elements because they don’t fit is problematic. You need to have a discussion on what’s critical and what isn’t.

Ads are traditionally sold based on size and position on a page. Following their responsive design, The Boston Globe sold ads based on how they are promoted on the page instead.

Boston Globe put empty DIVs on the page where ads will go and turned them on or off at different resolution breakpoints. Javascript looped the page looking for open ad slots and wrote ads in when the page was resized.

---

[An Event Apart: Properties of Intuitive Web Pages ](http://www.lukew.com/ff/entry.asp?1621)

Little changes to a site over time are often a better approach than major redesigns. “We’ll be successful if the day we go live, no one notices.”

---

[Great Works of Fiction Presents: The Mobile Context](http://www.the-haystack.com/2012/07/09/great-works-of-fiction-presents-the-mobile-context/)

Let me make a long story short: just make quality, relevant content with appropriate tasks, and offer all of these to all users, unless said content or functionality is dependent upon device capabilities (such as a camera). Then make it easy for the user to decide what it is they want to do. It’s like… web development all over again, isn’t it?

---

[Tweet: @markboulton](https://twitter.com/markboulton/status/267991619607871490)

The single biggest mistake I see with #rwd is designers don't alter vertical space when horizontal space is reduced.

---

[Setting a Performance Budget](http://timkadlec.com/2013/01/setting-a-performance-budget/)

Anytime you want to add something to a page, you need to ensure it stays within budget. Steve Souders talked about the three options you have if something does not fit within the budget:

* Optimize an existing feature or asset on the page.
* Remove an existing feature or asset from the page.
* Don’t add the new feature or asset.

Just be sure to define the budget early on. Defining a performance budget after you’ve already finalized the appearance of a site limits its effectiveness. It may still help to guide decisions about plugins and so on, but deciding a page can’t exceed 500kB when a mock-up containing three carousels and a full-screen high-resolution background image has already been approved isn’t going to do you much good.

---

[Windows on the Web](http://alistapart.com/column/windows-on-the-web)

It’s time to stop imagining that smartphones, tablets, and desktops are containers that each hold their own content, optimized for a particular browsing or reading experience. Users don’t think of it that way. Instead, users imagine that each device is its own window onto the web.

---

[The Web Aesthetic](http://www.alistapart.com/articles/the-web-aesthetic/)

The BBC News mobile site is a great example of progressive enhancement. The raw HTML source references just two images: the BBC logo, and an image for the main story. Every device receives this, and pages can weigh as little as 28kb—quite a feat in the world of 5Mb websites.

When accessed on more powerful devices like newer smartphones, tablets, and desktop computers (those that can "cut the mustard"), an image is displayed for each story. These images have been deemed “nice to have”—enhancements to the core experience that are conditionally requested after the basic page has loaded.

---

[Responsive Design on (performance) budget](http://clearleft.com/thinks/responsivedesignonabudget/)

Suddenly discussions about what could or could not go in the design felt like conversations, rather than just the developer constantly saying “no!”. You want a huge header image at the top of the page? Sure. But that’s 100k of your budget used up, so you’ll have to lose a weight or two of web font to bring things back under the limit. Or maybe we can claw some of that back by removing the slider, and save on both JS and the extra images?

---

[The Post-PSD Era - A problem of expectations](http://danielmall.com/articles/the-post-psd-era/)

Instead, we should be selling beautiful and easy access to content, agnostic of device, screen size, or context. If you can get your client to believe in the sales process that you’ll do that for them, they won’t care what the site looks like.

---

[Giving CSS Animations and Transitions Their Place](http://24ways.org/2012/giving-css-animations-and-transitions-their-place)

Putting all your animations in one file is a huge help for code organization. Even if you opt for a name less literal than animations.css, you’ll know exactly where to go for anything CSS animation related. That saves time and effort when it comes to editing and maintenance. Keeping track of which animations are still currently used is easier when they’re all grouped together as well. And as an added bonus, you won’t have to look at all those horribly unattractive and repetitive prefixed @-keyframe rules unless you actually need to.
