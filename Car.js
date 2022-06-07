AFRAME.registerComponent('rotate-car',{
    schema : {
        rotateY : { type : "number", default : 1},
    },
    tick : function(){
        this.data.rotateY += 0.1
        var rotate = this.el.getAttribute("rotation")
        rotate.y = this.data.rotateY
        this.el.setAttribute("rotation", { y : rotate.y})
    }
});

AFRAME.registerComponent('move-car', {
    schema : {
        moveY : { type : 'number', default : 0 }
    },
    tick : function(){
        window.addEventListener("click", (e) => {
            this.data.moveY += 0.0001
        })
        var pos = this.el.getAttribute('position')
        pos.y = pos.y + this.data.moveY
        this.el.setAttribute('position', {x : pos.x, y : pos.y, z : pos.z})
    }
})
