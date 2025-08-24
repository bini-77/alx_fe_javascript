const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Work" },
    { text: "Strive not to be a success, but rather to be of value.", category: "Success" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Inspiration" },
    { text: "The best way to predict the future is to create it.", category: "Innovation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];
let quotes = [];
const LOCAL_STORAGE_KEY = 'quotesData';
function exportQuotes() {
    // ... (code to create the Blob object and URL) ...
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    .
    const a = document.createElement('a');

    
    a.href = url;
    a.download = 'quotes.json';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);


// --- New Function: Load quotes from local storage ---
function loadQuotesFromLocalStorage() {
    const storedQuotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedQuotes) {
       
        quotes = JSON.parse(storedQuotes);
        console.log("Quotes loaded from local storage:", quotes);
    }
}

function saveQuotesToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
}

function exportQuotes() {
   
    const jsonString = JSON.stringify(quotes, null, 2);

    
    const blob = new Blob([jsonString], { type: 'application/json' });
    
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


document.addEventListener('DOMContentLoaded', function() {
    
    const newQuoteBtn = document.getElementById('new-quote-btn');
    newQuoteBtn.addEventListener('click', showRandomQuote);
}



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
    
    createAddQuoteForm();
    
    showRandomQuote();
});


function populateCategories() {
   
    const categories = [...new Set(quotes.map(quote => quote.category))];

    
    const categoryFilter = document.getElementById('category-filter');

    
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';

   
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterQuotes() {
    
    const selectedCategory = document.getElementById('category-filter').value;

   
    const filteredQuotes = selectedCategory === "all"
        ? quotes
        : quotes.filter(quote => quote.category === selectedCategory);
    
    
    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        document.getElementById('quote-display').textContent = `"${randomQuote.text}"`;
        document.getElementById('quote-category').textContent = `— Category: ${randomQuote.category}`;
    } else {
        document.getElementById('quote-display').textContent = "No quotes available for this category.";
        document.getElementById('quote-category').textContent = "";
    }
}

const newPost = {
                    title: newQuote.text, // The API expects a 'title' and 'body'
                    body: newQuote.category,
                    userId: 1 // A fixed user ID for this example
                };

                const response = await fetch(API_URL, {
                    method: 'POST', // The HTTP method for creating resources
                    headers: {
                        'Content-Type': 'application/json', // Tell the server we're sending JSON
                    },
                    body: JSON.stringify(newPost), // Convert the JavaScript object to a JSON string
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);


async function fetchQuotesFromServer() {
    try {
        // 'fetch' sends a request to your local file path.
        const response = await fetch('quotes.json');
        
        // Check if the response was successful (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 'json()' method parses the JSON response body
        const quotesData = await response.json();
        
        console.log("Successfully fetched mock data:", quotesData);
        return quotesData; // Return the data as a JavaScript array
    } catch (error) {
        console.error("Could not fetch quotes:", error);
    }
}


fetchQuotesFromServer().then(quotes => {
    if (quotes) {
    
        console.log("First quote:", quotes[0].text);
    }
});

// script.js

let quotes = [];
const LOCAL_STORAGE_KEY = 'quotesData';

// Function to save the quotes array to local storage.
function saveQuotesToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
}

