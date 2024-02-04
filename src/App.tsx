import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const nahui = new Audio('/idinahui.mp3')
    const dr = new Audio('/alegroznaal.mp3')
    const yaySound = new Audio('/yay.mp3')

    const [text, setText] = useState('с днем рождения катя это мое поздравление')
    const [src, setSrc] = useState('/katya.jpg')
    const [dis, setDis] = useState<boolean>(true)

    const startIdi = () => {
        setDis(true)
        setSrc('/bad.jpg')
        nahui.play()
        setTimeout(() => {
            setDis(false)
        }, 1500)
    }

    const startYay = () => {
        setDis(true)
        setSrc('/good.jpg')
        yaySound.play()
        setTimeout(() => {
            setDis(false)
        }, 7000)
    }

    const start = () => {

    }

    const fireFunc = async (text: any, func: any, img: any) => {
        setText(text)
        await func()
        setSrc(img)
    }

    useEffect(() => {
        dr.play()
    }, [])

    return (
        <div className="App">
            <div id='container'>
                <p className='text'>{text}</p>
                <button className='button' onClick={() => fireFunc('оружие убивает людей, это финиш, пора мыть посуду', startIdi, '/finish.jpg')} disabled={dis}>ПОЛУЧИТЬ ПОДАРОК!!!!!</button>
                <img src={src} id='img' onClick={() => {
                    yaySound.play()
                    setDis(false)
                    setText('желаю тебе:...')
                    setSrc('/guns.jpg')
                }}/>
            </div>
        </div>
    );
}

export default App