"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));
var value = 0;
var title = "{BracketProto}";
var version = "0.0.2";
var subtitle = "{PROJBRCKT V" + version + " | BracketProto.com }" 


function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

//usage:
readTextFile("./events.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
});


function update() {
  value = value + 1;
  var element = /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "headertext"
      },
      /*#__PURE__*/ React.createElement("h1", null, title)
    ),
    /*#__PURE__*/ React.createElement("br", null),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "smalltext"
      },
      /*#__PURE__*/ React.createElement("p", null, subtitle)
    ),
    /*#__PURE__*/ React.createElement("br", null),
    /*#__PURE__*/ React.createElement("iframe", {
      src: "https://lanyard.cnrad.dev/api/530036821707718678",
      frameBorder: "0",
      height: "250px",
      width: "450px"
    }),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "sameline"
      },
            /*#__PURE__*/ React.createElement(
              "h2",
              null,
              "About me"
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        null,
        "Hi, I'm Bracket!"
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        null,
        "I'm a furry from the UK that makes some content"
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        null,
        "and makes projects such as websites, games, and discord bots!"
      ),
      /*#__PURE__*/ React.createElement("img", {
        class: "imgclass2",
        src: "./img/BracketSit.png"
      })
    ),
    /*#__PURE__*/ React.createElement(
      "h1",
      null,
      "This page is made using the React JavaScript library with HTML and CSS"
    ),
    /*#__PURE__*/ React.createElement(
      "h2",
      null,
      "It has been ",
      value,
      " seconds since you opened this page"
    ),
    /*#__PURE__*/ React.createElement(
      "a",
      {
        class: "btn",
        href: "https://reactjs.org/"
      },
      "\u2800React Documentation\u2800"
    ),
    /*#__PURE__*/ React.createElement("br", null),
    /*#__PURE__*/ React.createElement("br", null),
    /*#__PURE__*/ React.createElement("br", null),
    /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          class: "events"
        },
        /*#__PURE__*/ React.createElement(
        "h1",
        null,
        "Events"
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "section"
      },
      /*#__PURE__*/ React.createElement(
        "h1",
        null,
        "Bracket Proto - References"
      ),
      /*#__PURE__*/ React.createElement("img", {
        width: "30%",
        src: "./img/ref.png"
      }),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          class: "sketchfab-embed-wrapper"
        },
        " ",
        /*#__PURE__*/ React.createElement(
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
            src: "https://sketchfab.com/models/24995bdd8d7349709e8658e65a56204e/embed?autospin=1&autostart=1&ui_hint=0&ui_theme=dark"
          },
          " "
        ),
        " ",
        /*#__PURE__*/ React.createElement("p", {})
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "section2"
      },
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("h1", null, "Discord"),
      /*#__PURE__*/ React.createElement(
        "a",
        {
          class: "btn",
          href: "https://discord.gg/9EWz4tekRR"
        },
        "\u2800Join the community!\u2800"
      ),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement(
        "widgetbot",
        {
          server: "929955650237251594",
          channel: "929955830911086673",
          width: "100%",
          height: "500"
        },
        /*#__PURE__*/ React.createElement("iframe", {
          title: "WidgetBot Discord chat embed",
          src: "https://e.widgetbot.io/channels/929955650237251594/929955830911086673/?api=db66bb54-dc8b-424f-b181-6a6d6459ff5f",
          frameBorder: "0",
          width: "100%",
          height: "75%"
        })
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "section3"
      },
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("h1", null, "Twitch"),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("iframe", {
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
    /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "section4",
        id: "4"
      },
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("h1", null, "Donate"),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/
    ),
        /*#__PURE__*/
React.createElement(
  "div",
  {
    class: "section5"
  },
  /*#__PURE__*/ React.createElement("h1", null, "Other Links"),
  /*#__PURE__*/ React.createElement("a", {
    href: "https://twitch.tv/bracketproto"
  },
  /*#__PURE__*/ React.createElement("img", {
    class: "imgclass",
    src: "./Assets/images/twitch.png",
    alt: "Youtube",
  })),
  /*#__PURE__*/ React.createElement("a", {
    href: "https://twitter.com/bracketproto"
  },
  /*#__PURE__*/ React.createElement("img", {
    class: "imgclass",
    src: "./Assets/images/twitter.png",
    alt: "Youtube",
  })),
  /*#__PURE__*/ React.createElement("a", {
    href: "https://youtube.com/bracketproto"
  },
  /*#__PURE__*/ React.createElement("img", {
    class: "imgclass",
    src: "./Assets/images/yt.png",
    alt: "Youtube",
  })),
    /*#__PURE__*/ React.createElement("a", {
      href: "https://discord.com/invite/9EWz4tekRR"
    },
    /*#__PURE__*/ React.createElement("img", {
      class: "imgclass",
      src: "./Assets/images/discord.png",
      alt: "Youtube",
    })),
  /*#__PURE__*/ React.createElement("br", null),
  "2021-2022 BracketProto \xA9 All Rights Reserved."
)
  );
  root.render(element);
}

setInterval(update, 1000);
