const quotes = [
    "“When you forgive you win.”",
    "“Forgiveness is the power to choose how things affect you.”",
    "“Forgiveness is choosing to be happy.”",
    "“Forgiveness is simply freeing ourselves from wanting to punish.”",
    "“We experience what we intend for others.”"

]

function getQuote() {
    
    let getQuote = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote-content").textContent=`${quotes[getQuote]}`;

}










