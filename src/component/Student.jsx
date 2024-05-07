function Student() {
  const data = [
    { id: "a1", name: "a", age: "20" },
    { id: "a2", name: "b", age: "30" },
    { id: "a3", name: "c", age: "40" },
  ];

  const stu = data.map((item) => { //item represent current item
    return <div key={item.id}>{`name: ${item.name} - age : ${item.age}`}</div>;
  });

  // const stu = data.map((item) => (
  //      <div key={item.id}>{`name: ${item.name} - age : ${item.age}`}</div>
  // ));

  return (
    <div>
      <h1>Student list</h1>
      {stu}
    </div>
  );
}
export default Student;
