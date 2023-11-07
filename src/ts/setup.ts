export function setup(ctx: Modding.ModContext) {
  ctx.patch(Bank, 'addItem').replace((o, item, quant, logLost, found, ignoreSpace=false, notify=true, itemSource='Game.Unknown') => {
    if(item instanceof BoneItem 
        && item.name === 'Ash' 
        && this.player.equipment.slots.Amulet.item.name === "Bone Necklace" 
        && game.prayer.isUnlocked) {
      this.player.addPrayerPoints(item.prayerPoints * quant * 2);
      return true;
    }
    else {
      return o(item, quant, logLost, found, ignoreSpace, notify, itemSource);
    }
  });
}