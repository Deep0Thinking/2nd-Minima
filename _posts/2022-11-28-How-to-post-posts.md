---
layout: post
title: How to post posts
tags: this-is-a-tag WoW let's go
description: You could write a brief description here to catch your readers' interests, like this is a post about how to post posts :)
---

First, let's talk about the basic requirements for a valid post file:

- **External requirements**:

  - **Naming**: You need to name your post file with the naming format of "Year-Month-Date-Title.md", for example: "2022-11-28-My-first-post.md". ***(Attention: The file naming does not allow any "space" character, so please make sure to use "-" to replace them.)***

  - **Location**: You need to place your post file under the "**/_posts/**" folder.

  - **tag-page**: (You could temporarily skip this part until you have gotten up to the **tags** part under **Internal requirements** below) Please remember, if you add tags to a post, let's assume one of the tags name is "the-tag-you-add", then you should create a "**the-tag-you-add.md**" file under the "**/tag/**" folder in order to generate a tag-page for the "the-tag-you-add" and with just these contents in that "**the-tag-you-add.md**":

    ```markdown
    ---
    layout: tagpage
    title: "Tag: the-tag-you-add"
    tag: the-tag-you-add
    ---
    ```

    And that tag-page would collect and display all your posts with that tag. In fact, there is a more efficient way to repeat this repetitive procedure, which is to create a python script to help you do that, for more detailed information please click on the solutions link below.

    *The tags and tag-page display solutions are [here](http://longqian.me/2017/02/09/github-jekyll-tag/) provided by [Long Qian](http://longqian.me/aboutme/), great thanks to him!*

- **Internal requirements**:

  - **Predeclaration**:

    Every "**post.md**" file you posted need to have a **Predeclaration** in the form of this at the file's head (beginning) part (including this file: You can see the **Predeclaration** part at the beginning):

    ```markdown
    ---
    layout: post
    title: How to post posts
    tags: this-is-a-tag WoW let's go
    description: You could write a brief description here to catch your readers' interests, like this is a post about how to post posts :)
    ---
    ```

    And let me explain this part line by line:

    - **layout**: post

      Please just write 1 word "post". This means your post that you want to post would use the **post** layout of "**_layouts/page.html**" file.

    - **title**: Please write your post title here.

      In fact, the file name in the **Naming** part of the **External requirements** can be different from the title name here, but it is always a good habit to keep them the same to disambiguate and improve convenience (just like writing the annotation when coding), especially when you want to read or modify these posts files in the future. But if you find a more efficient and effective naming method, you could definitely follow your way.

    - **tags**: Please write your post tag(s) here.

      If you want to put 2 or more tags here, you need to use "space" to separate them, and what can you do if you don't want the tag to be separated, you could use "-" to replace the "space" to combine the words and prevent the breakage in 1 tag. For example: `this-is-a-tag` is 1 tag, `WoW` is 1 tag, `let's go` is 2 tags, they actually break into 2 tags of `let's` and `go` due to the "space" between them.

    - **description**: You could write a brief description in the description part to catch your readers' interests ***(Attention: Please don't leave "space" between ":" and following the word or punctuation in the description part, or your post and description will not be able to display.)*** , like this is a post about how to post posts (Me: It sounds super attractive right? Me again: Hahahahaha, no.) . Or, if you don't like the description part, you could always turn it off in the "**/_config.yml**" file by replacing the `true` in `show_description: true` with `false` or just simply delete that whole line.

  - **Post body part**:

    - **The text language you can use**:

      - **Markdown**

      - **HTML**

      - **CSS**

      - **Javascript**

      Don't worry, you don't need to master these 4 languages to write a post, in fact, using only the Markdown language is basically enough (look at this post file name, its suffix is ".md" and md represents the Markdown language), because Markdown language can support the basic post arrangements and it is super easy and convenient to learn and use. BTW I bet you could master its basic syntax within 5 minutes, then you could be able to write the following Mardown contents too:


<hr>

<br><br>

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<br><br>

```markdown
Look, I *wrote* 6 headings! **Hahahahaha!**
```

Look, I *wrote* 6 headings! **Hahahahaha!**

<br><br>

```markdown
***Nice!***
```

***Nice!***

<br><br>

```markdown
I like ~~playing Xbox games~~ doing homework!
```

I like ~~playing Xbox games~~ doing homework!

<br><br>

```markdown
Here is a [link to google](https://google.com).
```

