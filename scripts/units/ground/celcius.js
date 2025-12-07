const celciusUnit = extend(UnitType, "celcius", {});
celciusUnit.constructor = () => extend(MechUnit, {});

let celciusdeco = extend(SuppressionFieldAbility, {
  display: false,
  draw(unit) {
	let rotate = unit.rotation
    Draw.z(110)
    Draw.color(Color.valueOf("#9cd4f8"))
    Lines.stroke(1)
    Lines.rect(unit.x-10, unit.y-10, 20, 20+(Math.sin(Time.globalTime/30)/4))
  },
  update(unit) {}
})
celciusUnit.abilities.add(celciusdeco)
