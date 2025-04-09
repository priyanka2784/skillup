const cssData = {
  title: "CSS Courses",
  topics: [
    {
      name: "CSS Introduction",
      content: `CSS is the language we use to style a Web page.
.       What is CSS?
CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files
CSS Demo - One HTML Page - Multiple Styles!
Here we will show one HTML page displayed with four different stylesheets. Click on the "Stylesheet 1", "Stylesheet 2", "Stylesheet 3", "Stylesheet 4" links below to see the different styles:


ADVERTISEMENT

Why Use CSS?
CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

CSS Example
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
CSS Solved a Big Problem
HTML was NEVER intended to contain tags for formatting a web page!

HTML was created to describe the content of a web page, like:

<h1>This is a heading</h1>

<p>This is a paragraph.</p>

When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.

To solve this problem, the World Wide Web Consortium (W3C) created CSS.

CSS removed the style formatting from the HTML page!

If you don't know what HTML is, we suggest that you read our HTML Tutorial.

CSS Saves a Lot of Work!
The style definitions are normally saved in external .css files.

With an external stylesheet file, you can change the look of an entire website by changing just one file!
# css syntax:-
CSS Syntax
A CSS rule consists of a selector and a declaration block.

CSS Syntax
CSS selector

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

Example
In this example all <p> elements will be center-aligned, with a red text color:

p {
  color: red;
  text-align: center;
}
Example Explained
p is a selector in CSS (it points to the HTML element you want to style: <p>).
color is a property, and red is the property value
text-align is a property, and center is the property value
You will learn much more about CSS selectors and CSS properties in the next chapters!


      `,
    },
    {
      name: "CSS Selector",
      content: `A CSS selector selects the HTML element(s) you want to style.

CSS Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

Simple selectors (select elements based on name, id, class)
Combinator selectors (select elements based on a specific relationship between them)
Pseudo-class selectors (select elements based on a certain state)
Pseudo-elements selectors (select and style a part of an element)
Attribute selectors (select elements based on an attribute or attribute value)
This page will explain the most basic CSS selectors.The CSS element Selector
The element selector selects HTML elements based on the element name.

Example
Here, all <p> elements on the page will be center-aligned, with a red text color: 

p {
  text-align: center;
  color: red;
}
The CSS id Selector
The id selector uses the id attribute of an HTML element to select a specific element.

The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (#) character, followed by the id of the element.

Example
The CSS rule below will be applied to the HTML element with id="para1": 

#para1 {
  text-align: center;
  color: red;
}
Note: An id name cannot start with a number!



The CSS class Selector
The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period (.) character, followed by the class name.

Example
In this example all HTML elements with class="center" will be red and center-aligned: 

.center {
  text-align: center;
  color: red;
}
You can also specify that only specific HTML elements should be affected by a class.

Example
In this example only <p> elements with class="center" will be red and center-aligned: 

p.center {
  text-align: center;
  color: red;
}
HTML elements can also refer to more than one class.

Example
In this example the <p> element will be styled according to class="center" and to class="large": 

<p class="center large">This paragraph refers to two classes.</p>
Note: A class name cannot start with a number!

The CSS Universal Selector
The universal selector (*) selects all HTML elements on the page.

Example
The CSS rule below will affect every HTML element on the page: 

* {
  text-align: center;
  color: blue;
}
The CSS Grouping Selector
The grouping selector selects all the HTML elements with the same style definitions.

Look at the following CSS code (the h1, h2, and p elements have the same style definitions):

h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
It will be better to group the selectors, to minimize the code.

To group selectors, separate each selector with a comma.

Example
In this example we have grouped the selectors from the code above: 

h1, h2, p {
  text-align: center;
  color: red;
}

      `,
    },
    {
      name: "How To Add CSS",
      content: `When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

Three Ways to Insert CSS
There are three ways of inserting a style sheet:

External CSS
Internal CSS
Inline CSS
External CSS
With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.

Example
External styles are defined within the <link> element, inside the <head> section of an HTML page:

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
An external style sheet can be written in any text editor, and must be saved with a .css extension.

The external .css file should not contain any HTML tags.

Here is how the "mystyle.css" file looks:

"mystyle.css"
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
Note: Do not add a space between the property value (20) and the unit (px):
Incorrect (space): margin-left: 20 px;
Correct (no space): margin-left: 20px;


Internal CSS
An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the <style> element, inside the head section.

Example
Internal styles are defined within the <style> element, inside the <head> section of an HTML page:

<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
Inline CSS
An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

Example
Inline styles are defined within the "style" attribute of the relevant element:

<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
Tip: An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.

Multiple Style Sheets
If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 

Assume that an external style sheet has the following style for the <h1> element:

h1 {
  color: navy;
}
Then, assume that an internal style sheet also has the following style for the <h1> element:

h1 {
  color: orange;   
}
Example
If the internal style is defined after the link to the external style sheet, the <h1> elements will be "orange":

<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>
Example
However, if the internal style is defined before the link to the external style sheet, the <h1> elements will be "navy": 

<head>
<style>
h1 {
  color: orange;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
Cascading Order
What style will be used when there is more than one style specified for an HTML element?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

Inline style (inside an HTML element)
External and internal style sheets (in the head section)
Browser default
So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

      
    `,
    },
    {
      name: "Box Model",
      content: `All HTML elements can be considered as boxes.
     


The CSS Box Model
In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates the box model:

Explanation of the different parts:

Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent
The box model allows us to add a border around elements, and to define space between elements. 

Example
Demonstration of the box model:

div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}



Width and Height of an Element
In order to set the width and height of an element correctly in all browsers, you need to know how the box model works.

Important: When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the total width and height of an element, you must also include the padding and borders.

Example
This <div> element will have a total width of 350px and a total height of 80px: 

div {
  width: 320px;
  height: 50px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
Here is the calculation:
  320px (width of content area)
+ 20px (left padding + right padding)
+ 10px (left border + right border)
= 350px (total width)

  50px (height of content area)
+ 20px (top padding + bottom padding)
+ 10px (top border + bottom border)
= 80px (total height)
The total width of an element should be calculated like this:

Total element width = width + left padding + right padding + left border + right border

The total height of an element should be calculated like this:

Total element height = height + top padding + bottom padding + top border + bottom border

Note: The margin property also affects the total space that the box will take up on the page, but the margin is not included in the actual size of the box. The box's total width and height stops at the border.
#background:-
CSS Backgrounds
The CSS background properties are used to add background effects for elements.

In these chapters, you will learn about the following CSS background properties:

background-color
background-image
background-attachment
background-position
background (shorthand property)
CSS background-color
The background-color property specifies the background color of an element.

Example
The background color of a page is set like this:

body {
  background-color: lightblue;
}
With CSS, a color is most often specified by:

a valid color name - like "red"
a HEX value - like "#ff0000"
an RGB value - like "rgb(255,0,0)"
Look at CSS Color Values for a complete list of possible color values.

Other Elements
You can set the background color for any HTML elements:

Example
Here, the <h1>, <p>, and <div> elements will have different background colors: 

h1 {
  background-color: green;
}

div {
  background-color: lightblue;
}

p {
  background-color: yellow;
}
#background img:-
CSS Background Image
CSS background-image
The background-image property specifies an image to use as the background of an element.

By default, the image is repeated so it covers the entire element.

Example
Set the background image for a page: 

body {
  background-image: url("paper.gif");
}
Example
This example shows a bad combination of text and background image. The text is hardly readable: 

body {
  background-image: url("bgdesert.jpg");
}
Note: When using a background image, use an image that does not disturb the text.

The background image can also be set for specific elements, like the <p> element:

Example
p {
  background-image: url("paper.gif");
}
#CSS Background Attachment
CSS background-attachment
The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page):

Example
Specify that the background image should be fixed:

body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
Example
Specify that the background image should scroll with the rest of the page:

body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: scroll;
}




      
    `,
    },
    {
      name: "CSS Tables",
      content: `The look of an HTML table can be greatly improved with CSS:

      

Company	Contact	Country
Alfreds Futterkiste	Maria Anders	Germany
Berglunds snabbköp	Christina Berglund	Sweden
Centro comercial Moctezuma	Francisco Chang	Mexico
Ernst Handel	Roland Mendel	Austria
Island Trading	Helen Bennett	UK
Königlich Essen	Philip Cramer	Germany
Laughing Bacchus Winecellars	Yoshi Tannamuri	Canada
Magazzini Alimentari Riuniti	Giovanni Rovelli	Italy

Table Borders
To specify table borders in CSS, use the border property.

The example below specifies a solid border for <table>, <th>, and <td> elements:

Firstname	Lastname
Peter	Griffin
Lois	Griffin
Example
table, th, td {
  border: 1px solid;
}

Full-Width Table
The table above might seem small in some cases. If you need a table that should span the entire screen (full-width), add width: 100% to the <table> element:

Firstname	Lastname
Peter	Griffin
Lois	Griffin
Example
table {
  width: 100%;
}
Double Borders
Notice that the table in the examples above have double borders. This is because both the table and the <th> and <td> elements have separate borders.

To remove double borders, take a look at the example below.

Collapse Table Borders
The border-collapse property sets whether the table borders should be collapsed into a single border:

Firstname	Lastname
Peter	Griffin
Lois	Griffin
Example
table {
  border-collapse: collapse;
}
If you only want a border around the table, only specify the border property for <table>:

Firstname	Lastname
Peter	Griffin
Lois	Griffin
Example
table {
  border: 1px solid;
}
`,
    },
    {
      name: "CSS Table Size",
      content: `The width and height of a table are defined by the width and height properties.

The example below sets the width of the table to 100%, and the height of the <th> elements to 70px:

Firstname	Lastname	Savings
Peter	Griffin	$100
Lois	Griffin	$150
Joe	Swanson	$300
Example
table {
  width: 100%;
}

th {
  height: 70px;
}
To create a table that should only span half the page, use width: 50%:

Firstname	Lastname	Savings
Peter	Griffin	$100
Lois	Griffin	$150
Joe	Swanson	$300
Example
table {
  width: 50%;
}
#CSS Table Alignment
Horizontal Alignment
The text-align property sets the horizontal alignment (like left, right, or center) of the content in <th> or <td>.

By default, the content of <th> elements are center-aligned and the content of <td> elements are left-aligned.

To center-align the content of  <td> elements as well, use text-align: center:

Firstname	Lastname	Savings
Peter	Griffin	$100
Lois	Griffin	$150
Joe	Swanson	$300
Example
td {
  text-align: center;
}
To left-align the content, force the alignment of <th> elements to be left-aligned, with the text-align: left property:

Firstname	Lastname	Savings
Peter	Griffin	$100
Lois	Griffin	$150
Joe	Swanson	$300
Example
th {
  text-align: left;
}
Vertical Alignment
The vertical-align property sets the vertical alignment (like top, bottom, or middle) of the content in <th> or <td>.

By default, the vertical alignment of the content in a table is middle (for both <th> and <td> elements).

The following example sets the vertical text alignment to bottom for <td> elements:

Firstname	Lastname	Savings
Peter	Griffin	$100
Lois	Griffin	$150
Joe	Swanson	$300
Example
td {
  height: 50px;
  vertical-align: bottom;
}
#CSS Responsive Table
Responsive Table
A responsive table will display a horizontal scroll bar if the screen is too small to display the full content:

First Name	Last Name	Points	Points	Points	Points	Points	Points	Points	Points	Points	Points	Points	Points
Jill	Smith	50	50	50	50	50	50	50	50	50	50	50	50
Eve	Jackson	94	94	94	94	94	94	94	94	94	94	94	94
Adam	Johnson	67	67	67	67	67	67	67	67	67	67	67	67
Add a container element (like <div>) with overflow-x:auto around the <table> element to make it responsive:

Example
<div style="overflow-x:auto;">

<table>
... table content ...
</table>

</div>
Note: In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).

More Examples
Make a fancy table
This example demonstrates how to create a fancy table.

Set the position of the table caption
This example demonstrates how to position the table caption.

Exercise
?
How can you make a table responsive using CSS?


Use overflow-y:auto on the <table> element
Wrap the table inside a <div> with overflow-x:auto
Set display: block on the <table> element
Apply width: 100% to the <table> element

CSS Table Properties
Property	Description
border:	Sets all the border properties in one declaration
border-collapse:	Specifies whether or not table borders should be collapsed
border-spacing	:Specifies the distance between the borders of adjacent cells
caption-side:	Specifies the placement of a table caption
empty-cells	:Specifies whether or not to display borders and background on empty cells in a table
table-layout:	Sets the layout algorithm to be used for a table
#CSS Layout - The display Property
The display property is the most important CSS property for controlling layout.

The display Property
The display property is used to specify how an element is shown on a web page.

Every HTML element has a default display value, depending on what type of element it is. The default display value for most elements is block or inline.

The display property is used to change the default display behavior of HTML elements.

Block-level Elements
A block-level element ALWAYS starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The <div> element is a block-level element.
Examples of block-level elements:

<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>
Inline Elements
An inline element DOES NOT start on a new line and only takes up as much width as necessary.

This is an inline <span> element inside a paragraph.

Examples of inline elements:

<span>
<a>
<img>
The display Property Values
The display property has many values:

Value	Description
inline	Displays an element as an inline element
block	Displays an element as a block element
contents	Makes the container disappear, making the child elements children of the element the next level up in the DOM
flex	Displays an element as a block-level flex container
grid	Displays an element as a block-level grid container
inline-block	Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values
inline-flex	Displays an element as an inline-level flex container
inline-grid	Displays an element as an inline-level grid container
inline-table	The element is displayed as an inline-level table
list-item	Let the element behave like a <li> element
run-in	Displays an element as either block or inline, depending on context
table	Let the element behave like a <table> element
table-caption	Let the element behave like a <caption> element
table-column-group	Let the element behave like a <colgroup> element
table-header-group	Let the element behave like a <thead> element
table-footer-group	Let the element behave like a <tfoot> element
table-row-group	Let the element behave like a <tbody> element
table-cell	Let the element behave like a <td> element
table-column	Let the element behave like a <col> element
table-row	Let the element behave like a <tr> element
none	The element is completely removed
initial	Sets this property to its default value
inherit	Inherits this property from its parent element
Display: none;
display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.

The <script> element uses display: none; as default.

Click to show panel

Override The Default Display Value
As mentioned, every element has a default display value. However, you can override this.

Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.

A common example is making inline <li> elements for horizontal menus:

Example
li {
  display: inline;
}
Note: Setting the display property of an element only changes how the element is displayed, NOT what kind of element it is. So, an inline element with display: block; is not allowed to have other block elements inside it.

The following example displays <span> elements as block elements:

Example
span {
  display: block;
}
The following example displays <a> elements as block elements:

Example
a {
  display: block;
}
Hide an Element - display:none or visibility:hidden?
display:none

Italy

visibility:hidden

Forest

Reset

Lights

Hiding an element can be done by setting the display property to none. The element will be hidden, and the page will be displayed as if the element is not there:

Example
h1.hidden {
  display: none;
}
visibility:hidden; also hides an element.

However, the element will still take up the same space as before. The element will be hidden, but still affect the layout:

Example
h1.hidden {
  visibility: hidden;
}
More Examples
Differences between display: none; and visibility: hidden;
This example demonstrates display: none; versus visibility: hidden;

Showing more display types
This example demonstrates some more display types.

Using CSS together with JavaScript to show content
This example demonstrates how to use CSS and JavaScript to show an element on click.

Exercise
?
What is the default display value for most HTML elements?


inline-block
block or inline
flex
none

CSS Display/Visibility Properties
Property	Description
display	Specifies how an element should be displayed
visibility	Specifies whether or not an element should be visible
`,
    },
    {
      name: "CSS The !important Rule",
      content: `What is !important?
The !important rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!

Let us look at an example:

Example
#myid {
  background-color: blue;
}

.myclass {
  background-color: gray;
}

p {
  background-color: red !important;
}

Example Explained
In the example above, all three paragraphs will get a red background color, even though the ID selector and the class selector have a higher specificity. The !important rule overrides the background-color property in both cases.

Important About !important
The only way to override an !important rule is to include another !important rule on a declaration with the same (or higher) specificity in the source code - and here the problem starts! This makes the CSS code confusing and the debugging will be hard, especially if you have a large style sheet!

Here we have created a simple example. It is not very clear, when you look at the CSS source code, which color is considered most important:

Example
#myid {
  background-color: blue !important;
}

.myclass {
  background-color: gray !important;
}

p {
  background-color: red !important;
}

Tip: It is good to know about the !important rule. You might see it in some CSS source code. However, do not use it unless you absolutely have to.

ADVERTISEMENT

Maybe One or Two Fair Uses of !important
One way to use !important is if you have to override a style that cannot be overridden in any other way. This could be if you are working on a Content Management System (CMS) and cannot edit the CSS code. Then you can set some custom styles to override some of the CMS styles.

Another way to use !important is: Assume you want a special look for all buttons on a page. Here, buttons are styled with a gray background color, white text, and some padding and border:

Example
.button {
  background-color: #8c8c8c;
  color: white;
  padding: 5px;
  border: 1px solid black;
}

The look of a button can sometimes change if we put it inside another element with higher specificity, and the properties get in conflict. Here is an example of this:

Example
.button {
  background-color: #8c8c8c;
  color: white;
  padding: 5px;
  border: 1px solid black;
}

#myDiv a {
  color: red;
  background-color: yellow;
}

To "force" all buttons to have the same look, no matter what, we can add the !important rule to the properties of the button, like this:

Example
.button {
  background-color: #8c8c8c !important;
  color: white !important;
  padding: 5px !important;
  border: 1px solid black !important;
}

#myDiv a {
  color: red;
  background-color: yellow;
}
`,
    },
    {
      name: "CSS Math Functions",
      content: `The CSS math functions allow mathematical expressions to be used as property values. Here, we will explain the calc(), max() and min() functions.

The calc() Function
The calc() function performs a calculation to be used as the property value.

CSS Syntax
calc(expression)
Value	Description
expression	Required. A mathematical expression. The result will be used as the value.
The following operators can be used: + - * /
Let us look at an example:

Example
Use calc() to calculate the width of a <div> element:

#div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
}

The max() Function
The max() function uses the largest value, from a comma-separated list of values, as the property value.

CSS Syntax
max(value1, value2, ...)
Value	Description
value1, value2, ...	Required. A list of comma-separated values - where the largest value is chosen
Let us look at an example:

Example
Use max() to set the width of #div1 to whichever value is largest, 50% or 300px:

#div1 {
  background-color: yellow;
  height: 100px;
  width: max(50%, 300px);
}

ADVERTISEMENT

The min() Function
The min() function uses the smallest value, from a comma-separated list of values, as the property value.

CSS Syntax
min(value1, value2, ...)
Value	Description
value1, value2, ...	Required. A list of comma-separated values - where the smallest value is chosen
Let us look at an example:

Example
Use min() to set the width of #div1 to whichever value is smallest, 50% or 300px:

#div1 {
  background-color: yellow;
  height: 100px;
  width: min(50%, 300px);
} 
  `,
    },
  ],
};

export default cssData;
