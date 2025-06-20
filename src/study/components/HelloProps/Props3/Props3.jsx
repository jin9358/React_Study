// 자식 요소 전달방법
// 1. props 속성을 사용해서 전달
// 2. props에 내장되어진 children 속성을 사용해서 전달
function Props3({ch1, children}) {
    // const ch1 = <h2>chapter 1</h2>

    return <div>
        <h1>자식요소 학습하기</h1>
        {ch1}
        {children}
    </div>
}

export default Props3;

function fx1() {
    const obj = {
        data1: "d1",
        data2: "d2",
    }

    const objData1 = obj.data1;

    const {data1} = obj;
    console.log(objData1);
    console.log(objData1);
    console.log(objData1);
    console.log(objData1);
    console.log(objData1);
    console.log(objData1);

    function fx2({oData1, oData2, oData3, oData4}) {

    }

    fx2(obj);
}