Here is a [link to google](https://google.com).

<br><br>

```markdown
Here is an inline code: `print("Hello World!")`, it works!
```

Here is an inline code: `print("Hello World!")`, it works!

<br><br>

<pre>
Here is a code block:

```python
a = 3
print(a)
```
</pre>

Here is a code block:

```python
a = 3
print(a)
```

<br><br>

```markdown
Here is a table:

|title 1|title 2|title 3|
|:-|:-:|-:|
|left|middle|right|
|text|text|text|
```

Here is a table:

|title 1|title 2|title 3|
|:-|:-:|-:|
|left|middle|right|
|text|text|text|

<br><br>

```markdown
Here is an ordered list:

1. H
2. E
3. Y
4. !
```

Here is an ordered list:

1. H
2. E
3. Y
4. !

<br><br>

```markdown
Here is an unordered list:

- Play music
  - Open music app
- Do sports
  - Play tennis
- Go to bed
  - turn of the light
    - close your eyes
- Fall asleep
```

Here is an unordered list:

- Play music
  - Open music app
- Do sports
  - Play tennis
- Go to bed
  - turn of the light
    - close your eyes
- Fall asleep

<br><br>

```markdown
Here is a image (of the Github logo):

![github logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png)
```

Here is a image (of the Github logo):

![github logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png)

<br><br>

**However, if you want to add something like a downloadable-file link, a youtube video and a line, etc (just some more complex things?), you could easily embed some HTML code in the .md files to achieve these goals (since using purely Markdown language are not able to realize that) and it is totally valid because the Markdown language are always supportive to the HTML language. In addition to this, please remember that HTML is more expressive than Markdown, though Markdown is more convenient to learn and use.**

BTW, the HTML is also very easy to learn, though it would take more time to master than the Markdown. I strongly recommend you to follow the tutorial of HTML (or other front-end languages) on these 2 cool website (I learned the front-end languages there :) ) :

