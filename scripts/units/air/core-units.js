const moleculeUnit = extend(UnitType, "molecule", {});
moleculeUnit.constructor = () => extend(PayloadUnit, {});
moleculeUnit.defaultController = () => extend(BuilderAI, {}); //credit goes to coal deficit for the js stuff btw

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
