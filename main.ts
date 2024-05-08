sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`niveau2`)
let mySprite = sprites.create(img`
    ................................................................................
    555555555555555.................................................................
    55fff55555fff55.................................................................
    55fff55555fff55.................................................................
    55fff55555fff55.................................................................
    555555555555555.................................................................
    555555fff555555.................................................................
    555555fff555555.................................................................
    555555fff555555.................................................................
    555555555555555.................................................................
    55fff55555fff55.................................................................
    55ffff555ffff55.................................................................
    55fffffffffff55.................................................................
    555fffffffff555.................................................................
    5555fffffff5555.................................................................
    555555555555555.................................................................
    `, SpriteKind.Player)
mySprite.vx = 90
mySprite.ay = 500
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 15))
scene.cameraFollowSprite(mySprite)
for (let valeur of tiles.getTilesByType(assets.tile`myTile0`)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, valeur)
    tiles.setTileAt(valeur, assets.tile`transparency16`)
}
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Top)) {
        game.gameOver(false)
    }
    if (controller.anyButton.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy = -200
        }
    }
})
