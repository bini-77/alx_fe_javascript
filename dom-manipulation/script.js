const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Work" },
    { text: "Strive not to be a success, but rather to be of value.", category: "Success" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Inspiration" },
    { text: "The best way to predict the future is to create it.", category: "Innovation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// Function to display a random quote using innerHTML.
function showRandomQuote() {
    // Get the container element where the quote will be displayed.
    const quoteContainer = document.querySelector('.container');
    
    // Generate a random index.
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Build the HTML string using a template literal.
    const quoteHtml = `
        <h1>Quote of the Moment</h1>
        <p id="quote-display">"${randomQuote.text}"</p>
        <p id="quote-category">— Category: ${randomQuote.category}</p>
        <button id="new-quote-btn">Get a New Quote</button>
    `;
    
    // Use innerHTML to replace the content of the container with our new HTML.
    // NOTE: For security, it's safer to use textContent if you're only changing text.
    // This example shows how innerHTML works to insert full HTML.
    quoteContainer.innerHTML = quoteHtml;

    // We must re-attach the event listener because innerHTML replaced the button.
    document.getElementById('new-quote-btn').addEventListener('click', showRandomQuote);
}

// Function to set up the form and add new quotes.
function createAddQuoteForm() {
    const addQuoteForm = document.getElementById('add-quote-form');

    addQuoteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newQuoteText = document.getElementById('quote-text').value;
        const newQuoteCategory = document.getElementById('quote-category-input').value;

        if (newQuoteText && newQuoteCategory) { // Basic validation
            const newQuote = {
                text: newQuoteText,
                category: newQuoteCategory
            };

            quotes.push(newQuote);
            console.log("New quote added:", newQuote);
            addQuoteForm.reset();
            alert("Quote added successfully!");
        } else {
            alert("Please fill out both fields.");
        }
    });
}

// Attach the event listener for the "New Quote" button.
// This is the preferred way of handling events in external JS.
document.addEventListener('DOMContentLoaded', function() {
    // We attach the listener to the button once the DOM is ready.
    // The HTML content is not being replaced by innerHTML here.
    const newQuoteBtn = document.getElementById('new-quote-btn');
    newQuoteBtn.addEventListener('click', showRandomQuote);