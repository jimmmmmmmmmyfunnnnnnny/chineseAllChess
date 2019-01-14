"use strict";
cc._RF.push(module, '2213a6j4K5FEp4ZjWD5VZUy', 'goBangGame');
// Script/goBangGame.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        blcakPrefab: cc.Prefab,
        withePrefab: cc.Prefab,
        gameBg: cc.Sprite,
        gobangBg: cc.Sprite,
        moveChess: cc.Sprite

    },
    start: function start() {
        console.log(this.moveChess);

        this.initMap();
        this.moveChessToMap();
    },

    initMap: function initMap() {

        //(-265,-272), (-228,-272)
        this.chessMap = [];
        for (var i = 1; i <= 15; i++) {
            for (var j = 1; j <= 15; j++) {
                var pos = {
                    x: -265 + i * 35.4,
                    y: -272 + j * 35.4
                };
                this.chessMap.push({
                    pos: pos
                });
                console.log("j = " + j + "i" + i);
            }
        }
        console.log(this.chessMap);
    },
    setChessMap: function setChessMap(pos) {
        for (var i = 0; i < this.chessMap.length; i++) {
            var pos_1 = cc.v2(this.chessMap[i].x, this.chessMap[i].y);
            if (pos_1.fuzzyEquals(pos, 15)) {
                var PrefabType = this.blcakPrefab;
                var chess = cc.instantiate(PrefabType);
                this.gobangBg.node.addChild(chess);
                chess.position = pos_1;
                console.log("pos_1" + pos_1);
            }
        }
    },
    moveChessToMap: function moveChessToMap() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
            this.moveChess.node.position = touchPos;
        }.bind(this), this.node);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
            this.moveChess.node.position = touchPos;
        }.bind(this), this.node);

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
            this.moveChess.node.position = touchPos;
            this.setChessMap(touchPos);
            console.log("moveChess pos =" + this.moveChess.node.position);
        }.bind(this), this.node);
    }

    // update (dt) {},
});

cc._RF.pop();