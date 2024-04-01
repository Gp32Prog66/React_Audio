import tadaSound from "./AudioClips/tada.wav"
import xylophoneSound from "./AudioClips/xylophone.wav"




function App()
{
  function play()
  {
    new Audio(tadaSound).play()
    new Audio(xylophoneSound)
  }

  return (
    <div className="App">
      <button
      onClick={play}
      >
        Play
      </button>
    </div>
  )
}

export default App