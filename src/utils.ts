export function getAngle(dx:number,dy:number):number {
  let theta = Math.atan2(dy, dx)
  theta *= 180 / Math.PI
  return theta
}


export function getLength(val:number) {
  return val.toString().length
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF'
  const initialColor = '#'
  return Array.from({ length: 6 }).reduce(() => {
    return initialColor + letters[Math.floor(Math.random() * 16)]
  }, initialColor)

}

