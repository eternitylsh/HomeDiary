const quotes = [{
        quote: "True Knowledge exists in knowing that you know nothing.",
        author: "Socrates"
    },
    {
        quote: "Remember that there is nothing stable in the human life. Therefore do not be excited to the success or be depressed with the obstacle.",
        author: "Socrates"
    },
    {
        quote: "Concentration is my motto. First honesty, then industry, then concentration.",
        author: "Andrew Camegie"
    },
    {
        quote: "Life is like riding bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Never underestimate your own ignorance.",
        author: "Albert Einstein"
    },
    {
        quote: "You never know what life is like, until you have lived it.",
        author: "Marilyn Monroe"
    },
    {
        quote: "Love does not consist in gazing at each other, but in looking together in the same direction.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "Business? It's quite simple. It's other people's money.",
        author: "Alexandre Dumas"
    },
    {
        quote: "To know is nothing at all; to imagine is everything.",
        author: "Anatole France"
    },
    {
        quote: "The secret of business is to know something that nobody else knows.",
        author: "Aristotle onassis"
    },
]

const quote = document.querySelector("#quote div:first-child")
const author = document.querySelector("#quote div:last-child")

const todayquote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayquote.quote
author.innerText = todayquote.author