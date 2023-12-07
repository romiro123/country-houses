import { Fancybox } from "@fancyapps/ui";

Fancybox.bind('[data-fancybox]', {
  // Your custom options
  contentClick: "iterateZoom",
  Images: {
    Panzoom: {
      maxScale: 1,
    },
  },

});
