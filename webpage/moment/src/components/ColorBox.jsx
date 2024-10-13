/* eslint-disable import/no-anonymous-default-export */
export default function({color}) {
    const style = {
        backgroundColor: color
    }

    return <div
        className='color-box'
        style={style}
    />
}