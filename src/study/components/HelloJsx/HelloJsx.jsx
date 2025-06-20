/**
 *      [[ JSX의 특징 ]]
 * 
 */
function HelloJsx() {

    // 1. 태그가 열리면 꼭 닫혀야한다.
    const jsx1 = <div>
        <p>JSX의 특징</p>
        <input type="text" />
    </div>

    // 2. 두개 이상의 JSX는 하나의 JSX로 감싸야한다.
    const jsx2 = <div>
        <div></div>
        <div></div>
    </div>

    // 3. 변수, 상수, 리스트, 값 등을 표현하려면 {}로 감싸서 표현한다.
    const name = '이진혁';
    const age = 28;
    const jsx3 = <div>
        <h3>이름: {name}</h3>
        <h3>나이: {age + 1}</h3>
    </div>

    // 4. 2번에서 2개이상의 jsx는 하나로 감싸야한다고 배움.
    //    이때, 그룹을 위해 만들어진 태그가 있음. <></>
    const jsx4 = <>
        <div></div>
        <div></div>
    </>
    const jsx5 = <>
        <div></div>
        <div></div>
    </>
    const jsx6 = <div>
        {jsx4}
        {jsx5}
    </div>

    // 리스트 표현하기
    const nameList = [
        <div>이진혁</div>,
        <div>이진혁2</div>,
        <div>이진혁3</div>,
        <div>이진혁4</div>,
    ];

    const nameList2 = [
        "이진혁",
        "이진혁2",
        "이진혁3",
        "이진혁",
    ];

    return <div>
        {jsx1}
        {jsx2}
        {jsx3}
        {nameList}
        {nameList2}
    </div>
}

export default HelloJsx;