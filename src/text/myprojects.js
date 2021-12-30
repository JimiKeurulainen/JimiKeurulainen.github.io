const teksti = 
`<h2>This website</h2>`+
`<p>This website itself is a project of mine. I have made this from scratch with React native, though it is still a work in progress. The website is hosted with GitHub pages, and the custom domain is provided by Namecheap. Both services were free through their student programs/discounts, so I naturally opted for them. The code documentation of this project can be found on my GitHub page. </p>`+
`<p>I initially had some issues getting GitHub pages working. There was quite a lot of tinkering with React on GitHub pages, including 3rd party npm packages, namely <i>gh-pages.  </i></p>`+
`<h3>Keeping the Website Up to Date </h3>`+
`<p>The text you are reading currently was written at first in Microsoft Word, mainly because I find it to be easiest way to write long, coherent pieces of text. After writing the parts that I want to add, I use the <i>find and replace</i> function in Word to insert HTML tags appropriately to different parts of the text. I then copy-paste this text to a JavaScript file that binds the HTML string into a variable. I then import this variable into the corresponding React Component and parse it using React’s <i>DangerouslySetInnerHTML </i>-tag. This tag, like its name suggests, can be exploited through Cross Site Scripting -attacks if not used carefully. </p>`+
`<p>I believe that I don’t have any sensitive information on this website that could be exploited through XSS, but this exploit can be avoided using HTML sanitization. So, I installed a package called <i>DOMPurify</i>, that includes sanitization functions that can be used to sanitize the input HTML. </p>`

;
export default teksti;