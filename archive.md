---
layout: page
title: Archive
---

### Papers published by me (Full-Display Style) :

<!-- The whole display part for Full-Display Style -->
<div class="Group-Container-Full-Display">

	<!-- The least unit of a display item -->
	<div class="Single-Container">

		<!-- I separate the part of (Class) ImgBorder and ImgOpacity because that would not affect the opacity of the border part when hover over the (Class) Single-Container -->
		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<!-- The least unit of an option, and you can add more options as you want up to 4 -->
			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">PDF</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 4</div></a>

		</div>

	</div>

</div>

### Books published by me (Scrolling-Display Style) (you can scroll this part horizontally):

<!-- The whole display part for Scrolling-Display Style -->
<div class="Group-Container-Scrolling-Display">

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">PDF</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 4</div></a>

		</div>

	</div>

</div>

<hr>





<h3 style="color: red">Instruction part begins</h3>

If you want to decorate it in your way, you may have to learn Jekyll and some front-end programming languages.

If you don't like this page or think this page is somehow needless, you can easily remove it through deleting the "**/new-page.md**" file and the `- new-page.md` line under the "**/_config.yml**" file.

The following contents show 2 display block style:

1. Full-Display Style

2. Scrolling-Display Style

And both of them support adding items ( `<div class="Single-Container">...</div>` , which is **the least unit of a display item** within a display block) with no max quantity limit. So you can edit them by deleting or adding **this code block** inside the Full-Display Style block `<div class="Group-Container-Full-Display">...</div>` or the Scrolling-Display Style block `<div class="Group-Container-Scrolling-Display">...</div>` :

```html
<div class="Single-Container">

	<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

	<div class="Text">Title</div>

	<div class="Selection">

		<!-- The least unit of an option, and you can add more options as you want up to 4 -->
		<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

	</div>

</div>
```

And please note that the `src` value in every display item are `src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif"` , and that link address determines the cover of the corresponding item, so you use the same method of **Instruction part 1** stated in the [**about**](https://deep0thinking.github.io/2nd-Minima/about.html) page to change the cover.

Finally, after getting familiar with these procedure, you can delete this instruction part (from `<h3 style="color: red">Instruction part begins</h3>` to `<h3 style="color: red">Instruction part ends</h3>`) safely.

<h3 style="color: red">Instruction part ends</h3>

<hr>

<h1><a href="https://github.com/Deep0Thinking/2nd-Minima#2.3">fake comments section</a></h1>
