class PentagramItemBehavior extends Sup.Behavior {
  princess: Sup.Actor;
  des: boolean = true;

  awake() {
    this.princess = Sup.getActor("Princess");
  }

  update() {
    
    if (!this.princess) {
      return;
    }
    
    if (!Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, this.princess.arcadeBody2D)) {
      return;
    }
    
    Game.canClone = true;
    Sup.Audio.playSound("Sound/CloneSound");
    
    if (this.des) {
      Game.destroyActor(this.actor, 1000);
      this.des = false;
    }
  }
}

Sup.registerBehavior(PentagramItemBehavior);
