import Props1 from "./Props1/Props1";
import Props2 from "./Props2/Props2";
import Props3 from "./Props3/Props3";

function HelloProps() {
    return <div>
        <Props1  />
        <Props2 a={"data1"} b={"data2"} c={"c"} d={"d"} />
        <Props2 a={"data3"} b={"data4"} />
        <Props2 a={10} b={20} />
        <Props3 ch1={<h2>chapter 1</h2>} />
        <Props3>
            <h2>chapter 2</h2>
        </Props3>
    </div>
}

export default HelloProps;