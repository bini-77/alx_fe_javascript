<div>
    <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
    <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
    <button onclick="addQuote()">Add Quote</button>
  </div>
  
   const quotes = [
            { text: "The only way to do great work is to love what you do.", category: "Work" },
            { text: "Strive not to be a success, but rather to be of value.", category: "Success" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Inspiration" },
            { text: "The best way to predict the future is to create it.", category: "Innovation" },
            { text: "Life is what happens when you're busy making other plans.", category: "Life" }
        ];

    function showRandomQuote() {
            const quoteDisplay = document.getElementById('quote-display');
            const quoteCategory = document.getElementById('quote-category');
            const randomIndex = Math.floor(Math.random() * quotes.length);

            const randomQuote = quotes[randomIndex];

            quoteDisplay.textContent = `"${randomQuote.text}"`;
            quoteCategory.textContent = `— Category: ${randomQuote.category}`;
        }    
function createAddQuoteForm() {
            // Get a reference to the form element.
            const addQuoteForm = document.getElementById('add-quote-form');

            // Add an event listener for the form's 'submit' event.
            addQuoteForm.addEventListener('submit', function(event) {
                // Prevent the default form submission (which would reload the page).
                event.preventDefault();

                // Get the values from the form input fields.
                const newQuoteText = document.getElementById('quote-text').value;
                const newQuoteCategory = document.getElementById('quote-category-input').value;

                // Create a new quote object.
                const newQuote = {
                    text: newQuoteText,
                    category: newQuoteCategory
                };

                // Add the new quote object to our quotes array.
                quotes.push(newQuote);

                // Log the new array to the console to verify it was added.
                console.log("New quote added:", newQuote);
                console.log("Current quotes array:", quotes);

                // Clear the form fields for the next entry.
                addQuoteForm.reset();

                // Optional: Alert the user that the quote was added.
                alert("Quote added successfully!");
            });
        }

    
        showRandomQuote();
        createAddQuoteForm();
