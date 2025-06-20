// 매개변수에 들어올때부터 구조분해
function Props2({a, b, ...나머지}) {
    return <div>
        <p>a - {a}</p>
        <p>b - {b}</p>
    </div>
}

export default Props2;