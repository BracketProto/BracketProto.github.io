"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));
var value = 0;
var title = "{BracketProto}";
var version = "0.0.4";
var subtitle = "{PROJBRCKT V" + version + " | BracketProto.com }";



function update() {
  value = value + 1;
  var element =React.createElement(
    "div",
    null,
   React.createElement(
      "div",
      {
        class: "headertext"
      },
     React.createElement("h1", null, title)
    ),
   React.createElement("br", null),
   React.createElement(
      "div",
      {
        class: "smalltext"
      },
     React.createElement("p", null, subtitle)
    ),
   React.createElement("br", null),
   React.createElement("iframe", {
      src: "https://lanyard.cnrad.dev/api/530036821707718678",
      frameBorder: "0",
      height: "250px",
      width: "450px"
    }),
React.createElement("br", null),
React.createElement("iframe", {
src: "https://store.steampowered.com/widget/2504900/",
frameBorder: "0",
height: "646",
width: "190"
}),
React.createElement("br", null),
   React.createElement(
      "div",
      {
        class: "sameline"
      },
     React.createElement("h2", null, "About me"),
     React.createElement("p", null, "Hi, I'm Bracket!"),
     React.createElement(
        "p",
        null,
        "I'm a furry from the UK that makes some content"
      ),
     React.createElement(
        "p",
        null,
        "and makes projects such as websites, games, and discord bots!"
      ),
     React.createElement("img", {
        class: "imgclass2",
        src: "./img/BracketSit.png"
      })
    ),
   React.createElement(
      "h1",
      null,
      "This page is made using the React JavaScript library with HTML and CSS"
    ),
   React.createElement(
      "h2",
      null,
      "It has been ",
      value,
      " seconds since you opened this page"
    ),
   React.createElement(
      "a",
      {
        class: "btn",
        href: "https://reactjs.org/"
      },
      "\u2800React Documentation\u2800"
    ),
   React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
	/*#__PURE__*/ React.createElement("br", null),
   React.createElement(
      "div",
      {
        class: "section"
      },
     React.createElement(
        "h1",
        null,
        "Bracket Proto - References"
      ),
     React.createElement("img", {
        width: "50%",
        src: "./img/ref.png"
      }),
     React.createElement(
        "div",
        {
          class: "sketchfab-embed-wrapper"
        },
        " ",
       React.createElement(
          "iframe",
          {
            title: "NKD Protogen 3_0",
            frameborder: "0",
            allowfullscreen: true,
            width: "40%",
            height: "40%",
            mozallowfullscreen: "true",
            webkitallowfullscreen: "true",
            allow: "autoplay; fullscreen; xr-spatial-tracking",
            "xr-spatial-tracking": true,
            "execution-while-out-of-viewport": true,
            "execution-while-not-rendered": true,
            "web-share": true,
            src: "https://sketchfab.com/models/24995bdd8d7349709e8658e65a56204e/embed?autospin=1&autostart=0&ui_hint=0&ui_theme=dark"
          },
          " "
        ),
        " ",
       React.createElement("p", {})
      )
    ),
   React.createElement(
      "div",
      {
        class: "section2"
      },
     React.createElement("br", null),
     React.createElement("h1", null, "Discord"),
     React.createElement(
        "a",
        {
          class: "btn",
          href: "https://discord.gg/9EWz4tekRR"
        },
        "\u2800Join the community!\u2800"
      ),
     React.createElement("br", null),
     React.createElement("br", null),
     React.createElement("br", null),
     React.createElement(
        "widgetbot",
        {
          server: "929955650237251594",
          channel: "929955830911086673",
          width: "100%",
          height: "500"
        },
       React.createElement("iframe", {
          title: "WidgetBot Discord chat embed",
          src: "https://e.widgetbot.io/channels/929955650237251594/929955830911086673/?api=db66bb54-dc8b-424f-b181-6a6d6459ff5f",
          frameBorder: "0",
          width: "100%",
          height: "75%"
        })
      )
    ),
   React.createElement(
      "div",
      {
        class: "section3"
      },
     React.createElement("br", null),
     React.createElement("h1", null, "Twitch"),
     React.createElement("br", null),
     React.createElement("iframe", {
        src: "https://embed.twitch.tv?autoplay=true&channel=bracketproto&height=480&layout=video&parent=bracketproto.com&referrer=https%3A%2F%2Fbracketproto.com%2F&width=854",
        allowfullscreen: "",
        scrolling: "no",
        frameborder: "0",
        allow: "autoplay; fullscreen",
        title: "Twitch",
        sandbox:
          "allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        width: "854",
        height: "480"
      })
    ),
   React.createElement(
      "div",
      {
        class: "section4",
        id: "4"
      },
     React.createElement("br", null),
     React.createElement("h1", null, "Donate"),
     React.createElement("br", null)
      /*#__PURE__*/
    ),
   React.createElement(
      "div",
      {
        class: "section5"
      },
     React.createElement("h1", null, "Other Links"),
     React.createElement(
        "a",
        {
          href: "https://twitch.tv/bracketproto"
        },
       React.createElement("img", {
          class: "imgclass",
          src: "./Assets/images/twitch.png",
          alt: "Youtube"
        })
      ),
     React.createElement(
        "a",
        {
          href: "https://twitter.com/bracketproto"
        },
       React.createElement("img", {
          class: "imgclass",
          src: "./Assets/images/twitter.png",
          alt: "Youtube"
        })
      ),
     React.createElement(
        "a",
        {
          href: "https://youtube.com/bracketproto"
        },
       React.createElement("img", {
          class: "imgclass",
          src: "./Assets/images/yt.png",
          alt: "Youtube"
        })
      ),
     React.createElement(
        "a",
        {
          href: "https://discord.com/invite/9EWz4tekRR"
        },
       React.createElement("img", {
          class: "imgclass",
          src: "./Assets/images/discord.png",
          alt: "Youtube"
        })
      )
    )
  );
  root.render(element);
}

setInterval(update, 1000);
