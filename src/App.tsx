import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  // Call `useUnityContext` inside the component
  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/game/runner game webgl.loader.js",
    dataUrl: "/assets/game/runner game webgl.data",
    frameworkUrl: "/assets/game/runner game webgl.framework.js",
    codeUrl: "/assets/game/runner game webgl.wasm",
  });

  return (
    <div>
      <h1>React Unity WebGL</h1>
      <Unity unityProvider={unityProvider} className="unity-canvas" />
    </div>
  );
}

export default App;
