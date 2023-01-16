---
layout: page
title: Archive
---

<head>

	<style>
		.Width
		{
			width: 100%;
		}

		.Group-Container-Full-Display
		{
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			flex-wrap: wrap;
		}

		.Group-Container-Scrolling-Display
		{
			display: flex;
			flex-direction: row;
			overflow: auto;
		}

		.Single-Container
		{
			position: relative;
			width: 170px;
			min-width: 170px;
			margin: 11px;
			height: 100%;
			text-align: center;
			cursor: pointer;
			display: flex;
	    align-items: center;
		}

		.ImgBorder
		{
			transition: 0.3s;
			display: inline-block;
	    width: 100%;
	    height: 100%;
	    border: 4px solid;
	    border-color: black;
		}


		.Single-Container:hover .ImgBorder
		{
			border-color: DodgerBlue;
			transform: scale(1.1);
			transition: 0.3s;
		}

		.ImgOpacity
		{
			opacity: 1;
			width: 100%;
			transition: 0.3s;
		}

		.Single-Container:hover .ImgOpacity
		{
			opacity: 0.15;
			transition: 0.3s;
		}

		.Text
		{
			color: black;
			font-size: 20px;
			text-decoration: none;
			opacity: 0;
			transition: 0.3s;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 75%;
			justify-content: center;
		}

		.Single-Container:hover .Text
		{
			opacity: 1;
			color: black;
			text-decoration: none;
		}

		.Text:visited
		{
			text-decoration: none;
			color: black;
		}

		.Selection
		{
			color: black;
			font-size: 20px;
			text-decoration: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 75%;
			height: 100%;
			display: none;
			opacity: 0;
			transition: 0.3s;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
		}

		.Single-Container:hover .Selection
		{
			opacity: 1;
			transition: 0.3s;
		}

		.Option
		{
			position: relative;
			border: black solid 3px;
			padding: 3%;
			transition: 0.3s;
			color: black;
			text-decoration: none;
			width: auto;
		}

		.Option:hover
		{
			border-color: DodgerBlue;
			transform: scale(1.1);
			transition: 0.3s;
			color: black;
		}

	</style>

	<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

</head>



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
			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">PDF</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 4</div></a>

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

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">PDF</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 4</div></a>

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
		<a class="Width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

	</div>

</div>
```

And please note that the `src` value in every display item are `src="https://thumbs.gfycat.com/MellowEvergreenAfricanelephant-size_restricted.gif"` , and that link address determines the cover of the corresponding item, so you use the same method of **Instruction part 1** stated in the [**about**](https://deep0thinking.github.io/2nd-Minima/about.html) page to change the cover.

Finally, after getting familiar with these procedure, you can delete this instruction part (from `<h3 style="color: red">Instruction part begins</h3>` to `<h3 style="color: red">Instruction part ends</h3>`) safely.

<h3 style="color: red">Instruction part ends</h3>





<script>

	<!-- Toggle Display (none <-> block) -->
	var x = document.getElementsByClassName("Text");
	var y = document.getElementsByClassName("Selection");
	var z = document.getElementsByClassName("Single-Container");

	for (var i = 0, len = x.length; i < len; i++)
	{
		(function(index){
			z[i].onclick = function(){

			  if (x[index].style.display === "none")
				{
			    x[index].style.display = "flex";
	        y[index].style.display = "none";
			  }

				else
				{
			    x[index].style.display = "none";
	        y[index].style.display = "flex";
			  }

			}

		})(i);

	}

</script>

<hr>

<h1><a href="https://github.com/Deep0Thinking/2nd-Minima#2.3">fake comments section</a></h1>
