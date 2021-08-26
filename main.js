$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
});

//COOKIE CONSENT
//(Classic)
const CookieConsent = window.CookieConsent;

// Initialize the popup and open it
const cc = new CookieConsent({
  title: "I use cookies 🍪",
  // ... other options
  description: `Click “Accept” to enable me to use cookies to personalize
                this site. Customize your preferences in your
                Cookie Settings or click “Reject” if you do not want me
                to use cookies for this purpose. Learn more in my
                <a href="https://www.ninabraunger.de/datenschutz.html">Cookie Notice</a>.`,

  buttons: {
    acceptAll: "Accept",
    acceptSelected: "Accept Cookies",
    reject: "Reject",
    showSettings: "Cookies settings",
    hideSettings: "Hide",
  },

  categories: {
    essentials: {
      label: "Essential",
      description: `Essential cookies are necessary for features which
                    are essential to your use of my site or services,
                    such as account login, authentication, and site security.`,
      checked: true,
      mandatory: true,
    },
    analytics: {
      label: "Analytics",
      description: `Analytics cookies allow me to analyze your visits and
                    actions on our websites, and offer you a more relevant
                    experience.`,
    },
  },

  cookie: {
    // Name of the cookie storing the consent state
    name: "cookie_consent",

    // If null, will take `location.hostname` by default
    domain: null,

    // Duration of the consent
    expiryDays: 365,

    // If true, the cookies will only be allowed over https
    secure: false,

    // See https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    sameSite: "Lax",
  },
});

// Events
cc.on("accept", (cc /* your CookieConsent instance */) =>
  console.log("Accepted !")
);
cc.on("reject", (cc) => console.log("Rejected !"));
cc.on("change", (cc) => console.log("Any change !"));
// All events can also be binded to `CookieConsent`.

// Main accessors
console.log(cc.status); // accepted, rejected
console.log(cc.acceptedCategories); // ["essential", "analytics"]
// also available under `CookieConsent`

// Re-open the popup to allow user to change its consent
cc.open();
// also available under `CookieConsent` once initialized