1. [w3schools](https://www.w3schools.com) (easy to begin with and review, but lack of detailed explanation for the logic behind the code)

2. [MDN Web Docs](https://developer.mozilla.org) (much more comprehensive)

BTW: They are totally free and it would be better if you use both of them to learn :)

<br><br>

```html
<h1> Heading </h1>
<h2> Heading </h2>
<h3> Heading </h3>
<h4> Heading </h4>
<h5> Heading </h5>
<h6> Heading </h6>
```

<h1> Heading </h1>
<h2> Heading </h2>
<h3> Heading </h3>
<h4> Heading </h4>
<h5> Heading </h5>
<h6> Heading </h6>

<br><br>

```html
Here is a downloadable file link:

<a href="https://deep0thinking.github.io/ghp/2022/11/28/How-to-post-posts.html" download>
Click me to download
</a>
```

Here is a downloadable file link:

<a href="https://deep0thinking.github.io/ghp/2022/11/28/How-to-post-posts.html" download>
Click me to download
</a>

<br><br>

```html
Here is an invisible line break:

<br>
```

Here is an invisible line break:

<br>

<br><br>

```html
Here is a horizontal line:

<hr>
```

Here is a horizontal line:

<hr>

<br>

If you want to embed a youtube video, you can first open that video on the youtube, then click on the "Share" button (or just right-click on the video display area) -> click on "Embed" and copy the related HTML code (click on "Copy embed code"), at last paste it inside your post file with some little tricks (and I will explain this on the "Attention" part below). Then you would successfully have an interactive youtube video like this (the example youtube video I embedded here is a awesome video produced by [Veritasium](https://www.youtube.com/@veritasium) !) .

<br><br>

```
<div style="position: relative; width: 100%; padding-bottom: 52.8%;">
<iframe style="position: absolute; width: 100%; height: 100%;" src="https://www.youtube.com/embed/HeQX2HjkcNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

<div style="position: relative; width: 100%; padding-bottom: 52.8%;">
<iframe style="position: absolute; width: 100%; height: 100%;" src="https://www.youtube.com/embed/HeQX2HjkcNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br><br>

***(Attention: When you are trying to embed the HTML code of the video, please make sure to***

  1. Put the embed code inside the part surrounded by`<div style="position: relative; width: 100%; padding-bottom: ???%;">` and `/div` in this form: `<div style="position: relative; width: 100%; padding-bottom: ???%;"> <iframe ... ></iframe> </div>`

  2. The `???` in the 1st rule above represents the width value of the youtube video you want to embed, and you need to calculate that value through right-click on the video display area -> click on "Stats for nerds", then a data block would display on the top left corner of the video display area. Next, find the line of `Viewport / Frames`, like `Viewport / Frames 966x510*2.00 / 0 dropped of 128`, and then do the division: $510/966*100 \approx 52.8$ and replace the `???` with that result (52.8).

  3. Delete the original `width` and `height` parts of the code you embedded (like: ~~width="966" height="510"~~ ), then put `style="position: absolute; width: 100%; height: 100%;"` inside its `iframe` element in this form: `<div style="position: relative; width: 100%; padding-bottom: ???%;"> <iframe style="position: absolute; width: 100%; height: 100%;" ... ></iframe> </div>` (The `...` represents the remain part of the embed code you didn't modify)**

  These 3 steps are to adjust and make the embed video size suitable to all different devices screen size.

  **All in all, considering the 3 rules listed above, you should have this form of code block in order to display the youtube video properly on any devices:**

```html
<div style="position: relative; width: 100%; padding-bottom: ???%;">
  <iframe style="position: absolute; width: 100%; height: 100%;" ... ></iframe>
</div>
```

  ***)***

<br><br>

```
Here is an inline Maths equation: $\frac{\pi}{2}$ is half of pi
```

Here is an inline Maths equation: $\frac{\pi}{2}$ is half of pi

<br><br>

```
Here is a Maths equation block:

<div style="overflow: auto;">
$$
\begin{aligned}
&\lambda \text{ for } \begin{bmatrix}
  \cos(\theta)& -\sin(\theta) & 0\\
  \sin(\theta)&  \cos(\theta)& 0\\
  0& 0&1
\end{bmatrix}
\quad
\Longrightarrow
\quad
\det{
\begin{bmatrix}
  \cos(\theta)-\lambda& -\sin(\theta) & 0\\
  \sin(\theta)&  \cos(\theta)-\lambda& 0\\
  0& 0&1-\lambda
\end{bmatrix}
}=0
\\\\
\Longrightarrow
\quad & \left( (\cos(\theta)-\lambda)(\cos(\theta)-\lambda)(1-\lambda)+0+0 \right)-\left(0+0+(-\sin(\theta))(\sin(\theta))(1-\lambda) \right)=0
\\\\
\Longrightarrow
\quad & \left(\cos^2(\theta)-2\cos(\theta)\lambda+\lambda^2+\sin^2(\theta) \right)(1-\lambda)=0
\\\\
\Longrightarrow
\quad & \left(\lambda^2-2\cos(\theta)\lambda+1 \right)(1-\lambda)=0
\\\\
\Longrightarrow
\quad &
\begin{cases}
  \lambda_1&=1\\
  \lambda_2=\frac{2\cos(\theta)+\sqrt{4\cos^2(\theta)-4}}{2}=\cos(\theta)+i\sin(\theta)&=e^{i\theta}\\
  \lambda_3=\frac{2\cos(\theta)-\sqrt{4\cos^2(\theta)-4}}{2}=\cos(\theta)-i\sin(\theta)&=e^{-i\theta}
\end{cases}
\end{aligned}
$$
</div>
```

Here is a Maths equation block:

<div style="overflow: auto;">
$$
\begin{aligned}
&\lambda \text{ for } \begin{bmatrix}
  \cos(\theta)& -\sin(\theta) & 0\\
  \sin(\theta)&  \cos(\theta)& 0\\
  0& 0&1
\end{bmatrix}
\quad
\Longrightarrow
\quad
\det{
\begin{bmatrix}
  \cos(\theta)-\lambda& -\sin(\theta) & 0\\
  \sin(\theta)&  \cos(\theta)-\lambda& 0\\
  0& 0&1-\lambda
\end{bmatrix}
}=0
\\\\
\Longrightarrow
\quad & \left( (\cos(\theta)-\lambda)(\cos(\theta)-\lambda)(1-\lambda)+0+0 \right)-\left(0+0+(-\sin(\theta))(\sin(\theta))(1-\lambda) \right)=0
\\\\
\Longrightarrow
\quad & \left(\cos^2(\theta)-2\cos(\theta)\lambda+\lambda^2+\sin^2(\theta) \right)(1-\lambda)=0
\\\\
\Longrightarrow
\quad & \left(\lambda^2-2\cos(\theta)\lambda+1 \right)(1-\lambda)=0
\\\\
\Longrightarrow
\quad &
\begin{cases}
  \lambda_1&=1\\
  \lambda_2=\frac{2\cos(\theta)+\sqrt{4\cos^2(\theta)-4}}{2}=\cos(\theta)+i\sin(\theta)&=e^{i\theta}\\
  \lambda_3=\frac{2\cos(\theta)-\sqrt{4\cos^2(\theta)-4}}{2}=\cos(\theta)-i\sin(\theta)&=e^{-i\theta}
\end{cases}
\end{aligned}
$$
</div>

<br>

*And the solution of embedding Latex to display Maths equation on a webpage is provided by [MathJax](https://www.mathjax.org), great thanks to them! For more detailed information, you can go to check the [MathJax Documentation](https://docs.mathjax.org/en/latest/).*

***(Attention: Please make sure to surround the equations block (generally no necessary for the inline equations, unless you write a too long inline formula...) by `<div style="overflow: auto;">` and `</div>`, or that may cause display overflow problem on some devices with narrower screen width. Besides that, if you meet some problem on displaying the Math formula with Mathjax, try to use `\_` and `\*` instead of `_` and `*` in the Mardown in order to trigger the Markdown escape mechanism. If that doesn't help, these information may solve your problem:***

[Different behavior for `$` and for `$$` #2613](https://github.com/mathjax/MathJax/issues/2613)

[Multiple subscripts in one equation error #2081](https://github.com/mathjax/MathJax/issues/2081)

[Problem on Using Mathjax with Jekyll Markdown #830](https://github.com/mathjax/MathJax/issues/830)

***)***

<br><br>

And for the interactive animations, please go to learn the HTML, CSS and Javascript. Websites recommendation:

1. [w3schools](https://www.w3schools.com) (easy to begin with and review, but lack of detailed explanation for the logic behind the code)

2. [MDN Web Docs](https://developer.mozilla.org) (much more comprehensive)

BTW: They are totally free and it would be better if you use both of them to learn :)

<br><br>

Maybe you have already noticed the **fake comments section** below, wanna put it somewhere else or delete it? Click it for more information ~
