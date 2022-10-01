# How Browsers work

## What is the main functionality of the browser?

The primary function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

The way the browser interprets and displays HTML files is specified in the HTML and CSS specifications. These specifications are maintained by the W3C (World Wide Web Consortium) organization, which is the standards organization for the web.

## High-Level Components of a browser?

The browser's main components are:

1. The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2. The browser engine: marshals actions between the UI and the rendering engine.
3. The rendering engine: responsible for displaying requested content. For example, if the requested content is HTML, the rendering engine parses HTML and CSS and displays the parsed content on the screen.
4. Networking: for network calls such as HTTP requests, using different implementations for different platforms behind a platform-independent interface.
5. UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform-specific. Underneath it uses operating system user interface methods.
6. JavaScript interpreter. Used to parse and execute JavaScript code.
7. Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

<img src='https://taligarsiel.com/Projects/layers.png'/>

## Rendering engine and its use?

The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.
Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, and Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.
The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.
After that, this is the basic flow of the rendering engine:

<img src='https://3fxtqy18kygf3on3bu39kh93-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png'/>

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

## Parsers (HTML, CSS, etc)

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

For example, parsing the expression 2 + 3 - 1 could return this tree:

<img src='https://miro.medium.com/max/1400/1*kXPPDtsJ8b8XYLWasf3DKA.png'/>

Parsing can be separated into two sub-processes: lexical analysis and syntax analysis.

Lexical analysis is the process of breaking the input into tokens. Tokens are the language vocabulary: the collection of valid building blocks. In human language, it will consist of all the words that appear in the dictionary for that language.

Syntax analysis is the application of the language syntax rules.

<img src='https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format'/>

### HTML Parser

The job of the HTML parser is to parse the HTML markup into a parse tree. The vocabulary and syntax of HTML are defined in specifications created by the W3C organization.

Unfortunately, all the conventional parser topics do not apply to HTML. HTML cannot easily be defined by the context-free grammar that parsers need.

There is a formal format for defining HTML - DTD (Document Type Definition) - but it is not context-free grammar.

#### HTML DTD

HTML definition is in a DTD format. This format is used to define languages of the SGML family. The format contains definitions for all allowed elements, their attributes, and their hierarchy. As we saw earlier, the HTML DTD doesn't form context-free grammar.

#### DOM

The output tree (the "parse tree") is a tree of DOM elements and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.

The root of the tree is the "Document" object. The DOM has an almost one-to-one relation to the markup.

The parsing algorithm is described in detail by the HTML5 specification. The algorithm consists of two stages: tokenization and tree construction.

Tokenization is the lexical analysis, parsing the input into tokens. Among HTML tokens are start tags, end tags, attribute names, and attribute values.
The tokenizer recognizes the token, gives it to the tree constructor, and consumes the next character for recognizing the next token, and so on until the end of the input

### CSS parsing

Unlike HTML, CSS is a context-free grammar and can be parsed using the types of parsers described in the introduction.

WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files. As you recall from the parser introduction, Bison creates a bottom-up shift-reduce parser. Firefox uses a top-down parser written manually. In both cases, each CSS file is parsed into a StyleSheet object. Each object contains CSS rules. The CSS rule objects contain selector and declaration objects and other objects corresponding to CSS grammar.

## Script Processors

The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

### Speculative parsing

Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets, and images: it doesn't modify the DOM tree - that is left to the main parser

## Tree construction

While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable the painting of the contents in their correct order.

Firefox calls the elements in the render tree "frames". WebKit uses the term renderer or renders the object. A renderer knows how to lay out and paint itself and its children.

<img src='https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/937hKTBHU2FAEyMRdi5z.png?auto=format'/>

### Order of script processing

In Firefox, the presentation is registered as a listener for DOM updates. The presentation delegates frame creation to the FrameConstructor and the constructor resolves style (see style computation) and creates a frame.

In WebKit, the process of resolving the style and creating a renderer is called "attachment". Every DOM node has an "attach" method. Attachment is synchronous, node insertion to the DOM tree calls the new node "attach" method.

Processing the html and body tags results in the construction of the render tree root. The root render object corresponds to what the CSS spec calls the containing block: the topmost block that contains all other blocks. Its dimensions are the viewport: the browser window display area dimensions. Firefox calls it ViewPortFrame and WebKit calls it RenderView. This is the rendered object that the document points to. The rest of the tree is constructed as a DOM node insertion.

## Layout and Painting

### Layout

When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

HTML uses a flow-based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so the layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass.

The coordinate system is relative to the root frame. Top and left coordinates are used.

The layout is a recursive process. It begins at the root renderer, which corresponds to the <html> element of the HTML document. The layout continues recursively through some or all of the frame hierarchy, computing geometric information for each renderer that requires it.

The position of the root renderer is 0,0 and its dimensions are the viewport - the visible part of the browser window.

All renderers have a "layout" or "reflow" method, each renderer invokes the layout method of its children that need a layout.

### Painting

In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. The painting uses the UI infrastructure component.

#### Global and Incremental

Like the layout, painting can also be global - the entire tree is painted - or incremental. In incremental painting, some of the renderers change in a way that does not affect the entire tree. The changed renderer invalidates its rectangle on the screen. This causes the OS to see it as a "dirty region" and generate a "paint" event. The OS does it cleverly and coalesces several regions into one. In Chrome it is more complicated because the renderer is in a different process than the main process. Chrome simulates the OS behavior to some extent. The presentation listens to these events and delegates the message to the rendered root. The tree is traversed until the relevant renderer is reached. It will repaint itself (and usually its children).
