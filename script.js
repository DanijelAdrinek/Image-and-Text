const mainButton = document.querySelector('button.main-button');

/**
 * Will start animating the main button
 * 
 * @returns {void}
 */
function startButtonAnimation() {
    mainButton.classList.add('hide-element');
};


/**
 * Will create a paragraph element, and assign value and classes to it
 * 
 * @returns {HTMLParagraphElement}
 */
function createNewParagraph() {
    let newParagraph = document.createElement('p');
    newParagraph = assignValueToParagraph(newParagraph);
    return newParagraph = assignClassesToParagraph(newParagraph);
};

/**
 * Will assign text content to paragraph
 * 
 * @param {HTMLParagraphElement} paragraph 
 * @returns {HTMLParagraphElement}
 */
function assignValueToParagraph(paragraph) {
    const textValue = document.querySelector('p.main-paragraphs').textContent.trim();
    paragraph.textContent = textValue;
    return paragraph;
};

/**
 * Will assign classes to paragraph
 * 
 * @param {HTMLParagraphElement} paragraph 
 * @returns {HTMLParagraphElement}
 */
function assignClassesToParagraph(paragraph) {
    const classesToAdd = ['main-paragraphs', 'show-element'];
    paragraph.classList.add(...classesToAdd);
    return paragraph;
};

/**
 * Removes button and creates a new paragraph, then appoints it to its parent
 * 
 * @returns {void}
 */
function animationEndHandler() {
    mainButton.classList.add('display-none');
    const newParagraph = createNewParagraph();
    appendParagraphToParent(newParagraph);
};

/**
 * Appends paragraph to its parent
 * 
 * @param {HTMLParagraphElement} paragraph 
 */
function appendParagraphToParent(paragraph) {
    const paragraphParent = document.querySelector('section.text-content');
    console.log(paragraph);
    paragraphParent.appendChild(paragraph);
};


// EVENT LISTENERS

mainButton.addEventListener('click', startButtonAnimation);
mainButton.addEventListener("webkitAnimationEnd", animationEndHandler);
mainButton.addEventListener("mozAnimationEnd", animationEndHandler);
mainButton.addEventListener("animationend", animationEndHandler);