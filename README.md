# react-sound-controller

````
npm i react-sound-controller
````

npm 통해 패키지를 받고 시작하자.

```tsx
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SoundProvider>
      <App/>
    </SoundProvider>
  </React.StrictMode>
);
```

SoundProvider 하위노드에서는 useSound 훅이 사용 가능해진다.

```tsx
function App() {
  const {sound, setSound} = useSound();

  return (
    <div className="App">
      {sound}
    </div>
  );
}

export default App;
```

sound:boolean, sound = true or false 

```tsx
setSound(true) 
//or
setSound(false)
```

setSound 함수를 통해 sound 값을 갱신할 수 있음.

```tsx
if(sound){
 play()
}
```

sound 값에 따라 사운드를 출력, 미출력을 할 수 있다.
sound 값을 통해 간단하게 음소거 기능을 구현할 수 있다.