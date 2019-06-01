function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const { Component, createElement, PropTypes } = React;

//Source Code Here
const source = `

<div class="row">
{{#each images}}
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 single_portfolio_text mt-4 mb-4">
  <img src="{{img}}" class="img-fluid" alt="Responsive image" />
  <div class="portfolio_images_overlay text-center">
    <h6 class="clrd-font mb-5">{{name}}</h6>
		<p class="clrd-font">{{description}}</p>
  </div>
</div>
{{/each}}
</div>

`;
// Handerbars compile source;
const template = Handlebars.compile(source);

class StarshipEnterprise extends Component {
  render() {
    return React.createElement("div", {
      className: "container",
      dangerouslySetInnerHTML: { __html: template(this.props) }
    });
  }
}
_defineProperty(StarshipEnterprise, "propTypes", {
  name: PropTypes.string,
  employer: PropTypes.string,
  kids: PropTypes.arrayOf(PropTypes.object)
});
_defineProperty(StarshipEnterprise, "defaultProps", {
  images: [
    {
      img:
        "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Mountains",
      description:
        "a large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill."
    },
    {
      img:
        "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Lighthouse",
      description:
        "a tower or other structure containing a beacon light to warn or guide ships at sea."
    },
    {
      img:
        "https://images.pexels.com/photos/532860/pexels-photo-532860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Castle",
      description:
        "a large building or group of buildings fortified against attack with thick walls, battlements, towers, and in many cases a moat."
    },
    {
      img:
        "https://images.pexels.com/photos/1533913/pexels-photo-1533913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Church",
      description: "a building used for public Christian worship."
    },
    {
      img:
        "https://images.pexels.com/photos/371379/pexels-photo-371379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Old Barn",
      description:
        "a large farm building used for storing grain, hay, or straw or for housing livestock."
    },
    {
      img:
        "https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Maple Leaf",
      description: "the leaf of the maple, used as an emblem of Canada."
    },
    {
      img:
        "https://images.pexels.com/photos/6468/animal-brown-horse.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Horse",
      description:
        "a solid-hoofed plant-eating domesticated mammal with a flowing mane and tail, used for riding, racing, and to carry and pull loads."
    },
    {
      img:
        "https://images.pexels.com/photos/1068554/pexels-photo-1068554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Bear",
      description:
        "Bears are classified as caniforms, or doglike carnivorans, with the pinnipeds being their closest living relatives."
    }
  ]
});

ReactDOM.render(
  createElement(StarshipEnterprise),
  document.getElementById("app")
);
