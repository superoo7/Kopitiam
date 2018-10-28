export const getImgUrl = (name: string) => {
  const img: { [name: string]: string } = {
    bitrocker2020:
      'https://steemitimages.com/DQmW3nMXAW7NdX4B29MhFxDDj7KVEM6f16aLum16sdJRHTQ/Bit_00_COVER.jpg'
  }
  return img[name]
}
