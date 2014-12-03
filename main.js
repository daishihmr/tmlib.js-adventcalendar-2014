tm.main(function() {

    var app = tm.display.CanvasApp("#app");
    app.resize(500, 500);
    app.replaceScene(MainScene());
    app.run();

    // app.keyboard.element.addEventListener("keydown", function(e) {
    //     if (37 <= e.keyCode && e.keyCode <= 40 || e.keyCode === 32) {
    //         e.preventDefault();
    //     }
    // });
});

tm.define("MainScene", {
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();

        this.fromJSON({
            children: {
                fighter: {
                    type: "tm.display.TriangleShape",
                    init: [50, 50],
                    x: 250,
                    y: 250,
                    onenterframe: function(e) {
                        var kb = e.app.keyboard;
                        this.position.add(kb.getKeyDirection().mul(10));
                    },
                },
            },
        });
    },
});
