const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Work" },
    { text: "Strive not to be a success, but rather to be of value.", category: "Success" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Inspiration" },
    { text: "The best way to predict the future is to create it.", category: "Innovation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];
let quotes = [];

// A key to identify your quotes in local storage.
const LOCAL_STORAGE_KEY = 'quotesData';

// --- New Function: Load quotes from local storage ---
function loadQuotesFromLocalStorage() {
    const storedQuotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedQuotes) {
        // The JSON.parse() method converts the string from local storage
        // back into a JavaScript array.
        quotes = JSON.parse(storedQuotes);
        console.log("Quotes loaded from local storage:", quotes);
    }
}

// --- New Function: Save quotes to local storage ---
function saveQuotesToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
}

// Function to display a random quote from the array.
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const quoteCategory = document.getElementById('quote-category');

    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add or upload some!";
        quoteCategory.textContent = "";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteDisplay.textContent = `"${randomQuote.text}"`;
    quoteCategory.textContent = `— Category: ${randomQuote.category}`;
}

// Function to set up the form for adding new quotes.
function createAddQuoteForm() {
    const addQuoteForm = document.getElementById('add-quote-form');

    addQuoteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newQuoteText = document.getElementById('quote-text').value;
        const newQuoteCategory = document.getElementById('quote-category-input').value;

        if (newQuoteText && newQuoteCategory) {
            const newQuote = {
                text: newQuoteText,
                category: newQuoteCategory
            };

            quotes.push(newQuote);
            
            // --- ADDED: Save the updated array to local storage ---
            saveQuotesToLocalStorage();
            
            addQuoteForm.reset();
            alert("Quote added successfully!");
        } else {
            alert("Please fill out both fields.");
        }
    });




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
    
    .
    quoteContainer.innerHTML = quoteHtml;

    
    document.getElementById('new-quote-btn').addEventListener('click', showRandomQuote);
}

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

document.addEventListener('DOMContentLoaded', function() {
    
    const newQuoteBtn = document.getElementById('new-quote-btn');
    newQuoteBtn.addEventListener('click', showRandomQuote);
}


// script.js

// Data for our quotes. We will manage this array.
let quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Work" },
    { text: "Strive not to be a success, but rather to be of value.", category: "Success" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Inspiration" }
];

// Key for local storage
const LOCAL_STORAGE_KEY = 'quotesData';

// --- Functions to manage quotes and local storage ---

// Function to save the quotes array to local storage.
function saveQuotesToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
}

// Function to load quotes from local storage.
function loadQuotesFromLocalStorage() {
    const storedQuotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedQuotes) {
        // Parse the JSON string back into a JavaScript array.
        quotes = JSON.parse(storedQuotes);
        console.log("Quotes loaded from local storage:", quotes);
    }
}

// Function to display a random quote from the array.
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const quoteCategory = document.getElementById('quote-category');

    // Make sure the quotes array is not empty before trying to access it.
    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add or upload some!";
        quoteCategory.textContent = "";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteDisplay.textContent = `"${randomQuote.text}"`;
    quoteCategory.textContent = `— Category: ${randomQuote.category}`;
}

// Function to set up the form for adding new quotes.
function createAddQuoteForm() {
    const addQuoteForm = document.getElementById('add-quote-form');

    addQuoteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newQuoteText = document.getElementById('quote-text').value;
        const newQuoteCategory = document.getElementById('quote-category-input').value;

        if (newQuoteText && newQuoteCategory) {
            const newQuote = {
                text: newQuoteText,
                category: newQuoteCategory
            };

            quotes.push(newQuote);
            saveQuotesToLocalStorage(); // Save the updated array
            addQuoteForm.reset();
            alert("Quote added successfully!");
        } else {
            alert("Please fill out both fields.");
        }
    });
}




function handleFileUpload(event) {
    const file = event.target.files[0];

    
    if (!file) {
        return;
    }

    const reader = new FileReader();

   
    reader.onload = function(e) {
        try {
            const fileContent = e.target.result;
            // Parse the string as a JSON array.
            const newQuotes = JSON.parse(fileContent);

            // Basic validation to make sure the parsed data is an array.
            if (Array.isArray(newQuotes)) {
                // Update the quotes array by combining old and new quotes.
                quotes = quotes.concat(newQuotes);
                // Save the new combined array to local storage.
                saveQuotesToLocalStorage();
                // Show a new random quote to reflect the change.
                showRandomQuote();
                alert(`Successfully added ${newQuotes.length} quotes from the file!`);
            } else {
                alert("The file content is not a valid JSON array.");
            }
        } catch (error) {
            console.error("Error parsing JSON file:", error);
            alert("There was an error reading the file. Please ensure it is a valid JSON file.");
        }
    };

    reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded', function() {
    
    loadQuotesFromLocalStorage();
    

    const newQuoteBtn = document.getElementById('new-quote-btn');
    if (newQuoteBtn) {
        newQuoteBtn.addEventListener('click', showRandomQuote);
    }

    
    const jsonFileInput = document.getElementById('json-file-input');
    if (jsonFileInput) {
        jsonFileInput.addEventListener('change', handleFileUpload);
    }
    
    // Set up the form for adding quotes manually.
    createAddQuoteForm();
    
    // Display an initial quote.
    showRandomQuote();
});