// Function to load quotes from local storage.
function loadQuotesFromLocalStorage() {
    const storedQuotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
        console.log("Quotes loaded from local storage:", quotes);
    }
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
            const newQuote = { text: newQuoteText, category: newQuoteCategory };
            quotes.push(newQuote);
            saveQuotesToLocalStorage();
            populateCategories(); // Update categories for new quote
            addQuoteForm.reset();
            alert("Quote added successfully!");
        } else {
            alert("Please fill out both fields.");
        }
    });
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const newQuotes = JSON.parse(e.target.result);
            if (Array.isArray(newQuotes)) {
                quotes = [...quotes, ...newQuotes];
                saveQuotesToLocalStorage();
                populateCategories(); // Update categories for new quotes
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

function populateCategories() {
    const categories = [...new Set(quotes.map(quote => quote.category))];
    const categoryFilter = document.getElementById('category-filter');

    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterQuotes() {
    const selectedCategory = document.getElementById('category-filter').value;
    const filteredQuotes = selectedCategory === "all"
        ? quotes
        : quotes.filter(quote => quote.category === selectedCategory);
    
    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        document.getElementById('quote-display').textContent = `"${randomQuote.text}"`;
        document.getElementById('quote-category').textContent = `— Category: ${randomQuote.category}`;
    } else {
        document.getElementById('quote-display').textContent = "No quotes available for this category.";
        document.getElementById('quote-category').textContent = "";
    }
}

// Function to export quotes to a JSON file
function exportQuotes() {
    const jsonString = JSON.stringify(quotes, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

const LOCAL_STORAGE_KEY = 'quotesData';
// NEW: A constant to hold the URL for the real API endpoint.
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Function to save the quotes array to local storage.
function saveQuotesToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
}


// Global event listener for storage changes.
window.addEventListener('storage', function(e) {
    if (e.key === LOCAL_STORAGE_KEY) {
        loadQuotesFromLocalStorage();
        populateCategories();
        filterQuotes();
    }
});

function simulateServerCheck() {
    return new Promise(resolve => {
        setTimeout(() => {
            const serverQuotes = [
                { text: "Knowledge is power.", category: "Education" },
                { text: "Your time is limited, so don't waste it living someone else's life.", category: "Time" }
            ];
            resolve(serverQuotes);
        }, 2000); // Simulate a 2-second network delay
    });
}

function resolveConflictsAndMerge(serverQuotes) {
    // 1. Create a Map to easily manage quotes by a unique key.
    const uniqueQuotes = new Map();
    quotes.forEach(quote => {
        const key = `${quote.text}|${quote.category}`;
        uniqueQuotes.set(key, quote);
    });
    serverQuotes.forEach(quote => {
        const key = `${quote.text}|${quote.category}`;
        uniqueQuotes.set(key, quote);
    });

    quotes = Array.from(uniqueQuotes.values());
    console.log("Quotes updated after server sync. Total quotes:", quotes.length);
}

async function periodicSync() {
    console.log("Checking server for new quotes...");
    try {
        const serverQuotes = await simulateServerCheck();
        
        resolveConflictsAndMerge(serverQuotes);
       
        saveQuotesToLocalStorage();
        
        populateCategories();
        filterQuotes();

    } catch (error) {
        console.error("Failed to sync with server:", error);
    }
}

function startPeriodicSync() {
    setInterval(periodicSync, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    loadQuotesFromLocalStorage();
    populateCategories();

    const newQuoteBtn = document.getElementById('new-quote-btn');
    if (newQuoteBtn) {
        newQuoteBtn.addEventListener('click', filterQuotes);
    }

    const jsonFileInput = document.getElementById('json-file-input');
    if (jsonFileInput) {
        jsonFileInput.addEventListener('change', handleFileUpload);
    }

    const exportQuotesBtn = document.getElementById('export-quotes-btn');
    if (exportQuotesBtn) {
        exportQuotesBtn.addEventListener('click', exportQuotes);
    }
    
    createAddQuoteForm();
    filterQuotes();
    startPeriodicSync();
});
async function fetchQuotesFromServer() {
    console.log("Fetching new data from a real server...");
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        
        // NEW: Transform the API data into our quotes format.
        // We will use the 'title' for the quote text and the 'userId' as the category.
        const newQuotes = posts.map(post => ({
            text: post.title,
            category: `User ${post.userId}`
        }));

        console.log(`Successfully fetched ${newQuotes.length} quotes from the server.`);
        return newQuotes;

    } catch (error) {
        console.error("Failed to fetch from server:", error);
        return []; // Return an empty array on error to prevent breaking the app.
    }
}

// This function merges the server data with local data, giving precedence to the server.
function resolveConflictsAndMerge(serverQuotes) {
    const uniqueQuotes = new Map();

    quotes.forEach(quote => {
        const key = `${quote.text}|${quote.category}`;
        uniqueQuotes.set(key, quote);
    });

    serverQuotes.forEach(quote => {
        const key = `${quote.text}|${quote.category}`;
        uniqueQuotes.set(key, quote);
    });

    quotes = Array.from(uniqueQuotes.values());
    console.log("Quotes updated after server sync. Total quotes:", quotes.length);
}

// This function handles the full periodic sync process.
async function periodicSync() {
    try {
        const serverQuotes = await fetchQuotesFromServer();
        
        // Resolve conflicts and update the local quotes array.
        resolveConflictsAndMerge(serverQuotes);
        
        // Save the new, merged array to local storage.
        saveQuotesToLocalStorage();
        
        // Update the UI to reflect the changes.
        populateCategories();
        filterQuotes();

    } catch (error) {
        console.error("Failed to sync with server:", error);
    }
}

// This function starts the periodic sync timer.
function startPeriodicSync() {
    setInterval(periodicSync, 10000); // Check every 10 seconds.
}

function resetApp() {
    localStorage.clear();
    location.reload(); // Reloads the page to apply the changes
}

// A function to quickly add a quote for testing purposes.
// We can use a specific ID to create a conflict later.
function addTestQuote(id, text, category) {
    const newQuote = { id: id, text: text, category: category };
    let quotes = JSON.parse(localStorage.getItem('quotesData') || '[]');
    quotes.push(newQuote);
    localStorage.setItem('quotesData', JSON.stringify(quotes));
    location.reload();
}
