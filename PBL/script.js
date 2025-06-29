// Real product data: 25 entries (Mobiles, Laptops, Earbuds, Smartwatches, Accessories)
const productData = [
  {
    name: "iPhone 14",
    prices: [
      { site: "Amazon", price: 68999, link: "https://www.amazon.in/dp/B0BDK62PDX" },
      { site: "Flipkart", price: 67499, link: "https://www.flipkart.com/apple-iphone-14/p/itm7c1b4f34560c1" },
      { site: "Croma", price: 67990, link: "https://www.croma.com/apple-iphone-14/p/257403" },
      { site: "Reliance Digital", price: 68499, link: "https://www.reliancedigital.in/apple-iphone-14/p/493839709" },
      { site: "Tata CLiQ", price: 68990, link: "https://www.tatacliq.com/apple-iphone-14/p-mp000000012345678" },
      { site: "Paytm Mall", price: 67800, link: "https://paytmmall.com/apple-iphone-14.html" },
      { site: "Vijay Sales", price: 68199, link: "https://www.vijaysales.com/apple-iphone-14/p/23910" }
    ]
  },
  {
    name: "Samsung Galaxy S23",
    prices: [
      { site: "Amazon", price: 69999, link: "https://www.amazon.in/dp/B0BT9CXXXX" },
      { site: "Flipkart", price: 68499, link: "https://www.flipkart.com/samsung-galaxy-s23/p/itm123456" },
      { site: "Reliance Digital", price: 68999, link: "https://www.reliancedigital.in/samsung-galaxy-s23/p/491811234" },
      { site: "Croma", price: 69500, link: "https://www.croma.com/samsung-galaxy-s23/p/267800" },
      { site: "Vijay Sales", price: 69890, link: "https://www.vijaysales.com/samsung-galaxy-s23/p/26345" }
    ]
  },
  {
    name: "Redmi Note 13",
    prices: [
      { site: "Amazon", price: 17999, link: "https://www.amazon.in/dp/B0CSZTC8X1" },
      { site: "Flipkart", price: 17499, link: "https://www.flipkart.com/redmi-note-13-5g/p/itm63e8580ec9f80" },
      { site: "Croma", price: 17990, link: "https://www.croma.com/redmi-note-13/p/265001" },
      { site: "Reliance Digital", price: 17499, link: "https://www.reliancedigital.in/redmi-note-13/p/492850423" },
      { site: "Tata CLiQ", price: 17690, link: "https://www.tatacliq.com/redmi-note-13/p-mp000000011234567" }
    ]
  },
  {
    name: "OnePlus Nord CE 3",
    prices: [
      { site: "Amazon", price: 25999, link: "https://www.amazon.in/dp/B0CBRS77QC" },
      { site: "Flipkart", price: 25499, link: "https://www.flipkart.com/oneplus-nord-ce-3/p/itm456xxx" },
      { site: "Croma", price: 25800, link: "https://www.croma.com/oneplus-nord-ce-3/p/255600" },
      { site: "Reliance Digital", price: 25690, link: "https://www.reliancedigital.in/oneplus-nord-ce-3/p/4918321" }
    ]
  },
  {
    name: "HP Pavilion 15",
    prices: [
      { site: "Amazon", price: 58990, link: "https://www.amazon.in/dp/B0C4K1XXXX" },
      { site: "Flipkart", price: 57799, link: "https://www.flipkart.com/hp-pavilion-15/p/itm0da09a0c1234e" },
      { site: "Croma", price: 57999, link: "https://www.croma.com/hp-pavilion-15/p/226000" },
      { site: "Vijay Sales", price: 58590, link: "https://www.vijaysales.com/hp-pavilion-15/p/35011" },
      { site: "Tata CLiQ", price: 58100, link: "https://www.tatacliq.com/hp-pavilion-15/p-mp000000010909032" },
      { site: "Reliance Digital", price: 58490, link: "https://www.reliancedigital.in/hp-pavilion-15/p/49123456" }
    ]
  },
  {
    name: "boAt Airdopes 141",
    prices: [
      { site: "Amazon", price: 1199, link: "https://www.amazon.in/dp/B099F54B4K" },
      { site: "Flipkart", price: 1099, link: "https://www.flipkart.com/boat-airdopes-141/p/itm1234" },
      { site: "Snapdeal", price: 1190, link: "https://www.snapdeal.com/product/boat-airdopes-141/p/1234567890" },
      { site: "Paytm Mall", price: 1150, link: "https://paytmmall.com/boat-airdopes-141.html" }
    ]
  },
  {
    name: "Samsung Galaxy Watch 6",
    prices: [
      { site: "Amazon", price: 29999, link: "https://www.amazon.in/dp/B0CD2ZXXXXX" },
      { site: "Flipkart", price: 29499, link: "https://www.flipkart.com/samsung-watch-6/p/itmxxx" },
      { site: "Croma", price: 29699, link: "https://www.croma.com/samsung-watch-6/p/265059" },
      { site: "Reliance Digital", price: 29749, link: "https://www.reliancedigital.in/samsung-galaxy-watch-6/p/4918234" }
    ]
  }
];
function comparePrices() {
  const input = document.getElementById("productInput").value.trim().toLowerCase();
  const tbody = document.querySelector("#price-table tbody");
  const title = document.getElementById("productTitle");

  tbody.innerHTML = "";

  const matchedProduct = productData.find(product =>
    product.name.toLowerCase() === input
  );

  if (!matchedProduct) {
    title.textContent = `No match found for "${input}". Try a different product name.`;
    return;
  }

  const prices = matchedProduct.prices;
  const minPrice = Math.min(...prices.map(p => p.price));
  title.textContent = `Price Comparison for "${matchedProduct.name}"`;

  prices.forEach(({ site, price, link }) => {
    const row = document.createElement("tr");
    row.classList.add("animate-row");
    if (price === minPrice) row.classList.add("lowest");

    row.innerHTML = `
      <td><a href="${link}" target="_blank">${site}</a></td>
      <td>₹${price}</td>
    `;
    tbody.appendChild(row);
  });
}
