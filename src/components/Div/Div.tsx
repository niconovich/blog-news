import { useRef, useState } from 'react'

export const Div = () => {

    const COLORS = ['yellow', 'purple', 'green', 'blue', 'grey', 'yellow', 'purple', 'green', 'blue', 'grey']
    const [value, setValue] = useState('')
    const ref = useRef<any>(null)
    const onClick = () => {
        ref.current.scrollTo(0, value)
    }

    return (
        <div>
            <div>
                <input type='text' value={value}
                    // onChange={(e: any): any => setValue(+e.target.value)}
                />
                <button onClick={onClick}>ScrollTo</button>
            </div>
            <div>
                <div ref={ref}
                    style={{
                        maxHeight: '100px',
                        display: 'inline-block',
                        overflowY: 'scroll'}}
                    // onScroll={() => {setValue(Math.floor(ref.current.scrollTop))}}
                >
                    {COLORS.map(color => <div style={{background: color, width: '100px', height: '100px'}}>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
