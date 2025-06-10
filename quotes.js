
const quotes = [
    {
            text: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King",
            role: "Musician & Educator",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/B.B._King_07.jpg/413px-B.B._King_07.jpg"
        },
        {
            text: "Education is not preparation for life; education is life itself.",
            author: "John Dewey",
            role: "Philosopher",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/John_Dewey_cph.3a51565.jpg/330px-John_Dewey_cph.3a51565.jpg"
        },
        
    {
        text: "Knowledge is power. Information is liberating. Education is the premise of progress.",
        author: "Kofi Annan",
        role: "Former UN Secretary-General",
        image: "konan.png"
    }

];
let currentIndex = 0;

function updateQuote() {
    const quote = quotes[currentIndex];
    
    // Get elements
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('authorName');
    const roleElement = document.getElementById('authorRole');
    const imageElement = document.getElementById('authorImage');
    
    // Add fade out class
    [quoteElement, authorElement, roleElement, imageElement].forEach(el => {
        if (el) el.style.opacity = '0';
    });
    
    // Update content after brief delay
    setTimeout(() => {
        if (quoteElement) quoteElement.textContent = `"${quote.text}"`;
        if (authorElement) authorElement.textContent = quote.author;
        if (roleElement) roleElement.textContent = quote.role;
        if (imageElement) {
            imageElement.src = quote.image;
            imageElement.alt = quote.author;
        }
        
        // Fade in
        [quoteElement, authorElement, roleElement, imageElement].forEach(el => {
            if (el) el.style.opacity = '1';
        });
    }, 500);

    // Update index for next quote
    currentIndex = (currentIndex + 1) % quotes.length;
}

// Initialize and set interval
document.addEventListener('DOMContentLoaded', () => {
    updateQuote(); // Initial quote
    setInterval(updateQuote, 8000); // Update every 8 seconds
});