var VRMarkup = require('@mozvr/vr-markup');

var THREE = VRMarkup.THREE;
var VRObject = VRMarkup.VRObject;

document.registerElement(
  'vr-cube',
  {
    prototype: Object.create(
      VRObject.prototype, {
        createdCallback: {
          value: function () {
            var material = this.getMaterial();
            var geometry = this.getGeometry();
            this.object3D = new THREE.Mesh(geometry, material);
            this.load();
          }
        },

        attributeChangedCallback: {
          value: function () {
            var material = this.getMaterial();
            var geometry = this.getGeometry();
            this.object3D.geometry = geometry;
            this.object3D.material = material;
          }
        },

        getGeometry: {
          value: function () {
            var width = this.getAttribute('width', 5);
            var height = this.getAttribute('height', 5);
            var depth = this.getAttribute('depth', 5);
            return new THREE.BoxGeometry(width, height, depth);
          }
        },

        getMaterial: {
          value: function () {
            var color = this.getAttribute('color');
            var materialId = this.getAttribute('material');
            var materialEl;
            var material;

            if (materialId) {
              materialEl = materialId ? document.querySelector('#' + materialId) : {};
              material = materialEl.material;
              if (color) {
                material.color = new THREE.Color(color);
              }
            } else if (color) {
              material = new THREE.MeshPhongMaterial({color: color});
            } else {
              material = new THREE.MeshNormalMaterial();
            }

            return material;
          }
        }
      })
  }
);
