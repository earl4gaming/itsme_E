const text =
"I am the sun I am the brightest thing in this space and I fell in love with a beautiful star from a dangerous place But, how can I reach you? If the asteroids around you are blocking my way in having you. I can call myself as the sun - probably hot and bright Radiant positivity is all that I can provide I can make any black hole into a bright galaxy and I can make love explode like the Big Bang Theory but, Is that feature enough to call you my one and only? I got my eyes on you, the brightest star in the night sky Sirius? Betelgeuse? Arcturus? No, you're brighter than them Even NASA can't determine how bright you are That's why, I can't have you  That's why, I can't go near you and that's why, I can't be with you Because, you're too bright to have and too hard to love. You know why I can't have you? I'm not talking about my light in comparison to yours well, we're just not compatible I guess. Your type is the opposite of me and my whole self - the other. And there's Altair totally my opposite and totally your type you even do childish things with Altair, like growing your own stars. So, here I am, watching you smile from afar But, I don't really care - just kidding I really wish I were Altair. If you would give me a chance I would do crazy things just to have you I would steal Saturn's ring and put it in your finger I would protect you, if the universe is in danger. In the universe, there are billions of stars and I fell in love with you A star I can't reach and a star I can't have But, watching you with Altair, it makes me sob Because this is not what I wish for in the heavens above. You are so Very, very far It really is hard, falling in love with a distant star."
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
