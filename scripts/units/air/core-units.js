const moleculeUnit = extend(UnitType, "molecule", {});
moleculeUnit.constructor = () => extend(PayloadUnit, {});
moleculeUnit.defaultController = () => extend(BuilderAI, {});
/*
let fierosT1deco = extend(DrawPart, {
  draw(params) {
	let rotate = params.rotation * Math.PI / 180
    Draw.z(110)
    Draw.color(unit.team.color) // fuck you
    Fill.circle(params.x-(Math.cos(Math.PI+rotate)*-6.5), params.y-(Math.sin(Math.PI+rotate)*-6.5), 2.5+(Math.sin(Time.globalTime/15)/2));
  }
})
fierosT1.parts.add(fierosT1deco)
*/
let moleculedeco = extend(SuppressionFieldAbility, {
  display: false,
  draw(unit) {
	let rotate = unit.rotation * Math.PI / 180
    Draw.z(110)
    Draw.color(Color.valueOf("#9cd4f8"))
    Lines.stroke(1)
    Lines.circle(unit.x, unit.y, 12+(Math.sin(Time.globalTime/30)/4))
  },
  update(unit) {}
})
moleculeUnit.abilities.add(moleculedeco)
