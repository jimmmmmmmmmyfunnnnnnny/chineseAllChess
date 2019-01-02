cc.Class({
    extends: cc.Component,

    properties: {
        blcakPrefab:cc.Prefab,
        withePrefab:cc.Prefab,
        gameBg:cc.Sprite,
        gobangBg:cc.Sprite,
        moveChess:cc.Sprite,

    },
    start () {
        console.log(this.moveChess)
        
        this.initMap()
        this.moveChessToMap()
        

    },
    initMap:function(){

        //(-265,-272), (-228,-272)
        this.chessMap = []
        for (let i = 1;i<=15;i++){
            for(let j = 1; j<=15; j++){
                let pos = {
                    x:-265+i*35.4,
                    y:-272+j*35.4
                }
                this.chessMap.push({
                    pos:pos
                });
                console.log("j = "+j+"i"+i)
            }
        }
        console.log( this.chessMap)
        
    },
    setChessMap:function(pos) {
        for (let i = 0;i<this.chessMap.length; i++){
            let pos_1 = cc.v2(this.chessMap[i].x, this.chessMap[i].y) 
            if (pos_1.fuzzyEquals(pos, 15)){
                let PrefabType = this.blcakPrefab
                let chess = cc.instantiate(PrefabType)
                this.gobangBg.node.addChild(chess)
                chess.position = pos_1
                console.log("pos_1"+pos_1)
            }
        }
    },
    moveChessToMap:function(){
        this.node.on(cc.Node.EventType.TOUCH_START, function(event){     
            let touchPos =  this.node.convertToNodeSpaceAR(event.getLocation())
            this.moveChess.node.position = touchPos
        }.bind(this), this.node);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event){
            let touchPos =  this.node.convertToNodeSpaceAR(event.getLocation())
            this.moveChess.node.position = touchPos
        }.bind(this), this.node);

        this.node.on(cc.Node.EventType.TOUCH_END, function(event){
            let touchPos =  this.node.convertToNodeSpaceAR(event.getLocation())
            this.moveChess.node.position = touchPos
            this.setChessMap(touchPos)
            console.log("moveChess pos ="+this.moveChess.node.position);
        }.bind(this), this.node)
    }

    // update (dt) {},
});
